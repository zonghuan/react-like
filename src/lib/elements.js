import {elements} from './var.js'

export default (component,prop,children)=>{
  var wrap = null
  if(typeof(component)==='function'){
    wrap = {
      name:component.name,
      prop,
      children
    }
  }
  if(typeof(component)==='string'){
    wrap = {
      name:component,
      prop,
      children
    }
  }
  return wrap

}
