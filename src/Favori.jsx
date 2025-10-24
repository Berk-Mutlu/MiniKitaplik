import React from 'react';

function FavoriPaneli({ favoriKitaplar, onToggleFavori }) {
  return (
    <div className="favori-paneli">
      <h3>Favoriler ({favoriKitaplar.length})</h3>
      <ul>
        {
          favoriKitaplar.length === 0 
          ? (
              <li>Favori kitap yok.</li>
            ) 
          : (
              favoriKitaplar.map(kitap => (
                <li key={kitap.id}>
                  {kitap.baslik}
                  <button 
                    className="kaldir-btn" 
                    onClick={() => onToggleFavori(kitap.id)}
                  >
                    Kaldır
                  </button> 
                </li>
              ))
            )
        }
      </ul>
    </div>
  );
}

export default FavoriPaneli;