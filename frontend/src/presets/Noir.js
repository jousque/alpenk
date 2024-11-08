import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const Noir = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    50: '#fff1f2',
                        100: '#ffe4e6',
                        200: '#fecdd3',
                        300: '#fda4af',
                        400: '#fb7185',
                        500: '#f43f5e',
                        600: '#e11d48',
                        700: '#be123c',
                        800: '#9f1239',
                        900: '#881337',
                        950: '#4c0519',
                },
                surface: {
                    0: '#ffffff',
                        50: '#fbfcfc',
                        100: '#F7F9F8',
                        200: '#EFF3F2',
                        300: '#DADEDD',
                        400: '#B1B7B6',
                        500: '#828787',
                        600: '#5F7274',
                        700: '#415B61',
                        800: '#29444E',
                        900: '#183240',
                        950: '#0c1920',
                },
                highlight: {
                    background: '{primary.950}',
                    focusBackground: '{primary.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                },
            },
            dark: {
                primary: {
                    50: '#fff1f2',
                        100: '#ffe4e6',
                        200: '#fecdd3',
                        300: '#fda4af',
                        400: '#fb7185',
                        500: '#f43f5e',
                        600: '#e11d48',
                        700: '#be123c',
                        800: '#9f1239',
                        900: '#881337',
                        950: '#4c0519',
                },
                surface: {
                    0: '#ffffff',
                        50: '#fbfcfc',
                        100: '#F7F9F8',
                        200: '#EFF3F2',
                        300: '#DADEDD',
                        400: '#B1B7B6',
                        500: '#828787',
                        600: '#5F7274',
                        700: '#415B61',
                        800: '#29444E',
                        900: '#183240',
                        950: '#0c1920',
                },
                highlight: {
                    background: '{primary.50}',
                    focusBackground: '{primary.300}',
                    color: '{primary.950}',
                    focusColor: '{primary.950}'
                }
            }
        }
    }
});

export default Noir;
