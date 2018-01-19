import React from 'react'

export default class extends React.Component {
	render(){
		return (

      <section className='container'>

        <h1>Here is some of Marion&apos;s work:</h1>
				<div className="grid">
	        <img src="square-woodplay.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-tribe.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-stiga.jpg" alt="Photo of Marion Rose" className="outlined"/>
	        <img src="square-vivasol.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-counterweights.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-bridges.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-sunshade.jpg" alt="Photo of Marion Rose" className="outlined"/>
	        <img src="square-toughnut.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-walther.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-smartergames.jpg" alt="Photo of Marion Rose"/>
	        <img src="square-courthouse.jpg" alt="Photo of Marion Rose"/>
					<img src="square-woodplay.jpg" alt="Photo of Marion Rose"/>
				</div>




        <style jsx>{`

          .container{
            max-width: 1200px;
            margin: auto;
            text-align: center;
          }

					h1 {
						margin-bottom: 35px;
					}

          .outlined {
            border: 1px solid #ededed;
          }

					.grid {
						max-width: 95%;
						margin: 0 auto;
					}

          img{
            margin: 10px;
            max-width: 300px;
					}


					@media (min-width:400px) {

						img {
							margin: 13px;
							max-width: 275px;
						}

						.grid {
							margin: 0 auto;
						}

					}


					@media (min-width:600px) {

							h1 {
								font-size: 2em;
								clear: both;
							}

					}



					@media (min-width:900px) {
						img {
							max-width: 300px;
						}

						.grid {
							max-width: 85%;
						}

					}

					@media (min-width: 1166px) {

						.grid {
							max-width: 100%;
						}

						img {
							max-width: 270px;
							filter: gray;
								-webkit-filter: grayscale(1);
								-webkit-transition: all .2s ease-in-out;
						}

						img:hover {
							filter: none;
								-webkit-filter: grayscale(0);
								-webkit-transform: scale(1.01);

						}

					}

        `}</style>

      </section>


		)
	}
}
