import React from 'react'

const Formlist = () => {
    // dummy data of recent works by admin
    const works = [
        {
            title:'Titled form 2',
            author: 'You',
            createdAt:'12/04/2024'
        },
        {
            title:'Titled form 1',
            author: 'You',
            createdAt:'01/04/2024'
        },
        {
            title:'Titled form 0',
            author: 'You',
            createdAt:'27/03/2024'
        }
    ];

  return (
    <section className='px-28 py-2' id='formlist'>
        <div className='flex justify-between'>
        <p>Recent forms</p>
        <button>Sort</button>
        </div>
        {/* <div className="flex flex-col">
            {
                works.map((work, i)=>(
                    <div className="h-8 flex justify-evenly border-b-2" key={i}>
                        <h3>{work.title}</h3>
                        <p>{work.author}</p>
                        <p>{work.createdAt}</p>
                    </div>
                ))
            }
        </div> */}
        <table className="table-fixed w-[100%]">
  <thead>
    <tr>
      <th className='w-1/3'>Title</th>
      <th className='w-1/3'>Author</th>
      <th className='w-1/3'>Date</th>
    </tr>
  </thead>
  <tbody>
    {
        works.map((work, i)=>(
    <tr key={i}>
      <td>{work.title}</td>
      <td>{work.author}</td>
      <td>{work.createdAt}</td>
    </tr>
        ))
    }
  </tbody>
</table>
    </section>
  )
}

export default Formlist