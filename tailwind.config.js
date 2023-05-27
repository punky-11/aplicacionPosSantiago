/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.css", "./styles/**/*.css", "./views/**/*.ejs", 
  "./routr/**/*.js", "./controller/**/*.js","./models/**/*.js"],
  theme: {
colors: {"Pizarra":"#020617",
"white":"#FFFFFF",
"indigo":"#4f46e5"},
textColor: {
  "indigo": "#5a67d8",
  "gray":"",
  "white":"#FFFFFF",
},
    extend: {},
  },
  plugins: [],
}

