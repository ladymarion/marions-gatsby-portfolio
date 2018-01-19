import Button from 'components/button'
import React from 'react'
import Link from 'gatsby-link'
import Portfolio from 'components/portfolio'


export default class Index extends React.Component {
	render() {
		return (
      <section className='container'>

			<Portfolio />

        <style jsx>{`

          .container{
						max-width: 1200px;
						margin: auto;
						text-align: center;
            padding-top: 100px;
					}

        
        `}</style>



      </section>
		)
	}
}
