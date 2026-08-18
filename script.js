
document.addEventListener("DOMContentLoaded",()=>{
  let count=0;
  document.querySelectorAll("[data-add]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      count++;
      const c=document.querySelector("#cartCount"); if(c)c.textContent=count;
      const old=btn.textContent; btn.textContent="ADDED ✓";
      setTimeout(()=>btn.textContent=old,900);
    });
  });
  const year=document.querySelector("#year"); if(year) year.textContent=new Date().getFullYear();
  const search=document.querySelector("#siteSearch");
  if(search) search.addEventListener("keydown",e=>{
    if(e.key==="Enter" && search.value.trim()) window.location.href="shop.html?search="+encodeURIComponent(search.value.trim());
  });
});
