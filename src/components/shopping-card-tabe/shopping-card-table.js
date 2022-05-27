import React from "react";
import './shopping-card-table.css';

const ShoppingCardTable = () => {
    return (
        <div className="shopping-card-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site blahblahblah</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm float-right">
                                <div>DEL</div>
                            </button>
                            <button className="btn btn-outline-success btn-sm float-right">
                               <div>PLUS</div> 
                            </button>
                            <button className="btn btn-outline-warning btn-sm float-right">
                                <div>MINUS</div>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="total">
                Total: $201
            </div>
        </div>
    );
};

export default ShoppingCardTable;