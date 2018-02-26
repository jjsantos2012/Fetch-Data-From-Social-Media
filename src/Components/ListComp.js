import React, { Component } from 'react';
import './CSS/publicacion.css';
import {Card,Container, Col,InputGroup,InputGroupAddon } from 'reactstrap';
import {Row, Input, Button} from 'reactstrap';

class ListComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      criteria:'',
      value:''
    };

        this.searchForPosts = this.searchForPosts.bind(this);
        this.handleChange = this.handleChange.bind(this);

  }

componentWillMount(){

  fetch("https://graph.facebook.com/v2.9/PCRDominicana/posts?access_token=403108406768407|amJGwlHjGLWXcKOMow0MGmJpTgU")
       .then(response => response.json())
       .then(json => {
         console.log(json);
         this.setState({data: json});
       });

}

searchForPosts(criteria){

 var parameter1 = "https://graph.facebook.com/v2.9/";
 var parameter3 = "/posts?access_token=403108406768407|amJGwlHjGLWXcKOMow0MGmJpTgU";
 var finalParameter2 = parameter1.concat(criteria).concat(parameter3);

  fetch(finalParameter2)
       .then(response => response.json())
       .then(json => {
         console.log(json);
         this.setState({data: json});
       });

}



handleChange(e) {
  this.setState({ [e.target.name]: e.target.value});
}


  render() {
    
      if (this.state.data['data']) {
     return (

       <Container>
         <div>
             <Row>
             <Col sm="12" md={{ size: 8, offset: 2 }}>
               <InputGroup>
                  <Input type="text" name="criteria" required="true" onChange={this.handleChange}
                     value={this.state.criteria} placeholder="Add the Page ID you what to search..." />
                  <InputGroupAddon addonType="append">
                    <Button outline color="primary" onClick={() => {this.searchForPosts(this.state.criteria)}}>Search</Button>
                  </InputGroupAddon>
                </InputGroup>
             </Col>
             </Row>
        </div>

        <hr/>

       {this.state.data['data'].map((item) => {
               return (
                 <div key={item.id}style={{marginRight: "5%", marginLeft: "5%"}}>
                 <Card>
             				<Row>
                      <Col>
                        <h6>{item.story}</h6>
                        <h6>{item.message}</h6>
                      </Col>
             				</Row>
             		</Card>
                </div>

             );
                  })}

       </Container>

     )
   } else {
     return (
       <Container>
         <div>
             <Row>
             <Col sm="12" md={{ size: 8, offset: 2 }}>
               <InputGroup>
                  <Input type="text" name="criteria" required="true" onChange={this.handleChange}
                     value={this.state.criteria} placeholder="Add the Page ID you what to search..." />
                  <InputGroupAddon addonType="append">
                    <Button outline color="primary" onClick={() => {this.searchForPosts(this.state.criteria)}}>Search</Button>
                  </InputGroupAddon>
                </InputGroup>
             </Col>
             </Row>
        </div>

        <hr/>

        <h3 className="text-center">The criteria that you have entered is wrong or do not exist, Please try again.</h3>

       </Container>

     )
   }


  }
}

export default ListComp;
