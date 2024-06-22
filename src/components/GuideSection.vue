<template>
  <div class="relative z-10 -mt-[12rem] md:-mt-[14rem]">
    <!-- Heading aligned with the start of the cards -->
    <h2 class="text-xl font-semibold my-4 pl-4">{{ $t('guideTitle') }}</h2>
    <section class="px-4">
      <swiper :slides-per-view="'auto'" :space-between="10" :pagination="{ clickable: true }" class="mySwiper">
        <!-- Swiper slide for Guide card 1 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-red-200"></div>
            <div class="circle circle2 bg-red-200"></div>
            <div class="circle circle3 bg-red-200"></div>
            <span class="text-lg font-semibold text-center">{{ $t('guides.guide1') }}</span>
            <div class="arrow-container">
              <div class="arrow-shaft bg-red-200"></div>
              <div class="arrow-head arrow-red"></div>
            </div>
          </div>
        </swiper-slide>
        <!-- Swiper slide for Guide card 2 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-yellow-200"></div>
            <div class="circle circle2 bg-yellow-200"></div>
            <div class="circle circle3 bg-yellow-200"></div>
            <span class="text-lg font-semibold text-center">{{ $t('guides.guide2') }}</span>
            <div class="arrow-container">
              <div class="arrow-shaft bg-yellow-200"></div>
              <div class="arrow-head arrow-yellow"></div>
            </div>
          </div>
        </swiper-slide>
        <!-- Swiper slide for Guide card 3 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-orange-200"></div>
            <div class="circle circle2 bg-orange-200"></div>
            <div class="circle circle3 bg-orange-200"></div>
            <span class="text-lg font-semibold text-center">{{ $t('guides.guide3') }}</span>
            <div class="arrow-container">
              <div class="arrow-shaft bg-orange-200"></div>
              <div class="arrow-head arrow-orange"></div>
            </div>
          </div>
        </swiper-slide>
        <!-- Swiper slide for Guide card 4 -->
        <swiper-slide style="width: 135px;">
          <div class="guide-card flex flex-col items-center space-y-3 bg-white rounded-lg p-3 shadow-lg relative" style="height: 210px;">
            <div class="circle circle1 bg-blue-200"></div>
            <div class="circle circle2 bg-blue-200"></div>
            <div class="circle circle3 bg-blue-200"></div>
            <span class="text-xl font-extrabold text-center">{{ $t('guides.guide4') }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
</script>

<style scoped>
.guide-card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.circle {
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: -1rem;
  left: -1rem;
  width: 3rem;
  height: 3rem;
}

.circle2 {
  top: 2rem;
  left: 88%;
  width: 6rem;
  height: 6rem;
}

.circle3 {
  top: 65%;
  left: -4rem;
  width: 7rem;
  height: 7rem;
}

/* Arrow Styles */
.arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem; 
}

.arrow-shaft {
  width: 0.4rem; 
  height: 2rem; 
}

.arrow-head {
  width: 0;
  height: 0;
  border-left: 0.6rem solid transparent; 
  border-right: 0.6rem solid transparent; 
  border-top: 0.8rem solid; 
  margin-top: -0.2rem; 
}

.arrow-red {
  border-top-color: #fecaca; /* Tailwind bg-red-200 */
}

.arrow-yellow {
  border-top-color: #fef08a; /* Tailwind bg-yellow-200 */
}

.arrow-orange {
  border-top-color: #fed7aa; /* Tailwind bg-orange-200 */
}

.arrow-blue {
  border-top-color: #bfdbfe; /* Tailwind bg-blue-200 */
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Additional Responsive Spacing */
@media (min-width: 768px) {
  .relative.z-10 {
    margin-top: -4rem;
  }
}

@media (min-width: 1024px) {
  .relative.z-10 {
    margin-top: -1rem;
  }
}
</style>
