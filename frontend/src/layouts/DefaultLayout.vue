<template>
    <div class="flex">
        <div class="sidebar fixed top-0 bottom-0 left-0 w-64 hidden lg:block p-4 border-r">
            <Sidebar />
        </div>
        <div class="content flex-1 lg:ms-64 md:ms-0 p-4 overflow-auto">
            <Menubar />
            <div class="my-2">
                <router-view />
                <ShortMenu />
            </div>
            <ScrollTop />
        </div>
        <Toast />
        <ConfirmDialog></ConfirmDialog>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Menubar from '@/components/Menubar.vue';
import ShortMenu from '@/components/ShortMenu.vue';
</script>