import React from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactcard.jsx";



export const Contact = () => {
    return (
		
	<div className="mt-4">
		<Link to="/addcontact">
			<button className="btn btn-success mb-5">Add new contact</button>
		</Link>
		    <div className="card mb-3 mt-2 container-md">
  <div className="row g-0">
    <div className="col-md-2 row justify-content-center align-items-center">
      <img src="https://png.pngtree.com/png-clipart/20230912/original/pngtree-profile-pic-vector-png-image_11052941.png" className="img-fluid rounded-circle img-fluid my-2 " alt="..."/>
    </div>
    <div className="col-md-3 col-sm-12">
      <div className="card-body mt-2">
        <h5 className="card-title mb-3">Mike Anamendolla</h5>
		<p className="card-text mb-1">5842 Hillcrest Rd</p>
		<p className="card-text mb-1">(870) 288-4149</p>
        <p className="card-text mb-1">mike.ana@example.com</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  </div>
</div>
	
		
	<ContactCard />
			
	</div>
);
}