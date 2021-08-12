import react, {useEffect} from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getProductsList } from '../../actions/productsActions';
import './Card.scss';

const Card = ({rowCard}) => {
    const {
        title, supplier, tax, price_real, image, thumbnail,
        description, units_sf, slug, category, subcategory,
        net_content, sellos
    } = rowCard;
   
    const [showButton, setShowButton] = useState(false);

    const validateTitleLength = title => {
        if (!!title) {
            return title.length > 19 ? `${title.substring(0,19)}...` : title;
        }
        return null;
    }

    return (
        <div id="content-card" className="card-content" 
            onMouseEnter={() => {setShowButton(true)}} onMouseLeave={() => {setShowButton(false)}}>
            <div id="body-card" className="card-body">
                <div className="d-flex card-header">
                    <img id="image" className="card-image"
                        src={image}
                        onClick={() => { console.log('abrir imagencita')}} > 
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
                    <div className="text-name">{validateTitleLength(title)}</div>
                    <div className="text-price-card d-flex">
                        <div className="span-price-symbol">$</div>{price_real}
                        <div className="span-price-utits">&nbsp; {`${units_sf} x unids`}</div></div>
                </div>
            </div>
            {
                showButton ? 
                    <button className="button-add" onClick={() => {console.log('agrega ese puto bb')}}>Agregar al carrito</button>
                : null
            }
        </div>
        


    );
}

export default Card;