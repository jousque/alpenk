<template>
  <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB -->

  <div class="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 text-gray-900 flex justify-center">
      <Toast />
      <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div>
                  <!-- <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                      class="w-32 mx-auto" /> -->
                  <div class="w-32 mx-auto">LOGO</div>
              </div>
              <div class="mt-12 flex flex-col items-center">
                  <h1 class="text-2xl xl:text-3xl font-extrabold">
                      Yönetim Paneli
                  </h1>
                  <div class="w-full flex-1 mt-8">
                      <div class="flex flex-col items-center">
                          <button
                              class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                              <div class="bg-white p-2 rounded-full">
                                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                                      <path
                                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                          fill="#4285f4" />
                                      <path
                                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                          fill="#34a853" />
                                      <path
                                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                          fill="#fbbc04" />
                                      <path
                                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                          fill="#ea4335" />
                                  </svg>
                              </div>
                              <span class="ml-4">
                                  Google ile Giriş Yap
                              </span>
                          </button>
                      </div>

                      <div class="my-12 border-b text-center">
                          <div
                              class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                              Ya da
                          </div>
                      </div>

                      <div class="mx-auto max-w-xs">
                          <form @submit.prevent="login" class="relative">
                              <div class="relative mb-5">
                                  <input
                                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-transparent text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                      type="email" placeholder="Email" v-model="email" id="email" required />
                                  <label for="email"
                                      class="absolute left-8 top-4 text-gray-500 text-sm transition-all duration-300 ease-in-out"
                                      :class="{ 'transform -translate-y-7 scale-75 text-indigo-500': email || emailFocused }">Email</label>
                              </div>

                              <div class="relative mb-5">
                                  <input
                                      class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-transparent text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                      type="password" placeholder="Şifre" v-model="password" id="password" required />
                                  <label for="password"
                                      class="absolute left-8 top-4 text-gray-500 text-sm transition-all duration-300 ease-in-out"
                                      :class="{ 'transform -translate-y-7 scale-75 text-indigo-500': password || passwordFocused }">Şifre</label>
                              </div>

                              <button :disabled="isLoading" type="submit"
              class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              :class="{ 'bg-indigo-300 cursor-not-allowed': isLoading, 'hover:bg-indigo-700': !isLoading }">
              <svg v-if="isLoading" class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
              </svg>
              <span v-else class="ml-3">Giriş Yap</span>
          </button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                  style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');">
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import store from '@/store';

import { useToast } from "primevue/usetoast";

const toast = useToast();
const router = useRouter();

const email = ref('iletisim@angaryos.com');
const password = ref('iletisim@angaryos.comAa.');
const emailFocused = ref(false);
const passwordFocused = ref(false);
const isLoading = ref(false);

const login = () => {
  isLoading.value = true;

  function getClientInfo() {
const userAgent = navigator.userAgent;

let type = 'browser';
if (/Mobi|Android/i.test(userAgent)) {
  type = 'mobile';
} else if (/Tablet|iPad/i.test(userAgent)) {
  type = 'tablet';
} else {
  type = 'browser';
}

return {
  type,
  agent: userAgent,
  firebaseToken: ""
};
}

  const loginData = {
      clientInfo: getClientInfo(),
      email: email.value,
      password: password.value,
  };

  store.dispatch('authLogin', loginData)
      .then((res) => {
          if (res && res.code === 200) {
              toast.add({ severity: 'success', summary: 'Başarılı', detail: 'Giriş başarılı, yönlendiriliyorsunuz...', life: 3000 });
              setTimeout(() => {
                  localStorage.setItem('auth', res.data.token);
                  router.push({ name: 'Home' });
              }, 100);
          } else {
              toast.add({ severity: 'error', summary: 'Hata', detail: 'Kullanıcı adı veya şifre hatalı', life: 3000 });
          }
      })
      .catch((err) => {
          if (err.response && err.response.data) {
              toast.add({ severity: 'error', summary: 'Hata', detail: err.response.data.data.message, life: 3000 });
          } else {
              toast.add({ severity: 'error', summary: 'Hata', detail: 'Bir hata oluştu', life: 3000 });
          }
      }).finally(() => {
          isLoading.value = false;
      });
};
</script>

<style>
input:focus+label,
input:not(:placeholder-shown)+label {
  transform: translate(-1.25rem, -1rem) scale(0.75);
  color: #6366f1;
}

input {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

label {
  position: absolute;
  top: 1rem;
  left: 2rem;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}
</style>