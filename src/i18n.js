import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    episodes: 'EPISODES',
    play: 'Play',
    more: 'More',
    mainTitle: 'GEOGRAFISK HAVE',
    episodeCount: '10 EPISODES',
    guideTitle: 'Guide',
    guides: {
      guide1: 'Start your tour by playing the audio files',
      guide2: 'Listen along the tour and follow his instructions',
      guide3: 'Several checkpoints can be scanned',
      guide4: 'Enjoy your tour in the garden'
    },
    howWasYourExperience: 'How was your experience?',
    titles: {
      episode1: 'Introduction to the Garden',
      episode2: 'The Dragon Spirit in China',
      episode3: 'The Beauty of Japan',
      episode4: 'Secrets of Europe',
      episode5: 'The Wild Heart of North America',
      episode6: 'Exploring the Deer Park',
      episode7: 'Tales of South America',
      episode8: 'Kolding in Miniature',
      episode9: 'The Realm of Roses',
    }
  },
  dk: {
    episodes: 'EPISODER',
    play: 'Spil',
    more: 'Mere',
    mainTitle: 'GEOGRAFISK HAVE',
    episodeCount: '10 EPISODER',
    guideTitle: 'Vejledning',
    guides: {
      guide1: 'Start din tur ved at afspille lydfilerne',
      guide2: 'Lyt med på turen, og følg hans anvisninger',
      guide3: 'På ruten er der flere poster, som kan scannes',
      guide4: 'Nyd din tur rundt i haven'
    },
    howWasYourExperience: 'Hvordan var din oplevelse?',
    titles: {
      episode1: 'Introduktion til haven',
      episode2: 'Drageånden i Kina',
      episode3: 'Japans skønhed',
      episode4: 'Europas Hemmeligheder',
      episode5: 'Nordamerikas Vilde Hjerte',
      episode6: 'Udforskning af Dyrehaven',
      episode7: 'Sydamerikas Fortællinger',
      episode8: 'Kolding i Miniatur',
      episode9: 'Rosens Rige',
    }
  },
  de: {
    episodes: 'EPISODEN',
    play: 'Abspielen',
    more: 'Mehr',
    mainTitle: 'GEOGRAFISK HAVE',
    episodeCount: '10 EPISODEN',
    guideTitle: 'Anleitung',
    guides: {
      guide1: 'Starten Sie die Tour mit den Audiodateien',
      guide2: 'Hören und folgen Sie den Anweisungen',
      guide3: 'Mehrere Orte sind zum Scannen vorhanden',
      guide4: 'Genießen Sie die Tour im Garten'
    },
    howWasYourExperience: 'Wie war Ihre Erfahrung?',
    titles: {
      episode1: 'Einführung in den Garten',
      episode2: 'Der Drachengeist in China',
      episode3: 'Die Schönheit Japans',
      episode4: 'Geheimnisse Europas',
      episode5: 'Das wilde Herz Nordamerikas',
      episode6: 'Erkundung des Hirschparks',
      episode7: 'Geschichten aus Südamerika',
      episode8: 'Kolding im Miniaturformat',
      episode9: 'Das Reich der Rosen',
    }
  },
};

const i18n = createI18n({
  locale: 'dk', // default language
  fallbackLocale: 'en',
  messages,
});

export default i18n;
