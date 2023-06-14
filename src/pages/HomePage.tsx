import { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import { deleteContact, getAllContacts } from '../data/local-data';
import SearchBox from '../components/SearchBox';
import { useSearchParams } from 'react-router-dom';

function HomePage() {
    const data = getAllContacts();

    const [contacts, setContacts] = useState(data);
    const [keyword, setKeyword] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();
    const defaultKeyword = searchParams.get("keyword");
    
    function onKeywordChangeHandler(keyword: string) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    function onDeleteHandler(id: number) {
        deleteContact(id);
        setContacts(getAllContacts());
    }

    useEffect(() => {
        if (defaultKeyword !== null) {
            setKeyword(defaultKeyword);

            const searchResult = data.filter((con) => {
                return con.name
                    .toLowerCase()
                    .includes(defaultKeyword.toLowerCase());
            });
            setContacts(searchResult);
        }
    }, [defaultKeyword]);

    return (
        <>
            <h2 className="text-2xl mt-8 font-bold">Daftar Kontak</h2>
            <SearchBox keyword={keyword} keywordChange={onKeywordChangeHandler} />

            <ContactList contacts={contacts} onDelete={onDeleteHandler} />
        </>
    );
}

export default HomePage;
