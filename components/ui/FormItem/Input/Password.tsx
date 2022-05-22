import React, { FC, useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';

import style from '../../../../styles/Password.module.css'

interface Props {
    id?: string;
    className?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    error: string[];
    onChange?(e: any): void;
}



const Password: FC<Props> = (props) => {
    const { id, className, name, placeholder, value,  error, onChange } = props;

    const [openEye, setOpenEye] = useState(false);


    const eyeHandler = () => {
        if (openEye) {
            setOpenEye(false)
        } else {
            setOpenEye(true)
        }
    }

    return (
        <>
            <div className={error && error.length > 0 ? `${style.password__custom} ${style.error}` : `${style.password__custom}`}>
                <RiLockPasswordLine />
                {
                    openEye
                        ?
                        <input
                            type="text"
                            {...props}
                        />
                        :
                        <input
                            type="password"
                            {...props}
                        />
                }
                <div className={style.pass__eyes} onClick={eyeHandler}>
                    {
                        openEye
                            ?
                            <FaEyeSlash />
                            :
                            <IoEyeSharp />
                    }


                </div>
            </div>
            {
                error
                    ?
                    error.length > 0
                        ?
                        <ul>
                            {
                                error.map((item, index) => {
                                    return <li key={index}><p className={style.error_input}>{item}</p></li>
                                })
                            }
                        </ul>
                        :
                        <></>
                    :
                    <></>
            }
        </>
    );
};

export default Password;