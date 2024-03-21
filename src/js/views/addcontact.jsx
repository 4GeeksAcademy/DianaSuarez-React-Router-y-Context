import React from "react";
import { Link } from "react-router-dom";


export const AddContact = () => {
    return (
	<div className="text-center mt-5">
		<h1>Add a new contact</h1>
			<div className="container-md p-2 mb-2">
				<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold">Full Name</label>
					<input type="email" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Full Name"/>
				<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold mt-2">Email</label>
					<input type="email" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Enter email"/>
				<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold mt-2">Phone</label>
					<input type="email" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Enter phone"/>
				<label for="exampleFormControlInput1" className="form-label container-md d-flex fw-bold mt-2">Address</label>
					<input type="email" className="form-control m-auto bg-white" id="exampleFormControlInput1" placeholder="Enter Address"/>
			</div>
			<div className="d-grid gap-2">
				<button className="btn btn-primary container-md p-2 fw-bold" type="button">Save</button>
			</div>
			<div className="d-flex container-md p-2 mb-4">
			<Link to="/">
				<span className="m-auto">Or get back to contacts</span>
			</Link>
			</div>
	</div>
	
);
}