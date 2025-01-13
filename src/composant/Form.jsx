export default function FormContact(){
    return<>
    <p>Veuillez nous contacter</p>
    <label>Subject</label>
    <input type="text" placeholder="Subject"></input>
    <label>Email</label>
    <input type="email" placeholder="Email"></input>
    <label>Message</label>
    <textarea cols={5} rows={3}></textarea>
    <button className="btn_envoyer">Envoyer</button>
    </>
}