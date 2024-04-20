import Contact from "../Contact/Contact";
import css from "./../ContactList/ContactList.module.css";

const ContactList = ({ filteredContacts, handleDelete }) => {
  return (
    <ul className={css.contactlist}>
      {filteredContacts.map((contact) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <li>
            <Contact handleDelete={handleDelete} contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
