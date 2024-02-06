/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "sider": "#1C2536",
        "sider-hover": "#2A3A4D",
        "logo-bg": "rgba(255, 255, 255, 0.04)"
      },
      borderWidth: {
        "1": "1px",
      },
      borderColor: {
        "divider": "rgb(47, 55, 70)",
        "menu-icon": "rgb(99, 102, 241)"
      },
      textColor: {
        "desc": "rgb(108, 115, 127)",
      },
      fontSize: {
        "nickname": "0.875rem"
      }
    },
  },
  plugins: [],
};
