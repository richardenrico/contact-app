import { Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

function App() {

    return (
        <div className="max-w-3xl my-0 mx-auto p-4">
            <h1 className="bg-green-400  text-5xl mb-8">Aplikasi Kontak</h1>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddPage />} />
            </Routes>
        </div>
    );
}

export default App;
