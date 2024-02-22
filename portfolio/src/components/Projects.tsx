import React from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
interface CardType {
    image: string;
    project_name: string;
    project_description: string;
    techStack: string[];
}
const Projects: React.FC <CardType> = (props: CardType) => {
    return (
        <div className='h-max w-[100%] flex md:flex-row flex-col items-center justify-evenly'>
            <div className='flex justify-center items-center h-max w-max'>
                <img src={props.image} width={'500px'}/>
            </div>
            <div className='flex flex-col gap-5 p-3 w-[50%]'>
                <div className='flex flex-col gap-2'>
                    <p className='header_list text-xl'>{props.project_name}</p>
                    <p>{props.project_description}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='header_list text-base'>Technologies Used</p>
                    <div className='h-max w-[100%] flex flex-row flex-wrap gap-2 items-center header_list'>
                        {
                            props.techStack?.map((data: string) =>
                                <span className='h-max w-max p-2 bg-indigo-600 text-white'>
                                    <p className='text-sm'>{data}</p>
                                </span>
                            )
                        }
                    </div>
                </div>
                <span className='header_list h-max w-max flex flex-row items-center gap-2 bg-indigo-600 text-white p-2 rounded'>
                    <p>Learn More</p>
                    <Icon icon="tabler:arrow-up" color='white' height={'4vh'}/>
                </span>
            </div>
        </div>
    )
}

export default Projects