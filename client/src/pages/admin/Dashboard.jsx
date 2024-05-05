import React from 'react'
import Formlist from '../../components/Formlist'
import { AiOutlinePlus } from 'react-icons/ai'

const Dashboard = () => {
  return (
    <main>
        {/* A template section for creators to select */}
        <section className='px-28 py-2 bg-sky-100' id="template-gallery">
            <h2 className='text-2xl mb-4'>Create a new form</h2>
            <div className="flex justify-evenly pb-8">                
            <div className='size-24 rounded pt-16 bg-slate-300 shadow hover:shadow-xl'>
            {/* <AiOutlinePlus size={40} /> */}
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
        </section>

        {/* list of forms admin has created ....latest at top */}
        <Formlist />
    </main>
  )
}

export default Dashboard