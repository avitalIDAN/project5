import React, { Component} from "react";
import './ViewPostsUser.css';


class ViewPostsUser extends Component {
    constructor(props) {
      super(props);
      this.boldThePost = this.boldThePost.bind(this);
      this.showComments = this.showComments.bind(this);    
      this.getCurrentComments = this.getCurrentComments.bind(this);  
      this.data={
        CommentForPost:[]
       };  
    }

    async getCurrentComments(id){
      await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => {if(response.ok) {
                              return response.json();    
                          } else{
                             throw "Request failed!";    
                      }
          })
        .then(listComments=> {if(listComments.length==0){
                          throw "You have not Comments";
                      }else{
                        this.data.CommentForPost=listComments;
                        return listComments;
                      }
          })
        .catch(error=>alert(""+error));
    }

    async showComments(id){
      var comments= document.getElementById("forComments");
      await this.getCurrentComments(id);
      this.data.CommentForPost.map((comment)=>(
        comments.innerHTML+= comment.name + "\r\n" + comment.body+ "\r\n"
      ));
    }
    
    boldThePost(id,e){
      var body= document.getElementById("postBody");
      var title= document.getElementById("title");
      //title.style.fontWeight="bold";

      var currentPost= this.props.listPosts[id-1];
      body.innerText=currentPost.body;

       var button = document.createElement("button");
       button.addEventListener('click',(e) => {button.innerHTML="Hide the comments &#xf086"; this.showComments(id, e);});
       button.setAttribute("id", "btnComments");
       button.setAttribute("class", 'fas');
       button.innerHTML = "View the comments &#xf086";
       body.appendChild(button);
    }

    render() {
      return (  
        <div>
            {this.props.listPosts.map((post)=>(
            <div>
                <button id="title" onClick={(e) => this.boldThePost(post.id, e)}>{post.id}. {post.title}</button>  
                <p id="postBody" ></p> 
                <div id="forBtn"></div>   
                <div id="forComments"></div>
             </div>        
          ))}
        </div>
      );
    }
  }
   
  export default ViewPostsUser;