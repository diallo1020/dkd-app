export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",

      {
        dkd: {
          primary: "#16a34a",     // vert principal (boutons)
          secondary: "#0ea5e9",   // bleu accent
          accent: "#f59e0b",      // orange
          neutral: "#111827",     // noir doux
          "base-100": "#ffffff",  // fond principal
          "base-200": "#f3f4f6",  // gris clair
          "base-300": "#e5e7eb",

          info: "#3b82f6",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
    ],
  },
}