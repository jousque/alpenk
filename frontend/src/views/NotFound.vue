<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <div class="bg-indigo-500 rounded-full p-8">
            <i class="pi pi-exclamation-circle text-white" style="font-size: 2.5rem"></i>
        </div>
        <h1 class="text-6xl font-bold text-gray-800 mt-5">404</h1>
        <p class="text-xl text-gray-600 mt-3">Sayfa bulunamadı.</p>
        <p class="text-gray-500 mt-2">
            Burada bir şey yok gibi gözüküyor. Belki yanlış bir yola sapmışsınızdır.
        </p>
        <Button label="Ana sayfaya dön" icon="pi pi-arrow-left"
            class="p-button-raised p-button-rounded mt-5 bg-indigo-500 text-white hover:bg-indigo-600"
            @click="goHome" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
    router.push({ name: 'Home' });
};
</script>