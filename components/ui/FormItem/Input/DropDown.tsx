import React, { FC } from 'react';
import '../style.css'

interface Props {
    index?: number;
    id?: string;
    name?: string;
    valueArray: string[];
    placeholder?: string;
    value?: string;
    error?: string[];
    onChange?(e: any): void;
    onChangeMultiData?(index: any, e: any): void;
}

const DropDown: FC<Props> = (props) => {
    const { index, id, name, valueArray, value, onChange, placeholder, error, onChangeMultiData } = props

    return (
        <>
            <div className={error && error.length > 0 ? 'dropdown__custom error' : 'dropdown__custom'}>
                <select name={name} id={id} onChange={onChangeMultiData ? (event: any) => onChangeMultiData(index, event) : onChange} value={value}>
                    <option value="">{placeholder}</option>
                    {
                        valueArray.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }

                </select>

            </div>
            {
                error && error.length > 0
                    ?
                    <ul>
                        {
                            error.map((item, index) => {
                                return <li key={index}><p className='error-input'>{item}</p></li>
                            })
                        }
                    </ul>
                    :
                    <></>
            }
        </>
    );
};

export default DropDown;