import React from 'react'

const Blog = () => {
  return (
    <>
 



    <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex w-full">

        <div className="p-6 ">


    {/* profile*/}

            <div className="flex gap-4 rounded-lg">

                <div className="flex items-center gap-3">
                <img className="w-12 h-12 object-cover rounded-full" src="https://avatars.githubusercontent.com/u/80972003?s=400&u=4abe9028a5d2ea962729656808fe48e31a202751&v=4" alt="Follower Image" />
                </div> 
                <div className="text-lg dark:text-gray ">samuelabera7
                </div>
            </div>

            <div>
                {/*blog*/}
            <h1 className='text-2xl font-bold'>hello</h1>
            <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                tousled waistcoat.
            </p>
            </div>
        </div>

        <div className=''>
        image
        </div>

    </div>


    </>
  )
}

export default Blog