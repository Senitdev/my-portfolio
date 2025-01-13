import '../../src/App.css';

export default function Header(){
    const menu=[
        {
          id:1,
          libelle:"About",
          link:"/about"
        },
        {
          id:2,
          libelle:"Blog",
          link:"/blog"
        },
        {
          id:3,
          libelle:"PortFolio",
          link:"/portfolio"
        },
        {
          id:4,
          libelle:"Contact",
          link:"/contact"
        }
    ]
    return<>
   <div className="App">
     <div className='menu'>
    <ul style={{ display:"flex",flexDirection:"row",height:"30px",color:"black", justifyContent:"space-between", width:"25%"}}>
      {
  menu.map((elt)=>(
    <li key={elt.id} className='info_menu'><a href={elt.link}>{elt.libelle}</a></li>
  ))
      }
    </ul>
    </div>
    </div>
    </>
}