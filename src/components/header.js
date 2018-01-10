import React from 'react'
import Link from 'gatsby-link'

export default class extends React.Component {
	render(){
		return (
			<header>
				<div className="topNav">
					<div className="navLink"><Link to='/'>Home</Link></div>
					<div className="navLink"><Link to='/resume'>Resume</Link></div>
					<div className="navLink"><Link to='/portfolio'>Portfolio</Link></div>
					<div className="navLink"><Link to='/contact'>Contact</Link></div>
				</div>


				<style jsx>{`

					div {
						display: inline-block;
						font-family: 'PT Sans', sans-serif;
						font-size: 1em;
					}

					.topNav {
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						background-color: #000;
						z-index: 2;

					}

					.navLink {
						padding: 0;
						margin: 40px 20px 10px 20px;
					  background-image: linear-gradient(#fff, #fff);
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
							color: #fff;
							text-decoration: none;
						}
					}
				`}</style>

			</header>
		)
	}
}
