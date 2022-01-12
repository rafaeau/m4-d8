import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={MovieDetails} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
