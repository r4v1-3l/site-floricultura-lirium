import './App.css'
import { Carousel } from './components/Carousel';
import banner1 from './assets/img/banner1.jpg';

import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { flowersData } from './data/cards';

import { useState } from 'react';

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('currentEvent');

  const filtredFlowers = flowersData.filter((flower) => {
    const matchesSearch =
      flower.title.toLowerCase().includes(search.toLowerCase()) ||
      flower.flowers.some(f => f.toLowerCase().includes(search.toLowerCase())) ||
      flower.colors.some(f => f.toLowerCase().includes(search.toLowerCase()));

    const matchesTab =
      activeTab === 'currentEvent' ? flower.category === 'event' :
        activeTab === 'bouquets' ? flower.category === 'bouquet' :
          activeTab === 'extras' ? flower.category === 'extra' :
            activeTab === 'combos' ? flower.category === 'combo' :
              true;

    return matchesSearch && matchesTab;
  });




  return (
    <div className="lirium-app">
      <Header
        search={search}
        setSearch={setSearch}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="lirium-main">
        
          <Carousel
            images={[banner1, banner1, banner1]}
            
          />
        

        <div className="lirium-content">
          <h2 className="section-title">
            {activeTab === 'currentEvent' && 'DIA DOS NAMORADOS'}
            {activeTab === 'bouquets' && 'ARRANJOS'}
            {activeTab === 'extras' && 'EXTRAS'}
            {activeTab === 'combos' && 'COMBOS'}
            {activeTab === 'aboutUs' && 'SOBRE NÓS'}
          </h2>

          <div className="lirium-grid">

            {filtredFlowers.length > 0 ? (
              filtredFlowers.map((g) => (
                <Cards
                  key={g.id}
                  title={g.title}
                  flowers={g.flowers}
                  colors={g.colors}
                  price={g.price}
                  image={g.image}
                />
              ))
            ) : (
              <p>{activeTab === 'currentEvent' && 'Eventos recentes'}
                {activeTab === 'bouquets' && 'Arranjos de flores'}
                {activeTab === 'extras' && 'Arranjos extras'}
                {activeTab === 'combos' && 'Combos'}
                {activeTab === 'aboutUs' && 'Sobre os desenvolvedores'}
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
