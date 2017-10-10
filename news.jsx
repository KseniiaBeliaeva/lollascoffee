import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./menu-block.jsx";
import Footer from "./footer.jsx";


class HappyHours extends React.Component {
    render() {
        let deal = this.props.superDeal;
        return (
            <div className="news__section">
                        <h5>{deal.header}</h5>
                        <img className="news__gif" src={deal.img} />
                        <p>{deal.specialDeal}</p>
            </div>    
        );
    }
}


class News extends React.Component {

    render() {

        return (
            <div>
                <div className="header-background">
                    <h1 className="header" >{this.props.main.cafeName}</h1>
                </div>    
                <TopMenu topMenu={this.props.main.topMenu} />
                <h1>{this.props.main.mainHeader}</h1>
                {this.props.main.happyHourss.map(deal => 
                    <HappyHours superDeal={deal} key={deal.img}/>
                )}

                <Footer />
             </div>
        );
    }
}

let main = {
    cafeName: "Lolla's coffee",
    mainHeader: "Check out our super specials!",
    happyHourss: [
        {
        header: "Free drinks 8.30pm - 9.30pm*",
        img: "img/happyhours.gif",
        specialDeal: "Sed ut perspiciatis unde omnis iste natus error" +
        "sit voluptatem accusantium doloremque laudantium, totam rem " +
        "aperiam, eaque ipsa quae ab illo inventore veritatis et quasi " +
        "architecto beatae vitae dicta sunt explicabo",
        },
        {
            header: "Free taco for orderd over $50",
            img: "img/happyhours2.gif",
            specialDeal: "Sed ut perspiciatis unde omnis iste natus error" +
            "sit voluptatem accusantium doloremque laudantium, totam rem " +
            "aperiam, eaque ipsa quae ab illo inventore veritatis et quasi " +
            "architecto beatae vitae dicta sunt explicabo",
        },
    ],
}
ReactDOM.render(<News main={main} />, document.getElementById('news'));
