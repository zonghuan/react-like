import createElement from './lib/elements.js'
import createClass from './lib/class.js'
import render from './lib/render.js'

var MySpan = createClass({
  render(){
    return  createElement('span')
  }
})

var MyDiv = createClass({
  render(){
    return createElement(MySpan,{className:'custom'})
  }
})

render(createElement(MyDiv))
