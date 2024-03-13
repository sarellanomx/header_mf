/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => { // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"fe1",
        filename: "static/chunks/remoteEntry.js", // remote file name which will used later
        remoteType: "script",
        exposes: { // expose all component here.
          "./header": "./src/component/Header"
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
        ]
      })
    )
    return config
  }
}

module.exports = nextConfig