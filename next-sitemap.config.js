/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://amorometro.com',
  generateRobotsTxt: true, // (optional)
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: 'Googlebot', disallow: '/amor' }
		]
	}
}

