require('dotenv').config({ silent: true })
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

function templatePath(id){
	return path.resolve(`./src/templates/${id}.js`)
}

// Removes trailing slash
exports.onCreatePage = ({ page, boundActionCreators }) => {
	const { createPage, deletePage } = boundActionCreators
	return new Promise((resolve, reject) => {
		const newPage = Object.assign({}, page, {
			path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
		})
		if (newPage.path !== page.path) {
			deletePage(page)
			createPage(newPage)
		}
		resolve()
	})
}


const requiredFields = {
	id: '',
	template: '',
}
