import React from 'react';
import './styles.css';

export default function SearchBar() {
  return (
    <div className='Searcher wrapper'>
      <div>
        <div
          widescreen={10}
          largeScreen={10}
          mobile={16}
          className='Searcher'
        >
          <input
            aligned='right'
            input={{ fluid: true }}
            showNoResults={false}
            placeholder='Encuentra a tu Pokemón favorito'
          />
        </div>
      </div>
    </div>
  );
}