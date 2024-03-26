import React, { useContext, useEffect, useState } from "react"; //1. Importar el hooks de useContext
import { Context } from "../store/appContext.js"; //2. Importar el contexto
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactcard.js";

export const Contact = () => {
  // console.log(useContext(Context)); Esto retorna los objetos de flux = store y actions


  //Estados que creo de forma global y llevo luego a flux
  // const [allContact, setAllContact]=useState([])
  const { store, actions } = useContext(Context)
  // console.log(store.addcontact);
  //-----------------------------------------------------------

  // console.log(store.allContact);
  //creo useEffect de la funcion que quiero que se ejecute y cargue el componente
  useEffect(() => {
    actions.getAllContacts()
  }, [])


  return (
    <div className="m-5">
      {/*a x link para cambiar la vista */}
      <Link to="/addcontact">
        <button className="btn btn-success mb-5">Add new contact</button>
      </Link>

      <div className="allCards">
        {store.allContact.map((contact) => {
          // console.log(contact);
          return (
            <ContactCard contact={contact} />
          )
        })
        }

    </div>
    </div>


  );
}