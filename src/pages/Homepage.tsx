
import CardPizza from "../sections/CardPizza";

const Homepage = () => { 
    return (
        <div style={ {height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflow:'auto'} }>
            <div className="wrapper-card-items">
               
            <CardPizza title="Margherita" description="Classic pizza with tomato sauce, mozzarella cheese, and fresh basil." />
            <CardPizza title="Margherita" description="Classic pizza with tomato sauce, mozzarella cheese, and fresh basil." />
            <CardPizza title="Margherita" description="Classic pizza with tomato sauce, mozzarella cheese, and fresh basil." />
                
            </div>
        </div>
    );
}

export default Homepage;