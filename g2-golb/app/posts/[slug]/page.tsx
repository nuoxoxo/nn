import "./page.css"
import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"

const getContent = (slug: string) => {
  const path = 'posts/'
  const ext = '.mdx'
  const file = `${path}${slug}${ext}`
  const content = fs.readFileSync(file, 'utf8')
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
  return (
    <>
      <h1>BLOGSPOT: { post.data.title }</h1>
      <Markdown>{ post.content }</Markdown>
    </>
  )
}

export default BlogPost