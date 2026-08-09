import React from 'react'
import Navbar from '../component/Navbar'
import pic from '../assets/blog.jpg'

const SingleBlog = () => {
  return (
   
<>
<div>
    <Navbar/>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      {/* Blog post header */}
      <div className="py-8">
        <h1 className="text-5xl font-bold mb-2 text-center">Blog post title</h1>
        <p className="text-gray-500 text-2xl text-center my-3.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eius.</p>
          <div className="flex items-center gap-1.5 my-3.5 mb-0">
                <div>
                    <img className="w-12 h-12 object-cover rounded-full" src={pic} alt="Follower Image" />
                </div>
                    <div className="text-lg dark:text-gray ">samuelabera7
            </div> 
            </div>
      </div>
      {/* Featured image */}
      <img src={pic} alt="Featured image" className="w-full h-auto mb-8" />
      {/* Blog post content */}
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius fringilla augue, vel vestibulum
          nisl mattis vel. Praesent porttitor pharetra purus eu tincidunt.</p>
        <p>Nullam vitae sapien non est suscipit blandit quis sit amet ipsum. Aliquam euismod accumsan nunc, in
          convallis felis luctus in. Sed rhoncus metus a elit rutrum aliquam.</p>
        <p>Integer ullamcorper leo nulla, nec commodo metus vehicula eget. Duis vel vestibulum tellus, eget mattis
          quam. Nullam euismod libero sed nibh tristique, vel eleifend risus sagittis. In hac habitasse platea
          dictumst. Sed dapibus magna at arcu euismod, a pulvinar turpis tristique. Suspendisse imperdiet velit
          nec lectus rutrum varius.</p>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default SingleBlog