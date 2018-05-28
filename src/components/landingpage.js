import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div className="landingpage">
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
							src="https://www.bestpersonnel.ie/wp-content/uploads/2017/11/Sani-Sebastian.png"
							alt="avatar"
							className="avatar-img"
						/>
						<div className="banner-text">
							<h1>Font-End Developer</h1>
							<hr/>
							<p>HTML/CSS | bootstrap | Javascript | React | React Native | Node JS | Express | MongoDB</p>
							<div className="social-links">
								<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
									<i class="fab fa-google" aria-hidden="true" />
								</a>
								<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
									<i class="fab fa-github" aria-hidden="true" />
								</a>
								<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
									<i class="fab fa-youtube" aria-hidden="true" />
								</a>
								<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
									<i class="fab fa-free-code-camp" aria-hidden="true" />
								</a>
								
								
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
			)
	} 
} 
export default Landing;