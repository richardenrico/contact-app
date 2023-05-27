import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

interface IContactItemProps {
    id: number;
    imageUrl: string;
    name: string;
    tag: string;
    onDelete: (id: number) => void;
}

function ContactItem({ id, imageUrl, name, onDelete, tag }: IContactItemProps) {
    return (
        <div className="flex items-center my-6 mx-0 border-[1px] border-dashed border-black p-4 rounded-lg">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton onDelete={onDelete} id={id}/>
        </div>
    );
}

export default ContactItem;
