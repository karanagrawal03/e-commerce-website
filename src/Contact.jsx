import styled from'styled-components';
const Contact = () => {

  return <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5237.433689216065!2d78.36277557453091!3d17.447872468016577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d6ab0138a5%3A0x483df85637a9b809!2sDivami%20Design%20Labs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1713265526295!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xpzvovgn" className='contact-inputs' method='POST'>
          <input type="text"  placeholder='username' name='username' autoComplete='off' required/>
          <input type="email" placeholder='email' name='email' autoComplete='off' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message' autoComplete='off'></textarea>
          <input type="submit" value='send'/>
        </form>
      </div>
    </div>
  </Wrapper>
};
const Wrapper=styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}`
export default Contact;
