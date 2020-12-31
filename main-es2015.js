(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./products/products.module": [
		"./src/app/products/products.module.ts",
		"products-products-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 23, vars: 0, consts: [[1, "mainsobre"], [1, "jumbotron", "bg-white"], [1, "lead", "jumbolead"], ["id", "sobre-cnt", 1, "container", "bg-white"], [1, "row", "home-titulo"], [1, "row"], [1, "col", "linha2"], [1, "col-5", "linha2", "ln2-img"], ["src", "../../assets/img/index/quemsomos.jpg", 1, "thumbnail"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quem Somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Um pouco sobre n\u00F3s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "O atelier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "D\u00E9 Monte Doces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " faz o melhor da festa com muito bom gosto: bolos e doces de encher os olhos e surpreender pelo sabor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bolos personalizados, bem-casados, cupcakes, doces finos, pirulitos decorados e doces modelados comp\u00F5em o amplo portf\u00F3lio de produtos do atelier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Na f\u00E1brica pr\u00F3pria, localizada no Jardim Ibirapuera, os produtos s\u00E3o preparados por uma equipe altamente especializada. Os ingredientes s\u00E3o de alt\u00EDssima qualidade. Tudo \u00E9 produzido de forma artesanal e em pequenos lotes para assegurar o frescor, mantendo a qualidade e o sabor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Qualquer que seja o evento, pe\u00E7a uma degusta\u00E7\u00E3o com hora marcada e conhe\u00E7a de perto nossos produtos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".jumbotron[_ngcontent-%COMP%] {\n    background-image: url('quemsomos-topo.jpg');\n    background-size: cover;\n    \n    \n    \n    margin-top: 0px;\n    border-radius: 0px;\n    position: absolute;\n    top:0;\n    margin-bottom:0px !important;\n    height: 365px;\n    width: 100%;\n    border: none;\n    z-index: -1;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);\n    font-family: 'Amatic SC', cursive;\n    font-weight: 900;\n    color: #fff;\n    padding-bottom: 120px;\n    -webkit-animation: jumbo-entrar2 1s ease both;\n            animation: jumbo-entrar2 1s ease both;\n    -webkit-animation-delay: .3s;\n            animation-delay: .3s;\n}\n.jumbotron[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background: radial-gradient(circle, rgba(150,93,121,.2) 0%, rgba(99,66,80,.5) 100%);\n  top:0; \n  left: 0;\n  right: 0;\n  position: absolute;\n  z-index: 0;   \n  height: 365px;\n}\n.jumbotron[_ngcontent-%COMP%]   .jumbolead[_ngcontent-%COMP%] {\n    font-size: 5.5rem;\n    line-height: 6rem;\n    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7) !important;\n    -webkit-animation: jumbo-entrar .8s ease both;\n            animation: jumbo-entrar .8s ease both;\n    -webkit-animation-delay: .65s;\n            animation-delay: .65s;\n    z-index: 1; \n}\n@-webkit-keyframes jumbo-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n}\n@keyframes jumbo-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n}\n@-webkit-keyframes jumbo-entrar2 {\n    0% {\n      opacity: 0;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n}\n@keyframes jumbo-entrar2 {\n    0% {\n      opacity: 0;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n}\n\n#sobre-cnt[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    position: relative;\n    max-width: 1200px;\n    margin-top: 300px;\n    top: 0 !important;\n    border-radius: 10px;\n    z-index: 1 !important;\n    min-height: 80vh;\n    -webkit-animation: prod-entrar .5s ease both;\n            animation: prod-entrar .5s ease both;\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n}\n@media (max-width: 1199px) { \n  #sobre-cnt[_ngcontent-%COMP%] { \n    border-radius: 0px;\n  }\n}\n@-webkit-keyframes prod-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n@keyframes prod-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n.home-titulo[_ngcontent-%COMP%] {\n    height: 8rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Indie Flower', cursive;\n    color: #e291b7;\n    z-index: 10 !important;\n}\n.linha2[_ngcontent-%COMP%] {\n    margin-bottom: 5rem;\n}\n.linha2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-right:30px;\n    margin-top: 0px;\n    margin-left: 70px;\n    line-height: 30px;\n    text-indent: 5rem;\n}\n.linha2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 55px;\n    margin-top: 20px;\n    padding-right:75px;\n    padding-left: 75px;\n}\n.linha2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 85%;\n    min-width: 250px;\n    border: 8px solid white;\n    border-radius: 3px;\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);\n    margin: 10px auto;\n    margin-top: 50px;\n    transform: rotate(-2deg);\n}\n@media (max-width: 640px) {\n    .linha2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .ln2-img[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .linha2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin: 5%;\n        text-indent: 3rem;\n        line-height: 1.5rem;\n        text-align: justify;\n        font-size: 1.1rem;\n    }\n    .linha2[_ngcontent-%COMP%] {\n        margin-bottom: 2rem;\n        width: 100%;\n    }\n    .home-titulo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 1.5em;\n  }\n}\n@media (max-width: 599px) { \n  .home-titulo[_ngcontent-%COMP%] {\n    height: 5rem;\n    margin-bottom: 1.5rem;\n  } \n    .home-titulo[_ngcontent-%COMP%]:first-child {\n    margin-bottom: -1rem;\n    margin-top: 0.5rem;\n  } \n}\n@media (min-width: 641px) and (max-width: 1199px) { \n.jumbotron[_ngcontent-%COMP%] {\n    height: 230px;\n    top: 70px;\n    padding-bottom: 50px;\n}\n\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    bottom: 4.2rem;\n}\n\n#sobre-cnt[_ngcontent-%COMP%] {\n    margin-top: 300px;\n}\n}\n@media (max-width: 640px) { \n#sobre-cnt[_ngcontent-%COMP%] {\n    margin-top: 130px;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n    max-height: 135px;\n    padding-bottom: 35px;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .jumbolead[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n    line-height: 3.5rem;\n}\n\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    bottom: 4.2rem;\n    line-height: 1.5rem;\n}\n\nbody[_ngcontent-%COMP%] {overflow-x: hidden;}\n}\n.mainsobre[_ngcontent-%COMP%] {\n    overflow:hidden;\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] { overflow:hidden; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUM7SUFDSSwyQ0FBcUU7SUFDckUsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQywwQ0FBMEM7O0lBRTFDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVzs7SUFFWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtRkFBbUY7RUFDbkYsS0FBSztFQUNMLE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0RBQXNEO0lBQ3RELDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFHSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDVix3QkFBd0I7SUFDMUI7QUFDSjtBQVZJO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQTJCOztJQUU3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLHdCQUF3QjtJQUMxQjtBQUNKO0FBRUk7SUFDQTtNQUNFLFVBQVU7O0lBRVo7SUFDQTtNQUNFLFVBQVU7SUFDWjtBQUNKO0FBUkk7SUFDQTtNQUNFLFVBQVU7O0lBRVo7SUFDQTtNQUNFLFVBQVU7SUFDWjtBQUNKO0FBSUEsMENBQTBDO0FBRTFDO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGO0FBVEU7SUFDQTtNQUNFLFVBQVU7TUFDViwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUVGO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztJQUNmO0lBQ0E7TUFDRSxnQkFBZ0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0lBQ0U7SUFDQSxvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFFQTtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUEsYUFBYSxlQUFlLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSEVSTyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmp1bWJvdHJvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9wcm9kdXRvcy9xdWVtc29tb3MtdG9wby5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM0MjUwICFpbXBvcnRhbnQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzhhNTQ2ZSAhaW1wb3J0YW50OyAqL1xuICAgIFxuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIG1hcmdpbi1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzNjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgei1pbmRleDogLTE7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG4gICAgYW5pbWF0aW9uOiBqdW1iby1lbnRyYXIyIDFzIGVhc2UgYm90aDtcbiAgICBhbmltYXRpb24tZGVsYXk6IC4zcztcbn1cblxuLmp1bWJvdHJvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDE1MCw5MywxMjEsLjIpIDAlLCByZ2JhKDk5LDY2LDgwLC41KSAxMDAlKTtcbiAgdG9wOjA7IFxuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwOyAgIFxuICBoZWlnaHQ6IDM2NXB4O1xufVxuXG5cbi5qdW1ib3Ryb24gLmp1bWJvbGVhZCB7XG4gICAgZm9udC1zaXplOiA1LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDZyZW07XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC43KSAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbjoganVtYm8tZW50cmFyIC44cyBlYXNlIGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNjVzO1xuICAgIHotaW5kZXg6IDE7IFxufSAgXG5cblxuICAgIEBrZXlmcmFtZXMganVtYm8tZW50cmFyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbiAgICBAa2V5ZnJhbWVzIGp1bWJvLWVudHJhcjIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuXG5cbi8qIE1BSU4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI3NvYnJlLWNudCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgIGFuaW1hdGlvbjogcHJvZC1lbnRyYXIgLjVzIGVhc2UgYm90aDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHsgXG4gICNzb2JyZS1jbnQgeyBcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn1cblxuICAgIEBrZXlmcmFtZXMgcHJvZC1lbnRyYXIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgfVxuXG4uaG9tZS10aXR1bG8ge1xuICAgIGhlaWdodDogOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xuICAgIHotaW5kZXg6IDEwICFpbXBvcnRhbnQ7XG59XG5cbi5saW5oYTIge1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbi5saW5oYTIgcCB7XG4gICAgbWFyZ2luLXJpZ2h0OjMwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtaW5kZW50OiA1cmVtO1xufVxuXG4ubGluaGEyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0Ojc1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xufVxuXG4ubGluaGEyIGltZyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAubGluaGEyIGltZywgLmxuMi1pbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubGluaGEyIHAge1xuICAgICAgICBtYXJnaW46IDUlO1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICAgIC5saW5oYTIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmhvbWUtdGl0dWxvIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7IFxuICAuaG9tZS10aXR1bG8ge1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH0gXG4gICAgLmhvbWUtdGl0dWxvOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH0gXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkgeyBcbi5qdW1ib3Ryb24ge1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgdG9wOiA3MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uanVtYm90cm9uIGgxIHtcbiAgICBib3R0b206IDQuMnJlbTtcbn1cblxuI3NvYnJlLWNudCB7XG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XG59XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiNzb2JyZS1jbnQge1xuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xufVxuXG4uanVtYm90cm9uIHtcbiAgICBtYXgtaGVpZ2h0OiAxMzVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cblxuLmp1bWJvdHJvbiAuanVtYm9sZWFkIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMy41cmVtO1xufVxuXG4uanVtYm90cm9uIGgxIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBib3R0b206IDQuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG5ib2R5IHtvdmVyZmxvdy14OiBoaWRkZW47fVxufVxuXG4ubWFpbnNvYnJlIHtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbmJvZHksIGh0bWwgeyBvdmVyZmxvdzpoaWRkZW47IH0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");






const routerConfig = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'quemsomos',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
    },
    {
        path: 'produtos',
        loadChildren: './products/products.module#ProductsModule',
    },
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routerConfig)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routerConfig)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _up_btn_up_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./up-btn/up-btn.component */ "./src/app/up-btn/up-btn.component.ts");
/* harmony import */ var _whatsapp_btn_whatsapp_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whatsapp-btn/whatsapp-btn.component */ "./src/app/whatsapp-btn/whatsapp-btn.component.ts");







//import { Event, Router, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router'
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-up-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-whatsapp-btn");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _up_btn_up_btn_component__WEBPACK_IMPORTED_MODULE_4__["UpBtnComponent"], _whatsapp_btn_whatsapp_btn_component__WEBPACK_IMPORTED_MODULE_5__["WhatsappBtnComponent"]], styles: ["*[_ngcontent-%COMP%] {\n box-sizing: border-box;\n}\n*[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    color: #454545;\n    font-size: 1.15rem;\n    background-color: #FFF;\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n}\na[_ngcontent-%COMP%]:hover {text-decoration: none;}\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 10;\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTs7Q0FFQyxzQkFBc0I7QUFDdkI7QUFFQTtJQUNJLDZFQUE2RTtJQUM3RSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUdBLFNBQVMscUJBQXFCLENBQUM7QUFFL0I7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG5hOmhvdmVyIHt0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxuXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _whatsapp_btn_whatsapp_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./whatsapp-btn/whatsapp-btn.component */ "./src/app/whatsapp-btn/whatsapp-btn.component.ts");
/* harmony import */ var _up_btn_up_btn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./up-btn/up-btn.component */ "./src/app/up-btn/up-btn.component.ts");
/* harmony import */ var _directives_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives.module */ "./src/app/directives.module.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @crystalui/angular-lightbox */ "./node_modules/@crystalui/angular-lightbox/__ivy_ngcc__/fesm2015/crystalui-angular-lightbox.js");



