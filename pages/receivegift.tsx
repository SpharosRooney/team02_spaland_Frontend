import Image from "next/image";
import React, { ChangeEvent, EventHandler, useEffect, useState } from "react";
import Link from "next/link";
import { headerNavMenus, headerIcons, categoryList } from "../datas/starbucksStaticDatas";
import { ProductListCardType } from "@/types/fetchDataType";
import Config from "@/configs/config.export";

export default function receivegift() {


    const [itemlist, setitemlist] = useState<ProductListCardType[]>();
    const { baseUrl } = Config();
    
    useEffect(() => {
        fetch(`${baseUrl}/v1/api/giftbox/1`)
            .then(res => res.json())
            .then(data => setitemlist(data))
    }, [])
    console.log('item',itemlist)

    return (
        <>
            <div className="header-top">
            </div>
            <div className='header-bottom'>
                <div className="header-bottom-subject">
                    <p>받은 선물함</p>
                </div>
            </div>
            <div>
                <div>전체</div>
                <div>2022.02.22 ~ 2023.02.21</div>
            </div>
            {
                itemlist && itemlist.map(item => (
                    <>
                    <p>{item.title}</p>
                    <img src = {item.imgUrl}/>
                    </>
                    )
                )}
            <div>

            </div>
        </>
    )
}
