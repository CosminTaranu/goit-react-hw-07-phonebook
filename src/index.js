import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {store} from './redux/store';

import {Provider as ReduxProvider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
 <ReduxProvider store={store}>
  
  <App />

 </ReduxProvider>
);
