import React from 'react'
import Link from 'gatsby-link'

export default class extends React.Component {
	render(){
		return (
			<footer>

				<div className='col-narrow'>
					<p><strong>Marion Rose</strong><br/>marionelizabethrose@gmail.com</p>
				</div>

				<div>
				<a href="https://www.facebook.com/marion.vontschudi" target="_blank"><img src="/fb-logo.svg" alt="facebook-logo" /></a>
				<a href="https://www.linkedin.com/in/marionerose" target="_blank"><img src="/in-logo.svg" alt="linkedin-logo" /></a>
				<a href="https://www.instagram.com/mary_vontschudi/" target="_blank"><img src="/ig-logo.svg" alt="facebook-logo" /></a>


				</div>


			<style jsx>{`
				footer {
					height: 200px;
					background-color: #000;
					color: #fff;
					text-align: center;
					padding-top: 20px;
					margin-top: 50px;
				}

				img {
					width: 45px;
					margin: 3px;
					padding: 5px;
				}


				`}</style>
			</footer>
		)
	}
}
