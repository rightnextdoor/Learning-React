import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    
    constructor(props){
        super(props);
    }
    

    render(){
        if(this.props.detail != null){ 
            return(
                <div className="container">
                    <div className="row">
                        <RenderDish dish={this.props.detail} />
                        <RenderComments dish={this.props.detail}/>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

function RenderDish({dish}){
    
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({dish}) {
    if (dish.comments != null) {
      const commentItem = dish.comments.map((comment) => {
        return (     
                                 
                 <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
           );
      });
      
      return (
        <div className="col-12 col-md-5 m-1">
            <Card>
          <h4>Comments</h4>
          <ul className="list-unstyled">{commentItem}</ul>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

export default DishDetail;