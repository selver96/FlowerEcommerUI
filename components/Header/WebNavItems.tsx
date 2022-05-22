import Link from 'next/link';
import React, { FC } from 'react';
import { ICategory } from '../../models/ICategory';

interface Props {
    id: number;
    item: ICategory;
    isActive: boolean;
    selectedItemId(id: number): void;
    
}

const WebNavItems: FC<Props> = (props) => {
    const { id, item, isActive, selectedItemId } = props;

    const selectItemId = () => {
        selectedItemId(id)
    }

    return (
        <Link href={"category" + item.url}>
            <div className={isActive ? 'web_mav_item nav_active' : 'web_mav_item'} onMouseEnter={selectItemId}>
                <p>{item.name}</p>
            </div>
        </Link>
    );
};

export default WebNavItems;