import Link from 'next/link';
import React, { FC } from 'react';
import { GrFormNext } from 'react-icons/gr';
import { ISubCategories } from '../../models/ICategory';

interface Props {
    isActive: boolean;
    item: ISubCategories;
    selectedItemId(id: number): void;
}

const WebNavBodyItem: FC<Props> = (props) => {
    const { item, selectedItemId, isActive } = props;

    const selectItemId = () => {
        selectedItemId(Number(item.id))
    }

    return (
        <Link href={"category" + item.url}>
            <div className={isActive ? 'nav_body_item nav_body_active' : 'nav_body_item'} onMouseEnter={selectItemId}>
                <p>{item.name}</p><GrFormNext />
            </div>
        </Link>
    );
};

export default WebNavBodyItem;