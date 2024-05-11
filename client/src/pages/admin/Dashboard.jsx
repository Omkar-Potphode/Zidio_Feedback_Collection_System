import React from 'react'
import Formlist from '../../components/Formlist'
import { AiOutlinePlus } from 'react-icons/ai'
import RadarChart from '../../components/Radar-chart'
import AreaDTChart from '../../components/AreaDT-chart'
import DonutChart from '../../components/Donut-chart'

const Dashboard = () => {
  return (
    <main className='w-[100vw] px-12 py-4' id='dashboard'>
        <section className='my-4' id="dashboard-overview">
            <h2 className='text-xl'>Overview</h2>
            <div className="flex flex-row justify-around">
                <div className="w-1/4 h-20 p-[8px] bg-white">
                    <p>Total Feedbacks received</p> <p className='text-3xl text-center font-bold tracking-wide hover:tracking-widest'>123</p></div>
                <div className="w-1/4 h-20 p-[8px] bg-white">
                    <p>Average Ratings</p> <p className='text-3xl text-center font-bold tracking-wide hover:tracking-widest'>3.7⭐</p></div>
                <div className="w-1/4 h-20 p-[8px] bg-white">
                    <p>Total Users</p> <p className='text-3xl text-center font-bold tracking-wide hover:tracking-widest'>45</p></div>
            </div>
        </section>
        <section className='my-4 w-2/3 bg-emerald-200 inline-block' id="feedback-trends">
            <h2>Feedback trends over time</h2>
            <hr />
            <AreaDTChart />
        </section>
        <section className='my-4 w-1/3 bg-lime-200 inline-block' id="category-breakdown">
            <h2>Category breakdown</h2>
            <hr />
            <RadarChart />

        </section>

        <section className='my-4'>
            <DonutChart />
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