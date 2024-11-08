<template>
    <div class="flex flex-col h-screen">
        <div class="p-4">
            Alpenk
        </div>
        <Divider />
        <div class="flex-grow overflow-auto">
            <PanelMenu :model="items" multiple class="w-full">
                <template #item="{ item, isActive }">
                    <router-link v-if="item.route" v-slot="{ href, navigate, isExactActive }" :to="item.route" custom>
                        <a v-ripple
                            :class="['flex items-center cursor-pointer px-4 py-2', isExactActive ? 'border-l-4 border-blue-500 text-primary-700 dark:text-primary-300' : 'text-surface-700 dark:text-surface-0']"
                            :href="href" @click="navigate">
                            <span :class="item.icon" />
                            <span class="ml-2">{{ item.label }}</span>
                        </a>
                    </router-link>
                    <a v-else v-ripple
                        :class="['flex items-center cursor-pointer px-4 py-2', isActive ? 'border-l-4 border-blue-500 text-primary-700 dark:text-primary-300' : 'text-surface-700 dark:text-surface-0']"
                        :href="item.url" :target="item.target">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                        <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
                    </a>
                </template>
            </PanelMenu>
        </div>
        <Divider />
        <div class="bg-surface-200 dark:bg-surface-800 text-surface-900 dark:text-surface-100 pb-6">
            <div class="flex items-center">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2"
                    size="large" shape="circle" />
                <h5>Profil</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Genel',
        icon: 'pi pi-th-large',
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-chart-line',
                route: '/'
            },
            {
                label: 'Customers',
                icon: 'pi pi-list',
                route: '/customers'
            },
        ]
    },
]);
</script>

<style>
.p-panelmenu-panel {
    border-radius: 0 !important;
    border: none !important;
    background-color: var(--card-bg) !important;
}

.border-l-4 {
    border-left-width: 4px;
}

.border-blue-500 {
    border-color: var(--p-button-primary-background);
}

.flex-grow {
    flex-grow: 1;
}

.overflow-auto {
    overflow: auto;
}

.text-primary-700 {
    color: var(--p-button-primary-border-color);
}
</style>
