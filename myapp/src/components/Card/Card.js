import s from './Card.module.css'

function Card({rus, eng, lang, change_lang, id, removeCard}) {

    const word = lang === 'eng' ? eng : rus
    
    
    const card_style = {
        color: lang === 'rus' ? 'rgb(41, 128, 185)' : 'white' ,
        backgroundColor: lang === 'rus' ? 'white' : 'rgb(41, 128, 185)'
    }
    

  return (
    <div onClick={()=>change_lang(id)}
        onDoubleClick={() => removeCard(id)}
          className={s.wordCard} 
          style={card_style}>
       {word}
    </div>
  )
}

export default Card