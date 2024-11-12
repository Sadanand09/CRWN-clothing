import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component"

const Navigation = () => {
  return(
    <div>
      <h1>Hii I'm the Navigation page.</h1>
    </div>
  )
}

const Shop = () => {
  return(
    <div>
      <h1>Hii I'm the Shop page.</h1>
    </div>
  )
}

const App = () => {
  return (

    <Routes>
      <Route path="/home" element= {<Home />}/>
        <Route path="/shop" element={<Shop />}  />
    </Routes>
  
  );
} 

export default App;