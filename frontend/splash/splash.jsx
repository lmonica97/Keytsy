import React from 'react';
import ProductContainer from '../components/products/products_container';
import { Link } from 'react-router-dom'

class Splash extends React.Component {
    render() {
        // console.log('splashcontent')
        return (
            <div className="splash">
                <div className="intro-block">
                    <h2 className="intro-header">See what's trending for Valentine's Day on Keytsy.</h2>
                    <div className="intro-container">
                        <ul className="intro-container-list">
                            <Link to="/products/7" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.roses} />
                                </div>
                                <p>Roses<img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/14" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.valentine} />
                                </div>
                                <p>Arts & Craft<img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/2" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.candy} />
                                </div>
                                <p>Candies <img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/6" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.heart} />
                                </div>
                                <p>Love<img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/1" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                <img className="intro-image" src={window.cookie} />
                                </div>
                                <p>Sweets<img className="arrow" src={window.arrow} /></p>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="products-header">Products</h2>
                    <ProductContainer />
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
                    <div className="github-web-link">Want to know more?
                        <form className="github" action="https://github.com/lmonica97/Keytsy">
                            <input className="github-button" type="submit" value="Go to Github" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;