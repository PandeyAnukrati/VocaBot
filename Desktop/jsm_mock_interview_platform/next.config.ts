const nextConfig = {
 experimental: {
  serverActions: true,
 },
 eslint: {
  ignoreDuringBuilds: false,
 },
 typescript: {
  ignoreBuildErrors: false,
 },
};

export default nextConfig;
