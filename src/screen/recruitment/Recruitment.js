import React from 'react';
import Header from '../../component/header/Header';
import {connect} from "react-redux";
import {fetchProducts} from "../../component/products-api/prodcutAction"
import { Table } from 'reactstrap';
import {productReducer} from "../../component/products-api/productReducer";
 class Recruitment extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  
 
  // renderTableHeader =()=>{
  //   return Object.keys(this.state.products).map(res=><th key={res} >{res.toUpperCase()}</th>)
  // }
  render() {
   
    const { error, loading, products } = this.props;

    if (loading) {
      return <div>Loading... {loading.message}</div>;
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    

    return products.length > 0 ? (
      
      <Table>
        {/* <thead>
            <tr>
            {products.map((res)=><th key={res}>{res}</th> )}
            </tr>
          </thead> */}
        {products.map((user) => (
        
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{`${user.address.street}, ${user.address.city}`}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </Table>
    ) :(
      <div> no user....</div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Recruitment);