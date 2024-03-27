import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts.length > 0 ? (
    <ul className={css.contactList}>
      {filteredContacts.map((item) => (
        <li key={nanoid()} className={css.contactListItem}>
          <Contact contacts={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Phonebook is empty</p>
  );
};

export default ContactList;
