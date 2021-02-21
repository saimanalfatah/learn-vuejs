var app = new Vue({
	el: "#app",
	data: {
		vehicles: [
			{type: 'Car', brand: 'Toyota', color: 'Yellow'},
			{type: 'Motorcycle', brand: 'Honda', color: 'Black'},
			{type: 'Bike', brand: 'BMX', color: 'red'}
		],
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
})