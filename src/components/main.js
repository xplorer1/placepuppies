import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 400,
            width: 600
        }
    }

    handleInput = (e) => {

        
    };

    render() {
        return (
            <article className="w3-display-container w3-center" style={{height: "100%"}}>
                <img
                    style={{WebkitUserSelect: "none", cursor: "zoomIn", backgroundColor: "hsl(0, 0%, 90%)", transition: "background-color 300ms"}}
                    src={"https://res.cloudinary.com/dvytkanrg/image/upload/w_"+ this.state.width +",h_"+ this.state.height +",c_scale/placepuppies_hz1h6e.jpg"} className="w3-display-middle image" width={this.state.width} height={this.state.height} 
                />

                <div className="w3-display-middle w3-large w3-text-white">{this.state.width + "X" + this.state.height}</div>

            </article>
        );
    }

    componentWillMount() {
        let width = this.props.match.params.width;
        let height = this.props.match.params.height;

        if(!height) height = width;

        this.setState({height: height, width: width});
    }
}

export default Main;
