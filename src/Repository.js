let croppers={}

export function getStore(i=undefined){
    if(i!==undefined){
        return croppers[i]
    }
    return croppers;
}

export function setStore(i,refr){
   return  croppers[i]=refr
}

export function resetStore(){
    croppers={}
}
