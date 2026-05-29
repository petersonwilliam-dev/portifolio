import CardContact from "../Card/CardContact"
import gmail from '../../assets/img/gmail.webp'

function Contacts() {

    const contacts = [
        {
            label: "Email",
            value: "petersondev.profissional@gmail.com",
            image: gmail,
            link: "mailto:petersondev.profissional@gmail.com"
        },
        {
            label: "LinkedIn",
            value: "Peterson William",
            image: "https://img.icons8.com/color/96/000000/linkedin.png",
            link: "https://www.linkedin.com/in/peterson-william-02ba87243/" 
        },
        {
            label: "GitHub",
            value: "petersonwsf",
            image: "https://img.icons8.com/color/96/000000/github--v1.png",
            link: "https://github.com/petersonwsf"
        }
    ]

    return (
        <section id="contacts" className="section_black">
            <h2 className="display-6 title_white">Contatos</h2>
            <div className="d-flex justify-content-center flex-wrap">
                {contacts.map((contact, index) => (
                    <CardContact key={index} contact={contact} />
                ))}
            </div>
        </section>
    )
}

export default Contacts