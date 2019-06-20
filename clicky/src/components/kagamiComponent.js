import React, { Component } from "react"
import kagamiImage from "../kagamiImage.jpg"
import Score from "./score"

class Kagami extends Component {
//  Score= 0;
//   addscore =()=>{
//       Score+=1;
//       console.log(Score)}
render(){
    return(

        <img onClick={this.addscore} src={kagamiImage}/>
    
    )
}
}
console.log(Score)
export default Kagami;