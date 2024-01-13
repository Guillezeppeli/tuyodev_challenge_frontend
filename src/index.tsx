// src/index.tsx

import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './redux/store'; // Import your Redux store
import App from './pages/Home/App';
import { Header } from './components/Header';
import { NotFound } from './pages/_404';
import './style.css';

export function Main() {
  return (
    <Provider store={store}> {/* Wrap your components with Provider */}
      <LocationProvider>
        <Header />
        <main>
          <Router>
            <Route path="/" component={App} />
            <Route default component={NotFound} />
          </Router>
        </main>
      </LocationProvider>
    </Provider>
  );
}

render(<Main />, document.getElementById('app'));


