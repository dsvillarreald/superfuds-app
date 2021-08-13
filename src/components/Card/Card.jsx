import react, {useEffect} from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { setProductCar } from '../../actions/productsActions';
import './Card.scss';

const Card = ({rowCard}) => {
    const {
        title, price_real, image, units_sf,
        net_content, sellos } = rowCard;

    const dispatch = useDispatch();
   
    const [showButton, setShowButton] = useState(false);

    const sendProduct = () => {
        dispatch(setProductCar(rowCard));
    }

    return (
        <div id="content-card" className="card-content" 
            onMouseEnter={() => {setShowButton(true)}} onMouseLeave={() => {setShowButton(false)}}>
            <div id="body-card" className="card-body">
                <div className="d-flex card-header">
                    <img id="image" className="card-image"
                        src={image}> 
                    </img>
                    <div id="options" className="card-options">
                        { !(!!sellos) || sellos === [] ? null :
                            sellos.map(element => (
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    type="info"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            <div className="text-tool">
                                                <div className="text-title-tool">Producto</div>
                                                <div className="text-body-tool">{element['name']}</div>
                                            </div>
                                        </Tooltip>
                                    }>
                                        <img
                                        className="card-icon"
                                        data-tip data-for="stampTooltip"
                                        src={element['image']}
                                        >
                                        </img>
                                </OverlayTrigger>
                            ))
                        }           
                    </div>
                </div>
                <div id="footer">
                    <div className="d-flex text-footer-card" >
                        <div className="text-title">Superfuds</div>
                        <div className="card-gramer" id="gramer">{net_content}</div>
                    </div>
                    <div className="text-name">{global.validateTitleLength(title)}</div>
                    <div className="text-price-card d-flex">
                        <div className="span-price-symbol">$</div>{global.formatPrice(price_real)}
                        <div className="span-price-utits">&nbsp; {`${units_sf} x unids`}</div>
                    </div>
                </div>
            </div>
            {
                showButton ? 
                    <button className="button-add" onClick={() => {sendProduct()}}>Agregar al carrito</button>
                : null
            }
        </div>
        


    );
}

export default Card;