/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',   // e.g., iPhone SE
        'sm': '640px',   // Tailwind's default
        'md': '768px',   // Tailwind's default
        'lg': '1024px',  // Tailwind's default
        'xl': '1280px',  // Tailwind's default
        '2xl': '1536px', // Tailwind's default
      },
      typography: {
        DEFAULT: {
          css: {
            ':focus': {
              outline: 'none',
              boxShadow: 'none',
            },
            h1: {
              color: '#ffffff',
              fontFamily: {
                serif: ["Open Sans", "sans-serif"]
              },
              fontWeight: {
                thin: '50'
              },
              fontSize: '24px'
            },
            h2: {
              color: '#ffffff',
              fontFamily: {
                serif: ["Open Sans", "sans-serif"]
              },
              fontWeight: {
                thin: '50'
              },
            }
          }
        }
      },
      height: {
        '380': '23.75rem'
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Open Sans", "sans-serif"],

      },
      fontWeight: {
        thin: '100'
      },
      backgroundImage: (theme) => ({
        // Blue Gradient
        gradientdown:
          "radial-gradient(140% 107.13% at 50% 10%,transparent 37.41%,#364ef580 69.27%,#6698ff 100%);",
        gradientup:
          "radial-gradient(131.66% 109.77% at 50% 97.75%, transparent 37.41%,#364ef580   69.27%,  #6698ff 100%);",
      }),
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        scroller3: "scroller3 25s linear infinite",
        "spin-fast": "spin .3s linear infinite",
        "spin-slow": "spin 4s linear infinite",
        "spin-slower": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
        scroller: "scroller 15s linear infinite",
        scroller2: "scroller2 20s linear infinite",
        "fade-in": "fade-in 0.5s linear forwards",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        scroller: {
          "0%": {
            transform: "translateY(10em)",
          },
          "100%": {
            transform: "translateY(-14em)",
          },
        },
        scroller2: {
          "0%": {
            transform: "translateY(10em)",
          },
          "100%": {
            transform: "translateY(-14em)",
          },
        },
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        scroller3: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
      boxShadow: {
        "blue-top": "0 -10px 20px -2px rgba(59, 130, 246, 0.5), 0 -6px 12px -4px rgba(59, 130, 246, 0.5)",
        "blue-bottom": "0 4px 6px -1px rgba(59, 130, 246, 0.5), 0 2px 4px -2px rgba(59, 130, 246, 0.5)",
        thick: "0px 7px 32px rgb(0 0 0 / 35%);",
        inset:
          "inset 6px 84px 79px -40px hsla(0,0%,100%,.025), inset 0 -4px 1px -3px hsla(0,0%,100%,.25), inset 0 4px 1px -3px hsla(0,0%,100%,.25);",
      },
      colors: {


        button_gray: '#374151',
        pearl: "#EDEADE",
        button_blue: '#2563eb',
        black: "#0f1014",
        astro_black: "linear-gradient(180deg, #13151A 0%, rgba(19, 21, 26, 0.88) 100%)",
        loader_black: "#0f101b",
        inner_loader_black: "#26272B",
        border_gray: "#343841",
        bone_white: "#F9F6EE",
        ebony: "#1a1c23",
        rich_black: '#010203',
        mirage: "#27292D",
        google_bg: "#1f1f1f",
        blue: {
          50: "#ECEEFE",
          100: "#D8DDFD",
          200: "#ACB7FB",
          300: "#8695F9",
          400: "#5F73F7",
          500: "#364EF5",
          600: "#0B28E4",
          700: "#081EAA",
          800: "#061470",
          900: "#030A3A",
          950: "#01051D",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '-webkit-overflow-scrolling': 'touch',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
  variants: {
    scrollbar: ['rounded', 'hover'], // Enable variants as needed
  }
};
