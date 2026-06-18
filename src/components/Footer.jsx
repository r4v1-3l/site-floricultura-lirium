import './Footer.css';

import { Link } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function Footer({ title, text, activeTab, setActiveTab }) {
    return (

        <footer className='lirium-footer'>

    <div className="footer-top">

        <div className="main-footer">

            <div className="footer-title">
                <h3>{title}</h3>
            </div>

            <div className="footer-text">
                <p>{text}</p>
            </div>

        </div>

        <div className="side-footer">

            <div className="footer-navbar">

                <h4>NAVEGUE</h4>

                <p
                    className={`nav-item ${activeTab === 'currentEvent' ? 'active' : ''}`}
                    onClick={() => setActiveTab('currentEvent')}
                >
                    DIA DOS NAMORADOS
                </p>

                <p
                    className={`nav-item ${activeTab === 'bouquets' ? 'active' : ''}`}
                    onClick={() => setActiveTab('bouquets')}
                >
                    ARRANJOS
                </p>

                <p
                    className={`nav-item ${activeTab === 'extras' ? 'active' : ''}`}
                    onClick={() => setActiveTab('extras')}
                >
                    EXTRAS
                </p>

                {/* <p
                    className={`nav-item ${activeTab === 'combos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('combos')}
                >
                    COMBOS
                </p> */}

                <p
                    className={`nav-item ${activeTab === 'aboutUs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('aboutUs')}
                >
                    SOBRE NÓS
                </p>

            </div>

            <div className="developers">

                <h4>NOS CONTATE</h4>

                <div className="developer">
                    <h5>Ravi</h5>
                        <div className="contacts">
                            <a href="#"><FaLinkedin/></a>
                            <a href="#"><FaGithub/></a>
                            <a href="#"><FaInstagram/></a>
                        </div>
                </div>

                <div className="developer">
                    <h5>Rafa</h5>
                        <div className="contacts">
                            <a href="#"><FaLinkedin/></a>
                            <a href="#"><FaGithub/></a>
                            <a href="#"><FaInstagram/></a>
                        </div>
                </div>

            </div>

        </div>

    </div>

    <div className="bottom-footer">
        <p>Copyright © 2025 Lirium. Todos os direitos reservados.</p>
    </div>

</footer>
    )
}