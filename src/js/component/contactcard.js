import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const ContactCard = (contact) => {
  //aplico destructuring

  // console.log(contact);

  const { actions, store } = useContext(Context)

  return (
    <div className="card mb-3 d-flex">
      {/* <div className="d-grid gap-1 d-md-flex justify-content-md-end m-1 mw-3">
  <button className="btn btn" type="button"><i className="fa-solid fa-pen px-3 mt-3 me-md-2"></i></button>
  <button className="btn btn" type="button"><i className="fa-solid fa-trash-can px-3 mt-3 me-md-2"></i></button>
</div> */}
      {/* <!-- Button trigger modal --> */}
      <Link to="/editcontact">
        <button className="btn btn fa-solid fa-pen mt-2 d-grid gap-1 justify-content-md-end m-1" onClick={() => actions.setContact(contact)} type="button pencil" />
      </Link>
      <button type="button" onClick={() => actions.contactToDelete(contact)} className="btn fa-solid fa-trash-can mt-2 d-grid gap-1 justify-content-md-end m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" />
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

      {/* <div clasName="mb-1 float-right me-md-2">
              <i className="fa-solid fa-pen px-3 mt-3 me-md-2"></i>
              <i className="fa-solid fa-trash-can px-3 mt-3 me-md-2"></i>
            </div> */}

      <div className="row g-0 mb-3">
        <div className="col-md-3 row justify-content-center align-items-center">
          <img src="https://png.pngtree.com/png-clipart/20230912/original/pngtree-profile-pic-vector-png-image_11052941.png" className="img-fluid rounded-circle img-fluid" alt="..." />
        </div>
        <div className="col-md-3 col-sm-12 mb-5">
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
  )
};
