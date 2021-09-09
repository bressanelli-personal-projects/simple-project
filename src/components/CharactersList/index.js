import Card from "../Card";
import './styles.css'

const CharactersList = ({cardList}) => {    

    return (

    <div className='flexBox'>

        {cardList.map((students, index) => (
            <Card key={index} characters={students}/>
        ))}        

    </div> 

    )
}

export default CharactersList;