import ContactItem from "./ContactItem";

interface IContactListProps {
    contacts: Array<{
        id: number;
        name: string;
        tag: string;
        imageUrl: string;
    }>;
}

function ContactList({contacts}: IContactListProps) {
    return (
        <div>
            {contacts.map((contact, i) => (
                <ContactItem
                    key={i}
                    imageUrl={contact.imageUrl}
                    name={contact.name}
                    tag={contact.tag}
                />
            ))}
        </div>
    );
}

export default ContactList;
