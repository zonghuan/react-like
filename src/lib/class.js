import varGroup from './var.js'
import {diff} from './var.js'

var base = {
  getInitialState(){
    return {}
  },
  componentDidMount(){

  },
  setState(state,cb=(()=>{})){
    if(!this.mounted){
      console.error(`不能在getInitialState中使用setState`)
    }
    var preState = this.state
    var preObj = Object.assign(varGroup.root)
    console.log(varGroup.root)
  },
  render(){

  }
}


export default (component)=>{

  if(typeof(component)==='function'){
    component = {
      render(){
        return component.call(null)
      }
    }
  }

  return Object.assign({},base,component)

}
