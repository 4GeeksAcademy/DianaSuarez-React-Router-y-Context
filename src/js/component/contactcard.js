import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const ContactCard = (contact) => {
  //aplico destructuring
  // console.log(contact);
  const { actions, store } = useContext(Context)

  return (
    <div className="card m-auto mb-3 mx-100">
      {/* <!-- Button trigger modal --> */}
      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              If you delete this thing the entire universe will go down!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
              <button type="button delete" onClick={() => actions.deleteContact(store.contactToDelete.id)} className="btn btn-secondary" data-bs-dismiss="modal">Yes baby!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end float-right">
        <Link to="/editcontact">
          <button className="btn btn fa-solid fa-pen mt-2 d-grid gap-1" onClick={() => actions.setContact(contact)}
            type="button pencil" />
        </Link>
        <button type="button" onClick={() => actions.contactToDelete(contact)} className="btn fa-solid fa-trash-can mt-2"
          data-bs-toggle="modal" data-bs-target="#exampleModal" />
      </div>
      <div className="row d-flex">
        <div className="col-sm-5 col-md-3 px-4 mb-3">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/night-hunting/android-contacts.png"
            className="pb-2 img-fluid rounded-circle mw-auto" alt="..." />
        </div>
        <div className="col-12 col-sm-6 col-md-9 px-5 img-fluid">
          <h3 className="card-title mt-2 px-3">{contact.contact.full_name}</h3>
          <div className="card-body">
            <h5 className="card-text"><span><i className="fa-solid fa-location-dot px-3"></i></span>{contact.contact.address}</h5>
            <h5 className="card-text"><span><i className="fa-solid fa-phone-flip px-3"></i></span>{contact.contact.phone}</h5>
            <h5 className="card-text"><span><i className="fa-solid fa-envelope px-3 "></i></span>{contact.contact.email}</h5>
            {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
          </div>
        </div>
      </div>
    </div>
  )
};

