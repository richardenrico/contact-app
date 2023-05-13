function App() {
  return (
    <div className="max-w-3xl my-0 mx-auto p-4">
      <h1 className="text-5xl mb-8">Aplikasi Kontak</h1>
      <h2 className="text-2xl font-bold">Tambah Kontak</h2>
      <form className="border-[1px] border-dashed border-black p-4 my-2 mx-0 rounded-lg">
        <input
          className="block w-full p-2 my-2 mx-0 border-[1px] border-solid border-black rounded"
          type="text"
          placeholder="Nama"
        />
        <input
          className="block w-full p-2 my-2 mx-0 border-[1px] border-solid border-black rounded"
          type="text"
          placeholder="Tag"
        />
        <button
          className="w-full p-2 bg-gray-100 border-[1px] border-solid border-black rounded"
          type="submit"
        >
          Tambah
        </button>
      </form>

      <h2 className="text-2xl mt-8 font-bold">Daftar Kontak</h2>
      <div>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center my-6 mx-0 border-[1px] border-dashed border-black p-4 rounded-lg"
          >
            <img
              className="w-16 rounded-full"
              src="https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
              alt="contact avatar"
            />
            <div className="flex-1 ml-2 pl-2 border-l-[1px] border-solid border-[#aaa]">
              <h3 className="text-lg font-bold py-1 px-0">Richard Enrico</h3>
              <p className="text-base font-light">@cocoloco</p>
            </div>
            <button className="p-2 text-lg bg-[#ff4500] text-white border-0 rounded cursor-pointer aspect-square">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
