import React from 'react';

function CampsiteInfoComponent() {
  return <div>help</div>;
}

export default CampsiteInfoComponent;

// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// class CampsiteInfo extends Component {

//     renderCampsite(campsite) {
//         return (
//             <div className="col-md-5 m-1">
//                 <Card>
//                     <CardImg top src={campsite.image} alt={campsite.name} />
//                     <CardBody>
//                         <CardTitle>{campsite.name}</CardTitle>
//                         <CardText>{campsite.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }

//     renderComments(comments) {
//         if (comments) {
//             return (<div className="col-md-5 m-1">
//                 <h4>Comments</h4>
//                 {comments.map(c => {
//                     return (<div>
//                         <p>
//                             {c.text}
//                             <br />
//                             <i>{c.author}</i> -- {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}>
//                         </p>
//                     </div>);
//                 })

//                 }
//             </div>);
//         }
//         return (<div></div>)
//     }

//     render() {
//         if (this.prop.campsite) {
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.renderCampsite(this.props.campsite)}
//                         {this.renderComments(this.props.campsite.comments)}
//                     </div>
//                 </div>
//             );
//         } else {
//             return (
//                 <div></div>
//             );
//         }
//     }
// }

    
// export default CampsiteInfo;