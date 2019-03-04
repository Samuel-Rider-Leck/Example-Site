import React from 'react'

const testimonial_array = [
  {id:1,name:"Example Name 1",job:"Engineer at Example LTD",comment:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla efficitur massa.\""},
  {id:2,name:"Example Name 2",job:"Engineer at Examplotics",comment:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla efficitur massa.\""},
  {id:3,name:"Example Name 3",job:"Manager at EXAM peoPLE",comment:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla efficitur massa.\""},
  {id:4,name:"Example Name 4",job:"Scientist with Exompla",comment:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla efficitur massa.\""},
  {id:5,name:"Example Name 5",job:"Linguist at Example Colege",comment:"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla efficitur massa.\""}
]

class Testimonials extends React.Component {
  render() {
    return (
      <div>
        <h1>Testimonials</h1>
        <img alt="header background"></img>
        <div>
          {testimonial_array.map(({id, ...props}) => 
            (<Testimonial id={id} {...props} />)
          )}
        </div>
      </div>
    )
  }
}

class Testimonial extends React.Component {
  render () {
    return (
      <div>
        <img alt={this.props.id}></img>
        <p>{this.props.name}</p>
        <p>{this.props.job}</p>
        <p>{this.props.comment}</p>
      </div>
    )
  }
}

export default Testimonials