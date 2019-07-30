import React from 'react';
import { Product } from './Product';

class ProductList extends React.Component {

    state = {
        data: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ data: this.props.data, loading: this.props.loading });
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/10')
            .then(data => data.json())
            .then(data => {
                this.setState({ data, loading: false })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((product, i) => {
                        return <Product key={i} data={product}></Product>
                    })
                }
            </div>
        )
    }
}

export default ProductList;