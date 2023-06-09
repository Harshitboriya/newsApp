import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {title,descrip,iurl}=this.props;
    return (
      <div className="my-3">
            
          <div className="card" style={{width: "18rem"}}>
          <img src={iurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{ title}</h5>
            <p className="card-text">{descrip}</p>
            <a href="/newsdetails" className="btn btn-sm btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    )
  }
}
