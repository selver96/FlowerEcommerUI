import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGifts } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdFollowTheSigns } from 'react-icons/md';
import Input from '../ui/FormItem/Input/Input';
import Password from '../ui/FormItem/Input/Password';
import { useInput } from '../../hooks/useInput';
import style from '../../styles/RegForm.module.css'
import { API_MEDIA_URL } from '../../api';

const RegForm = () => {
    const nameSurname = useInput('');
    const email = useInput('');
    const password = useInput('');



    const submit = (e: any) => {
        e.preventDefault()
        console.log(nameSurname)
    }

    return (
        <section className={style.registration}>
            <div className={style.reg__title}>
                <h1>Yeni Üyelik</h1>
            </div>
            <div className={style.reg__content}>
                <div className={style.reg__content__left}>
                    <form className={style.reg__form}  onSubmit={submit}>

                        <div className={style.reg__form__item}>

                            <Input
                                icon={<IoPersonOutline />}
                                fields={{
                                    type: "text",
                                    id: 'surname',
                                    name: 'surname',
                                    placeholder: 'Adınız Soyadınız',
                                    ...nameSurname
                                }}
                            />
                        </div>

                        <div className={style.reg__form__item}>

                            <Input
                                icon={<AiOutlineMail />}
                                fields={{
                                    type: "email",
                                    id: 'email',
                                    name: 'email',
                                    placeholder: 'E-posta',
                                    ...email
                                }}
                            />
                        </div>

                        <div className={style.reg__form__item}>

                            <Password
                                placeholder='Şifre'
                                {...password}
                            />

                        </div>

                        <input
                            type="submit"
                            id={style.submit}
                            name='submit'
                            value='Üye Ol'
                        />
                        <div className={style.reg__form__item__checkbox}>
                            <input type="checkbox" id="checkbox1" /> <label htmlFor="checkbox1" className={style.label}>Çiçeksepeti.com tarafından tarafıma ticari elektronik ileti gönderilmesine izin veriyorum.</label>
                        </div>
                        <div className={style.reg__form__item__checkbox}>
                            <input type="checkbox" id="checkbox2" /> <label htmlFor="checkbox2" className={style.label}>Üyelik Sözleşmesi 'ni ve Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni 'ni okudum, onaylıyorum.*</label>
                        </div>
                    </form>
                </div>
                <div className={style.reg__content__right}>

                    <h1>Neden Üye Olmalıyım?</h1>
                    <div className={style.reg__right__content}>
                        <div className={style.reg__right__content__list}>
                            <ul>
                                <li><MdFollowTheSigns /> <p>Kolay Sipariş Takibi</p></li>
                                <li><FaGifts /> <p>Hediye Çeki Fırsatları</p></li>
                                <li><RiCustomerService2Fill /> <p>Hatırlatma Servisi</p></li>
                            </ul>
                            <h2>Ve daha fazlası için üye ol</h2>
                        </div>
                        <div className={style.reg__right__content__img}>
                            <img src={API_MEDIA_URL+'front_images/reg__logo.png'} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RegForm;