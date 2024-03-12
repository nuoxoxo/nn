import "./page.css"
import fs from 'fs'

const HomePage = () => {
  const PostMetadata = getPostMetadata()
  const PostPreviews = PostMetadata.map(
    (slug) => (
      <div>
        <h3>{ slug }</h3>
      </div>
    )
  )

  return (
    <>
      <h1>Hello, World!</h1>
      <div>{ PostPreviews }</div>
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