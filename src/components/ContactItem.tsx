import { Link } from 'react-router-dom';
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
        <div className="flex items-center my-6 justify-between border-[1px] border-dashed border-black p-4 rounded-lg">
            <Link to={`/${id}`} className='flex'>
                <ContactItemImage imageUrl={imageUrl} />
                <ContactItemBody name={name} tag={tag} />
            </Link>
            <DeleteButton onDelete={onDelete} id={id} />
        </div>
    );
}

export default ContactItem;
