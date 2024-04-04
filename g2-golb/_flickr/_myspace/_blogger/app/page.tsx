import PostPreview from "../components/PostPreview"
import getPostMetadata from "../components/getPostMetadata"

const HomePage = () => {

  const PostMetadata = getPostMetadata()
  const PostPreviews = PostMetadata.map(
    ( blogpost ) => (
      <PostPreview key={ blogpost.slug } { ...blogpost } />
    ))

  return (
    <div className="grid grid-cols-1
      sm:grid-cols-2 gap-5 m-6">
      {/* <h2>{ PostPreviews }</h2> */}
      { PostPreviews }
    </div>
  )
}

export default HomePage