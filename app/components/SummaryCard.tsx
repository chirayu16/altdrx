import React from 'react'
import Image from 'next/image'

interface SummaryCardProps {
    photo: string;
    title: string;
    description: string;
  }  
export default function SummaryCard({photo, title, description}: SummaryCardProps) {
    return (
        <div className='flex flex-col border rounded-3xl w-64 h-56 pt-6 pl-6 bg-f7-gray'>
            <Image src={photo} alt='logo' width={81} height={81}></Image>
            <div className='flex flex-col gap-1 mt-10 font-inter  '>
                <div className='text-28-px text-dark-gray font-inter font-semibold leading-9 tracking-normal'>{title}</div>
                <div className='text-base text-dark-gray font-inter font-medium leading-6 tracking-normal'>{description}</div>
            </div>
        </div>
      )
}