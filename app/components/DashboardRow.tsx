import React from 'react'
import Image from 'next/image'
interface DashboardRowProps {
    userPhoto: string;
    userName: string;
    opportunity: string;
    amt_invested: string;
    ref_earned:string;
  }
export default function DashboardRow({userPhoto, userName, opportunity, amt_invested, ref_earned}:DashboardRowProps) {
  return (
    <div className='flex gap-16 p-4 bg-f7-gray rounded-[21px]'>
        <div className='flex gap-4'>
            <Image src={userPhoto} alt='userPhoto' width={86} height={82}></Image>
            <div className='font-inter text-lg leading-7 font-medium flex justify-center items-center text-dark-gray'>{userName}</div>
        </div>
        <div className='flex flex-col gap-1 justify-center items-start'>
            <div className='font-inter text-base leading-6 font-medium flex text-dark-gray'>{opportunity}</div>
            <div className='font-inter text-base leading-6 font-medium flex text-custom-gray'>Opportunity Invested</div>
        </div>
        <div className='flex flex-col justify-center items-start'>
            <div className='font-inter text-22-px leading-7 font-semibold flex text-dark-blue'>{amt_invested}</div>
            <div className='font-inter text-base leading-6 font-medium flex text-custom-gray'>Amount Invested</div>
        </div>
        <div className='flex flex-col justify-center items-start'>
            <div className='font-inter text-22-px leading-7 font-semibold flex text-custom-orange'>{ref_earned}</div>
            <div className='font-inter text-base leading-6 font-medium flex text-custom-gray'>Referral earned</div>
        </div>
    </div>
  )
}
