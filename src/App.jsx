import './App.css'

import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { Cards } from './components/Cards';
import { CardsModal } from './components/CardsModal';
import { Footer } from './components/Footer';

import { flowersData } from './data/cards';
import { footerData } from './data/footer';

import { useState } from 'react';

import { Flower, CircleArrowLeft,CircleArrowRight } from 'lucide-react';

import diaDosNamorados_banner1 from './assets/img/diaDosNamorados-banner1.jpg';
import diaDosNamorados_banner2 from './assets/img/diaDosNamorados-banner2.jpg';
import diaDosNamorados_banner3 from './assets/img/diaDosNamorados-banner3.jpg';
import diaDosNamorados_banner4 from './assets/img/diaDosNamorados-banner4.jpg';
import diaDosNamorados_banner5 from './assets/img/diaDosNamorados-banner5.jpg';
import diaDosNamorados_banner6 from './assets/img/diaDosNamorados-banner6.jpg';

function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('currentEvent');
  const [selectedCard, setSelectedCard] = useState(null);

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
            images=
            {[
              diaDosNamorados_banner1,
              diaDosNamorados_banner2,
              diaDosNamorados_banner3,
              diaDosNamorados_banner4,
              diaDosNamorados_banner5,
              diaDosNamorados_banner6
            ]}
            
          />
        

        <div className="lirium-content">

          <div className='section-header'>

            <div className='title-wrapper'>
            <Flower/>

            <h2 className="section-title">
              {activeTab === 'currentEvent' && 'PARA SE APAIXONAR'}
              {activeTab === 'bouquets' && 'ARRANJOS'}
              {activeTab === 'extras' && 'EXTRAS'}
              {activeTab === 'combos' && 'COMBOS'}
              {activeTab === 'aboutUs' && 'SOBRE NÓS'}
            </h2>

            </div>
            
              <div className='arrows'>
                <CircleArrowLeft size={28} className="icon-btn" />
                <CircleArrowRight size={28}className="icon-btn" />
              </div>

          </div>

          <div className="lirium-grid">

            <div className="cards-container">
            {filtredFlowers.length > 0 ? (
              filtredFlowers.map((g) => (
                <Cards
                  key={g.id}
                  title={g.title}
                  flowers={g.flowers}
                  colors={g.colors}
                  price={g.price}
                  image={g.image}

                  onAbout={() => setSelectedCard(g)}
                />
              ))) : (
              <p>
                {activeTab === 'currentEvent' && 'Eventos recentes'}
                {activeTab === 'bouquets' && 'Arranjos de flores'}
                {activeTab === 'extras' && 'Arranjos extras'}
                {activeTab === 'combos' && 'Combos'}
                {activeTab === 'aboutUs' && 'Sobre os desenvolvedores'}
              </p>
            )}
            </div>

            <div className="footer-container">

            </div>

          </div>
        </div>
      </div>

      <CardsModal
        flower={selectedCard}
        onClose={() => setSelectedCard(null)}
      />  
        
        {footerData.map((g) => (

              <Footer
                key={g.id}
                title={g.title}
                text={g.text}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              ))}

    </div>
  )
}

export default App
