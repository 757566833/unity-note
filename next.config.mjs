import { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/constants.js';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
})



/** @type {import('next').NextConfig} */
const config = (phase) => {
    const nextConfig = {
        output: 'standalone',
        pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
        experimental: {
            mdxRs: true,
        },
    }
    if (PHASE_PRODUCTION_SERVER === phase || PHASE_PRODUCTION_BUILD == phase) {
        nextConfig.compiler = { removeConsole: true }
    }


    return withMDX(nextConfig);

};

export default config;