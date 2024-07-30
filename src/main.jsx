

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from './app/store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <div className=''>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
  // </Provider>
)
