import React from 'react'

export default class extends React.Component {
	render(){
		return (
			<button>
				{this.props.children}
				<style jsx>{`
					button{
						border: 0;
						outline: 0;
						background-color: #000;
						color: #fff;
						text-transform: uppercase;
						padding: 10px 20px;
						font-size: 1.1em;
						display: block;
						margin: 30px 0;
					}
				`}</style>
			</button>
		)
	}
}
