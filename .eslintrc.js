module.exports = {
  env: {
    "browser": true,
    "jasmine": true,
  },
  globals: {
    SUPERCARERS_API_URL: false,
    STRIPE_KEY: false,
    STRIPE_CLIENT_ID: false,
    StripeCheckout: false,
    FormData: false,
    google: false,
  },
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: ["import", "jsx-a11y", "react"],
  rules: {
    "func-names": ["off"],
    "import/extensions": ["error", { jsx: "always" }],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.js", "**/*.test.jsx"] }
    ],
    "no-underscore-dangle": ["error", { allowAfterThis: true }],
    "react/jsx-filename-extension": ["off"],
    "react/prefer-es6-class": ["off"],
    "react/prefer-stateless-function": ["off"],
    "object-shorthand": ["off"],
    "react/jsx-filename-extension": ["off"],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "import/extensions": ["off"],
    "react/no-multi-comp": ["error", { "ignoreStateless": true }],
  },
};
