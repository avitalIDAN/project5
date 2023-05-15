// import React, { Component } from "react";

// class ViewTodosUser extends Component {
//     constructor(props) {
//       super(props);
//       this.sortByABC = this.sortByABC.bind(this);  
//       this.changeFunc = this.changeFunc.bind(this);  
//       this.data={
//         listTitles:[]
//       };
//     }

    
//    changeFunc() {
//     var selectBox = document.getElementById("selectBox");
//     var selectedValue = selectBox.options[selectBox.selectedIndex].value;
//     if(selectedValue=="menu_order"){
//       return;
//     } else if(selectedValue=="alphabetical"){
//       console.log(this.data.listTitles);

//       this.data.listTitles.sort();
//       console.log(this.data.listTitles);
//       this.render();
//     }
      
//     alert(selectedValue);
//    }
//     sortByABC(){
//       console.log(this.props.listTodos);
//       var arrayTitles=[];
//       for (let index = 0; index < this.props.listTodos.length; index++) {
//         arrayTitles.push(this.props.listTodos[index].title);
//        } 
//       arrayTitles.sort();
//       console.log(arrayTitles);

//     }

//     render() {
//       return (  
//         <div>
//               <select id="selectBox" name="orderby" class="orderby" onChange={this.changeFunc} autofocus>
//                 <option value="menu_order"  selected='selected' >Sorting by default</option>
//                 <option value="alphabetical" >Alphabetical order</option>
//                 <option value="done" >Todos Done</option>
//               </select>
//               <div>
//              </div>
//             {this.props.listTodos.map((todo)=>(
//               this.data.listTitles.push(todo.title),
//               <div>
//                 <p><input id="checkBox" type="checkbox" defaultChecked={todo.completed}/>{todo.title}</p>             
//               </div> 
//           ))}
//         </div>
//       );
//     }
//   }
   
//   export default ViewTodosUser;

// import React, { useState } from "react";

// export default function ViewTodosUser({ listTodos }) {
//   const [listTitles, setListTitles] = useState([]);

//   const changeFunc = () => {
//     const selectBox = document.getElementById("selectBox");
//     const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
//     if (selectedValue === "menu_order") {
//       return;
//     } else if (selectedValue === "alphabetical") {
//       const sortedTitles = [...listTitles].sort();
//       setListTitles(sortedTitles);
//     }
    
//     alert(selectedValue);
//   };

//   const sortByABC = () => {
//     const arrayTitles = listTodos.map(todo => todo.title);
//     const sortedTitles = [...arrayTitles].sort();
//     setListTitles(sortedTitles);
//   };

//   return (
//     <div>
//       <select id="selectBox" name="orderby" className="orderby" onChange={changeFunc} autoFocus>
//         <option value="menu_order" selected="selected">Sorting by default</option>
//         <option value="alphabetical">Alphabetical order</option>
//         <option value="done">Todos Done</option>
//       </select>
//       <div>
//         {listTodos.map((todo) => (
//           <div key={todo.id}>
//             <p>
//               <input id="checkBox" type="checkbox" defaultChecked={todo.completed} />
//               {todo.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";

const ViewTodosUser = ({ listTodos }) => {
  const [sortedTodos, setSortedTodos] = useState([...listTodos]);

  const changeFunc = () => {
    const selectBox = document.getElementById("selectBox");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
    let sortedList = [...listTodos];

    if (selectedValue === "serial") {
      // Sort by serial
      sortedList.sort((a, b) => a.id - b.id);
    } else if (selectedValue === "performance") {
      // Sort by performance (completed tasks first)
      sortedList.sort((a, b) => {
        if (a.completed && !b.completed) {
          return -1;
        } else if (!a.completed && b.completed) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (selectedValue === "alphabetical") {
      // Sort alphabetically by title
      sortedList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedValue === "random") {
      // Sort randomly
      sortedList.sort(() => Math.random() - 0.5);
    }

    setSortedTodos(sortedList);
  };

  return (
    <div>
      <select id="selectBox" name="orderby" className="orderby" onChange={changeFunc} autoFocus>
        <option value="serial">Sort by Serial</option>
        <option value="performance">Sort by Performance</option>
        <option value="alphabetical">Sort Alphabetically</option>
        <option value="random">Sort Randomly</option>
      </select>
      <div>
        {sortedTodos.map((todo) => (
          <div key={todo.id}>
            <p>
              <input id="checkBox" type="checkbox" defaultChecked={todo.completed} />
              {todo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTodosUser;
