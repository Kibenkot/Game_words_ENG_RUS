import Card from '../Card/Card'
import s from './CardsContainer.module.css'


function CardsContainer({cards_arr, change_lang, removeCard}) {
  return (
    <div className={s.cards_container}>
    
      {
       cards_arr.map(el => <Card {...el} key={el.id} change_lang={change_lang} removeCard={removeCard}/>)
       }
    </div>
  )
}


export default  CardsContainer