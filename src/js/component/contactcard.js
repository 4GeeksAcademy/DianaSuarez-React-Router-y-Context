import React, {useContext} from "react";
import { Context } from "../store/appContext";


export const ContactCard = (contact) => {
  //aplico destructuring
 
   console.log(contact);

    return (
        <div className="card mb-3 mt-2 container-md">
            <div clasName="mb-1 d-flex">
              <i class="fa-solid fa-pen px-3 mt-3 justify-content-end text-align-end"></i>
              <i class="fa-solid fa-trash-can px-3 mt-3 justify-content-end text-align-end"></i>
            </div>
            <div className="row g-0">
              <div className="col-md-4 row justify-content-center align-items-center">
                <img src="https://png.pngtree.com/png-clipart/20230912/original/pngtree-profile-pic-vector-png-image_11052941.png" className="img-fluid rounded-circle img-fluid" alt="..." />
              </div>
              <div className="col-md-5 col-sm-12">
                <h3 className="card-title mt-5 p-3 px-4">{contact.contact.full_name}</h3>
                <div className="card-body">
                  <h5 className="card-text"><span><i className="fa-solid fa-location-dot px-3"></i></span>{contact.contact.address}</h5>
                  <h5 className="card-text"><span><i className="fa-solid fa-phone-flip px-3"></i></span>{contact.contact.phone}</h5>
                  <h5 className="card-text"><span><i className="fa-solid fa-envelope px-3"></i></span>{contact.contact.email}</h5>
                  {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
  )};
