
import LogoPizza from '../assets/pizza.jpg';

type Props = {
    title?: string,
    description?: string,
}

const CardPizza = ({title, description} : Props) => { 

    return (
        <div className="card-items">
                    <img className="card-image-pizza" src={LogoPizza} alt='logopizza' />
                    <div style={{height: '50%' , width: '100%'}}></div>
                    <div className="card-content">
                        <div>
                            <div style={{fontSize: '20px' , fontWeight:600 , color: '#fff'}}>{title}</div>
                            <div style={{fontSize: '20px' , fontWeight:300 , color: '#fff'}}>{description}</div>

                        </div>
                    </div>
                </div>
    );
}

export default CardPizza;