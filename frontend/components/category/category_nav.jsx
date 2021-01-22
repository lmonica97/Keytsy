import React from 'react';

class CategoryNav extends React.Component {
    render() {
        return (
            <div className="cat-nav-block">
                <div className="cat-nav-container">
                    <ul className="cat-nav-list">
                        <a href="#" className="cat-nav-element">Keyboard & Accesories</a >
                        <a href="#" className="cat-nav-element">Jewelry & Accesories</a >
                        <a href="#" className="cat-nav-element">Clothing & Shoes</a >
                        <a href="#" className="cat-nav-element">Home & Living</a >
                        <a href="#" className="cat-nav-element">Wedding & Party</a >
                        <a href="#" className="cat-nav-element">Toys & Entertainment</a >
                        <a href="#" className="cat-nav-element">Art & Collectables</a >
                        <a href="#" className="cat-nav-element">Craft Supplies</a >
                        <a href="#"className="cat-nav-element">Keytsy Gifts & Gift Cards</a >
                    </ul>
                </div>
            </div>
        )
    }
}

export default CategoryNav;