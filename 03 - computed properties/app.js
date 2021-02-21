var app = new Vue({
	el: "#app",
	data: {
		// show: false,
		// show: 'oke',
		show: false,
		message: 'Hello world!',
		message2: 'Hello Vue',
		int1: 1,
		int2: 2,
	},
	computed: {
		sum: function() {
			return this.int1 + this.int2;
		}
	}
})