import React from 'react'

import Image from 'next/image';

const ToysData = [
  { id: 1, name: "Bears", price: 700, description: "Soft Bear", image: "/bears.jpeg" },
  { id: 2, name: "Parrot", price: 1000, description: "Talking Parrot", image: "/parrots.jpeg" },
  { id: 3, name: "Train", price: 500, description: "Kids train", image: "/ewtrain.jpeg" },
  { id: 4, name: "Monkey", price: 900, description: "Jumping & Dancing monkey", image: "/monkeys.jpeg" },
  { id: 5, name: "Doll", price: 500, description: "Cute Doll", image: "/dollss.jpeg" },
  { id: 6, name: "Car", price: 500, description: "Robot Car", image: "/rcarss.jpeg" }
];

const Toys = () => {
  return (
    <div>
      <div className="Toys">
        {ToysData.map((toy) => (
          <div key={toy.id} className="toy-card">
            <Image 
              src={toy.image} 
              alt={toy.name} 
              width={300} // Specify the width of the image
              height={300} // Specify the height of the image
            />
            <h3>{toy.name}</h3>
            <p>{toy.description}</p>
            <div className="price">${toy.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toys;
