
    <h1>Formy<h1>

<p>A simple approach to creating HTML forms with BOOTSTRAP</p>
<img src="src/docs/assets/sample.png">
<pre>
var fm = [
     { label: "<h3>Enter Your Details Here</h3>", 
	   name: "pin" , type:"titlebox", attrs:{"class":"text-center"}
	},
     { label: "PIN", name: "pin" },
     { label: "Password", name: "pwd", type:"password"},
     { label: "Upload CV", name: "upload", type:"file"},
     { label: "Period", name: "start,end", type:"daterange"},
     { label: "Submit", name: "submit", type:"button"}
];
$("#formarea").formy("createForm", fm);
</pre>
