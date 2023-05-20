import ContactInput from './components/ContactInput';
import ContactList from './components/ContactList';
import { getData } from './data/data';

const data = getData();

function App() {

    return (
        <div className="max-w-3xl my-0 mx-auto p-4">
            <h1 className="text-5xl mb-8">Aplikasi Kontak</h1>
            <h2 className="text-2xl font-bold">Tambah Kontak</h2>
            <ContactInput />

            <h2 className="text-2xl mt-8 font-bold">Daftar Kontak</h2>
            <ContactList contacts={data}/>
        </div>
    );
}

export default App;
