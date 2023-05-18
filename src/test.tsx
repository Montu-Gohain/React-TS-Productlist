import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
};

type PriceRange = {
  label: string;
  min: number;
  max: number;
};

const CheckboxList = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product 1", price: 10, brand: "Brand 1" },
    { id: 2, name: "Product 2", price: 20, brand: "Brand 2" },
    { id: 3, name: "Product 3", price: 30, brand: "Brand 1" },
    // Add more products as needed
  ]);

  const priceRanges: PriceRange[] = [
    { label: "$10 - $19", min: 10, max: 19 },
    { label: "$20 - $29", min: 20, max: 29 },
    { label: "$30 - $39", min: 30, max: 39 },
    // Add more price ranges as needed
  ];

  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([]);

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedPriceRanges([...selectedPriceRanges, value]);
    } else {
      setSelectedPriceRanges(
        selectedPriceRanges.filter((range) => range !== value)
      );
    }
  };

  const filteredProducts = products.filter((product) => {
    if (selectedPriceRanges.length === 0) {
      return true; // No price range selected, so include all products
    } else {
      return selectedPriceRanges.some(
        (range) =>
          product.price >= priceRanges[range].min &&
          product.price <= priceRanges[range].max
      );
    }
  });

  return (
    <div>
      {priceRanges.map((range, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={index.toString()}
            onChange={handlePriceRangeChange}
          />
          {range.label}
        </div>
      ))}

      <h2>Filtered Products:</h2>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Brand: {product.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
