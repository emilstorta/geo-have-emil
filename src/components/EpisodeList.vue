<template>
  <div id="listWrapper">
  <section class="mt-4 bg-white overflow-y-auto">
      <div class="flex items-center justify-between px-4 mb-2">
        <h2 class="text-xl font-bold">{{ $t('episodes') }}</h2>
        <div class="flex">
          <!-- Flag icons -->
          <img @click="changeLanguage('dk')" src="/src/assets/flag-dk.svg" alt="DK Flag" class="h-5 w-8 object-cover mx-1 cursor-pointer">
          <img @click="changeLanguage('en')" src="/src/assets/flag-gb.svg" alt="UK Flag" class="h-5 w-8 object-cover mx-1 cursor-pointer">
          <img @click="changeLanguage('de')" src="/src/assets/flag-gm.svg" alt="DE Flag" class="h-5 w-8 object-cover mx-1 cursor-pointer">
          <!-- Add other flags as needed -->
        </div>
      </div>
      <ul>
        <!-- Iterate over the episodes array to generate list items -->
        <li v-for="episode in episodes" :key="episode.id" class="flex items-center py-3 px-4 border-b border-gray-200">
          <img :src="episode.image" alt="" class="h-10 w-10 rounded-full object-cover">
          <button @click="playEpisode(episode.id)">
            <img src="/src/assets/play-icon.svg" :alt="$t('play')" class="h-5 w-5 ml-3">
          </button>
          <div class="ml-4 flex-grow">
            <!-- Use translation for the episode title -->
            <span class="font-semibold">{{ $t(`titles.${idToKeyMap[episode.id]}`) }}</span>
          </div>
          <button @click="toggleHeart(episode.id)" class="text-black hover:text-orange-500 transition-colors duration-300">
                <svg v-if="!heartStates[episode.id]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                    stroke="currentColor" class="h-5 w-5 text-orange-500">
                    <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </button>
          <button class="p-2">
            <img src="/src/assets/more-icon.svg" :alt="$t('more')" class="h-5 w-5">
          </button>
        </li>
      </ul>
      <AudioPlayer v-if="showComponent" :episodeTitle="currentEpisodeTitle" />
    </section>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import AudioPlayer from './AudioPlayer.vue';
  import {
    collection,
    getDocs,
    query, orderBy
  } from 'firebase/firestore';
  import { db } from '@/firebase/init.js';
  
  // i18n hook to manage it
  const { locale, t } = useI18n();

  // Function to change the language
  const changeLanguage = (lang) => {
  locale.value = lang;
};
  
  // Firestore reference and query for the Episodes collection
  const episodeListRef = collection(db, 'Episodes')
  const episodeListQuery = query(episodeListRef, orderBy("sortingNumber", "asc"));

// Mapping of Firestore document IDs to predefined translation keys
const idToKeyMap = {
  // Replace these IDs with the actual Firestore document IDs
  'CtidBpwWl2AKZfWCxfCV': 'episode1',
  'VsTgMdrUkaavcqr2i0gI': 'episode2',
  'XUuWNhQvBMrABDdgYaUs': 'episode3',
  'Qw4sy38fqVB8lmRMuWnd': 'episode4',
  'D4ednl1lkRLZHfFycgDh': 'episode5',
  'dC2CsP4uYI1EueAb4Vp3': 'episode6',
  '0mqDmkxU1hnV7k1w768b': 'episode7',
  'rLu1aDP2uqjfmAT4o73P': 'episode8',
  '8RQf8L7M4aVCI88DDiDN': 'episode9'
};
 
  // Initialize the episodes array with predefined episodes for mapping translations
  const episodes = ref([]);


  // Fetch episodes from Firestore and update the episodes array
  onMounted(async() => {
    const querySnapshot = await getDocs(episodeListQuery)
    let listEpisodes =[]
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data())
      const episode = {
        // Using Firestore document ID as the episode ID
        id: doc.id,       
        title: doc.data().Name,
        image: doc.data().imgURL,
        audio: doc.data().audioURL
      }
    listEpisodes.push(episode)
    })
    episodes.value = listEpisodes
  });

const heartStates = reactive({});

// Initialize heart states from local storage
episodes.value.forEach((episode) => {
  const storedIsFilled = localStorage.getItem(`heartIsFilled_${episode.id}`);
  heartStates[episode.id] = storedIsFilled !== null ? JSON.parse(storedIsFilled) : false;
});

const toggleHeart = (episodeId) => {
  heartStates[episodeId] = !heartStates[episodeId];
  // Save to local storage
  localStorage.setItem(`heartIsFilled_${episodeId}`, JSON.stringify(heartStates[episodeId]));
};


// Set state of audioplayer to hidden
  const showComponent = ref(false);

// Episode title in audioplayer set to be empty  
  const currentEpisodeTitle = ref('');
  const currentPlayingEpisode = ref(null);


  // Shows the child component AudioPlayer
  const playEpisode = (id) => {
  // Find the episode with the matching title
  const selectedEpisode = episodes.value.find((episode) => episode.id === id);
    if (selectedEpisode) {
    // Retrieve the audio URL
    const audioUrl = selectedEpisode.audio;

    // Create an <audio> element
    const audioElement = new Audio(audioUrl);

      if (currentPlayingEpisode.value) {
        currentPlayingEpisode.value.pause();
    }

    // Play the audio
      audioElement.play();
      currentPlayingEpisode.value = audioElement;
  } else {
    console.error(`Episode "${id}" not found.`);
  }

  // When play is pressed, sends episode title to child component af a prop
    currentEpisodeTitle.value = t(`titles.${idToKeyMap[id]}`);
  // Shows the child component AudioPlayer
    showComponent.value = true;
   // Makes the listWrapper bigger to fit with audioplayer
  const myDiv = document.getElementById("listWrapper")
  myDiv.style.height = "850px"; 
  };

  </script>
  
  <style scoped>
  
  </style>
  