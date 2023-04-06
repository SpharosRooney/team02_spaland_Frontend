import React from 'react'

export default function CartListSubject(props: { title: string }) {
    return (
        <div>
            <div className="cart-product-category">
                <div className="cart-product-category-detail">
                    <input type="checkbox" id="section-cb" /><span>{props.title}</span>
                </div>
            </div>
        </div>
    )
}
