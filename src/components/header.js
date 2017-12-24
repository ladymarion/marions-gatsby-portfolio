import React from 'react'
import Link from 'gatsby-link'

export default class extends React.Component {
	render(){
		return (
			<header>

				<div><Link to='/'>Home</Link></div>
				<div><Link to='/another-page'>Resume</Link></div>
				<div><Link to='/another-page'>Portfolio</Link></div>
				<div><Link to='/another-page'>Contact</Link></div>

				<style jsx>{`
					header {
						background-color: #000;
						width: 100%;
					}

					div {
						display: inline-block;
						padding: 10px 10px;
						font-size: .75em;
						border-left: 1px solid #444;
						width: 25%;

					}

					div:first-child {
						border-left: none;
					}

					div:hover {
						background-color: #222;
					}

				`}</style>

				<style jsx global>{`
					header{
						text-align: center;
						a{
							color: #fff;
							text-decoration: none;
						}

					}
				`}</style>

			</header>
		)
	}
}
