import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./menu-block.jsx";
import Footer from "./footer.jsx";

class Vacancy extends React.Component { 
    render() { 
        let aVacancies = this.props.avaliableVacancy;
        return (
            <div className="vacancy__wrap">
                <h4 className="vacancy__name">{aVacancies.jobname}</h4>
                <img className="vacancy__img" src={aVacancies.img} />
                <i className="vacancy__skills">Skills & Experience:</i>
                <p className="vacancy__description">{aVacancies.description}</p>
            </div>
        );
    }
}


class Career extends React.Component {

    render() {

        return (
            <div>
                <div className="header-background">
                    <h1 className="header" >{this.props.main.cafeName}</h1>
                </div>     
                <TopMenu topMenu={this.props.main.topMenu} />
                <div className="vacancy__container">
                {this.props.main.job.map(position => 
                    <Vacancy avaliableVacancy={position} key={position.jobname} />
                    )}
                </div>    
                <Footer />
            </div>
        );
    }
}

let main = {
    cafeName: "Lolla's coffee",
    
    job:
    [
        {
            jobname: "Barmen",
            img: "img/job1.jpg",
            description: "As commis barman you will be" +
            "delivering a smooth and exceptional service," +
            "you will have a passion for food and beverage," +
            "the guest experience and sharing your knowledge" +
            "with your team. As part of a talented team you will" +
            "work closely with the Bar Manager to continue to grow" +
            "the reputation of our Bar.A strong knowledge of wine," +
            "spirits and cocktails is essential for this role as is" +
            "a commitment to delivering exceptional guest service;" +
            "leading by example and developing skills and knowledge" +
            "within your team. You will be an excellent and confident" +
            "communicator with excellent interpersonal and communication" +
            "skills, and have a natural ability to motivate the team around" +
            "you.Experience of training would be beneficial within this role" +
            "and ideally you will have experience within a similar role in a" +
            "quality dining environment.To be considered for this role you" +
            " must be highly motivated, ideally you will have worked in a similar role.",
        },
        {
            jobname: "Baker",
            img: "img/job2.jpg",
            description: "We are seeking people who have: Previous Supervisory" +
            "experience, preferably within a festival/ event environment.A natural" +
            "flair for customer service and are comfortable working in a busy environment" +
            ".A current Victorian Responsible Service of Alcohol Certificate",
        },
        {
            jobname: "Barista",
            img: "img/job3.jpg",
            description: "The right person will:Have a passion for great coffee &" +
            "food.Be part of a team who help each other to deliver Have a focus on" +
            "quality.Always be learning & developing ideally have previous specialty" +
            "coffee experience be available weekends.Full Time and Part Time positions" +
            "available Breakfast and Lunch Tuesday - Sunday. ",
        },
    ],
}
ReactDOM.render(<Career main={main} />, document.getElementById('career'));
