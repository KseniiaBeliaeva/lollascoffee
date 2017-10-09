import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./menu-block.jsx";
import Footer from "./footer.jsx";

class DishesSection extends React.Component { 
    render() {
        let fcategory = this.props.dishCategory;
        return (
            <div className="dishesSection">
                <h3 className="dishesSection__name">{fcategory.foodCategory}</h3>
                <ul className="dishesSection__list">
                    {fcategory.foodItems.map(dish =>
                        <li className="dishesSection__item" key={dish.food}>{dish.food}
                            <i className="dishSection__price">{dish.price}</i>
                            
                        </li>
                    )}    
                </ul>
            </div>
        );
    }
}

class Root extends React.Component {
    
    render() {
        return (
            <div>

                <div className="header-background">
                    <h1 className="header" >{this.props.main.cafeName}</h1>
                </div>        
                <TopMenu topMenu={this.props.main.topMenu}/>
                <div className="menuSection">
                {this.props.main.foodMenu.map(category =>
                    <DishesSection dishCategory={category} key={category.foodCategory} />
                    )
                    }
                </div>
                <Footer />
            </div>
            
        );
    }
}

let main = {
    cafeName: "Lolla's coffee",
    footer: "Copyright Kseniia Beliaeva 2017",
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
            name: "news",
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
        },
         {
            foodCategory: "Soups",
            foodItems:
            [
                {
                    food: "Chiken noodle",
                    price: "14.50", // as string because in JavaScript rational numbers are floats which are not precise enought
                    //дробные числа не точные
                },
                {
                    food: "Tomato",
                    price: "7544.50",
                },
                {
                    food: "Pumpkin",
                    price: "43.50",
                },
                {
                    food: "Winter",
                    price: "36.50",
                },
                {
                    food: "Aussie",
                    price: "35.50",
                },
                {
                    food: "NZ",
                    price: "15.50",
                },
            ]
         },
         {
             foodCategory: "Kids meals",
                    foodItems:
                    [
                        {
                            food: "Nuggets",
                            price: "14.50", // as string because in JavaScript rational numbers are floats which are not precise enought
                            //дробные числа не точные
                        },
                        {
                            food: "Kids pizza",
                            price: "7544.50",
                        },
                        {
                            food: "Roasted vegetables",
                            price: "43.50",
                        },
                        {
                            food: "Ice cream",
                            price: "36.50",
                        },
                        {
                            food: "Milkshake",
                            price: "35.50",
                        },
                        {
                            food: "Jucies",
                            price: "15.50",
                        },
                    ]
        },
        {
            foodCategory: "Main course",
            foodItems:
            [
                {
                    food: "Chicken rice",
                    price: "14.50", // as string because in JavaScript rational numbers are floats which are not precise enought
                    //дробные числа не точные
                },
                {
                    food: "Stake",
                    price: "7544.50",
                },
                {
                    food: "Meat plate",
                    price: "43.50",
                },
                {
                    food: "Cheese burger",
                    price: "36.50",
                },
                {
                    food: "Vegan burger",
                    price: "35.50",
                },
                {
                    food: "Chips",
                    price: "15.50",
                },
            ]
        },
            {
                foodCategory: "Extras",
                    foodItems:
                    [
                        {
                            food: "Vegetable plate",
                            price: "14.50", // as string because in JavaScript rational numbers are floats which are not precise enought
                            //дробные числа не точные
                        },
                        {
                            food: "Rice",
                            price: "7544.50",
                        },
                        {
                            food: "Chips",
                            price: "43.50",
                        },
                        {
                            food: "Pasta",
                            price: "36.50",
                        },
    
                    ]
          },
    ],
};

ReactDOM.render(<Root main={main} />, document.getElementById('root'));
