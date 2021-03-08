//calculating rent
function hotelRent(day) {

    if(day>=1 && day<=10){
        var rent = day*100;
    }

    else if(day>=11 && day<=20){
        var rent = [(10*100)+((day-10)*80)];
    }

    else
        {var rent = [(10*100)+(20*80)+((day-20)*50)];
            }
    return rent;
    }

var totalRent = hotelRent(16);
document.write("Total rent = " + totalRent + "<br>");




//finding best friend
var array = ["Tasnim Rahman", "Monisha Akter", "Mashruba Jabin", "Afsana Nahid", "Farha Islam", "Nibedita Shaha Dipa"];

array.sort((a,b) => b.length - a.length);

document.write("Your best friend is " + array[0]);


