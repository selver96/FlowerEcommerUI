import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import WebNavItems from './WebNavItems';
import WebNavBody from './WebNavBody';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ISubCategories } from '../../models/ICategory';

interface Props {
    fix: boolean;
}

const WebNav: FC<Props> = (props) => {
    const { fix } = props;
    const [isActive, setIsActive] = useState(false);
    const [isOnlySub, setIsOnlySub] = useState(false);
    const [selectedId, setSelectedId] = useState<number>();
    const [subCategory, setSubCategory] = useState<ISubCategories[]>([]);
    const { category } = useTypedSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    useEffect(() => {
        let items: ISubCategories[] = []
        category.forEach((item) => {
            if (item.id == selectedId) {
                items = item.subcategories
                setIsOnlySub(item.only_subcategories)
            }
        })
        setSubCategory(items);

    }, [selectedId]);

    const openBody = (is: boolean) => {
        setIsActive(is);
    }

    const selectedItemId = (id: number) => {
        setSelectedId(id);
        setIsActive(true);
    }

    return (
        <div  className={fix ? "web_nav web_nav_fixed" : 'web_nav'}>
            {
                fix
                    ?
                    <div className="web_nav_logo">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
                    </div>
                    : <></>
            }

            <div onMouseLeave={()=>setIsActive(false)} className='web_mav_items'>
                {
                    category.map((item, index) => {
                        if (item.id == selectedId) {
                            return <WebNavItems
                                key={index}
                                id={Number(item.id)}
                                item={item}
                                isActive={isActive}
                                selectedItemId={selectedItemId}
                            />
                        } else {
                            return <WebNavItems
                                key={index}
                                id={Number(item.id)}
                                item={item}
                                isActive={false}
                                selectedItemId={selectedItemId}
                            />
                        }

                    })
                }
                {
                    isActive && subCategory?.length > 0
                        ?
                        <WebNavBody
                            items={subCategory}
                            openBody={openBody}
                            isOnlySub={isOnlySub}
                        />
                        :
                        <></>
                }

            </div>
        </div>

    );
};

export default WebNav;