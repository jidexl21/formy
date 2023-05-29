var fm = [
    { label: "<h3>Which of the options is the tallest mountain in Africa?</h3>", type:"titlebox", attrs:{"class":"text-left"}},
    { label: "Mt. Everest", name: "mt", type:"radio"}, 
    { label: "Mt. Kilimanjaro", name: "mt", type:"radio", attrs:{"float":"left"}}, 
    { label: "Mt. Everest", name: "mt", type:"radio"},
    { label: "<h3>Other Settings</h3>", type:"titlebox",attrs:{"class":"col-sm-12"}},
    { label: "Allow Cookies?", type:"checkbox"},
    { label: "<hr/>", type:"titlebox",attrs:{"class":"col-sm-12"}},
    { label: "Enable Shortcuts", type:"switch"},
   ];
    $("#formarea").formy("createForm", fm, { type: "horizontal", colratio: "1:3" });