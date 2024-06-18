import { useState } from "react";

import Footer from "./components/Footer";
import generateResult from "./services/generateResult";

function App() {
  const [name, setName] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const khodam = generateResult(name);
    setResult(khodam);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-5xl font-bold capitalize mb-4 text-center">cek khodam</h1>
        <h2 className="text-lg mb-6 text-center tracking-wider">apakah anda memiliki khodam?</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama Anda"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        <p className="mt-8 text-center text-lg">Khodam Anda adalah:</p>
        {result && <p className="mt-2 text-center font-bold text-3xl text-red-500">{result}</p>}
      </div>
      <Footer />
    </div>
  );
}

export default App
