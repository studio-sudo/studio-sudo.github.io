import { Button } from '../../../renderer/Button';
import './ContactCard.scss';


export function ContactCard() {
  return (
    <div id="contact" className="stripe contact">
      <div className='row g-0'>
        <h2 className='centered'>Kontakt</h2>
        <div className="lead-text centered">Skontaktuj się z nami</div>
        <div className='content-text centered'>Jeśli masz jakieś pytania odnośnie wykonania projektu, skontaktuj się z nami. Odpowiemy najszybciej jak to możliwe.</div>
      </div>
      <iframe name="hiddenFrame" width="0" height="0" style={{display: 'none', border: 'none'}}></iframe>
      <form className='limited-contact-form' action="https://usebasin.com/f/0d53809b0589" method="POST" target="hiddenFrame" encType="multipart/form-data">
        <div className='row g-0'>
          <div className='col-md-6 col-12 px-4'>
            <input placeholder='Imię' name="name" type="text" className='form-control' required></input>
          </div>
          <div className='col-md-6 col-12 px-4'>
            <input placeholder='Adres e-mail' name="email" type="email" className='form-control' required></input>
          </div>
        </div>
        <div className='row g-0'>
          <div className='col-12 px-4'>
            <textarea placeholder='Treść' name="content" rows={10} className='form-control' required/>
          </div>
        </div>
        <div className='row g-0'>
          <div className='col-12 px-4 pt-4'>
            <Button kind="submit" label="Wyślij" />
          </div>
        </div>
      </form>
    </div>
  )
}