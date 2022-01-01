import React, { useState } from "react";
import "../App.css";

function Form({setuserName}) {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setuserName(name)
       return setName('')
    }
    console.log(name);
  return (
    <>
      <form onSubmit={handleSubmit} className="userform">
        <input  onChange={e => setName(e.target.value) } type="text" placeholder="Search for github" />
      </form>
    </>
  );
}

export default Form;
