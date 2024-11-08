import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

import './style.css';
import './index.css';

import AppState from './plugins/appState.js';
import primevuePlugin from './plugins/primevue.js';
import ToastPlugin from 'vue-toast-notification';

import { dateFormatter, dateFormatterTooltip } from '@/utils/dateFormatter';

const app = createApp(App);

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

app.config.globalProperties.$dateFormatter = dateFormatter;
app.config.globalProperties.$dateFormatterTooltip = dateFormatterTooltip;

app.use(primevuePlugin);
app.use(AppState);
app.use(ToastPlugin);

app.use(router);
app.use(store);

app.mount('#app');
