import { useRouter } from 'next/router'
import React from 'react'
import myStyle from './ButtonUi.module.css'

export default function ButtonUi(props: {
    type: 'button' | 'submit' | 'reset',
    text: string,
    colorType: 'primary' | 'secondary',
    size: 'small' | 'medium' | 'large',
    link: string,
    handler?: Function,
})
{
    const router = useRouter();

    const handler = () => {
        console.log(handler)
        if(props.link) {  router.push(props.link)  }
            
        if(props.handler) {
            props.handler()
        }
    }

    return (
        // ?? '' 은 props.size가 undefined일 경우 ''로 대체한다는 뜻
        <div className={props.size === 'large'? myStyle.large : props.size === 'medium' ? myStyle.medium : myStyle.small}>
        <button type={props.type} onClick={handler} className={props.colorType === 'primary' ? myStyle.primary : myStyle.secondary}>
            {props.text}
        </button>
        </div>
    )
}

