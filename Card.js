//EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
function Card(props){
    const title = props.title;
    const name = props.name;
    const image = props.image;
    const saleOn = true;
    
    return  <div className="col s3">
                <div className="card hoverable small">
                    <div className="card-image">
                        <img src={image} />
                    </div>
                    <div className="card-content">
                        <p>{title}</p>
                        <p>{name}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">${saleOn ? 9.99 : 59.99}</a>
                    </div>
                </div>
            </div>;
}