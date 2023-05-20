import Input from "./Input";

function ContactInput() {
    return (
        <form className="border-[1px] border-dashed border-black p-4 my-2 mx-0 rounded-lg">
            <Input placeholder="Name"/>
            <Input placeholder="Tag"/>
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
