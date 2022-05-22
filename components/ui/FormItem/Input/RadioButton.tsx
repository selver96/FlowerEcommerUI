import React, { FC } from 'react';
import '../style.css'


interface Props {
    id?: string;
    className?: string;
    name?: string;
    value?: string;
    checked?: boolean;
    onClick?(e: any): void;
}


const RadioButton: FC<Props> = (props) => {
    const { id, className, name, value, checked, onClick } = props

    return (
        <div className='checkbox__custom'>
            <input className="radio__button__input" type="radio" name="one-address" id='one-address' checked={checked} />
            <span className="radio__box"></span>
            <label className="radio__button__label" onClick={onClick}>
                {value}
            </label>
        </div>
    );
};

export default RadioButton;