import React from 'react'
import { Icon } from '@iconify-icon/react'
import profile from '../assets/Profile_Picture.jpeg'
import Skills from '../components/Skills'
import skills from '../utils/skills.json'
import project1 from '../assets/laptop_portfolio.avif'
import Projects from '../components/Projects'

const Home: React.FC = () => {
    return (
        <div className='h-max w-screen flex flex-col gap-3'>
            <div className='h-[80vh] w-screen flex md:flex-row flex-col items-center justify-evenly'>
                <div className='flex flex-col gap-5 p-3 w-[45%]'>
                    <p className='header_list text-gray-600'>Hi, I'm Shashank Vishwakarma</p>
                    <p className='heading md:text-6xl text-3xl'>I'm a <span className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-transparent bg-clip-text'>Full-Stack</span> Web Developer.</p>
                    <p className='para_list text-sm text-gray-600'>I'm a full-stack web developer, I can provide clean code & pixel perfect design.</p>
                    <span className='header_list h-max w-max flex flex-row items-center gap-2 bg-indigo-600 text-white p-2 rounded'>
                        <p>My Projects</p>
                        <Icon icon="uil:arrow" color='white' height={'4vh'} />
                    </span>
                </div>
                <div className='flex justify-center items-center h-max w-max'>
                    <img className='rounded-full border-4 border-indigo-600 shadow-xl' src={profile} width='350px' />
                </div>
            </div>
            <div className='bg-slate-100 h-max w-screen flex flex-col items-center gap-3 p-3'>
                <div className='h-max w-[85vw] p-3 flex flex-col items-center gap-2'>
                <p className='header_list text-xl'>About Me</p>
                <p className='heading_other md:text-3xl text-2xl'>Shashank <span className='text-indigo-600'>Vishwakarma</span></p>
                <p className='para_list text-base mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsum impedit, facilis delectus ducimus odio quaerat magni inventore esse placeat? Doloribus architecto temporibus libero expedita eaque aspernatur assumenda alias hic optio cum dolores eligendi reprehenderit quod soluta ipsa commodi dolore ipsum, delectus vitae accusantium impedit eum mollitia! Laboriosam minus aperiam exercitationem error officia, itaque suscipit nulla fugiat eaque a, quod earum consequatur alias, quaerat aspernatur ipsa quam dicta est vitae. Consectetur rerum repellat non eaque possimus ea incidunt dolorum! Perferendis eligendi dolores nostrum exercitationem vitae ducimus natus quas, quibusdam dolorum nesciunt quo, ad at corrupti, odit porro consequatur illum veniam.</p>
                </div>
                <p className='header_list text-xl'>My Skills</p>
                <div className='bg-gradient-to-br from-indigo-600 via-indigo-500 to-pink-500 h-max w-[85vw] p-7 flex justify-around gap-4 flex-wrap rounded'>
                    {
                        skills?.map((data)=>
                            <Skills
                            icon={data.icon}
                            name={data.name}
                            />
                        )
                    }
                </div>
            </div>
            <div className='h-max w-screen flex flex-col p-3 gap-3 items-center'>
                <div className='w-[85vw] flex flex-col p-3 gap-2'>
                <p className='header_list text-xl'>Visit my portfolio</p>
                <p className='heading_other text-3xl'>My Best <span className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-transparent bg-clip-text'>Projects</span></p>
                </div>
                <Projects
                    image={project1}
                    project_name={"WeMeet"}
                    project_description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum perspiciatis ullam eos. Sed incidunt adipisci ducimus atque quos amet suscipit nesciunt, mollitia eos earum ullam aliquam id consequatur aut!"}
                    techStack={["ReactJs", "NodeJs", "ExpressJs", "PostgreSQL", "TailwindCSS", "WebRTC", "Socket.io", "Redis"]}
                />
            </div>
        </div>
    )
}

export default Home