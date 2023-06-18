import CardsContainer from "../CardsContainer/CardsContainer"
import AddCardForm from "../AddCardForm/AddCardForm"
import{useState, useEffect} from "react"
import { words } from "../../data/words"
import Triggers from "../Triggers/Triggers"


function App() {

  let [cards, setCards]=useState(words)

  const addCard = (obj) =>setCards([...cards, obj])

  const changLangEng = () =>{
    let newCards= cards.map(el =>({...el, lang:el.lang = 'eng'}))
    setCards(newCards)
  }

  const changLangRus = () =>{
    let newCards= cards.map(el =>({...el, lang:el.lang = 'rus'}))
    setCards(newCards)
  }

  const change_lang = id => {
    setCards(cards.map(el => {
      if(el.id === id){
        el.lang = el.lang === 'eng' ? 'rus' : 'eng'
      }
      return el
    }))
  }


  const removeCard = (id) =>{
    let newCards = cards.filter(el => el.id !== id)
    setCards(newCards)
  }

//============
useEffect(()=>{
  let cardsItem = JSON.parse(localStorage.getItem('cards')) || cards  
  setCards(cardsItem) // достаем из LocalStorage
}, [])

useEffect(() => {
  localStorage.setItem('cards', JSON.stringify(cards))
},[cards]) // кладем в LocalStorage



  return (
    <div>
      <AddCardForm addCard={addCard}/>
      <CardsContainer cards_arr={cards} change_lang={change_lang} removeCard = {removeCard}/> 
      <Triggers changLangEng={changLangEng} changLangRus={changLangRus}/>
    </div>
  )
}

export default App

// 3. Используя массив words в компоненте CardsContainer для каждого слова создать карточку Card. => вывести все слова на русском языке на экран
//4. Если у объекта в lang указано eng, то отобразить слово на английском. А если в lang rus - то на русском
// 5. Стилизовать карточки

//6. Создать компонент формы (два инпута и кнопка), которая собирает рус и англ слово, формирует из этих данных объект и выводит объект в консоль
// 7. Стилизовать форму
// 9. Создать компонент Triggers с двумя кнопками ENG и RUS, добавить этот компонент в App
// 10. Стилизовать кнопки

// 11. *Реализовать переворот карточек на рус и англ при нажатии на кнопки
// 12. Реализовать переворот карточек на противоположную строну при клике на нее
// 13. Реализовать удаление карточки при двойной клике на нее
// 14. Реализовать сохранение изменений состояния в браузере (localStorage)
