/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
          'www.notion.so',
          'images.unsplash.com',
          's3.us-west-2.amazonaws.com',
          'programres.kbs.co.kr',
          'fs.jtbc.co.kr',
          'image.tving.com',
          'scf.static.kbs.co.kr',
          'program.kbs.co.kr',
          'static.mnetjp.com',
          'img.imbc.com',
          'img.imbc.com',
          'img.kbs.co.kr',
          'img2.sbs.co.kr',
          'image.tving.com'
      ],
      format: ['image/png', 'image/webp', 'image/jpeg']
  }
}

module.exports = nextConfig
