import React from 'react'
import { Link } from 'react-router-dom'

class Category extends React.Component {
  render() {
    return(
      <div>
        <h1>Example Company Blog</h1>
        <div>
          <button type='radio' radioGroup='radio'>Technology</button>
          <button type='radio' radioGroup='radio'>Philanthropy</button>
          <button type='radio' radioGroup='radio'>Events</button>
          <button type='radio' radioGroup='radio'>New Products</button>
          <button type='radio' radioGroup='radio'>Product Updates</button>
        </div>
        <div>
          <div>
            <h2>Post 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog/post">Read More</Link>
          </div>
          <div>
            <h2>Post 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog/post">Read More</Link>
          </div>
          <div>
            <h2>Post 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog/post">Read More</Link>
          </div>
          <div>
            <h2>Post 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog/post">Read More</Link>
          </div>
          <div>
            <h2>Post 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog/post">Read More</Link>
          </div>
          <div>
            <h2>Post 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog/post">Read More</Link>
          </div>
          <div>
            <h2>Post 7</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/blog/post">Read More</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Category