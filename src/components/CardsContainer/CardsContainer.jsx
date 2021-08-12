import react, {useEffect} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../actions/productsActions';
import Card from '../Card/Card';
import './CardsContainer.scss';

const CardsContainer = () => {

    const dispatch = useDispatch();

    const [productsList, setProductsList] = useState([]);

    const products = useSelector(state => state.products.productsList);

    useEffect(() => {
        const getProducts = () => dispatch(getProductsList());
        getProducts();
    }, []);
    
    useEffect(() => {
        if(products !== []) {
            setProductsList(products);
        }
    }, [products]);

    const scrollLeft = () => {

        document.getElementById('carousel').scrollLeft -= 30;
    }

    const scrollRight = () => {
        document.getElementById('carousel').scrollLeft += 30;
    }
    
    return (
        <div className="d-flex justify-content-between w-100 p-3">
            <div id="btn1" className="button-div-carousel">
                <div className="button-icon-arrow-left" onClick={() => {scrollLeft()}}></div>
            </div>
            <div id="carousel" className="d-flex carousel-content">
            {
                productsList !== [] ? 
                    productsList.map(row => (
                        <div id="element-card" className="unit-card">
                            <Card key={row.id} rowCard={row} />
                        </div>
                    ))
                 : null
            }
            </div>
            <div id="btn2" className="button-div-carousel">
                <div className="button-icon-arrow-right" onClick={() => {scrollRight()}}></div>
            </div>
        </div>
    );
}

export default CardsContainer;