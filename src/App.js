import './App.css';
import { Footer } from './components/shared/Footer/Footer';
import { Header } from './components/shared/Header/Header';
import { Home } from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import { FilmeAdd } from './pages/FilmeAdd/FilmeAdd';
import { FilmeView } from './pages/FilmeView/FilmeView';
import { Login } from './pages/Login/Login';
import { FilmeUpdate } from './pages/FilmeUpdate/FilmeUpdate';


export default function App() {


  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/filme/add' component={FilmeAdd} />
        <Route path='/filme/findById/:id' component={FilmeView} />
        <Route path='/login' component={Login} />
        <Route path='/filme/update/:id' component={FilmeUpdate} />
      </Switch>
      <Footer />
    </div>
  )
}