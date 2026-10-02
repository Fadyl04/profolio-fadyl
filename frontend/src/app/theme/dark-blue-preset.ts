import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const DarkBluePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e6f7ff',
      100: '#cceeff',
      200: '#99ddff',
      300: '#66ccff',
      400: '#33bbff',
      500: '#00a8ff',
      600: '#0086cc',
      700: '#006499',
      800: '#004266',
      900: '#002133',
      950: '#001019'
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '#94a3b8',
          100: '#5B6B87',
          200: '#3A4560',
          300: '#232B42',
          400: '#132038',
          500: '#0a1930',   // --portfolio-surface
          600: '#081222',
          700: '#061426',   // --portfolio-bg-secondary
          800: '#041019',
          900: '#020817',   // --portfolio-bg
          950: '#01040c'
        },
        primary: {
          color: '#00a8ff',
          contrastColor: '#ffffff',
          hoverColor: '#33bbff',
          activeColor: '#0086cc'
        }
      }
    }
  },
  components: {
    card: {
      colorScheme: {
        dark: {
          root: {
            background: '#0a1930' // reprend --portfolio-surface
          }
        }
      }
    },
    button: {
      root: {
        borderRadius: '10px'
      }
    }
  }
});

export default DarkBluePreset;