import "./App.css";
import Blogs from "./Blogs";
import Header from "./Header";
import Documents from "./Documents";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  const handlertiming = (time) =>{
    const newTime = readingTime + time;
    setReadingTime(newTime)
    console.log(newTime)
  }
  return (
    <>
      <Header></Header>

      <main className="md:flex">
        <Blogs handlertiming={handlertiming} handleBookmarks={handleBookmarks}></Blogs>
        <Documents handlertiming={handlertiming} bookmarks={bookmarks}></Documents>
      </main>
    </>
  );
}

export default App;
