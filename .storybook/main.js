module.exports = {
  stories: [
    "../example/**/*.stories.mdx",
    "../example/**/**.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  babel: async (options) => {
    const config = {
      ...options
    }

    config.plugins.push(
      '@babel/plugin-transform-modules-commonjs',
    )

    return config
  }
}