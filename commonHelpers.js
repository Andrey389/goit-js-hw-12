import{a as S,S as E,i as f}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();async function p(t,r){const n="https://pixabay.com/api/",o={key:"43244961-2cc0a4f4473f9c50538fea30b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r},e=`${n}?${o}`;return(await S.get(e,{params:o})).data}const w=document.querySelector(".gallery");function q(t){const{largeImageURL:r,webformatURL:n,tags:o,likes:e,views:i,comments:c,downloads:b}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      lodind="lazy" 
      class="gallery-image" 
      src="${n}" 
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
      <li class="descrip-item">${c}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Downloads</li>
      <li class="descrip-item">${b}</li>
    </ul>
  </div>
</li>`}const v=new E(".gallery a",{captionsData:"hits.tags",captionsDelay:250});function M(t){return t.map(q).join("")}function h(t){const r=M(t);w.insertAdjacentHTML("beforeend",r),v.refresh(),console.log(r)}const s={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text"),gallery:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loaderendEl:document.querySelector(".loaderend"),btnLoadMore:document.querySelector(".load-btn-submit")};let d,a=1,m=0;const $=15;s.formEl.addEventListener("submit",P);s.btnLoadMore.addEventListener("click",x);async function P(t){if(t.preventDefault(),d=t.target.elements.input.value.trim(),s.gallery.innerHTML="",a=1,!d){l(),l(),u(),f.error({title:"Error",message:"❌ Please enter a search query!",position:"topRight"});return}try{y();const r=await p(d,a);if(m=Math.ceil(r.totalHits/$),r.hits.length===0){l(),l(),u(),f.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(r.hits)}catch{console.log(err)}l(),L(),t.target.reset()}async function x(){a+=1,y();try{const t=await p(d,a);h(t.hits)}catch{console.log(err)}z(),L(),l()}function O(){s.btnLoadMore.classList.remove("hidden")}function u(){s.btnLoadMore.classList.add("hidden")}function y(){s.loaderEl.classList.remove("hidden")}function l(){s.loaderEl.classList.add("hidden")}function L(){a>=m?(g(),u()):(g(),O())}function R(){s.loaderendEl.classList.remove("hidden")}function T(){s.loaderendEl.classList.add("hidden")}function g(){a>=m?R():T()}function z(){const t=s.gallery.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
