import react, {useEffect} from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getProductsList } from '../../actions/productsActions';
import './Card.scss';

const Card = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsList());
    }, []);
   
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
                        src="https://superfuds-file.s3.us-west-2.amazonaws.com/product/7709683463753_5e552d1f49f3a.png"
                        onClick={() => { console.log('abrir imagencita')}} > 
                    </img>
                    <div id="options" className="card-options">
                        <OverlayTrigger
                            key="right"
                            placement="right"
                            type="info"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <div className="text-tool">
                                        <div className="text-title-tool">Producto</div>
                                        <div className="text-body-tool">Sin Azucar</div>
                                    </div>
                                </Tooltip>
                            }>
                                <img
                                className="card-icon"
                                data-tip data-for="stampTooltip"
                                src="https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group.png"
                                >
                                </img>
                        </OverlayTrigger>
                    </div>
                </div>
                <div id="footer">
                    <div className="d-flex text-footer-card" >
                        <div className="text-title">Superfuds</div>
                        <div className="card-gramer" id="gramer">30g</div>
                    </div>
                    <div className="text-name">{validateTitleLength('Bark Lök Chocolate 70% Mani-Almendra-Pistacho 85 g')}</div>
                    <div className="text-price-card d-flex">
                        <div className="span-price-symbol">$</div>8000
                        <div className="span-price-utits">&nbsp; {`1 x unids`}</div></div>
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