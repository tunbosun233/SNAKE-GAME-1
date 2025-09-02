import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Watches from './pages/Watches';
import Shoes from './pages/Shoes';
import Others from './pages/Others';
import NotFound from './pages/NotFound';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <AnimatedBackground />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/watches" component={Watches} />
          <Route path="/shoes" component={Shoes} />
          <Route path="/others" component={Others} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;