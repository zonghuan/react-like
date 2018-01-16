import {elements} from './var.js'

export default (component,prop,children)=>{
  var node = null
  
  if(typeof(component)==='string'){
    node = {
      name:component,
      prop,
      children
    }
  }
  return wrap

}
