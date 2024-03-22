import React, {useContext} from "react";
import { Context } from "../store/appContext";


export const ContactCard = () => {
  //aplico destructuring
  const {store, actions} = useContext(Context)

  // console.log(contact);
    return (
		<h1>HOLA!!!</h1>

);
}
