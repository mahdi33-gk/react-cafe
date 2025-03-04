import "./App.css";
import Blogs from "./Blogs";
import Header from "./Header";
import Documents from "./Documents";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleBookmarks = () => {
    console.log('cliked in bookmark icon');
  }
  return (
    <>
      <Header></Header>

      <main className="md:flex">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Documents></Documents>
      </main>
    </>
  );
}

export default App;
