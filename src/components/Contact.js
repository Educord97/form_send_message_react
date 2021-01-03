import React, { useState } from "react";
import "../App.css";
import { db } from "../firebase";

const Contact = () => {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [message, setMessage] = useState("");

     const [loader, setLoader ] = useState(false);

     const handleSubmit = (e) => {
         e.preventDefault();
         setLoader(true);

     db.collection("contacts")
       .add({
           name: name,
           email: email,
           message: message,
       })
       .then(() => {
        alert("Your message has been submitted, thanks👍");
           setLoader(false);
       })
       .catch((error) => {
           alert(error.message)
           setLoader(false);
       });

       setName("");
       setEmail("");
       setMessage("");


     }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contato</h1>

      <label>Nome</label>
      <input placeholder="Nome"
             required
             autoFocus
             value={name}
             onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

      <label>Mensagem</label>
      <textarea placeholder="Mensagem"
                 required
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}>

                 </textarea>

      <button type="submit"
      style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)"}}>Enviar</button>
    </form>
  );
};

export default Contact;
