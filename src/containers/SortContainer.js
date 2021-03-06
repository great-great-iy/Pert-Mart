import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortProduct from '../components/SortProduct';
import * as actions from './../actions/index';



class SortContainer extends Component {
    render() {
        var { trademark, onSortProduct } = this.props;
        return (
            <>
                <SortProduct
                    onSortProduct = {onSortProduct}
                    trademarkProduct = {trademark}
                />                    
            </>                  
        );  
    }
}

const mapStateToProps = (state) =>{
    return {
        trademark : state.trademark
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSortProduct : (sort) => {
            dispatch(actions.sortProduct(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SortContainer);
