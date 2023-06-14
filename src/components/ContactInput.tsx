import { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

interface IContactInputProps {
  handleAddContact: (name: string, tag: string) => void;
}

function ContactInput({ handleAddContact }: IContactInputProps) {
  const [userValue, setUserValue] = useState({
    name: "",
    tag: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    handleAddContact(userValue.name, userValue.tag);
    navigate('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-[1px] border-dashed border-black p-4 my-2 mx-0 rounded-lg"
    >
      <Input
        placeholder="Name"
        onChangeDariParent={(e: string) => {
          setUserValue({ name: e, tag: userValue.tag });
        }}
      />
      <Input
        placeholder="Tag"
        onChangeDariParent={(e: string) => {
          setUserValue({ tag: e, name: userValue.name });
        }}
      />
      <button
        className="w-full p-2 bg-gray-100 border-[1px] border-solid border-black rounded"
        type="submit"
      >
        Tambah
      </button>
    </form>
  );
}

export default ContactInput;
