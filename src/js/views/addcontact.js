import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, } from "react-router-dom";

export const AddContact = () => {

	// console.log(useContext(Context)); Esto retorna los objetos de flux = store y actions


	//Estados que creo de forma global y llevo luego a flux
	//   const [allContact, setAllContact]=useState([])
	//   const { store, actions } = useContext(Context)
	//   console.log(actions.addcontact);
	//-----------------------------------------------------------

	//Creo 4 estados para definir las partes del formulario
	// function useState() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const { store, actions } = useContext(Context);
	// console.log(fullName, email, phone, address);

	//onSubmit - El evento de envío ocurre cuando se envía un formulario.
	// function onSubmit() {
	// 	console.log("Hola");
	// }

	function onClick(e) {
		e.preventDefault();
		const contact = {
			fullName, email, address, phone
		}
		actions.addContact(contact);
	}

	return (
		<div className="form text-center mt-5">
			<h1>Add a new contact</h1>
			<form onSubmit={onClick}>
				<div className="container-md p-2 mb-2">
					<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold">Full Name</label>
					<input type="text" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Full Name"
						onChange={(event) => { setFullName(event.target.value) }} />
					<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold mt-2">Email</label>
					<input type="email" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Enter email"
						onChange={(event) => { setEmail(event.target.value) }} />
					<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold mt-2">Phone</label>
					<input type="phone" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Enter phone"
						onChange={(event) => { setPhone(event.target.value) }} />
					<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold mt-2">Address</label>
					<input type="text" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Enter Address"
						onChange={(event) => { setAddress(event.target.value) }} />
				</div>
				{/* <div className="d-grid gap-2">
					<div className="btn btn-primary container-md p-2 fw-bold" type="submit">SAVE</div>
				</div> */}
				<button type="submit" className="btn btn-primary container-md p-2 fw-bold">SAVE</button>
				<div className="d-flex container-md p-2 mb-4">
					<Link to="/">
						<span className="m-auto">Get back to contacts</span>
					</Link>
				</div>
			</form>
		</div>
	)
};