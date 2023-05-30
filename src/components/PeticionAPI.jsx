import React, { useEffect, useState } from 'react';

const MarvelAPP = () => {
  const publicKey = 'df76b76f70559f77ceabef48bb628463';
  const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}?ts=1000&apikey=${publicKey}&hash=c3e2400709da47665a9ba009b513d92e&offset=${offset}`);
      const data = await response.json();
      setCharacters(data.data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleNext = () => {
    setOffset(offset + 20);
  };

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - 20);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset]);
  
  return (
    <div>
      <h1>Personajes de Marvel</h1>
        <button onClick={() => setOffset(0)}>Primera Pagina</button>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
        <h2>Es posible que algunos Personajes arrojen una imagen con el mensaje "image not found" debido a que asi se encuentran guardadas dentro de la API de MARVEL.</h2>
        <div>
        {characters.map(character => (
          <div key={character.id}>
            <h3>{character.name}</h3>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />          
          </div>
        ))}
        <button onClick={() => setOffset(0)}>Primera Pagina</button>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>              
      </div>
    </div>
  );
};

export default MarvelAPP;