export var isArray = (arr)=>Object.prototype.toString.call(arr)==='[object Array]'

// 对象浅比较
var diffObj = (pre={},cur={})=>{
  for(var i in cur){
    if(cur[i]!==pre[i]){
      return false
    }
  }
  return true
}
// 比对虚拟dom
export var diff = (pre,cur)=>{
  if(!cur){
    return
  }
  if(!pre){
    cur.dirty = true
  }
  if(pre.name!==cur.name){
    cur.dirty = true
  }
  if(!diffObj(pre.prop,cur.prop)){
    cur.dirty = true
  }
  for(var i=0;i<cur.prop.children;i++){
    var child = cur.prop.children[i]
    if('key' in child){
      diff(pre.prop.children.find(child.key),child)
    }else{
      diff(pre.prop.children[i],child)
    }
  }
}

export default {
  root : null
}
