 <p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/logo.png" />
</p>



[Click here to view the live site!]( https://keytsy.herokuapp.com/#/ ) 

<p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/gifs/splash.gif" />
</p>

## Overview

This app is my replication of the original website, Etsy.com. Similarly to the original website, it is a shopping site where users can browse items from a variety of categories to choose from. Unlike other shopping platforms, Keytsy only provides products from independent sellers-- people who want to sell their own hand-crafted items online.

## Keytsy was built with:
+ Ruby on Rails -- Backend
+ PostgresQL -- database structure 
+ ReactJS, NodeJS, Redux -- Frontend
+ AWS -- For product images

## Features
+ User Autherization -- Allows a User to create an account, sign in to an existing account, and sign out. 

<p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/gifs/auth.gif" />
</p>

+ Products -- Display of products, User can choose which product they want to view more in depth of

<p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/gifs/product.gif" />
</p>

+ Cart -- Display of the products that the User added to cart. User can update quantity amount, add more products to existing cart, delete items from cart, and purchase the items in their cart. 

<p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/gifs/cart.gif" />
</p>

+ Reviews -- Users will have to be logged in to create a review. Reviews will be rated from a scale from 1-5 stars and Users will be able to review their own existing reviews or delete them.

<p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/gifs/review.gif" />
</p>

+ Search -- A search bar that will display a result of products that match the User's search input.

<p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/gifs/search.gif" />
</p>

+ Categories -- When a user selects on a specific category of items, only the products that are within the category chosen will be listed. Users can filter products in each category with the price filter.

<p align="center">
  <img src="https://github.com/lmonica97/Keytsy/blob/main/app/assets/images/gifs/category.gif" />
</p>

## Code snippets
1. 
```javascript
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
                                            <button className="review-submit-btn" type="submit">Submit</button>
                                        </form>
                                    </div> : null}
                                    </div>
                                    <div>
                                    {this.props.currentUser ? 
                                        <form onClick={() => this.hideForm("showReviewForm")}>
                                            {
                                                showReviewForm ? 
                                                <button className="close-btn">Close</button> :
                                                <button className="create-btn">Create Review</button> 
                                            }
                                        </form>
                                     : null }
                                    </div> 
    </div>
                                    
```

2. 
```ruby 
def create 
        allCartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
        @cartitem = Cartitem.new(cartitem_params)
        hash = {};
        allCartitems.map { |cartitem| hash[cartitem.product_id] = cartitem.id} 
        if hash.keys.include?(@cartitem.product_id) 
            @existingcartitem = Cartitem.find_by(id: hash[@cartitem.product_id])
            @existingcartitem.quantity = @existingcartitem.quantity + @cartitem.quantity
            if @existingcartitem.save && logged_in? 
                @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
                render 'api/cartitems/index'
            else 
                render json: @cartitem.errors.full_messages, status: 404
            end
        else 
            if @cartitem.save && logged_in? 
                @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
                render 'api/cartitems/index'
            else 
                render json: @cartitem.errors.full_messages, status: 404
            end
        end
    end
```


