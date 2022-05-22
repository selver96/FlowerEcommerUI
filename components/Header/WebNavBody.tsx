import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { ISubCategories, ISubPlusCategories } from '../../models/ICategory';
import WebNavBodyItem from './WebNavBodyItem';

interface Props {
    items: ISubCategories[];
    isOnlySub: boolean;
    openBody(is: boolean): void;
}

const WebNavBody: FC<Props> = (props) => {
    const { items, isOnlySub, openBody } = props;
    const [selectedId, setSelectedId] = useState<number>();
    const [isActive, setIsActive] = useState(false);
    const [subCategory, setSubCategory] = useState<ISubPlusCategories[]>([]);

    const selectedItemId = (id: number) => {
        setSelectedId(id);
        setIsActive(true);
    }
    useEffect(() => {
        let item_: ISubPlusCategories[] = []
        items.forEach((item) => {
            if (item.id == selectedId) {
                item_ = item.subcategories
            }
        })
        setSubCategory(item_);

    }, [selectedId]);

    return (
        <div className="nav_body" onMouseEnter={() => openBody(true)} onMouseLeave={() => openBody(false)}>
            {
                isOnlySub
                    ?
                    <div className="nav_body_items_only">
                        {
                            items.map((item, index) => {
                                return <div className="nav_body_item_only" key={index}><p>{item.name}</p></div>
                            })
                        }
                    </div>
                    :
                    <div className="nav_body_content">
                        <div className="nav_body_items">
                            {
                                items.map((item, index) => {
                                    if (item.id == selectedId) {
                                        return <WebNavBodyItem
                                            key={index}
                                            item={item}
                                            isActive={isActive}
                                            selectedItemId={selectedItemId}
                                        />
                                    } else {
                                        return <WebNavBodyItem
                                            key={index}
                                            item={item}
                                            isActive={false}
                                            selectedItemId={selectedItemId}
                                        />
                                    }
                                })
                            }

                        </div>
                        <div className="submenu_content">
                            {
                                subCategory.map((item, index) => {
                                    return <Link href={"category" + item.url} key={index}>
                                        <div className='submenu_content_link'>
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
            }


        </div>
    );
};

export default WebNavBody;