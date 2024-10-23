import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
   const {title, cover,author_img,author,reading_time, posted_date,hashing_tag } =blog;
    return (
        <div className=''>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex text-center gap-3'>
                    <img className='w-11 h-11'  src={author_img} alt="" />
                    <div>
                        <h4 className='text-[17px]'>{author}</h4>
                       <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                   <span>{reading_time} min read</span>
                   <button onClick={()=>handleAddToBookmark(blog)}  className='m-2 text-2xl' ><IoBookmarks></IoBookmarks></button>
                   
                </div>

            </div>

            <h2 className='text-4xl my-2'> {title}</h2>
            <p>{hashing_tag}</p>
            <button className='text-blue-950 underline font-bold' onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
}

 Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
 }


export default Blog;