import './App.css'
import Liste from './Liste'
import Arama from './Arama'
import KategoriFiltre from './Filtre'
import FavoriPaneli from './Favori.jsx'
import React from 'react'

const kitaplar = [
  { "id": 1, "baslik": "Reacta Giriş", "yazar": "A.K. Karababa", "kategori": "Web" },
  { "id": 2, "baslik": "Web Teknolojileri", "yazar": "B.Kırış", "kategori": "Web" },
  { "id": 3, "baslik": "JavaScript Temelleri", "yazar": "B.Mutlu", "kategori": "Web" },
  { "id": 4, "baslik": "Diferansiyel Denklemler", "yazar": "E.Tarhan", "kategori": "Matematik" },
  { "id": 5, "baslik": "İşletim Sistemleri", "yazar": "B.Gates", "kategori": "Bilgisayar Bilimleri" },
  { "id": 6, "baslik": "Unity ile Oyun Geliştirme", "yazar": "H.Kojima", "kategori": "Oyun" },
];

const tumKategoriler = ["Tümü", ...new Set(kitaplar.map(kitap => kitap.kategori))];

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || ""
  );

  const [kategori, setKategori] = React.useState("Tümü");
  
  const [favoriler, setFavoriler] = React.useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  function handleSearch(event) {
    setAramaMetni(event.target.value);
  }

  function handleKategoriChange(event) {
    setKategori(event.target.value);
  }

  function handleToggleFavori(kitapId) {
    let yeniFavoriler;
    if (favoriler.includes(kitapId)) {
      yeniFavoriler = favoriler.filter(id => id !== kitapId);
    } else {
      yeniFavoriler = [...favoriler, kitapId];
    }
    setFavoriler(yeniFavoriler);
  }

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  React.useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [favoriler]);

  const arananYazilar = kitaplar.filter((kitap) => {
    const aramaFiltresi = 
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());

    const kategoriFiltresi = 
      kategori === "Tümü" || kitap.kategori === kategori;

    return aramaFiltresi && kategoriFiltresi;
  });

  const favoriKitaplar = kitaplar.filter(kitap => favoriler.includes(kitap.id));

  return (
    <>
      <h1>{"Mini Kitaplık"}</h1>

      <Arama 
        aramaMetni={aramaMetni} 
        onSearch={handleSearch} 
      />
      
      <KategoriFiltre 
        kategoriler={tumKategoriler} 
        seciliKategori={kategori} 
        onKategoriChange={handleKategoriChange} 
      />
      
      <hr />

      <div className="panel"><Liste 
        yazilar={arananYazilar} 
        favoriler={favoriler}
        onToggleFavori={handleToggleFavori}/>
      
      <hr />

       <FavoriPaneli 
        favoriKitaplar={favoriKitaplar}
        onToggleFavori={handleToggleFavori}
      />
       </div>
    </>
  )
}

export default App