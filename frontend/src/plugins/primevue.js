import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import ScrollTop from 'primevue/scrolltop';
import PanelMenu from 'primevue/panelmenu';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import Breadcrumb from 'primevue/breadcrumb';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import Chart from 'primevue/chart';
import Timeline from 'primevue/timeline';
import AnimateOnScroll from 'primevue/animateonscroll';
import Tooltip from 'primevue/tooltip';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Fieldset from 'primevue/fieldset';
import Drawer from 'primevue/drawer';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Panel from 'primevue/panel';
import ConfirmDialog from 'primevue/confirmdialog';

import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';

import Noir from '../presets/Noir.js';
import ThemeSwitcher from '../components/ThemeSwitcher.vue';

export default {
  install(app) {
    app.use(PrimeVue, {
      theme: {
        preset: Noir,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false,
        },
      },
      ripple: true,
      locale: {
        startsWith: 'Başlıyor',   // Örnek Türkçe çeviri
        contains: 'İçeriyor',
        notContains: 'İçermiyor',
        endsWith: 'Bitiyor',
        equals: 'Eşittir',
        notEquals: 'Eşit Değil',
        noFilter: 'Filtre Yok',
        lt: 'Daha Küçük',
        lte: 'Küçük Eşittir',
        gt: 'Daha Büyük',
        gte: 'Büyük Eşittir',
        dateIs: 'Tarih Şu',
        dateIsNot: 'Tarih Şu Değil',
        dateBefore: 'Tarih Öncesi',
        dateAfter: 'Tarih Sonrası',
        clear: 'Temizle',
        apply: 'Uygula',
        matchAll: 'Hepsini Karşılaştır',
        matchAny: 'Herhangi Birini Karşılaştır',
        addRule: 'Kural Ekle',
        removeRule: 'Kuralı Kaldır',
        accept: 'Kabul Et',
        reject: 'Reddet',
        choose: 'Seç',
        upload: 'Yükle',
        cancel: 'İptal',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        dayNamesMin: ['Pa', 'Pz', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        today: 'Bugün',
        weekHeader: 'Hf',
        firstDayOfWeek: 1, // Haftanın ilk günü: Pazartesi (0: Pazar, 1: Pazartesi)
        dateFormat: 'dd/mm/yy',
        weak: 'Zayıf',
        medium: 'Orta',
        strong: 'Güçlü',
        passwordPrompt: 'Şifre Giriniz',
        emptyFilterMessage: 'Sonuç bulunamadı', // Autocomplete, Dropdown
        emptyMessage: 'Kayıt bulunamadı',
        paginator: {
          first: 'İlk',
          last: 'Son',
          next: 'Sonraki',
          previous: 'Önceki',
          rowsPerPage: 'Sayfa başına satır:',
          currentPageReport: '{first} - {last} arası gösteriliyor, toplam {totalRecords} kayıt',
          jumpToPage: 'Sayfaya Git',
        }
      }
    });

    app.use(ToastService);
    app.use(ConfirmationService);
    app.use(DialogService);

    const components = {
      Button,
      InputText,
      Menubar,
      ScrollTop,
      Toast,
      PanelMenu,
      Divider,
      Avatar,
      Breadcrumb,
      Tabs,
      TabList,
      Tab,
      TabPanels,
      TabPanel,
      Card,
      SelectButton,
      Chart,
      Timeline,
      DataTable,
      Column,
      ColumnGroup,
      Row,
      Fieldset,
      Drawer,
      ThemeSwitcher,
      Textarea,
      Checkbox,
      Panel,
      Dropdown,
      ConfirmDialog,
    };

    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });

    app.directive('animateonscroll', AnimateOnScroll);
    app.directive('tooltip', Tooltip);
  },
};
