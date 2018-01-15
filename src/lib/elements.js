import {elements} from './var.js'

export default (component,prop,children)=>{
  var wrap = null
  if(typeof(component)==='function'){

  }
  if(typeof(component)==='string'){
    wrap = document.createElement(component)
  }
  if(!wrap){
    return
  }
  
}
