import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <div className="max-w-3xl my-0 mx-auto p-4">
      <h1 className="text-5xl mb-8">Aplikasi Kontak</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>

    </div>
  );
}

export default App;
