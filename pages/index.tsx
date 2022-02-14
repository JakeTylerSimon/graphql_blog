import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components';

const posts = [
  {title: 'Graphql Testing', excerpt: 'Graphql Testing'},
  {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>GraphQl Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid rid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post,index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
      
        <div className='lg:col-span-4 col-span-1'>
            <div className="lg:sticky relative top-">
                <PostWidget />
                <Categories />
            </div>
        </div>
      
      </div>


     
    </div>
  )
}
