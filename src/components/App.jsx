import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/RegisterPage/RegisterPage';
import { Lognin } from 'pages/LogninPage/LogninPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Lognin />} />
      </Route>
    </Routes>
  );
};
