import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { Moment } from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../application/hooks/useTypedSelector';
import { IBasketAddProduct } from '../../../application/models/IBasket';
import { IProductDetail } from '../../../application/models/IProduct';
import { BasketProductActionCreators } from '../../../application/redux/reducers/basket/action-creators';
import { ProductActionCreators } from '../../../application/redux/reducers/product/action-creators';
import LocationSelect from '../Header/LocationSelect';
import DatePicker from './DatePicker';

interface Props {
    product: IProductDetail;
}

const DetailActionTable: FC<Props> = (props) => {
    const { product } = props;
    const dispatch = useDispatch();
    const location = useLocation();
    const nav = useNavigate();
    const [time, setTime] = useState<any>();
    const [date, setDate] = useState<any>();
    const [selectedFavorite, setSelectedFavorite] = useState(false);
    const [starValue, setStarValue] = useState<number>(product.ratting);
    const [star, setStar] = useState(false);
    const { isAuth } = useTypedSelector(state => state.auth);
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


    const setStars = (value: any) => {
        if (!star) {
            if (isAuth) {
                setStarValue(value)
                setStar(true)
                dispatch(ProductActionCreators.setProductStar(value, product.id));
            } else {
                nav("/login")
            }

        }
    }

    const addDate = (value: Moment) => {
        setDate(value.format('YYYY-MM-DD'));
    }

    const addTime = (value: any) => {
        setTime(value);
    }

    const addBasketProduct = () => {
        if (isAuth) {
            if(date && time && time != 'Saat Seçiniz'){
                const data: IBasketAddProduct = {
                    product_id: product.id,
                    send_date: date,
                    send_time: time,
                }
                console.log(data)
                dispatch(BasketProductActionCreators.addBasketProduct(data));
            }else{
                alert("Set Date and Time");
            }
        } else {
            nav("/login")
        }

    }

    return (
        <section className="detail-product-action-table">
            <div className="action-table-header">
                <h1 className="action-table-title">{product.title}</h1>
                <div className="price-rating-detail">
                    {
                        product.discount
                            ?
                            <div className="price-detail">
                                <div className="discount-box"><p className="discount-box-content">%{product.discount}</p></div>
                                <div className="price-box">
                                    <p className="price-box-real-price">{product.price} TL</p>
                                    <p className="price-box-discount-price">{(product.price - ((product.discount / 100) * product.price)).toFixed(2)} TL</p>
                                </div>
                            </div>
                            :
                            <div className="price-detail"><p className="price-box-discount-price">{product.price} TL</p></div>

                    }

                    <div className="rating"><Rate tooltips={desc} onChange={setStars} value={product.ratting} /></div>
                </div>
            </div>
            <div className="action-table-loc-date">
                <LocationSelect />
                <DatePicker addTime={addTime} addDate={addDate} />
            </div>
            <div className="action-table-btn">
                <button className="btn-buy" onClick={addBasketProduct}><p>Sipariş Ver</p></button>
                <div onClick={() => setSelectedFavorite(!selectedFavorite)}>
                    {
                        selectedFavorite
                            ?
                            <div className="detail-favorite-icon">
                                <HeartFilled />
                            </div>
                            :
                            <div className="detail-favorite-icon">
                                <HeartOutlined />
                            </div>

                    }
                </div>
            </div>
        </section>
    );
};

export default DetailActionTable;