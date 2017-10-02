// import {TopMenu} from './menu-block';

// class Socialmedia extends React.Component {
//     render() { 
//         let socialmedia = this.props.socmedia;
//         return (
           
//         );
// }
class Address extends React.Component { 
    render() {
        // let map = <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4938872.778644381!2d119.7591081942533!3d-66.48404922171159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1506906423581' style={{ width = '600', height='450', frameBorder='0', style='border:0' }} allowFullScreen/>;
        let socialmedia = this.props.contacts.map((details) => {
            let classValue = "iconImg fa fa-" + details.iconImage + "  fa-lg";
            return <i aria-hidden="true" className={classValue}
                key={details.iconName}>
                <i className="details-text">{details.text}</i>
            </i>
        }
        );
        return (
            <div className="contacts__wrap">
                {socialmedia}
            </div>
        );
    }
}


class Contacts extends React.Component {
    render() {
        return (
            <div>
                <div className="header-background">
                    <h1 className="header">{this.props.cafeName}</h1>
                </div>
                <TopMenu topMenu={this.props.topMenu} />
                <Address contacts={this.props.socialMediaDetails}/>
            </div>
        );
    }
}

let main = {
    cafeName: "Lolla's coffee",
    socialMediaDetails:
    [
        {
            iconImage: "location-arrow",
            iconName: "address",
            text: "1B Hobsons street, VIC, Geelong",
        },
        {
            iconImage: "phone",
            iconName: "phone",
            text: "1 800 800 88 883"
        },
        {
            iconImage: "facebook",
            iconName: "facebook",
            text: "https://facebook.github.io/react/docs/components-and-props.html"

        },
        {
            iconImage: "twitter",
            iconName: "twitter",
            text: "https://twitter.com/lollascoffee"

        },
        {
            iconImage: "map",
            iconName: "map",
        },
    ]
}
ReactDOM.render(<Contacts {...main} />, document.getElementById('contacts'));
