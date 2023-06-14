import { useParams } from 'react-router';
import ContactItem from '../components/ContactItem';
import { getContact } from '../data/local-data';

function DetailPage() {
    const { id } = useParams();

    const contact = getContact(Number(id));

    return (
        <>
            <ContactItem
                id={contact!.id}
                imageUrl={contact!.imageUrl}
                name={contact!.name}
                tag={contact!.tag}
                onDelete={(id: number) => {
                    'asas';
                }}
            />
        </>
    );
}

export default DetailPage;
