
import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import PaymentPage from './Pages/PaymentPage';
import Home from './Pages/Home';
import ExistingUser from './Pages/ExistingUser';
import NewUser from './Pages/NewUser';
function App() {
  const routes = useRoutes([
    {path:'/new' , element: <NewUser />},
    {path:'/' , element: <Home />},
    {path:'/existing' , element: <ExistingUser />}
  ])
  return routes;
  // return (
  //   <Routes>
  //     <Route path='/' exact element={HomePage} />
  //     <Route path='/search' exact element={SearchPage}/>
  //   </Routes>
  // );
}
function AppWrapper() {
  return(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  )
}
export default AppWrapper;
