import React from 'react'

const technical_array = [
  {id:1,question:"Does example product do X?",answer:"Nope"}
]
const how_to_use_array = [
  {id:1,question:"Does example product do X?",answer:"Nope"}
]
const topic_3_array = [
  {id:1,question:"Does example product do X?",answer:"Nope"}
]
const topic_4_array = [
  {id:1,question:"Does example product do X?",answer:"Nope"},
  {id:1,question:"Does example product do X?",answer:"Nope"}
]
const topic_5_array = [
  {id:1,question:"Does example product do X?",answer:"Nope"}
]

const faq = [
  {id:1,name:"Technical Questions",array:technical_array},
  {id:1,name:"How To Use Our Products",array:how_to_use_array},
  {id:1,name:"Topic 3",array:topic_3_array},
  {id:1,name:"Topic 4",array:topic_4_array},
  {id:1,name:"Topic 5",array:topic_5_array},
]

class Faq extends React.Component {
  render() {
    return(
      <div>
        <h1>FAQ</h1>
        <input></input>
        <button type="button">Search</button>
        <div>
          {faq.map(
            ({id, name, array}) =>
            (<div id={id}>
              <h2>{name}</h2>
              {array.map(
                ({id, question, answer}) =>
                (<div id={id}>
                  <button type="button">{question}</button>
                  <p hidden>{answer}</p>
                </div>)
              )}
            </div>)
          )}
        </div>
      </div>
    )
  }
}

export default Faq