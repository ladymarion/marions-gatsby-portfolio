import React from 'react'

export default class extends React.Component {
	render(){
		return (
			<button>
				<div className="navLink">{this.props.children}</div>
				<style jsx>{`
					button{
						border: 0;
						outline: 0;
						background-color: #000;
						color: #fff;
						font-family: 'PT Sans', sans-serif;
						font-size: 1em;
						padding: 15px 35px;
						display: block;
						margin: 45px auto;
						text-align: center;
					}

					.navLink {
						background-image: linear-gradient(#fff, #fff);
						background-size: 0 1px, auto;
						background-repeat: no-repeat;
						background-position: center bottom;
						transition: all .2s ease-out;
						z-index:4;
					}

					.navLink:hover {
						background-size: 100% 1px, auto;
					}

				`}</style>
			</button>
		)
	}
}
