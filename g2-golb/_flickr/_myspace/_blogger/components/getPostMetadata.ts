import fs from 'fs'
import matter from "gray-matter"
import PostMetadata from "./PostMetadata"
import path from "path"

const getPostMetadata = () : PostMetadata[] => {
  const PATH = 'posts/'
  const regex = /\.(md|mdx)$/
  const Files = fs.readdirSync(PATH).filter(
    (item) => regex.test(item)
    // (item) => item.endsWith('.md') || item.endsWith('.mdx')
  )

  /* Pre-grey matter */
  /*
  const Slugs = Files.map(
    (item) => item.replace(regex, '')
  )
  return Slugs
  */
  const BlogPosts = Files.map((file) => {
    const filePath = path.join(PATH, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const matterContent = matter( fileContent )
    return {
      title: matterContent.data.title,
      date: matterContent.data.date,
      // date: new Date(matterContent.data.date),
      subtitle: matterContent.data.subtitle,
      cover: matterContent.data.cover ? 'https://i.imgur.com/' + matterContent.data.cover + '.jpeg' : '',
      slug: file.replace(regex, '')
    }
  })
  BlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // BlogPosts.sort((a, b) => new Date(a.date) - new Date(b.date))
  return BlogPosts
}

export default getPostMetadata