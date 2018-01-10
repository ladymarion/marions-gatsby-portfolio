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
