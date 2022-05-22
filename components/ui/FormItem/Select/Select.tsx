import React, { FC, useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { useClickOutside } from '../../../../../application/hooks/useClickOutside';
import '../style.css'


interface Props {
    id?: string;
    className?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?(e: any): void;
    data: string[];
}


const Select: FC<Props> = (props: Props) => {

    const { id, className, name, placeholder, value, onChange, data} = props;
    const [v, setV] = useState(value);
    const [open, setOpen] = useState(false);




    const domNode = useClickOutside(() => {
        setOpen(false)
    });

    const onClick = (e: any) => {
        setOpen(true)
    }

    const onClickItem = (e: any) => {
        setV(e.target.getAttribute('data-value'));
        console.log(e.target.getAttribute('data-value'));
        setOpen(false)
    }


    return (
        <div className='select__custom' style={open ? { borderColor: '#bd2594' } : {}}>

            <div className="select__custom__input">

                {/* <div className="select__custom__item">Izmir</div> */}

                <input
                    type="text"
                    id={id}
                    className={className}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                />
                <AiOutlineCaretDown />

            </div>


            <div ref={domNode} className="select__custom__dropdown" style={open ? { display: 'block' } : { display: 'none' }} >
                <div className="select__custom__dropdown__content" >
                    
                    {
                        data.map((item, index) =>{
                            return <div key={index} className="select__custom__dropdown__item" data-value={item} onClick={onClickItem}>
                            {item}
                        </div>
                        })
                    }
                    
                    
                </div>
            </div>


        </div>
    );
};

export default Select;