import React from 'react'
import Layout from '../component/Layout'
import pic from '../assets/blog.jpg'

const Blog = () => {
  return (
    <>


    <div className=" flex w-full h-100 p-10 gap-20  " >

        <div className="p-10 border-b border-gray-200 overflow-hidden ">


    {/* profile*/}
 
            <div className="flex gap-4 rounded-lg  w-fit">

                <div className="flex items-center ">
                <img className="w-12 h-12 object-cover rounded-full" src="https://avatars.githubusercontent.com/u/80972003?s=400&u=4abe9028a5d2ea962729656808fe48e31a202751&v=4" alt="Follower Image" />
                </div> 
                <div className="text-lg dark:text-gray ">samuelabera7
                </div>
            </div>

            <div className='px-4'>
                {/*blog*/}
                <div className='flex gap-6'>
                    <div>
                        <h1 className='text-2xl font-bold'>hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto quidem atque perferendis doloribus maiores veritatis quasi nihil culpa repellendus!</h1>
                        <div>
                            
                            <p className=" text-gray-600 line-clamp-2">
                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                                tousled waistcoat.
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit vitae nobis possimus, ut in quod deserunt. Deserunt quaerat impedit ratione sed esse facere, exercitationem sequi deleniti adipisci quod omnis. consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore culpa voluptatum totam, delectus pariatur a fugit unde tempora quibusdam ab vel et provident enim corrupti rem in rerum nostrum repellendus!elit. Unde quo magnam asperiores beatae doloremque consequuntur illo vero aliquam optio, ad sapiente dolorem omnis quam ea incidunt est repudiandae ipsam vitae!
                            </p>
                        </div>
                    </div>

                        <div className=' w-full h-30 border '>
                            <img src={pic} className='w-full h-full object-cover' />
                        </div>

                   </div>
                </div>
                
            </div>  

    </div>


    </>
  )
}

export default Blog