import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContact] = useState(
    JSON.parse(window.localStorage.getItem("data") || null) ?? []
  );

  const [filterValue, setFilterValue] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const handleSubmit = (contact) => {
    setContact((state) => [...state, contact]);
  };

  const handleDelete = (name) => {
    setContact((state) => state.filter((contact) => contact.name !== name));
  };

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox filterValue={filterValue} setFilterValue={setFilterValue} />
      <ContactList
        filteredContacts={filteredContacts}
        contacts={contacts}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
