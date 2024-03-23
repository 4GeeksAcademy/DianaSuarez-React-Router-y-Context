//flux es una funcion que retorna un objeto que tiene dos compartimientos: store y actions. Una forma de organizar los datos=arquitectura.

import { Children, useState } from "react";
import { Contact } from "../views/contact";

//getStore y getActions para obtener los estados y setStore para modificar o actualizar la store son funciones() 
const getState = ({ getStore, getActions, setStore }) => {

	return {
		//En store guardo todos los estados globales
		store: {
			allContact: []
		},

		//En actions guardo todas las funcionalidades globales
		actions: {

			//El POST CREA usuario
			addContact: (contact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body:JSON.stringify(
					{
						"full_name": contact.fullName,
						"email": contact.email,
						"agenda_slug": "Diana024",
						"address": contact.address,
						"phone": contact.phone
					}),
				})

					.then((response) => response.json())
					.then((data) => setStore({ allContact: data }))
					.catch((error) => console.log(error))
			},
			//GET OBTIENE TODOS LOS CONTACTOS
			getAllContacts: function () {
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
