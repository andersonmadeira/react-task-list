(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(7),o=a.n(l),r=a(8),c=a(1),u=a(2),i=a(4),d=a(3),h=a(5),m=(a(15),function(e){var t=e.task,a=e.handleToggleStatus,n=e.handleTaskRemove,l=t.done?"checked":"";return s.a.createElement("li",{className:l,onClick:function(){return a(t)}},t.label,s.a.createElement("span",{className:"close",onClick:function(e){e.stopPropagation(),n(t)}},"\xd7"))}),k=(a(16),function(e){var t=e.handleToggleStatus,a=e.handleTaskRemove,n=e.tasks.map(function(e){return s.a.createElement(m,{key:e.label,task:e,handleToggleStatus:t,handleTaskRemove:a})});return s.a.createElement("ul",{className:"task-list"},n)}),f=(a(17),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={nextTask:""},a.onInputChange=function(e){a.setState({nextTask:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleTaskAdd(a.state.nextTask),a.setState({nextTask:""})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.nextTask;return s.a.createElement("div",{className:"header"},s.a.createElement("h2",{className:"app-title"},"Task List"),s.a.createElement("form",{onSubmit:this.onFormSubmit},s.a.createElement("input",{className:"entry-field",type:"text",spellCheck:"false",value:e,onChange:this.onInputChange,placeholder:"Enter your next task..."}),s.a.createElement("button",{type:"submit",className:"add-button"},"Add")))}}]),t}(s.a.Component)),b=(a(18),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:[{label:"Star Wars: The Last Jedi",done:!0},{label:"Toy Story 4",done:!1},{label:"Spider-Man: Far From Home",done:!1},{label:"The Lion King",done:!1}]},a.handleTaskRemove=function(e){var t=a.state.tasks.filter(function(t){return t.label!==e.label});a.setState({tasks:t})},a.handleTaskAdd=function(e){if(e&&!a.state.tasks.find(function(t){return t.label===e})){var t=[].concat(Object(r.a)(a.state.tasks),[{label:e,done:!1}]);a.setState({tasks:t})}},a.handleToggleStatus=function(e){var t=a.state.tasks.map(function(t){return t.label===e.label?{label:t.label,done:!t.done}:t});a.setState({tasks:t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.tasks;return s.a.createElement("div",null,s.a.createElement(f,{handleTaskAdd:this.handleTaskAdd}),s.a.createElement(k,{tasks:e,handleToggleStatus:this.handleToggleStatus,handleTaskRemove:this.handleTaskRemove}))}}]),t}(s.a.Component));o.a.render(s.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);