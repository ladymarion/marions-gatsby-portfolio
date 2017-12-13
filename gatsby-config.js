require('dotenv').config({ silent: true })
const meta = require('./src/meta')

const plugins = [
	'gatsby-plugin-styled-jsx-postcss',
	'gatsby-plugin-sharp',
	'gatsby-transformer-sharp',
	'gatsby-plugin-offline',
	'gatsby-plugin-react-helmet',
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'pages',
			path: `${__dirname}/src/pages`,
		},
	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'img',
			path: `${__dirname}/src/img`,
		},
	},
	{
		resolve: 'gatsby-transformer-remark',
		options: {
			plugins: [
				{
					resolve: 'gatsby-remark-images',
					options: {
						maxWidth: 590,
					},
				},
				{
					resolve: 'gatsby-remark-responsive-iframe',
					options: {
						wrapperStyle: 'margin-bottom: 1.0725rem',
					},
				},
				'gatsby-remark-prismjs',
				'gatsby-remark-copy-linked-files',
				'gatsby-remark-smartypants',
			],
		},
	},
	{
		resolve: 'gatsby-plugin-sitemap',
		options: {
			serialize: ({ site, allSitePage }) => {
				allSitePage.edges = allSitePage.edges.filter((edge) => {
					if ([
						// Excluded pages from sitemap
						'/404',
						'/offline-plugin-app-shell-fallback',
					].indexOf(edge.node.path) === -1) return true
					return false
				})
				return allSitePage.edges.map(edge => {
					// Remove trailing slash
					let path = edge.node.path.split('/')
					if (!path[path.length - 1]) path.pop()
					path = path.join('/')
					return {
						url: site.siteMetadata.siteUrl + path,
						changefreq: `daily`,
						priority: 0.7,
					}
				})
			}
		}
	},
]

if (process.env.GOOGLE_ANALYTICS_ID){
	plugins.push({
		resolve: 'gatsby-plugin-google-analytics',
		options: {
			trackingId: process.env.GOOGLE_ANALYTICS_ID
		}
	})
}
else{
	console.log('No Google Analytics ID found')
}

// Always keep as last
plugins.push({
	resolve: 'gatsby-plugin-netlify',
	options: {
		headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
		allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
		mergeSecurityHeaders: true, // boolean to turn off the default security headers
		mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
		mergeCachingHeaders: true, // boolean to turn off the default caching headers
		transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
	}
})

module.exports = {
	siteMetadata: meta,
	plugins: plugins,
}
