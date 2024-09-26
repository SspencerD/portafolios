/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: ["./src/**/*.{astro,html,js,tsx,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#5dbf54",
        secondary: "#47A93E",
        tertiary: "#368B2E",
        detail: "#0D270C",
        line: "#21481F",
		lightColorIn:"#C9EDC5",
		lightColorOut:"#9EDD98",
		black:"#3d3d3d",
		white:"#efefef",
      },
      fontFamily: {
		'poppins-light': ['Poppins', 'sans-serif'],
        'poppins-regular': ['Poppins', 'sans-serif'],
        'poppins-semibold': ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins', 'sans-serif'],
        'openSans-light': ['Open Sans', 'sans-serif'],
        'openSans-regular': ['Open Sans', 'sans-serif'],
        'openSans-semibold': ['Open Sans', 'sans-serif'],
        'openSans-bold': ['Open Sans', 'sans-serif'],
        'comicNeue-light': ['Comic Neue', 'cursive'],
        'comicNeue-regular': ['Comic Neue', 'cursive'],
        'comicNeue-semibold': ['Comic Neue', 'cursive'],
        'comicNeue-bold': ['Comic Neue', 'cursive'],
      },
	  extend:{
		spacing:{
			'16': '25vw',
            '20': '30vw',
            '24': '36vw',
            '32': '48vw',
            '40': '60vw',
            '48': '72vw',
            '56': '84vw',
            '64': '96vw',
            '72': '108vw',
            '80': '120vw',
            '88': '132vw',
            '96': '144vw',
            '104': '156vw',
            '112': '168vw',
            '120': '180vw',
            '128': '192vw',
            '136': '204vw',
		},
		borderRadius:{
			'8': '8px',
            '16': '16px',
            '24': '24px',
            '32': '32px',
            '40': '40px',
            '48': '48px',
            '56': '56px',
            '64': '64px',
            '72': '72px',
            '80': '80px',
            '88': '88px',
            '96': '96px',
            '104': '104px',
            '112': '112px',
            '120': '120px',
            '128': '128px',
            '136': '136px',
            '144': '144px',
		},
    animation:{
      'pulse-fade-in':'pulse-fade-in 2s ease-in-out',
      'pulse-slow':'pulse-slow 4s ease-in-out',
    },
    keyframes:{
      'pulse-fade-in':{
        '0%':{opacity:'0',transform:'scale(0.95)'},
        '100%':{opacity:'1',transform:'scale(1)'},
      },
    }
	  }
    },
    plugins: [animations],
  },
}

