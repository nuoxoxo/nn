import Link from "next/link";
import PostMetadata from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    // <div className="border  border-slate-400 rounded-md p-4 pb-5 self-start
    <div className="border rounded-md p-4 pb-5 
      border-[color:var(--border-color)]  
      shadow-lg shadow-[color:var(--shadow-color)] 
      bg-[color:var(--preview-color)]
      ">
      <Link href={`/posts/${props.slug}`}>
        <h3 className="text-3xl font-semibold text-[color:var(--title-color)] hover:underline">{props.title}</h3>
      </Link>
      <p className="text-xs text-[color:var(--date-color)] pt-1 ">{props.date}</p>
      <p className="text-sm text-[color:var(--title-color)] pt-1 ">{props.subtitle}</p>
      <Link href={`/posts/${props.slug}`}>
        { props.cover ? <img src={props.cover} className='mt-3'></img> : null }
      </Link>
    </div>
  )
};

export default PostPreview;
