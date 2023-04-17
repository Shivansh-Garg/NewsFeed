import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span class="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>

          <img src={!imageurl ? "https://cpng.pikpng.com/pngl/s/106-1069399_iam-add-group1-sorry-no-image-available-clipart.png" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem