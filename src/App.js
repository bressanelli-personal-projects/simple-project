import './App.css';
import { useEffect, useState } from 'react';
import CharactersList from './components/CharactersList';
import Button from './components/Button';

function App() {

  const [students, setStudents] = useState([]);  
  const [cardList, setCardList] = useState([]);
  const [changeButton, setChangeButton] = useState(false);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((response) => setStudents(response))
    .catch((err) => console.log(err));
  },[]);

  
  const sortCharacter = (array) => {
    return Math.floor(Math.random() * array.length );
  }

  const cardListBuild = () => {
    
    let sortIndex = sortCharacter(students);    

    let firstCharacter = students.find((value) => {
      return value === students[sortIndex];
    });    
    
    let secondCharacter = students.filter((value) => {
      return value.house !== firstCharacter.house;
    });    

    let thirdCharacter = secondCharacter.filter((value) => {
      return value.house !== secondCharacter[0].house;
    });    

    setCardList([firstCharacter, secondCharacter[0], thirdCharacter[sortCharacter(thirdCharacter)]]);

    setChangeButton(true);
  } 

  
  return (
    <div className="App">    
      <div className="App-header">

        <h1 className='mainTitle'>Torneio Tribruxo</h1>
        <h2 className='mainSubTitle'>Alunos escolhidos</h2>      

        <Button cardListBuild={cardListBuild} changeButton={changeButton}/>

        <CharactersList cardList={cardList}/>

      </div>
    </div>
  );
}

export default App;