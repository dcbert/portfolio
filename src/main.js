import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue';
import App from './App.vue';
import { scrollReveal } from './directives/scrollReveal.js';

const app = createApp(App);
app.directive('reveal', scrollReveal);
app.mount('#app');
