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
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input placeholder="Name"
             required
             value={name}
             onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

      <label>Message</label>
      <textarea placeholder="Message"
                 required
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}>

                 </textarea>

      <button type="submit"
      style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)"}}>Submit</button>
    </form>
  );
};

export default Contact;
