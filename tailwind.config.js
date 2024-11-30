/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add your custom font
      },
      fontSize: {
        // Base typography (laptop-desktop)
        "display-lg": [
          "64px",
          { lineHeight: "74px", letterSpacing: "-0.35px", fontWeight: "bold" },
        ],
        "headline-lg": [
          "40px",
          { lineHeight: "48px", letterSpacing: "0px", fontWeight: "600" },
        ],
        "headline-md": [
          "32px",
          { lineHeight: "40px", letterSpacing: "0px", fontWeight: "600" },
        ],
        "headline-sm": [
          "28px",
          { lineHeight: "36px", letterSpacing: "0px", fontWeight: "600" },
        ],
        "title-lg": [
          "20px",
          { lineHeight: "28px", letterSpacing: "0px", fontWeight: "600" },
        ],
        "title-md": [
          "16px",
          { lineHeight: "20px", letterSpacing: "1px", fontWeight: "500" },
        ],
        "title-sm": [
          "14px",
          { lineHeight: "18px", letterSpacing: "0.1px", fontWeight: "bold" },
        ],
        "body-lg": [
          "20px",
          { lineHeight: "32px", letterSpacing: "0.5px", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.25px", fontWeight: "400" },
        ],
        "body-sm": [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.3px", fontWeight: "400" },
        ],
        "label-lg": [
          "14px",
          { lineHeight: "20px", letterSpacing: "1px", fontWeight: "500" },
        ],
        "label-md": [
          "12px",
          { lineHeight: "16px", letterSpacing: "1px", fontWeight: "400" },
        ],

        // Responsive typography (tablet, mobile) To be added later
      },
    },
  },
  plugins: [],
};
