(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(t,e,n){t.exports=n.p+"img/3e346fa.png"},196:function(t,e,n){t.exports=n.p+"img/cbc1670.png"},197:function(t,e,n){t.exports=n.p+"img/7d28adc.jpg"},198:function(t,e,n){t.exports=n.p+"img/9591899.png"},199:function(t,e,n){var s={"./bg.jpg":120,"./bg1.jpg":197,"./foto1.jpg":200,"./foto2.jpg":201,"./foto3.jpg":202,"./logo-news.svg":203,"./logo.png":198,"./logo1.png":119,"./logo3.svg":204,"./next.png":195,"./prev.png":196,"./prev.svg":205,"./slider-img.jpg":206};function i(t){var e=o(t);return n(e)}function o(t){var e=s[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(s)},i.resolve=o,t.exports=i,i.id=199},200:function(t,e,n){t.exports=n.p+"img/b77325a.jpg"},201:function(t,e,n){t.exports=n.p+"img/e5eb4b5.jpg"},202:function(t,e,n){t.exports=n.p+"img/a98b4db.jpg"},203:function(t,e,n){t.exports=n.p+"img/109174c.svg"},204:function(t,e,n){t.exports=n.p+"img/6769eff.svg"},205:function(t,e,n){t.exports=n.p+"img/e9c8372.svg"},206:function(t,e,n){t.exports=n.p+"img/9fac1d8.jpg"},227:function(t,e,n){var s=n(244);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(39).default)("14b03006",s,!0,{})},243:function(t,e,n){"use strict";var s=n(227);n.n(s).a},244:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".news__article,.news__head{display:flex}.news__article{align-items:center}.news__head{justify-content:space-between}.news__list{max-width:600px;margin:20px auto}.news__item:not(:last-child){margin-bottom:40px}.news__article{flex-direction:column}.news__head{align-items:baseline;width:100%}@media only screen and (max-width:767px){.news__head{flex-wrap:wrap}}.news__title{margin:0;font-size:20px}@media only screen and (max-width:767px){.news__title{width:100%;margin:0 0 10px}}.news__img{max-width:100%;margin-bottom:20px}.news__time{color:#dd5145;font-weight:500}.news__content,.news__head{margin-bottom:10px}.news__link{align-self:flex-start;font-style:italic;text-decoration:underline}.news__load{display:block;margin:40px auto 0;color:#dd5145}.news__load:before{background-color:#dd5145}.news__load:hover{color:#fff;border-color:#dd5145}",""])},268:function(t,e,n){"use strict";n.r(e);var s=n(29),i=n.n(s),o=n(7),a=n.n(o),r=n(21),l={name:"News",layout:"aside",data:function(){return{news:[]}},computed:a()({},Object(r.c)(["getNews"])),created:function(){this.loadNews()},methods:{loadNews:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.news=[].concat(i()(this.news),i()(this.getNews(this.news.length,this.news.length+t)))}}},c=(n(243),n(10)),_=Object(c.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section news"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"main-title"},[t._v("News")]),t._v(" "),t.news.length?[s("transition-group",{staticClass:"news__list",attrs:{name:"fade-down",tag:"ul"}},t._l(t.news,function(e){return s("li",{key:e.id,staticClass:"news__item"},[s("article",{staticClass:"news__article"},[e.img?s("img",{staticClass:"news__img",attrs:{src:n(199)("./"+e.img),alt:"news image"}}):t._e(),t._v(" "),s("div",{staticClass:"news__head"},[s("h3",{staticClass:"news__title"},[t._v(t._s(e.title))]),t._v(" "),s("time",{staticClass:"news__time",attrs:{datetime:e.time}},[t._v(t._s(e.time))])]),t._v(" "),s("main",{staticClass:"news__content",domProps:{innerHTML:t._s(e.intro)}}),t._v(" "),s("nuxt-link",{staticClass:"news__link main-link",attrs:{to:t.localePath({name:"news-id",params:{id:e.id}})+"/"}},[t._v("more")])],1)])}),0)]:s("div",[t._v("No news, sorry...")]),t._v(" "),s("button",{staticClass:"btn-main news__load",attrs:{type:"button"},on:{click:function(e){t.loadNews(1)}}},[t._v("Load news")])],2)])},[],!1,null,null,null);_.options.__file="index.vue";e.default=_.exports}}]);