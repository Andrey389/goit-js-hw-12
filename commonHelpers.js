import{a as E,S as w,i as g}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();async function h(t,r){const a="https://pixabay.com/api/",o={key:"43244961-2cc0a4f4473f9c50538fea30b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r},e=`${a}?${o}`;return(await E.get(e,{params:o})).data}const q=document.querySelector(".gallery");function v(t){const{largeImageURL:r,webformatURL:a,tags:o,likes:e,views:i,comments:n,downloads:S}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      lodind="lazy" 
      class="gallery-image" 
      src="${a}" 
      alt="${o}" 
      />
  </a>
  <div class="descrip-gallery">
    <ul class="descrip-img">
      <li class="descrip-item">Likes</li>
      <li class="descrip-item">${e}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Views</li>
      <li class="descrip-item">${i}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Comments</li>
      <li class="descrip-item">${n}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Downloads</li>
      <li class="descrip-item">${S}</li>
    </ul>
  </div>
</li>`}const M=new w(".gallery a",{captionsData:"hits tags",captionsDelay:250});function $(t){return t.map(v).join("")}function y(t){const r=$(t);q.insertAdjacentHTML("beforeend",r),M.refresh(),console.log(r)}const s={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loaderendEl:document.querySelector(".loaderend"),btnLoadMore:document.querySelector(".load-btn-submit")};let c,l=1,f=0;const P=15;s.formEl.addEventListener("submit",x);s.btnLoadMore.addEventListener("click",O);async function x(t){if(t.preventDefault(),c=t.target.elements.input.value.trim(),s.gallery.innerHTML="",l=1,!c){d(),m(),u(),g.error({title:"Error",message:"❌ Please enter a search query!",position:"topRight"});return}try{L();const r=await h(c,l);if(f=Math.ceil(r.totalHits/P),r.hits.length===0){d(),m(),u(),g.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(r.hits)}catch{console.log(err)}d(),b(),t.target.reset()}async function O(){l+=1,L();try{const t=await h(c,l);y(t.hits)}catch{console.log(err)}z(),b(),d()}function R(){s.btnLoadMore.classList.remove("hidden")}function u(){s.btnLoadMore.classList.add("hidden")}function L(){s.loaderEl.classList.remove("hidden")}function d(){s.loaderEl.classList.add("hidden")}function b(){l>=f?(p(),u()):(p(),R())}function T(){s.loaderendEl.classList.remove("hidden")}function m(){s.loaderendEl.classList.add("hidden")}function p(){l>=f?T():m()}function z(){const t=s.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
