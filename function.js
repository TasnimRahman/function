//unit conversion
function converter(meter) {
    var meter;
    var Kilometer = meter / 1000;
    return Kilometer;
  }

  var output = converter(200404);
  document.write("Kilometer : " + output + "<br>"+"<br>");

//Product price calculation
function budgetProducts(mobile,laptop,camera) {
    var mobile = mobile * 50;
    var laptop = laptop * 100;
    var camera = camera *20;

    var total = mobile+laptop+camera;
    return total;
    }

var result = budgetProducts(3,3,3);
document.write("Total price : " + result + "<br>"+"<br>");




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
document.write("Total rent = " + totalRent + "<br>"+"<br>");



//finding best friend
function bestFriend(array){
    var count = toString(0);
    for(var i=0; i<array.length; i++){
        if(count.length<array[i].length){
            count = array[i];
        }
    }
    return count;
}
    
    var friend = bestFriend(["Tasnim Rahman", "Monisha Akter", "Mashruba Jabin", "Afsana Nahid", "Farha Islam", "Nibedita Shaha Dipa"]);
    document.write("Your best friend is " + friend);




