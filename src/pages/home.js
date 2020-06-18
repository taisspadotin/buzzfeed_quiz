import React,{Component} from 'react';
import Header from '../components/header';
import './style.scss';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import info from './quiz/data';

class Home extends Component{

	render(){
		//let cards = [{title: 'Qual bebida você seria?', desc: 'Descubra qual bebida mais combina com você', img:require('../img/milk.jpg'), link:'/quizzes?id=1'}, {title: 'Qual animal nojento você seria?', link:'#'}, ];
		let cards =  info.quizzes;
		//console.log(info);
		return(
				<div className="home">
					<Header/>
					<div className="body">
						<br/>
						<div className="quizzes">
							<div className="row-card">
							{cards.map((card, i)=>{
								return(
									<Card style={{ width: '18rem' }} key={i} className="col-card card" >
									  <Link to={card.link} className="a">
									  <Card.Img variant="top" src={card.img} style={{height: '250px', marginTop: '5px'}}/>
									  <Card.Body>
									    <Card.Title>{card.title}</Card.Title>
									    <Card.Text>
									      {card.desc}
									    </Card.Text>
									    </Card.Body>
									    </Link>
									</Card>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			);
	}
}

export default Home;