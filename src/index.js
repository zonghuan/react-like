import createElement from './lib/elements.js'
import createClass from './lib/class.js'
import render from './lib/render.js'

var MySpan = createClass({
  render(){
    return  createElement('span',{
      className:this.prop.className,
      children:this.prop.children
    })
  }
})

var MyDiv = createClass({
  getInitialState(){
    return {
      text:'state'
    }
  },
  componentDidMount(){
    this.setState({
      text:'state-2'
    })
  },
  render(){
    return createElement('div',{
      className:'wrap',
      children:[
        createElement(MySpan,{className:'custom',children:[123]}),
        this.state.text
      ]
    })
  }
})

render(createElement(MyDiv),document.getElementById('content'))
