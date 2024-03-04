import React from 'react'
import { Icon } from '@iconify-icon/react'
interface CardType{
    icon: string;
    name: string;
    percent: number | string
}
const Skills: React.FC<CardType> = (props: CardType) => {
    return (
        <div className='h-max md:w-[25vw] w-[65vw] text-black p-3 flex items-center gap-2'>
            <Icon className='rounded-full shadow-2xl h-max w-max border-2 p-2 border-blue-600' icon={props.icon} color='white' height={'5vh'} />
            <span className='h-max w-max flex flex-col gap-1'>
            <p className='header_list text-sm'>{props.name}</p>
            <span className={`bg-indigo-600 h-max p-1 text-xs rounded text-white text-end w-[${Number(props.percent) * 6 / 10}%]`}>{props.percent}%</span>
            </span>
        </div>
    )
}

export default Skills