
import CardPizza from "../sections/CardPizza";
import { useState } from "react";
import { Pizza } from "../models/pizza.model";
import ItemPizza from "../sections/ItemPizza";

const Homepage = () => { 

    const [pizzas, setPizzas] = useState<Pizza[]>([
        { id: 1, title: "Margherita", description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil." },
        { id: 2, title: "Pepperoni", description: "Spicy pepperoni slices with mozzarella cheese and tomato sauce." },
        { id: 3, title: "BBQ Chicken", description: "Grilled chicken with BBQ sauce, red onions, and cilantro." },
        { id: 4, title: "Veggie Supreme", description: "A mix of bell peppers, onions, mushrooms, and olives on a tomato base." }
    ]);

    const [person , setPerson] = useState<Pizza>({
        title: 'Kun Dev',
        description: 'Pizza Lover and Developer'
    });

    const handleChangePerson = (data : Pizza) => { 
        setPerson(data);
    }


    return (
        <div style={ {height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflow:'auto'} }>
            <div className="wrapper-card-items">
             {
                pizzas.map( item => <CardPizza id={item.id} title={item.title} description={item.description}/>)
             }       

             <ItemPizza title={person.title} description={person.description} handleChangePerson={handleChangePerson} />
            
                
            </div>
        </div>
    );
}

export default Homepage;