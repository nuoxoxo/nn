import fs from 'fs'
import matter from "gray-matter"
import PostMetadata from "../components/PostMetadata"
import path from "path"

const getPostMetadata = () : PostMetadata[] => {
  const PATH = 'posts/'
  const regex = /\.(md|mdx)$/
  const Files = fs.readdirSync(PATH).filter(
    (item) => regex.test(item)
    // (item) => item.endsWith('.md') || item.endsWith('.mdx')
  )
  console.error();
  (Files)
  /* Pre-grey matter */
  /*
  const Slugs = Files.map(
    (item) => item.replace(regex, '')
  )
  return Slugs
  */
  const BlogPosts = Files.map(
    (file) => {
      const filePath = path.join(PATH, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const matterContent = matter( fileContent )
      return {
        title: matterContent.data.title,
        date: matterContent.data.date,
        subtitle: matterContent.data.subtitle,
        slug: file.replace(regex, '')
      }
    }
  )
  return BlogPosts
}

export default getPostMetadata