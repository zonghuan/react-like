import {isArray} from './var.js'

export default (component,prop={},children)=>{
  if(!isArray(prop.children)){
    prop.children = []
  }
  if(isArray(children)){
    prop.children = prop.children.concat(children)
  }
  var node = {
    name:component,
    prop,
    mounted:false
  }
  return node
}
