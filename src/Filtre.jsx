import React from 'react';

function Filtre({ kategoriler, seciliKategori, onKategoriChange }) {
  return (
    <div className="filtre-container">
      <label htmlFor="kategori">Kategori: </label>
      <select 
        id="kategori"
        className="filtre" 
        value={seciliKategori} 
        onChange={onKategoriChange}
      >
        {kategoriler.map(kategori => (
          <option key={kategori} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filtre;