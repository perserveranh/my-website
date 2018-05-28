import React, {Component} from 'react';
import {Tabs,Tab , Grid , Cell, Card , CardTitle, CardText , CardActions, CardMenu, Button , IconButton } from 'react-mdl';

class Project extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {activeTab:0};
	}

		toogleCategogies(){
	if(this.state.activeTab === 0)
		{
		return(
			<div className="projects-grid">
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
			</div>
			)
		}
	else if(this.state.activeTab === 1){
		return(
			<div><h1>This is Angular</h1></div>
			)
	}
	else if(this.state.activeTab === 2){
		return(
			<div><h1>This is VueJS</h1></div>
			)
	}
	else if(this.state.activeTab === 3){
		return(
			<div><h1>This is MongoDB</h1></div>
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
					<Cell col={12}>
					<div className="content">{this.toogleCategogies()}</div>
					</Cell>
				</Grid>
			</div>
			)
	} 
} 
export default Project;