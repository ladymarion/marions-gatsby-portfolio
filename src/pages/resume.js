// Import your components here:

import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
	render() {
		return (
			<section className='container'>


		      <h1>Here is a brief summary of her dabblings:</h1>


		      <div className="job">
		        <div className="col-narrow">
		          <h3>Graphic Designer / Jr. Web Developer</h3>
		          <p>Independent/Freelance</p>
		          <p>May 2009 - Present</p>
		        </div>

		        <div className="col-wide">
		          <p>As an independent contractor, Marion has provided a variety of clients with a variety of design services including logo development and corporate identity projects, print design (flyers, posters, business cards, brochures, etc.), and website design and&nbsp;development.</p>
		        </div>
		      </div>



		      <div className="job first-job">
		        <div className="col-narrow">
		          <h3>Graphic Designer</h3>
		          <p>Escalade Sports</p>
		          <p>March 2014 - May 2016</p>
		        </div>

		        <div className="col-wide">
		          <p>Marion really enjoyed working at Escalade Sports. While working there she had the opportunity to create branding for new product lines and assist with product development. She designed ads, catalogs, packaging and/or promotional materials for more than 28 sports brands. She also created branded displays according to retail customer concepts. She would often collaborate with the web design team to ensure brand unity between print and web designs. As a freelance Web Developer, Escalade Sports was one of her first&nbsp;clients!</p>
		        </div>
		      </div>



		      <div className="job">
		        <div className="col-narrow">
		          <h3>Graphic Designer</h3>
		          <p>The Bridges of Rancho Santa Fe</p>
		          <p>October 2013 - June 2017</p>
		        </div>


		        <div className="col-wide">
		          <p>The Bridge&apos;s originally hired Marion as a concierge. Upon discovery of her design skills they quickly transferred her responsibilites to the Marketing Department. By the time she left the Bridges she was responsible for both the Tennis and Rec Centre and Sports Centre accounts. Marion reported to the directors of both facilities with designs for seasonal event catalogs, flyers for print and web, sale advertisements and informational brochures. She maintained the website content for both facilities, created web banners, uploaded flyers, and managed Sports Centre email marketing blasts. She loved working for The Bridges, and continued to work for them independently for years after she moved away.</p>
		        </div>
		      </div>


				<style jsx>{`

					.container {
						max-width: 420px;
						margin: auto;
						text-align: center;
						padding-top: 115px;
						padding-left: 30px;
						padding-right: 30px;
					}

					.job {
					  margin: 50px 0;
					}

					h3 {
						margin: 10px;
					}

					h3 ~ p {
						font-family: 'PT Sans', sans-serif;
					  margin: 0;
					}

					.col-narrow p {
					  font-style: italic;
					}

					.col-wide p {
						margin: 10px;
					}


				`}</style>

			</section>
		)
	}
}
