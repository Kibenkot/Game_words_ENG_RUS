import s from './AddCardForm.module.css'

function AddCardForm({addCard}) {

    const submit_form = event => {
        event.preventDefault();
        const { rus, eng } = event.target;
    
        const card = {
          id: Date.now(),
          rus: rus.value,
          eng: eng.value,
          lang: 'eng'
        }
    
        addCard(card)

        // console.log(card);
    
        rus.value = '';
        eng.value = '';
      }
    

  return (
    <form onSubmit={submit_form} className={s.form}>
    <input type='text' placeholder='RUS' name='rus' />
      <input type='text' placeholder='ENG' name='eng' />
      <button >Add card</button>
      
    </form>
      
  )
}

export default AddCardForm