import "./App.css";
import Blogs from "./Blogs";
import Header from "./Header";
import Documents from "./Documents";

function App() {
  return (
    <>
      <Header></Header>

      <main className="md:flex">
        <Blogs></Blogs>
        <Documents></Documents>
      </main>
    </>
  );
}

export default App;
