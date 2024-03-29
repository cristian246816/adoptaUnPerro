import MyCard from "../mycards/MyCard";

const Grilla =()=> {
    return(
            <div className="container"> 
                <div className="row">
                    <div className="col-md-4">
                        <MyCard img="https://picsum.photos/id/237/200/200" nombre="Bartolo" descripcion="Lleno de energia y listo para jugar. Dale a Bartolo el hogar amoroso y cariñoso que se merece!"/>
                   </div>
                    <div className="col-md-4">
                        <MyCard img="https://picsum.photos/id/236/200/200" nombre="Messi" descripcion="Es jugueton, amigable y se lleva bien con niños y otros animales. Haz de Messi parte de tu familia hoy mismo!"/>
                    </div>
                    <div className="col-md-4">
                        <MyCard img="https://picsum.photos/id/231/200/200" nombre="Gohan" descripcion="Un perro de tamaño mediano con un corazon gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"/>
                    </div>
                    <div className="col-md-4">
                        <MyCard img="https://picsum.photos/id/250/200/200" nombre="Princesa" descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. Ayuda a Princesa a encontrar su final feliz!"/>
                    </div>
                </div>
            </div>        
    )
}

export default Grilla;