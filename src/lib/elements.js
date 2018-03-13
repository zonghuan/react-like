import {isArray} from './var.js'

export default (component,prop={},children)=>{
  console.log(prop)
  if(!isArray(prop.children)){
    prop.children = []
  }
  if(isArray(children)){
    prop.children = prop.children.concat(children)
  }
  var node = {
    name:component,
    prop,
    mounted:false,
    dirty:false
  }
  return node
}
