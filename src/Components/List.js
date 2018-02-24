import React, { Component } from 'react';

class List extends Component {

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
       <div className="container-fluid">
         <div className="row">
       {this.state.data['data'].map((item) => {
               return ( <li key={item.id}>{item.message}</li> );

             })}

         </div>
       </div>
     )
   } else {
     return <p className="text-center">Cargando empleados...</p>
   }


  }
}

export default List;
