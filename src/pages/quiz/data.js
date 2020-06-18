const info = {
	quizzes:[
		{
			id: 1,
			title: "Qual objeto inanimado você seria?",
			desc: 'Descubra qual bebida mais combina com você', 
			img: require('../../img/milk.jpg'), 
			author: 'Taís Spadotin',
			link: '/quizzes?id=1',
			cards:[
				{
					option: "Escolha uma roupa",
					values:[
						{img: require("./img/roupa1.jpg"), desc: "", peso:'a'},
						{img: require("./img/roupa2.jpg"), desc: "", peso:'b'},
						{img: require("./img/roupa3.jpg"), desc: "", peso:'c'},
						{img: require("./img/roupa4.jpg"), desc: "", peso:'d'},
						{img: require("./img/roupa5.jpg"), desc: "", peso:'e'},
						{img: require("./img/roupa6.jpg"), desc: "", peso:'f'},
					]
				},
				{
					option: "Escolha uma cor",
					values:[
						{color: 'red', desc: "", peso:'a', text:'ola'},
						{color: 'green', desc: "", peso:'b'},
						{color: 'pink', desc: "", peso:'c'},
						{color: 'blue', desc: "", peso:'d'},
						{color: '#000', desc: "", peso:'e'},
						{color: 'purple', desc: "", peso:'f'},
					]
				},
				{
					option: "Escolha uma cor2",
					values:[
						{img: require("./img/roupa1.jpg"), desc: "", peso:'a'},
						{img: require("./img/roupa2.jpg"), desc: "", peso:'b'},
						{img: require("./img/roupa3.jpg"), desc: "", peso:'c'},
						{img: require("./img/roupa4.jpg"), desc: "", peso:'d'},
						{img: require("./img/roupa5.jpg"), desc: "", peso:'e'},
						{img: require("./img/roupa6.jpg"), desc: "", peso:'f'},
					]
				}
			],
			answers: [
				{
					option: 'a',
					result: 'pessoa boba',
					desc: 'Você é uma pessoa bobona'
				},
				{
					option: 'b',
					result: 'pessoa boba2',
					desc: 'Você é uma pessoa bobona'
				},
				{
					option: 'c',
					result: 'pessoa boba3',
					desc: 'Você é uma pessoa bobona'
				},
				{
					option: 'e',
					result: 'pessoa boba4',
					desc: 'Você é uma pessoa bobona'
				},
				{
					option: 'f',
					result: 'pessoa boba5',
					desc: 'Você é uma pessoa bobona'
				}
			]
		},
		{
			id: 2,
			title: "Monte uma casa e diremos qual super poder você teria",
			desc: 'Monte uma casa e diremos qual super poder você teria', 
			img: require('./img/casa1/index.jpeg'), 
			author: 'Taís Spadotin',
			link: '/quizzes?id=2',
			cards:[
				{
					option: "Escolha uma fachada",
					values:[
						{img: require("./img/casa1/fachada1.jpeg"), peso:'a'},
						{img: 'https://www.decorfacil.com/wp-content/uploads/2017/10/20171015casas-de-praia-27.jpg', peso:'b'},
						{img: 'https://imagens-revista.vivadecora.com.br/uploads/2017/06/casas-de-campo-fachadas-de-casas-sq-arquitetos-associados-65560.jpg', peso:'c'},
						{img: 'https://i.pinimg.com/236x/ea/33/99/ea339931ca7ac060eed2606ed6046f4f.jpg', peso:'d'},
						
					]
				},
				{
					option: "Escolha uma sala",
					values:[
						{img: 'https://www.decorfacil.com/wp-content/uploads/2018/07/20180716sala-de-estar-decorada-64.jpg', peso:'a'},
						{img: 'https://i.pinimg.com/originals/5f/44/c4/5f44c45ef0bd8af5d03f06fc928a24b2.jpg', peso:'a'},
						{img: 'https://dicasdecor.com/wp-content/uploads/2019/09/67904426_162683681517241_8919562685792155440_n1-819x1024.jpg', peso:'a'},
						{img: 'https://moveisgava.com.br/novo-site/wp-content/uploads/2016/06/apto-madeira-ptobco-sala4-1500x1000.jpg', peso:'a'},
						{img: 'https://suacasamoderna.com/sites/default/files/2020-01/sua-casa-moderna-tv-sala-estar-foto27.jpg', peso:'a'},
					]
				},
				{
					option: "Escolha uma cozinha",
					values:[
						{img: 'https://i.pinimg.com/originals/32/a7/e4/32a7e473071e4129c491df5eac232487.jpg', peso:'a'},
						{img: 'https://dicasdecor.com/wp-content/uploads/2019/02/50822490_383863832176288_7267396212527354303_n1-1024x853.jpg', peso:'a'},
						{img: 'https://i.pinimg.com/originals/bd/39/6b/bd396b0ec9f4067b4208d08fb1c47a87.jpg', peso:'a'},
						{img: 'https://metalurgicabesser.com.br/wp-content/uploads/2019/02/BESSER_prateleiras-para-cozinha.jpg', peso:'a'},
						{img: 'https://areademulher.r7.com/wp-content/uploads/2020/01/cozinha-preta-dicas-para-acertar-na-decoracao-da-cozinha-148.jpg', peso:'a'},
					]
				},
				{
					option: "Escolha um quarto para descansar",
					values:[
						{img: 'https://a-static.mlcdn.com.br/618x463/quarto-casal-completo-avenida-com-espelhos-comoda-e-cabeceira-com-criado-rustico-cristal-moveis-henn/prmoveis/d214-93d602-94d703-94/debf8683d5c2489beb3815c5b118ae3c.jpg', peso:'a'},
						{img: 'https://fotos.vivadecora.com.br/decoracao-aquilesnicol-178213-square_cover_xsmall.jpg', peso:'a'},
						{img: 'https://www.imovelweb.com.br/noticias/wp-content/uploads/2017/11/casal-com_TV.jpg', peso:'a'},
						{img: 'https://lh3.googleusercontent.com/proxy/Puw0VWNSsgsKthUulX6FeefCETTTCAnBfg7n8sYYtLSaws-m3J6JHa7CpYe5PGTe8hACH5FCRgeO4XB-ruebpgdOuCGfuo2RT882vUb49BcidXzKZbHdP_Dmysn7yet7lvak1HHiVaf1', peso:'a'},
						{img: 'https://areademulher.r7.com/wp-content/uploads/2020/04/quarto-de-casal-diversas-ideias-e-modelos-de-para-se-inspirar-3.jpg', peso:'a'},
						{img: 'https://abrilcasacor.files.wordpress.com/2019/01/08_davidbastos.jpg?quality=70&strip=info&w=919', peso:'a'}
					]
				},
				{
					option: "Escolha um quintal",
					values:[
						{img: 'https://www.lopes.com.br/blog/wp-content/uploads/2017/04/quintal-3.png', peso:'a'},
						{img: 'https://www.imovelweb.com.br/noticias/wp-content/uploads/2014/10/home-quintal-690x320.png', peso:'a'},
						{img: 'https://s2.glbimg.com/zYpJy77kEUuJR3sRh3kiTdzZ4Bk=/620x455/e.glbimg.com/og/ed/f/original/2014/02/27/cj688paisagismo130.jpg', peso:'a'},
						{img: 'https://br.habcdn.com/photos/questions/medium/tamanho-30-1677615.jpg', peso:'a'},
						{img: 'https://lirp-cdn.multiscreensite.com/3ddcd57f/dms3rep/multi/opt/deck_madeira_campinas_bar%C3%A3o_geraldo_aru%C3%A3_madeireira+01-639c33cd-640w.jpg', peso:'a'},
						{color: '#f0aca3', peso:'a', text: 'Não quero um quintal'}
					]
				}
			],
			answers: [
				{
					option: 'a',
					result: 'Voar',
					desc: 'Você é uma pessoa exploradora que gosta de estar sempre fazendo novas descobertas, porém costuma se sentir preso e sufocado constantemente. Com esse superpoder o céu é o Limite',
					img: 'https://2.bp.blogspot.com/-JDj5BrjftFc/WMaUJMFpVKI/AAAAAAAAZNA/2jHQqNg96Bs0_HqTRutRW1NEpLx7iNTngCLcB/s1600/Gifs%2Banimados%2BVoando%2B5.gif'
				},
				{
					option: 'b',
					result: 'pessoa boba2',
					desc: 'Você é uma pessoa bobona'
				},
				{
					option: 'c',
					result: 'pessoa boba3',
					desc: 'Você é uma pessoa bobona'
				},
				{
					option: 'e',
					result: 'pessoa boba4',
					desc: 'Você é uma pessoa bobona'
				},
				{
					option: 'f',
					result: 'pessoa boba5',
					desc: 'Você é uma pessoa bobona'
				}
			]
		}
	]
};

export default info;