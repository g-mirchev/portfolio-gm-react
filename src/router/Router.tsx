import { BrowserRouter, Routes, Route } from 'react-router';
import GlobalLayout from 'layout/GlobalLayout';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Cat from '../pages/Cat';
import TicTacToe from '../pages/TicTacToe';
import type { FC, ReactElement } from 'react';

const Main: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Route>
    </Routes>
  )
}

export const Router: FC = (): ReactElement => {
  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  )
}

export default Router;
