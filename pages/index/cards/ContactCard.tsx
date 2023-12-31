import { Button } from '../../../renderer/Button';
import './ContactCard.scss';


export function ContactCard() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    document.querySelectorAll("form.limited-contact-form input")
        .forEach(i => i.setAttribute('disabled', ''));
    const button = document.getElementById("contact-button")!;
    button.setAttribute('disabled', '');
    button.style.pointerEvents = "none";
    button.innerText = "Wysyłanie ...";

    const formData = new FormData(e.currentTarget);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", e.currentTarget.action, true);
    xhr.send(formData);
    xhr.onload = function() {
      if (xhr.status === 200) {
        button.innerText = "Dziękujemy! Postaramy się odpowiedzieć w przeciągu jednego dnia roboczego.";
      } else {
        button.style.pointerEvents = "unset";
        button.innerText = "Wystąpił jakiś błąd! Jeśli możesz, spróbuj ponownie za chwilę.";
        document.querySelectorAll("form.limited-contact-form input")
            .forEach(i => i.removeAttribute('disabled'));
      }
    };
  }

  return (
    <div id="contact" className="stripe contact">
      <div className='row g-0'>
        <h2 className='centered'>Kontakt</h2>
        <div className="lead-text centered">Skontaktuj się z nami</div>
        <div className='content-text centered'>Jeśli masz jakieś pytania odnośnie wykonania projektu, skontaktuj się z nami. Odpowiemy najszybciej jak to możliwe.</div>
      </div>
      <form className='limited-contact-form' onSubmit={submitForm} action="https://usebasin.com/f/0d53809b0589" method="POST" encType="multipart/form-data">
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
            <Button id="contact-button" kind="submit" label="Wyślij" />
          </div>
        </div>
      </form>
    </div>
  )
}