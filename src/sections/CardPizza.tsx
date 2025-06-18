import LogoPizza from '../assets/pizza.jpg';
import { Pizza } from '../models/pizza.model';

type Props = Pizza & {
  handleRemovePizza: (id: number) => void;
};

const CardPizza = ({ id, title, description, handleRemovePizza }: Props) => {
  return (
    <div
      className="card-items"
      onClick={() => handleRemovePizza(id!)}
      style={{ cursor: 'pointer' }}
    >
      <img className="card-image-pizza" src={LogoPizza} alt="logopizza" />
      <div style={{ height: '50%', width: '100%' }}></div>
      <div className="card-content">
        <div>
          <div style={{ fontSize: '20px', fontWeight: 600, color: '#fff' }}>
            {title}
          </div>
          <div style={{ fontSize: '20px', fontWeight: 300, color: '#fff' }}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
