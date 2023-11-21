import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BasketProvider } from './context/basketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
     * Provider = Sağlayıcı
     * Bütün uygulmayı sarmlıyacaj şekilde konumlandırıyoruz
     * bu sayde uygulmanın içerisindeki bütün bileşenler
     * sağlayıcının value'sunda tanımlanan değerlere erişebiliyor
     */}
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);