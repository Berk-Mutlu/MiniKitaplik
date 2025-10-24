import React from 'react';
function Arama({aramaMetni, onSearch}){
return(
  <div className="arama-container">
    <label htmlFor="arama">Ara: </label>
    <input 
      type="text" 
      id="arama" 
      onChange={onSearch}
      value={aramaMetni}
      placeholder="Arama metni girin..."
    />
  </div>
)
}
export default Arama;