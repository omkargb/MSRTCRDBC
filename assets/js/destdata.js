const dapp = new Vue({
  el:'#dapp',
  data:{
    Dists:[
      {
	  label:"Ratnagiri | रत्नागिरी",
        options:["",
"रत्नागिरी",
"मंडणगड",
"दापोली",
"खेड",
"चिपळूण",
"गुहागर ",
"लांजा",
"राजापूर",
"देवरुख",
  "संगमेश्वर",
  "साखरपा",
  "गणपतीपुळे",
  "माखजन",
  "पाचल",
  "पावस",
 " पाली"]
      },
      {
        label:"District 2",
        options:["","city","city","city","city"]
      },
      {
        label:"District 3",
        options:["","city","city","city","city"]
      }
    ],
    
    selDist:-1,
    selOption:''
  }
});
