var preloadForm = [
    { label: "&lt;h3&gt;Enter Your Details Here&lt;/h3&gt;", 
       type:"titlebox", attrs:{"class":"text-center"}
   },
   { label: "Name", name: "name" , value:"John Doe"},
   { label: "Title", name: "title", value:"Master", type:"select", options:["Mr", "Mrs", "Miss", "Master", "Chief", "Dr"] },	 
   { label: "Division", name: "division", type:"select", value:2, options:[
       {text:"Unspecified",name:null},
       {text:"Army",name:1},
       {text:"Navy",name:2},
       {text:"Airforce",name:3},
      ] },	 
   { label: "Children", name:"kids", value:2, type:"select", options:[0,1,2,3,4,5,6,7] },	
   { label: "Iteration", name:"iter", value:2, type:"select", options:[{name:0, text:0},{name:1, text:1},{name:2, text:2}] },
   { label: "Password", name: "pwd", type:"password", value:"What"},
   { label: "Upload CV", name: "upload", type:"file"},
   { label: "Period", name: "start,end", type:"daterange",value:"01-01-2010,01-01-2019"},
   { label: "Submit", name: "submit", type:"button"}
];
$("#preload-formarea").formy("createForm", preloadForm);
