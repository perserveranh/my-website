import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Perserver Anh</h2>
						<img
							src="http://www.soccercsr.ca/wp-content/uploads/2018/02/man-avatar.png"
							alt="avater"
							style={{height:'250px'}}
						/>
						<p style={{width:'75%',margin:'auto', paddingTop:'1em'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/> 
						<div className="contact-list">
							<List>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
								<i class="fas fa-phone-square" aria-hidden="true" />
								(+84) 1234-677-668
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
								<i class="fas fa-fax" aria-hidden="true" />
								(+84) 1234-677-668
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
								<i class="fas fa-envelope" aria-hidden="true" />
								perserver.anh@gmail.com
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
								<i class="fas fa-skype" aria-hidden="true" />
								Tuấn Anh
								</ListItemContent>
							</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
			)
	} 
} 
export default Contact;