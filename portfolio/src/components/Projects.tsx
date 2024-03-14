import React from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
interface CardType {
    loomVideo: string;
    project_name: string;
    project_description: string;
    learningStack: string[];
    techStack: string[];
}
const Projects: React.FC<CardType> = (props: CardType) => {
    return (
        <div className='h-max w-[100%] flex flex-col items-center gap-5'>
            <div className='h-max w-[80%]'>
                <p className='header_list md:text-3xl text-2xl'>{props.project_name}</p>
            </div>
            <div className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 p-5 rounded-xl border-2 shadow-xl md:flex hidden justify-center items-center h-max w-max'>
                <iframe width="840" height="473" src={props.loomVideo} className='border-2 rounded-xl shadow-lg' allowFullScreen></iframe>
            </div>
            <div className='md:hidden flex justify-center items-center h-max w-max'>
                <iframe width="360" height="203" src={props.loomVideo} className='border-2 rounded-xl shadow-lg' allowFullScreen></iframe>
            </div>
            <div className='flex md:flex-row flex-col md:items-center justify-center gap-5 p-3 w-[90%]'>
                <div className='flex flex-col gap-5 md:w-[65%] w-[100%]'>
                    <p className='w-[100%] text-base para_list'>{props.project_description}</p>
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
                    <span className='header_list h-max w-max flex flex-row items-center gap-2 bg-indigo-600 text-white p-2 rounded'>
                        <p>Live Preview</p>
                        <Icon icon="tabler:arrow-up" color='white' height={'4vh'} />
                    </span>
                </div>
                <div className='flex flex-col gap-2 p-3 md:w-[30%] w-[100%]'>
                    <p className='header_other text-xl w-max'>My Learnings & Improvements</p>
                    {
                        props.learningStack?.map((data: string) => (
                            <span className='flex items-center gap-2'>
                                <Icon icon="lucide:thumbs-up" style={{ color: '#59e871' }} height={'1.5rem'} />
                                <p className='para_list'>{data}</p>
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects