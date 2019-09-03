class BingoCaller {

    constructor(){

        this.bingoCallerApp = document.querySelector('#BingoCaller');
        this.lastNumber = document.querySelector("#LastNumber");
        
        this.createTable();
        this.onClickOnTheNumber();


        this.bingoDebug();
    }

    createTable(){

        this.createNewRow();
        this.generateNumbers();

    }

    generateNumbers(){
        var i;

        for(i = 1; i<=75 ; i++){

            this.newNumber = document.createElement("td");
            this.numberSpan = document.createElement("span");
            this.numberSpan.innerHTML = i;
            this.newNumber.appendChild(this.numberSpan);
            this.newNumber.setAttribute('id',i);
            this.elemen.appendChild(this.newNumber);

            if(i%15 == 0){
                this.createNewRow();
            }
        }
    }

    createNewRow(){
        let newRow = document.createElement("tr");
        this.elemen = this.bingoCallerApp.appendChild(newRow);

    }

    onClickOnTheNumber(){
        let allTableData = document.querySelectorAll('td');

        for(const tableData of allTableData){

            tableData.addEventListener('click',(e)=>{

                this.changeColorOnClick(tableData);
                this.changeLastNumberOnClick(tableData);
            })

        }

    }

    changeColorOnClick(e){

        e.style.background = "blue";
        e.firstChild.style.color = "white";

    }

    changeLastNumberOnClick(e){
        let lastNumber = e.getAttribute("id");
        this.lastNumber.innerHTML = lastNumber;
    }

    bingoDebug(){
        console.log(this.bingoCallerApp);
    }
}