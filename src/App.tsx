import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { AuthProvider } from './Context/AuthContext';


import './App.css';


function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </AuthProvider>

  );
}

export default App;
