import React from 'react';

export class Product extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <h3>{data.name}</h3>
                <img alt='sv' src={data.image} height='100'></img>
            </div>
        )
    }
}