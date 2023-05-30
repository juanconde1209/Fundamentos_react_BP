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
