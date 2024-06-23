import { defineStore } from "pinia";

export const useEpisodeStore = defineStore("episode", {
  state: () => ({
    isPLaying: false,
    audio: null,
    currentEpisodeTitle: null,
  }),
  actions: {
    loadEpisode(title) {
      this.currentEpisodeTitle = title;

      if (this.audio && this.audio.src) {
        this.audio.pause();
        this.isPlaying = false;
        this.audio.src = "";
      }

      this.audio = new Audio();
      this.audio.src = episode.audio;

      setTimeout(() => {
        this.isPlaying = true;
        this.audio.play();
      }, 200);
    },

    playOrPauseEpisode() {
      if (this.audio.paused) {
        this.isPlaying = true;
        this.audio.play();
      } else {
        this.isPLaying = false;
        this.audio.pause();
      }
    },

    playOrPauseThisEpisode(title) {
      if (
        !this.audio ||
        !this.audio.src ||
        this.currentEpisodeTitle.id !== track.id
      ) {
        this.loadEpisode(title);
        return;
      }
      this.playOrPauseEpisode();
    },
  },
});
