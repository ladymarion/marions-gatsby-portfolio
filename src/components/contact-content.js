import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'

export default class Index extends React.Component {
	render() {
		return (
      <section className='contact'>

        <h1>Marion would just love<br/> to hear from you!</h1>

        <h2>Marion Rose</h2>
        <p>Graphic Designer & Budding Web Developer</p>

				<form name="contact" netlify netlify-honeypot="bot-field" hidden>
				      <input type="text" name="name" />
				      <input type="email" name="email" />
				      <textarea name="message"></textarea>
				    </form>

				    <div id="root"></div>
				    <script type="text/babel">

				      ReactDOM.render(
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
				        </form>,
				        document.getElementById("root")
				      );

				    </script>



        <style jsx>{`
          .contact {
            height: 100vh;
            margin-top: 50vh;
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
