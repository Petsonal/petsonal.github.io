/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    cssnano: {},
  },
};

export default config;
