import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify-icon/react'
import profile from '../assets/Profile_Picture.jpeg'
import Skills from '../components/Skills'
import skills from '../utils/skills.json'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Calendly from '../components/Calendly'
import Projects from '../components/Projects'
// import project1 from '../assets/laptop_portfolio.avif'
// import Projects from '../components/Projects'

const Home: React.FC = () => {
    const skillsCategories: string[] = ["Front-end", "Back-end", "Other"]
    let [index, setIndex] = useState(0);
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    const { ref: ref1, inView: inView1 } = useInView()
    const { ref: ref2, inView: inView2 } = useInView()
    const { ref: ref3, inView: inView3 } = useInView()

    useEffect(() => {
        if (inView1) {
            controls1.start({ y: 0, opacity: 1 })
        }
        if (inView2) {
            controls2.start({ y: 0, opacity: 1 });
        }
        if (inView3) {
            controls3.start({ y: 0, opacity: 1 });
        }
    }, [controls1, controls2, controls3, inView1, inView2, inView3])
    return (
        <div id="home" className='h-max w-screen flex flex-col items-center gap-5'>
            <div className='md:h-[80vh] h-max w-screen flex md:flex-row flex-col-reverse md:justify-evenly items-center justify-center'>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}
                    className='flex flex-col gap-5 p-3 md:w-[45%] w-[85%]'>
                    <p className='header_list text-gray-600'>Hi, I'm Shashank Vishwakarma</p>
                    <p className='heading md:text-6xl text-3xl'>I'm a <span className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-transparent bg-clip-text'>Full-Stack</span> <p className='animate-typing overflow-hidden whitespace-nowrap'>Web Developer.</p></p>
                    <p className='para_list text-sm text-gray-600'>I'm a full-stack web developer, I can provide clean code & pixel perfect design.</p>
                    <span onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className='header_list h-max w-max flex flex-row items-center gap-2 bg-indigo-600 text-white p-2 rounded cursor-pointer'>
                        <p>My Projects</p>
                        <Icon icon="uil:arrow" color='white' height={'4vh'} />
                    </span>
                </motion.div>
                <div className='md:flex hidden justify-center items-center h-max w-max'>
                    <motion.img initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, behaviour: "smooth" }}
                        className='rounded-full border-4 border-indigo-600 shadow-xl' src={profile} width='350px' />
                </div>
                <div className='md:hidden flex justify-center items-center h-max w-max'>
                    <img className='rounded-full border-4 border-indigo-600 shadow-xl' src={profile} width='250px' />
                </div>
            </div>
            <div id="about" className='bg-indigo-600 text-white rounded-[50px] h-max w-[90vw] flex flex-col items-center gap-3 p-3 shadow-xl mt-5 md:mt-0'>
                <div className='rounded-b-full h-max w-[85vw] p-3 flex flex-col items-center text-center gap-2'>
                    <p className='header_list text-xl'>Who's this guy?</p>
                    <p className='heading_other md:text-3xl text-xl'>Shashank <span className='text-yellow-200'>Vishwakarma</span></p>
                    <span className='flex flex-row items-center gap-1'>
                        <Icon className='md:block hidden' icon="meteocons:star-fill" width="3rem" height="3rem" />
                        <p className='w-[100%] text-slate-100 text-start para_list text-sm md:text-base leading-6 mt-5'>
                            Hello! I'm a full-stack developer based in India, driven by a passion for crafting meaningful solutions. With a curious mind and a love for learning, I'm always exploring new libraries and frameworks to enhance project efficiency and performance.
                        </p>
                    </span>
                    <span className='flex flex-row items-center gap-2'>
                        <Icon className='md:block hidden' icon="meteocons:star-fill" width="3rem" height="3rem" />
                        <p className='w-[100%] text-slate-100 text-start para_list text-sm md:text-base leading-6 mt-5'>
                            I understand your business requirements and thrive on the challenge of finding reliable solutions tailored to your project's needs. Let's collaborate and bring your ideas to life, prioritizing your project's success every step of the way.
                        </p>
                    </span>
                    <p className='header_list text-sm md:text-base mt-5'>Trust me I'm Resourceful, Reliable and Results Oriented.</p>
                </div>
            </div>
            <div id="skills" className='h-max w-screen flex flex-col p-3 gap-3 items-center'>
                <div className='w-[85vw] flex flex-col p-3 gap-2'>
                    <p className='heading_other text-3xl'>My <span className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-transparent bg-clip-text'>Skills</span></p>
                </div>
                <div className='h-max md:w-[85vw] w-[100vw] flex md:justify-between justify-evenly md:items-start items-center'>
                    <motion.div ref={ref1} initial={{ y: -100, opacity: 0 }} animate={controls1} transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                        className='hidden h-max md:w-[30%] w-[100%] md:flex flex-col gap-2 rounded-3xl border-2 shadow-xl'>
                        <p className='header_list text-xl text-center p-2'>Front End</p>
                        {
                            skills?.map((data) =>
                                data.type == "Front-end" ?

                                    <Skills
                                        icon={data.icon}
                                        name={data.name}
                                        percent={data.percent}
                                        delay={0.6}
                                    /> : null
                            )
                        }
                    </motion.div>
                    <motion.div ref={ref2} initial={{ y: -100, opacity: 0 }} animate={controls2} transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                        className='hidden h-max md:w-[30%] w-[100%] md:flex flex-col gap-2 rounded-3xl border-2 shadow-xl'>
                        <p className='header_list text-xl text-center p-2'>Back End</p>
                        {
                            skills?.map((data) =>
                                data.type == "Back-end" ?

                                    <Skills
                                        icon={data.icon}
                                        name={data.name}
                                        percent={data.percent}
                                        delay={0.7}
                                    /> : null
                            )
                        }
                    </motion.div>
                    <motion.div ref={ref3} initial={{ y: -100, opacity: 0 }} animate={controls3} transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                        className='hidden h-max md:w-[30%] w-[100%] md:flex flex-col gap-2 rounded-3xl border-2 shadow-xl'>
                        <p className='header_list text-xl text-center p-2'>Other</p>
                        {
                            skills?.map((data) =>
                                data.type == "Other" ?

                                    <Skills
                                        icon={data.icon}
                                        name={data.name}
                                        percent={data.percent}
                                        delay={0.9}
                                    /> : null
                            )
                        }
                    </motion.div>
                    <div
                        className='md:hidden' onClick={() => { index > 0 ? setIndex(--index) : setIndex(2) }}>
                        <Icon className='md:hidden bg-indigo-600 shadow-2xl border-2 rounded-full p-1' icon="iconamoon:arrow-left-2-bold" width="1.5rem" style={{ color: "white" }} />
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ behaviour: "smooth", delay: 0.4 }}
                        className='h-max w-[75vw] md:hidden flex flex-col gap-1 rounded-3xl border-2 shadow-xl transition-transform duration-700 ease-in-out'>
                        <p className='header_list text-xl text-center p-2'>{skillsCategories[index]}</p>
                        {

                            skills?.map((data) =>
                                data.type == skillsCategories[index] ?
                                    <Skills
                                        icon={data.icon}
                                        name={data.name}
                                        percent={data.percent}
                                        delay={0.1}
                                    /> : null
                            )

                        }
                    </motion.div>
                    <div className='md:hidden' onClick={() => { index < 2 ? setIndex(++index) : setIndex(0) }}>
                        <Icon className='md:hidden bg-indigo-600 shadow-2xl border-2 rounded-full p-1' icon="iconamoon:arrow-right-2-bold" color='white' width="1.5rem" style={{ color: "white" }} />
                    </div>
                </div>
            </div>

            <div id='projects' className='bg-slate-100 h-max w-screen flex flex-col p-3 gap-10 items-center'>
                <div className='w-[85vw] flex flex-col p-3 gap-2'>
                    <p className='header_list text-xl'>Visit my portfolio</p>
                    <p className='heading_other text-3xl'>My Best <span className='bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-transparent bg-clip-text'>Projects</span></p>
                </div>
                <Projects
                    loomVideo={"https://www.loom.com/embed/12a6e38b27e24ce081d05d11d9a93774?sid=d1f1f35a-b771-4b43-ae35-acb878e19b6d"}
                    project_name={"WeMeet - Schedule & Host Online Meetings."}
                    projectUrl={'https://wemeet-psi.vercel.app/'}
                    project_description={"Zen is a state-of-the-art communication platform built on the PERN stack and WebRTC technology with WebSocket for real-time communication. Offering seamless video calling and upcoming live streaming features, Zen ensures secure, reliable, and user-friendly experiences."}
                    learningStack={['Learned more about real-time communication servers', 'Implemented the Web-RTC with Socket.io for realtime video & text chat during meeting', 'Building a email notification system within the backend with the help of cron jobs & Redis']}
                    techStack={["ReactJs", "NodeJs", "ExpressJs", "PostgreSQL", "TailwindCSS", "WebRTC", "Socket.io", "Redis"]}
                />

                <span className='h-[.25rem] w-[80%] rounded bg-slate-800'></span>

                <Projects
                    loomVideo={"https://www.loom.com/embed/0319f4bd190b469ab0eccdfa71584b04?sid=833c10bd-9ba5-4279-9da1-6b9c3a7089e6"}
                    project_name={"WeMeet - Schedule & Host Online Meetings."}
                    projectUrl={'https://zen-gamma.vercel.app/'}
                    project_description={"Zen is a state-of-the-art communication platform built on the PERN stack and WebRTC technology with WebSocket for real-time communication. Offering seamless video calling and upcoming live streaming features, Zen ensures secure, reliable, and user-friendly experiences."}
                    learningStack={['Learned more about real-time communication servers', 'Implemented the Web-RTC with Socket.io for realtime video & text chat during meeting', 'Building a email notification system within the backend with the help of cron jobs & Redis']}
                    techStack={["ReactJs", "NodeJs", "ExpressJs", "PostgreSQL", "TailwindCSS", "WebRTC", "Socket.io", "Redis"]}
                />

                <span className='h-[.25rem] w-[80%] rounded bg-slate-800'></span>

                <Projects
                    loomVideo={"https://www.loom.com/embed/49fb57cd210d4c28a9a3dba7a0e51e6b?sid=37036a6f-6353-43aa-be3f-20684de69742"}
                    project_name={"WeMeet - Schedule & Host Online Meetings."}
                    projectUrl={'https://weblog-lake.vercel.app/'}
                    project_description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum perspiciatis ullam eos. Sed incidunt adipisci ducimus atque quos amet suscipit nesciunt, mollitia eos earum ullam aliquam id consequatur aut!"}
                    learningStack={['Learned more about real-time communication servers', 'Implemented the Web-RTC with Socket.io for realtime video & text chat during meeting', 'Building a email notification system within the backend with the help of cron jobs & Redis']}
                    techStack={["ReactJs", "NodeJs", "ExpressJs", "PostgreSQL", "TailwindCSS", "WebRTC", "Socket.io", "Redis"]}
                />

            </div>
            <div id="connect" className='bg-indigo-600 h-max p-5 w-screen flex justify-center items-center'>
                <Calendly />
            </div>
        </div>
    )
}

export default Home