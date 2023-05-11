import React, { Component } from "react";

class ViewTodosUser extends Component {
    constructor(props) {
      super(props);
      this.sortByABC = this.sortByABC.bind(this);  
      this.changeFunc = this.changeFunc.bind(this);  
      this.data={
        listTitles:[]
      };
    }

    
   changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue=="menu_order"){
      return;
    } else if(selectedValue=="alphabetical"){
      console.log(this.data.listTitles);

      this.data.listTitles.sort();
      console.log(this.data.listTitles);
      this.render();
    }
      
    alert(selectedValue);
   }
    sortByABC(){
      console.log(this.props.listTodos);
      var arrayTitles=[];
      for (let index = 0; index < this.props.listTodos.length; index++) {
        arrayTitles.push(this.props.listTodos[index].title);
       } 
      arrayTitles.sort();
      console.log(arrayTitles);

    }

    render() {
      return (  
        <div>
              <select id="selectBox" name="orderby" class="orderby" onChange={this.changeFunc} autofocus>
                <option value="menu_order"  selected='selected' >Sorting by default</option>
                <option value="alphabetical" >Alphabetical order</option>
                <option value="done" >Todos Done</option>
              </select>
              <div>
             </div>
            {this.props.listTodos.map((todo)=>(
              this.data.listTitles.push(todo.title),
              <div>
                <p><input id="checkBox" type="checkbox" defaultChecked={todo.completed}/>{todo.title}</p>             
              </div> 
          ))}
        </div>
      );
    }
  }
   
  export default ViewTodosUser;