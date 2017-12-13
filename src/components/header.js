import React from 'react'
import Link from 'gatsby-link'

export default class extends React.Component {
	render(){
		return (
			<header>
				<div><Link to='/'>Home</Link></div>
				<div><Link to='/another-page'>Another Page</Link></div>
				<style jsx>{`
					div{
						display: inline-block;
						margin: 0 10px;
					}
				`}</style>
			</header>
		)
	}
}
