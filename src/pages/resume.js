// Import your components here:

import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'
import ResumeContent from 'components/resume-content'

export default class Index extends React.Component {
	render() {
		return (
			<section className='container'>

				<ResumeContent/>

			</section>
		)
	}
}
