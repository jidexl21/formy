/**
	Formy Library: 
	Olajide Fagbuji
	var options = { 
		type:"default", // horizontal
		colratio:"1:5"
	}
   var fm = [
     { label: "PIN", name: "pin" },
     { label: "Phone", name: "phone" }
	];
     $("#example").formy("createForm", fm, { type: "horizontal", colratio: "1:3" });
	//text, textarea, daterange, select, date, hidden, titlebox, password,file,	Submit, Button
	TO DO:
	Add Combobox
	Add CheckBox
	Add Radio Button
	Add Validations
	Add DragnDropUpload
	Add RangeSlider
	Add Internationalization
	Add Wizard
	Add Location
*/
(function( $ ){

"use strict";
var camelToSentence = function (txt){
    var r = txt.charAt(0).toUpperCase() + txt.substr(1);
    return r
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .replace(/([a-z])([0-9])/gi, '$1 $2')
        .replace(/([0-9])([a-z])/gi, '$1 $2');
  }
  
var debug = true; /*Set Debug to true to allow errors in console */
var x = { 
 addCollapse: function(obj,cfg){
    var def  = {
        id: (function(){ return "i"+Math.floor(Math.random() * 1000000000).toString(36)})(), 
        name: "Simple Collapsible",
        body:"\
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        bsversion:3
    }; 
    $.extend(def, cfg); 
    var colbehavior = (def.bsversion === 3)?"col-xs-12": "col";
    var sett = {"class":"btn btn-info  btn-sm btn-block", "data-toggle":"collapse", "data-target":"#"+def.id};
    if(def.parent){sett["data-parent"] = "#"+def.parent; }; 
    var ts =  $("<div>", {"class":"rules container-fluid"}).append(
        $("<div>", {"class":"row no-gutters"}).append(
        $("<div>", {"class":colbehavior}).append($("<button>", sett).text(def.name) )
        ))
        .append(
            $("<div>", {"class":"collapse well well-sm", "id":def.id}).append(def.body)
        )
    obj.append(ts);
    return ts; 
 },
 createModal: function(obj, cfg){
     var Id = "mdl_"+ Math.ceil(Math.random() * 9999999999999999).toString(32);
     cfg = $.extend({title:"Title", body:"",
      size:"",//options: sm, lg or xl
      animated:"false",
      onAction:function(data, modal){
       console.log(data);
       console.log($(this)); 
       console.log(modal) 
       //return false;
     }}, cfg)
     var msize =(cfg.size)?" modal-"+ cfg.size:"";
     var anim = (cfg.animated === true)?" fade":""
     var mdl = $("<div>", {"class":"modal"+anim, "tabindex":"-1", "role":"dialog", "id":Id}).append(
        $("<div>", {"class":"modal-dialog"+msize, "role":"document"}).append($("<div>",{"class":"modal-content"}).append(
            $("<div>", {"class":"modal-header"}).append($("<div>", {"class":"row"}))
            .append($("<div>",{"class":"col-xs-11"}).append(cfg.title))
            .append($("<div>",{"class":"col-xs-1"})
                .append($("<button>", {"class":"close", "data-dismiss":"modal", "aria-label":"Close"}).html("<span aria-hidden=\"true\">&times;</span>"))
            )
        ).append(
            $("<div>", {"class":"modal-body"})
                .append(cfg.body)
        ).append(
            $("<div>", {"class":"modal-footer"})
                .append($("<button>", {"class":"btn btn-default", "data-dismiss":"modal"}).html("Close"))
                .append($("<button>", {"class":"btn btn-primary"}).html("Save Changes"))
        ))
    ).on("hidden.bs.modal", function(){
        $(this).remove(); 
    }).each(function(){
        //console.log($(this).find(".modal-footer .btn-primary"))
        $(this).find(".modal-footer .btn-primary").on("click", function(){
            var formdata = [null, $("#"+Id)]; 
            var forms = [];
            $(this).parent().parent().find("form").each(function(n){
                forms.push($(this).serializeArray()); 
                //formdata=[fm]
            }); 
            formdata = (forms.length == 1)? [forms[0]] : [forms, $("#"+Id)];
            var result = cfg.onAction.apply($(this), formdata); 
            if(result !== false){  $("#"+Id).modal("hide");}
        })
    });
    obj.append(mdl);
    return mdl; 
 },
 createForm: function (obj, cfg, props) {
            var  calcColumns = -1;
            var p = $.extend({ type: 'default', colratio: "1:5", columns:1, bsversion:3}, props);
            var randname = function () { return "ctl_" + Math.round(Math.random() * 1000000); }
            //var fm = [{ type: "text", value: "", label: "Field Name", name: "fldname" }]
            var fm = [];
            var fm = $.extend(fm, cfg)
            var cols = p.colratio.split(":"); var factor = [];
            factor[0] = (12 / (parseInt(cols[0]) + parseInt(cols[1]))) * parseInt(cols[0]);
            factor[1] = (12 / (parseInt(cols[0]) + parseInt(cols[1]))) * parseInt(cols[1]);
            var objclas ={ role: "form"}; 
            if(p.bsversion == 4) objclas["class"] ="row"; 
            $(obj).append($("<form>", objclas).each(function () {
                if (p.type == 'horizontal') $(this).addClass('form-horizontal');
				var clen =''; 
				if(p.columns > 1 ){
					calcColumns  = Math.round(12/p.columns);
					clen = (calcColumns > 0) ? " col-sm-"+calcColumns:"";
                }
                var hrule = (p.type == 'horizontal')?" row":"";
				var xCount= 0;
                for (var i = 0; i < fm.length; i++) {
                    var tad = { apply: false, isLocal: true, name: "any", local: [], prefetch: "", limit: 10 }
                    var def = { type: "text", value: "", label: "Not Set", name: randname(), attrs: {}, typeahead: tad };
					var gdef = { "class": 'form-group'+clen+hrule };
					if((p.columns > 1 )&& (xCount%(calcColumns-1)) == 0 ){ $.extend(gdef,{"style":"clear:left;"}); }; 
					//$.extend(gdef,{"style":"background:#f00"})
                    $(this).append($("<div>", gdef).each(function () {
                        var o = $.extend(def, fm[i]); $.extend(o.typeahead, fm[i].typeahead);
                        var lbl = $('<div/>').text(camelToSentence(fm[i].label)).html();
                        if(o.type != "hidden"){
                            $(this).append($("<label>").html(lbl).each(function () {
                                var cs = '';
                                if (p.type == 'horizontal') { $(this).addClass('control-label').addClass('col-sm-' + factor[0]) }
                            }));
                        }else{
                            $(this).css("display","none");
                        }
                        
                        var el;

                        switch (o.type) {
                            case "textarea":
                                var att = $.extend({ name: o.name, "class": "form-control" }, o.attrs)
                                el = $("<textarea>", att).each(function () { $(this).val(o.value) });
                                break;
                            case "switch":
                                var att = $.extend({ type:"checkbox", name: o.name, "id": 'switch_'+o.name }, o.attrs);
                                el = $("<div>", {"class":"formy-switch"})
                                .append($("<input>", att).each(function () { $(this).val(o.value) }))
                                .append($("<label>", {"class":"label-default", "for":att.id}))
                            break;  
                            case "daterange":
                                var c = o.name.split(","); var end = (c.length > 1) ? c[1] : "";
                                var v = o.value.split(","); var val2 = (v.length > 1) ? v[1] : "";
                                var i1 = { type: "text", "class": "form-control", name: c[0], value:v[0] }
                                var i2 = { type: "text", "class": "form-control", name: v[0], value:v[1] }
                                el = $("<div>", { "class": "input-daterange input-group", "data-date-format": o.format })
                                    .append($("<input>", i1))
                                    .append($("<span>", { "class": "input-group-addon" }).text("to"))
                                    .append($("<input>", i2))
                                break;
                            case "select":
                                var att = $.extend({ type: o.type, name: o.name, "class": 'form-control' }, o.attrs)
                                el = $("<select>", att).each(function () {
                                    var options = $.extend([], o.options);
                                    for (var i = 0; i < options.length; i++) {
                                        if (typeof options[i] == "object") {
                                            var val = (options[i].name == undefined) ? options[i].value : options[i].name;
                                            var set = (o.value === val)?{ value: val, selected:"selected" }:{ value: val };
                                            $(this).append($("<option>", set).text(options[i].text));
                                        }
                                        if (typeof options[i] == "string") {
                                            var set = (o.value === options[i])?{ value: options[i], selected:"selected" }:{ value: val };
                                            $(this).append($("<option>", set).text(options[i]));
                                        }
                                    }
                                });
                                break;
                            case "date":
                                //alert(o.format);
                                var att = $.extend({ type: "text", name: o.name, "class": 'form-control input-date', "data-date-format": o.format }, o.attrs)
                                el = $("<input>", att).each(function () {
                                    $(this).val(o.value);
                                });
                                break;
                            case "hidden":
                                xCount--;
                                var att = $.extend({ type: o.type, name: o.name }, o.attrs)
                                el = $("<input>", att).each(function () {
                                    $(this).val(o.value);
                                });
                                break;                            
							case "titlebox": xCount--; break;
							case "password": 
							    var att = $.extend({ type: o.type, name: o.name, "class": 'form-control' }, o.attrs)
                                el = $("<input>", att).each(function () {
                                    $(this).val(o.value);
								})
							break;
							case "button": 
							case "submit": 
							    var att = $.extend({ type: o.type, name: o.name, "class": 'btn btn-default' }, o.attrs)
                                el = $("<input>", att).each(function () {
                                    $(this).val(camelToSentence(o.label));
								})
							break;
							case "file": 
							    var att = $.extend({ type: o.type, name: o.name, style:"display: none;" }, o.attrs)
                                el = $("<input>", att)
							break;
                            default:
                                var att = $.extend({ type: o.type, name: o.name, "class": 'form-control' }, o.attrs)
                                el = $("<input>", att).each(function () {
                                    $(this).val(o.value);
                                    o.typeahead = $.extend(tad, o.typeahead);
                                    if (o.typeahead.apply) {
                                        $(this).addClass("typeahead").data("typeahead-name", o.typeahead.name).attr("autocomplete", "off").attr("spellcheck", "false");
                                        if (o.typeahead.isLocal == true || o.typeahead.isLocal == "true") {
                                            // alert(JSON.stringify(o.typeahead.local))
                                            $(this).data("typeahead-local", o.typeahead.local).data("typeahead-isLocal", true).data("typeahead-limit", o.typeahead.limit)
                                        }
                                        if (o.typeahead.isLocal == false) {
                                            $(this).data("typeahead-prefetch", o.typeahead.prefetch).data("typeahead-isLocal", false).data("typeahead-limit", o.typeahead.limit);
                                        }
                                    }
                                });
                            break;
                        }
                        if (p.type == 'horizontal') {							
							switch (o.type){
								
								case "hidden":$(this).append(el); break;
								case "titlebox": $(this).empty().append(o.label).each(function(){
                                    for(var key in o.attrs){$(this).attr(key,o.attrs[key])}                             
                                    //$(this).append("Nice one")
								});  break; 
								case "file": $(this).append($('<div>', { "class": "col-sm-" + factor[1] }).append($('<span>',{"class":"selection text-muted"})).prepend(' ').prepend($("<label>",{class:"btn btn-default btn-file"}).append("Browse...").append(el))); 
								    el.on('change', function() {
										var input = $(this),
											numFiles = input.get(0).files ? input.get(0).files.length : 1,
											label = input.val().replace(/\\/g, '/').replace(/.*\//, '');

											input.trigger('fileselect', [numFiles, label]);
									});
									 el.on('fileselect', function(event, numFiles, label) {
										$(this).parent().parent().find(".selection").text(label)
									});
								break; 
								case "button": case "submit":$(this).find('label').text(''); 
								default: $(this).append($('<div>', { "class": "col-sm-" + factor[1] }).append(el)); break;
							}
                        } else {
							switch (o.type){
								case "button": case "submit":$(this).find('label').html('&nbsp;').css('display','block'); $(this).append(el); break;
                                case "titlebox": $(this).empty().append(o.label).each(function(){
                                    for(var key in o.attrs){$(this).attr(key,o.attrs[key])}
                                    $(this).css("clear","both")
								});  break; 
                                case "file": $(this).append($('<div>').append($('<span>',{"class":"selection text-muted"})).prepend(' ').prepend($("<label>",{class:"btn btn-default btn-file"}).append("Browse...").append(el))); 
								    el.on('change', function() {
										var input = $(this),
											numFiles = input.get(0).files ? input.get(0).files.length : 1,
											label = input.val().replace(/\\/g, '/').replace(/.*\//, '');

											input.trigger('fileselect', [numFiles, label]);
									});
									 el.on('fileselect', function(event, numFiles, label) {
										$(this).parent().parent().find(".selection").text(label)
									});
								break; 
								default: $(this).append(el); break;
							}
                        }

                    }))
					xCount++;
					if(i==(fm.length-1))
					{$(this).append($("<div>",{"style":"clear:both"}))}
                }
            }))

        }
}


$.fn.formy = function () {
        var args = [];
        args.push(this)
        for (var i = 0; i < arguments.length; i++) {
            if (i == 0) { } else { args.push(arguments[i]); }
        }
        try {
            var res = x[arguments[0]].apply(this, args);
        } catch (ex) { if (debug) console.error(ex); }
        return (res == null) ? this : res;
};

})($)