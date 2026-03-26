import './App.css'

import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { flowersData } from './data/cards';

function App() {

  return (
    <div className="lirium-app">
      <Header />

      <div className="lirium-main">
        <div className="lirium-grid">
          {
            flowersData.map((g) =>
            (<Cards
              key={g.id}
              title={g.title}
              category={g.price}
              banner={g.image}
            />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default App
