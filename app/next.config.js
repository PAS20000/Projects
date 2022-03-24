export const images = {
    domains: [],
}
export const trailingSlash = true
export async function headers() {
    return [{
        source: '/:path*',
        headers: [{
            key: 'X-Frame-Options',
            value: 'DENY',
            
        }, 
        {
            key: 'x-robots-tag',
            value: 'all'
        }]
    }]
}