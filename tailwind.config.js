/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                hover: '#F97A5A',
            },
            boxShadow: {
                shadowMenu:
                    '0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)',
                shadowSearch: '0 1px 5px rgba(0,0,0,0.09)',
            },
            backgroundColor: {
                primary: '#F6801F',
                overlay: 'rgba(0, 0, 0, 0.5)',
            },
        },
        screens: {
            desktop: '1200px',
            tablet: '1024px',
            tabletMini: '768px',
            sm: '640px',
        },
    },
    plugins: [],
};
