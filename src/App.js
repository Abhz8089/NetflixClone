import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import "./App.css";
import RowItem from "./Components/RowItem/RowItem";
import { orginals, actions ,romanceMovies,horrerMovies,trendings,comedyMovies,documentaries } from "./urls/urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner url={trendings} />
      <RowItem url={orginals} title={"Netflix Orginals"} />
      <RowItem url={actions} title={"Action"} isSmall />
      <RowItem url={romanceMovies} title={"Romance"} isSmall />
      <RowItem url={horrerMovies} title={"Horrer"} isSmall />
      <RowItem url={comedyMovies} title={"Comedy"} isSmall />
      <RowItem url={documentaries} title={"Documentary"} isSmall />
    </div>
  );
}

export default App;
