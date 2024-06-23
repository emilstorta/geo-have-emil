import { defineStore } from "pinia";
import { db } from "@/firebase/init.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export const useEpisodeStore = defineStore("episodeStore", {
  state: () => ({
    episodes: [],
    isLoading: false,
    error: null,
    currentPlayingEpisode: null,
    audioElement: null,
    isPlaying: false,
  }),
  actions: {
    async fetchEpisodes() {
      this.isLoading = true;
      this.error = null;
      try {
        const q = query(
          collection(db, "Episodes"),
          orderBy("sortingNumber", "asc")
        );
        const querySnapshot = await getDocs(q);

        // Map through the querySnapshot to create episode objects
        this.episodes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().Name,
          image: doc.data().imgURL,
          audio: doc.data().audioURL,
        }));
      } catch (err) {
        this.error = err;
        console.error("Error fetching episodes:", err);
      } finally {
        this.isLoading = false;
      }
    },
    playEpisode(episode) {
      // Check if the current episode is already playing
      if (this.currentPlayingEpisode?.id === episode.id && this.isPlaying) {
        return;
      }
      this.pauseEpisode(); // Pause any currently playing episode
      this.currentPlayingEpisode = episode;

      // Create a new Audio element or update the source if it already exists
      if (!this.audioElement) {
        this.audioElement = new Audio(episode.audio);
      } else {
        this.audioElement.src = episode.audio;
      }
      // Play the audio and handle any errors
      this.audioElement
        .play()
        .then(() => {
          this.isPlaying = true;
        })
        .catch((err) => {
          console.error("Error playing audio:", err);
        });
    },

    pauseEpisode() {
      if (this.audioElement) {
        this.audioElement.pause();
        this.isPlaying = false;
      }
    },

    togglePlayPause() {
      if (this.isPlaying) {
        this.pauseEpisode();
      } else {
        this.resumeEpisode();
      }
    },

    resumeEpisode() {
      if (this.audioElement) {
        this.audioElement
          .play()
          .then(() => {
            this.isPlaying = true;
          })
          .catch((err) => {
            console.error("Error resuming audio:", err);
          });
      }
    },

    playPreviousEpisode() {
      if (!this.currentPlayingEpisode || !this.episodes.length) {
        return;
      }

      const currentIndex = this.episodes.findIndex(
        (episode) => episode.id === this.currentPlayingEpisode.id
      );

      if (currentIndex > 0) {
        this.playEpisode(this.episodes[currentIndex - 1]);
      }
    },

    playNextEpisode() {
      if (!this.currentPlayingEpisode || !this.episodes.length) {
        return;
      }

      const currentIndex = this.episodes.findIndex(
        (episode) => episode.id === this.currentPlayingEpisode.id
      );

      if (currentIndex < this.episodes.length - 1) {
        this.playEpisode(this.episodes[currentIndex + 1]);
      }
    },
  },
  getters: {
    episodeIsPlaying: (state) => state.isPlaying,
  },
});
