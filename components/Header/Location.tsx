
import React, { FC } from 'react';
import { AiOutlineSafety, AiOutlineShopping, AiOutlineSmile } from 'react-icons/ai';
import style from '../../styles/Location.module.css'

const Location: FC = () => {


    return (
        <section className={style.location}>
            <div className={style.location__map}>
            </div>
            <div className={style.location__icon}>
                <ul>
                    <li>
                        <AiOutlineShopping />
                        <p>Her Gün Aynı Gün Teslimat</p>
                    </li>
                    <li>
                        <AiOutlineSafety />
                        <p>Güvenli Alışveriş</p>
                    </li>
                    <li>
                        <AiOutlineSmile />
                        <p>%100 Müşteri Memnuniyeti</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Location;