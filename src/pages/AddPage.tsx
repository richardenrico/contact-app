import ContactInput from "../components/ContactInput";
import { addContact } from "../data/local-data";

function AddPage() {
    function handleAddContact(name: string, tag: string) {
        addContact({name, tag});
    }

    return (
        <>
            <h2 className="text-2xl italic font-light ">Tambah Kontak</h2>
            <ContactInput
                handleAddContact={handleAddContact}
            />
        </>
    );
}

export default AddPage;
