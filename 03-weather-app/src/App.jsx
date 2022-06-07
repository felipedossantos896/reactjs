import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form>
        <input className="p-3 rounded-lg outline-none" type="text" placeholder="Cidade" />
        <button className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold" type="submit">Pesquisar</button>
      </form>

      <Card />
    </div>
  );
}

export default App;
