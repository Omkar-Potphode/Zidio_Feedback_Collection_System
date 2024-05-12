import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineDelete, AiOutlineHistory, AiOutlineLeft, AiOutlineSortDescending } from "react-icons/ai";
// Icons Reference: http://react-icons.github.io/react-icons/icons/ai/


const Formslist = () => {
  // dummy data of recent works by admin
  const works = [
    {
      title: 'Titled form 2',
      author: 'You',
      createdAt: '12/04/2024'
    },
    {
      title: 'Titled form 1',
      author: 'You',
      createdAt: '01/04/2024'
    },
    {
      title: 'Titled form 0',
      author: 'You',
      createdAt: '27/03/2024'
    }
  ];
  {/* list of forms admin has created ....latest at top */}

  return (
    <main className='px-28 py-2' id='formlist'>
        
      <div className='flex justify-between text-xl my-4'>
        <div>
          <p className='inline-block'>Recent forms</p>
          <AiOutlineHistory color='grey' className='inline-block mx-2' />
        </div>
        <button>Sort <AiOutlineSortDescending color='blue' className='inline-block mx-2' /></button>
      </div>

      <table className="table-fixed w-[100%]">
        <thead>
          <tr className=''>
            <th className='w-1/4'>Title</th>
            <th className='w-1/4'>Author</th>
            <th className='w-1/4'>Date</th>
            <th className='w-1/4'><button>Delete all <AiFillDelete color='red' className='inline-block'/></button></th>
          </tr>
        </thead>
        <tbody>
          {
            works.map((work, i) => (
              <tr key={i} className='text-center h-12 border-b-2'>
                <td>
                  <Link to={`/admin/form/${i}`}>{work.title}</Link>
                </td>
                <td>{work.author}</td>
                <td>{work.createdAt}</td>
                <td><button> <AiOutlineDelete color='red' /> </button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  )
}

export default Formslist