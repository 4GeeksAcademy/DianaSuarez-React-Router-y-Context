import React, { useContext, useEffect, useState } from "react"; //1. Importar el hooks de useContext
import { Context, context } from "../store/appContext.js"; //2. Importar el contexto
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactcard.js";



export const Contact = () => {
  // console.log(useContext(Context)); Esto retorna los objetos de flux = store y actions


  //Estados que creo de forma global y llevo luego a flux
  // const [allContact, setAllContact]=useState([])
  const { store, actions } = useContext(Context)
  // console.log(store.addcontact);
  //-----------------------------------------------------------

  console.log(store.allContact);
  //creo useEffect de la funcion que quiero que se ejecute y cargue el componente
  useEffect(() => {
    actions.getAllContact()
  }, [])


  return (
    <div className="mt-4">
      <Link to="/addcontact">
        <button className="btn btn-success mb-5">Add new contact</button>
      </Link>
      <div className="card mb-3 mt-2 container-md">
        <div className="row g-0">
          <div className="col-md-2 row justify-content-center align-items-center">
            <img src="https://png.pngtree.com/png-clipart/20230912/original/pngtree-profile-pic-vector-png-image_11052941.png/" className="img-fluid rounded-circle img-fluid my-2 " alt="..." />
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card-body mt-2">
              <h5 className="card-title mb-3">Mike Anamendolla</h5>
              <p className="card-text mb-1"><span><i className="fas fa-trash-alt"></i></span>5842 Hillcrest Rd</p>
              <p className="card-text mb-1"><span><i className="fas fa-trash-alt"></i></span>(870) 288-4149</p>
              <p className="card-text mb-1"><span><i className="fas fa-trash-alt"></i></span>mike.ana@example.com</p>
              {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>


      <ContactCard />

    </div>
  );
}