(function(){
  function refreshAdmin(){
    var el=function(id){return document.getElementById(id)};
    if(!el('adm-students'))return;
    el('adm-students').textContent=Array.isArray(window.S)?window.S.length:'—';
    el('adm-teachers').textContent=Array.isArray(window.T)?window.T.length:'—';
    var circles=Array.isArray(window.T)?new Set(window.T.map(function(t){return t[0]})).size:'—';
    el('adm-circles').textContent=circles;
    var name=el('sn');if(name&&name.textContent)el('adm-school-name').textContent=name.textContent;
  }
  var originalGo=window.go;
  if(typeof originalGo==='function')window.go=function(id,push){originalGo(id,push);if(id==='admin')refreshAdmin();};
  window.refreshAdmin=refreshAdmin;
})();