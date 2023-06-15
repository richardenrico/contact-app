import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import Navigation from "./components/Navigation";
import DetailPage from "./pages/DetailPage";
import PostListPage from "./pages/PostListPage";
import PostListTapiHanyaLimaPuluh from "./pages/PostListTapiHanya50";

function App() {
  return (
    <div className="max-w-3xl my-0 mx-auto p-4">
      <h1 className="text-5xl mb-8">Aplikasi Kontak</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/daftar-post" element={<PostListPage />} />
        <Route
          path="/daftar-post-50"
          element={<PostListTapiHanyaLimaPuluh />}
        />
      </Routes>
    </div>
  );
}

export default App;
