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
                <div className="product-display-mid">
                    <div>
                        <div className="home-list-side">
                            <div className="home-print">
                                <p>Editor's Picks</p>
                                <h3>Home favorites</h3>
                                <span>See more <img className="arrow" src={window.arrow} /></span>
                            </div>
                            <div className="home-block">
                                <img className="home-pics" src={window.home1} />
                                <div className="home-pic-price">$100.22</div>
                            </div>
                            <div className="home-block">
                                <img className="home-pics" src={window.home2} />
                                <div className="home-pic-price">$30.65</div>
                            </div>
                            <div className="home-block">
                                <img className="home-pics3" src={window.home3} />
                                <div className="home-pic-price">$15.68</div>
                            </div>
                            <div className="home-block">
                                <img className="home-pics" src={window.home4} />
                                <div className="home-pic-price">$240.00</div>
                            </div>
                            <div className="home-block">
                                <img className="home-pics" src={window.home5} />
                                <div className="home-pic-price">$500.50</div>
                            </div>
                            <div className="home-block">
                                <img className="home-pics" src={window.home6} />
                                <div className="home-pic-price">$28.00</div>
                            </div>
                        </div>
                        <div>
                            <div className="home-main">
                                <img className="home-pics-main" src={window.mainhome} />
                                <div className="home-pic-price">$35.50</div>
                            </div>
                        </div>
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
                    <div className="github-web-link">Want to know more?
                        <form className="github" action="https://github.com/lmonica97/Keytsy">
                            <input className="github-button" type="submit" value="Go to Github" />
                        </form>
                    </div>
                </div>
                <div className="blog-division">
                    <h3 className="blog-section">Fresh from the blog</h3>
                    <div className="blog-section-list">
                        <ul className="blog-block">
                            <a className="blog-block-list" href="https://blog.etsy.com/en/featured-shop-mai-solorzano/?ref=hp" >
                                <img className="blog-picture" src={window.earring} />
                                <div className="blog-text">
                                    <p>Featured Shops</p>
                                    <h3>Statement Jewelry for Nature Lovers</h3>
                                    <p>Inspired by the beauty of the earth and sea, these gorgeously giftable pieces are a meaningful way to honor our connection to the great outdoors.</p>
                                </div>
                            </a>
                            <a className="blog-block-list" href="https://thriveworks.com/blog/write-your-heart-out/">
                                <img className="blog-picture" src={window.journal} />
                                <div className="blog-text">
                                    <p>Journalism</p>
                                    <h3>Write Your Heart Out</h3>
                                    <p>One of the most powerful ways to express oneself involves taking pen to paper or finger to keyboard as emotions spill out. For people seeking mental health treatment, journaling their thoughts is often a lifeline.</p>
                                </div>
                            </a>
                            <a className="blog-block-list"href="https://msw.usc.edu/mswusc-blog/60-ways-show-someone-you-care/">
                                <img className="blog-picture" src={window.friendship} />
                                <div className="blog-text">
                                    <p>Inspiration</p>
                                    <h3>The Keytsy Guide to Show Someone You Care</h3>
                                    <p>A purpose of a Care Card is to serve as a random act of kindness -- a message of love, friendship or appreciation. The You Matter Campaign encourages human connection.</p>
                                </div>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;