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
						{img: require("./img/roupa1.jpg"), desc: "", peso:'a'},
						{img: require("./img/roupa2.jpg"), desc: "", peso:'b'},
						{img: require("./img/roupa3.jpg"), desc: "", peso:'c'},
						{img: require("./img/roupa4.jpg"), desc: "", peso:'d'},
						{img: require("./img/roupa5.jpg"), desc: "", peso:'e'},
						{img: require("./img/roupa6.jpg"), desc: "", peso:'f'},
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
					result: 'pessoa boba'
				},
				{
					option: 'b',
					result: 'pessoa boba2'
				},
				{
					option: 'c',
					result: 'pessoa boba3'
				},
				{
					option: 'e',
					result: 'pessoa boba4'
				},
				{
					option: 'f',
					result: 'pessoa boba5'
				}
			]
		},
		{
			id: 2,
			title: "teste 2",
			link: '/quizzes?id=2'
		}
	]
};

export default info;