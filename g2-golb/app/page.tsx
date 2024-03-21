import PostPreview from "../components/PostPreview"
import getPostMetadata from "../components/getPostMetadata"
import "./page.css"

const HomePage = () => {

  const PostMetadata = getPostMetadata()
  const PostPreviews = PostMetadata.map(
    ( blogpost ) => (
      <PostPreview key={ blogpost.slug } { ...blogpost } />
    ))

  return (
    <>
      {/* <h1>Hello, World!</h1> */}
      <div>
        <h2>{ PostPreviews }</h2>
      </div>
    </>
  )
}

export default HomePage