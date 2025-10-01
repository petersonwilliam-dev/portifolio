import CardContact from "../Card/CardContact"
import whatsapp from '../../assets/img/whatsapp.png'
import instagram from '../../assets/img/instagram.png'
import gmail from '../../assets/img/gmail.webp'

function Contacts() {

    return (
        <section id="contacts">
            <h2>Contatos</h2>
            <div className="d-flex justify-content-center flex-wrap">
                <CardContact value="(81) 98623-5191" urlImage={whatsapp} />
                <CardContact value="@petersonwl_" urlImage={instagram}/>
                <CardContact value="petersondev.profissional@gmail.com" urlImage={gmail} />
            </div>
        </section>
    )
}

export default Contacts