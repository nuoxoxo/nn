import "./page.css"
import Link from "next/link"
import fs from 'fs'

const HomePage = () => {

  const PostMetadata = getPostMetadata()
  const PostPreviews = PostMetadata.map(
    (slug) => {
      // const SLUG = `/posts/${slug}`
      return (
        <div key={ slug }>
          <Link href={`/posts/${slug}`}>
          {/* <Link href={ PATH }> */}
            <h3>{ slug }</h3>
          </Link>
        </div>
      )
    })

  return (
    <>
      {/* <h1>Hello, World!</h1> */}
      <div>
        <h2>{ PostPreviews }</h2>
      </div>
    </>
  )
}

const getPostMetadata = () => {
  const PATH = 'posts/'
  const regex = /\.(md|mdx)$/
  const Files = fs.readdirSync(PATH).filter(
    (item) => regex.test(item)
    // (item) => item.endsWith('.md') || item.endsWith('.mdx')
  )
  const Slugs = Files.map(
    (item) => item.replace(regex, '')
  )
  return Slugs
}

export default HomePage