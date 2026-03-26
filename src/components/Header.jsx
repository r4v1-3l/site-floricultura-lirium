import './Header.css';

import {MapPin} from 'lucide-react';
import {Search} from 'lucide-react';
import {User} from 'lucide-react';
import {Handbag} from 'lucide-react';

export function Header(){
    
    return(

        <header className="lirium-header">
            
            <div className="main-header">

                <div className="delivery-select">

                    <MapPin size={20} fill='none' stroke='#3A5A40'/>
                    <h4>Selecione o local da entrega</h4>

                    <select name="locations" id="locations">
                        <option value="cerquilho">CERQUILHO</option>
                        <option value="tatui">TATUÍ</option>
                        <option value="piracicaba">PIRACICABA</option>
                    </select>

                </div>

                <div className="logo">

                    <img src="../assets/img/logo.png" alt="lirium-logo" />
                    <h4>CERQUILHO - TATUÍ - PIRACICABA</h4>

                </div>

                <div className="dashboard">

                    <Search size={20} fill='none' stroke='#3A5A40'/>
                    <User size={20} fill='none' stroke='#3A5A40'/>
                    <Handbag size={20} fill='none' stroke='#3A5A40'/>

                </div>

            </div>

            <hr />

            <div className="navbar">
                <nav>
                    <div className="navbar-item">Dia dos Namorados</div>
                    <div className="navbar-item">Arranjos</div>
                    <div className="navbar-item">Arranjos Especiais</div>
                    <div className="navbar-item">Cartões</div>
                    <div className='navbar-item'>Doces</div>
                    <div className="navbar-item">Ocasiões Especiais</div>
                </nav>
            </div>
        </header>
        
    )
}