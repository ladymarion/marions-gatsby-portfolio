import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'


export default class Index extends React.Component {
	render() {
		return (
      <section className='contact'>

			<div className='col-wide'>
				<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="contact" />

					<h1>Marion would just looooooove to hear from&nbsp;YOU!</h1>

					<div>
					    <label for="name">Name:</label>
					    <input type="text" id="name" name="user_name" />
					</div>

					<div>
					    <label for="mail">Email:</label>
					    <input type="email" id="mail" name="user_mail" />
					</div>

					<div>
							<label for="msg">Message:</label>
					    <textarea id="msg" name="user_message"></textarea>
					</div>

					<Button type="submit">Send your message</Button>

				</form>
			</div>



  		<style jsx>{`

					body{
						position: relative;
						min-height: 100%;
					}

          .contact {
            margin-top: 130px;
						width: 100%;
						margin-bottom: 80px;
          }

					form {
						margin: 0 auto;
						width: 80%;
						max-width: 500px;
							div {
							margin-top: 15px;
							}
					}

					h1 {
						text-align: center;
						max-width: 322px;
						margin: 40px auto;
					}

					label {
						display: block;
						font-family: 'Vollkorn', serif;
						font-size: 1em;
						padding-bottom: 5px;
					}

					input, textarea {
						font-family: 'PT Sans', sans-serif;
						font-size: .9em;
						padding: 5px 8px;
						width: 100%;
						box-sizing: border-box;
						border: 1px solid #999;
					}

					textarea {
						min-height: 50px;
						overflow: scroll;
					}


					.col-narrow {
						font-family: 'PT Sans', sans-serif;
						text-align: center;
						margin-top: 75px;
					}


					@media (min-width:600px) {

						.contact {
	            margin-top: 130px;
							margin-bottom: 85px;
						}

						h1 {
							max-width: 500px;
						}

						textarea {
							min-height: 200px;
						}

					}


					@media (min-width:900px) {

						.contact {
							margin-top: 200px;
						}

						form {
							max-width: 700px;
						}

						h1 {
							max-width: 700px;
						}



					}


        `}</style>

      </section>
		)
	}
}
