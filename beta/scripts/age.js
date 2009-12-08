var one_day=1000*60*60*24;
var one_month=1000*60*60*24*30;
var one_year=1000*60*60*24*30*12;

function displayage(yr, mon, day, unit, decimal, round){
	today=new Date()
	var pastdate=new Date(yr, mon-1, day)

	var countunit=unit;
	var decimals=decimal;
	var rounding=round;

	finalunit=(countunit=="days")? one_day : (countunit=="months")? one_month : one_year
	decimals=(decimals<=0)? 1 : decimals*10

	if (unit!="years"){
		if (rounding=="rounddown")
			document.write(Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit)
		else
			document.write(Math.ceil((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit)
		}
	else{
		yearspast=today.getFullYear()-yr-1
		tail=(today.getMonth()>mon-1 || today.getMonth()==mon-1 && today.getDate()>=day)? 1 : 0
		pastdate.setFullYear(today.getFullYear())
		pastdate2=new Date(today.getFullYear()-1, mon-1, day)
		tail=(tail==1)? tail+Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals : Math.floor((today.getTime()-pastdate2.getTime())/(finalunit)*decimals)/decimals
		document.write(yearspast+tail)
	}
}
	
