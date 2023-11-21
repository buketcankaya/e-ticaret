import { createContext, useState } from 'react';

/*
 * Context API:
 * Uygulamda birden çok bilşenin ihtayıcı olan verilerli
 * Tek bir merkezde yönetmeye yarar
 * Verileri ve bunları değiştrimeye yarayan fonksiyonları tutar
 * Ve bu değişkenleri uygulamdaki herhangi bir bileşene doğrudan aktarabilir
 * merkezi state yönetim aracı
 */

//! Context yapısnın temelini oluşturma
export const BasketContext = createContext();

//! sdağlayıcı ve onun tuttuğu verileri tanımlama
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // sepete yen, ürün ekler
  const addToBasket = (product) => {
    // sepete bu üründen daha önce eklenmiş mi kontrol
    const found = basket.find((i) => i.id === product.id);

    if (found) {
      //  elemanın miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      // state'i güncelle
      setBasket(newBasket);
    } else {
      // miktarı 1 olarak ayarlayıp
      // ürünü sepete ekler
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  // septten ürün çıkar
  // eğerki ürün 1 den fazlysa mikrtarını azalt
  // değilse direkt kaldır
  const removeFromBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);

    if (found.amount > 1) {
      // miktarı 1 azalt
      const updated = { ...found, amount: found.amount - 1 };

      // güncel elemanı diziye aktar
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      // state'i güncelle
      setBasket(newBasket);
    } else {
      // ürünü direkt sepetten kadlır
      const filtred = basket.filter((i) => i.id !== found.id);

      // state'i güncelle
      setBasket(filtred);
    }
  };

  // tuttuğumuz verileri uygulamay aktarmaya yarar
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}