import React from 'react';

const ProductList = ({products} ) => {
  return (
    <ul className='productListUl'>
      {products.map((product) => (
        <li key={product.id} className='listEle'>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;