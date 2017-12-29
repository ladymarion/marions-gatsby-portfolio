import React from 'react'

export default class extends React.Component {
	render(){
		return (

      <section className='container'>

        <h1>Here is some of Marion&apos;s work:</h1>

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


        <style jsx>{`

          .container{
            max-width: 1200px;
            margin: auto;
            text-align: center;
            padding-top: 100px;
          }

          .outlined {
            border: 1px solid #ededed;
          }

          img{
            width: 75%;
            margin: 10px;
            max-width: 350px;
          }

        `}</style>

      </section>


		)
	}
}
