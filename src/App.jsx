import './App.css'

import { Header } from './components/Header';
import { Carousel } from './components/Carousel';

import { flowersData } from './data/defaultCards';
import { Cards } from './components/Cards';

import { ExtraCards } from './components/ExtraCards';

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

//pro carrossel de dia dos namorados
import diaDosNamorados_banner1 from './assets/img/diaDosNamorados-banner1.jpg';
import diaDosNamorados_banner2 from './assets/img/diaDosNamorados-banner2.jpg';
import diaDosNamorados_banner3 from './assets/img/diaDosNamorados-banner3.jpg';
import diaDosNamorados_banner4 from './assets/img/diaDosNamorados-banner4.jpg';
import diaDosNamorados_banner5 from './assets/img/diaDosNamorados-banner5.jpg';
import diaDosNamorados_banner6 from './assets/img/diaDosNamorados-banner6.jpg';

// '' arranjos
import arranjos_banner1 from './assets/img/arranjos-banner1.jpg';
import arranjos_banner2 from './assets/img/arranjos-banner2.jpg';
import arranjos_banner3 from './assets/img/arranjos-banner3.jpg';
import arranjos_banner4 from './assets/img/arranjos-banner4.jpg';

//'' extras e carrinho
import extras_banner1 from './assets/img/extras-banner1.jpg';
import extras_banner2 from './assets/img/extras-banner2.jpg';
import extras_banner3 from './assets/img/extras-banner3.jpg';
import extras_banner4 from './assets/img/extras-banner4.jpg';
import extras_banner5 from './assets/img/extras-banner5.jpg';
import extras_banner6 from './assets/img/extras-banner6.jpg';

