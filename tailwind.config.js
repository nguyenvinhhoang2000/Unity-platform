/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      padding: "12px",
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        xxl: "1496px",
      },
    },
    colors: {
      primary: {
        main: "rgba(108, 93, 211, 1)",
        "o-75": "rgba(108, 93, 211, 0.75)",
        "o-50": "rgba(108, 93, 211, 0.5)",
        "o-10": "rgba(108, 93, 211, 0.1)",
        "o-5": "rgba(108, 93, 211, 0.05)",
        "shades-1": "rgba(207, 200, 255, 1)",
        "shades-2": "rgba(207, 200, 255, 0.5)",
      },
      secondary: {
        main: "rgba(0, 73, 198, 1)",
        "shades-1": "#3F8CFF",
        "shades-2": "#A0D7E7",
        "shades-4": "#002685",
      },
      "accent-1": {
        main: "rgba(255, 162, 192, 1)",
        "o-5": "rgba(255, 162, 192, 0.05)",
        "shades-1": "rgba(255, 183, 245, 1)",
        "shades-2": "rgba(255, 183, 245, 0.5)",
      },
      "accent-2": {
        main: "#FFCE73",
        "shades-1": "#FF9A7B",
        "shades-2": "#FF754C",
      },
      transparent: "transparent",
      current: "currentColor",
      neutral: {
        main: "rgba(27, 29, 33, 1)",
        deactive: "#808191",
        neutral: "#F0F3F6",
        "o-70": "rgba(27, 29, 33, 0.7)",
        "o-50": "rgba(27, 29, 33, 0.5)",
        "o-20": "rgba(27, 29, 33, 0.2)",
      },
      white: {
        main: "#ffffff",
        "o-80": "rgba(255, 255, 255, 0.8)",
        "o-70": "rgba(255, 255, 255, 0.7)",
        "o-60": "rgba(255, 255, 255, 0.6)",
        "o-40": "rgba(255, 255, 255, 0.4)",
        "o-20": "rgba(255, 255, 255, 0.2)",
        "o-10": "rgba(255, 255, 255, 0.1)",
        "o-5": "rgba(255, 255, 255, 0.05)",
      },
      grey: {
        main: "#e4e4e4",
        "o-10": "rgba(228, 228, 228, 0.1)",
      },
      dark: {
        main: "#1F2128",
      },
      success: {
        main: "#7FBA7A",
      },
    },
    fontSize: {
      "display-1": [
        "6rem",
        {
          lineHeight: "calc(120/96)",
          letterSpacing: "-0.0625rem",
          fontWeight: "600",
        },
      ],
      "display-2": [
        "4.5rem",
        {
          lineHeight: "calc(88/72)",
          letterSpacing: "-0.0625rem",
          fontWeight: "600",
        },
      ],
      "display-3": [
        "4rem",
        {
          lineHeight: "calc(72/64)",
          letterSpacing: "-0.0625rem",
          fontWeight: "600",
        },
      ],
      "heading-1": [
        "3.5rem",
        {
          lineHeight: "calc(64/56)",
          letterSpacing: "-0.0625rem",
          fontWeight: "600",
        },
      ],
      "heading-2": [
        "3rem",
        {
          letterSpacing: "-0.0625rem",
          fontWeight: "600",
        },
      ],
      "heading-3": [
        "2.5rem",
        {
          letterSpacing: "-0.0625rem",
          fontWeight: "600",
        },
      ],
      "heading-4": [
        "2rem",
        {
          letterSpacing: "-0.0313rem",
          fontWeight: "500",
        },
      ],
      "heading-5": [
        "1.5rem",
        {
          lineHeight: "calc(36/24)",
          fontWeight: "500",
        },
      ],
      "heading-6": [
        "1.125rem",
        {
          lineHeight: "calc(24/18)",
          fontWeight: "500",
        },
      ],
      menu: [
        "0.875rem",
        {
          lineHeight: "calc(18/14)",
          fontWeight: "600",
        },
      ],
      title: ["1rem", { fontWeight: "600" }],
      "caption-1": [
        "0.8125rem",
        {
          lineHeight: "calc(18/13)",
          fontWeight: "500",
        },
      ],
      "caption-2": [
        "0.75rem",
        {
          lineHeight: "calc(16/12)",
          fontWeight: "500",
        },
      ],
      body: ["0.875rem", "calc(24/14)"],
      "body-small": ["0.8125rem", "calc(24/13)"],
      button: [
        "0.875rem",
        {
          lineHeight: "calc(20/14)",
          fontWeight: "700",
        },
      ],
      "button-small": [
        "0.8125rem",
        {
          lineHeight: "calc(20/13)",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        navigation: "-1px 0px 0px 0px #E4E4E4 inset",
        "navigation-dark": "-1px 0px 0px 0px #E4E4E41a inset",
      },
    },
  },
  plugins: [],
};
