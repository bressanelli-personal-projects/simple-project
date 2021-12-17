import Card from "../Card";
import './styles.css'

const CharactersList = ({cardList}) => {    
    console.log(cardList)
    return (

    <div className='flexBox'>

        {cardList && cardList.map((students, index) => (
            <Card key={index} characters={students}/>
        ))}        

    </div>

    )
}

export default CharactersList;