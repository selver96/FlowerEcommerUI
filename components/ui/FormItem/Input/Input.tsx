import React, { FC } from 'react';
import style from '../../../../styles/Input.module.css'

interface Props {
    index?: number;
    icon?: React.ReactNode;
    fields: {
        id?: string;
        className?: string;
        name?: string;
        type: string;
        placeholder?: string;
        value?: string;

    };
    error?: string[];
    onChange?(e: any): void;
    onChangeMultiData?(index: any, e: any): void;
    isMust?: boolean;

}

const Input: FC<Props> = (props: Props) => {
    const { index, icon, fields, isMust, error, onChange, onChangeMultiData } = props;

    return (<>
        {
            isMust
                ?
                <div className={error && error.length > 0 ? `${style.input__custom} ${style.error}` : `${style.input__custom}`}>
                    {icon}
                    {
                        onChangeMultiData ?
                            <input
                                {...fields}
                                onChange={(event: any) => onChangeMultiData(index, event)}
                            />
                            :
                            <input
                                {...fields}
                                onChange={onChange}
                            />
                    }
                </div>
                :
                <div className={style.input__custom}>
                    {icon}
                    {
                        onChangeMultiData ?
                            <input
                                {...fields}
                                onChange={(event: any) => onChangeMultiData(index, event)}
                            />
                            :
                            <input
                                {...fields}
                                onChange={onChange}
                            />
                    }
                </div>
        }

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

export default Input;