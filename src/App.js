import './categories.styles.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/sign-in/sign-in';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='signin' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