function App() {

  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('currentEvent');
  //função para a seção de cards extra só mostrar os cards com section=extra
  const [extraPage, setExtraPage] = useState(0);
  //função para limitar quantos cards são mostrados por vez
  const [page, setPage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [cart, setCart] = useState([]);

  const carouselImages = {
  currentEvent: [
    diaDosNamorados_banner1,
    diaDosNamorados_banner2,
    diaDosNamorados_banner3,
    diaDosNamorados_banner4,
    diaDosNamorados_banner5,
    diaDosNamorados_banner6
  ],

  bouquets: [
    arranjos_banner1,
    arranjos_banner2,
    arranjos_banner3,
    arranjos_banner4
  ],

  extras: [
    extras_banner1,
    extras_banner2,
    extras_banner3,
    extras_banner4,
    extras_banner5,
    extras_banner6,
  ],

  favorites: [
    extras_banner1,
    extras_banner2,
    extras_banner3,
    extras_banner4,
    extras_banner5,
    extras_banner6,
  ],

  cart: [
    extras_banner1,
    extras_banner2,
    extras_banner3,
    extras_banner4,
    extras_banner5,
    extras_banner6,
  ]
};

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

//para que os cards nao vao para abas erradas
  useEffect(() => {
  setPage(0);
  setExtraPage(0);
}, [activeTab]);

  //função para pesquisar produtos
  const filtredFlowers = flowersData.filter((flower) => {
    const matchesSearch =
      flower.title.toLowerCase().includes(search.toLowerCase()) ||
      flower.flowers.some(f => f.toLowerCase().includes(search.toLowerCase())) ||
      flower.colors.some(f => f.toLowerCase().includes(search.toLowerCase()));

  //função para trocar de aba no site(esta dentro da função de pesquisar produtos)
  const matchesTab =
  activeTab === 'currentEvent' ? flower.category === 'event' :
  activeTab === 'bouquets' ? flower.category === 'bouquet' :
  activeTab === 'extras' ? flower.category === 'extra' :
  activeTab === 'favorites' ? favorites.includes(flower.id) :
  true;

  const isMainSection = flower.section !== "extra";

  return matchesSearch && matchesTab && isMainSection;

  });

  //função para favoritar produtos
  const toggleFavorite = (id) => {

      const flower = flowersData.find((g) => g.id === id);
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

    const cardsPerPage = 5;

    const visibleFlowers = filtredFlowers.slice(
      page * cardsPerPage,
      (page + 1) * cardsPerPage
    );

    //função para o cardsExtra só puxar cards com section=extra
    const extraFlowers = flowersData.filter(item => {

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.flowers.some(f =>
        f.toLowerCase().includes(search.toLowerCase())
      ) ||
      item.colors.some(c =>
        c.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      item.category === (
        activeTab === "currentEvent" ? "event" :
        activeTab === "bouquets" ? "bouquet" :
        activeTab === "extras" ? "extra" :
        ""
      );

    return (
      item.section === "extra" &&
      matchesCategory &&
      matchesSearch
    );
  });

    

    const extraCardsPerPage = 4;

    const visibleExtraFlowers = extraFlowers.slice(
      extraPage * extraCardsPerPage,
      (extraPage + 1) * extraCardsPerPage
    );

    console.log(
  "ABA:",
  activeTab,
  visibleExtraFlowers.map(f => ({
    id: f.id,
    title: f.title,
    category: f.category,
    section: f.section
  }))
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

   const flower = flowersData.find((g) => g.id === id);
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
  const flower = flowersData.find(f => f.id === item.id);

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
            images={carouselImages[activeTab] || carouselImages.currentEvent}
          />
        

        <div className="lirium-content">

          <div className='section-header'>
            
            <div className='title-wrapper'>
             {activeTab !== "cart" && (
              <Flower/>
             )}

            <h2 className="section-title">
              {activeTab === 'currentEvent' && 'PARA SE APAIXONAR'}
              {activeTab === 'bouquets' && 'BUQUÊS'}
              {activeTab === 'extras' && 'EXTRAS'}
              {/* {activeTab === 'combos' && 'COMBOS'} */}
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
                price={totalPrice}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                removeFromCart={removeFromCart}
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
                ))
              ) : (
                <p className='search-error'>
                  {activeTab === 'currentEvent' && 'Não encontramos itens de evento seguindo esses critérios'}
                  {activeTab === 'bouquets' && 'Não encontramos arranjos de flores seguindo esses critérios'}
                  {activeTab === 'extras' && 'Não encontramos arranjos extras seguindo esses critérios'}
                  {activeTab === 'aboutUs' && 'Sobre os desenvolvedores'}
                </p>
              )}
            </div>

          )}

          </div>
            
            {activeTab !== "cart" && activeTab !== "favorites" && (
            <div className="section-in-between">
              
              <h1>
                {activeTab === 'currentEvent' && 'O AMOR FLORESCE NOS DETALHES'}
                {activeTab === 'bouquets' && 'POR QUE ESCOLHER A LIRIUM?'}
                {activeTab === 'extras' && 'Complete seu presente com um toque extra'}
                {/* {activeTab === 'combos' && 'Combinações pensadas para impressionar'} */}
                {activeTab === 'favorites' && 'Seus favoritos reunidos em um só lugar'}
                {activeTab === 'aboutUs' && 'Conheça a história da Lirium'}
              </h1>

              <p>
                {activeTab === 'currentEvent' && 'O amor merece ser celebrado de forma especial. Nossa coleção de Dia dos Namorados reúne buquês e arranjos cuidadosamente selecionados para transformar sentimentos em gestos inesquecíveis e tornar cada momento ainda mais romântico.'}
                {activeTab === 'bouquets' && 'Na Lirium, cada arranjo é pensado para transformar sentimentos em momentos inesquecíveis. Com flores selecionadas e composições únicas, ajudamos você a demonstrar carinho, amor e gratidão de forma especial.'}
                {activeTab === 'extras' && 'Pelúcias, chocolates e muito mais para complementar seu presente.'}
                {/* {activeTab === 'combos' && 'Presentes completos para surpreender quem você ama.'} */}
                {activeTab === 'favorites' && 'Os produtos que você marcou para não esquecer.'}
                {activeTab === 'aboutUs' && 'Paixão por flores, carinho em cada entrega.'}
              </p>

            </div>
            )}
          
          <div className="lirium-content">

          <div className="section-header second-section">

            <div className="title-wrapper">
              {activeTab !== "cart" && activeTab !== "favorites" && (
                <Flower />
              )}

              <h2 className="section-title">
                  {activeTab === 'currentEvent' && 'AMOR EM VASOS'}
                  {activeTab === 'bouquets' && 'OUTROS ARRANJOS'}
                  {activeTab === 'extras' && 'COMBINE COM ESTES EXTRAS'}
                  {/* {activeTab === 'combos' && 'OUTROS COMBOS'} */}
                  {/* {activeTab === 'favorites' && 'VOCÊ TAMBÉM PODE GOSTAR'} */}
                  {activeTab === 'aboutUs' && 'CONHEÇA MAIS'}
              </h2>
            </div>

            {activeTab !== "cart" && activeTab !== "favorites" &&  (
              <div className='arrows'>
                <CircleArrowLeft
                  size={28}
                  className="icon-btn"
                  onClick={() => setExtraPage(Math.max(extraPage - 1, 0))}
                />

                <CircleArrowRight
                  size={28}
                  className="icon-btn"
                  onClick={() => {
                    const maxPage =
                      Math.ceil(extraFlowers.length / extraCardsPerPage) - 1;

                    setExtraPage(Math.min(extraPage + 1, maxPage));
                  }}
                />
              </div>
            )}

          </div>

          </div>

          <div className="second-cards-container">
            {visibleExtraFlowers.map((g) => (
              <ExtraCards
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
             ))}
          </div>
              
          </div>

          </div>


      <CardsModal
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
