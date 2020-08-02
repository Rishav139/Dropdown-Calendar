var month = new Date().getMonth();
var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ptr = 0;

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function fun(month){
  $('ul li').remove();
  $('ul').append('<li>Su</li><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li>');

  var d = new Date();

  $('.monthname').text(arr[month]);

  var firstDay = new Date(2020, month, 0).getDay();

  for(var i=1;i<=firstDay;i++)
    $('ul').append('<li></li>');

  var totalDays = new Date(2020, month+1, 0).getDate();

  for(var i=1;i<=totalDays;i++)
    $('<li>'+i+'</li>').appendTo('ul');

    $('li').click(function(){

      var value = parseInt(this.innerHTML);
      if(Number.isInteger(value)) {
        if(ptr == 1)
          $('.end').text("Ending Date : " + this.innerHTML + " " + arr[month] + " 2020");

        else
          $('.start').text("Starting Date : " +this.innerHTML + " " + arr[month] + " 2020");

        ptr ^= 1;
      }
    });
}

fun(month);

$('.minusmonth').click(function(){
  month -= 1;
  if(month === -1)
    month = 11;
  fun(month);
});

$('.addmonth').click(function(){
  month += 1;
  if(month === 12)
    month = 0;
  fun(month);
});
