import{a as L,S as b,i as E}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function m(t,s){const a="https://pixabay.com/api/",o={key:"43244961-2cc0a4f4473f9c50538fea30b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s},e=`${a}?${o}`;return(await L.get(e,{params:o})).data}const S=document.querySelector(".gallery"),w=new b(".gallery a",{captionsData:"tags",captionsDelay:250});function q(t){const{largeImageURL:s,webformatURL:a,tags:o,likes:e,views:r,comments:n,downloads:h}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      lodind="lazy" 
      class="gallery-image" 
      src="${a}" 
      alt="Image ${o}" 
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
      <li class="descrip-item">${n}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Downloads</li>
      <li class="descrip-item">${h}</li>
    </ul>
  </div>
</li>`}function M(t){return t.map(q).join("")}function f(t){const s=M(t);S.insertAdjacentHTML("beforeend",s),w.refresh(),console.log(s)}const i={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loaderendEl:document.querySelector(".loaderend"),btnLoadMore:document.querySelector(".load-btn-submit")};let c,l=1,d=0;const v=15;i.formEl.addEventListener("submit",$);i.btnLoadMore.addEventListener("click",P);async function $(t){if(t.preventDefault(),c=t.target.elements.input.value.trim(),i.gallery.innerHTML="",l=1,!c){E.error({title:"Error",message:"❌ Please enter a search query!",position:"topRight"});return}try{p();const s=await m(c,l);d=Math.ceil(s.totalHits/v),f(s.hits)}catch{console.log(err)}g(),y(),t.target.reset()}async function P(){l+=1,p();try{const t=await m(c,l);f(t.hits)}catch{console.log(err)}y(),g()}function x(){i.btnLoadMore.classList.remove("hidden")}function O(){i.btnLoadMore.classList.add("hidden")}function p(){i.loaderEl.classList.remove("hidden")}function g(){i.loaderEl.classList.add("hidden")}function y(){l>=d?(u(),O()):(u(),x())}function I(){i.loaderendEl.classList.remove("hidden")}function T(){i.loaderendEl.classList.add("hidden")}function u(){l>=d?I():T()}
//# sourceMappingURL=commonHelpers.js.map
