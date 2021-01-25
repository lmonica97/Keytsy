import React from 'react';

class ProductCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: "",
            description: "",
            price: "",
            image: null
        }
    }

    update(type) {
        return (e) => {
            this.setState = ({ [type]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        this.setState({ image: e.currentTarget.files[0] })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[product_name]', this.state.product_name);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);
        formData.append('product[image]', this.state.image);
    }

    render() {
        return (
            <form>
                <label>Name:</label>
                <input
                type="text"
                value={this.state.product_name}
                onChange={this.update('product_name')}>
                </input>
                <br />
                <label>Description:</label>
                <textarea
                type="text"
                value={this.state.description}
                onChange={this.update('description')}>
                </textarea>
                <br />
                <label>Price</label>
                <input 
                type="integer"
                value={this.state.price}
                onChange={this.update('price')}>
                </input>
                <br />
                <label>Images</label>
                <input 
                type="file"
                onChange={this.handleFile.bind(this)}>
                </input>
                <br />
                <button>Create Listing!</button>
            </form>
        )
    }
}