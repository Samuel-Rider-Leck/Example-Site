import React from 'react';
import { Link } from 'react-router-dom'

import Footer from 'components/footer'
import Header from 'components/header'

const contact_array = [
  {id:1,name:"Technical Support:",phone:"(123) 456-7890",email:"tech.support@example.com"},
  {id:2,name:"Pricing, billing, and licensing:",phone:"(234) 567-8901",email:"pricing@example.com"},
  {id:3,name:"Product advice:",phone:"(345) 678-9012",email:"product.help@example.com"},
  {id:4,name:"Public Relations:",phone:"(456) 789-0123",email:"pr@example.com"},
  {id:5,name:"Careers:",phone:"(567) 890-1234",email:"careers@example.com"},
  {id:6,name:"Technical Support:",phone:"(123) 456-7890",email:"tech.support@example.com"},
]

const office_contact_array = [
  {id:1,name:"Example Location 1",phone:"(678)901-2345",location:"Example Address<br />Example St.<br />Example, Ex 12345"},
  {id:2,name:"Example Location 2",phone:"(789)012-3456",location:"Example Address<br />Example Dr.<br />Example, Ex 23451"},
  {id:3,name:"Example Location 3",phone:"(890)123-4567",location:"Example Address<br />Example Av.<br />Example, Ex 34512"},
  {id:4,name:"Example Location 4",phone:"(901)234-5678",location:"Example Address<br />Example Way<br />Example, Ex 45123"}
]

class Contact extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <h1>Contact Example Company</h1>
        <div>
        {contact_array.map(
          ({id, name, phone, email}) =>
          (<div id={id}>
            <h3>{name}</h3>
            {phone}<hr />
            {email}
          </div>)
        )}
        </div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <h2>Office Locations</h2>
          <div>
          {office_contact_array.map(
            ({id, name, phone, location}) =>
            (<div id={id}>
              <h3><Link to="/">{name}</Link></h3>
              <div>{phone}</div>
              <div>{location}</div>
            </div>)
          )}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact;