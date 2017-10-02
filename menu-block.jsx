let topMenu = [
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
];

class TopMenu extends React.Component {
    render() {
        let topMenuSection = topMenu.map((menuItem) =>
            <li key={menuItem.name} className="topMenuItem">
                <a href={menuItem.link} className="topMenuLink">
                    {menuItem.name}
                </a>
            </li>);
        return (
            <ul className="topMenu">
                {topMenuSection}
            </ul>
        );
    }
}
