import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    
    return [
      {
        source: '/garden-planner',
        destination: `${process.env.GARDEN_PLANNER_DOMAIN}/garden-planner`,
      },
      {
        source: '/garden-planner/:path+',
        destination: `${process.env.GARDEN_PLANNER_DOMAIN}/garden-planner/:path+`,
      },
    ];
  }
};

export default nextConfig;