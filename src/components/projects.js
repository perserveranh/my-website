import React, {Component} from 'react';
import {Tabs,Tab , Grid , Cell, Card , CardTitle, CardText , CardActions, CardMenu, Button , IconButton } from 'react-mdl';
import Slider from "react-slick";
import Carousel from 'nuka-carousel';

class Project extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {activeTab:0};
	}

		toogleCategogies(){
	if(this.state.activeTab === 0)
		{
		return(
			// <div className="projects-grid">
			<Cell col={12} className="projects-grid">
			<Card shadow={5} style={{minWidth: '500' ,margin: 'auto'}}>
				<CardTitle style={{color: '#0e0412', height: '176px',background:'url(http://indigo.amsterdam/wp-content/uploads/2017/06/React-icon.svg_-e1498055414258.png) center/cover '}}>React</CardTitle>
				<CardText>
					 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        			 Mauris sagittis pellentesque lacus eleifend lacinia...
				</CardText>
				<CardActions border >
					<Button colored>Github</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#55056f'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '500' ,margin: 'auto'}}>
				<CardTitle style={{color: '#0e0412', height: '176px',background:'url(http://indigo.amsterdam/wp-content/uploads/2017/06/React-icon.svg_-e1498055414258.png) center/cover '}}>React</CardTitle>
				<CardText>
					 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        			 Mauris sagittis pellentesque lacus eleifend lacinia...
				</CardText>
				<CardActions border >
					<Button colored>Github</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#55056f'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>
			<Card shadow={5} style={{minWidth: '500' ,margin: 'auto'}}>
				<CardTitle style={{color: '#0e0412', height: '176px',background:'url(http://indigo.amsterdam/wp-content/uploads/2017/06/React-icon.svg_-e1498055414258.png) center/cover '}}>React</CardTitle>
				<CardText>
					 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        			 Mauris sagittis pellentesque lacus eleifend lacinia...
				</CardText>
				<CardActions border >
					<Button colored>Github</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#55056f'}}>
					<IconButton name="share" />
				</CardMenu>
			</Card>
			</Cell>
			// </div>
			)
		}
	else if(this.state.activeTab === 1){
		return(
			<Grid className="demo-grid-2">
				<Cell col={3}><Card shadow={5} style={{minWidth: '500' ,margin: 'auto'}}>
					<CardTitle style={{color: '#0e0412', height: '280px',background:'url(http://startupsac.com/wp-content/uploads/2015/10/AngularJS-Logo.png) center/cover '}}>Angular</CardTitle>
						<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris sagittis pellentesque lacus eleifend lacinia...
						</CardText>
					<CardActions border >
						<Button colored>Github</Button>
						<Button colored>CodePen</Button>
						<Button colored>LiveDemo</Button>
					</CardActions>
					<CardMenu style={{color: '#55056f'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card></Cell>
				<Cell col={3}><Card shadow={5} style={{minWidth: '500' ,margin: 'auto'}}>
				<CardTitle style={{color: '#0e0412', height: '280px',background:'url(http://startupsac.com/wp-content/uploads/2015/10/AngularJS-Logo.png) center/cover '}}>Angular</CardTitle>
				<CardText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Mauris sagittis pellentesque lacus eleifend lacinia...
				</CardText>
				<CardActions border >
				<Button colored>Github</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#55056f'}}>
				<IconButton name="share" />
				</CardMenu>
				</Card></Cell>
				<Cell col={3}><Card shadow={5} style={{minWidth: '500' ,margin: 'auto'}}>
				<CardTitle style={{color: '#0e0412', height: '280px',background:'url(http://startupsac.com/wp-content/uploads/2015/10/AngularJS-Logo.png) center/cover '}}>Angular</CardTitle>
				<CardText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Mauris sagittis pellentesque lacus eleifend lacinia...
				</CardText>
				<CardActions border >
				<Button colored>Github</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#55056f'}}>
				<IconButton name="share" />
				</CardMenu>
				</Card></Cell>
				<Cell col={3}><Card shadow={5} style={{minWidth: '500' ,margin: 'auto'}}>
				<CardTitle style={{color: '#0e0412', height: '280px',background:'url(http://startupsac.com/wp-content/uploads/2015/10/AngularJS-Logo.png) center/cover '}}>Angular</CardTitle>
				<CardText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Mauris sagittis pellentesque lacus eleifend lacinia...
				</CardText>
				<CardActions border >
				<Button colored>Github</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color: '#55056f'}}>
				<IconButton name="share" />
				</CardMenu>
				</Card></Cell>
			</Grid>
			)
	}
	else if(this.state.activeTab === 2){
			var settings = {
      dots: true,
      infinite: true,
      speed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
		return(
			<Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
			)
	}
	else if(this.state.activeTab === 3){
		return(
			<Carousel>
        <img style={{width:'100%',height:'400px'}} alt='xxx' src="https://www.cloudsigma.com/wp-content/uploads/mongodb-cloud-servers-862x287.png" />
        <img style={{width:'100%',height:'400px'}} alt='xxx' src="https://www.cloudsigma.com/wp-content/uploads/mongodb-cloud-servers-862x287.png" />
        <img style={{width:'100%',height:'400px'}} alt='xxx' src="https://www.cloudsigma.com/wp-content/uploads/mongodb-cloud-servers-862x287.png" />
        <img style={{width:'100%',height:'400px'}} alt='xxx' src="https://www.cloudsigma.com/wp-content/uploads/mongodb-cloud-servers-862x287.png" />
        <img style={{width:'100%',height:'400px'}} alt='xxx' src="https://www.cloudsigma.com/wp-content/uploads/mongodb-cloud-servers-862x287.png" />
        <img style={{width:'100%',height:'400px'}} alt='xxx' src="https://www.cloudsigma.com/wp-content/uploads/mongodb-cloud-servers-862x287.png" />
      </Carousel>
			)
	}


	}
	render() {
	
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>VueJS</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>
				
				<Grid >
				
					{this.toogleCategogies()}
					
				</Grid>
			</div>
			)
	} 
} 
export default Project;