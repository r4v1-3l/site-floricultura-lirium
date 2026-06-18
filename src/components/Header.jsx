import './Header.css';

import { Search, Heart, Handbag, User} from 'lucide-react';


import { Carousel } from './Carousel';

export function Header({ search, setSearch, openSearch, setOpenSearch, activeTab, setActiveTab }) {

    return (

        <header className="lirium-header">

            <div className="main-header">

                <div className='left-header'>
                    <div className="search-container">

                        <div className="icon-btn" onClick={() => setOpenSearch(!openSearch)}>
                            <Search
                                size={22}
                                className="search-icon"
                            />
                        </div>

                        <div className={`search-box ${openSearch ? "active" : ""}`}>
                            <input type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Pesquisar..." />
                        </div>

                    </div>
                </div>

                <div className="logo">
                    <div className="logo-box highlight">
                        <span className="logo-main">LIRIUM</span>
                        <span className="logo-divider"></span>
                        <span className="logo-sub">ARRANJOS FLORAIS</span>
                    </div>
                </div>

                <div className="right-header">
                    <div className="dashboard">

                        <div className={`icon-btn ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => setActiveTab('favorites')}>
                            <Heart size={activeTab === "favorites" ? 28 : 22} fill={activeTab === "favorites" ? "#3A5A40" : "none"} stroke='#3A5A40' />
                        </div>
                        <div className={`icon-btn ${activeTab === 'cart' ? 'active' : ''}`} onClick={() => setActiveTab('cart')}>
                            <Handbag size={activeTab === "cart" ? 28 : 22} fill={activeTab === "cart" ? "#3A5A40" : "none"} stroke='#3A5A40' />
                        </div>
                        <div className={`icon-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                            <User size={activeTab === "profile" ? 28 : 22} fill={activeTab === "profile" ? "#3A5A40" : "none"} stroke='#3A5A40' />
                        </div>

                    </div>
                </div>

            </div>

            <div className="navbar">
                <nav>
                    <div className={`nav-item ${activeTab === 'currentEvent' ? 'active' : ''}`} onClick={() => setActiveTab('currentEvent')}>DIA DOS NAMORADOS</div>
                    <div className={`nav-item ${activeTab === 'bouquets' ? 'active' : ''}`} onClick={() => setActiveTab('bouquets')}>ARRANJOS</div>
                    <div className={`nav-item ${activeTab === 'extras' ? 'active' : ''}`} onClick={() => setActiveTab('extras')}>EXTRAS</div>
                    {/* <div className={`nav-item ${activeTab === 'combos' ? 'active' : ''}`} onClick={() => setActiveTab('combos')}>COMBOS</div> */}
                    <div className={`nav-item ${activeTab === 'aboutUs' ? 'active' : ''}`} onClick={() => setActiveTab('aboutUs')}>SOBRE NÓS</div>
                </nav>
            </div>

        </header>

    )
}