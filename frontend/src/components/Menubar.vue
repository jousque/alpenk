<template>
    <Menubar :class="menubarClass">
        <template #start>
            <div class="lg:hidden md:block">
                <MobileMenu />
            </div>
            <div class="lg:hidden md:block">
                <Divider layout="vertical" v-if="isSticky" />
            </div>
            <div v-if="isSticky" class="logo-container">
                <div class="logo">Logo</div>
                <!-- <img src="/path-to-your-logo.png" alt="Logo" class="logo" /> -->
            </div>
            <div class="hidden sm:block">
                <Breadcrumb :home="home" :model="breadcrumbItems">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a :href="href" v-bind="props.action" @click="navigate">
                                <span :class="[item.icon, 'text-color']" />
                                <span class="text-primary font-semibold">{{ item.label }}</span>
                            </a>
                        </router-link>
                        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                        </a>
                    </template>
                </Breadcrumb>
            </div>
        </template>
        <template #end>
            <div class="flex items-center gap-2">
                <ThemeSwitcher />
                <Button @click="logout" icon="pi pi-power-off" severity="danger" text rounded aria-label="Logout" />
            </div>
        </template>
    </Menubar>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import store from '@/store';

import MobileMenu from './MobileMenu.vue';

const router = useRouter();
const route = useRoute();

const darkMode = ref(false);
const menubarClass = ref('');
const isSticky = ref(false);

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});

const breadcrumbItems = ref([]);

function updateBreadcrumbs() {
    breadcrumbItems.value = [];

    route.matched.forEach((match) => {
        if (match.meta.breadcrumb) {
            breadcrumbItems.value.push({
                label: match.meta.breadcrumbParent,
            });
            breadcrumbItems.value.push({
                label: match.meta.breadcrumb,
                route: { name: match.name },
            });
        }
    });
}

watch(route, () => {
    updateBreadcrumbs();
});

const logout = () => {
    store.dispatch('authLogout');
};

const handleScroll = () => {
    if (window.scrollY > 100) {
        menubarClass.value = 'sticky-active';
        isSticky.value = true;
    } else {
        menubarClass.value = '';
        isSticky.value = false;
    }
};

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkMode.value = true;
        document.querySelector('html').classList.add('p-dark');
    } else {
        darkMode.value = false;
        document.querySelector('html').classList.remove('p-dark');
    }
    updateBreadcrumbs();

    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.menubar {
    width: 100%;
    background-color: white;
    transition: all 0.3s ease;
}

.sticky-active {
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: white;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.logo-container {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.logo {
    width: 50px;
    height: auto;
    transition: opacity 0.3s ease;
}

.sticky-active .logo {
    opacity: 1;
}
</style>
