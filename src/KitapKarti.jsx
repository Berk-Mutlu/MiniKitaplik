import React from 'react';
function KitapKarti({ id, baslik, yazar, kategori, favorideMi, onToggleFavori }) {
  return (
    <div className="book-card">
      <span className="baslik">{baslik}</span>
      <span className="alt">{yazar} - {kategori}</span>
      
      <button 
        className={favorideMi ? "favori-btn favoride" : "favori-btn"}
        onClick={() => onToggleFavori(id)}
      >
        {favorideMi ? "★ Favoride" : "✩ Favori Ekle"}
      </button>
    </div>
  )
}

export default KitapKarti;