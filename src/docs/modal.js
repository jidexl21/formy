//example specific code create the buttons
if($("#modal-trigger").length === 0){$("#formarea").append($("<button>",{"class":"btn btn-default outline-primary", id:"modal-trigger"}).text("Show Modal Form"))}; 
if($("#modal-large").length === 0){$("#formarea").append($("<button>",{"class":"btn btn-default outline-primary", id:"modal-large"}).text("Show Large Form"))}; 
if($("#modal-xlarge").length === 0){$("#formarea").append($("<button>",{"class":"btn btn-default outline-primary", id:"modal-xlarge"}).text("Show extra large Form"))}; 

var fm = [
     { label: "<h3>Enter Your Details Here</h3>", name: "pin" , type:"titlebox", attrs:{"class":"text-center"}},
     { label: "PIN", name: "pin" },
     { label: "Password", name: "pwd", type:"password"},
     { label: "Upload CV", name: "upload", type:"file"},
     { label: "Period", name: "start,end", type:"daterange"},
     { label: "Submit", name: "submit", type:"button"}
	];
	
	var form1 = $("<div>").formy("createForm", fm ,{type:"horizontal",colratio:"1:2"})
	var form2 = $("<div>").formy("createForm", fm,{type:"horizontal"});
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
	