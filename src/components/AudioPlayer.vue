<template>
  <!-- Container -->
  <div class="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto h-52 z-50 bg-neutral-800">
    <!-- Title + Heart -->
    <div class="flex items-center justify-between mx-6 mt-6 mr-6">
      <p class="text-xl font-light text-white">{{ episodeTitle }}</p>
      <button @click="toggleHeart" class="text-gray-500 hover:text-orange-500 transition-colors duration-300">
        <svg v-if="!isFilled" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-orange-500">
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
    </div>
    <!-- Progress Bar -->
    <div class="mt-6 mb-2 ml-6 mr-6 bg-slate-400 h-0.5 rounded-full">
      <div class="bg-gray-200 h-0.5 rounded-full w-1/2"></div>
    </div>
    <!-- Time Information -->
    <div class="flex justify-between mt-2 mx-6 mr-6 text-sm text-white">
      <span class="font-light">1:57</span>
      <span class="font-light">3:53</span>
    </div>
    <!-- Control buttons -->
    <div class="mt-2 mx-6 mr-6 mb-6 flex justify-center ">
      <!-- Previous -->
      <button class="previous">
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="currentColor" viewBox="0 0 12 16">
          <path
            d="M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z">
          </path>
        </svg>
      </button>
      <!-- Play/Pause -->
      <button @click="togglePlay" class="play bg-white rounded-full size-16 mx-8 mr-8">
        <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
             class="w-7 h-7 mx-auto text-gray-800">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
        </svg>
        <svg v-else class="pause-icon w-7 h-7 mx-auto text-gray-800" xmlns="http://www.w3.org/2000/svg"
             fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </button>
      <!-- Next -->
      <button class="next">
        <svg class="w-6 h-6 rotate-180 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="currentColor" viewBox="0 0 12 16">
          <path
            d="M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z">
          </path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  episodeTitle: String,
});

const isFilled = ref(false);

// Load initial state from local storage
const storedIsFilled = localStorage.getItem('heartIsFilled');
if (storedIsFilled !== null) {
  isFilled.value = JSON.parse(storedIsFilled);
}

const toggleHeart = () => {
  isFilled.value = !isFilled.value;
  // Save to local storage
  localStorage.setItem('heartIsFilled', JSON.stringify(isFilled.value));
};

//Pause play
const isPlaying = ref(false);

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
  // Add your play/pause logic here (e.g., control audio playback)
};
</script>

<style scoped>
/* non-tailwind component specific styles */
</style>
