import React from 'react';

class Splash extends React.Component {
    render() {
        // console.log('splashcontent')
        return (
            <div className="splash">
                <div className="intro-block">
                    <h2 className="intro-header">See what's trending for Valentine's Day on Keytsy.</h2>
                    <div className="intro-container">
                        <ul className="intro-container-list">
                            <li className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.roses} />
                                </div>
                                <p>Roses<img className="arrow" src={window.arrow} /></p>
                            </li>
                            <li className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.valentine} />
                                </div>
                                <p>Arts & Craft<img className="arrow" src={window.arrow} /></p>
                            </li>
                            <li className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.candy} />
                                </div>
                                <p>Candies <img className="arrow" src={window.arrow} /></p>
                            </li>
                            <li className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.heart} />
                                </div>
                                <p>Love<img className="arrow" src={window.arrow} /></p>
                            </li>
                            <li className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                <img className="intro-image" src={window.cookie} />
                                </div>
                                <p>Sweets<img className="arrow" src={window.arrow} /></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="products-all-block">
                    <div className="products-all-container">
                        <h2 className="products-header">Popular Products</h2>
                        <ul className="product-list">
                            <li className="product-list-index">
                                <img className="product-image" src={window.chainnecklace} />
                                <p className="product-price">$20.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.custompins} />
                                <p className="product-price">$15.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.dices} />
                                <p className="product-price">$25.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.keyboard} />
                                <p className="product-price">$150.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.knitsweater} />
                                <p className="product-price">$35.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.moonnecklace} />
                                <p className="product-price">$40.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.chainnecklace} />
                                <p className="product-price">$20.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.custompins} />
                                <p className="product-price">$15.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.dices} />
                                <p className="product-price">$25.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.keyboard} />
                                <p className="product-price">$150.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.knitsweater} />
                                <p className="product-price">$35.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.moonnecklace} />
                                <p className="product-price">$40.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.chainnecklace} />
                                <p className="product-price">$20.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.custompins} />
                                <p className="product-price">$15.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.dices} />
                                <p className="product-price">$25.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.keyboard} />
                                <p className="product-price">$150.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.knitsweater} />
                                <p className="product-price">$35.00</p>
                            </li>
                            <li className="product-list-index">
                                <img className="product-image" src={window.moonnecklace} />
                                <p className="product-price">$40.00</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="info-section-block">
                    <h2 className="info-section-header">What is Keytsy?</h2>
                    <section className="info-section">
                        <div className="info-group">
                            <h3 className="sub-info-header">A one-of-a-kind community</h3>
                            <p className="sub-info">Keytsy is a global online markerplace, where people come together to make, sell, buy, and collect unique items</p>
                        </div>
                        <div className="info-group">
                            <h3 className="sub-info-header">Support independent creators</h3>
                            <p className="sub-info">There's no Keytsy warehouse - just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
                        </div>
                        <div className="info-group">
                            <h3 className="sub-info-header">Peace of mind</h3>
                            <p className="sub-info">Your privary is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Splash;