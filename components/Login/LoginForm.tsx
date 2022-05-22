import { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { useRouter } from 'next/router'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Password from '../ui/FormItem/Input/Password';
import Input from '../ui/FormItem/Input/Input';

import style from '../../styles/LoginForm.module.css'
import Link from 'next/link';
import { useInput } from '../../hooks/useInput';
import { inputValid } from '../../util/validations';

const LoginForm = () => {
    const router = useRouter();
    const { error, isAuth } = useTypedSelector(state => state.auth);
    const email = useInput('');
    const password = useInput('');

    useEffect(() => {
        if (isAuth) {
            router.push('/');
        }
    }, [])

    function validations(){
        const emailValid = inputValid(email.main.value);
        const passValid = inputValid(password.main.value);
        if(
            emailValid.length > 0 ||
            passValid.length > 0 
        ){
            email.setError(emailValid);
            password.setError(passValid);
            return false;
        }
        return true;
    }

    const login = (e: any) => {
        e.preventDefault()
        if(validations()){
            router.push('/');
        }
        
    };
    <section className='login'>

        <div className="login__content">
            <LoginForm />

        </div>
    </section>

    return (
        <section className={style.login} >
            <h1 className={style.login__title}>GİRİŞ</h1>
            <div className={style.login__content}>
                <form className={style.log__form} onSubmit={login}>
                    <div className={style.login_error_box} style={error ? { display: 'flex' } : { display: 'none' }}>
                        {error}
                    </div>
                    <div className={style.log__form__item}>
                        <Input
                            icon={<AiOutlineMail />}
                            fields={{
                                type: "email",
                                id: 'email',
                                name: 'email',
                                placeholder: 'E-posta',
                                value: email.main.value
                            }}
                            onChange={email.main.onChange}
                            error={email.main.error}
                            isMust={true}
                        />
                    </div>

                    <div className={style.log__form__item}>
                        <Password
                            placeholder='Şifre'
                            value={password.main.value}
                            onChange={password.main.onChange}
                            error={password.main.error}

                        />
                    </div>

                    <input
                        type="submit"
                        id={style.log__submit}
                        name='submit'
                        value='Uye Girişi'
                    />
                </form>
                <h1>ve ya</h1>
                <Link href="/registration">
                    <div className={style.to__reg__btn}>
                        <p>Üye Ol</p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default LoginForm;