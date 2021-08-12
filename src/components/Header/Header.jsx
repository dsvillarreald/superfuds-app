import react from 'react';
import './Header.scss';

function Header() {

    return (
        <div className="w-100 header-style">
            <div className="superfuds-image"></div>
            <input id="input-header-search" className="input-search"
                type="text" placeholder="Busca marcas y productos..." />
            <div className="user-div">
                <div className="market-car"></div>
                <div className="d-flex">
                    <div className="user-name">
                        <div className="name-label">Saiby Alimentos</div>
                        <div className="d-flex">Mi perfil <div className="arrow-down"></div></div>
                    </div>
                    <div className="user-image"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;