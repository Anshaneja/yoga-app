
import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PaymentPage from './Pages/PaymentPage';
function App() {
  const routes = useRoutes([
    {path:'/' , element: <HomePage />},
    {path:'/payment', element: <PaymentPage />}
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
