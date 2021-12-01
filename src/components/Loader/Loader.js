 import React from 'react'
 import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
 const Loaderr = () => (
   <div>
     <Segment>
       <Dimmer active>
         <Loader>Loading</Loader>
       </Dimmer>
       <Image src='/images/wireframe/short-paragraph.png' />
     </Segment>
   </div>
 )
 export default Loaderr;
