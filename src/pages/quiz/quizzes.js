import React,{Component} from 'react';
import '../style.scss';
import info from './data';
import Header from '../../components/header';
import {Card} from 'react-bootstrap';
import {Icon} from 'semantic-ui-react';



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
	componentDidMount = async () =>{
		/*console.log('to');
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id_params = urlParams.get('id');
		//console.log(id);

		let data = info.quizzes.filter( proj => ( proj.id === parseInt(id_params)));
		data = data[0];
		let cards = data.cards;
		console.log(data);
		this.setState({data: cards});
		console.log(this.state.data);
		*/
	}
	seleciona = (i, peso, total) => {
		let result = this.state.result;
		result.push(peso);
		let visible = this.state.visible;
		visible.push(i);
		this.setState({result, visible});
		if(i === total){
			this.setState({showResult: true});
			
		}
		
	}
	render(){
		
		//console.log(cards);
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const id_params = urlParams.get('id');
		//console.log(id);

		let data = info.quizzes.filter( proj => ( proj.id === parseInt(id_params)));
		data = data[0];
		//console.log(data);

		let cards = data.cards;
		let tot = data.cards.length;
		tot = tot - 1;

		let resp = [];
		if(this.state.showResult === true){
			let answers = data.answers;
			let result = this.state.result;
			
			let t = {}; //variavel que vai contar quantas respostas tem

			result.forEach(value => {
				if(t[value]){
					t[value]++;
				}
				else{
					t[value] = 1;
				}
			});
			//console.log(t);
			
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
			//console.log(chave);
			//console.log(answers);

			//percoreendo o objeto de resposta:
			var NameAnswer;
			for(var i=0; i<answers.length ; i++){
				if(answers[i].option === chave){
					NameAnswer = answers[i].result;
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
									<div className="row">
									{card.values.map((card, i)=>{
											return(
												<Card style={{ width: '20rem' }} key={i} className="col-5 card"  onClick={()=>this.seleciona(j, card.peso, tot)}>
												  <Card.Img variant="top" src={card.img} style={{height: '200px', marginTop: '5px'}}/>
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
						ola
							<div className="body">{NameAnswer}</div>
						<br/>
						</div>
					}
				</div>	
			</div>
			);
	}
}

export default Quizzes;