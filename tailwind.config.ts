import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif']
        },
        fontSize: {                    // HTML-Base 20px
            'xs': ['.65rem', '1.6'],    // FALLBACK tiny
            'sm': ['.8rem', '1.6'],    // 16px - h6 - smalltext
            'tiny': ['.9rem', '1.6'],  // 18px - small - button
            'base': ['1rem', '1.6'],   // 20px - -- - text
            'lg': ['1.2rem', '1.4'],   // 24px - h5 - leadtext
            'xl': ['1.5rem', '1.4'],   // 30px - h4
            '2xl': ['1.8rem', '1.4'],  // 36px - h3
            '3xl': ['2.1rem', '1.2'],  // 42px - h2
            '4xl': ['3.2rem', '1.2'],  // 64px - h1
            '5xl': ['3.2rem', '1.2'],  // FALLBACK 4xl
            '6xl': ['3.2rem', '1.2'],  // FALLBACK 4xl
            '7xl': ['3.2rem', '1.2'],  // FALLBACK 4xl
        },
        extend: {
            colors: {
                'nuxt-ui-primary': {
                    50: '#687E5E',
                    100: '#687E5E',
                    200: '#687E5E',
                    300: '#687E5E',
                    400: '#687E5E',
                    500: '#687E5E',
                    600: '#687E5E',
                    700: '#687E5E',
                    800: '#687E5E',
                    900: '#687E5E',
                    950: '#687E5E'
                },
                'nuxt-ui-grey': {
                    50: '#7C7B7B',
                    100: '#7C7B7B',
                    200: '#7C7B7B',
                    300: '#7C7B7B',
                    400: '#7C7B7B',
                    500: '#7C7B7B',
                    600: '#7C7B7B',
                    700: '#7C7B7B',
                    800: '#7C7B7B',
                    900: '#7C7B7B',
                    950: '#7C7B7B'
                },
                'jm-primary-brown': {
                    DEFAULT: '#9B9371',
                    light: '#C3C2B4',
                    lighter: '#DBDAD2',
                },
                'jm-primary-grey': {
                    DEFAULT: '#7C7B7B',
                    light: '#B5B7B5',
                    lighter: '#D2D4D3',
                },
                'jm-primary-green': {
                    DEFAULT: '#687E5E',
                    light: '#AEB9AC',
                    lighter: '#CFD5CD',
                },
                'jm-secondary-grey': {
                    DEFAULT: '#C9CAC9',
                    light: '#DDDEDC',
                    lighter: '#EAEBEA',
                },
                'jm-secondary-white': {
                    DEFAULT: '#FFFFFF',
                },
                'jm-contrast-blue': {
                    DEFAULT: '#3B5B5D',
                    light: '#9BA7A7',
                    lighter: '#C3CACA',
                },
                'jm-contrast-black': {
                    DEFAULT: '#000000',
                    light: '#808082',
                    lighter: '#B3B3B4',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
}
