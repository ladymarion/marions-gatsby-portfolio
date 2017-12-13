import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
	render() {
		return (
			<section className='container'>


				<p>Marion's website!</p>
				<p>Image: <br /> <img src='/logo.png' /></p>


				<style jsx>{`
					.container{
						max-width: 1200px;
						padding: 30px;
						margin: auto;
					}
					img{
						width: 300px;
					}
				`}</style>


			</section>
		)
	}
}