(()=>{
  const s=document.currentScript;
  const club=(s&&s.dataset&&s.dataset.club)||"istanbul-tennis-center";
  const lang=(s&&s.dataset&&s.dataset.lang)||"auto";
  const currency=(s&&s.dataset&&s.dataset.currency)||"auto";
  let root=document.getElementById("booking-widget");
  if(!root){ root=document.createElement("div"); root.id="booking-widget"; root.style="position:fixed;right:16px;bottom:16px;z-index:2147483647"; document.body.appendChild(root); }
  const box=document.createElement("div");
  box.style.cssText="font-family:system-ui,Arial,sans-serif;background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,.08);padding:12px;min-width:280px;";
  box.innerHTML='<div style="font-weight:700;margin-bottom:6px">Booking Widget</div>' +
    '<div style="font-size:12px;color:#6b7280;margin-bottom:8px">club: <b>'+club+'</b> • lang: <b>'+lang+'</b> • currency: <b>'+currency+'</b></div>' +
    '<label style="display:block;font-size:12px;color:#6b7280;margin-bottom:4px">Дата</label>' +
    '<input type="date" id="bw-date" style="width:100%;padding:8px;border:1px solid #e5e7eb;border-radius:10px;margin-bottom:8px"/>' +
    '<button id="bw-book" style="width:100%;padding:10px;border-radius:10px;border:1px solid #111;background:#111;color:#fff;font-weight:600">Забронировать</button>';
  root.appendChild(box);
  box.querySelector("#bw-book").addEventListener("click",function(){
    var val=box.querySelector("#bw-date").value;
    if(!val){ alert("Выберите дату"); return; }
    alert("Бронь для "+club+" на "+val+" ("+lang+"/"+currency+") — демо");
  });
})();