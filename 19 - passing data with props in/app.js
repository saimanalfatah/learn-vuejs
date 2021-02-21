Vue.component('blog-post', {
	props: ['post'],
	template: `
		<div>
			<h3>{{ post.title }}</h3>
			<div v-html="post.content"></div>
		</div>
	`
})

var app = new Vue({
	el: "#app",
	data: {
		posts: [
			{id: 1, title: 'My Journey With Vue', content: '<p>This content of <strong>Post 1</strong> </p>'},
			{id: 2, title: 'Blogging With Vue', content: '<p>This content of <strong>Post 2</strong> </p>'},
			{id: 3, title: 'Why Vue is So Fun', content: '<p>This content of <strong>Post 3 </strong> </p>'}
		]
	}
})