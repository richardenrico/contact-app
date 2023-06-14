import { useState } from 'react';
import ContactList from '../components/ContactList';
import { deleteContact, getAllContacts } from '../data/local-data';

function HomePage() {
    const data = getAllContacts();

    const [contacts, setContacts] = useState(data);
    
    function onDeleteHandler(id: number) {
        deleteContact(id);
        setContacts(getAllContacts());
    }

    return (
        <>
            <h2 className="text-2xl mt-8 font-bold">Daftar Kontak</h2>
            <ContactList contacts={contacts} onDelete={onDeleteHandler} />
        </>
    );
}

export default HomePage;
