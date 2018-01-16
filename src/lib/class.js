export default (component)=>{
  return ()=>{
    return component.render()
  }
}
