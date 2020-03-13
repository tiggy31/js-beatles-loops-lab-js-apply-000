function theBeatlesPlay(musicians, instruments){
  let newValue= []
  for( let i=0; i<musicians.length; i++){
    
    newValue.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newValue
}

function johnLennonFacts(facts){
  
  let i=0
  let newValue= []
  
  while(i<facts.length){
    
     newValue.push(facts[i] + "!!!")
     i++
  }
  return newValue
}


function iLoveTheBeatles{(num){
  let newArray= []
  let i=0
  
  do{
    newArray.push(num)
    i++
  }while(i<15)
  
  
}






