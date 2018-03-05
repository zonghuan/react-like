
var base = {
  getInitialState(){
    return {}
  },
  componentDidMount(){

  },
  setState(){
    
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
