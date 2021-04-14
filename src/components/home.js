import React from 'react';

var myIndex = 0;

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

                    <h1 className="">How to use PlacePuppies</h1>

                    <p>Just specify the image size after our URL (https://via.placeholder.com/) and you’ll get a placeholder image. So the image URL should look this:-
                    </p>

                    <p><code>https://via.placeholder.com<mark><b>/150</b></mark></code></p>

                    <p>You can use the images in your HTML or CSS, like this:</p>

                    <p><code>&lt;a href="https://placeholder.com"&gt;&lt;img src="https://via.placeholder.com/150"&gt;&lt;/a&gt;</code></p>

                    <p>Specify the width first, then height. Height is optional: if no height is specified, your placeholder image will be a square. So this example…</p>

                    <p><code>https://via.placeholder.com<em><mark>/150</mark></em></code></p>

                    <p>…generates a 150 pixel square dummy image:-</p>

                </section>
            </article>
        );
    }

    componentWillMount() {}
}

export default Home;
