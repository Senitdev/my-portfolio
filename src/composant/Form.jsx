import "./form.css";
export default function FormContact(){
    return<>
    <p>Veuillez nous contacter</p>
    <form>
    <label>Subject</label>
    <input type="text" placeholder="Subject"></input>
    <label>Email</label>
    <input type="email" placeholder="Email"></input>
    <label>Message</label>
    <textarea></textarea>
    <button className="btn_envoyer">Envoyer</button>
    </form>
    </>
}