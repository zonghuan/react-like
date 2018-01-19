import {isArray} from './var.js'

var setStyle = (dom,style)=>{
  if(typeof(style)==='object'){
    var curStyle = Object.assign({},style)
    for(var i in curStyle){
      dom.style[i] = curStyle[i]
    }
  }
}

export default function render(element,parent){

  var {name,prop} = element
  var {className,style,children,key} = prop||{}
  var dom = null

  if(['string','number'].indexOf(typeof(element)) > -1){
    dom = document.createTextNode(element)
  }
  if(typeof(name)==='string'){
    dom = document.createElement(name)
  }
  if(typeof(name)==='object'){
    name.prop = prop
    render(name.render(),parent)
  }

  if(dom){
    if(typeof(className)==='string'){
      dom.className = className
    }

    setStyle(dom,style)

    parent.appendChild(dom)
    if(isArray(children)){
      for(var i=0;i<children.length;i++){
        render(children[i],dom)
      }
    }
  }

}
