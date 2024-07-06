/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
      },
      colors: {
        "background-logo-primary1": "var(--background-logo-primary1)",
        "background-logo-primary2": "var(--background-logo-primary2)",
        "primary-button-background": "var(--primary-button-background)",
        "primary-button-border": "var(--primary-button-border)",
        "secondary-button-background": "var(--secondary-button-background)",
        "secondary-button-border": "var(--secondary-button-border)",
        "text-color-main": "var(--text-color-main)",
        "text-color-secondary": "var(--text-color-secondary)",
        "text-color-gray1": "var(--text-color-gray1)",
        "text-color-gray2": "var(--text-color-gray2)",
        "text-color-gray3": "var(--text-color-gray3)",
        "text-color-gray4": "var(--text-color-gray4)",
        "text-color-gray5": "var(--text-color-gray5)",
      },
    },
  },
  plugins: [],
};
