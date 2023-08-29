import { Button } from '../../../components/Button';
import './ContactCard.scss';


export function ContactCard() {
  return (
    <div id="contact" className="stripe contact">
      <div className='row g-0'>
        <h2 className='centered'>Kontakt</h2>
        <div className="lead-text centered">Skontaktuj się z nami</div>
        <div className='content-text centered'>Jeśli masz jakieś pytania bla bla bla bla bla skontaktuj się z nami. Odpowiemy najszybciej jak to możliwe.</div>
      </div>
      <div className='limited-contact-form'>
        <div className='row g-0'>
          <div className='col-md-6 col-12 px-4'>
            <input placeholder='Imię' type="text" className='form-control'></input>
          </div>
          <div className='col-md-6 col-12 px-4'>
            <input placeholder='Adres e-mail' type="text" className='form-control'></input>
          </div>
        </div>
        <div className='row g-0'>
          <div className='col-12 px-4'>
            <input placeholder='Tytuł' type="text" className='form-control'></input>
          </div>
        </div>
        <div className='row g-0'>
          <div className='col-12 px-4'>
            <textarea placeholder='Treść' rows={10} className='form-control' />
          </div>
        </div>
        <div className='row g-0'>
          <div className='col-12 px-4 pt-4'>
            <Button label="Wyślij" />
          </div>
        </div>
      </div>
    </div>
  )
}