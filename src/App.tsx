import React from 'react';
import logo from './logo.svg';
import './App.css';
import { statement } from '@babel/template';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { randomMessage } from './Redux/Actions/MessageAction';

/* the property message will be obtained from redux*/
interface Props{
  message:string;
  actionMethod:()=>any;
}
class App extends React.Component<Props>{
    render(){
       return(
         <div>
         <h1>App Component</h1>
         <hr/>
         <h3>MESSSAGE:: {this.props.message}</h3>
         <button onClick={this.props.actionMethod}>Change Message</button>
         </div>
       );
    }
}

let mapStoreToProps=(data:any)=>{
  console.log(data);
  return {message:data.mdata.message};
}

let mapActionToProps=(dispatch:any)=>{
   return bindActionCreators({actionMethod:randomMessage},dispatch);
}

export default connect(mapStoreToProps,mapActionToProps)(App);

//export default App;
