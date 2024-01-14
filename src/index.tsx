// src/index.tsx

import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './redux/store'; // Import your Redux store
import App from './pages/Home/App';
import { NotFound } from './pages/_404';
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme.js'
import './style.css';

export function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}> {/* Wrap your components with Provider */}
        <LocationProvider>
          <main>
            <Router>
              <Route path="/" component={App} />
              <Route default component={NotFound} />
            </Router>
          </main>
        </LocationProvider>
      </Provider>
    </ThemeProvider>
  );
}

render(<Main />, document.getElementById('app'));


