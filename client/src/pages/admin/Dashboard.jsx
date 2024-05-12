import React from 'react'
import Formlist from '../../components/Formlist'
import { AiOutlinePlus } from 'react-icons/ai'
import RadarChart from '../../components/Radar-chart'
import AreaDTChart from '../../components/AreaDT-chart'
import DonutChart from '../../components/Donut-chart'
import Box from '../../components/Box'
import TopUserslist from '../../components/TopUserslist'

const Dashboard = () => {
  return (
    <main className='w-[100vw] px-12 py-4' id='dashboard'>
        <section className='my-4' id="dashboard-overview">
            <h2 className='text-xl mb-4 text-sky-700'>Overview</h2>
            <div className="flex flex-row justify-around">
                {/* props will be dynamically inserted into 'Boxes' */}
                <Box label={'Total Feedbacks received'} data={'123'} />
                <Box label={'Average Ratings'} data={'3.7 ⭐'} />
                <Box label={'Total Users'} data={'45'} />

                <Box label={'Average Submissions per User'} data={'5'}/>
            </div>
        </section>

        <section className='my-4 pr-2 w-3/5 inline-block' id="feedback-trends">
            <AreaDTChart />
        </section>
        <section className='my-4 w-2/5 pl-2 inline-block' id="category-breakdown">
            <RadarChart />
        </section>

        <section className='my-4 w-3/5 pr-16 inline-block'>
            <DonutChart />
        </section>
        <section className='my-4 w-2/5 inline-block'>
            <TopUserslist />
        </section>

        {/* A template section for creators to select */}
        {/* <section className='px-28 py-2 bg-sky-100' id="template-gallery">
            <h2 className='text-2xl mb-4'>Create a new form</h2>
            <div className="flex justify-evenly pb-8">                
            <div className='size-24 rounded pt-16 bg-slate-300 shadow hover:shadow-xl'>
                <p className='text-xs text-center'>Blank Form</p>
            </div>
            <div className='size-24 rounded pt-16 bg-lime-300 shadow hover:shadow-xl'>
                <p className='text-xs text-center'>non-Blank Form</p>
            </div>
            <div className='size-24 rounded pt-16 bg-cyan-300 shadow hover:shadow-xl'>
                <p className='text-xs text-center'>Another Form</p>
            </div>
            <div className='size-24 rounded pt-16 bg-cyan-300 shadow hover:shadow-xl'>
                <p className='text-xs text-center'>Another Form 2</p>
            </div>
            </div>
        </section> */}

        {/* list of forms admin has created ....latest at top */}
        <Formlist />
    </main>
  )
}

export default Dashboard