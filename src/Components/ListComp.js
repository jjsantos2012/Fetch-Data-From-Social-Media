import React, { Component } from 'react';
import './CSS/publicacion.css';
import {Card,Container, CardTitle, Col } from 'reactstrap';
import {Row,Form, FormGroup, Input, Button,Label } from 'reactstrap';


class ListComp extends Component {

  constructor(props) {
    super(props);
    this.state = {data: [{created_time: "2018-02-23T17:42:32+0000",
       message: "Anunciamos el inicio de nuestro blog. Pueden verlo en https://clubpatassucias.blogspot.com/",
        id: "1947984875458605_2016570478600044"}],
      criteria:'',
      value:''
    };

        this.searchForPosts = this.searchForPosts.bind(this);
        this.handleChange = this.handleChange.bind(this);

  }

componentWillMount(){

  fetch("https://graph.facebook.com/v2.9/clubpatassucias/posts?access_token=403108406768407|amJGwlHjGLWXcKOMow0MGmJpTgU")
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
         <Form>
        <FormGroup>
          <Label for="exampleEmail">Page ID:</Label>
          <Input type="text" name="criteria" required="true" onChange={this.handleChange} value={this.state.criteria} placeholder="Add the Page ID you what to search..." />
            <Button color="primary" onClick={() => {this.searchForPosts(this.state.criteria)}}>Search</Button>
        </FormGroup>
        </Form>

       {this.state.data['data'].map((item) => {
               return (
                 <div key={item.id}style={{marginRight: "5%", marginLeft: "5%"}}>
                 <Card style={{background: "rgba(255, 255, 255, 0.94)", cursor: "pointer"}}>
             				<Row>
                      <Col>
                        <h4>{item.story}</h4>
                        <h4>{item.message}</h4>
                      </Col>
             				</Row>
             		</Card>
                </div>

             );
                  })}

       </Container>

     )
   } else {
     return <p className="text-center">Cargando Datos...</p>
   }


  }
}

export default ListComp;
