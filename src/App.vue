<template>
  <div class="min-h-screen">
    <Header />
    <main class="w-full max-w-md mx-auto">
      <GuideSection />
      <EpisodeList />
      <ContactButton />
    </main>
    <!-- <AudioPlayer /> -->
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import GuideSection from '@/components/GuideSection.vue'
import EpisodeList from '@/components/EpisodeList.vue'
import ContactButton from '@/components/ContactButton.vue';
/* import AudioPlayer from '@/components/AudioPlayer.vue' */
</script>

<style scoped>
/* Global styles for layout will go here */
</style>
