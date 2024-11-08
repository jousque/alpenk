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
                label: 'Kategoriler',
                icon: 'pi pi-list',
                route: '/kategoriler'
            },
            {
                label: 'Üst Menü',
                icon: 'pi pi-bars',
                route: '/ust-menu'
            },
            {
                label: 'Alt Menü',
                icon: 'pi pi-bars',
                route: '/alt-menu'
            },
            {
                label: 'Modüller',
                icon: 'pi pi-cog',
                route: '/moduller'
            },
            {
                label: 'İletişim',
                icon: 'pi pi-envelope',
                route: '/iletisim'
            },
        ]
    },
    {
        label: 'Kullanıcı İşlemleri',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Öğrenciler',
                icon: 'pi pi-user',
                route: '/ogrenciler'
            },
            {
                label: 'Eğitmenler',
                icon: 'pi pi-user-plus',
                route: '/egitmenler'
            },
            {
                label: 'Öğretmenler',
                icon: 'pi pi-id-card',
                route: '/ogretmenler'
            },
            {
                label: 'Yetkililer',
                icon: 'pi pi-briefcase',
                route: '/yetkililer'
            },
            {
                label: 'Kullanıcı Rolleri',
                icon: 'pi pi-lock',
                route: '/kullanici-rolleri'
            },
        ]
    },
    {
        label: 'Ürünler',
        icon: 'pi pi-box',
        items: [
            {
                label: 'Kitaplar',
                icon: 'pi pi-book',
                route: '/kitaplar'
            },
            {
                label: 'Kırtasiye Ürünleri',
                icon: 'pi pi-pencil',
                route: '/kirtasiye-urunleri'
            },
            {
                label: 'Video Dersler',
                icon: 'pi pi-video',
                route: '/video-dersler'
            },
            {
                label: 'PDF Dokümanlar',
                icon: 'pi pi-file-pdf',
                route: '/pdf-dokumanlar'
            },
            {
                label: 'Canlı Yayınlar',
                icon: 'pi pi-video',
                route: '/canli-yayinlar'
            },
            {
                label: 'Eğitim Paketleri',
                icon: 'pi pi-briefcase',
                route: '/egitim-paketleri'
            },
            {
                label: 'E-Kitaplar',
                icon: 'pi pi-tablet',
                route: '/e-kitaplar'
            },
        ]
    },
    {
        label: 'Sipariş Yönetimi',
        icon: 'pi pi-shopping-cart',
        items: [
            {
                label: 'Siparişler',
                icon: 'pi pi-file',
                route: '/siparisler'
            },
        ]
    },
    {
        label: 'Kampanyalar',
        icon: 'pi pi-gift',
        items: [
            {
                label: 'Hediye Çekleri',
                icon: 'pi pi-ticket',
                route: '/hediye-cekleri'
            },
        ]
    },
    {
        label: 'İletişim',
        icon: 'pi pi-envelope',
        items: [
            {
                label: 'Bildirim',
                icon: 'pi pi-bell',
                route: '/bildirim'
            },
            {
                label: 'Email',
                icon: 'pi pi-at',
                route: '/email'
            },
            {
                label: 'SMS',
                icon: 'pi pi-mobile',
                route: '/sms'
            },
            {
                label: 'Pop-up',
                icon: 'pi pi-exclamation-circle',
                route: '/pop-up'
            },
            {
                label: 'Duyurular',
                icon: 'pi pi-megaphone',
                route: '/duyurular'
            },
        ]
    },
    {
        label: 'İçerik Yönetimi',
        icon: 'pi pi-bookmark',
        items: [
            {
                label: 'Sayfalar',
                icon: 'pi pi-copy',
                route: '/sayfalar'
            },
            {
                label: 'Slider Yönetimi',
                icon: 'pi pi-image',
                route: '/slider-yonetimi'
            },
            {
                label: 'Blog',
                icon: 'pi pi-pencil',
                route: '/blog'
            },
            {
                label: 'Etkinlikler',
                icon: 'pi pi-calendar',
                route: '/etkinlikler'
            },
            {
                label: 'Ürün Yorumları',
                icon: 'pi pi-comment',
                route: '/urun-yorumlari'
            },
            {
                label: 'Video Yorumları',
                icon: 'pi pi-video',
                route: '/video-yorumlari'
            },
            {
                label: 'Kurs Yorumları',
                icon: 'pi pi-comment',
                route: '/kurs-yorumlari'
            },
            {
                label: 'Sipariş Yorumları',
                icon: 'pi pi-comment',
                route: '/siparis-yorumlari'
            },
            {
                label: 'Genel Yorumlar',
                icon: 'pi pi-comment',
                route: '/genel-yorumlar'
            },
        ]
    },
    {
        label: 'Muhasebe',
        icon: 'pi pi-wallet',
        items: [
            {
                label: 'Faturalar',
                icon: 'pi pi-file-check',
                route: '/faturalar'
            },
        ]
    },
    {
        label: 'Raporlar',
        icon: 'pi pi-chart-bar',
        items: [
            {
                label: 'Satış Raporları',
                icon: 'pi pi-chart-line',
                route: '/satis-raporlari'
            },
            {
                label: 'Kullanıcı Raporları',
                icon: 'pi pi-user',
                route: '/kullanici-raporlari'
            },
            {
                label: 'Güvenlik Raporları',
                icon: 'pi pi-shield',
                route: '/guvenlik-raporlari'
            },
            {
                label: 'Loglar',
                icon: 'pi pi-list',
                route: '/loglar'
            },
        ]
    },
    {
    label: 'Ayarlar',
    icon: 'pi pi-cog',
    items: [
        {
            label: 'Site Ayarları',
            icon: 'pi pi-globe',
            route: '/site-ayarlari'
        },
        {
            label: 'Para Birimleri',
            icon: 'pi pi-money-bill',
            route: '/para-birimleri'
        },
        {
            label: 'Kargolar',
            icon: 'pi pi-truck',
            route: '/kargolar'
        },
        {
            label: 'Ödeme Yöntemleri',
            icon: 'pi pi-credit-card',
            route: '/odeme-yontemleri'
        },
        {
            label: 'Entegrasyonlar',
            icon: 'pi pi-server',
            route: '/entegrasyonlar'
        },
        {
            label: 'API',
            icon: 'pi pi-code',
            route: '/api'
        },
    ]
}
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
