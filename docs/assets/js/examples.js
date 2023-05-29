var checkboxForm = [
    { label: "<h3>Which of the options is the tallest mountain in Africa?</h3>", type:"titlebox", attrs:{"class":"text-left"}},
    { label: "Mt. Everest", name: "mt", type:"radio"}, 
    { label: "Mt. Kilimanjaro", name: "mt", type:"radio", attrs:{"float":"left"}}, 
    { label: "Mt. Everest", name: "mt", type:"radio"},
    { label: "<h3>Other Settings</h3>", type:"titlebox",attrs:{"class":"col-sm-12"}},
    { label: "Allow Cookies?", type:"checkbox"},
    { label: "<hr/>", type:"titlebox",attrs:{"class":"col-sm-12"}},
    { label: "Enable Shortcuts", type:"switch"},
   ];
    $("#checkbox-formarea").formy("createForm", checkboxForm, { type: "horizontal", colratio: "1:3" });
    
var collapseForm = [
    { label: "<h3>Enter Your Details Here</h3>", name: "pin" , type:"titlebox", attrs:{"class":"text-center"}},
    { label: "PIN", name: "pin" },
    { label: "Password", name: "pwd", type:"password"},
    { label: "Upload CV", name: "upload", type:"file"},
    { label: "Period", name: "start,end", type:"daterange"},
    { label: "Submit", name: "submit", type:"button"}
   ];
    var formNode = $("<div>").formy("createForm", collapseForm, { type: "horizontal", colratio: "1:3" })
    $("#collapse-formarea")
    .formy("addCollapse", {"name":"Show Form", "body":formNode, bsversion:3});
    
//example specific code create the buttons
if($("#modal-trigger").length === 0){$("#modal-formarea").append($("<button>",{"class":"btn btn-default outline-primary", id:"modal-trigger"}).text("Show Modal Form"))}; 
if($("#modal-large").length === 0){$("#modal-formarea").append($("<button>",{"class":"btn btn-default outline-primary", id:"modal-large"}).text("Show Large Form"))}; 
if($("#modal-xlarge").length === 0){$("#modal-formarea").append($("<button>",{"class":"btn btn-default outline-primary", id:"modal-xlarge"}).text("Show extra large Form"))}; 

var modalForm = [
     { label: "<h3>Enter Your Details Here</h3>", name: "pin" , type:"titlebox", attrs:{"class":"text-center"}},
     { label: "PIN", name: "pin" },
     { label: "Password", name: "pwd", type:"password"},
     { label: "Upload CV", name: "upload", type:"file"},
     { label: "Period", name: "start,end", type:"daterange"},
     { label: "Submit", name: "submit", type:"button"}
	];
	
	var form1 = $("<div>").formy("createForm", modalForm ,{type:"horizontal",colratio:"1:2"})
	var form2 = $("<div>").formy("createForm", modalForm,{type:"horizontal"});
	var action = function(){console.log(arguments)}
	
	$("#modal-trigger").click(function(){
		$("body").formy("createModal", {title:"<h2>Sample Modal Form</h2>", body:form1, onAction:action, animated:true})
		.modal("show")
	})
	$("#modal-large").click(function(){
		$("body").formy("createModal", {title:"<h2>Large Modal Form</h2>", body:form2, size:"lg", onAction:action, animated:true})
		.modal("show")
	})
	$("#modal-xlarge").click(function(){
		$("body").formy("createModal", {title:"<h2>Extra Large Modal Form</h2>", body:form2, size:"xl", onAction:action, animated:true})
		.modal("show")
	}); 

var multipleColsForm = [
    { label: "&lt;h3&gt;Enter Your Details Here&lt;/h3&gt;", 
      name: "pin" , type:"titlebox", attrs:{"class":"text-center"}
   },
    { label: "PIN", name: "pin" },
    { label: "Password", name: "pwd", type:"password"},
    { label: "Upload CV", name: "upload", type:"file"},
    { label: "Period", name: "start,end", type:"daterange"},
    { label: "Submit", name: "submit", type:"button"}
   ];
    $("#multiplecols-formarea").formy("createForm", multipleColsForm, {columns:3});
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
