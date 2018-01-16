import {isArray} from './var.js'

export default function render(element,parent){

  var {className,style,children,key} = prop||{}
  var {name,prop} = element
  var dom = null

  if(typeof(element)==='string'){
    dom = createTextNode(element)
  }
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
