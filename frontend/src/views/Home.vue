<template>
    <div>
        Home
        <div v-for="item in data" :key="item.id">
            {{ item.name }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import apiService from '@/service/apiService';

const data = ref([]);

onMounted(() => {
    apiService.getAllResources('customers')
        .then((res) => {
            data.value = res;
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});

</script>