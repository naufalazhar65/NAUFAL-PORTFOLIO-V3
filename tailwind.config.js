/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "4rem",
        "3xl": "5rem",
      },
    },

    extend: {
      /*
      |--------------------------------------------------------------------------
      | Breakpoints
      |--------------------------------------------------------------------------
      */

      screens: {
        "4k": "1980px",
      },

      /*
      |--------------------------------------------------------------------------
      | Colors
      |--------------------------------------------------------------------------
      */

      colors: {
        /* Base */

        background: "#090B11",

        surface: "#11151C",

        panel: "#171C25",

        card: "#1C2230",

        /* Border */

        border: "#FFFFFF14",

        /* Brand */

        primary: "#16F2B3",

        "primary-hover": "#32F5BF",

        accent: "#EC4899",

        /* Status */

        success: "#22C55E",

        warning: "#F59E0B",

        danger: "#EF4444",

        /* Typography */

        heading: "#FFFFFF",

        text: "#F5F7FA",

        muted: "#9CA3AF",

        /* Overlay */

        glass: "rgba(255,255,255,.04)",

        overlay: "rgba(0,0,0,.55)",
      },

      /*
      |--------------------------------------------------------------------------
      | Typography
      |--------------------------------------------------------------------------
      */

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      /*
      |--------------------------------------------------------------------------
      | Radius
      |--------------------------------------------------------------------------
      */

      borderRadius: {
        button: "14px",

        input: "14px",

        card: "20px",

        panel: "24px",
      },

      /*
      |--------------------------------------------------------------------------
      | Shadows
      |--------------------------------------------------------------------------
      */

      boxShadow: {
        panel: "0 16px 40px rgba(0,0,0,.35)",

        card: "0 10px 30px rgba(0,0,0,.25)",

        float: "0 30px 80px rgba(0,0,0,.45)",

        glow: "0 0 40px rgba(22,242,179,.18)",
      },

      /*
      |--------------------------------------------------------------------------
      | Layout
      |--------------------------------------------------------------------------
      */

      maxWidth: {
        layout: "1400px",

        content: "1200px",
      },

      spacing: {
        section: "7rem",

        hero: "9rem",
      },

      /*
      |--------------------------------------------------------------------------
      | Background
      |--------------------------------------------------------------------------
      */

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      /*
      |--------------------------------------------------------------------------
      | Animation
      |--------------------------------------------------------------------------
      */

      transitionTimingFunction: {
        smooth: "cubic-bezier(.22,1,.36,1)",
      },

      transitionDuration: {
        250: "250ms",

        400: "400ms",
      },
    },
  },

  plugins: [],
};
