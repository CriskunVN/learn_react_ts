import { Pizza } from "../models/pizza.model";


type Props = Pizza & {
    handleChangePerson: (data: Pizza) => void;
};

const ItemPizza = ({title, description, handleChangePerson} : Props) => {
    return (
        <div>
            <div >{title}</div>
            <div >{description}</div>
            <button onClick={() => handleChangePerson({title: "Dev Kun 2025", description:"Im King"})}>Change Person</button>
        </div>
    );
 }

export default ItemPizza;