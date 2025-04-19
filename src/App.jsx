import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  console.log(classes.App);

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/coins/:id" element={<Coinpage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
