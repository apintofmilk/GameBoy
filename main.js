/*
                                                                       M~M.    
                                MMM.            MM.                    MM.M     
                      .MM      MMMM           MMMMMM                 IMMMMM     
      MM~             .MNMMM           M        MM             MMM     MM       
     MM MMM.           MM .M=   MM    MM MM.    MM            MM :M,   MM       
    MM. ZMM M.        :MD .MM   MM M. MMMMM  M.+MM .M         MM  MM   MM       
    MM  MM? M         ?MM MM    M$.M  MMMMM N. ~M$.M         .MM  M    MM       
    MM  MMMM          DMMMM.    MMM   MM .MM    MMM+          .MMM    .MM       
     MMM              MM                        ~M.                    MM       
                      MM                                                        
                                                                                
     .      .     .           ..         .   ..               ..    ..    ..    
    MMMMMMMMM.  .MMMMMMMMM   .MMMMMM7   DMMMMM,           MMMMMM   .MMMMMMM.    
    MMMMMMMMM.  MMMMMMMMMM   .MM  MM,   DMMMMM,           MMMMMM  ~MMMMMMM      
    MMMMMMMMMM  MMMMMMMMMM   $M.  ,MM   DMMMMM,           MMMMMM MMMMMMMM       
    MMMMMMMMMM. MMMMMMMMMM  .MMMMMMNM   DMMMMM,           MMMMMMMMMMMMMM        
    MMMMMMMMMMMMMMMMMMMMMM  NM MMMMMMM  DMMMMM,           MMMMMMMMMMMMM.        
    MMMMMMMMMMMMMMMMMMMMMM  MMMMMMMMMM  DMMMMM,           MMMMMMMMMMMI          
    MMMMMMMMMMMMMMMMMMMMMM  MMMMMMMMIM  DMMMMM,           MMMMMMMMMMM.          
    MMMMMMDMMMMMMMM.MMMMMM  MMMMMMMMIM  DMMMMM,           MMMMMMMMMMMM,         
    MMMMMM MMMMMMMM MMMMMM  MMMMMMMMIM  DMMMMM,           MMMMMMMMMMMMM~        
    MMMMMM MMMMMMMM MMMMMM  MMMMMMMMIM  DMMMMM~           MMMMMMMMMMMMMM,       
    MMMMMM  MMMMMM  MMMMMM  MMMMMMMMIM  DMMMMMMMMMMMMMM   MMMMMM  MMMMMMM=      
    MMMMMM  MMMMMM  MMMMMM  MMMMMMMMIM  DMMMMMMMMMMMMMM.  MMMMMM   MMMMMMM$     
    MMMMMM  MMMMM   MMMMMM  MMZ77777MM. DMMMMMMMMMMMMMM.  MMMMMM    MMMMMMMN    
     MMMM   ,DMM=   7MMMM.  .?MMMMMMM    MMMMMMMMMMMMM    =MMMM.    .$MMMMM.    
                                                                                

Theme Name:     GameBoy Lock Screen
Version:		1.0
Theme URI: 		http://www.apintofmilk.com/
Description:    An iPhone Lock Screen in the syle of the GameBoy.
Author: 		/u/apintofmilk
Copyright:		Modifications allowed with this notice remaining in place.
*/

if (Lang == "en"){
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
}

if (Lang == "ca"){
	var days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
}

if (Lang == "fr"){
	var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
	var months=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
}

if (Lang == "de"){
	var days = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
	var months=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
}

function updateClock() { 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h"){
	timeOfDay = "";
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;  
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = currentMinutes;
document.getElementById("ampm").innerHTML = timeOfDay;

document.getElementById("day").innerHTML = days[currentTime.getDay()];
document.getElementById("date").innerHTML = currentDate;
document.getElementById("month").innerHTML = months[currentTime.getMonth()];
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}