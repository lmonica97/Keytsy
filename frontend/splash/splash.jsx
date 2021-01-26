import React from 'react';
import ProductContainer from '../components/products/products_container';
import { Link } from 'react-router-dom'
import ProductSlice from './product_slice';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render() {
        const { products } = this.props;
        // console.log('splashcontent')
        // debugger
        return (
            <div className="splash">
                <div className="intro-block">
                    <h2 className="intro-header">See what's trending for Valentine's Day on Keytsy.</h2>
                    <div className="intro-container">
                        <ul className="intro-container-list">
                            <Link to="/products/50" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.roses} />
                                </div>
                                <p>Roses<img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/57" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.valentine} />
                                </div>
                                <p>Arts & Craft<img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/45" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.candy} />
                                </div>
                                <p>Candies <img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/49" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                    <img className="intro-image" src={window.heart} />
                                </div>
                                <p>Love<img className="arrow" src={window.arrow} /></p>
                            </Link>
                            <Link to="/products/44" style={{ textDecoration: 'none', color: 'black' }} className="intro-container-list-index">
                                <div className="intro-container-list-index-image">
                                <img className="intro-image" src={window.cookie} />
                                </div>
                                <p>Sweets<img className="arrow" src={window.arrow} /></p>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className="products-header">New from shops you might like</h5>
                        <ProductSlice products={products.slice(0,6)} />
                    </div>
                    <div>
                        <h5 className="products-header">Recommended in Home & Living</h5>
                        <ProductSlice products={products.slice(18,24)} />
                    </div>
                    <div>
                        <h5 className="products-header">Recommendations</h5>
                        <ProductSlice products={products.slice(7,13)} />
                    </div>
                </div>
                <div className="product-display-mid">
                    <div className="product-display-main">
                        <div className="home-list-side">
                            <div  className="home-print">
                                <p>Editor's Picks</p>
                                <h3>Home favorites</h3>
                                <span>See more <img className="arrow" src={window.arrow} /></span>
                            </div>
                            <Link to="/products/62" className="home-block">
                                <img className="home-pics" src={window.home1} />
                            </Link>
                            <Link to="/products/63" className="home-block">
                                <img className="home-pics" src={window.home2} />
                            </Link>
                            <Link to="/products/64" className="home-block">
                                <img className="home-pics3" src={window.home3} />
                            </Link >
                            <Link to="/products/65" className="home-block">
                                <img className="home-pics" src={window.home4} />
                            </Link>
                            <Link to="/products/66" className="home-block">
                                <img className="home-pics" src={window.home5} />
                            </Link>
                            <Link to="/products/67" className="home-block">
                                <img className="home-pics" src={window.home6} />
                            </Link>
                        </div>
                        <div>
                            <Link to="/products/68" className="home-main">
                                <img className="home-pics-main" src={window.mainhome} />
                            </Link>
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