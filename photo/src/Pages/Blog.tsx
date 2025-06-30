import {Blog} from '../Constant/Blog'
export default function BlogPage(){

      return (
            <div className='mt-20'>
                  <header>
                        <h1 className='text-4xl font-semibold text-yellow-800 text-center'>
                              Latest From Our Blog 
                        </h1>
                  </header>


                <section className='grid grid-cols-3 gap-2 p-6'>
                  {
                        Blog.map((post, index ) => (
                              <div key={index} className="max-w-lg mx-auto my-8 p-4 rounded-lg "> 
                                   <img src={post.image} alt={post.title} className="w-full h-48 object-cover  mb-4" /> 
                                    <h2 className="text-2xl font-medium cursor-pointer hover:underline-offset-2 mb-4">{post.title}</h2>
                              
                              
                              
                                    </div>))
                  }
                </section>

            </div>
      )
}