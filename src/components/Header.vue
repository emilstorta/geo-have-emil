<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- Hero image -->
    <img src="@/assets/hero_image.png" alt="Hero Image" class="w-full object-cover sm:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh]" />
  
    <!-- Logo -->
    <img src="@/assets/logo.png" alt="Logo" class="absolute top-4 left-1/2 transform -translate-x-1/2 h-28 w-auto lg:h-24" />
  
    <!-- Text overlay with increased padding -->
    <div class="absolute left-0 right-0 top-2/4 md:top-2/3">
      <div class="bg-black bg-opacity-50 px-6 py-6 text-center">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-wider">{{ $t('mainTitle') }}</h1>
        <p class="text-lg sm:text-xl md:text-2xl text-white tracking-wide">{{ $t('episodeCount') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* non-tailwind component specific styles */
</style>
