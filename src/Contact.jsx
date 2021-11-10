import React, { useState } from "react";
import { social } from "./data";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [fields, setFields] = useState({
    data: "",
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    let name = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, data: "", [name]: value });
  };
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...fields })
    })
      .then(() => alert("Mensaje enviada!"))
      .then(() =>
        setFields({
          data: "",
          name: "",
          email: "",
          message: ""
        })
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <section id="contact-box" className="contact-box">
      <h3>
        Quieres saber más? <br /> Entra en contacto conmigo!
      </h3>
      <form
        id="contact"
        name="contact"
        method="post"
        className="contact-form"
        netlify-honeypot="bot-field"
        onSubmit={(e) => handleSubmit(e)}
        data-netlify="true"
      >
        <div className="form-itens">
          {/*H O N E Y P O T */}
          <div className="honey">
            <label htmlFor="bot-field"></label>
            <input
              name="bot-field"
              autoComplete="off"
              type="text"
              id="bot-field"
              value={fields.data}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" id="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            value={fields.name}
            onChange={(e) => handleChange(e)}
            className="form-input"
            name="name"
            placeholder="introduzca aquí su nombre"
            required
          />
        </div>
        <div className="form-itens">
          <label htmlFor="email" id="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={fields.email}
            onChange={(e) => handleChange(e)}
            className="form-input"
            name="email"
            placeholder="email@correo.com"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </div>
        <textarea
          className="comments"
          name="message"
          id="message"
          value={fields.message}
          onChange={(e) => handleChange(e)}
          placeholder="dudas, sugerencias, consejos..."
          rows="5"
          cols="50"
          required
        />

        <button
          className="form-button"
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
        >
          Enviar
        </button>
      </form>
      <ul className="social-contact">
        {social.map((socialIcon) => {
          const { id, url, icon, name } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
              <h4>{name}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Contact;
