import s from './Triggers.module.css'

function Triggers({changLangEng, changLangRus}) {
  return (
    <div className={s.triggers}>
        <button onClick={changLangEng}>ENG</button>
        <button onClick={changLangRus}>RUS</button>
    </div>
  )
}

export default Triggers