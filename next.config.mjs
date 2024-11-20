/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.pdf$/,
        type: 'asset/resource', // For Webpack 5
      });
      return config;
    },
    typescript: {
      ignoreBuildErrors: true,
    }
  };
  
export default nextConfig;