interface IDeleteButtonProps {
    id: number;
    onDelete: (id: number) => void;
}

function DeleteButton({id, onDelete}: IDeleteButtonProps) {
    return (
        <button 
            className="p-2 text-lg bg-[#ff4500] text-white border-0 rounded cursor-pointer aspect-square"
            onClick={() => onDelete(id)}
        >
            X
        </button>
    );
}

export default DeleteButton;
