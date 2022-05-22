import React, { FC } from 'react';
import '../style.css'

interface Props {
    index?: number;
    icon?: React.ReactNode;
    fields: {
        id?: string;
        className?: string;
        name?: string;
        placeholder?: string;
        value?: string;
    }
    error?: string[];
    onChange?(e: any): void;
    onChangeMultiData?(index: any, e: any): void;

}
const TextArea: FC<Props> = (props: Props) => {

    const { index, icon, fields, error, onChange, onChangeMultiData } = props;

    return (
        <>
            <div className={error && error.length > 0 ? 'textarea__custom error' : 'textarea__custom'}>
                {icon}
                {
                    onChangeMultiData ?
                        <textarea
                            {...fields}
                            onChange={(event: any) => onChangeMultiData(index, event)}
                        />
                        :
                        <textarea
                            {...fields}
                            onChange={onChange}
                        />
                }
            </div>
            {
                error
                    ?
                    error.length > 0
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
                    :
                    <></>
            }
        </>
    );
};

export default TextArea;