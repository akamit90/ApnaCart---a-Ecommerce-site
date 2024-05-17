import React from 'react'

function AllProductSimmer() {
  const arrayData = new Array(9).fill("");

  return (
    <div className='p-4 sm:p-6 lg:p-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mt-8'>
        {arrayData.map((el, i) => (
          <div key={i} className='border p-4 sm:p-6 rounded-lg shadow-md'>
            <div className='w-full h-[200px] bg-[#ccc] rounded-md mb-4'></div>
            <div className='flex justify-between items-center mb-2'>
              <h2 className='text-gray-900 h-[20px] w-[120px] bg-[#ccc] rounded-md'></h2>
              <p className='text-sm text-gray-500 h-[20px] w-[120px] bg-[#ccc] rounded-md'></p>
            </div>
            <div className='flex justify-between items-center mt-2'>
              <p className='text-gray-900 h-[20px] w-[120px] bg-[#ccc] rounded-md'></p>
              <button className='h-[20px] w-[120px] bg-[#ccc] rounded-md'></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProductSimmer;
