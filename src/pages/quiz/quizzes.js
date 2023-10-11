import React,{Component} from 'react';
import '../style.scss';
import info from './data';
import Header from '../../components/header';
import {Card, Row, Col} from 'react-bootstrap';
import {Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Quizzes extends Component{
	constructor(props){
		super(props);
		this.state = {
			result : [], 
			visible: [],
			data: {},
			showResult: false
		};
	}
	
	seleciona = (i, peso, total) => {
		let result = this.state.result;
		result.push(peso);
		let visible = this.state.visible;
		visible.push(i);
		this.setState({result, visible});
		if(i === total){ this.setState({showResult: true}); }
	}
	
	render(){
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id_params = urlParams.get('id');
	
		let data = info.quizzes.filter( proj => ( proj.id === parseInt(id_params)));
		data = data[0];
	
		let cards = data.cards;
		let tot = data.cards.length;
		tot = tot - 1;

		let resp = [];
		if(this.state.showResult === true){
			let answers = data.answers;
			let result = this.state.result;
			
			let t = {}; //variavel que vai contar quantas respostas tem

			result.forEach(value => {
				if(t[value]){ t[value]++; }
				else{ t[value] = 1; }
			});
			
			//pegar o que tem maior valor
			var maior = -Infinity;
			var chave;
			for(var prop in t){
				if(t.hasOwnProperty(prop)){
					if(t[prop] > maior){
						maior = t[prop];
						chave = prop;
					}
				}
			}

			//percoreendo o objeto de resposta:
			var NameAnswer;
			var DescAnswer;
			var ImgAswer;
			for(var i=0; i<answers.length ; i++){
				if(answers[i].option === chave){
					NameAnswer = answers[i].result;
					DescAnswer = answers[i].desc;
					ImgAswer = answers[i].img;
				}
			}
			
		}
		return(
			<div className="quizzes">
				<Header/>
				<div className="body" >
					<h1>{data.title}</h1>
					<small>{data.author}</small>
					<br/>
					<div className="social">
						<Icon name="facebook" style={{color: '#1877f2'}}/>
						<Icon name="pinterest" style={{color: '#e60019'}}/>
						<Icon name="twitter" style={{color: '#55acee'}}/>
						<Icon name="mail" style={{color: '#595959'}}/>
					</div>
					<br/>

					{cards.map((card, j)=>{
						return(
							<div key={j} style={{display: this.state.visible.indexOf(j)> -1 ? 'none' : 'block'}} >
									<div className="intro">
										<h2>{card.option}</h2>
									</div>
									<div className="row-card">
									{card.values.map((card, i)=>{
											return(
												<Card style={{ width: '20rem' }} key={i} className="col-dispo card"  onClick={()=>this.seleciona(j, card.peso, tot)}>
												  {card.hasOwnProperty('img') && <Card.Img variant="top" src={card.img} style={{height: '200px', marginTop: '5px'}}/>}
												  {card.hasOwnProperty('color') && 
												  		<div className="card-div" style={{height: '200px', marginTop: '5px', background:card.color}}>
												  			{card.hasOwnProperty('text') && <h3>{card.text}</h3>}
												  		</div>
												  }
												  <Card.Body>
												    <Card.Title>{card.title}</Card.Title>
												    <Card.Text>
												      {card.desc}
												    </Card.Text>
												    </Card.Body>
												</Card>
												)
									})}
									</div>
								</div>

							)
					})}
					{this.state.showResult === true && 
						<div className="result">
						<br/>
						<Row className="title">
							<Col sm={9}>
								<h4>{data.title}</h4>
							</Col>
							<Col sm={3} style={{padding: '0'}}>
								<a onClick={()=>window.location.reload()} style={{cursor: 'pointer'}}>
									<Icon name="redo"/>
									Refaça o quiz
								</a>
							</Col>
						</Row>
							<div className="body">
								<Row style={{margin:'0'}}>
									<Col sm={8}>
										<h2>{NameAnswer}</h2>
										<p>{DescAnswer}</p>
										<br/>
										<button className="botao-social" style={{background: '#3b5998'}}>
											<Icon name="facebook"/>
											Compartilhe
										</button>
										<button className="botao-social" style={{background: '#55acee'}}>
											<Icon name="twitter"/>
											Tuíte
										</button>
										<button className="botao-social" style={{background: '#0f65ef'}}>
											<Icon name="copy"/>
											Copiar Link
										</button>
									</Col>
									<Col className="img" sm={4}>
										{ImgAswer !== null && 
											<img src={ImgAswer}/>
										}
									</Col>
								</Row>
							</div>
						<br/>
						</div>
					}
				</div>	
			</div>
			);
	}
}

export default Quizzes;
