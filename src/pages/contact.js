import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
	render() {
		return (
      <section className='contact'>

			<form name="contact" netlify netlify-honeypot="bot-field" hidden>
			  <input type="text" name="name" />
			  <input type="email" name="email" />
			  <textarea name="message"></textarea>
			</form>


			<form method="post">
			          <input type="hidden" name="form-name" value="contact" />
			          <p>
			            <label>Your Name: <input type="text" name="name"/></label>
			          </p>
			          <p>
			            <label>Your Email: <input type="email" name="email"/></label>
			          </p>
			          <p>
			            <label>Message: <textarea name="message"></textarea></label>
			          </p>
			          <p>
			            <button type="submit">Send</button>
			          </p>
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
