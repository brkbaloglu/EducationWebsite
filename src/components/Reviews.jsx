import React,{useState} from 'react'
import { reviews } from '../data/data'
function Reviews() {
  const [review, setReview] =useState(reviews);

  return (
    <div className=''>
      <h1 className='text-center font-bold text-4xl my-20'>Customer <span className='text-purple-700'>Reviews</span></h1>

    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 px-4'>
            {review.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}  className='w-full h-[300px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <div>
                          <p className='text-purple-700 font-bold text-2xl mt-4 mb-8'>{item.name}</p>
                          <p className='text-sm'>{item.review}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews