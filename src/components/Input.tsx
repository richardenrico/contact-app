interface IInputProps {
  placeholder: string;
  onChangeDariParent: (value: string) => void;
}

function Input({ placeholder, onChangeDariParent }: IInputProps) {
  //   const samaSajaKayakGini = {
  //     target: {
  //       value: "has",
  //     },
  //   };

  return (
    <input
      onChange={(e: any) => {
        const valueNyaE = e.target.value;
        onChangeDariParent(valueNyaE);
      }}
      className="block w-full p-2 my-2 mx-0 border-[1px] border-solid border-black rounded"
      type="text"
      placeholder={placeholder}
    />
  );
}

export default Input;
