export default (component)=>{
  return ()=>{
    if(typeof(component)==='function'){
      return component()
    }else if(component.render){
      return component.render()  
    }
  }
}
