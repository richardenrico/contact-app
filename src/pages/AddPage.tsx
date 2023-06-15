import { useNavigate } from "react-router-dom";
import ContactInput from "../components/ContactInput";
import { addContact } from "../data/local-data";

function AddPage() {
  const navigate = useNavigate();

  function handleAddContact(name: string, tag: string) {
    addContact({ name, tag });
    navigate("/");
  }

  return (
    <>
      <h2 className="text-2xl italic font-light ">Tambah Kontak</h2>
      <ContactInput handleAddContact={handleAddContact} />
    </>
  );
}

export default AddPage;
