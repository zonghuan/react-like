import {isArray} from './var.js'

export default function render({name,prop},parent){
  var {className,style,children,key} = prop
  var dom = null
  if(typeof(name)==='string'){
    dom = document.createElement(name)
  }
  if(typeof(name)==='function'){
    render(name(),parent)
  }
  if(dom){
    parent.appendChild(dom)
    if(isArray(children)){
      for(var i=0;i<children.length;i++){
        render(children[i],dom)
      }
    }
  }

}
