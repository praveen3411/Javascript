const initialValue = 0;
let Storevalue = initialValue;
function add() {
    Storevalue = Storevalue + InputData.value;
    mainOutput(Storevalue,"")
}

Addition.addEventListener("click",add)