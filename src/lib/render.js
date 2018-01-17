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

  if(typeof(element)==='string'){
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
      if(children.length===1&&['string','number'].indexOf(typeof(children[0]))>-1){
        dom.innerHTML = children[0]
        return
      }
      for(var i=0;i<children.length;i++){
        render(children[i],dom)
      }
    }
  }

}
