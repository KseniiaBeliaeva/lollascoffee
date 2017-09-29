
class TopMenu extends React.Component {
    render() {
        let topMenuSection = this.props.topMenu.map((menuItem) =>
            <li key={menuItem.name} className="topMenuItem">
                <a href={menuItem.link}>{menuItem.name}</a>
            </li>);
        return (
            <ul className="topMenu">
                {topMenuSection}
            </ul>
        );
    }
}

class Root extends React.Component {

    render() {

        return (
            <div>
                <h1 className="header" >{this.props.main.cafeName}</h1>
                <TopMenu topMenu={this.props.main.topMenu} />
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
ReactDOM.render(<Root main={main} />, document.getElementById('career'));
