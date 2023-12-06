import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif']
        },
        fontSize: {                    // HTML-Base 20px
            'xs': ['.8rem', '1.4'],    // FALLBACK tiny
            'sm': ['.8rem', '1.4'],    // 16px - -- - smalltext
            'tiny': ['.9rem', '1.4'],  // 18px - small - button
            'base': ['1rem', '1.4'],   // 20px - h6 - text
            'lg': ['1.2rem', '1.4'],   // 24px - h5 - leadtext
            'xl': ['1.5rem', '1.4'],   // 30px - h4
            '2xl': ['1.8rem', '1.4'],  // 36px - h3
            '3xl': ['2.1rem', '1.4'],  // 42px - h2
            '4xl': ['2.4rem', '1.4'],  // 48px - h1
            '5xl': ['2.4rem', '1.4'],  // FALLBACK 4xl
            '6xl': ['2.4rem', '1.4'],  // FALLBACK 4xl
            '7xl': ['2.4rem', '1.4'],  // FALLBACK 4xl
        },
        extend: {
            colors: {
                'jm-primary-brown': {
                    DEFAULT: '#878568',
                    light: '#c4c2b4',
                    lighter: '#dbdad2',
                },
                'jm-primary-grey': {
                    DEFAULT: '#696e6b',
                    light: '#b5b7b5',
                    lighter: '#d2d4d3',
                },
                'jm-primary-green': {
                    DEFAULT: '#5c7459',
                    light: '#aeb9ac',
                    lighter: '#cfd5cc',
                },
                'jm-secondary-grey': {
                    DEFAULT: '#babcb8',
                    light: '#dddedc',
                    lighter: '#eaebea',
                },
                'jm-secondary-white': {
                    DEFAULT: '#fffffe',
                },
                'jm-contrast-blue': {
                    DEFAULT: '#35504f',
                    light: '#9ba6a7',
                    lighter: '#c3caca',
                },
                'jm-contrast-black': {
                    DEFAULT: '#000105',
                    light: '#808082',
                    lighter: '#b3b3b4',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
}