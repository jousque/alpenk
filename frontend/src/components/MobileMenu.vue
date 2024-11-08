
<template>
    <div class="overflow-auto">
        <Drawer v-model:visible="visible">
            <template #container="{ closeCallback }">
                <span class="absolute right-2 top-2">
                    <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined></Button>
                </span>
                <Sidebar />
            </template>
        </Drawer>
        <Button icon="pi pi-bars" @click="visible = true" />
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import { ref } from "vue";

const visible = ref(false);
</script>
