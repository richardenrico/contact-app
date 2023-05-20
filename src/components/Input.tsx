interface IInputProps {
    placeholder: string;
}

function Input({placeholder}: IInputProps) {
    return (
        <input
            className="block w-full p-2 my-2 mx-0 border-[1px] border-solid border-black rounded"
            type="text"
            placeholder={placeholder}
        />
    );
}

export default Input;
