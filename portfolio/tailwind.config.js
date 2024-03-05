/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        // blink: {
        //   "50%": {
        //     borderColor: "transparent"
        //   },
        //   "100%": {
        //     borderColor: "blue"
        //   }  
        // }
      },
      animation: {
        typing: "typing 2s steps(20) alternate infinite, blink .7s"
      }
    },
    },
  plugins: [],
}

