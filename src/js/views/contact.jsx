import React from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactcard.jsx";



export const Contact = () => {
    return (
	<div className="text-center mt-5">
		<Link to="/addcontact">
			<button className="btn btn-success">Check the Context in action</button>
		</Link>
	<ContactCard />
			
	</div>
);
}