import {isArray,domGroup} from './var.js'

var setStyle = (dom,style)=>{
  if(typeof(style)==='object'){
    var curStyle = Object.assign({},style)
    for(var i in curStyle){
      dom.style[i] = curStyle[i]
    }
  }
}

export var renderDom = (element,parent,level=0,index=0)=>{
  var {name,prop} = element
  var {className,style,children,key} = prop||{}
  var dom = null

  // 子元素为字符
  if(['string','number'].indexOf(typeof(element)) > -1){
    dom = document.createTextNode(element)
  }else if(typeof(element.key)==='undefined'){
    element.key = index
  }

  // 原生dom
  if(typeof(name)==='string'){
    dom = document.createElement(name)
  }

  if(typeof(name)==='object'){
    name.prop = prop
    name.state = name.getInitialState()
    name.mounted = true
    name.componentDidMount&&name.componentDidMount()
    renderDom(name.render(),parent,level,index)
  }

  if(dom){

    // textNode不生成reactId
    if(dom.nodeType!==3){
      var reactId = `r-${level}-${index}`
      dom.setAttribute('data-reactId',reactId)
      element.reactId = reactId
    }

    if(typeof(className)==='string'){
      dom.className = className
    }

    setStyle(dom,style)

    parent.appendChild(dom)
    if(isArray(children)){
      for(var i=0;i<children.length;i++){
        renderDom(children[i],dom,level+1,i)
      }
    }
  }
}

// 将createElement创建的对象转化为dom
export default function render(element,parent){

  return renderDom(element,parent)

}
