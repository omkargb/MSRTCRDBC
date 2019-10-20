const vapp = new Vue({
  el:'#vapp',
  data: {
    taluka: [
      { di: '', value: '' },
      { di: 'रत्‍नागिरी', value: 'रत्नागिरी' },
      { di: 'रत्‍नागिरी', value: 'मंडणगड' },
      { di: 'रत्‍नागिरी', value: 'दापोली' },
      { di: 'रत्‍नागिरी', value: 'खेड' },
      { di: 'रत्‍नागिरी', value: 'चिपळूण' },
      { di: 'रत्‍नागिरी', value: 'गुहागर' },
      { di: 'रत्‍नागिरी', value: 'लांजा' },
      { di: 'रत्‍नागिरी', value: 'राजापूर' },
      { di: 'रत्‍नागिरी', value: 'देवरुख' },
      { di: 'रत्‍नागिरी', value: 'संगमेश्वर' },
      { di: 'रत्‍नागिरी', value: 'साखरपा' },
      { di: 'रत्‍नागिरी', value: 'गणपतीपुळे' },
      { di: 'रत्‍नागिरी', value: 'माखजन' },
      { di: 'रत्‍नागिरी', value: 'पाचल' },
      { di: 'रत्‍नागिरी', value: 'पावस' },
      { di: 'रत्‍नागिरी', value: 'पाली' }
    ]
  }
});


function myFunction() {
  var st1 = document.getElementById("stal1").value;
    var st2 = document.getElementById("stal2").value;
    var st3 = document.getElementById("stal3").value;
    var st4 = document.getElementById("stal4").value;
	
    var src = document.getElementById("ssrc").value;
    var dest = document.getElementById("sdest").value;
	
  document.getElementById("v1").innerHTML = st1;
    document.getElementById("v2").innerHTML = st2;
    document.getElementById("v3").innerHTML = st3;
    document.getElementById("v4").innerHTML = st4;
	
    document.getElementById("srcp").innerHTML = src;
    document.getElementById("destp").innerHTML = dest;
}

		function printDiv(divName){
			var printContents = document.getElementById(divName).innerHTML;
			var originalContents = document.body.innerHTML;
			document.body.innerHTML = printContents;
			window.print();
			document.body.innerHTML = originalContents;
		}
