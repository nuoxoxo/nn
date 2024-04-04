import Link from "next/link";
import PostMetadata from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <h3>{props.slug}</h3>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  )
};

export default PostPreview;
