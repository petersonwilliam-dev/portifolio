import CardContact from "../Card/CardContact"

function Contacts() {

    return (
        <section id="contacts">
            <h2>Contatos</h2>
            <div className="d-flex justify-content-center flex-wrap">
                <CardContact value="(81) 98623-5191" urlImage="/src/assets/img/whatsapp.png" />
                <CardContact value="@petersonwl_" urlImage="/src/assets/img/instagram.png"/>
                <CardContact value="petersondev.profissional@gmail.com" urlImage="/src/assets/img/gmail.webp"/>
            </div>
        </section>
    )
}

export default Contacts