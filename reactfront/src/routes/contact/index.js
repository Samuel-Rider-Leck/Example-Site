import React from 'react';
import { Link } from 'react-router-dom'

import Footer from 'components/footer'
import Header from 'components/header'

class Contact extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <h1>Contact Example Company</h1>
        <div>
          <div>
            <h3>Technical Support:</h3>
            (123) 456-7890<hr />
            tech.support@example.com
          </div>
          <div>
            <h3>Pricing, billing, and licensing:</h3>
            (234) 567-8901<hr />
            pricing@example.com
          </div>
          <div>
            <h3>Product advice:</h3>
            (345) 678-9012<hr />
            product.help@example.com
          </div>
          <div>
            <h3>Public Relations:</h3>
            (456) 789-0123<hr />
            pr@example.com
          </div>
          <div>
            <h3>Careers:</h3>
            (567) 890-1234<hr />
            careers@example.com
          </div>
        </div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <h2>Office Locations</h2>
          <div>
            <div>
              <h3><Link to="/contact">Example Location 1</Link></h3>
              <div>(678)901-2345</div>
              <div>Example Address<br />Example St.<br />Example, Ex 12345</div>
            </div>
            <div>
              <h3><Link to="/contact">Example Location 2</Link></h3>
              <div>(789)012-3456</div>
              <div>Example Address<br />Example St.<br />Example, Ex 23451</div>
            </div>
            <div>
              <h3><Link to="/contact">Example Location 3</Link></h3>
              <div>(890)123-4567</div>
              <div>Example Address<br />Example St.<br />Example, Ex 34512</div>
            </div>
            <div>
              <h3><Link to="/contact">Example Location 4</Link></h3>
              <div>(901)234-5678</div>
              <div>Example Address<br />Example St.<br />Example, Ex 45123</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact;