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
    