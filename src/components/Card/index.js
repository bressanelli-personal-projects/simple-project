import './styles.css'
import gryffindor from './gryffindor.png'
import hufflepuff from './hufflepuff.png'
import ravenclaw  from './ravenclaw.png'
import slytherin  from './slytherin.png'

const Card = ({characters}) => {

    return (

        <div className={
            characters.house === 'Gryffindor' ? 'studentsCards gryffindor' :       
            characters.house === 'Ravenclaw'  ?  'studentsCards ravenclaw' : 
            characters.house === 'Slytherin'  ?  'studentsCards slytherin' : 
            'studentsCards hufflepuff'}>
            
            <h2 className='charactersName'>{characters.name}</h2>                    

            <figure className='studentsImage'>
                <img className='studentsImg' src={characters.image} alt={'personagens'} />
            </figure>
            
            <figure>
                <img className='housesShilds' 
                    src={characters.house === 'Gryffindor' ? gryffindor : 
                        characters.house  === 'Ravenclaw'   ? ravenclaw : 
                        characters.house  === 'Slytherin'   ? slytherin : hufflepuff} 
                        alt={'escudos'} />
            </figure>

            <h3 className='house'>{characters.house}</h3> 
            <h3 className='actor'>{characters.actor}</h3>       

        </div>

    )
}

export default Card;