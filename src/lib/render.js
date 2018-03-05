import {isArray,domGroup} from './var.js'

var setStyle = (dom,style)=>{
  if(typeof(style)==='object'){
    var curStyle = Object.assign({},style)
    for(var i in curStyle){
      dom.style[i] = curStyle[i]
    }
  }
}

// 将createElement创建的对象转化为dom
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
    name.state = name.getInitialState()
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
