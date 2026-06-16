import './App.css'

import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { eventFlowersData } from './data/eventCards';
import { Cards } from './components/Cards';
import { CardsModal } from './components/CardsModal';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { footerData } from './data/footer';

import { Flower, CircleArrowLeft,CircleArrowRight } from 'lucide-react';

import { useState, useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./components/ToastifyCustom.css";

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
  const [favorites, setFavorites] = useState([]);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [cart, setCart] = useState([]);

  //função AOS para colocar animação nos cards ao abrir o site
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    })
  }, []);

  const sliderSettings = {
    slidesPerView: 1,
  };

  //função para pesquisar produtos
  const filtredFlowers = eventFlowersData.filter((flower) => {
    const matchesSearch =
      flower.title.toLowerCase().includes(search.toLowerCase()) ||
      flower.flowers.some(f => f.toLowerCase().includes(search.toLowerCase())) ||
      flower.colors.some(f => f.toLowerCase().includes(search.toLowerCase()));

  //função para trocar de aba no site(esta dentro da função de pesquisar produtos)
  const matchesTab =
    activeTab === 'currentEvent' ? flower.category === 'event' :
      activeTab === 'bouquets' ? flower.category === 'bouquet' :
        activeTab === 'extras' ? flower.category === 'extra' :
          activeTab === 'combos' ? flower.category === 'combo' :
            activeTab === "favorites" ? favorites.includes(flower.id) :
          true;

  return matchesSearch && matchesTab;

  });

  //função para favoritar produtos
  const toggleFavorite = (id) => {

      const flower = eventFlowersData.find((g) => g.id === id);
      const flowerTitle = flower ? flower.title: "Produto";

      const isFavorite = favorites.includes(id);

      if(isFavorite){
        toast.info(
          <span>
            <b>{flowerTitle}</b> removido dos favoritos
          </span>,
          {theme: "",});
      }else {
        toast.success(
          <span>
            <b>{flowerTitle}</b> adicionado aos favoritos
          </span>,
        {theme: "",
        onClick: () => {
        setSelectedCard(flower);
        }
        });
      }

      setFavorites((prev) => prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id])
    }

    //função para limitar quantos cards são mostrados por vez
    const [page, setPage] = useState(0);

    const cardsPerPage = 5;

    const visibleFlowers = filtredFlowers.slice(
      page * cardsPerPage,
      (page + 1) * cardsPerPage
    );

    //função para que enquanto o modal estiver aberto não é possível interagir com o restante do site
    useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCard]);

  //função para colocar produtos no carrinho
  const addToCart = (id) => {

   const flower = eventFlowersData.find((g) => g.id === id);
    const flowerTitle = flower ? flower.title : "Produto";

    toast.success(
      <span>
        <b>{flowerTitle}</b> adicionado ao carrinho
      </span>,
      {
        theme: "",
        onClick: () => {
          setSelectedCard(flower);
        }
      }
    );

    setCart((prev) => {
      const existingItem = prev.find(item => item.id === id);

      if (existingItem) {
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { id, quantity: 1 }];
    });
  }

  //função para que o botão de lixeira remova o item do carrinho
  const removeFromCart = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
  };

  //funções para aumentar ou diminuir a quantidade de um mesmo item no carrinho
  const increaseQuantity = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
  );
};

//função para somar o preço dos itens do carrinho
const totalPrice = cart.reduce((total, item) => {
  const flower = eventFlowersData.find(f => f.id === item.id);

  if (!flower) return total;

  const price =
    Number(
      flower.price
        .replace("R$", "")
        .replace(".", "")
        .replace(",", ".")
        .trim()
    );

  return total + price * item.quantity;
}, 0);
  
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
             {activeTab !== "cart" && (
              <Flower/>
             )}

            <h2 className="section-title">
              {activeTab === 'currentEvent' && 'PARA SE APAIXONAR'}
              {activeTab === 'bouquets' && 'ARRANJOS'}
              {activeTab === 'extras' && 'EXTRAS'}
              {activeTab === 'combos' && 'COMBOS'}
              {activeTab === 'aboutUs' && 'SOBRE NÓS'}
              {activeTab === "favorites" && "FAVORITOS"}
            </h2>

            </div>
            
              {activeTab !== "cart" && (
              <div className='arrows'>
                <CircleArrowLeft
                  size={28}
                  className="icon-btn"
                  onClick={() => setPage(Math.max(page - 1, 0))}
                />

                <CircleArrowRight
                  size={28}
                  className="icon-btn"
                  onClick={() => {
                    const maxPage =
                      Math.ceil(filtredFlowers.length / cardsPerPage) - 1;

                    setPage(Math.min(page + 1, maxPage));
                  }}
                />
              </div>
            )}

          </div>

          <div className="lirium-grid">

            {activeTab === "cart" ? (

                <Cart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                removeFromCart={removeFromCart}
                price={totalPrice}
                />

              ) : (

            <div className="cards-container">
            {visibleFlowers.length > 0 ? (
              visibleFlowers.map((g) => (
                <Cards
                  key={g.id}
                  title={g.title}
                  flowers={g.flowers}
                  colors={g.colors}
                  price={g.price}
                  rating={g.rating}
                  image={g.image}
                  isFavorite={favorites.includes(g.id)}
                  onFavorite={() => toggleFavorite(g.id)}

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
          )}

          <div className="section-header second-section">
            <div className="title-wrapper">
              {activeTab !== "cart" && (
            <Flower />
        )}

        <h2 className="section-title">
            {activeTab === 'currentEvent' && 'OUTRAS SURPRESAS ROMÂNTICAS'}
            {activeTab === 'bouquets' && 'OUTROS ARRANJOS'}
            {activeTab === 'extras' && 'COMBINE COM ESTES EXTRAS'}
            {activeTab === 'combos' && 'OUTROS COMBOS'}
            {activeTab === 'favorites' && 'VOCÊ TAMBÉM PODE GOSTAR'}
            {activeTab === 'aboutUs' && 'CONHEÇA MAIS'}
        </h2>
      </div>
    </div>

          </div>
        </div>
      </div>

      <CardsModal
        flower={selectedCard}
        onClose={() => setSelectedCard(null)}
        flower={selectedCard}
        isFavorite={
          selectedCard
            ? favorites.includes(selectedCard.id)
            : false
        }
        onFavorite={() => {
          if (selectedCard) {
            toggleFavorite(selectedCard.id);
          }
        }}
        onFlowerClick={(flower) => {
        setSearch(flower);
        setSelectedCard(null); // fecha o modal
        }}
        onColorClick={(color) => {
        setSearch(color);
        setSelectedCard(null); // fecha o modal
        }}
        onAddToCart={() => {
          if(selectedCard) {
            addToCart(selectedCard.id);//adiciona item ao carrinho
          }
        }}
        onClose={() => setSelectedCard(null)}
      /> 
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        onClick={() => setActiveTab('favorites')}
        pauseOnHover
        draggable
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
