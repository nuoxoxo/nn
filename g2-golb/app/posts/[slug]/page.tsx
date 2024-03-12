import fs from 'fs'

const getContent = (slug: string) : string => {
  const Path = 'posts/'
  const Ext = '.mdx'
  const File = `${Path}${slug}${Ext}`
  const Content = fs.readFileSync(File, 'utf8')
  const matterRes = matter()
  return 
}

const BlogPost = (props: any) => {
  // const slug = props.params.slug
  return (
    <>
      <h1>BLOGSPOT: { props.params.slug }</h1>
      <p>{ getContent(props.params.slug) }</p>
    </>
  )
}

export default BlogPost