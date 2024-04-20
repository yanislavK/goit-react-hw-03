import css from "./../Contact/Contact.module.css";

// eslint-disable-next-line react/prop-types
const Contact = ({ contact: { name, number }, handleDelete }) => {
  return (
    <div className={css.contactBox}>
      <div className={css.contact}>
        <h2>{name}</h2>
        <p>Phone: {number}</p>
      </div>
      <button
        onClick={() => {
          handleDelete(name);
        }}
        className={css.contactBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
