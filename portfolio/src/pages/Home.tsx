import React from 'react'
import { Icon } from '@iconify-icon/react'
import profile from '../assets/Profile_Picture.jpeg'
import Skills from '../components/Skills'
import skills from '../utils/skills.json'
import project1 from '../assets/laptop_portfolio.avif'
import Projects from '../components/Projects'

const Home: React.FC = () => {
    return (
        <div className='h-max w-screen flex flex-col items-center gap-3'>
            <div className='md:h-[80vh] h-max w-screen flex md:flex-row flex-col-reverse md:justify-evenly items-center justify-center'>
                <div className='flex flex-col gap-5 p-3 md:w-[45%] w-[85%]'>
                    <p className='header_list text-gray-600'>Hi, I'm Shashank Vishwakarma</p>
                    <p className='heading md:text-6xl text-3xl'>I'm a <span className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-transparent bg-clip-text'>Full-Stack</span> Web Developer.</p>
                    <p className='para_list text-sm text-gray-600'>I'm a full-stack web developer, I can provide clean code & pixel perfect design.</p>
                    <span className='header_list h-max w-max flex flex-row items-center gap-2 bg-indigo-600 text-white p-2 rounded'>
                        <p>My Projects</p>
                        <Icon icon="uil:arrow" color='white' height={'4vh'} />
                    </span>
                </div>
                <div className='md:flex hidden justify-center items-center h-max w-max'>
                    <img className='rounded-full border-4 border-indigo-600 shadow-xl' src={profile} width='350px' />
                </div>
                <div className='md:hidden flex justify-center items-center h-max w-max'>
                    <img className='rounded-full border-4 border-indigo-600 shadow-xl' src={profile} width='250px' />
                </div>
            </div>
            <div className='bg-indigo-600 text-white rounded-[50px] h-max w-[90vw] flex flex-col items-center gap-3 p-3 shadow-xl mt-5 md:mt-0'>
                <div className='rounded-b-full h-max w-[85vw] p-3 flex flex-col items-center text-center gap-2'>
                    <p className='header_list text-xl'>Who's this guy?</p>
                    <p className='heading_other md:text-3xl text-xl'>Shashank <span className='text-yellow-300'>Vishwakarma</span></p>
                    <span className='flex flex-row items-center gap-1'>
                    <Icon className='md:block hidden' icon="meteocons:star-fill" width="3rem" height="3rem" />
                    <p className='w-[100%] text-slate-100 text-start para_list text-sm md:text-base leading-6 mt-5'>
                        Hello! I'm a full-stack developer based in India, driven by a passion for crafting meaningful solutions. With a curious mind and a love for learning, I'm always exploring new libraries and frameworks to enhance project efficiency and performance.
                    </p>
                    </span>
                    <span className='flex flex-row items-center gap-2'>
                    <Icon className='md:block hidden'icon="meteocons:star-fill" width="3rem" height="3rem" />
                    <p className='w-[100%] text-slate-100 text-start para_list text-sm md:text-base leading-6 mt-5'>
                        I understand your business requirements and thrive on the challenge of finding reliable solutions tailored to your project's needs. Let's collaborate and bring your ideas to life, prioritizing your project's success every step of the way.
                    </p>
                    </span>
                    <p className='header_list text-sm md:text-base mt-5'>Trust me I'm Resourceful, Reliable and Results Oriented.</p>
                </div>
            </div>
            <div className='h-max w-screen flex flex-col p-3 gap-3 items-center'>
                <div className='w-[85vw] flex flex-col p-3 gap-2'>
                    <p className='heading_other text-3xl'>My <span className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-transparent bg-clip-text'>Skills</span></p>
                </div>
                <div className='h-max w-[85vw] flex md:justify-between md:flex-row flex-col flex-wrap gap-7'>
                    <div className='h-max md:w-[30%] w-[100%] flex flex-col gap-2 rounded-3xl border-2 shadow-xl'>
                    <p className='header_list text-xl text-center p-2'>Front End</p>
                        {
                            skills?.map((data) =>
                                    data.type == "Front-end" ?

                                        <Skills
                                            icon={data.icon}
                                            name={data.name}
                                            percent={'30%'}
                                        /> : null
                            )
                        }
                    </div>
                    <div className='h-max md:w-[30%] w-[100%] flex flex-col gap-2 rounded-3xl border-2 shadow-xl'>
                    <p className='header_list text-xl text-center p-2'>Back End</p>
                        {
                            skills?.map((data) =>
                                data.type == "Back-end" ?

                                    <Skills
                                        icon={data.icon}
                                        name={data.name}
                                        percent={'70%'}
                                    /> : null
                            )
                        }
                    </div>
                    <div className='h-max md:w-[30%] w-[100%] flex flex-col gap-2 rounded-3xl border-2 shadow-xl'>
                    <p className='header_list text-xl text-center p-2'>Other</p>
                        {
                            skills?.map((data) =>
                                data.type == "Other" ?

                                    <Skills
                                        icon={data.icon}
                                        name={data.name}
                                        percent={'100%'}
                                    /> : null
                            )
                        }
                    </div>

                </div>
            </div>
            {/* <div className='h-max w-screen flex flex-col p-3 gap-3 items-center'>
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
            </div> */}
        </div>
    )
}

export default Home