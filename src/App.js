import {Routes, Route} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/mainPages/Home";
import { Members } from "./pages/mainPages/Members";
import Messages from "./pages/mainPages/Messages";
import Settings from "./pages/mainPages/Settings";
import Tasks from "./pages/mainPages/Tasks";
import MobileApp from "./pages/otherPages/MobileApp";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/members' element={<Members/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/mobile-apps' element={<MobileApp/>} />
        </Routes>
        
      </Layout>
    </>
  );
}

export default App;
