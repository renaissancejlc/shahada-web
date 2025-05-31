const isDev = process.env.NODE_ENV === 'development';
const isPWA = !isDev;

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

if (isPWA) {
  const withPWA = require('next-pwa')({
    dest: 'public',
  });
  module.exports = withPWA(nextConfig);
} else {
  module.exports = nextConfig;
}