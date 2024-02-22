import React from 'react'
import { Icon } from '@iconify-icon/react'
interface CardType{
    icon: string;
    name: string;
}
const Skills: React.FC<CardType> = (props: CardType) => {
    return (
        <div className='bg-white h-max w-[15vw] p-3 flex flex-col items-center gap-2 rounded shadow-xl'>
            <Icon icon={props.icon} color='white' height={'5vh'} />
            <p className='header_list text-base'>{props.name}</p>
        </div>
    )
}

export default Skills