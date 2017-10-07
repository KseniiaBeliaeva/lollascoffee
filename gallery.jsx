import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./menu-block.jsx";
import Footer from "./footer.jsx";


class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="header-background">
                    <h1 className="header" >{this.props.main.cafeName}</h1>
                </div>
                <TopMenu topMenu={this.props.main.topMenu} />
                <Footer /> 
            </div>
        );
    }
}

let main = {
    cafeName: "Lolla's coffee",
}
ReactDOM.render(<Gallery main={main} />, document.getElementById('gallery'));
