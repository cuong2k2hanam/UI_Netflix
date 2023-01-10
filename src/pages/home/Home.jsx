import { Navbar, Featured, List } from "../../components";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
