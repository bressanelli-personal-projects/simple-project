import './styles.css'

const Button = ({cardListBuild, changeButton}) => {
    
    return (

        <>
            {!changeButton && <button className='firstSort' onClick={() => cardListBuild()}>sorteie seus campeões</button>}

            {changeButton &&  <button className='otherSort' onClick={() => cardListBuild()}>faça uma nova escolha</button>}
        </>        

    )

}

export default Button;