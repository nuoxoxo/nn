import "./page.css"
import fs from 'fs'
import Markdown from 'markdown-to-jsx'

const getContent = (slug: string) : string => {
  const Path = 'posts/'
  const Ext = '.mdx'
  const File = `${Path}${slug}${Ext}`
  const Content = fs.readFileSync(File, 'utf8')
  return Content
}

const BlogPost = (props: any) => {
  // const slug = props.params.slug
  return (
    <>
      <h1>BLOGSPOT: { props.params.slug }</h1>
      <Markdown>{ getContent(props.params.slug) }</Markdown>
    </>
  )
}

export default BlogPost