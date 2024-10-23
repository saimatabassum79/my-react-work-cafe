
import './App.css'
import Header from './components/header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmark'
import { useState } from 'react'
function App() {
 const [bookmarks,setBookmarks] = useState([]);
 const [readingTime, setReadingTime]=useState(0);


 const handleAddToBookmark = (blog)=>{
    const newBookmark = [...bookmarks,blog];
    setBookmarks(newBookmark)
 }

 const handleMarkAsRead = (time)=>{
  const newMarkAsRead = readingTime + time;
  setReadingTime(newMarkAsRead)
 }

  return (
    <>
      <Header></Header>
    <div className='flex w-8/12 mx-auto gap-3'>
    <Blogs handleMarkAsRead={handleMarkAsRead}
    
    handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
      
    </>
  )
}

export default App
