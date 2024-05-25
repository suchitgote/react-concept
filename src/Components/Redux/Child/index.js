import React from 'react';
import { connect } from "react-redux";

const Child = ({count})=>{
    return(
        <div style={{background:'red' , padding : 20 , margin : '20px'}}>
            Child : {count}
        </div>
    )
}
const mapStateToProps = (state) => ({
    count: state.counter.count,
  });

  export default connect(mapStateToProps)(Child);
