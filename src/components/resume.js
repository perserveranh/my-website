import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return(
			<div className="resume-body">
				<Grid className="resume-grid">
					<Cell col={4}>
						<div style={{textAlign:'center'}}>
							<img 
								src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
								alt="avatar"
								style={{height:'200px'}}
							/>
						</div>
						<h2 style={{textAlign:'center'}}>Perserver Anh</h2>
						<h4 style={{color:'grey',textAlign:'center'}}>Information Technology</h4>
						<hr/>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
						<h5>Birth day</h5>
						<p>25 - 07 - 1996</p>
						<h5>Email</h5>
						<p>perserver.anh@gmail.com</p>
						<h5>Website</h5>
						<p>mywebsite.com</p>
						<hr style={{borderTop:'3px solid red' , width:'50%'}}/>
					</Cell>
					<Cell col={8} className="resume-right-col">
						<h2>Education</h2>
						<Education 
						startYear={2014}
						endYear={2019}
						schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
						schoolName={'Military Technical Academy'}
						/>
						<Education 
						startYear={2017}
						endYear={2018}
						schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
						schoolName={'Bach Khoa Aptech'}
						/>
						<hr/>
						<h2>Experience</h2> 
						<Experience startYear={2016}
						endYear={2017}
						jobName={'SEO'}
						jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
						/>
						<Experience startYear={2017}
						endYear={2018}
						jobName={'WEB DESIGN'}
						jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
						/>
						<hr/>
						<h2>Skills</h2>
						<Skills 
						skill={'javascrips'}
						progress={100}
						buffer={0}
						/>
						<Skills 
						skill={'HTML/CSS'}
						progress={70}
						buffer={0}
						/>
						<Skills 
						skill={'NodeJS'}
						progress={70}
						buffer={0}
						/>
						<Skills 
						skill={'React'}
						progress={50}
						buffer={10}
						/>
						<Skills 
						skill={'Angular'}
						progress={'indeterminate'}
						buffer={20}
						/>
					</Cell>
				</Grid>
			</div>
			)
	} 
} 
export default Resume;