import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./menu-block.jsx";
import Footer from "./footer.jsx";

class News extends React.Component {

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
    topMenu: [
        {
            name: "Menu",
            link: "index.html",
        },
        {
            name: "Gallery",
            link: "gallery.html",
        }, {
            name: "Career",
            link: "career.html",
        }, {
            name: "News",
            link: "news.html",
        },
        {
            name: "Contacts",
            link: "contacts.html",
        },
    ],
}
ReactDOM.render(<News main={main} />, document.getElementById('news'));
