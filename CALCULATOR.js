function appendValue(value){
    document.getElementById('display').value+= value
    // adding elements t0 the input box
}
function calculate(){
    try{
         document.getElementById('display').value = eval( document.getElementById('display').value);   
    } catch(e){
         document.getElementById('display').value = "Error";
    }

}
function clearDisplay(){
    document.getElementById('display').value =' '
}
