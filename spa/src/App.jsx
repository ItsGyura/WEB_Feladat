import { useState } from 'react'
import './App.css'

function App() {
  const [feladatok, setFeladatok] = useState([
    { id: 1, szoveg: "React beadandó befejezése", kesz: false },
    { id: 2, szoveg: "Dokumentáció megírása", kesz: true }
  ]);
  const [ujFeladat, setUjFeladat] = useState("");

  const hozzaad = () => {
    if (ujFeladat.trim() === "") return;
    setFeladatok([...feladatok, { id: Date.now(), szoveg: ujFeladat, kesz: false }]);
    setUjFeladat("");
  };

  const torol = (id) => {
    setFeladatok(feladatok.filter(f => f.id !== id));
  };

  const pipa = (id) => {
    setFeladatok(feladatok.map(f => f.id === id ? { ...f, kesz: !f.kesz } : f));
  };

  return (
    <>
      <header>
        <h1>Web programozás-1 | SPA Felület</h1>
        <nav>
          <a href="index.html">Főoldal</a>
          <a href="javascript.html">CRUD</a>
          <a href="react.html">REACT</a>
          <a href="spa.html">SPA</a>
          <a href="fetchapi.html">Fetch API</a>
        </nav>
      </header>

      <main>
        <div className="versenyek">
          <h2>Teendők kezelése</h2>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input 
              type="text" 
              value={ujFeladat} 
              onChange={(e) => setUjFeladat(e.target.value)} 
              placeholder="Új feladat..."
            />
            <button onClick={hozzaad} style={{ padding: '10px', backgroundColor: '#15151e', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Hozzáadás
            </button>
          </div>

          <table id="lista">
            <thead>
              <tr>
                <th>Állapot</th>
                <th>Feladat</th>
                <th>Művelet</th>
              </tr>
            </thead>
            <tbody>
              {feladatok.map(f => (
                <tr key={f.id} style={{ opacity: f.kesz ? 0.5 : 1 }}>
                  <td>
                    <input type="checkbox" checked={f.kesz} onChange={() => pipa(f.id)} />
                  </td>
                  <td style={{ textDecoration: f.kesz ? 'line-through' : 'none' }}>
                    {f.szoveg}
                  </td>
                  <td>
                    <button onClick={() => torol(f.id)} id="torol">Törlés</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
            Összes feladat: {feladatok.length} | Kész: {feladatok.filter(f => f.kesz).length}
          </p>
        </div>
      </main>

      <footer>
        Gyurászik György Marcell - ZX4R0A | Patkós Máté - CS9R44
      </footer>
    </>
  )
}

export default App