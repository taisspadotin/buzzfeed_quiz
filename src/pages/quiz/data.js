const info = {
	quizzes:[
		{
			id: 1,
			title: "Qual objeto inanimado você seria?",
			desc: 'Descubra qual bebida mais combina com você', 
			img: require('../../img/milk.jpg'), 
			author: 'Nome da pessoa',
			link: '/quizzes?id=1',
			cards:[
				{
					option: "Escolha uma roupa",
					values:[
						{img: require("./img/roupa1.jpg"), desc: "", peso:'b'},
						{img: require("./img/roupa2.jpg"), desc: "", peso:'e'},
						{img: require("./img/roupa3.jpg"), desc: "", peso:'a'},
						{img: require("./img/roupa4.jpg"), desc: "", peso:'d'},
						{img: require("./img/roupa5.jpg"), desc: "", peso:'b'},
						{img: require("./img/roupa6.jpg"), desc: "", peso:'c'},
					]
				},
				{
					option: "Escolha uma cor",
					values:[
						{color: '#57042a', desc: "", peso:'a'},
						{color: '#0c9c26', desc: "", peso:'e'},
						{color: '#2a536d', desc: "", peso:'b'},
						{color: '#8088c7', desc: "", peso:'d'},
						{color: '#eab788', desc: "", peso:'a'},
						{color: '#f0a58f', desc: "", peso:'c'},
					]
				},
				{
					option: "Festa final de semana?",
					values:[
						{color: 'red', desc: "", peso:'a', text:'Já estou lá'},
						{color: 'green', desc: "", peso:'d', text:'Vou ver e te aviso'},
						{color: 'blue', desc: "", peso:'b', text:'Quem vai?'},
						{color: '#000', desc: "", peso:'e', text: 'Tem comida?'},
						{color: 'purple', desc: "", peso:'c', text:'Sem tempo irmão'},
					]
				},
				{
					option: "Escolha uma animalzinho",
					values:[
						{img: 'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg', desc: "", peso:'c'},
						{img: 'https://i.pinimg.com/originals/38/3f/6a/383f6ab98f512e35fa21e39b064055a0.jpg', desc: "", peso:'a'},
						{img: 'https://i.ytimg.com/vi/0dfDp48vcUc/hqdefault.jpg', desc: "", peso:'e'},
						{img: 'https://t2.ea.ltmcdn.com/pt/images/3/8/3/quanto_tempo_vive_um_coelho_6383_600.jpg', desc: "", peso:'d'},
						{img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExISFhUVFRIVFRYVFRAQFRUVFRYXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0gICUtLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEAQAAEDAgMFBQYDBgUFAQAAAAEAAhEDIQQxQQUSUWFxEyKBobEGMpHB0fAUQnIVM1Ky4fEjYoKS0lNjc4OiB//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAqEQACAgEDBAEEAgMBAAAAAAAAAQIRIQMSMQQTQVEyIiNhcZGhQlLRM//aAAwDAQACEQMRAD8A1dnnJblJ1l5zBVVqtr2XzcI0xjNass+rXQq+JWXiMUu/TQ7ObSq2Xi9rm63sfirLy2PrXXTBFJilRqC4K7qiGStQBvQSUd4S7kAHpFNsCz6bk9RepbGgpapSbBkK5ClI6JKQM1sFi3BbeF2g4LCwjE8wmYFzwFz8FaYHrMHtMHVOjEgrxIxG6eB+CcobS5rZJEM9NUqpR9ZZzcbOqhrJSpEse7ZQ1EmCUxSbKjfEWSxeVWUcUlHUlPeiGQLWrrqaI2yher7sRC7qaC+kj1KoQKlcJrUQ7Kdmoq9sFFXciFjtB0Jo1rJJqs59l4ajkRTEVll4itdHxFRZ1Zy9DSSGKYyosHFlbeJusfFMWpSYiHIrGoYbdHaUyzvYyqvwiYpPRgokwMt2GITOFpSmajExg6QU3YBKWEsh1MIZgAkkgAASSTkANStamxeo9htlh1Q4hwtTsz9ZFz4A/wD0OCajboGW9lfYMgCpi3ESJFFpv/7HDLo346L3uAo0qQ3KTGMHAAAnqcyeZXYkSvO+0ns4/EVKFSliHUTRfvGBv72Vsxw810pbVhEcnq8ThadVu7UpseOD2tcPNfPPbL2LFEGvh57Me+wkuLNN5pNy3lp0y95h6pyPxyTVam2oxzHXa4Oa4ciIIWnyRPB8RpMcnqDCtV+yHU6jqZvukieI0PiIKJ+EjReRq67TplWKUaSZa2EQs5ITpWHesLDNchVHqjWuKucK4rGWo7CxSrWQHYhNP2e5RmzCq7wmZj6xQu0JW6dk8lwbIWi1qCjEuot/9l8lE+8woEGoNUJ0MQK7FcUNRMfEFZ9Vy0cY1ZlRdUXQUAekMQxaEINemnuyIxKrIKrvJvEU0mWrVMtE30zSqlLhqPSah5BjVN0p3C0zKDhaMrc2dg7rCUlEV0XoUTC+jez2F7OhTby3j1d3vmB4LzWDwQsvatEKunnubYXYdj10kcUhWrQk6m0Lwuh6lBRtOfaywcHtksqvE+88xORMx9lK4zbVRkBrJkGHE90fUrLr4So6nFOqWPkEOgOkzJBBzByXndb1W1xUHTTs7el0bTcuGepqUu0eXEQTmunBhB2bWJAn3hE87Xsnn1wuOT3Pd7OfqdPZMQqYIJarggm6+LHFJPx7eKgwLNwwR2UAkTtAcVVu1BxRQWaZw4VRSCQO1Ak621xxScQs3i0IFSFhv20IzSNbbfNVTDceokLi8p+2uairaxWa4ag12o4dZCrGy74o2SMPGhZ/ZytDHOSbStG6JYuaSG9ibehQs92SDKxFJZ1SndeiqUJQhs+dFqp1yUmYjKSZw+HW9htkynKeyYUy1khtiWzsHdelwWGhBweHAWq1wC4tXUciGxrCN7zeo9Vv1HQJXnMPXG+wf5m+oW9i8rrp6F/TIEYO09qGSAsN206jjAW1i8EX/wBkP9min3uAldig3ljbA0qEgdo4l2doEeMSiNdFpkfeaQdikN+JXiasO69z5NdHqJab/Bv4PEbpTO0WEt3qfiPmF57DbQGTgeRC1aG2WNEXP+kqdKco/amsHbqS0tWN3kwsTi3JPtHrW2g9jnbzRE59eQSjAJVuVHlyjToXDXFTsynAQqueE92BUKEuQXUTxTRqBTtAs90rChGpRKSq01q1XBJVjdaRkxCW6ojqLSwPWsdZDrush0jZVeV1xZ0mPtBZzaq1cYxZxoXTciJM4Ci0gutpo1MLFvJm2EbSlFp0wFXJUdUKTdk2a+HgLteoFlMxPNMYajVrS2mwuIzj6qVBydLIbjpxkFR20Fu7O9g3vg1qgZ/lbc/HJekwfsbhGZs3/wBZLvJdUOhk+cCtng9lYkurUm8ajP5gvolSgV39hYZhDmUWBzTLSBcI7iujS6ftYsuNibMMsr2op7uGqOGm75uAPqt8FC2hhG1qT6ZsHtLZ4E5HwMFdDVxaXoGfKRXXHV0tXY5jnMcIc0lrhwIMFVBXi7aM7GW1kduKKTaVclKSTAYdi1X8UlSF0NKWxDsZdiShdsVwMRW0kqQwJeVBVKYdRVexClSQC5qlBe5OmihVKKrcgEt9RMdkonaA3mPsql6F2oQX11ruNHMLUhKuYuGuu0iXuDWiS4gAcSclNt8GbkRlIkhoBJNgAJJPABen2Z7FVnXeW050Ped8BbzWrsfC0MGJe4OrEXOe7ybwHPVOv9oxNhnkuzT6fTSvUefQ1FlcL7F0R77nv8dweV/Na2G2Hh2e7Rpjnugn4m6U/bIDt1xAPCVp4bEhwsu3TWksRSBxfk6cBS/6VP8A2t+iu2m0ZADoAFbeXZW1ioqQqubF0VLVqk9Ak5UOgT3ILnKz3IRWDeSwjSrNKCHq+8qTEeM9rfZ0vrOrMDjvAEhrXO7wG6cgc4BXjqtPdMEEHUEQfgvoPtpi306dN7HuYd8tO6SJBaTf/avKO9o6jhu1W06o/wC4wE/ELi6mOluq6f8AKMXhmMHq2+rYqs1120wzoXEeaWL1wuouuQGGvRRUSW+uGoneAscNZEbiQszfXd9SqHZq/iUN+ISAcrbyagvI7GTi0N+JSzlQhG1IGxn8Qol1E8CHRiVSpXSbHKpMlW0hDBqrT2FW3XOeLvaO4OE2c7wHqsltNGwR3ajTz6ZiE44Bcno6OLkybnimsHWBqMn+JvqFisraLc9lsKKlXe0ZB/1HJFtySO7hGtt7Cz3uvkEf2TxbzLDJiCDc2OhW+cK11nCyapMa0Q0ADgBC7+x9zenRlv8ApoIF2VXeQ3vXVaMyVaqWe9de5AqLJysqjhK5vQhudxU3SpTyMIK0LvaWmUvuTchVdPgmr8iJjNmU8U3snzEbwIMEOFgediV8z23s12HqupOMkXBGrTkV9X2c4doByd6Lyf8A+kYPv06kWIc0nnmB6rLqtJS0965RlJZPCqjgmDTTDcNZeXaAzVxzCnnYe6hYlYUZopFM06KZbTCMKatUFCRahlNvpoD2p1bCgZCESi1HQgStKRJN9RVhRKkOxhjJUdThXo03DQq8EnJRYBcGwEwU1i8C0CQg4eiZyIK0HUHEaqe4k6ASoutDs7Q7h15L6H7L4AUqQJzdDj4i3kvEYfZ7nECNV9FpRuiNMl09O0236NdNtqjQY5X30lSqq/bLt3lUMl6o4oBrIRqSplqDSDueEB7hqUKo7ml3HUlKwDEyeSjsTCVGICE6qERl5QmNOxJKgqpQkEWXBU4K4yb5EzU2ZUHaeBS3tlTD6DrXaWuHxg+RKmzn96eRCF7Tv/wKh5fMBbS/82vwzNnhTh0VrEu3Eq76y8KneQtEqMSz2q5xCHvyVW1CskQr0nLhQqj1VKgCYl4SYKC6qSVdrkfkClZqqymjAyhkEJ2ATcCip2iiYGxQe0hWbuhwKyO3sqtxBOay7T5sTZvV8S0RCewuObGi8s+rIV2VSApejeWFnsaWNYIIW5gMYHMBHNfMfxDtFtbDxr6YL3u7n8Oc8SFpD7bzwbaKlOW1HtzXvARRU0lZH4xrmCoDLXCQ4cEFldwEgzPC1ua6XJcGlG4+rzUe6B9Fi0MUS6SCALDqmXYwTYo/QDlRyRq1J1VcRiJsMyh1Ku6LXKHLIFqlfSIQmvvqgh5/Nc+iXr4jh5KlIlmg6odFGVOKz6GIJ1TtKoJlbKWCTUwZTGOpipTcw5OBB5TqlMNVhTH14pu/S70W6kqyS0eCq0917gDIDiAeMGJViUJzlynxXkyjueBYRZwVgyEFtW6G/EkugCylBhZDvaSgOoGUUV13tSVpaDAIYeM0MMCLWJSodCpV5KVBmMRTSlAbURadaFmxYO/gxxXUDtnLqKC0CaxWFFEpU4ElFlQpIyBNbGaq5M1ArMw+9A4odDy3QPAYeSXOMMbcn5JHbm1CWd2zXWb0Rtu4nLD0zYe+RqeCyNqZsZoApSuSs9rS0lo6dLnyzZ9h9udnNGoe46S0m+676H1Xrq2JAPLMHQjqvmVIQWkcQvXYbGO3d3MZjl0W7kcWt9DVmqceCczCJSxAGWawquIteJnmLIdPaAAgZzcm6VkJpm/VxMd4+CWO0gTn81j4rHg6g8cx5IIxwkQAAkwN5+ON/mhfiDmTZYtXaROvyVPx3E/BUpV5JZ6KnVb+VNUMaBn9V5RuL5kI1PHaStoTSJZ7NmOBtwSu1Mf/AIZA1t9fJecbjHEd0/VFNV2uSc9XBMngErbtlaAASljUJtC5N1cGafs6W8Fypa4ULiELEP1QmwsNQc05rnTJKvNrK1EkZpqlyHAYGZQHHiuOLgYAhdqjuEjNNWFnKbhKjXQlSYR2g2tZJN2ATeUVt4cFFpgAlRpmCiCxhHkvMjRVe51pC4sSzwByoCo7FdnRLz7x7rfqhmoZuDySW06pfU3ALMtHPVaKNHZ0WmnPc/Athqd5Oefil6jN6oeS0GUHCARCWw7LuPMoUqbZ6rqSVE7Ky08HWG6ErRpTyCewlFmp1TX5PP6yUX9KeUcc4Eyi1aTQRvCQV17G6ZKzosDcKzz8oUdg25gkeaTrYQg8VqPraQqF4CbouOrJcmS6kYuqSFrbwiYSmOwrZbb8oupTOjS+42kLMaTknaGDEEudloPqq0CAEQ1bExmtLV4MNSTTpDWGeNAAESSZjwSNGoBcoFXGw83spem3kyv2OvqkZnwQzUBNigueCCTJMKYSna6ey8MHk48G4Oi5JiIRtQUN86JNemIjHyYi66XwDa4QnkC89VSpUBmJGXNN4HyMMrl0gotOoA0gaLPqVRY5FXFUCx1zSd2DRetDjmrUqoaIJuAgbgJO6SYvkgvBJIVOxIZ7cKJL8OV1Vn2h0jbp7RiYieKZZirBxWC59r5wR1VnPO7F9Fl22PCNfFVQ6CDFwfEJShWa3eMHeJJJ1us8kkQDEIzHmINzZC00irdUOuxzTAy4yk8Lu3kjM+KVeZJPhCGxoEiTCaheTaHUThDajXfiRkNNFRmJiyyalQg2RaTS5wuOYQoWY8mqcS2YK4MRwSdWm0PieHxhEbUEyDbVDXgbQapXNozXBie9CpUqCMpv0QC8ETcGL/RLhktDj6s2HFP7SohgHEgLM2Uxz3hv+byGad9oq8vAGQUTzJI7em+jSnMTFLmhhwaYBshNdfPz9VUP/Nw+C6NqZwMPWqA5HquEiZt8AlO2J0yvbguNeeGfmlbwKjSY9xHdAOpvCuy4vvA3kACOV1mU3GYyImTK1qRBZEkayb6IdLAygrMyk28FSm+J1S83vEcR85RnVN5oNh4Aeahq8hdHKhtpKhEWgRAKD2W9+cDMiToFG0nSe9G6RE3njdWvwBcsk3FtCqPp33RJPSbcVcPEwPjmLrjK5DzB8bieXRS2xo7Qa5k2jrwVS2TzKI6sX3mHag8FWmdY72t0VLKseLD/AIA/xN+KiS3OR+JXVl2p/wC39Fbo+i9WoDcCTpwVMTWtJ10Nsl2rS97LQtPGZuhYug4mTe4niJ+Wa3iSUfVtl0GSq2sYm4KPWwZDrSR1AOU/REbS3YF9288cgfjPonYMTbJ0RKxZlGfrmiswEE94Wi/Gf6ShVKPdJ3SbgAgznP080YHYOhRJm4G6C6MldjoBJEHdJnXMD5otLCuMPJiNQLkcx0V+wtBk2AJ1uZ11gZKW/Y92MCgxEgAD+v8AVdr1y07utp1OWXW6MMOC4NbIFiZtLc7cbDzR34UOe4ndDnT7wNuN+Pp6PCyNZdIVo1zeZiMspnJFwtRhkODpgxuxkBJ66Qmq2Aa3dDoIDcgd0zllwgQuUaoEbjGAAEAg3Bg2nXopcvSLSXlmhskdkwmDvuBAGZCycbWJdMm+ekHn8U0zEu6NIkDeEnTyugPYXd8tiYls2njPTT6rOCzcjp1NWD0tkeF/ZWhhQ/eLnOBAAF+J8+7Pkh0pcCA06zaQT1TL30wwRMEkm5k+HJCw9SJtaTfhIzWls4HRStRi7nECbRA6SrU2t7zgQ7hEWjO2iOCXBwcAG6EHSNUH8M1rZF7GNAfndUnnkQOnTkb0kSSDMfcI9HEd2IueH30QKtQMDSO8XE2AgWtfXipTO86AQCBPqfWETV0IMw8ZFjY/eZVmUwRBkQNIyz9FWmBA3xkJmSZ5lDNJz6gAIALiReIzJJ5IpLgWbDCi0ZRlI1XGCbaTwkC/NOCnJIDobFogtcRcgme7qR9yliqIItvfyjjfmmluWGPg5Dg68ADku0W7xDjAggkc5sB1NlTsbmfzEExmJMz98Vd4uWt0yiTczfqko4sZepumS2NYPOUi7Eho7zs/HyzV61MmwtEZg+iLTw9MgE027xvIuOR8fJaUnySB/Ht+4XFPwzOH8n/FRLZErBo0sOfdsSN6CeFpB4ichzXKhEzrn6arlF0G5NwRmD+rLLVUbWGkOvnf74X5dVk7HRdlMxJvJE8hEdRHnKtSpkQC4Exe0E/w9LW8FR9WxLZHKBEfXT+ybfWIO7pJi38QETyhS36CgdVm8I0Mg8Rn/wAjfoq0mx3SI92xIcJ0PmEw6m5oBcBvT1LYGVss0JjpMmw42Ph6JjoHWpAOgR3SIM6ajqr18OS0uESYLtcsiB8QUariGknu2twdlmclR1XMxaBvOgGfuYTaVWK1wA7INtIByAuYm+ecGM1BRAdvAfSMhbr6qwrsEiLm7tQZlWp1XGRDTN7nIc+anPKG0VZSz3rznBBgkETzIMLhpWgWFsoJJBB8NR4ob6wJGc3GR10jRd7UCIgeklKs5EVixMXsBnJgw2J43VqNSG5cQZOo5EZKtbEOsJgA8MvFDJcIgQDfKetvitP0I7UaSLPkAhxsBxBvkdPguuJcATFhGcZnRpz/AKKUGFxADg3mQ7IC2Wq4AHZkuLJAPnlmY+qE08DrywYaSCN4C05ggxqUVmHcRDYtkchpc+fxCHUoiJFhECAR4jxujUhDZExloDyP3wVJZJsqKJaAxwBkwCLwdZPHKyG3CgXaCcw64vpmMtSj0LnLW5PAGbc+fNXq04ALcocNBciL6m0JjFGzvATmZbnkJzOmQTNNu64CRJueFx6TPwQ3AGJmIkRaDoT5W5KuIblqYkuznqfvNFKgo7jHtGbo7xaBY9SD4ei5Re+4Ex+Wc+A++qlJgJGZIEzbW9kyKe9TJH5JLwCQd2c5EZSD8UouKHV8CtNzXGDBcDIJ0IOfSPRXwocHElx4RcE8yNEuxokgG3HPLWTyV3yHB2h4E55XTUmuBBCzvS48oMjoQuvqZQ3IGDcdVN4A6HI3vfkuiocsxn/ZOnYeAHa8h5rqt2o/g8lFHbfsdots/wB13UfNWo+4/qoopZrp8jzv3NPp803T9w/ob6qKIXLM/wDIFW/en9XyCHjMj4fytUUUPyNiTsj+kq1L93U/S3+YKKK4cfyLyxGv7w8PRM0P3lL9JUUWun8V+xP4v9FcZr+o+gQKuQ/V9VFFnL5sBnEaeKM3LwCii00vlIzkKDNnRyHgMx1+TVxRJ8l+AuGyHU+pTIy+KiiuPCI8s5T949D8kR3uqKJPkGL1tPD5oeJzauqLnnyWi7Mx0HqnNl51v/G/0XVEl8So/Iy8L7rurlb8h/UuqLWX/RAW+998Ci1fcHgoojwxIOoootxH/9k=', desc: "", peso:'b'}
					]
				}
			],
			answers: [
				{
					option: 'a',
					result: 'Pá',
					desc: 'Você é uma pessoa calma, tímida e contida, mas quando estoura só você sabe o estrago que pode causar, ainda sim está sempre disponivel para ajudar os amigos',
					img: 'https://www.tramontina.com.br/upload/tramon/imagens/MUL/77460434PNM001G.png'
				},
				{
					option: 'b',
					result: 'Assento de privada',
					desc: 'Você é uma pessoa solidaria que está sempre disposta a ouvir os problemas dos amiggos, mas tome cuidados para não acabar sobrecarregada com os problemas alheios.',
					img: 'https://i1.wp.com/www.senhorcastanha.com/wp-content/uploads/2015/11/giphy.gif?resize=395%2C255&ssl=1'
				},
				{
					option: 'c',
					result: 'Pote de sorvete com feijão',
					desc: 'Quem não te conheçe te julga como uma pessoa metida, mas quando te conhecem melhor descobrem como você é super carinhosa(o) e humilde.',
					img: 'https://cdn.awsli.com.br/600x450/1063/1063097/produto/46927732/pote-de-plastico-para-sorvete-2-litros-thermoplast-21b00256.jpg'
				},
				{
					option: 'd',
					result: 'Capacho',
					desc: 'Você está sempre disposta a se sacrificar pelos outros, todos podem contar com você, mas as vezes isso acaba custando a sua paz.',
					img: 'https://d26lpennugtm8s.cloudfront.net/stores/807/921/products/nao-sou-seu-capacho1-b416cfb6fc9e63eff915728472223229-480-0.png'
				},
				{
					option: 'e',
					result: 'Cesto de lixo',
					desc: 'Você é uma pessoa aberta, extrovertida e que enxerga o melhor nas pessoas, quem está a sua volta sempre tem diversão garantida, você é pau para toda obra',
					img: 'https://thumbs.gfycat.com/UnripeQuickBushsqueaker-max-1mb.gif'
				}
			]
		},
		{
			id: 2,
			title: "Monte uma casa e diremos qual super poder você teria",
			desc: 'Monte uma casa e diremos qual super poder você teria', 
			img: require('./img/casa1/index.jpeg'), 
			author: 'Nome da pessoa',
			link: '/quizzes?id=2',
			cards:[
				{
					option: "Escolha uma fachada",
					values:[
						{img: require("./img/casa1/fachada1.jpeg"), peso:'c'},
						{img: 'https://www.decorfacil.com/wp-content/uploads/2017/10/20171015casas-de-praia-27.jpg', peso:'b'},
						{img: 'https://imagens-revista.vivadecora.com.br/uploads/2017/06/casas-de-campo-fachadas-de-casas-sq-arquitetos-associados-65560.jpg', peso:'a'},
						{img: 'https://i.pinimg.com/236x/ea/33/99/ea339931ca7ac060eed2606ed6046f4f.jpg', peso:'d'},
						
					]
				},
				{
					option: "Escolha uma sala",
					values:[
						{img: 'https://www.decorfacil.com/wp-content/uploads/2018/07/20180716sala-de-estar-decorada-64.jpg', peso:'a'},
						{img: 'https://i.pinimg.com/originals/5f/44/c4/5f44c45ef0bd8af5d03f06fc928a24b2.jpg', peso:'c'},
						{img: 'https://dicasdecor.com/wp-content/uploads/2019/09/67904426_162683681517241_8919562685792155440_n1-819x1024.jpg', peso:'d'},
						{img: 'https://moveisgava.com.br/novo-site/wp-content/uploads/2016/06/apto-madeira-ptobco-sala4-1500x1000.jpg', peso:'c'},
						{img: 'https://suacasamoderna.com/sites/default/files/2020-01/sua-casa-moderna-tv-sala-estar-foto27.jpg', peso:'b'},
					]
				},
				{
					option: "Escolha uma cozinha",
					values:[
						{img: 'https://i.pinimg.com/originals/32/a7/e4/32a7e473071e4129c491df5eac232487.jpg', peso:'b'},
						{img: 'https://dicasdecor.com/wp-content/uploads/2019/02/50822490_383863832176288_7267396212527354303_n1-1024x853.jpg', peso:'c'},
						{img: 'https://i.pinimg.com/originals/bd/39/6b/bd396b0ec9f4067b4208d08fb1c47a87.jpg', peso:'d'},
						{img: 'https://metalurgicabesser.com.br/wp-content/uploads/2019/02/BESSER_prateleiras-para-cozinha.jpg', peso:'b'},
						{img: 'https://areademulher.r7.com/wp-content/uploads/2020/01/cozinha-preta-dicas-para-acertar-na-decoracao-da-cozinha-148.jpg', peso:'a'},
					]
				},
				{
					option: "Escolha um quarto para descansar",
					values:[
						{img: 'https://a-static.mlcdn.com.br/618x463/quarto-casal-completo-avenida-com-espelhos-comoda-e-cabeceira-com-criado-rustico-cristal-moveis-henn/prmoveis/d214-93d602-94d703-94/debf8683d5c2489beb3815c5b118ae3c.jpg', peso:'b'},
						{img: 'https://fotos.vivadecora.com.br/decoracao-aquilesnicol-178213-square_cover_xsmall.jpg', peso:'c'},
						{img: 'https://www.imovelweb.com.br/noticias/wp-content/uploads/2017/11/casal-com_TV.jpg', peso:'d'},
						{img: 'https://live.mrf.io/statics/i/ps/dicasdecorativas.com.br/wp-content/uploads/2018/07/decorar-um-quarto-grande.jpg', peso:'a'},
						{img: 'https://areademulher.r7.com/wp-content/uploads/2020/04/quarto-de-casal-diversas-ideias-e-modelos-de-para-se-inspirar-3.jpg', peso:'b'},
						{img: 'https://abrilcasacor.files.wordpress.com/2019/01/08_davidbastos.jpg?quality=70&strip=info&w=919', peso:'a'}
					]
				},
				{
					option: "Escolha um quintal",
					values:[
						{img: 'https://www.lopes.com.br/blog/wp-content/uploads/2017/04/quintal-3.png', peso:'c'},
						{img: 'https://www.imovelweb.com.br/noticias/wp-content/uploads/2014/10/home-quintal-690x320.png', peso:'a'},
						{img: 'https://s2.glbimg.com/zYpJy77kEUuJR3sRh3kiTdzZ4Bk=/620x455/e.glbimg.com/og/ed/f/original/2014/02/27/cj688paisagismo130.jpg', peso:'d'},
						{img: 'https://br.habcdn.com/photos/questions/medium/tamanho-30-1677615.jpg', peso:'b'},
						{img: 'https://lirp-cdn.multiscreensite.com/3ddcd57f/dms3rep/multi/opt/deck_madeira_campinas_bar%C3%A3o_geraldo_aru%C3%A3_madeireira+01-639c33cd-640w.jpg', peso:'a'},
						{color: '#f0aca3', peso:'d', text: 'Não quero um quintal'}
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
					result: 'Teletransporte',
					desc: 'Você é uma pessoa que não se apega a normas nem padrões, seu sonho é viajar pelo mundo e descobrir cada cantinho, e qual o melhor jeito?, com seu super poder!!',
					img: 'https://media1.tenor.com/images/eb0a6ec1f125621e88fabe8f779b6ed9/tenor.gif?itemid=8035088'
				},
				{
					option: 'c',
					result: 'Raio Lazer',
					desc: 'Você é uma pessoa meio esquentada, e que sempre se estressa por coisas pequenas, mas todos sabem que no fundo você tem um coração muito bom e está disposto a fazer o que estiver ao seu alcançe para ajudar as pessoas',
					img: 'https://media1.giphy.com/media/l3UcAxKj5opyWk4wM/giphy.gif'
				},
				{
					option: 'd',
					result: 'Feder',
					desc: 'Você é uma pessoa amoroza em excesso, e graças a isso pode acabar espantando as pessoas ao seu redor, mas todos que te conhecem bem sabe que você é uma pessoa unica',
					img: 'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2015/07/31/odor3.gif'
				}
			]
		}
	]
};

export default info;