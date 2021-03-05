import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ReviewContainer from '../review/review_container';
import ReactStars from 'react-rating-stars-component';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            quantity: 1,
            rating: 1,
            comment: '',
            showReviewForm: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onStarClick = this.onStarClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
    }

    hideForm(name) {
        switch(name) {
            case "showReviewForm":
                this.setState({ showReviewForm: !this.state.showReviewForm })
                break;
            default:
                null;
        }
    }

    onStarClick(newRating) {
        this.setState({rating: newRating})
    }

    handleClick(e) {
        e.preventDefault();
        this.props.addItem({user_id: this.props.currentUser.id, product_id: this.props.product, quantity: this.state.quantity})
            .then(this.props.history.push({pathname:'/cart', state: this.state}))
    }

    handleSubmit(e) {
        debugger
        this.props.createReview({reviewer_id: this.props.currentUser.id, product_id: this.props.product.id, rating: this.state.rating, comment: this.state.comment}).then(this.hideForm("showReviewForm"))
    }

    update(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    randomNumberGenerator() {
        let min = 1;
        let max = 100;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        const { product } = this.props;
        const { showReviewForm } = this.state;
        const { rating } = this.state;

        if (!product){
            return(
                <div>Fetching Product...</div>
            );
        } else {
            return (
                <div className="product-show-page">
                    <div>
                        <img className="photo-sidebar" src={product.photoUrl} />
                    </div>
                    <div className="product-sale-seller">
                        <p className="product-show-seller">{product.seller.name}</p>
                        <p className="product-sales">{this.randomNumberGenerator()} sales</p> <span> | </span> <img className="store-rating"src={window.rating} />
                    </div>
                    <div className="product-show-image-block">
                        <img className="product-show-image" src={this.props.product.photoUrl} />
                    </div>
                    <div>
                        <p className="product-show-name">{product.product_name}</p>
                    </div>
                    <div className="product-available">
                        <img className="product-in-stock" src={window.check} />
                        <p>In stock</p>
                    </div>
                    <div className="product-show-description">
                        <h4 className="product-show-tag">Description</h4>
                        <p className="product-description-box">{product.description}</p>
                    </div>
                    <div className="product-show-price">
                        <p>${product.price}</p>
                    </div>
                    <div>
                        <label className="product-show-quantity-label">Quantity</label>
                        <select className="product-quantity-box" onChange={this.update('quantity')}>
                            <option value="1" defaultValue="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                        </select>
                    </div>
                    <form onClick={this.handleClick}>
                        <button className="product-show-add-button">Add to cart</button>
                    </form>
                    <div>
                        <img className="product-show-icon1" src={window.procart} /> 
                        <p className="product-in-cart">
                            <span className="highlight-text">Other people want this. </span> Over {this.randomNumberGenerator()} people have this in their carts right now.
                        </p>
                    </div>
                    <div>
                        <img  className="product-show-icon2" src={window.delivery} />
                        <p className="product-delivery">
                            <span className="highlight-text">Hooray!</span> This istem ships for free to the US.
                        </p>
                    </div>
                    <div>
                        <h6 className="product-highlight-header">Highlights</h6>
                        <ul className="product-highlight-list">
                            <li>
                                <img className="product-highlight1"src={window.hand} />
                                <p className="product-highlight-p">Handmade</p>
                            </li>
                            <li>
                                <img className="product-highlight2" src={window.made} />
                                <p className="product-highlight-p2">Materials: with love</p>
                            </li>
                        </ul>
                    </div>
                    <div className="seller-profile">
                        <h3>Meet your Seller</h3>
                        <img className="seller-profile-pic" src={window.profilepic} />
                        <h4 className="seller-profile-name">{product.seller.name}</h4>
                        <p>Owner of <a href="#">{product.seller.name}</a></p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div className="review-component">
                                    <div>
                                    { showReviewForm ? 
                                    <div className="review-form-container">
                                        <form className="review-form" onSubmit={this.handleSubmit}>
                                            <h1 className="review-form-head">Write a review</h1>
                                            <div className="review-rating-disp">
                                                <p className="rating-text">Rating: </p>
                                                <ReactStars
                                                count={5}
                                                value={rating}
                                                size={34}
                                                onChange={this.onStarClick}
                                                activeColor="#ffd700"
                                                className="review-star-rating"
                                                />
                                                <p className="rating-text1">{rating} Star(s)</p>
                                            </div>
                                            <p className="review-text-label">Comment: </p>
                                            <textarea className="review-textarea" value={this.state.comment} onChange={this.update("comment")}></textarea>
                                            <button className="review-submit-btn">Submit</button>
                                        </form>
                                    </div> : null}
                                    </div>
                                    <div>
                                    {this.props.currentUser ? 
                                    <form onClick={() => this.hideForm("showReviewForm")}>{showReviewForm ? <button className="close-btn">Close</button> : <button className="create-btn">Create Review</button> }</form>
                                     : null }
                                    </div>     
                                </div>

                                <ReviewContainer product={this.props.product}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ProductShow;