class DishesSection extends React.Component { 
    render() {
        let fcategory = this.props.dishCategory;
        return (
            <div className="dishesSection">
                <h5 className="dishesSection__name">{fcategory.foodCategory}</h5>
                <ol className="dishesSection__list">
                    {fcategory.foodItems.map(dish =>
                        <li className="dishesSection__item" key={dish.food}>{dish.food}..........{dish.price}</li>
                    )}    
                </ol>
            </div>
        );
    }
}

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
                {this.props.main.foodMenu.map(category =>
                    <DishesSection dishCategory={category} key={category.foodCategory} />
                )
                }
                
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
    foodMenu: [
        {
            foodCategory: "Cold/hot drinks",
            foodItems: [
                {
                    food: "Cappucino",
                    price: "4.50", // as string because in JavaScript rational numbers are floats which are not precise enought
                    //дробные числа не точные
                },
                {
                    food: "Latte",
                    price: "4.50",
                },
                {
                    food: "Black tea",
                    price: "3.50",
                },
                {
                    food: "Mocha",
                    price: "6.50",
                },
                {
                    food: "Coke",
                    price: "5.50",
                },
                {
                    food: "Fanta",
                    price: "5.50",
                },
            ],
        },
        {
            foodCategory: "Pizza",
            foodItems: [
                {
                    food: "Margarita",
                    price: "14.50", // as string because in JavaScript rational numbers are floats which are not precise enought
                    //дробные числа не точные
                },
                {
                    food: "Aussie",
                    price: "7544.50",
                },
                {
                    food: "Meat Lovers",
                    price: "43.50",
                },
                {
                    food: "Super special",
                    price: "36.50",
                },
                {
                    food: "Country style",
                    price: "35.50",
                },
                {
                    food: "Hawainian",
                    price: "15.50",
                },]
        }
    ]//, "Pizza", "Soups", "Kids meals", "Main course", "Extras"],
};
ReactDOM.render(<Root main={main}/>, document.getElementById('container'));
