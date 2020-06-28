let { posts } = require('./lecciones.json')

let contents = []

posts.forEach(post => {
	let x = {
		slug: post.slug,
		fecha: post.fecha,
		title: post.titulo,
		subtitulo: post.subtitulo,
		introduccion: post.introduccion,
		preguntas: post.preguntas
	}

	contents.push(x)
})

module.exports =  contents;
