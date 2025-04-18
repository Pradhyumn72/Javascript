let store=''
let cal=(value)=>{
    let show=document.querySelector("#display")
    store=store+value
    show.innerHTML=store
}
let result=()=>{
    let show=document.querySelector("#display")
    store= eval(store)
    store.toString() // converts to string
    show.innerHTML=store
}
let del=()=>{
    let show=document.querySelector("#display")
    store= store.slice(0,-1)
    show.innerHTML=store
}