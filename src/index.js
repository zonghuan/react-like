import createElement from './lib/elements.js'
import createClass from './lib/class.js'
import render from './lib/render.js'

var MySpan = createClass({
  render(){
    return  createElement('span',{
      children:this.prop.children
    })
  }
})

var MyDiv = createClass({
  render(){
    return createElement('div',{
      className:'wrap',
      children:[
        createElement(MySpan,{className:'custom',children:[123]}),
        'abcd'
      ]
    })
  }
})

render(createElement(MyDiv),document.getElementById('content'))
