import React, { Component } from 'react';
import {Card, Container, CardTitle, Col, Row} from 'reactstrap';

class ListComp extends Component {

  constructor(props) {
    super(props);
    this.state = {data: [{created_time: "2018-02-23T17:42:32+0000",
       message: "Anunciamos el inicio de nuestro blog. Pueden verlo en https://clubpatassucias.blogspot.com/",
        id: "1947984875458605_2016570478600044"}]};
  }

componentWillMount(){

  fetch("https://graph.facebook.com/v2.9/clubpatassucias/posts?access_token=403108406768407|amJGwlHjGLWXcKOMow0MGmJpTgU")
       .then(response => response.json())
       .then(json => {
         console.log(json);
         this.setState({data: json});
       });
    console.log(this.state.data);


}


  render() {
      if (this.state.data['data']) {
     return (
       <Container>

       {this.state.data['data'].map((item) => {
               return (
                 <div style={{marginRight: "5%", marginLeft: "5%"}}>
                 <Card style={{background: "rgba(255, 255, 255, 0.94)", cursor: "pointer"}}>
             				<Row>
                      <Col>
                        <h4>{item.message}</h4>
                      </Col>
             					<hr/>
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
