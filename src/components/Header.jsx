import './Header.css';

import { MapPin } from 'lucide-react';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { Handbag } from 'lucide-react';

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

                        <div className="icon-btn">
                            <User size={22} fill='none' stroke='#3A5A40' />
                        </div>
                        <div className="icon-btn">
                            <Handbag size={22} fill='none' stroke='#3A5A40' />
                        </div>

                    </div>
                </div>

            </div>

            <div className="navbar">
                <nav>
                    <div className={`nav-item ${activeTab === 'currentEvent' ? 'active' : ''}`} onClick={() => setActiveTab('currentEvent')}>DIA DOS NAMORADOS</div>
                    <div className={`nav-item ${activeTab === 'bouquets' ? 'active' : ''}`} onClick={() => setActiveTab('bouquets')}>ARRANJOS</div>
                    <div className={`nav-item ${activeTab === 'extras' ? 'active' : ''}`} onClick={() => setActiveTab('extras')}>EXTRAS</div>
                    <div className={`nav-item ${activeTab === 'combos' ? 'active' : ''}`} onClick={() => setActiveTab('combos')}>COMBOS</div>
                    <div className={`nav-item ${activeTab === 'aboutUs' ? 'active' : ''}`} onClick={() => setActiveTab('aboutUs')}>SOBRE NÓS</div>
                </nav>
            </div>

        </header>

    )
}