import react,  {useEffect} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MarketCarElement from '../MarketCarElement/MarketCarElement';
import { Modal } from 'react-bootstrap';
import './Header.scss';

function Header() {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [productsInCar, setProductsInCar] = useState([]);

    const productsCar = useSelector(state => state.products.productsInCart );

    useEffect(() => {
        if(productsCar !== []) {
            setProductsInCar(productsCar);
        }
    }, [productsCar]);
    
    const marketCar = () => {
        return (
        <Modal show={showModal} centered onHide={!showModal} dialogClassName="my-modal">
            <Modal.Body>
                <div className="modal-body">
                    <div className="w-100 d-flex cursor-pointier" onClick={() => {setShowModal(!showModal)}}>
                        <div className="back-arrow-modal"></div>
                        <div>&nbsp; Volver a la tienda</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="market-car-title">Carrito de Compras</div>
                        <div className="d-flex align-self-center">
                            <div className="color-green weight-700">{productsInCar.length} &nbsp;</div>
                            <div className="color-grey weight-700">items</div>
                        </div>
                    </div>
                    <div className="w-100 mh-100 scroll-products">
                    {
                        productsInCar.length > 0 ?
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col" id="first">Item</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        productsInCar.map(product => (
                                            <MarketCarElement key={product.id} rowProduct={product} list={productsInCar} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        : 
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            <div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="oops-image"></div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="empty-message">Tu carro está vacío</div>
                                </div>
                            </div>
                            
                        </div>
                        
                    }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        );
    }

    return (
        <div className="w-100 header-style">
            <div className="superfuds-image"></div>
            <input id="input-header-search" className="input-search"
                type="text" placeholder="Busca marcas y productos..." />
            <div className="user-div">
                <div className="market-car" onClick={() => {setShowModal(!showModal)}}></div>
                <div className="d-flex">
                    <div className="user-name">
                        <div className="name-label">Saiby Alimentos</div>
                        <div className="d-flex">Mi perfil <div className="arrow-down"></div></div>
                    </div>
                    <div className="user-image"></div>
                </div>
            </div>
            {marketCar()}
        </div>
    );
}

export default Header;