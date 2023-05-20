import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

interface IContactItemProps {
    imageUrl: string;
    name: string;
    tag: string;
}

function ContactItem({ imageUrl, name, tag }: IContactItemProps) {
    return (
        <div className="flex items-center my-6 mx-0 border-[1px] border-dashed border-black p-4 rounded-lg">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton />
        </div>
    );
}

export default ContactItem;
