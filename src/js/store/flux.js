//flux es una funcion que retorna un objeto que tiene dos compartimientos: store y actions. Una forma de organizar los datos=arquitectura.

import { Contact } from "../views/contact";

//getStore y getActions para obtener los estados y setStore paa modifica o actualizar la store son funciones() 
const getState = ({ getStore, getActions, setStore }) => {

	return {
		//En store guardo todos los estados globales
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			allContact: []
		},
		//En actions guardo todas las funcionalidades globales
		actions: {

			//El POST CREA usuario
			function postAllContact() {
		fetch("https://playground.4geeks.com/apis/fake/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"	
			},
			body:  
                  {
                      "full_name": "Diana Suarez",
                      "email": "dave@gmail.com",
                      "agenda_slug": "Diana024",
                      "address":"47568 NW 34ST, 33434 FL, USA",
                      "phone":"7864445566"
                  },
				})
			
				.then((response) => response.json())
				.then((data) => setStore({ allContact: data }))
					postAllContact()
					.catch((error) => console.log(error))
		},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
			getActions().changeColor(0, "green");
		},
			//Aqui mudo la funcion y el estado que tenia de forma local en el "home"
			getAllContact: function () {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Diana024")
					.then((response) => response.json())
					.then((data) => setStore({ allContact: data }))
					.catch((error) => console.log(error))
			},
			/**
				fetch().then().then(data => setStore({ "foo": data.bar }))
			*/
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
};
};

export default getState;
