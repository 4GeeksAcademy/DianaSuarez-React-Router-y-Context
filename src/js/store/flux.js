//flux es una funcion que retorna un objeto que tiene dos compartimientos: store y actions. Una forma de organizar los datos=arquitectura.

import { Children, useState } from "react";

//getStore y getActions para obtener los estados y setStore para modificar o actualizar la store son funciones() 
const getState = ({ getStore, getActions, setStore }) => {

	return {
		//En store guardo todos los estados globales
		store: {
			allContact: [],
			contactToDelete: {},
			contact: {}
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
					body: JSON.stringify(
						{
							"full_name": contact.fullName,
							"email": contact.email,
							"agenda_slug": "Diana024",
							"address": contact.address,
							"phone": contact.phone
						}),
				})
				.then((response) => response.json())
				.then((data) => {
					getActions().getAllContacts()
				})
				.catch((error) => console.log(error))
			},
			//GET OBTIENE TODOS LOS CONTACTOS
			getAllContacts: function () {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Diana024")
					.then((response) => response.json())
					.then((data) => setStore({ allContact: data }))
					.catch((error) => console.log(error))
			},

			//DELETE
			contactToDelete: function (contact) {
				console.log(contact.contact);
				setStore({ contactToDelete: contact.contact })
			},

			deleteContact: function (contactId) {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, { method: "DELETE" })
					.then((response) => response.json())
					.then((data) => {
						getActions().getAllContacts()
					})
					.catch((error) => console.log(error))
			},

			// UPDATE CONTACT (Actualizar contacto)
			setContact: function (contact) {
				console.log(contact.contact);
				setStore({ contact: contact.contact });
			},

			editContact: (contact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							"full_name": contact.fullName,
							"email": contact.email,
							"agenda_slug": "Diana024",
							"address": contact.address,
							"phone": contact.phone
						}),
				})
				.then((response) => response.json())
				.then((data) => {
					getActions().getAllContacts()
				})
				.catch((error) => console.log(error))
			},
		}
	};
};

export default getState;
