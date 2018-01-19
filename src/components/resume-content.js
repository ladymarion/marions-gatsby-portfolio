import React from 'react'

export default class extends React.Component {
	render(){
		return (

			<section className='container'>

			<h1>Here is a brief summary<br/>of her&nbsp;dabblings:</h1>
				<div className="resume">

						<div className="job">
							<div className="col-narrow">
								<h3>Graphic Designer / Jr.&nbsp;Web&nbsp;Developer</h3>
								<p>Independent/Freelance</p>
								<p>May 2009 - Present</p>
							</div>

							<div className="col-wide">
								<p className="border">As an independent contractor, Marion has provided a variety of clients with a variety of design services including logo development and corporate identity projects, print design (flyers, posters, business cards, brochures, etc.), and website design and&nbsp;development.</p>
							</div>
						</div>

						<div className="job first-job">
							<div className="col-narrow">
								<h3>Graphic Designer</h3>
								<p>Escalade Sports</p>
								<p>March 2014 - May 2016</p>
							</div>

						<div className="col-wide">
								<p className="border">Marion really enjoyed working at Escalade Sports. While working there she had the opportunity to create branding for new product lines and assist with product development. She designed ads, catalogs, packaging and/or promotional materials for more than 28 sports brands. She also created branded displays according to retail customer concepts. She would often collaborate with the web design team to ensure brand unity between print and web designs. As a freelance Web Developer, Escalade Sports was one of her first&nbsp;clients!</p>
							</div>
						</div>

						<div className="job">
							<div className="col-narrow">
								<h3>Graphic Designer</h3>
								<p>The Bridges of&nbsp;Rancho&nbsp;Santa Fe</p>
								<p>Oct 2013 - June 2017</p>
							</div>


							<div className="col-wide last">
								<p className="border">The Bridge&apos;s originally hired Marion as a concierge. Upon discovery of her design skills they quickly transferred her responsibilites to the Marketing Department. By the time she left the Bridges she was responsible for both the Tennis and Rec Centre and Sports Centre accounts. Marion reported to the directors of both facilities with designs for seasonal event catalogs, flyers for print and web, sale advertisements and informational brochures. She maintained the website content for both facilities, created web banners, uploaded flyers, and managed Sports Centre email marketing blasts. She loved working for The Bridges, and continued to work for them independently for years after she moved away.</p>
							</div>

						</div>

					</div>


				<style jsx>{`

					.container {
						text-align: center;
						padding-top: 115px;
						padding-left: 30px;
						padding-right: 30px;
					}

					.resume {
						max-width: 370px;
						margin: auto;
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

					p {
						line-height: 1.5;
					}

					.col-narrow p {
						font-style: italic;
					}

					.col-wide p {
						margin: 10px;
					}

					.last {
						padding-bottom: 100px;
					}


					@media (min-width:600px) {

							.resume {
								max-width: 600px;
							}


							h1 {
								font-size: 2em;
								margin-bottom: 15px;
							}

							h3 {
								text-align: right;
								margin: 10px 0;
							}

							h3 ~ p {
								text-align: right;
							}

							p {
								text-align: left;
								padding-left: 15px;
							}

							.border {
								border-left: 1px solid #333;

							}

							.col-narrow {
								width: 30%;
								float: left;
								padding-right: 5px;
							}

							.col-wide {
								width: 70%;
								float: left;
								margin-bottom: 50px;
								padding-right: 10px;
							}

						}


						@media (min-width:900px) {
							.resume {
								max-width: 925px;
							}

							.job {
								margin: 80px 0;
							}

							h1 {
								font-size: 3em;
								margin-bottom: 20px;
							}

							h3 {
								font-size: 1.05em;
							}

							p {
								font-size: 1.03em;
							}

							.col-narrow {
								padding-right: 10px;
							}

							.col-wide {
								padding-right: 15px;
							}
						}



				`}</style>

			</section>

		)
	}
}
