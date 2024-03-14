import React from 'react'
import { InlineWidget } from 'react-calendly'

const Calendly: React.FC = () => {

    return (
        <>
            <div className='md:block hidden h-max w-screen p-5'>
                <InlineWidget styles={{ height: "700px" }} url='https://calendly.com/shashankvish010/casual-conversation' />
            </div>
            <div className='md:hidden block h-max w-screen p-5'>
                <InlineWidget styles={{ width: "90vw", height: "900px" }} url='https://calendly.com/shashankvish010/casual-conversation' />
            </div>
        </>
    )
}

export default Calendly