//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            //BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _directives_module__WEBPACK_IMPORTED_MODULE_10__["DirectivesModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"],
            _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_12__["CrystalLightboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _whatsapp_btn_whatsapp_btn_component__WEBPACK_IMPORTED_MODULE_8__["WhatsappBtnComponent"],
        _up_btn_up_btn_component__WEBPACK_IMPORTED_MODULE_9__["UpBtnComponent"]], imports: [
        //BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _directives_module__WEBPACK_IMPORTED_MODULE_10__["DirectivesModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"],
        _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_12__["CrystalLightboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _whatsapp_btn_whatsapp_btn_component__WEBPACK_IMPORTED_MODULE_8__["WhatsappBtnComponent"],
                    _up_btn_up_btn_component__WEBPACK_IMPORTED_MODULE_9__["UpBtnComponent"],
                ],
                imports: [
                    //BrowserAnimationsModule,
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _directives_module__WEBPACK_IMPORTED_MODULE_10__["DirectivesModule"],
                    ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"],
                    _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_12__["CrystalLightboxModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/directives.module.ts":
/*!**************************************!*\
  !*** ./src/app/directives.module.ts ***!
  \**************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _parallax_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallax.directive */ "./src/app/parallax.directive.ts");



class DirectivesModule {
}
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_parallax_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxDirective"]], exports: [_parallax_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _parallax_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxDirective"],
                ],
                imports: [],
                exports: [
                    _parallax_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxDirective"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 48, vars: 0, consts: [[1, "linha1-cnt"], [1, "container", "footer-row"], [1, "col", "ft-linha1", "ftln1-col1"], ["src", "assets/img/logo-rodape.png"], [1, "col", "ft-linha1", "ftln1-col2"], ["href", "https://wa.me/5511985318106", "target", "_blank"], [1, "fab", "fa-whatsapp"], ["href", "mailto:deboradmonte@hotmail.com"], [1, "far", "fa-envelope"], [1, "col", "ft-linha1", "ftln1-col3"], ["href", "https://goo.gl/maps/1BFGTG326KtFUzAUA", "target", "_blank"], [1, "linha2-cnt"], [1, "container", "ft-linha2"], ["href", "https://www.facebook.com/demonte.doces/", "target", "_blank"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/demonte.doces/", "target", "_blank"], [1, "fab", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Criando os melhores bolos e doces para sua festa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pedidos e Informa\u00E7\u00F5es:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " (11) 98531-8106");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " deboradmonte@hotmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Localiza\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0 Rua Jos\u00E9 Joaquim Esteves, n.201");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0 Jardim Ibirapuera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u00A0 S\u00E3o Paulo - SP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Entregas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Consulte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A9 Copyright 2020 \u00A0 | \u00A0 D\u00E9 Monte Doces");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n    position: relative;\n    margin-top: 70px;\n    background-color: #ca99b0;\n    bottom: 0;\n    left: 0;\n    overflow: hidden;\n\n}\n\n.linha1-cnt[_ngcontent-%COMP%] {\n    background-color: #ca99b0;\n    border-top: 1px solid #ebd;\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);\n}\n\n.linha2-cnt[_ngcontent-%COMP%] {\n    background-color: #b1869a;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    color: #fdfafb;\n    transition: all 300ms ease;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    text-decoration: none;\n    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);\n}\n\n.footer-row[_ngcontent-%COMP%] {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    display: flex;\n    flex-direction: column;\n}\n\n.ft-linha1[_ngcontent-%COMP%] {\n    background-color: #ca99b0;\n    color: #fdfafb;\n    padding: 0;\n    padding:10px 5%;\n    margin: 23px 0px;\n    font-size: 18px;\n\n}\n\n.ft-linha1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n    margin-bottom: 10px;\n    text-shadow: 1px 1px 4px rgba(0,0,0,0.15);\n}\n\n.ft-linha1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    text-shadow: 1px 1px 4px rgba(0,0,0,0.3);\n    margin-bottom: 13px;\n    font-size: 2rem;\n}\n\n\n\n.ft-linha1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    margin-top: 15px;\n    font-size: 16px;\n    line-height: 20px;\n    color: #f1e1e9;\n}\n\n.ft-linha1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #ecd5e0;\n    font-size: 14px;\n    margin-right: 3px;\n}\n\n.ftln1-col1[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-size: 24px;\n    line-height: 30px;\n    font-weight: 500;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    \n}\n\n.ftln1-col2[_ngcontent-%COMP%] {\n        border-left: 4px dotted  rgba(0,0,0,0.07);\n        border-right: 4px dotted  rgba(0,0,0,0.07);\n        border-top: none;\n        border-bottom: none;\n    }\n\n.footer-row[_ngcontent-%COMP%] {\n        flex-direction: row;\n    }\n\n@media (max-width: 1200px) {\n    .ftln1-col2[_ngcontent-%COMP%] {\n        border-top: 4px dotted  rgba(0,0,0,0.07);\n        border-bottom: 4px dotted  rgba(0,0,0,0.07);\n        border-left:none;\n        border-right:none;\n        margin:0;\n        padding: 1.7rem 0;\n    }\n\n    .footer-row[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .ft-linha1[_ngcontent-%COMP%] {\n        text-align: center;\n        \n    }\n}\n\n.ft-linha2[_ngcontent-%COMP%] {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    background-color: #b1869a;\n    color: #f1d7e3;\n    padding: 0px 40px;\n    height: 65px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-align: center;\n }\n\n.ft-linha2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin: 0;\n}\n\n.ft-linha2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n   margin: 0;\n   text-align: center;\n}\n\n@media (max-width: 765px) {\n\n    footer[_ngcontent-%COMP%] {\n        margin-top: 23px;\n    }\n    \n    .ft-linha1[_ngcontent-%COMP%] {\n        padding:0px 7%;\n        margin: 10px 0px;\n    }\n\n    .ftln1-col1[_ngcontent-%COMP%] {\n       margin-top: 30px; \n       padding-left: 15%;\n       padding-right: 15%;\n    }\n\n    .ftln1-col2[_ngcontent-%COMP%] {\n        border:none;\n    }\n\n    .ftln1-col3[_ngcontent-%COMP%] {\n        margin-bottom: 1.5rem;\n    }\n\n    .ft-linha1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        margin-bottom: 3px;\n        margin-left: -2px;\n        margin-top: 0px;\n        font-size: 1.8rem;\n    }\n\n    .ft-linha1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    }\n\n    .ft-linha2[_ngcontent-%COMP%] { \n        justify-content: center;\n        flex-direction: column;\n        height: 100px;\n        padding: 0px 20px;\n    }\n\n    .ft-linha2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n\n    .ft-linha2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        word-spacing: -3px;\n    }\n    \n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsU0FBUztJQUNULE9BQU87SUFDUCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2RUFBNkU7SUFDN0UsY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtRQUNRLHlDQUF5QztRQUN6QywwQ0FBMEM7UUFDMUMsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7QUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSjtJQUNJO1FBQ0ksd0NBQXdDO1FBQ3hDLDJDQUEyQztRQUMzQyxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxrQkFBa0I7O0lBRXRCO0FBQ0o7O0FBRUM7SUFDRyw2RUFBNkU7SUFDN0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtDQUNyQjs7QUFFQTtJQUNHLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7R0FDRyxTQUFTO0dBQ1Qsa0JBQWtCO0FBQ3JCOztBQUVDOztJQUVHO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjs7SUFFQTtPQUNHLGdCQUFnQjtPQUNoQixpQkFBaUI7T0FDakIsa0JBQWtCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO0lBQ0EsZUFBZTtJQUNmOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztDQUVIIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E5OWIwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuLmxpbmhhMS1jbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYTk5YjA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLmxpbmhhMi1jbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTg2OWE7XG59XG5cbmZvb3RlciBhIHtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZkZmFmYjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbn1cblxuZm9vdGVyIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLDAsMCwwLjMpO1xufVxuXG4uZm9vdGVyLXJvdyB7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZnQtbGluaGExIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2E5OWIwO1xuICAgIGNvbG9yOiAjZmRmYWZiO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZzoxMHB4IDUlO1xuICAgIG1hcmdpbjogMjNweCAwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuXG59XG5cbi5mdC1saW5oYTEgaW1nIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xufVxuXG4uZnQtbGluaGExIGgyIHtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qIC5mdC1saW5oYTEgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSAqL1xuXG4uZnQtbGluaGExIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogI2YxZTFlOTtcbn1cblxuLmZ0LWxpbmhhMSBpIHtcbiAgICBjb2xvcjogI2VjZDVlMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cblxuLmZ0bG4xLWNvbDEge1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbi5mdGxuMS1jb2wyIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBkb3R0ZWQgIHJnYmEoMCwwLDAsMC4wNyk7XG4gICAgICAgIGJvcmRlci1yaWdodDogNHB4IGRvdHRlZCAgcmdiYSgwLDAsMCwwLjA3KTtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICAuZm9vdGVyLXJvdyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmZ0bG4xLWNvbDIge1xuICAgICAgICBib3JkZXItdG9wOiA0cHggZG90dGVkICByZ2JhKDAsMCwwLDAuMDcpO1xuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggZG90dGVkICByZ2JhKDAsMCwwLDAuMDcpO1xuICAgICAgICBib3JkZXItbGVmdDpub25lO1xuICAgICAgICBib3JkZXItcmlnaHQ6bm9uZTtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIHBhZGRpbmc6IDEuN3JlbSAwO1xuICAgIH1cblxuICAgIC5mb290ZXItcm93IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuZnQtbGluaGExIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBcbiAgICB9XG59XG5cbiAuZnQtbGluaGEyIHtcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjE4NjlhO1xuICAgIGNvbG9yOiAjZjFkN2UzO1xuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiAuZnQtbGluaGEyIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mdC1saW5oYTIgaDIge1xuICAgbWFyZ2luOiAwO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4gQG1lZGlhIChtYXgtd2lkdGg6IDc2NXB4KSB7XG5cbiAgICBmb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyM3B4O1xuICAgIH1cbiAgICBcbiAgICAuZnQtbGluaGExIHtcbiAgICAgICAgcGFkZGluZzowcHggNyU7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgfVxuXG4gICAgLmZ0bG4xLWNvbDEge1xuICAgICAgIG1hcmdpbi10b3A6IDMwcHg7IFxuICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICB9XG5cbiAgICAuZnRsbjEtY29sMiB7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgIH1cblxuICAgIC5mdGxuMS1jb2wzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIC5mdC1saW5oYTEgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuICAgIC5mdC1saW5oYTEgcCB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cblxuICAgIC5mdC1saW5oYTIgeyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIH1cblxuICAgIC5mdC1saW5oYTIgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmZ0LWxpbmhhMiBoMiB7XG4gICAgICAgIHdvcmQtc3BhY2luZzogLTNweDtcbiAgICB9XG4gICAgXG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function (a0) { return { "aberto-fundo": a0 }; };
const _c1 = function (a0) { return { "aberto": a0 }; };
const _c2 = function () { return { exact: true }; };
const _c3 = function (a0, a1) { return { "sticky-logo": a0, "top-logo": a1 }; };
const _c4 = function (a0, a1) { return { "sticky-navbar": a0, "top-navbar": a1 }; };
class HeaderComponent {
    constructor() {
        this.sticky = false;
        this.mobileMenuOpen = false;
    }
    toggler() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }
    ngOnInit() {
    }
    onWindowScroll(event) {
        if (window.scrollY > 40) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 46, vars: 18, consts: [[1, "menu-fundo", 3, "ngClass", "click"], [1, "menu-mobile", 3, "ngClass"], ["src", "assets/img/demontelogo.png"], [1, "close-mobile", 3, "click"], [1, "fa", "fa-close"], [1, "navbar-nav"], [1, "nav-item", 3, "click"], ["routerLink", "", "routerLinkActive", "ativo-mobile", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "fas", "fa-home", "mini-icon"], ["routerLink", "produtos", "routerLinkActive", "ativo-mobile", 1, "nav-link"], [1, "fas", "fa-birthday-cake", "mini-icon"], ["routerLink", "quemsomos", "routerLinkActive", "ativo-mobile", 1, "nav-link"], [1, "fas", "fa-store", "mini-icon"], [1, "header"], ["routerLink", ""], [1, "logo", 3, "ngClass"], ["id", "nvbr2", 1, "navbar", "navbar-expand-xl", "navbar-light", "bg-white", "shadow-sm", 3, "ngClass"], [1, "navbar-toggler-mobile", 3, "click"], [1, "fa", "fa-navicon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "ativo", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "nav-item", "dropdown"], ["role", "button", "id", "navbarDropdown", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", "routerLink", "produtos", "routerLinkActive", "ativo", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "produtos/bolos", "routerLinkActive", "subativo", 1, "dropdown-item"], ["routerLink", "produtos/docinhos", "routerLinkActive", "subativo", 1, "dropdown-item"], ["routerLink", "produtos/doces", "routerLinkActive", "subativo", 1, "dropdown-item"], ["routerLink", "quemsomos", "routerLinkActive", "ativo", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_0_listener() { return ctx.toggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.toggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_6_listener() { return ctx.toggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_10_listener() { return ctx.toggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Our Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_14_listener() { return ctx.toggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Who we are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "header", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_23_listener() { return ctx.toggler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Nossos Produtos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bolos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Docinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Doces Maiores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Quem Somos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.mobileMenuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.mobileMenuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c3, ctx.sticky, !ctx.sticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c4, ctx.sticky, !ctx.sticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".cnt-menu[_ngcontent-%COMP%] {\n    margin-top: 0;\n    position: absolute;\n    top:40px;\n    z-index: 2;\n    left: 50%;\n    transform: translateX(-50%);\n\n}\n\n.logo[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 80px;\n    position: absolute;\n    z-index: 3;\n    left: calc(50% - 400px);\n    transform: translateX(-50%);\n    margin-top: -7px;\n    top:40px;\n    padding: 0;\n    border: none;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n  \n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 80px;\n    border: none;\n    border-radius: 5px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    margin-top: 0;\n    position: absolute;\n    top:40px;\n    z-index: 2;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 1100px;\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 10px 0 10px;\n    border-radius: 15px;\n\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n    padding: 0px 23px;\n    overflow: hidden;\n}\n\n@media (min-width: 1200px) {\n\n    .dropdown[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%] {\n        display: block;\n        -webkit-animation: fade-in 230ms ease;\n                animation: fade-in 230ms ease;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        \n        z-index: 6;\n      }\n}\n\n.navbar-nav[_ngcontent-%COMP%], .mr-auto[_ngcontent-%COMP%] {\nflex: 1;\ndisplay: flex;\njustify-content: flex-end;\noverflow: visible;\n}\n\n.stickynav[_ngcontent-%COMP%] {\n    top: 0;\n    margin-top: 0px;\n    width: 100%;\n    left: 50%;\n    margin-left: -50%;\n    position: fixed;\n  }\n\n.stickynav2[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    margin-top: 0px;\n    width: 100%;\n    left: 50%;\n    margin-left: -50%;\n    border-radius: 0px !important;\n  }\n\n.nav-link[_ngcontent-%COMP%] {\n    line-height: 50px;\n    font-size: 19px;\n    font-family: 'Mouse Memoirs', sans-serif;\n    text-align: center;\n    color: #6d4e5d !important;\n    padding-left: 30px !important;\n    padding-right: 30px !important;\n    transition: all 300ms ease;\n}\n\n.navbar[_ngcontent-%COMP%]   .big-icon[_ngcontent-%COMP%] {\n\n    padding-left: 18px !important;\n    padding-right: 18px !important;\n}\n\n.nav-link[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%] {\n    color: rgba(109,78,93,0.3);\n    margin-right: 8px;\n    transition: all 100ms ease;\n}\n\n@-webkit-keyframes infinite-spinning3 {\n    0%, 100% {\n        transform: rotate(0deg) scale(1.05);\n      }\n      25% {\n        transform: rotate(5deg) scale(1.05);\n      }\n      75% {\n        transform: rotate(-5deg) scale(1.05);\n      }\n      \n  }\n\n@keyframes infinite-spinning3 {\n    0%, 100% {\n        transform: rotate(0deg) scale(1.05);\n      }\n      25% {\n        transform: rotate(5deg) scale(1.05);\n      }\n      75% {\n        transform: rotate(-5deg) scale(1.05);\n      }\n      \n  }\n\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .mini-icon[_ngcontent-%COMP%] {\n    color: rgba(255,255,255,0.7);\n    text-shadow: 1px 1px 4px rgba(0,0,0,0);\n    -webkit-animation: infinite-spinning3 1.2s infinite linear;\n            animation: infinite-spinning3 1.2s infinite linear;\n    transition: all 100ms ease;\n}\n\n.ativo[_ngcontent-%COMP%] {\n    line-height: 47px !important;\n    background-color: #FAF0F7;\n    box-shadow: inset 0px 0px 2px rgba(0,0,0,0.05);\n    color: #a15679 !important;\n}\n\n@media (min-width:1200px) {\n.ativo[_ngcontent-%COMP%] {\n    border-bottom: 3px solid #E9D7E2; \n}\n\n.ativo[_ngcontent-%COMP%]:hover {\n    border-bottom: 3px solid #e291b7 !important;\n}\n}\n\n.ativo[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%] {\n    color: #d14d8b71;\n}\n\n.subativo[_ngcontent-%COMP%] {\n    background-color: #F4E7F0;\n    box-shadow: inset 0px 0px 2px rgba(0,0,0,0.05);\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n    background-color: #e291b7;\n    color: #fff !important;\n    text-shadow: 1px 1px 4px rgba(0,0,0,0.15);\n    transition: all 100ms ease;\n}\n\n.nav-link[_ngcontent-%COMP%]:active {\n    box-shadow: inset 1px 1px 0px rgba(0,0,0,0.1);\n}\n\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active {\n    box-shadow: inset 1px 1px 3px rgba(0,0,0,0.05);\n}\n\n.navbar-toggler-mobile[_ngcontent-%COMP%] {\n        border: none;\n        padding: 0;\n        background-color: transparent;\n        width: 50px !important;\n        height: 70px !important;\n        text-align: center;\n        outline: none;   \n        z-index: 1;\n    }\n\n.navbar-toggler-mobile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        \n        color: #966a7f;\n        font-size: 1.5rem;\n        line-height: 100%;\n    }\n\n.menu-mobile[_ngcontent-%COMP%] {\n        position: fixed;\n        background-color: #FAF0F5;\n        width: 260px;\n        height: 100vh;\n        left: -260px;\n        top: 0;\n        padding-bottom: 0;\n        z-index: 4;\n        overflow: hidden;\n        box-shadow: none;\n        transition: 300ms all ease;\n    }\n\n.aberto[_ngcontent-%COMP%] {\n        transform: translateX(260px);\n        box-shadow: 0 0 23px rgba(0,0,0,0.23);\n    }\n\n.ativo-mobile[_ngcontent-%COMP%] {\n        background-color: #d14d8b0e;\n        color: #a15679 !important;\n    }\n\n.ativo-mobile[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%] {\n        color: #d14d8b9a;\n    }\n\n.menu-mobile[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n        margin-top: 35px;\n    }\n\n.menu-mobile[_ngcontent-%COMP%]   .mini-icon[_ngcontent-%COMP%] {\n        width: 30px;\n        text-align: center;\n        transform: scale(1.2);\n    }\n\n.menu-mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 90px;\n        height: 60px;\n        margin-left: 50%;\n        transform: translateX(-50%);\n    }\n\n.menu-mobile[_ngcontent-%COMP%]   .close-mobile[_ngcontent-%COMP%] {\n        border: none;\n        background: transparent;\n        color: #a15679a8;\n        margin: 0;\n        top: -7px;\n        right: -7px;\n        outline: none;\n    }\n\n.menu-fundo[_ngcontent-%COMP%] {\n        background-color: rgba(39, 30, 35, 0.7);\n        left: 0;\n        top: 0;\n        position: fixed;\n        z-index: -1;   \n        height: 100vh;\n        width: 100vw;\n        overflow: hidden;\n        opacity: 0;\n        transition: 300ms opacity ease;\n        transition-delay: 50ms;\n    }\n\n.aberto-fundo[_ngcontent-%COMP%] {\n        z-index: 4; \n        opacity: 1;\n        \n    }\n\n.navbar-toggler-mobile[_ngcontent-%COMP%]:focus, .navbar-toggler-mobile[_ngcontent-%COMP%]:hover, .close-mobile[_ngcontent-%COMP%]:focus, .close-mobile[_ngcontent-%COMP%]:hover  {\n        outline: none;\n    }\n\n.menu-mobile[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    border: none;\n    margin: 0;\n    \n    border-radius: 0;\n    border-bottom: 1px solid #e0bfceaf;\n    \n    \n    }\n\n.menu-mobile[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: none;\n    }\n\n.dropdown-toggle-mobile[_ngcontent-%COMP%]::after {\n        display: none;\n    }\n\n.menu-mobile[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        line-height: 50px;\n        text-align: left;\n    }\n\n@media (max-width: 640px) {\n        #nvbr[_ngcontent-%COMP%], #nvbr2[_ngcontent-%COMP%], .stickynav[_ngcontent-%COMP%], .stickynav2[_ngcontent-%COMP%], .anim-navbar[_ngcontent-%COMP%]  {\n        position: absolute !important;\n        width: 100%;\n        padding: 0;\n        top:0;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 0;\n        border: none;\n        background: transparent;\n        box-shadow: none !important;\n        flex: 1;\n        display: flex;\n        justify-content: flex-start;\n        z-index: 2;\n    }\n\n\n    #nvbr[_ngcontent-%COMP%] {\n      top:-35px;  \n    }\n\n    .navbar[_ngcontent-%COMP%] {\n        position: absolute;\n        min-height: 60px !important;\n        \n        background-color: transparent !important;\n        border: none;\n        box-shadow: none !important;\n        padding: 0;\n        z-index: 2;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        display: none;\n        width: 90px;\n        height: 60px;\n        margin-left: -5px;\n        margin-top: 0px;\n        box-shadow: none;\n        border-radius: 0px;\n    }\n\n    .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        display: none;\n        width: 90px;\n        height: 60px;\n        border-radius: 0px;\n    }\n\n    .navbar-toggler[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .navbar-toggler-mobile[_ngcontent-%COMP%] {\n        margin-left: 3px !important;\n        margin-top: 0px !important;\n        \n        border: none;\n        padding: 0;\n        \n        border-radius: 25px;\n        background-color: transparent;\n        width: 50px !important;\n        height: 50px !important;\n        text-align: center;\n        outline: none;   \n        z-index: 1;\n    }\n\n    \n    .clicado[_ngcontent-%COMP%] {\n       background-color: #e291b7;\n       box-shadow: inset 2px 2px 4px rgba(0,0,0,0.1);\n    }\n\n    .clicado-i[_ngcontent-%COMP%] {\n        color: #FFF !important;\n    }\n\n\n    .navbar-toggler-mobile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        \n        color: #fff;\n        text-shadow: 0px 1px 2px rgba(58, 0, 10, 0.8);\n        font-size: 1.5rem;\n        line-height: 100%;\n    }\n    \n\n    .tooltip-inner[_ngcontent-%COMP%], .bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n    display: none;\n    }\n\n    \n    \n\n    .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n        border: none !important;\n        border-radius: 0;\n        padding: 0 !important;\n        box-shadow: inset 1px 3px 5px rgba(0,0,0,0.13);\n        transition: all 200ms ease;\n    }\n\n    .navbar[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n        border-top: 1px solid #e0bfce60;\n        text-align: center;\n        \n    }\n\n\n}\n\n@media (min-width: 1200px) {\n    .menu-fundo[_ngcontent-%COMP%], .menu-mobile[_ngcontent-%COMP%], .navbar-toggler-mobile[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    border: none;\n    border-radius: 0 0px 5px 5px;\n    box-shadow: 0 2px 3px rgba(0,0,0,0.2);\n    z-index: 5;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n    line-height: 42px;\n    font-size: 20px;\n    font-family: 'Mouse Memoirs', sans-serif;\n    color: #6d4e5d !important;\n    transition: all 300ms ease;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-right: 15px;\n    height: 50px;\n}\n\n@media (min-width: 641px) and (max-width: 1199px) { \n    .cnt-menu[_ngcontent-%COMP%] {\n        top: 0;\n        margin-top: 0px;\n        width: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        position: absolute;\n    }\n\n    .navbar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        margin-top: 0px;\n        width: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 0px !important;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        top: 0;\n        margin-top: 0px;\n        left:23px;\n        transform: translateX(0);\n    }\n\n    .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    .navbar-collapse.collapse.show[_ngcontent-%COMP%] {\n        max-height: calc(100vh - 71px) !important;\n        overflow-y: scroll;\n    }\n\n }\n\n.anim-navbar[_ngcontent-%COMP%] {\n    background-color: white;\n    position: fixed;\n    top:0;\n    left: 0; \n    right: 0; \n    margin-left: auto; \n    margin-right: auto; \n    width: 1000px;\n    height: 70px;\n    z-index: 7;\n    opacity: 0;\n}\n\n@media (min-width: 1200px) {\n\n.sticky-logo[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    -webkit-animation: logo-expand 300ms ease;\n            animation: logo-expand 300ms ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.top-logo[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40px;\n    left: calc(50% - 520px);\n    -webkit-animation: logo-contract 150ms ease;\n            animation: logo-contract 150ms ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.sticky-navbar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    border-radius: 4px;\n    -webkit-animation: navbar-expand 300ms ease;\n            animation: navbar-expand 300ms ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.top-navbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40px;\n    border-radius: 0;\n    width: calc(100vw - (100vw - 100%));\n        left: 0;\n        transform: translateX(0);\n    -webkit-animation: navbar-contract 150ms ease;\n            animation: navbar-contract 150ms ease;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n}\n\n@-webkit-keyframes logo-expand {\n    from {\n        left: calc(50% - 450px);\n        } \n    to {\n        left: calc(10%);\n    }\n}\n\n@keyframes logo-expand {\n    from {\n        left: calc(50% - 450px);\n        } \n    to {\n        left: calc(10%);\n    }\n}\n\n@-webkit-keyframes logo-contract {\n    from {\n        left: calc(10%);\n    }\n    to {\n        left: calc(50% - 450px);\n        } \n}\n\n@keyframes logo-contract {\n    from {\n        left: calc(10%);\n    }\n    to {\n        left: calc(50% - 450px);\n        } \n}\n\n@-webkit-keyframes navbar-expand {\n    from {\n        width: 1100px;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 4px;\n        } \n    to {\n        width: calc(100vw - (100vw - 100%));\n        left: 0;\n        transform: translateX(0);\n        border-radius: 0px;\n    }\n}\n\n@keyframes navbar-expand {\n    from {\n        width: 1100px;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 4px;\n        } \n    to {\n        width: calc(100vw - (100vw - 100%));\n        left: 0;\n        transform: translateX(0);\n        border-radius: 0px;\n    }\n}\n\n@-webkit-keyframes navbar-contract {\n    from {\n        width: calc(100vw - (100vw - 100%));\n        left: 0;\n        transform: translateX(0);\n        border-radius: 0px;\n    }\n    to {\n        width: 1100px;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 4px;\n        } \n}\n\n@keyframes navbar-contract {\n    from {\n        width: calc(100vw - (100vw - 100%));\n        left: 0;\n        transform: translateX(0);\n        border-radius: 0px;\n    }\n    to {\n        width: 1100px;\n        left: 50%;\n        transform: translateX(-50%);\n        border-radius: 4px;\n        } \n}\n\n@-webkit-keyframes fade-in {\n    from {\n        transform: translateY(-50%) scale(1,0);\n    }\n    to {\n        transform: translateY(0) scale(1,1);\n        } \n}\n\n@keyframes fade-in {\n    from {\n        transform: translateY(-50%) scale(1,0);\n    }\n    to {\n        transform: translateY(0) scale(1,1);\n        } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQ0FBcUM7O0FBRXpDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBSUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJO1FBQ0ksY0FBYztRQUNkLHFDQUE2QjtnQkFBN0IsNkJBQTZCO1FBQzdCLHFDQUE2QjtnQkFBN0IsNkJBQTZCOztRQUU3QixVQUFVO01BQ1o7QUFDTjs7QUFFQTs7QUFFQSxPQUFPO0FBQ1AsYUFBYTtBQUNiLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakI7O0FBRUE7SUFDSSxNQUFNO0lBQ04sZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHdDQUF3QztJ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QUFDUjs7QUFQQTtJQUNJO1FBQ0ksc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSxtQ0FBbUM7UUFDbkM7QUFDUiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbnQtbWVudSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjQwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xuICAgIHRvcDo0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xuICBcbn1cblxuLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uYXZiYXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo0MHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMTEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuXG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gICAgcGFkZGluZzogMHB4IDIzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuXG4gICAgLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiAyMzBtcyBlYXNlO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgXG4gICAgICAgIHotaW5kZXg6IDY7XG4gICAgICB9XG59XG5cbi5uYXZiYXItbmF2LFxuLm1yLWF1dG8ge1xuZmxleDogMTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xub3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5zdGlja3luYXYge1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG4uc3RpY2t5bmF2MiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbi5uYXYtbGluayB7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNmQ0ZTVkICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxuXG4ubmF2YmFyIC5iaWctaWNvbiB7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtbGluayAubWluaS1pY29uIHtcbiAgICBjb2xvcjogcmdiYSgxMDksNzgsOTMsMC4zKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBpbmZpbml0ZS1zcGlubmluZzMge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMS4wNSk7XG4gICAgICB9XG4gICAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSBzY2FsZSgxLjA1KTtcbiAgICAgIH1cbiAgICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKSBzY2FsZSgxLjA1KTtcbiAgICAgIH1cbiAgICAgIFxuICB9XG5cbi5uYXZiYXIgLm5hdi1saW5rOmhvdmVyIC5taW5pLWljb24ge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMCk7XG4gICAgYW5pbWF0aW9uOiBpbmZpbml0ZS1zcGlubmluZzMgMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5hdGl2byB7XG4gICAgbGluZS1oZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMEY3O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMnB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgY29sb3I6ICNhMTU2NzkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KSB7XG4uYXRpdm8ge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRTlEN0UyOyAvKiBENEI3QzAqL1xufVxuXG4uYXRpdm86aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTI5MWI3ICFpbXBvcnRhbnQ7XG59XG59XG5cbiAuYXRpdm8gLm1pbmktaWNvbiB7XG4gICAgY29sb3I6ICNkMTRkOGI3MTtcbn1cblxuLnN1YmF0aXZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRFN0YwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMnB4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cblxuXG4ubmF2YmFyIC5uYXYtbGluazpob3ZlciwgLm5hdmJhciAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyOTFiNztcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuXG4ubmF2LWxpbms6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5uYXZiYXIgLm5hdi1pdGVtOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuLm5hdmJhci10b2dnbGVyLW1vYmlsZSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7ICAgXG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLm5hdmJhci10b2dnbGVyLW1vYmlsZSBpIHtcbiAgICAgICAgLyogY29sb3I6ICNkMTRkOGI7ICovXG4gICAgICAgIGNvbG9yOiAjOTY2YTdmO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4ubWVudS1tb2JpbGUge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUYwRjU7XG4gICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbGVmdDogLTI2MHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiA0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBhbGwgZWFzZTtcbiAgICB9XG5cbiAgICAuYWJlcnRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2MHB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIzcHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICB9XG5cbiAgICAuYXRpdm8tbW9iaWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxNGQ4YjBlO1xuICAgICAgICBjb2xvcjogI2ExNTY3OSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hdGl2by1tb2JpbGUgLm1pbmktaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZDE0ZDhiOWE7XG4gICAgfVxuXG4gICAgLm1lbnUtbW9iaWxlIC5uYXZiYXItbmF2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB9XG4gICAgLm1lbnUtbW9iaWxlIC5taW5pLWljb24ge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgfVxuXG4gICAgLm1lbnUtbW9iaWxlIGltZyB7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cbiAgICAubWVudS1tb2JpbGUgLmNsb3NlLW1vYmlsZSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjYTE1Njc5YTg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdG9wOiAtN3B4O1xuICAgICAgICByaWdodDogLTdweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAubWVudS1mdW5kbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDMwLCAzNSwgMC43KTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IC0xOyAgIFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIG9wYWNpdHkgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogNTBtcztcbiAgICB9XG5cbiAgICAuYWJlcnRvLWZ1bmRvIHtcbiAgICAgICAgei1pbmRleDogNDsgXG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5uYXZiYXItdG9nZ2xlci1tb2JpbGU6Zm9jdXMsIC5uYXZiYXItdG9nZ2xlci1tb2JpbGU6aG92ZXIsIC5jbG9zZS1tb2JpbGU6Zm9jdXMsIC5jbG9zZS1tb2JpbGU6aG92ZXIgIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAubWVudS1tb2JpbGUgLm5hdi1pdGVtIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGJmY2VhZjtcbiAgICAvKiBtYXJnaW4tbGVmdDogMjNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7ICovXG4gICAgLyogYm94LXNoYWRvdzogaW5zZXQgLTNweCAtNXB4IDNweCByZ2JhKDIzLDAsMTAsLjAxKTsgKi9cbiAgICB9XG5cbiAgICAubWVudS1tb2JpbGUgLm5hdi1pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tdG9nZ2xlLW1vYmlsZTo6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5tZW51LW1vYmlsZSAubmF2LWxpbmsge1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgI252YnIsICNudmJyMiwgLnN0aWNreW5hdiwgLnN0aWNreW5hdjIsIC5hbmltLW5hdmJhciAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRvcDowO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG5cbiAgICAjbnZiciB7XG4gICAgICB0b3A6LTM1cHg7ICBcbiAgICB9XG5cbiAgICAubmF2YmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGQUYwRjUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQzLCAxOCwgODAsIDAuMSk7ICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cblxuICAgIC5sb2dvIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG5cbiAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXZiYXItdG9nZ2xlci1tb2JpbGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2NywgMTAsIDEwMiwgMC4wNykgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAtMnB4IDJweCByZ2JhKDAsMCwwLDAuMDIpOyAqL1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzZDAwMWMwNTsgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7ICAgXG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgXG4gICAgLmNsaWNhZG8ge1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjkxYjc7XG4gICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cblxuICAgIC5jbGljYWRvLWkge1xuICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICAgIH1cblxuXG4gICAgLm5hdmJhci10b2dnbGVyLW1vYmlsZSBpIHtcbiAgICAgICAgLyogY29sb3I6ICNkMTRkOGI7ICovXG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSg1OCwgMCwgMTAsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG5cbiAgICAudG9vbHRpcC1pbm5lciwgLmJzLXRvb2x0aXAtdG9wIC5hcnJvdzo6YmVmb3JlLCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cInRvcFwiXSAuYXJyb3c6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBcbiAgICAvKiAubmF2YmFyIC5uYXYtaXRlbTpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgfVxuXG4gICAgLm5hdmJhciAubmF2LWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwYmZjZWFmO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfSAqL1xuXG4gICAgLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAzcHggNXB4IHJnYmEoMCwwLDAsMC4xMyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICAgIH1cblxuICAgIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwYmZjZTYwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIFxuICAgIH1cblxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAubWVudS1mdW5kbywgLm1lbnUtbW9iaWxlLCAubmF2YmFyLXRvZ2dsZXItbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cblxuLmRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwcHggNXB4IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIHotaW5kZXg6IDU7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBsaW5lLWhlaWdodDogNDJweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzZkNGU1ZCAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHsgXG4gICAgLmNudC1tZW51IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5uYXZiYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBsZWZ0OjIzcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG5cbiAgICAubG9nbyBpbWcge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlLnNob3cge1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzFweCkgIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIH1cblxuIH1cblxuIC5hbmltLW5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7IFxuICAgIHJpZ2h0OiAwOyBcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB6LWluZGV4OiA3O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcblxuLnN0aWNreS1sb2dvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGFuaW1hdGlvbjogbG9nby1leHBhbmQgMzAwbXMgZWFzZTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLnRvcC1sb2dvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTIwcHgpO1xuICAgIGFuaW1hdGlvbjogbG9nby1jb250cmFjdCAxNTBtcyBlYXNlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5cbi5zdGlja3ktbmF2YmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBhbmltYXRpb246IG5hdmJhci1leHBhbmQgMzAwbXMgZWFzZTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLnRvcC1uYXZiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIGFuaW1hdGlvbjogbmF2YmFyLWNvbnRyYWN0IDE1MG1zIGVhc2U7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbn1cblxuQGtleWZyYW1lcyBsb2dvLWV4cGFuZCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDUwcHgpO1xuICAgICAgICB9IFxuICAgIHRvIHtcbiAgICAgICAgbGVmdDogY2FsYygxMCUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBsb2dvLWNvbnRyYWN0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgbGVmdDogY2FsYygxMCUpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDUwcHgpO1xuICAgICAgICB9IFxufVxuXG5Aa2V5ZnJhbWVzIG5hdmJhci1leHBhbmQge1xuICAgIGZyb20ge1xuICAgICAgICB3aWR0aDogMTEwMHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9IFxuICAgIHRvIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBuYXZiYXItY29udHJhY3Qge1xuICAgIGZyb20ge1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgd2lkdGg6IDExMDBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfSBcbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEsMCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEsMSk7XG4gICAgICAgIH0gXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _parallax_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parallax.directive */ "./src/app/parallax.directive.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @crystalui/angular-lightbox */ "./node_modules/@crystalui/angular-lightbox/__ivy_ngcc__/fesm2015/crystalui-angular-lightbox.js");







const _c0 = function (a0) { return { path: a0 }; };
function HomeComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_86_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.imgClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/img/index/galeria/img", img_r2, "-tmb.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullImage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "../../assets/img/index/galeria/img" + img_r2 + ".jpg"))("closeButtonText", ctx_r0.closeButtonText);
} }
function HomeComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const depoimento_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", depoimento_r5.texto, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", depoimento_r5.pessoa, "");
} }
class HomeComponent {
    constructor() {
        this.imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.depoimentos = [
            {
                texto: "Em Construção",
                pessoa: "Em Construção",
            },
        ];
        this.closeButtonText = "Fechar";
        this.config = {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                bulletActiveClass: 'teste',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                600: {
                    centeredSlides: false,
                    slidesPerView: 3,
                    pagination: false,
                }
            }
        };
        this.config2 = {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            preloadImages: false,
            lazy: true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                bulletActiveClass: 'teste',
            },
            breakpoints: {
                // when window width is >=
                600: {
                    centeredSlides: false,
                    slidesPerView: 3,
                }
            }
        };
        this.config3 = {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                bulletActiveClass: 'teste',
            },
        };
    }
    imgClick() {
        this.config2['autoplay'] = false;
    }
    lightboxClose() {
        this.config2['autoplay'] = true;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
    ;
    scroll() {
        if (window.innerWidth > 1000) {
            window.scrollTo(0, 350);
        }
        else if (window.innerWidth > 765) {
            window.scrollTo(0, 420);
        }
        else if (window.innerWidth > 640) {
            window.scrollTo(0, 250);
        }
        else {
            window.scrollTo(0, 210);
        }
    }
    ;
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 97, vars: 6, consts: [[1, "main"], [1, "carousel-row"], [1, "cnt-carousel"], ["id", "carouselExampleFade", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/index/hero0.jpg", "alt", "", 1, "d-block", "w-100"], ["appParallax", "", 1, "carousel-caption", "d-md-block", 3, "ratio"], [1, "slide1-linha1"], [1, "slide1-linha2"], ["type", "button", 1, "btn", "btn-padrao", "slide1-botao", 3, "click"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], [1, "fas", "fa-chevron-left"], [1, "sr-only"], ["href", "#carouselExampleFade", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [1, "fas", "fa-chevron-right"], ["id", "produtos"], [1, "container", "bg-white", "cnt-main"], [1, "row", "home-titulo"], [1, "row", "linha1pai", 3, "config"], [1, "linha1"], ["routerLink", "../produtos/bolos"], [1, "c1-img"], ["src", "assets/img/index/icone-bolo.png"], [1, "c1"], [1, "c1", 2, "margin-left", "15px"], ["routerLink", "../produtos/bolos/pasta", 1, "prod-link"], [1, "fas", "fa-heart"], ["routerLink", "../produtos/bolos/naked", 1, "prod-link"], ["routerLink", "../produtos/bolos/confeitados", 1, "prod-link"], ["routerLink", "../produtos/docinhos"], [1, "c2-img"], ["src", "assets/img/index/icone-brigadeiro.png"], [1, "c2"], ["routerLink", "../produtos/docinhos/finos", 1, "prod-link"], ["routerLink", "../produtos/docinhos/infantis", 1, "prod-link"], ["routerLink", "../produtos/docinhos/tradicionais", 1, "prod-link"], ["routerLink", "../produtos/doces"], [1, "c3-img"], ["src", "assets/img/index/icone-cupcake.png"], [1, "c3"], [1, "c3", 2, "margin-left", "15px"], ["routerLink", "../produtos/doces/cupcakes", 1, "prod-link"], ["routerLink", "../produtos/doces/pirulitos", 1, "prod-link"], ["routerLink", "../produtos/doces/bemcasados", 1, "prod-link"], [1, "row", "galeria", 3, "config"], ["class", "slider-img", 4, "ngFor", "ngForOf"], [1, "row", "linha3"], ["href", "https://www.instagram.com/demonte.doces", "target", "_blank"], ["type", "button", 1, "btn", "btn-padrao"], [1, "row", "home-titulo", "depoim"], [1, "far", "fa-heart"], [1, "depoimentos", 3, "config"], ["class", "slider-dep", 4, "ngFor", "ngForOf"], [1, "slider-img"], ["lightbox", "", "closing-state:animation-end", "lightboxClose()", 1, "swiper-lazy", 3, "src", "fullImage", "closeButtonText", "click"], [1, "slider-dep"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Our mission is to transform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dreams come true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "what we love to do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "swiper", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cakes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Pasta Americana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Naked Cake ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Confeitados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Docinhos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Doces Finos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Infantis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Tradicionais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Doces Maiores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Cupcakes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Pirulitos Decorados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Bem Casados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Alguns trabalhos ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "swiper", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, HomeComponent_div_86_Template, 2, 5, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Ver Portf\u00F3lio completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Clientes satisfeitos \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "swiper", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, HomeComponent_div_96_Template, 5, 2, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", 0 - 0.1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.depoimentos);
    } }, directives: [_parallax_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxDirective"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxDirective"]], styles: [".main {\n  overflow: hidden;\n  height: 100%;\n  background-color: #fff;\n}\n\n/* CAROUSEL -------------------------------- */\n\n.carousel-row {\n  background-color: #FBF0F4;\n  width: 100%;\n  height: 450px;\n  background-image: url('hero0-blur.jpg');\n  background-size: cover;\n  background-position-y: -150px;\n  -webkit-animation: slide1-entrar2 3.5s ease both;\n          animation: slide1-entrar2 3.5s ease both;\n  -webkit-animation-delay: 0.23s;\n          animation-delay: 0.23s;\n  overflow: hidden;\n}\n\n.carousel-control-next, .carousel-control-prev {\n  display: none;\n}\n\n.cnt-carousel {\n    z-index: 0;\n    padding: 0px;\n    margin-top: 0px;\n    top:0;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n    min-width: 1200px;\n    max-width: 1500px;\n    background-color: #FCFAFB;\n    overflow: hidden;\n}\n\n@media (min-width:641px) {\n  .cnt-carousel {\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);\n  }\n}\n\n.carousel-item active {\n  position: fixed;\n}\n\n.carousel, .carousel-inner, .carousel-item, .d-block {\n  z-index: 0;\n  overflow: hidden;\n}\n\n.carousel i {\n    font-size: 28px;\n    color: white;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: white;\n    text-shadow:  0 1px 4px rgba(0,0,0,0.3);\n    transition: all 300ms ease;\n}\n\n.carousel-control-prev:hover i {\n  \n    margin-right: 20px;\n    text-shadow:  0 0px 4px rgba(0,0,0,0.4);\n}\n\n.carousel-control-next:hover i {\n    margin-left: 20px;\n    text-shadow:  0 0px 4px rgba(0,0,0,0.4);\n}\n\n.carousel-item > img {   \n    margin-left: auto;\n    margin-right: auto;\n    margin-top: -90px;\n    -webkit-animation: slide1-entrar 3s ease both;\n            animation: slide1-entrar 3s ease both;\n    overflow: hidden;\n  }\n\n@-webkit-keyframes slide1-entrar {\n    0% {\n      transform: translateY(-15px);\n      opacity: 0;\n      /* filter:brightness(150%); */\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n\n@-webkit-keyframes slide1-entrar2 {\n    0% {\n      opacity: 0.1;\n      \n    }\n    100% {\n      opacity: 0.9;\n    }\n  }\n\n.carousel-inner > .carousel-item {\n    max-height: 450px;\n    border-radius: 0px;\n }\n\n.carousel-caption {\n  position: fixed;\n     top:0;\n     margin-top: 125px;\n     text-align: left;\n     margin-bottom: 42px;\n     margin-left: -50px;\n }\n\n.carousel-caption h5 {\n    font-family: 'Amatic SC', cursive;\n    color: #e291b7;\n    \n }\n\n.carousel-caption h3 {\n    font-family: 'Amatic SC', cursive;\n    color: #d14d8b;\n    \n}\n\n.slide1-linha1 {\n    font-size: 2.3rem;\n    margin-top: 5px;\n    margin-left: 7px;\n    \n\t-webkit-animation: slide1-linha1 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n            animation: slide1-linha1 1.0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n            -webkit-animation-delay: 1.5s;\n                    animation-delay: 1.5s;\n}\n\n.slide1-linha2 {\n    font-size: 5rem;\n    margin-top: -15px;\n    margin-left: 23px;\n\t-webkit-animation: slide1-linha2 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n            animation: slide1-linha2 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n            -webkit-animation-delay: 2.3s;\n                    animation-delay: 2.3s;\n}\n\n.slide1-botao {\n    margin-top: 18px;\n    margin-left: 80px;\n    padding: 10px 75px;\n\t-webkit-animation: slide1-botao 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n            animation: slide1-botao 1.0s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\n            -webkit-animation-delay: 3.5s;\n                    animation-delay: 3.5s;\n}\n\n@media (max-width: 1199px) { \n  .cnt-carousel {\n    min-width: 820px;\n    top:50px;\n}\n\n.carousel-item > img {   \n    margin-top: 0px;\n  }\n\n    .carousel-caption {\n        margin-top: 70px;\n    }\n}\n\n@media (max-width: 765px) {\n  .carousel-row {\n  top:50px;\n  height: 250px;\n  width: 100%;\n  background-position-y: 0px;\n}\n\n.cnt-carousel {\n    top:50px;\n    height: 250px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 100%;\n    min-width: 0px;\n}\n\n.carousel-item > img {   \n    margin-top: 0px;\n  }\n\n\t.carousel-inner .carousel-item img {\n\t\tmin-height: 200px\n    }\n\n    .carousel-caption {\n        text-align: center;\n        margin-bottom: -30px;\n        margin-top: 15px;\n        margin-left: 0px;\n        margin-right: 0px;\n    }\n\n    .slide1-linha1 {\n        font-size: 1.4rem;\n        text-align: center;\n        margin-left: 0px;\n        margin-right: 0px;\n    }\n    \n    .slide1-linha2 {\n        font-size: 2.3rem;\n        text-align: center;\n        margin-top: -7px;\n        margin-left: 0px;\n        margin-right: 0px;\n        width: 200%;\n        \n        transform: translateX(-25%);\n        color: #7a1b47;\n    }\n\n    .slide1-botao {\n        position: relative;\n        bottom: 10px;\n        margin-left: 0px;\n        padding: 10px 30px;\n        font-size: 1.3rem;\n        background-color: #d14d8b;\n        color: white;\n    }\n}\n\n@media (max-width: 640px) {\n.carousel-row {\n  top:0px;\n  height: 210px;\n}\n\n.cnt-carousel {\n    top:0px;\n    height: 210px;\n    /* min-width: 470px; */\n}\n\n.carousel-item > img {\n    min-width: 500px;\n}\n}\n\n@-webkit-keyframes slide1-linha2 {\n    0% {\n      letter-spacing: 0.1em;\n      opacity: 0;\n    }\n    40% {\n      opacity: 0.6;\n    }\n    100% {\n      letter-spacing: normal;\n      opacity: 1;\n    }\n  }\n\n@keyframes slide1-linha2 {\n    0% {\n      letter-spacing: 0.1em;\n      opacity: 0;\n    }\n    40% {\n      opacity: 0.6;\n    }\n    100% {\n      letter-spacing: normal;\n      opacity: 1;\n    }\n  }\n\n@-webkit-keyframes slide1-linha1 {\n    0% {\n      letter-spacing: -0.2em;\n      -webkit-filter: blur(12px);\n              filter: blur(12px);\n      opacity: 0;\n    }\n    100% {\n      -webkit-filter: blur(0px);\n              filter: blur(0px);\n      opacity: 1;\n    }\n  }\n\n@keyframes slide1-linha1 {\n    0% {\n      letter-spacing: -0.2em;\n      -webkit-filter: blur(12px);\n              filter: blur(12px);\n      opacity: 0;\n    }\n    100% {\n      -webkit-filter: blur(0px);\n              filter: blur(0px);\n      opacity: 1;\n    }\n  }\n\n@-webkit-keyframes slide1-botao {\n    0% {\n        transform: translate(0, -20px);\n        opacity: 0;\n    }\n    100% {\n        transform: translate(0, 0);\n        opacity: 1;\n    }\n  }\n\n@keyframes slide1-botao {\n    0% {\n        transform: translate(0, -20px);\n        opacity: 0;\n    }\n    100% {\n        transform: translate(0, 0);\n        opacity: 1;\n    }\n  }\n\n/* MAIN -------------------------------- */\n\n/* MAIN --------------------------------------- LINHA 1 ----------- */\n\n.cnt-main {\n  background-color: #fff;\n  position: relative;\n  margin-top: -50px;\n  border-radius: 10px;\n  left: 0; \n  right: 0; \n  margin-left: auto; \n  margin-right: auto; \n  width: 100%;\n  max-width: 1200px;\n  z-index: 1 !important;\n  -webkit-animation: main-entrar .3s ease both;\n          animation: main-entrar .3s ease both;\n}\n\n@media (max-width: 1199px) { \n  .cnt-main { \n    border-radius: 0px;\n  }\n}\n\n@-webkit-keyframes main-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(15px);\n    }\n    50% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n@keyframes main-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(15px);\n    }\n    50% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n.home-titulo {\n    height: 8rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Indie Flower', cursive;\n    color: #e291b7;\n    z-index: 2 !important;\n}\n\n.home-titulo:first-child {\n    -webkit-animation: main-entrar .5s ease both;\n            animation: main-entrar .5s ease both;\n    -webkit-animation-delay: .2s;\n            animation-delay: .2s;\n  }\n\n.home-titulo:not(:first-child) {\n  border-top: 5px dotted #FAF0F5;\n  padding-top: 2.3rem;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n@media (max-width: 765px) { \n  .home-titulo h1 {\n      font-size: 1.5em;\n  }\n  .cnt-main { \n    margin-top: 0px;\n  }\n  .home-titulo:not(:first-child) {\n  border-top: 5px dotted #FAF0F5;\n  padding-top: 1.5rem;\n  margin-left: 5%;\n  margin-right: 5%;\n  }\n}\n\n.bgalt {\n    background-color: #FAF0F5;\n}\n\n.linha1pai {\n    padding-left: 0;\n    padding-right: 0;\n    margin-top: 0;\n}\n\n.linha1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 3.0rem;\n    padding-top: 35px;\n    margin-top: 0;\n}\n\n.swiper-pagination {\n  opacity: 0.7 !important;\n}\n\nspan .teste {\n    color: #d14d8b !important;\n    opacity: 1;\n    background-color: #d14d8b !important;\n    border: none !important;\n    z-index: 2;\n\n}\n\n.c1 {\n  -webkit-animation: l1-col-entrar .5s ease both;\n          animation: l1-col-entrar .5s ease both;\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s;\n}\n\n.c2 {\n  -webkit-animation: l1-col-entrar .5s ease both;\n          animation: l1-col-entrar .5s ease both;\n  -webkit-animation-delay: .7s;\n          animation-delay: .7s;\n}\n\n.c3 {\n  -webkit-animation: l1-col-entrar .5s ease both;\n          animation: l1-col-entrar .5s ease both;\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n\n@-webkit-keyframes l1-col-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(-10px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n@keyframes l1-col-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(-10px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n.linha1 img {\n    width: 120px;\n    height: 120px;\n    padding: 20px;\n    border: 0px solid white;\n    border-radius: 60px;\n    box-shadow: 0 2px 7px rgba(0,0,0,0.07);\n    margin-top: -10px;\n    margin-bottom: 23px;\n    transition: all 500ms ease;\n    \n}\n\n.c1-img {\n  -webkit-animation: img-entrar .5s ease both;\n          animation: img-entrar .5s ease both;\n    -webkit-animation-delay: .3s;\n            animation-delay: .3s;\n}\n\n.c2-img {\n  -webkit-animation: img-entrar .5s ease both;\n          animation: img-entrar .5s ease both;\n    -webkit-animation-delay: .5s;\n            animation-delay: .5s;\n}\n\n.c3-img {\n  -webkit-animation: img-entrar .5s ease both;\n          animation: img-entrar .5s ease both;\n    -webkit-animation-delay: 0.7s;\n            animation-delay: 0.7s;\n}\n\n@-webkit-keyframes img-entrar {\n    0% {\n      opacity: 0;\n      transform: scale(1.3);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n@keyframes img-entrar {\n    0% {\n      opacity: 0;\n      transform: scale(1.3);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n.linha1 h3 {\n    font-family: 'Mouse Memoirs', sans-serif;\n    color: #d14d8b;\n    margin-bottom: 15px;\n    text-align: center;\n}\n\n.linha1 i {\n    color: #e291b7;\n    font-size: 14px;\n    margin-right: 3px;\n    margin-bottom: 8px;\n}\n\n.linha1 p {\n    line-height: 30px;\n  }\n\n.linha1 a, .linha1 a:hover, .linha1 a:visited {\n    color: #454545;\n  }\n\n.prod-link {\n  transition: all 200ms ease;\n}\n\n.prod-link:hover {\n  color: #e291b7 !important;\n}\n\n.prod-link:hover i {\n  color: #F2B1C7;\n  -webkit-animation: scaleIcon 0.23s normal ease;\n          animation: scaleIcon 0.23s normal ease;\n}\n\n.linha1 .btn-padrao {\n    margin-top: 7px;\n    padding-left: 50px;\n    padding-right: 50px;\n}\n\n@-webkit-keyframes infinite-spinning2 {\n    0%, 100% {\n        transform: rotate(0deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      25% {\n        transform: rotate(3deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      75% {\n        transform: rotate(-3deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      \n  }\n\n@keyframes infinite-spinning2 {\n    0%, 100% {\n        transform: rotate(0deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      25% {\n        transform: rotate(3deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      75% {\n        transform: rotate(-3deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      \n  }\n\n@-webkit-keyframes scale {\n    0% {\n        transform: translate(0, 0px) scale(1,1);\n      }\n    100% {\n        transform: rotate(3deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      \n}\n\n@keyframes scale {\n    0% {\n        transform: translate(0, 0px) scale(1,1);\n      }\n    100% {\n        transform: rotate(3deg) translate(0, -4px) scale(1.05,1.05);\n      }\n      \n}\n\n@media(min-width:600px) {\n\n.linha1:hover i {\n    -webkit-animation: infinite-spinning 1.6s infinite linear;\n            animation: infinite-spinning 1.6s infinite linear;\n}\n\n.linha1:hover img {\n    box-shadow: 0 0px 23px rgba(255, 122, 155, 0.3);\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    -webkit-animation: infinite-spinning2 1.6s infinite linear, scale 0.4s normal ease;\n            animation: infinite-spinning2 1.6s infinite linear, scale 0.4s normal ease;\n}\n\n}\n\n/* MAIN --------------------------------------- LINHA 2 ----------- */\n\n.linha2 {\n    margin-bottom: 5rem;\n}\n\n.linha2 p {\n    margin:20px;\n    margin-left: 45px;\n    line-height: 30px;\n    text-indent: 3rem;\n}\n\n.linha2 button {\n    margin-left: 55px;\n    margin-top: 20px;\n    padding-right:75px;\n    padding-left: 75px;\n}\n\n.linha2 img {\n    width: 85%;\n    min-width: 250px;\n    border: 8px solid white;\n    border-radius: 5px;\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.23);\n    margin: 10px auto;\n    transform: rotate(-2deg);\n}\n\n@media (max-width: 640px) {\n    .linha2 img {\n        display: none;\n    }\n    .linha2 {\n        margin-bottom: 2rem;\n    }\n}\n\n/* MAIN --------------------------------------- LINHA 3 ----------- */\n\n@media (min-width: 1200px) {\n.galeria {\n  padding-left: 23px;\n  padding-right: 23px;\n}\n.swiper-button-prev {\n  left: 3px !important;\n  overflow: visible;\n}\n.swiper-button-next {\n  right: 3px !important;\n  overflow: visible;\n}\n}\n\n.swiper-button-prev, .swiper-button-next {\n    background-color: #fff;\n    padding: 0;\n    border: none;\n    border-radius: 25px;\n    width: 45px !important;\n    height: 50px;\n    z-index: 2;\n    box-shadow: 0 1px 4px rgba(0,0,0,0.1);\n    outline: 0;\n    transition: all 300ms ease;\n}\n\n.swiper-button-prev::after, .swiper-button-next::after {\n    transform: scale(.4);\n    color: #d14d8b;\n    transition: all 300ms ease;\n}\n\n@media (min-width: 641px) {\n\n  .swiper-button-prev:hover, .swiper-button-next:hover {\n      background-color: #f1b5d1;\n      transform: translateY(-3px);\n      box-shadow: 0 3px 3px rgba(0,0,0,0.1);\n    }\n\n    .swiper-button-prev:active, .swiper-button-next:active {\n      transform: translateY(-1px);\n      box-shadow: 0 1px 3px rgba(0,0,0,0.1);\n    }\n\n  .swiper-button-prev:hover::after, .swiper-button-next:hover::after {\n      color: #fff;\n      text-shadow: 0 1px 3px rgba(0,0,0,0.5);\n    }\n\n}\n\n.swiper-button-prev:focus, .swiper-button-next:focus, .slider-img a:focus, .slider-img a:active, .slider-img a {\n    outline: none;\n  }\n\n.swiper-button-disabled {\n          display: none !important;\n      }\n\n@media (max-width: 640px) {\n  .swiper-button-prev, .swiper-button-next {\n          background-color: transparent;\n          box-shadow: none;\n      }\n      \n      .swiper-button-prev::after, .swiper-button-next::after {\n      transform: scale(.8,1.3);\n      color: #fff;\n      text-shadow: 0 1px 3px rgba(0,0,0,0.1);\n  }\n   .swiper-button-prev:active::after, .swiper-button-next:active::after {\n      color: #f1b5d1;\n      text-shadow: none;\n    }\n\n    \n}\n\n.slider-img {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: -20px;\n}\n\n.slider-img img {\n    max-height: 250px;\n    max-width: 250px;\n    /* border: 8px solid white; */\n    border-radius: 6px;\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n    margin: 10px auto;\n    outline: none;\n    transition: 230ms all ease;\n}\n\n.lightbox-shown {\n  background-color: rgba(10, 0, 0, 0.85) !important;\n}\n\n.galeria .swiper-wrapper {\n  height: 310px;\n}\n\n.galeria .swiper-pagination {\n  margin-bottom: -20px;\n}\n\n.mfp-container {\n  z-index: 2;\n  \n  position: fixed;\n  top:20%;\n  left:10px;\n  width: 10vw !important;\n}\n\n.linha3 {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 1.5rem;\n    padding: 2rem;\n    \n}\n\n.linha3 button {\n    padding-top: 7px;\n    padding-bottom: 7px;\n    padding-left: 60px;\n    padding-right: 60px;\n    margin-bottom: 1.5rem;\n}\n\n@media (min-width: 641px) { \n.slider-img img:hover {\n    transform: scale(1.05);\n    cursor: pointer;\n}\n}\n\n@media (max-width: 640px) { \n    .slider-img img {\n        max-width: 90%;\n    }\n}\n\n/* MAIN --------------------------------------- LINHA 4 ----------- */\n\n@-webkit-keyframes infinite-spinning {\n    0%, 100% {\n        transform: rotate(0deg);\n      }\n      25% {\n        transform: rotate(15deg);\n      }\n      75% {\n        transform: rotate(-15deg);\n      }\n      \n  }\n\n@keyframes infinite-spinning {\n    0%, 100% {\n        transform: rotate(0deg);\n      }\n      25% {\n        transform: rotate(15deg);\n      }\n      75% {\n        transform: rotate(-15deg);\n      }\n      \n  }\n\n.depoim h1 {\n    padding-left: 1.75rem;\n  }\n\n.home-titulo i {\n    -webkit-animation: infinite-spinning 1.5s infinite linear;\n            animation: infinite-spinning 1.5s infinite linear;\n    font-size: 18px;\n    position: relative;\n    top: -17px;\n    left: -34px;\n  }\n\n.depoimentos {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-left: -15px;\n    margin-right: -15px;\n    padding-left: 5%;\n    padding-right: 5%;\n}\n\n.depoimentos .slider-dep {\n    padding: 2.3rem 10%;\n}\n\n.depoimentos .swiper-pagination {\n  display: none;\n}\n\n.depoimentos p {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-style: italic;\n    font-size: 1.5rem;\n    color: #756565;\n    text-align: center;\n}\n\n.depoimentos h6 {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-style: italic;\n    font-size: 1.4rem;\n    color: #b0a0a0;\n    width: 25%;\n    margin-left: 75%;\n}\n\n@media (max-width: 640px) { \n    .depoimentos .slider-dep {\n        margin: 0px;\n        padding: 0;\n        \n    }\n\n    .depoimentos p {\n        font-size: .9rem;\n    }\n    .depoimentos h6 {\n        font-size: 0.8rem;\n        margin-left: 0;\n        width: auto;\n        text-align: center;\n        \n    }\n\n    .galeria .swiper-button-prev, .galeria .swiper-button-next {\n          display: none;\n      }\n    \n    .depoimentos .swiper-button-prev, .depoimentos .swiper-button-next {\n          display: none;\n      }\n}\n\n.linha4 {\n    display: flex;\n    justify-content: center;\n    padding-bottom: 3.5rem;\n}\n\n@media (max-width: 599px) { \n.linha1 img {\n    width: 100px;\n    height: 100px;\n    padding: 20px;\n    border: none;\n    border-radius: 50px;\n    box-shadow: 0 2px 6px rgba(0,0,0,0.07);\n    margin-top: -10px;\n    margin-bottom: 23px;\n    transition: all 500ms ease;\n    \n}\n\n  .linha1pai {\n    margin-bottom: 2rem;\n  }\n\n  .home-titulo {\n    height: 5rem;\n    margin-bottom: 1.5rem;\n  } \n  .home-titulo:first-child {\n    margin-bottom: -1rem;\n    margin-top: 0.5rem;\n  } \n\n  .linha3, .linha3 .btn-padrao {\n    margin-bottom: 5px;\n  }\n  .linha3 .btn-padrao {\n  padding-left: 40px;\n  padding-right: 40px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQSw4Q0FBOEM7O0FBQzlDO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUNBQThEO0VBQzlELHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0RBQXdDO1VBQXhDLHdDQUF3QztFQUN4Qyw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHVDQUF1QztJQUN2QywwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFO01BQ0UsNEJBQTRCO01BQzVCLFVBQVU7TUFDViw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7RUFDRjs7QUFFRTtJQUNBO01B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SUFDakIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZFQUE2RTtJQUM3RSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsVUFBVTs7SUFFZDs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsa0JBQWtCOztJQUV0Qjs7SUFFQTtVQUNNLGFBQWE7TUFDakI7O0lBRUY7VUFDTSxhQUFhO01BQ2pCO0FBQ047O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7O0FBRTlCOztFQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLyogQ0FST1VTRUwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5jYXJvdXNlbC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGMEY0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pbmRleC9oZXJvMC1ibHVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTUwcHg7XG4gIGFuaW1hdGlvbjogc2xpZGUxLWVudHJhcjIgMy41cyBlYXNlIGJvdGg7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4yM3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5jbnQtY2Fyb3VzZWwge1xuICAgIHotaW5kZXg6IDA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB0b3A6MDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEyMDBweDtcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQUZCO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjY0MXB4KSB7XG4gIC5jbnQtY2Fyb3VzZWwge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxufVxuXG4uY2Fyb3VzZWwtaXRlbSBhY3RpdmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cblxuLmNhcm91c2VsLCAuY2Fyb3VzZWwtaW5uZXIsIC5jYXJvdXNlbC1pdGVtLCAuZC1ibG9jayB7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJvdXNlbCBpIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogIDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIgaSB7XG4gIFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogIDAgMHB4IDRweCByZ2JhKDAsMCwwLDAuNCk7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIgaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6ICAwIDBweCA0cHggcmdiYSgwLDAsMCwwLjQpO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSA+IGltZyB7ICAgXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICAgIGFuaW1hdGlvbjogc2xpZGUxLWVudHJhciAzcyBlYXNlIGJvdGg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZTEtZW50cmFyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIC8qIGZpbHRlcjpicmlnaHRuZXNzKDE1MCUpOyAqL1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUxLWVudHJhcjIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9XG4gIH1cblxuICAuY2Fyb3VzZWwtaW5uZXIgPiAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuIH1cblxuIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAgICB0b3A6MDtcbiAgICAgbWFyZ2luLXRvcDogMTI1cHg7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgIG1hcmdpbi1ib3R0b206IDQycHg7XG4gICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiB9XG5cbiAuY2Fyb3VzZWwtY2FwdGlvbiBoNSB7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xuICAgIFxuIH1cblxuIC5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICNkMTRkOGI7XG4gICAgXG59XG5cbi5zbGlkZTEtbGluaGExIHtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICBcblx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlMS1saW5oYTEgMS4wcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4gICAgICAgICAgICBhbmltYXRpb246IHNsaWRlMS1saW5oYTEgMS4wcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG59XG5cbi5zbGlkZTEtbGluaGEyIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZTEtbGluaGEyIDEuNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSBib3RoO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZTEtbGluaGEyIDEuNXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSBib3RoO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjNzO1xufVxuXG4uc2xpZGUxLWJvdGFvIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIHBhZGRpbmc6IDEwcHggNzVweDtcblx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlMS1ib3RhbyAxLjBzIGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCkgYm90aDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUxLWJvdGFvIDEuMHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSBib3RoO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjVzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7IFxuICAuY250LWNhcm91c2VsIHtcbiAgICBtaW4td2lkdGg6IDgyMHB4O1xuICAgIHRvcDo1MHB4O1xufVxuXG4uY2Fyb3VzZWwtaXRlbSA+IGltZyB7ICAgXG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgLmNhcm91c2VsLXJvdyB7XG4gIHRvcDo1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwcHg7XG59XG5cbi5jbnQtY2Fyb3VzZWwge1xuICAgIHRvcDo1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmNhcm91c2VsLWl0ZW0gPiBpbWcgeyAgIFxuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG5cdC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSBpbWcge1xuXHRcdG1pbi1oZWlnaHQ6IDIwMHB4XG4gICAgfVxuXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB9XG5cbiAgICAuc2xpZGUxLWxpbmhhMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2xpZGUxLWxpbmhhMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogMjAwJTtcbiAgICAgICAgXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcbiAgICAgICAgY29sb3I6ICM3YTFiNDc7XG4gICAgfVxuXG4gICAgLnNsaWRlMS1ib3RhbyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0ZDhiO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbi5jYXJvdXNlbC1yb3cge1xuICB0b3A6MHB4O1xuICBoZWlnaHQ6IDIxMHB4O1xufVxuXG4uY250LWNhcm91c2VsIHtcbiAgICB0b3A6MHB4O1xuICAgIGhlaWdodDogMjEwcHg7XG4gICAgLyogbWluLXdpZHRoOiA0NzBweDsgKi9cbn1cblxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG59XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZTEtbGluaGEyIHtcbiAgICAwJSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlMS1saW5oYTIge1xuICAgIDAlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlMS1saW5oYTEge1xuICAgIDAlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yZW07XG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2xpZGUxLWxpbmhhMSB7XG4gICAgMCUge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJlbTtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlMS1ib3RhbyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuLyogTUFJTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogTUFJTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTElOSEEgMSAtLS0tLS0tLS0tLSAqL1xuXG5cbi5jbnQtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxlZnQ6IDA7IFxuICByaWdodDogMDsgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyBcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogbWFpbi1lbnRyYXIgLjNzIGVhc2UgYm90aDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkgeyBcbiAgLmNudC1tYWluIHsgXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG5cbiAgICBAa2V5ZnJhbWVzIG1haW4tZW50cmFyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICB9XG5cblxuLmhvbWUtdGl0dWxvIHtcbiAgICBoZWlnaHQ6IDhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLXRpdHVsbzpmaXJzdC1jaGlsZCB7XG4gICAgYW5pbWF0aW9uOiBtYWluLWVudHJhciAuNXMgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjJzO1xuICB9IFxuXG4uaG9tZS10aXR1bG86bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wOiA1cHggZG90dGVkICNGQUYwRjU7XG4gIHBhZGRpbmctdG9wOiAyLjNyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY1cHgpIHsgXG4gIC5ob21lLXRpdHVsbyBoMSB7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG4gIC5jbnQtbWFpbiB7IFxuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAuaG9tZS10aXR1bG86bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wOiA1cHggZG90dGVkICNGQUYwRjU7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgfVxufVxuXG5cblxuLmJnYWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMEY1O1xufVxuXG4ubGluaGExcGFpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubGluaGExIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjByZW07XG4gICAgcGFkZGluZy10b3A6IDM1cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgb3BhY2l0eTogMC43ICFpbXBvcnRhbnQ7XG59XG5cblxuc3BhbiAudGVzdGUge1xuICAgIGNvbG9yOiAjZDE0ZDhiICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0ZDhiICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMjtcblxufVxuXG4uYzEge1xuICBhbmltYXRpb246IGwxLWNvbC1lbnRyYXIgLjVzIGVhc2UgYm90aDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNXM7XG59XG5cbi5jMiB7XG4gIGFuaW1hdGlvbjogbDEtY29sLWVudHJhciAuNXMgZWFzZSBib3RoO1xuICBhbmltYXRpb24tZGVsYXk6IC43cztcbn1cblxuLmMzIHtcbiAgYW5pbWF0aW9uOiBsMS1jb2wtZW50cmFyIC41cyBlYXNlIGJvdGg7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cblxuICAgIEBrZXlmcmFtZXMgbDEtY29sLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgfVxuXG4ubGluaGExIGltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDdweCByZ2JhKDAsMCwwLDAuMDcpO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gICAgXG59XG5cbi5jMS1pbWcge1xuICBhbmltYXRpb246IGltZy1lbnRyYXIgLjVzIGVhc2UgYm90aDtcbiAgICBhbmltYXRpb24tZGVsYXk6IC4zcztcbn1cblxuLmMyLWltZyB7XG4gIGFuaW1hdGlvbjogaW1nLWVudHJhciAuNXMgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjVzO1xufVxuXG4uYzMtaW1nIHtcbiAgYW5pbWF0aW9uOiBpbWctZW50cmFyIC41cyBlYXNlIGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xufVxuXG5Aa2V5ZnJhbWVzIGltZy1lbnRyYXIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG5cbi5saW5oYTEgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNkMTRkOGI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmxpbmhhMSBpIHtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ubGluaGExIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG5cbi5saW5oYTEgYSwgLmxpbmhhMSBhOmhvdmVyLCAubGluaGExIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6ICM0NTQ1NDU7XG4gIH1cblxuLnByb2QtbGluayB7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4ucHJvZC1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNlMjkxYjcgIWltcG9ydGFudDtcbn1cblxuLnByb2QtbGluazpob3ZlciBpIHtcbiAgY29sb3I6ICNGMkIxQzc7XG4gIGFuaW1hdGlvbjogc2NhbGVJY29uIDAuMjNzIG5vcm1hbCBlYXNlO1xufVxuXG4ubGluaGExIC5idG4tcGFkcmFvIHtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbkBrZXlmcmFtZXMgaW5maW5pdGUtc3Bpbm5pbmcyIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgwLCAtNHB4KSBzY2FsZSgxLjA1LDEuMDUpO1xuICAgICAgfVxuICAgICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDAsIC00cHgpIHNjYWxlKDEuMDUsMS4wNSk7XG4gICAgICB9XG4gICAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZykgdHJhbnNsYXRlKDAsIC00cHgpIHNjYWxlKDEuMDUsMS4wNSk7XG4gICAgICB9XG4gICAgICBcbiAgfVxuXG5Aa2V5ZnJhbWVzIHNjYWxlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCkgc2NhbGUoMSwxKTtcbiAgICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDAsIC00cHgpIHNjYWxlKDEuMDUsMS4wNSk7XG4gICAgICB9XG4gICAgICBcbn1cblxuQG1lZGlhKG1pbi13aWR0aDo2MDBweCkge1xuXG4ubGluaGExOmhvdmVyIGkge1xuICAgIGFuaW1hdGlvbjogaW5maW5pdGUtc3Bpbm5pbmcgMS42cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5saW5oYTE6aG92ZXIgaW1nIHtcbiAgICBib3gtc2hhZG93OiAwIDBweCAyM3B4IHJnYmEoMjU1LCAxMjIsIDE1NSwgMC4zKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGFuaW1hdGlvbjogaW5maW5pdGUtc3Bpbm5pbmcyIDEuNnMgaW5maW5pdGUgbGluZWFyLCBzY2FsZSAwLjRzIG5vcm1hbCBlYXNlO1xufVxuXG59XG5cblxuXG4vKiBNQUlOIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMSU5IQSAyIC0tLS0tLS0tLS0tICovXG4ubGluaGEyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuXG4ubGluaGEyIHAge1xuICAgIG1hcmdpbjoyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtaW5kZW50OiAzcmVtO1xufVxuXG4ubGluaGEyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0Ojc1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xufVxuXG4ubGluaGEyIGltZyB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5saW5oYTIgaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmxpbmhhMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufVxuXG4vKiBNQUlOIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMSU5IQSAzIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4uZ2FsZXJpYSB7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbiAgcGFkZGluZy1yaWdodDogMjNweDtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYge1xuICBsZWZ0OiAzcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbn1cblxuLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OjphZnRlciwgLnN3aXBlci1idXR0b24tbmV4dDo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjQpO1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIHtcblxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyLCAuc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWI1ZDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cblxuICAgIC5zd2lwZXItYnV0dG9uLXByZXY6YWN0aXZlLCAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cblxuICAuc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyOjphZnRlciwgLnN3aXBlci1idXR0b24tbmV4dDpob3Zlcjo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KTtcbiAgICB9XG5cbn1cblxuLnN3aXBlci1idXR0b24tcHJldjpmb2N1cywgLnN3aXBlci1idXR0b24tbmV4dDpmb2N1cywgLnNsaWRlci1pbWcgYTpmb2N1cywgLnNsaWRlci1pbWcgYTphY3RpdmUsIC5zbGlkZXItaW1nIGEge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnN3aXBlci1idXR0b24tcHJldjo6YWZ0ZXIsIC5zd2lwZXItYnV0dG9uLW5leHQ6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjgsMS4zKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgIC5zd2lwZXItYnV0dG9uLXByZXY6YWN0aXZlOjphZnRlciwgLnN3aXBlci1idXR0b24tbmV4dDphY3RpdmU6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAjZjFiNWQxO1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgXG59XG5cbi5zbGlkZXItaW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5zbGlkZXItaW1nIGltZyB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAvKiBib3JkZXI6IDhweCBzb2xpZCB3aGl0ZTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAyMzBtcyBhbGwgZWFzZTtcbn1cblxuXG5cbi5saWdodGJveC1zaG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG59XG5cbi5nYWxlcmlhIC5zd2lwZXItd3JhcHBlciB7XG4gIGhlaWdodDogMzEwcHg7XG59XG5cbi5nYWxlcmlhIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuXG4ubWZwLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDI7XG4gIFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDoyMCU7XG4gIGxlZnQ6MTBweDtcbiAgd2lkdGg6IDEwdncgIWltcG9ydGFudDtcbn1cblxuLmxpbmhhMyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBcbn1cblxuLmxpbmhhMyBidXR0b24ge1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcbi5zbGlkZXItaW1nIGltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAuc2xpZGVyLWltZyBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICB9XG59XG4gIFxuLyogTUFJTiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTElOSEEgNCAtLS0tLS0tLS0tLSAqL1xuXG5Aa2V5ZnJhbWVzIGluZmluaXRlLXNwaW5uaW5nIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgfVxuICAgICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICAgICAgfVxuICAgICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcbiAgICAgIH1cbiAgICAgIFxuICB9XG5cbiAgLmRlcG9pbSBoMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICB9XG5cbiAgLmhvbWUtdGl0dWxvIGkge1xuICAgIGFuaW1hdGlvbjogaW5maW5pdGUtc3Bpbm5pbmcgMS41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xN3B4O1xuICAgIGxlZnQ6IC0zNHB4O1xuICB9XG4gIFxuXG4uZGVwb2ltZW50b3Mge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5kZXBvaW1lbnRvcyAuc2xpZGVyLWRlcCB7XG4gICAgcGFkZGluZzogMi4zcmVtIDEwJTtcbn1cblxuLmRlcG9pbWVudG9zIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kZXBvaW1lbnRvcyBwIHtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICM3NTY1NjU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVwb2ltZW50b3MgaDYge1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogI2IwYTBhMDtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAuZGVwb2ltZW50b3MgLnNsaWRlci1kZXAge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmRlcG9pbWVudG9zIHAge1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgIH1cbiAgICAuZGVwb2ltZW50b3MgaDYge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5nYWxlcmlhIC5zd2lwZXItYnV0dG9uLXByZXYsIC5nYWxlcmlhIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgXG4gICAgLmRlcG9pbWVudG9zIC5zd2lwZXItYnV0dG9uLXByZXYsIC5kZXBvaW1lbnRvcyAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxufVxuXG4ubGluaGE0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkgeyBcbi5saW5oYTEgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMDcpO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gICAgXG59XG5cbiAgLmxpbmhhMXBhaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5ob21lLXRpdHVsbyB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfSBcbiAgLmhvbWUtdGl0dWxvOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH0gXG5cbiAgLmxpbmhhMywgLmxpbmhhMyAuYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5saW5oYTMgLmJ0bi1wYWRyYW8ge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/parallax.directive.ts":
/*!***************************************!*\
  !*** ./src/app/parallax.directive.ts ***!
  \***************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ParallaxDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.parallaxRatio = 1;
        this.initialTop = 0;
        this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    }
    onWindowScroll(event) {
        this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
        this.eleRef.nativeElement.style.opacity = (((window.scrollY / 200) - 2.3) * -1);
    }
}
ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ParallaxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ParallaxDirective, selectors: [["", "appParallax", ""]], hostBindings: function ParallaxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ParallaxDirective_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { parallaxRatio: ["ratio", "parallaxRatio"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParallaxDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appParallax]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { parallaxRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ratio']
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/up-btn/up-btn.component.ts":
/*!********************************************!*\
  !*** ./src/app/up-btn/up-btn.component.ts ***!
  \********************************************/
/*! exports provided: UpBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpBtnComponent", function() { return UpBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UpBtnComponent {
    constructor(eleRef) {
        this.eleRef = eleRef;
        if (window.scrollY > 60) {
            this.eleRef.nativeElement.style.display = 'block';
        }
        else {
            this.eleRef.nativeElement.style.display = 'none';
        }
    }
    ngOnInit() {
    }
    scroll() {
        window.scrollTo(0, 0);
    }
    ;
    onWindowScroll(event) {
        if (window.scrollY > 60) {
            this.eleRef.nativeElement.style.display = 'block';
        }
        else {
            this.eleRef.nativeElement.style.display = 'none';
        }
    }
}
UpBtnComponent.ɵfac = function UpBtnComponent_Factory(t) { return new (t || UpBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
UpBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpBtnComponent, selectors: [["app-up-btn"]], hostBindings: function UpBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function UpBtnComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 0, consts: [[3, "click"], [1, "botao-pracima"], [1, "fas", "fa-angle-double-up"]], template: function UpBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpBtnComponent_Template_a_click_0_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".botao-pracima[_ngcontent-%COMP%] {\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    bottom: 100px;\n    right: 30px;\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 25px;\n    background-color: #fcfcfc;\n    box-shadow: 2px 2px 5px rgba(0,0,0,0.15);\n    transition: all 300ms ease;\n    z-index: 2;\n    cursor: hand;\n    cursor: pointer; \n}\n\n.botao-pracima[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    line-height: 50px;\n    font-size: 18px;\n    color: #d14d8b;\n    \n}\n\n@media (min-width: 641px) {\n.botao-pracima[_ngcontent-%COMP%]:hover {\n\n    background-color: #e291b7;\n    transition: all 300ms ease;\n}\n\n.botao-pracima[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    color: #fff;\n    text-shadow: 0 1px 3px rgba(0,0,0,0.3);\n    transition: all 300ms ease;\n}\n}\n\n@media (max-width: 640px) {\n    .botao-pracima[_ngcontent-%COMP%] {\n        bottom: 75px;\n        right: 25px;\n        width: 40px;\n        height: 40px;\n        border-radius: 20px;\n        box-shadow: 1px 1px 4px rgba(0,0,0,0.1);\n    }\n    .botao-pracima[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    line-height: 50px;\n    font-size: 16px;\n    color: #d14d8b;\n    transition: all 300ms ease;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXAtYnRuL3VwLWJ0bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7O0FBRWxCOztBQUVBO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsMEJBQTBCO0FBQzlCO0FBQ0E7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUNBQXVDO0lBQzNDO0lBQ0E7SUFDQSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3VwLWJ0bi91cC1idG4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3Rhby1wcmFjaW1hIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gICAgei1pbmRleDogMjtcbiAgICBjdXJzb3I6IGhhbmQ7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cblxuLmJvdGFvLXByYWNpbWEgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIHtcbi5ib3Rhby1wcmFjaW1hOmhvdmVyIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjkxYjc7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG59XG5cbi5ib3Rhby1wcmFjaW1hOmhvdmVyIGkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAuYm90YW8tcHJhY2ltYSB7XG4gICAgICAgIGJvdHRvbTogNzVweDtcbiAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB9XG4gICAgLmJvdGFvLXByYWNpbWEgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-up-btn',
                templateUrl: './up-btn.component.html',
                styleUrls: ['./up-btn.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/whatsapp-btn/whatsapp-btn.component.ts":
/*!********************************************************!*\
  !*** ./src/app/whatsapp-btn/whatsapp-btn.component.ts ***!
  \********************************************************/
/*! exports provided: WhatsappBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappBtnComponent", function() { return WhatsappBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WhatsappBtnComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhatsappBtnComponent.ɵfac = function WhatsappBtnComponent_Factory(t) { return new (t || WhatsappBtnComponent)(); };
WhatsappBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhatsappBtnComponent, selectors: [["app-whatsapp-btn"]], decls: 3, vars: 0, consts: [["href", "https://wa.me/5511985318106", "target", "_blank"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Tire suas d\u00FAvidas conosco agora mesmo!", 1, "botao-whatsapp"], [1, "fab", "fa-whatsapp"]], template: function WhatsappBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".botao-whatsapp[_ngcontent-%COMP%] {\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    bottom: 23px;\n    right: 25px;\n    width: 60px;\n    height: 60px;\n    border: none;\n    border-radius: 30px;\n    background-color: #fcfcfc;\n    box-shadow: 2px 2px 5px rgba(0,0,0,0.17);\n    z-index: 2;\n    transition: all 300ms ease;\n    transition-delay: 70ms;\n}\n\n.botao-whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    line-height: 60px;\n    font-size: 28px;\n    color: #d14d8b;\n    transition: all 300ms ease;\n}\n\n@media (min-width: 641px) {\n\n.botao-whatsapp[_ngcontent-%COMP%]:hover {\n    transform:translate(0px,0px) scale(1.10,1.10);\n    background-color: #e291b7;\n}\n\n.botao-whatsapp[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    color: #fff;\n    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);\n}\n}\n\n@media (max-width: 640px) {\n    .botao-whatsapp[_ngcontent-%COMP%] {\n        bottom: 15px;\n        right: 20px;\n        width: 50px;\n        height: 50px;\n        border-radius: 25px;\n        box-shadow: 1px 1px 5px rgba(0,0,0,0.1);\n    }\n    .botao-whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    line-height: 50px;\n    font-size: 24px;\n    color: #d14d8b;\n    transition: all 300ms ease;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdHNhcHAtYnRuL3doYXRzYXBwLWJ0bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0NBQXdDO0lBQ3hDLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7QUFDNUM7QUFDQTs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1Q0FBdUM7SUFDM0M7SUFDQTtJQUNBLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLDBCQUEwQjtBQUM5QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvd2hhdHNhcHAtYnRuL3doYXRzYXBwLWJ0bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdGFvLXdoYXRzYXBwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IDIzcHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLDAsMCwwLjE3KTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDcwbXM7XG59XG5cbi5ib3Rhby13aGF0c2FwcCBpIHtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICNkMTRkOGI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkge1xuXG4uYm90YW8td2hhdHNhcHA6aG92ZXIge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LDBweCkgc2NhbGUoMS4xMCwxLjEwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI5MWI3O1xufVxuXG4uYm90YW8td2hhdHNhcHA6aG92ZXIgaSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4zKTtcbn1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLmJvdGFvLXdoYXRzYXBwIHtcbiAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIH1cbiAgICAuYm90YW8td2hhdHNhcHAgaSB7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatsappBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-whatsapp-btn',
                templateUrl: './whatsapp-btn.component.html',
                styleUrls: ['./whatsapp-btn.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Vishal\Vishal\Data\GitHub\TheHealthyBite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map