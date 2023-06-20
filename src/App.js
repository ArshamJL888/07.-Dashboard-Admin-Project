import routes from './routes';
import { useRoutes } from 'react-router-dom';
import TopBar from './Components/TopBar/TopBar';
import SideBar from './Components/SideBar/SideBar';
import './App.css';

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <TopBar />  
      <div className='main-container'>
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
