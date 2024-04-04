import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"

const getContent = (slug: string) => {
  const path = 'posts/'
  const ext = '.mdx'
  const file = `${path}${slug}${ext}`
  const content = fs.readFileSync(file, 'utf-8')
  return matter( content )
  // return 
}

export  const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

const BlogPost = (props: any) => {
  const post = getContent( props.params.slug )
  const cover = post.data.cover ? 'https://i.imgur.com/' + post.data.cover + '.jpeg' : ''
  return (
    <>
      {/* Original layout draft */}
      {/*
      <div className='m-6 pt-4 flex-col justify-center items-center'>
        <h1 className='text-4xl font-extrabold text-[color:var(--text-color)] pb-10'>{ post.data.title }</h1>
        <article className="prose lg:prose-xl text-[color:var(--text-color)] text-lg"><Markdown>{ post.content }</Markdown></article>
      </div>
      */}

      <div className="mx-6 my-6">
        <h1 className="text-3xl text-[color:var(--text-color)] mb-3">{post.data.title}</h1>
        <p className="text-xs text-[color:var(--date-color)] mt-2">{post.data.date}</p>
      </div>
      <div className="mx-6">
        <img className="mb-6" src={cover}></img>
        <article className="prose max-w-none text-[color:var(--text-color)] text-xs sm:text-base">
          <Markdown>{ post.content }</Markdown>
        </article>
      </div>
    </>
  )
}

export default BlogPost