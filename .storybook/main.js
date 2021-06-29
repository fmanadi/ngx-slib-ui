module.exports = {
  "stories": [
    "../projects/slib-ui/button/src/*.stories.mdx",
    "../projects/slib-ui/**/src/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  }
}
