import React from 'react';
import Searcher from '../../components/Searcher';
import PokemonCard from '../../components/PokemonList';
import './styles.css';

function Home() {

  return (
    <div className='Home'>
      <Searcher />
      <PokemonCard />
    </div>
  );
}

export default Home;