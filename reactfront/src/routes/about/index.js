import React from 'react'

import Footer from 'components/footer'
import Header from 'components/header'
import Sitelinks from 'components/sitelinks'

class About extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <h1>About Example Company</h1>
        <h2>Example Company History</h2>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh fringilla, feugiat libero quis, rhoncus metus. Suspendisse non ornare magna. Maecenas ut mi volutpat, dapibus felis non, laoreet lectus. Vestibulum eleifend nunc quis velit rutrum hendrerit. Suspendisse aliquet, turpis sed porttitor placerat, felis metus accumsan est, at ultricies ligula leo eu ligula. Vivamus semper dapibus libero, quis pretium sapien. Vivamus pharetra vestibulum lacus non egestas. Fusce scelerisque lorem urna, non varius dui ornare et. Mauris ipsum orci, convallis vehicula sodales nec, ultrices a ex. Nam purus erat, consectetur sit amet lorem vitae, gravida aliquet lectus. Fusce nulla est, sodales at sollicitudin tristique, congue tincidunt arcu. Integer sed mauris dictum, sagittis nunc non, vehicula erat.
        </div>
        <h2>Example Company Values</h2>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lectus nec sapien euismod faucibus. Maecenas condimentum quam et rhoncus cursus. Vivamus accumsan, dui sit amet aliquam rutrum, erat libero tempus justo, sed elementum lorem metus id erat. Aliquam pharetra, ipsum ut euismod porttitor, dolor turpis ultrices nisi, vel rutrum sem turpis eget risus. Morbi porta mi sed elit lacinia, nec pharetra leo dignissim. Maecenas ornare erat vel justo lacinia, vitae sollicitudin magna imperdiet. Integer gravida fringilla massa, at iaculis nulla vestibulum non. Pellentesque non laoreet felis. In sit amet urna in turpis rhoncus semper. Sed laoreet felis id arcu tristique commodo. Proin auctor nibh vel est egestas, sit amet ultricies massa semper. Suspendisse tincidunt tincidunt lorem.
        </div>
        <h2>Example Company Mission</h2>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in sem id elit pellentesque venenatis at vitae erat. Aenean eget nisl ac est varius accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel mi tellus. Aliquam ornare urna condimentum mollis imperdiet. Suspendisse pretium risus eu bibendum pharetra. Sed ac molestie dui. Duis luctus ornare ex, non congue dolor vulputate eget. Cras porttitor augue ac felis venenatis, et congue diam facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque diam nisl, sagittis at felis eget, consectetur faucibus quam. Praesent laoreet mollis massa, id condimentum orci placerat vel. Vestibulum luctus lorem quis elit finibus condimentum. Nunc gravida dolor sit amet egestas molestie.
        </div>
        <h2>The Future of Example Company</h2>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed erat placerat nibh maximus posuere. Morbi tempus eget magna at pharetra. Nunc eget justo diam. In consequat commodo orci, sed tincidunt quam facilisis in. Sed auctor quam in ante laoreet, ac interdum magna pellentesque. Curabitur suscipit congue elit id maximus. Vestibulum tristique, eros id porta faucibus, mauris diam fringilla risus, non feugiat justo metus sit amet neque. Quisque vel sem gravida, volutpat diam id, dapibus leo. Morbi porta risus ac condimentum vestibulum. Nunc efficitur lobortis magna, pharetra auctor sapien.
        </div>
        <Sitelinks />
        <Footer />
      </div>
    )
  }
}

export default About