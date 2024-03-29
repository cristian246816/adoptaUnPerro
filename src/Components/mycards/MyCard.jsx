import Tags from "../tags/Tags";
const MyCard = (props) => {
    return (
         <>
            <div className="card" >
                    <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                </div>
                <Tags texto="perrito" color="badge text-bg-primary"/>
            </div>
          </>
    );
};

export default MyCard;