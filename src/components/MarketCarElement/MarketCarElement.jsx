import react from 'react';
import './MarketCarElement.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { updateProductCar, removeProductCar } from '../../actions/productsActions';

function MarketCarElement({rowProduct, list}) {

    const {
        title, price_real, image, units_sf,
        net_content, amount_of_prod } = rowProduct;
    
    const [amount, setAmount] = useState(!!amount_of_prod ? amount_of_prod : 1);

    const dispatch = useDispatch();

    useEffect(() => {
        const updateSpecific = () => {
            list.find(element => element.id === rowProduct.id)['amount_of_prod'] = amount;
            dispatch(updateProductCar(list));
        }
        updateSpecific();
    }, [amount, setAmount]);
    
    return (
                <tr>
                    <td className="col-sm-4">
                        <div className="d-flex">
                            <img className="market-car-image"
                            src={image}></img>
                            <div className="text-car-market">
                                <div>{global.validateTitleLength(title)}</div>
                                <div className="gramer-market">{`x ${units_sf} - ${net_content} c/u`}</div>
                                <div className="text-title">Superfuds</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-start align-content-center justify-content-around padding-buttons-tab">
                            <div>
                                <div className={amount === 1 ? 'button-icon-less-gray' : 'button-icon-less-green'} 
                                    onClick={() => setAmount( amount === 1 ? amount : amount - 1)}>&nbsp;</div>
                            </div>
                            <div>{amount}</div>
                            <div className="d-flex align-items-center">
                                <div className="button-icon-plus-green" onClick={() => setAmount( amount + 1)}>&nbsp;</div>
                            </div>
                        </div>
                    </td>
                    <td id="price">
                    <div className="text-price-card d-flex">
                        <div className="span-price-symbol">$</div>{global.formatPrice(price_real)}
                    </div>
                    </td>
                    <td className="col-sm">
                        <div className="w-100 h-100 d-flex align-content-center justify-content-center">
                            <div className="button-icon-trash"
                            onClick={() => dispatch(removeProductCar(rowProduct))}></div>
                        </div>
                       
                    </td>
                </tr>
    );
}

export default MarketCarElement;