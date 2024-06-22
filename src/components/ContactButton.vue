<template>
    <div class="contact-button-container py-16 pb-60 px-4">
      <button @click="openFeedbackForm" class="feedback-button">
        {{ $t('howWasYourExperience') }}
      </button>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

function openFeedbackForm() {
    // Open a modal with a feedback form, or
    window.location.href = `mailto:info@geografiskhave.dk?subject=Feedback&body=Please share your experience or suggestions.`;
}
</script>

<style scoped>
.feedback-button {
  width: 70%; /* Half width of the container */
  border: 2px solid #76a957; /* Green border */
  background-color: transparent; /* No background color */
  color: black; /* Text color black */
  padding: 10px 20px;
  border-radius: 0; /* No rounded borders */
  font-size: 16px;
  cursor: pointer;
  margin: auto; /* Center button horizontally */
}
.contact-button-container {
  display: flex; /* Flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}
</style>
