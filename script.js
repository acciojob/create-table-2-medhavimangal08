function createTable() {
    //Write your code here
	let table=document.querySelector("#myTable")
	let r=prompt("Input number of rows")
	let c=prompt("Input number of column")
	for(let i=0;i<r;i++){
		let row = table.insertRow(i);
		for(let j=0;j<c;j++){
			let cell=row.insertCell(j)
			cell.innerText=`Row-${i} Column-${j}`	;
		}
	}
}
