import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
         'hat-image': "url('/img/yarn-hat.png')",
         'shirt-image': "url('/img/shirt-category.png')",
         'jacket-image': "url('/img/jacket-category.png')",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
