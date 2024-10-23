
import PropTypes from 'prop-types';
import Bookmark from '../../bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    
    return (
        <div className="w-2/3   bg-slate-700">
            <div>
                <h3 className="text-2xl text-center text-white">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center text-white m-4">Bookmarked blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
 }
export default Bookmarks;