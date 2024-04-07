import{a as h,S as L,i as b}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function d(t,s){const a="https://pixabay.com/api/",i={key:"43244961-2cc0a4f4473f9c50538fea30b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s},e=`${a}?${i}`;return(await h.get(e,{params:i})).data}const S=document.querySelector(".gallery"),w=new L(".gallery a",{captionsData:"tags",captionsDelay:250});function E(t){const{largeImageURL:s,webformatURL:a,tags:i,likes:e,views:r,comments:l,downloads:y}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      lodind="lazy" 
      class="gallery-image" 
      src="${a}" 
      alt="Image ${i}" 
      />
  </a>
  <div class="descrip-gallery">
    <ul class="descrip-img">
      <li class="descrip-item">Likes</li>
      <li class="descrip-item">${e}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Views</li>
      <li class="descrip-item">${r}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Comments</li>
      <li class="descrip-item">${l}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Downloads</li>
      <li class="descrip-item">${y}</li>
    </ul>
  </div>
</li>`}function M(t){return t.map(E).join("")}function u(t){const s=M(t);S.insertAdjacentHTML("beforeend",s),w.refresh(),console.log(s)}const o={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),btnLoadMore:document.querySelector(".load-btn-submit")};let n,c=1,m=0;const q=15;o.formEl.addEventListener("submit",v);o.btnLoadMore.addEventListener("click",$);async function v(t){if(t.preventDefault(),n=t.target.elements.input.value.trim(),o.gallery.innerHTML="",c=1,!n){b.error({title:"Error",message:"❌ Please enter a search query!",position:"topRight"});return}try{p();const s=await d(n,c);m=Math.ceil(s.totalHits/q),u(s.hits)}catch{console.log(err)}f(),g(),t.target.reset()}async function $(){c+=1,p();try{const t=await d(n,c);u(t.hits)}catch{console.log(err)}g(),f()}function P(){o.btnLoadMore.classList.remove("hidden")}function x(){o.btnLoadMore.classList.add("hidden")}function p(){o.loaderEl.classList.remove("hidden")}function f(){o.loaderEl.classList.add("hidden")}function g(){c>=m?x():P()}
//# sourceMappingURL=commonHelpers.js.map
