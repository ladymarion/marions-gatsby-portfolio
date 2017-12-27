// Import your components here:

import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
	render() {
		return (
			<section className='container'>

				<div className="intro">
					<h1>Hi!</h1>
				</div>

				<div className="intro start">
					<h1>Please allow me to<br />introduce you to&nbsp;Marion.</h1>
					<img src="/me.jpg" alt="Photo of Marion Rose" />
					<p>(This is Marion)</p>
				</div>

				<div className="intro">
					<h1>Marion is learning<br />how to build websites.</h1>
					<img src="/me-learning.jpg" alt="Photo of Marion Rose" />
					<p>(This is not Marion, but she didn&apos;t have a photo of her thinking thoughfully at her&nbsp;computer.)</p>
				</div>

				<div className="intro last-intro">
					<h1>Before Marion decided<br />to learn about websites, she<br />dabbled in the world of design.</h1>
					<img src="/me-design.jpg" alt="Photo of Marion Rose" />
				</div>

]
				<style jsx>{`
					.container{
						max-width: 1200px;
						margin: auto;
						text-align: center;
					}

					.intro {
						height: 100vh;
						position: relative;
					}

					.intro,.start {
						margin-top: 50vh;
					}


					p {
						padding: 0 30px;
					}

					img{
						width: 75%;
						max-width: 350px;
					}

				`}</style>




			</section>
		)
	}
}
