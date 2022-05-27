import React from "react";
import './shopping-card-table.css';

import { connect } from "react-redux";
import {bookAddedToCard, bookRemovedFromCard, allBooksRemovedFromCard} from '../../actions/index';

const ShoppingCardTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, price} = item;
        return (
            <tr key={id}>
                <td>{idx+1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${price}</td>
                <td>
                    <button 
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={()=>onDelete(id)}>
                        <div>DEL</div>
                    </button>
                    <button 
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={()=>onIncrease(id)}>
                    <div>PLUS</div> 
                    </button>
                    <button 
                        className="btn btn-outline-warning btn-sm float-right"
                        onClick={()=>onDecrease(id)}>
                        <div>MINUS</div>
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-card-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({cardItems, orderTotal}) => {
    return {
        items: cardItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCard,
    onDecrease: bookRemovedFromCard,
    onDelete: allBooksRemovedFromCard
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);