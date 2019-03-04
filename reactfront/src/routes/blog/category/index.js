import React from 'react'
import { Link } from 'react-router-dom'

const post_array = [
  {id:1,name:"Post 1",short:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:2,name:"Post 2",short:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:3,name:"Post 3",short:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:4,name:"Post 4",short:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:5,name:"Post 5",short:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:6,name:"Post 6",short:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:7,name:"Post 7",short:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
]

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
        {post_array.map(
          ({id, name, short}) =>
          (<div id={id}>
            <h2>{name}</h2>
            <p>{short}</p>
            <Link to={"/blog/post/"+id}>Read More</Link>
          </div>)
        )}
        </div>
      </div>
    )
  }
}

export default Category