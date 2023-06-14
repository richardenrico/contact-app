import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";

interface IContactListProps {
  contacts: Array<{
    id: number;
    name: string;
    tag: string;
    imageUrl: string;
  }>;
  onDelete: (id: number) => void;
}

function ContactList({ contacts, onDelete }: IContactListProps) {
  return (
    <div>
      {contacts.map((contact, i) => (
        <Link to={`/${contact.id}`}>
          <ContactItem
            key={i}
            id={contact.id}
            imageUrl={contact.imageUrl}
            name={contact.name}
            tag={contact.tag}
            onDelete={onDelete}
          />
        </Link>
      ))}
    </div>
  );
}

export default ContactList;
