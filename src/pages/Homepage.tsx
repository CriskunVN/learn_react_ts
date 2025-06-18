import CardPizza from '../sections/CardPizza';
import { useState } from 'react';
import { Pizza } from '../models/pizza.model';
import ItemPizza from '../sections/ItemPizza';

const Homepage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    {
      id: 1,
      title: 'Margherita',
      description:
        'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
    },
    {
      id: 2,
      title: 'Pepperoni',
      description:
        'Spicy pepperoni slices with mozzarella cheese and tomato sauce.',
    },
    {
      id: 3,
      title: 'BBQ Chicken',
      description: 'Grilled chicken with BBQ sauce, red onions, and cilantro.',
    },
    {
      id: 4,
      title: 'Veggie Supreme',
      description:
        'A mix of bell peppers, onions, mushrooms, and olives on a tomato base.',
    },
  ]);

  const handleRemovePizza = (id: number) => {
    const indexPizza = pizzas.findIndex((item) => item.id === id);
    let newPizzas = [...pizzas];
    newPizzas.splice(indexPizza, 1);
    setPizzas(newPizzas);
  };

  return (
    <div
      style={{
        height: 'calc(100vh - 309px)',
        padding: '4rem 4rem',
        overflow: 'auto',
      }}
    >
      <div className="wrapper-card-items">
        {pizzas.map((item) => (
          <CardPizza
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            handleRemovePizza={handleRemovePizza}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
