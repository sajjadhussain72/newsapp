import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
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
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.5171285465008!2d74.3507992752461!3d35.90984027251421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e649646659c301%3A0xc3b4d43f951e684!2sZS%20Plaza!5e0!3m2!1sen!2s!4v1691579339425!5m2!1sen!2s"
         width="100%"
         height="400"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         title="Google Maps Embed"
       ></iframe>


      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xoqojngj"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input className=" py-2" type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;