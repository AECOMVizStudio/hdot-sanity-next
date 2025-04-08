import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        hdotGray: '#5c5c5c',
        hdotTeal: '#22767c',
        hdotBgTeal: '#e9f1f2',
        hdotHoverTeal: '#1b5e63',
        hdotAqua: '#6fcddb',
        hdotBgAqua: '#e2f5f8',
        hdotYellow: '#ffbe20',
        hdotSand: '#d0c4ac',
        hdotJade: '#2bb56e',
        hdotCoral: '#dd8983',
      },
    },
  },
  plugins: [],
} satisfies Config;
