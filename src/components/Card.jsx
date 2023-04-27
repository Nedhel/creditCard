import '../styles/Card.css'
import chip from '../assets/chip.png'
export function Card({cvv}){
    return(
        <div className="cardContainer">
            <div className={cvv===0?'card':'card active'}>
                <div className="side front">
                    <div className='title'>
                        <h2 className='bankName'>Tu Banco</h2>
                        <p className='category'>Credito Oro</p>
                    </div>
                    <img src={chip} alt="chip de tarjeta" className='chip' />
                    <div className='cardNumber'>
                        <p>1 1 1 1</p>
                        <p>2 2 2 2</p>
                        <p>3 3 3 3</p>
                        <p>4 4 4 4</p>
                    </div>
                    <h1 className='entity'>VISA</h1>
                </div>
                <div className="side back">
                    <div className='magneticLine'></div>
                    <div className='signContainer'>
                        <div className='signSpace'></div>
                        <input type='text' className='cvv' value={cvv===0?'':cvv} disabled></input>
                    </div>
                    <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel porttitor diam. Etiam accumsan malesuada libero, egestas accumsan arcu vestibulum ut.</p>
                </div>
            </div>                     
        </div>
    )
}