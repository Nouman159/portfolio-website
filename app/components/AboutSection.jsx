"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

                <Image src='/about-image.png' width={500} height={500} />
                <div className='md-4 md:mt-0 text-left flex flex-col h-full'>
                    <h1 className='text-4xl font-bold text-white mb-4'>About Me</h1>
                    <p className='text-base lg:text-lg'>
                        I am a passionate MERN stack developer with a strong foundation in creating full-stack web applications. My expertise lies in leveraging the power of MongoDB for data storage, Express.js for robust server-side development, React.js for building dynamic user interfaces, and Node.js for scalable and high-performance backend solutions.

                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                            {""}Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            {""}Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
                            {""}Certifications{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection