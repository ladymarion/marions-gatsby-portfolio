import React from 'react'
import Link from 'gatsby-link'

export default class extends React.Component {
	render(){
		return (
			<header>

				<div className="navLink"><Link to='/'>Home</Link></div>
				<div className="navLink"><Link to='/another-page'>Resume</Link></div>
				<div className="navLink"><Link to='/another-page'>Portfolio</Link></div>
				<div className="navLink"><Link to='/another-page'>Contact</Link></div>

				<style jsx>{`


					div {
						display: inline-block;
						font-family: 'PT Sans', sans-serif;
						font-size: 1em;
					}

					.navLink {
						padding: 0;
						margin: 40px 20px 5px 20px;
					  background-image: linear-gradient(black, black);
					  background-size: 0 1px, auto;
					  background-repeat: no-repeat;
					  background-position: center bottom;
					  transition: all .2s ease-out;
					}

					.navLink:hover {
					  background-size: 100% 1px, auto;
					}


				`}</style>

				<style jsx global>{`
					header{
						text-align: center;
						a{
							color: black;
							text-decoration: none;
						}

					}
				`}</style>

			</header>
		)
	}
}
