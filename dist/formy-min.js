!function(u){"use strict";function f(e){return(e.charAt(0).toUpperCase()+e.substr(1)).replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z])([A-Z][a-z])/g,"$1 $2").replace(/([a-z])([0-9])/gi,"$1 $2").replace(/([0-9])([a-z])/gi,"$1 $2")}var n={addCollapse:function(e,a){var t={id:"i"+Math.floor(1e9*Math.random()).toString(36),name:"Simple Collapsible",body:"        Lorem ipsum dolor sit amet, consectetur adipisicing elit,        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",bsversion:3},a=(u.extend(t,a),3===t.bsversion?"col-xs-12":"col"),n={class:"btn btn-info  btn-sm btn-block","data-toggle":"collapse","data-target":"#"+t.id},a=(t.parent&&(n["data-parent"]="#"+t.parent),u("<div>",{class:"rules container-fluid"}).append(u("<div>",{class:"row no-gutters"}).append(u("<div>",{class:a}).append(u("<button>",n).text(t.name)))).append(u("<div>",{class:"collapse well well-sm",id:t.id}).append(t.body)));return e.append(a),a},createModal:function(e,t){var n="mdl_"+Math.ceil(1e16*Math.random()).toString(32),a=(t=u.extend({title:"Title",body:"",actionButton:!0,actionText:"Save Changes",size:"",closeButton:!0,closeText:"close",animated:"false",onAction:function(e,a){}},t)).size?" modal-"+t.size:"",s=!0===t.animated?" fade":"",s=u("<div>",{class:"modal"+s,tabindex:"-1",role:"dialog",id:n}).append(u("<div>",{class:"modal-dialog"+a,role:"document"}).append(u("<div>",{class:"modal-content"}).append(u("<div>",{class:"modal-header"}).append(u("<div>",{class:"row"})).append(u("<div>",{class:"col-xs-11"}).append(t.title)).append(u("<div>",{class:"col-xs-1"}).append(u("<button>",{class:"close","data-dismiss":"modal","aria-label":"Close"}).html('<span aria-hidden="true">&times;</span>')))).append(u("<div>",{class:"modal-body"}).append(t.body)).append(u("<div>",{class:"modal-footer"}).append(u("<button>",{class:"btn btn-default","data-dismiss":"modal"}).html("Close")).each(function(){!1!==t.actionButton&&u(this).append(u("<button>",{class:"btn btn-primary"}).html(t.actionText))})))).on("hidden.bs.modal",function(){u(this).remove()}).each(function(){u(this).find(".modal-footer .btn-primary").on("click",function(){u("#"+n);var e,a=[];u(this).parent().parent().find("form").each(function(e){a.push(u(this).serializeArray())}),e=1==a.length?[a[0]]:[a,u("#"+n)],!1!==t.onAction.apply(u(this),e)&&u("#"+n).modal("hide")})});return e.append(s),s},createForm:function(e,a,t){var n=-1,c=u.extend({type:"default",colratio:"1:5",columns:1,bsversion:3},t),r=u.extend([],a),t=c.colratio.split(":"),h=[],a=(h[0]=12/(parseInt(t[0])+parseInt(t[1]))*parseInt(t[0]),h[1]=12/(parseInt(t[0])+parseInt(t[1]))*parseInt(t[1]),{role:"form"}),m=(4==c.bsversion&&(a.class="row"),!1);u(e).append(u("<form>",a).each(function(){"horizontal"==c.type&&u(this).addClass("form-horizontal");for(var e="",a=(1<c.columns&&(e=0<(n=Math.round(12/c.columns))?" col-sm-"+n:""),"horizontal"==c.type?" row":""),i=0,o=0;o<r.length;o++){var p={apply:!1,isLocal:!0,name:"any",local:[],prefetch:"",limit:10},d={type:"text",value:"",label:"Not Set",name:"ctl_"+Math.round(1e6*Math.random()),attrs:{},typeahead:p},t={class:"form-group"+e+a};1<c.columns&&i%(n-1)==0&&u.extend(t,{style:"clear:left;"}),u(this).append(u("<div>",t).each(function(){var s=u.extend(d,r[o]),e=(u.extend(s.typeahead,r[o].typeahead),u("<div/>").text(f(r[o].label)).html());switch("file"==s.type&&(m=!0),"hidden"!=s.type?u(this).append(u("<label>").html(e).each(function(){"horizontal"==c.type&&u(this).addClass("control-label").addClass("col-sm-"+h[0])})):u(this).css("display","none"),s.type){case"textarea":var a=u.extend({name:s.name,class:"form-control"},s.attrs),t=u("<textarea>",a).each(function(){u(this).val(s.value)});break;case"switch":a=u.extend({type:"checkbox",name:s.name,id:"switch_"+s.name,bscolor:"default"},s.attrs);t=u("<div>",{class:"formy-switch"}).append(u("<input>",a).each(function(){u(this).val(s.value)})).append(u("<label>",{class:"label-"+a.bscolor,for:a.id}));break;case"checkbox":var a=u.extend({type:"checkbox",name:s.name},s.attrs),n=!0===s.value?' checked="checked"':"";t=u("<label>",{class:"formy-checkbox"}).append(u("<input"+n+">",a)).append(u("<span>",{class:"checkmark"}));break;case"radio":a=u.extend({type:"radio",name:s.name},s.attrs),n=!0===s.value?' checked="checked"':"";t=u("<label>",{class:"formy-radio"}).append(u("<input"+n+">",a)).append(u("<span>",{class:"checkmark"}));break;case"daterange":var n=s.name.split(","),l=(1<n.length&&n[1],s.value.split(",")),n=(1<l.length&&l[1],{type:"text",class:"form-control",name:n[0],value:l[0]}),l={type:"text",class:"form-control",name:l[0],value:l[1]};t=u("<div>",{class:"input-daterange input-group","data-date-format":s.format}).append(u("<input>",n)).append(u("<span>",{class:"input-group-addon"}).text("to")).append(u("<input>",l));break;case"select":a=u.extend({type:s.type,name:s.name,class:"form-control"},s.attrs);t=u("<select>",a).each(function(){for(var e,a,t=u.extend([],s.options),n=0;n<t.length;n++)"object"==typeof t[n]&&(e=null==t[n].name?t[n].value:t[n].name,a=s.value===e?{value:e,selected:"selected"}:{value:e},u(this).append(u("<option>",a).text(t[n].text))),"string"!=typeof t[n]&&"number"!=typeof t[n]||(a=s.value===t[n]?{value:t[n],selected:"selected"}:{value:e},u(this).append(u("<option>",a).text(t[n])))});break;case"date":a=u.extend({type:"text",name:s.name,class:"form-control input-date","data-date-format":s.format},s.attrs);t=u("<input>",a).each(function(){u(this).val(s.value)});break;case"hidden":i--;a=u.extend({type:s.type,name:s.name},s.attrs);t=u("<input>",a).each(function(){u(this).val(s.value)});break;case"titlebox":i--;break;case"password":a=u.extend({type:s.type,name:s.name,class:"form-control"},s.attrs);t=u("<input>",a).each(function(){u(this).val(s.value)});break;case"button":case"submit":a=u.extend({type:s.type,name:s.name,class:"btn btn-default"},s.attrs);t=u("<input>",a).each(function(){u(this).val(f(s.label))});break;case"file":a=u.extend({type:s.type,name:s.name,style:"display: none;"},s.attrs);t=u("<input>",a);break;default:a=u.extend({type:s.type,name:s.name,class:"form-control"},s.attrs);t=u("<input>",a).each(function(){u(this).val(s.value),s.typeahead=u.extend(p,s.typeahead),s.typeahead.apply&&(u(this).addClass("typeahead").data("typeahead-name",s.typeahead.name).attr("autocomplete","off").attr("spellcheck","false"),1!=s.typeahead.isLocal&&"true"!=s.typeahead.isLocal||u(this).data("typeahead-local",s.typeahead.local).data("typeahead-isLocal",!0).data("typeahead-limit",s.typeahead.limit),0==s.typeahead.isLocal&&u(this).data("typeahead-prefetch",s.typeahead.prefetch).data("typeahead-isLocal",!1).data("typeahead-limit",s.typeahead.limit))})}if("horizontal"==c.type)switch(s.type){case"hidden":u(this).append(t);break;case"titlebox":u(this).empty().append(s.label).each(function(){for(var e in s.attrs)u(this).attr(e,s.attrs[e])});break;case"file":u(this).append(u("<div>",{class:"col-sm-"+h[1]}).append(u("<span>",{class:"selection text-muted"})).prepend(" ").prepend(u("<label>",{class:"btn btn-default btn-file"}).append("Browse...").append(t))),t.on("change",function(){var e=u(this),a=e.get(0).files?e.get(0).files.length:1,t=e.val().replace(/\\/g,"/").replace(/.*\//,"");e.trigger("fileselect",[a,t])}),t.on("fileselect",function(e,a,t){u(this).parent().parent().find(".selection").text(t)});break;case"button":case"submit":u(this).find("label").text("");default:u(this).append(u("<div>",{class:"col-sm-"+h[1]}).append(t))}else switch(s.type){case"button":case"submit":u(this).find("label").html("&nbsp;").css("display","block"),u(this).append(t);break;case"titlebox":u(this).empty().append(s.label).each(function(){for(var e in s.attrs)u(this).attr(e,s.attrs[e]);u(this).css("clear","both")});break;case"file":u(this).append(u("<div>").append(u("<span>",{class:"selection text-muted"})).prepend(" ").prepend(u("<label>",{class:"btn btn-default btn-file"}).append("Browse...").append(t))),t.on("change",function(){var e=u(this),a=e.get(0).files?e.get(0).files.length:1,t=e.val().replace(/\\/g,"/").replace(/.*\//,"");e.trigger("fileselect",[a,t])}),t.on("fileselect",function(e,a,t){u(this).parent().parent().find(".selection").text(t)});break;default:u(this).append(t)}})),i++,o==r.length-1&&u(this).append(u("<div>",{style:"clear:both"}))}})),m&&e.find("form").attr("method","post").attr("enctype","multipart/form-data")}};u.fn.formy=function(){var e=[];e.push(this);for(var a=0;a<arguments.length;a++)0!=a&&e.push(arguments[a]);try{var t=n[arguments[0]].apply(this,e)}catch(e){console.error(e)}return null==t?this:t}}($);