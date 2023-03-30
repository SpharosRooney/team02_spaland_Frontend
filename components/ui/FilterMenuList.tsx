import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react'
import { filterDataType, MenuDatas, MenuDataType } from './filterTypes'

export default function FilterMenuList(props: { data: MenuDataType[], filter: filterDataType[], setFilter: Dispatch<SetStateAction<filterDataType[]>> }) {
    
    const router = useRouter();

    const handleAddQuery = (item:MenuDataType) => {
        console.log(item);
        props.setFilter([
            ...props.filter,
            {
                id: item.id,
                key: item.key,
                value: item.name,
                isCheck: true
            }
        ])
    }
    
    return (
        <div className="header-sub">
            <nav>
                <ul>
                    {props.data && props.data.map((item: MenuDataType) => (
                        <li
                            key={item.id}
                            onClick={() => {handleAddQuery(item)}}
                            // className={item.name === name ? "active" : ""}
                        >
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
