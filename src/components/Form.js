import React from "react";

const Form = (props) => {
  return (
    <form className="form">
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        className="form__input"
        placeholder="Wpisz miasto..."
      />
    </form>
  );
};

export default Form;
