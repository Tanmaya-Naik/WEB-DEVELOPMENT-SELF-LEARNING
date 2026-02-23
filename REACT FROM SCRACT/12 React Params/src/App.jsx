import { BrowserRouter, Routes, Route, Link} from "react-router-dom"


import Github from "./Components/Github";

function App(){
  return (
      <BrowserRouter>
       <Routes>

        <Route path={"/Github/:name"} element={<Github></Github>}></Route>
       </Routes>
      </BrowserRouter>
  )
}


export default App;

// : represetn after this everythign is dynamic