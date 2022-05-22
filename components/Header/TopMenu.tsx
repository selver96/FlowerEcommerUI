import Link from 'next/link';
import React, { FC, useState } from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

import style from '../../styles/TopMenu.module.css'
import { API_MEDIA_URL } from '../../api';

interface Props {

}


const TopMenu: FC<Props> = () => {
    const [open, setOpen] = useState(false);
    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        <>
            <section className={style.top__menu}>
                <div className={style.top__menu__col__logo}>
                    <Link href="/">
                        <div className={style.logo}>
                            <img src={API_MEDIA_URL+'front_images/logo.png'} alt="" />
                            <p className={style.logoBrand}>Monalisa</p>
                        </div>
                    </Link>
                </div>
                <div className={style.top__menu__col__search}>
                    <div className={style.top__menu__search}>
                        <input
                            type="text"
                            placeholder="Ne aramıştınız?"
                        />
                        <div className={style.search__btn}>
                            <AiOutlineSearch />
                        </div>

                    </div>
                </div>
                <div className={style.top__menu__col__nav}>
                    {
                        isAuth
                            ?
                            <div className={style.top__menu__private__row}>
                                <div className={style.top__menu__co}>
                                    <Link href="/profile/favorite" className={style.top__menu__item} ><div className={style.top__menu__item}><AiOutlineHeart /><p>Favorilerim</p></div></Link>
                                </div>
                                <div className={style.top__menu__col}>
                                    <Link href="/basket" className={style.top__menu__item} ><div className={style.top__menu__item}><AiOutlineShopping /><p>Sepet</p></div></Link>
                                </div>
                                <div className={style.top__menu__col}>
                                    <Link href="/profile/profile-info" className={style.top__menu__item}><div className={style.top__menu__item}><AiOutlineUser /><p>Hesabım</p></div></Link>
                                </div>
                            </div>
                            :
                            <div className={style.top__menu__public__row}>
                                <div className={style.top__menu__col}>
                                    <Link href="/basket" ><div className={style.top__menu__item}><AiOutlineShopping /><p>Sepet</p></div></Link>
                                </div>
                                <div className={style.top__menu__col}>
                                    <Link href='/login'  >
                                        <div className={style.top__menu__item} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                                            <AiOutlineUser /><p>Üyelik</p>
                                            <div className={style.down__up__icon}>
                                                {
                                                    open
                                                        ?
                                                        <IoChevronUpOutline />
                                                        :
                                                        <IoChevronDownOutline />

                                                }
                                            </div>
                                            <div style={open ? { display: 'block' } : { display: 'none' }}>
                                                <div className={style.icon__user}>
                                                    <IoChevronUpOutline />
                                                </div>
                                                <div className={style.user__box} >
                                                    <ul>
                                                        <li><Link href="/login">Üye Giriş</Link></li>
                                                        <li><Link href="/registration">Üye Ol</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                    }
                </div>
            </section>
        </>
    );
};

export default TopMenu;