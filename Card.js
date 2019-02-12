const title = '50 Ways To Eat Your Lover';
const name = 'Paul Simon of the Lambs';
const saleOn = true;

const markup = <div className="row">
                    <div className="col s2">
                        <div className="card hoverable small">
                            <div className="card-image">
                                <img src="http://lorempixel.com/400/400/food/" />
                            </div>
                            <div className="card-content">
                                <p>{title}</p>
                                <p>{name}</p>
                            </div>
                            <div className="card-action">
                                <a href="#">${saleOn ? 9.99 : 59.99}</a>
                            </div>
                        </div>
                    </div>    
                </div>;