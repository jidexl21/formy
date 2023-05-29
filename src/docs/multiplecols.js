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