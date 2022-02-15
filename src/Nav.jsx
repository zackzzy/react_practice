import React from "react"


export default class Nav extends React.Component{
    render() {
      return (
        <div>
          <h2>{this.props.title}</h2>
          <ul>
            { 
              this.props.nav.map((element,index) => {
                return <li key={index}>{element}</li>
              })
            }
            
          </ul>
  
        </div>
      )
    }
  }