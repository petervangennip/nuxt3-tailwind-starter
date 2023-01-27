/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/**/*.{js,vue,ts}',
    './layouts/**/**/*.vue',
    './pages/**/**/*.vue',
    './nuxt.config.{js,ts}',
    './storyblok/**/**/*.{js,vue,ts}',
  ],
  safelist: [],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      dark: 'rgb(var(--color-dark) / <alpha-value>)',
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        300: 'rgb(var(--color-gray-300) / <alpha-value>)',
        500: 'rgb(var(--color-gray-500) / <alpha-value>)',
      },
      primary: {
        100: 'rgb(var(--color-primary-100) / <alpha-value>)',
        200: 'rgb(var(--color-primary-200) / <alpha-value>)',
        300: 'rgb(var(--color-primary-300) / <alpha-value>)',
        500: 'rgb(var(--color-primary-500) / <alpha-value>)',
      },
      secondary: {
        300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
        500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
      },
      tertiary: {
        300: 'rgb(var(--color-tertiary-300) / <alpha-value>)',
        500: 'rgb(var(--color-tertiary-500) / <alpha-value>)',
      },
      quaternary: {
        300: 'rgb(var(--color-quaternary-300) / <alpha-value>)',
        500: 'rgb(var(--color-quaternary-500) / <alpha-value>)',
      },
    },
    extend: {
      borderRadius: {
        none: '0px',
        sm: '0.125rem', // 2px
        DEFAULT: '0.25rem', // 4px
        md: '0.375rem', // 6px
        lg: '0.5rem', // 8px
        xl: '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.25rem', // 20px
        '4xl': '2.5rem', // 40px
        button: '3.125rem',
        full: '9999px',
      },
      // fontFamily: {
      //   vag: ['VAGRounded LT', 'sans-serif'],
      // },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.75rem', // 28px
        '4xl': '2rem', // 32px
        '5xl': '2.25rem', // 36px
        '6xl': '2.5rem', // 40px
        '7xl': '2.75rem', // 44px
        '8xl': '3.25rem', // 52px
        '9xl': '4.375rem', // 70px
        '10xl': '5rem', // 80px
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        7: '1.75rem', // 28px
        8: '1.875rem', // 30px
        9: '2.625rem', // 42px
        10: '3rem', // 48px
        11: '3.5rem', // 56px
        12: '4rem', // 64px
        13: '4.75rem', // 76px
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
