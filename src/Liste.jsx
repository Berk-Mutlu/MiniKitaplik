import React from 'react';
import KitapKarti from "./KitapKarti.jsx";

function Liste({ yazilar, favoriler, onToggleFavori }) {
  return (
    <div className="kitap-listesi">
      <h3>Kitaplar</h3>
      {yazilar.map(function (yazi) {
        const favorideMi = favoriler.includes(yazi.id);
        
        return (
          <KitapKarti 
            key={yazi.id} 
            {...yazi}
            favorideMi={favorideMi}
            onToggleFavori={onToggleFavori}
          />
        );
      })}
    </div>
  )
}
export default Liste;