/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/img/hero-pattern.svg')",
				'footer-texture': "url('/img/footer-texture.png')",
			},
			keyframes: {
				'border-expand': {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				},
			},
			animation: {
				'border-expand': 'border-expand 0.5s ease-out forwards',
			},
			height: {
        'screen-minus-20': 'calc(100vh - 80px)',
      },
		},
	},
	plugins: [],
};
