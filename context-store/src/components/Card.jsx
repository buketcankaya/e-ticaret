// context yapısna abone olmamızı sağlayan fonksiyon
import { useContext } from 'react';
// abone olmak istediğimiz context yapısı
import { BasketContext } from '../context/basketContext';

const Card = ({ item }) => {
  // context yapısına abone olma (bizde sunduğu verilere erişim sağlar)
  const context = useContext(BasketContext);

  return (
    <div className="card py-2" style={{ width: '250px' }}>
      <div className="d-flex justify-content-center">
        <img src={item.image} height={120} />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{item.title}</h4>
        <p className="text-success">$ {item.price}</p>
        <p>{item.category}</p>

        <button
          onClick={() => context.addToBasket(item)}
          className="w-100"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;