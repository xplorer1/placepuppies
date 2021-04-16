import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <article className="" style={{backgroundColor: "beige"}}>

                <section>
                    <img className="mySlides" src="/img/puppies.png" style={{width: "100%"}} />
                    <div className="w3-display-middle w3-center">
                        <span className="" style={{fontSize: "200px", color: "brown"}}>The PlacePuppies</span>
                    </div>
                </section>

                <section className="w3-container w3-content" style={{marginTop: "2rem"}}>
                    <h2 className="w3-wide">Place Puppies</h2>
                    <p className="w3-opacity"><i>The Free Puppy Image Placeholder Service Favoured By Developers.</i></p>
                    <p className="w3-justify">PlacePuppies generates custom puppies image placeholders on the fly.</p>

                    <img style={{marginRight: "1rem"}} src="https://res.cloudinary.com/dvytkanrg/image/upload/w_150,h_150,c_scale/placepuppies_hz1h6e.jpg" />

                    <img style={{marginRight: "1rem"}} src="https://res.cloudinary.com/dvytkanrg/image/upload/w_300,h_150,c_scale/placepuppies_hz1h6e.jpg" />

                    <h1 className="">How to use PlacePuppies</h1>

                    <p>Just specify the image size after our URL (https://place-puppies.herokuapp.com/) and you’ll get a placeholder image. So the image URL should look this:-
                    </p>

                    <p><code>https://place-puppies.herokuapp.com<mark><b>/150/150</b></mark></code></p>

                    <p>You can use the images in your HTML or CSS, like this:</p>

                    <p><code>img src="https://place-puppies.herokuapp.com/150/150"</code></p>

                    <p><code>img src="https://place-puppies.herokuapp.com/300/150"</code></p>

                    <p><code>img src="https://place-puppies.herokuapp.com/150/300"</code></p>

                    <p>Specify the width first, then height. Height is optional: if no height is specified, your placeholder image will be a square. So this example…</p>

                    <p><code>https://place-puppies.herokuapp.com<em><mark>/150</mark></em></code></p>

                    <p>…generates a 150 pixel square dummy image:-</p>

                    <img style={{marginBottom: "5rem"}} src="https://res.cloudinary.com/dvytkanrg/image/upload/w_150,h_150,c_scale/placepuppies_hz1h6e.jpg" />

                </section>
            </article>
        );
    }

    componentWillMount() {}
}

export default Home;
