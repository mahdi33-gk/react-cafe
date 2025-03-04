import "./App.css";
import Blogs from "./Blogs";
import Header from "./Header";
import Documents from "./Documents";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>

      <main className="md:flex">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Documents bookmarks={bookmarks}></Documents>
      </main>
    </>
  );
}

export default App;
