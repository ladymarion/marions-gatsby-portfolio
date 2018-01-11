import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
	render() {
		return (
      <section className='contact'>

			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="contact" />

			    <div>
			        <label for="name">Name:</label>
			        <input type="text" id="name" name="user_name" />
			    </div>
			    <div>
			        <label for="mail">E-mail:</label>
			        <input type="email" id="mail" name="user_mail" />
			    </div>
			    <div>
			        <label for="msg">Message:</label>
			        <textarea id="msg" name="user_message"></textarea>
			    </div>
			</form>




        <style jsx>{`
          .contact {
            height: 100vh;
            margin-top: 50vh;
						float: left;
          }

          h2 {
            font-family: 'PT Sans', sans-serif;
            font-size: 1.10em;
            margin-top: 50px;
            margin-bottom: 0;
          }

          p {
            margin: 0;
          }


        `}</style>

      </section>
		)
	}
}
