import "./App.css";
import profile from "../images/profile.png";
import Blogs from "./Blogs";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="flex justify-between p-5 items-center border-b-2 mx-5">
        <h1 className="text-3xl font-bold">React Cafe</h1>
        <img src={profile} alt="" />
      </div>
      <Header></Header>
      <Blogs></Blogs>
    </>
  );
}

export default App;
