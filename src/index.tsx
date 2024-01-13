// src/index.tsx

import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import App from './pages/Home/App'; // Update the import path
import { Header } from './components/Header';
import { NotFound } from './pages/_404';
import './style.css';

export function Main() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={App} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<Main />, document.getElementById('app'));

