import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
	render() {
		return (
			<section>
				Another page!
				<Button>Same button component, different contents</Button>
				<style jsx>{`
					section{
						max-width: 1200px;
						padding: 30px;
						margin: auto;
					}
				`}</style>
			</section>
		)
	}
}
