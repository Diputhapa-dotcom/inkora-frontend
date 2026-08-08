import React from 'react'
import Layout from '../component/Layout'

const Blog = () => {
  return (
    <>


    <div className=" flex w-full h-fit p-10 gap-20  " >

        <div className="p-10 border-b border-gray-200 ">


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
            <h1 className='text-2xl font-bold'>hello</h1>


                <div className='flex gap-6'>
                    <div>
                        <p className=" text-gray-600 ">
                            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                            tousled waistcoat.
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit vitae nobis possimus, ut in quod deserunt. Deserunt quaerat impedit ratione sed esse facere, exercitationem sequi deleniti adipisci quod omnis. consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore culpa voluptatum totam, delectus pariatur a fugit unde tempora quibusdam ab vel et provident enim corrupti rem in rerum nostrum repellendus!elit. Unde quo magnam asperiores beatae doloremque consequuntur illo vero aliquam optio, ad sapiente dolorem omnis quam ea incidunt est repudiandae ipsam vitae!
                        </p>
                        </div>

                        <div className=' h-20 w-fit border p-20'>
                        image Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa dolorum laborum aperiam. Quod dolorum officia pariatur praesentium officiis ratione veniam illum deleniti harum, commodi facilis, aliquam voluptate libero iusto?
                        </div>
                   </div>
                </div>
                
            </div>  

    </div>


    </>
  )
}

export default Blog