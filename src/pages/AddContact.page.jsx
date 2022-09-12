import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";

function ContactList() {
  return (
    <div className="contact-list">
      <Header />
      <ContactForm />
      <Footer footerType={1} />
    </div>
  );
}

export default ContactList;
