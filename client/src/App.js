import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FormPage from './form-page';
import LandingPage from './landing-page';
import PostView from './postview';

function App() {
  return (
  <>
     <BrowserRouter>
      <Routes>
       <Route exact path="/" element={<LandingPage/>}></Route>
       <Route path="/postview" element={<PostView/>}></Route>
       <Route path="/formpage" element={<FormPage/>}></Route>
      </Routes>
      
     </BrowserRouter>
  </>
     
  );
}

export default App;