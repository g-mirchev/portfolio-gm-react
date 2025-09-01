import { BrowserRouter, Routes, Route } from 'react-router';
import GlobalLayout from 'layout/GlobalLayout';
import Home from '../pages/Home';

const Main = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  )
}

export const Router = () => {
  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  )
}

export default Router;
