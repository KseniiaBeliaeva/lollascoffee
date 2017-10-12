import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./menu-block.jsx";
import Footer from "./footer.jsx";

class GalleryPhotos extends React.Component { 
    render() { 
        let imageGal = this.props.galleryImage;
        return (
            <div className="gallery__item">
                <img className="gallery" src={imageGal.image} alt={imageGal.alt} />
                </div>
        );
    }
}

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="header-background">
                    <h1 className="header" >{this.props.main.cafeName}</h1>
                </div>
                <TopMenu topMenu={this.props.main.topMenu} />
                <div className="gallery__wrap">{this.props.main.galleryImgs.map(photo => 
                    <GalleryPhotos galleryImage={photo} key={photo.image} />)}
                    </div>
                <Footer /> 
            </div>
        );
    }
}

let main = {
    cafeName: "Lolla's coffee",
    galleryImgs: [
        {
           image: "img/cafe1.jpg",
           alt: "cup of coffee and a pot",
        },
        {
            image: "img/cafe2.jpg",
            alt: "cafe street view",
        },
        {
            image: "img/cafe3.jpg",
            alt: "business lunch, 2 persons",
        },
        {
            image: "img/cafe4.jpg",
            alt: "breakfast",
        },
        {
            image: "img/cafe5.jpg",
            alt: "wedding table",
        },
]    
}
ReactDOM.render(<Gallery main={main} />, document.getElementById('gallery'));
