import React from 'react'
import './ContactForm.scss';

class ContactForm extends React.Component {

  render() {
    return (
      <form className="form" action={this.props.action} method="post">
        <div className="form__input_container">
          <label>Imię</label>
          <input type="text" name="fullname"/>
        </div>
        <div className="form__input_container">
          <label>E-mail</label>
          <input type="email" name="email"/>
        </div>
        <div className="form__input_container">
          <label>Wiadomość</label>
          <textarea name="message" rows="5"></textarea>
        </div>
        <button type="submit"  className="submit_btn">Wyślij</button>
      </form>
    );
  }
}

export default ContactForm