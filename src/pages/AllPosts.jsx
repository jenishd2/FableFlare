import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import {Card, Container} from '../components/index'

export default function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
      service.getPosts([]).then(post => {
        if(post){
          setPosts(post.documents)
        }
      })
    },[])
    

    if(posts.length === 0) return <Container classname="flex justify-center items-center"><h1 className='text-8xl'>You have Not Post Anything.</h1></Container>
    else return ( <Container classname="flex flex-wrap !w-[90%] mx-auto overflow-y-scroll no-scrollbar" >
      {/* <div className="flex flex-wrap !w-[90%] mx-auto h-full overflow-y-scroll"> */}
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 h-fit">
              <Card {...post}/>
            </div>
          ))}
        {/* </div> */}
    </Container>  
  )
}
