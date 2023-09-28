import React from "react";

function Form() {
  return (
    <form className="flex flex-col gap-3">
      <label>Nom</label>
      <input
        type="text"
        placeholder="Titre du sujet"
        className="border border-slate-500 px-8 py-2 rounded"
      />
      <label>Email</label>
      <input
        type="text"
        placeholder="Titre du sujet"
        className="border border-slate-500 px-8 py-2 rounded"
      />
      <button className=""></button>
    </form>
  );
}

export default Form;
