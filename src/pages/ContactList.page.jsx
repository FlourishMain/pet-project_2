import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";

function ContactList() {
  return (
    <div className="contact-list">
      <Header />
      <List />
      <Footer footerType={0} />
    </div>
  );
}

export default ContactList;
