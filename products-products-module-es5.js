function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./src/app/products/bolos/bolos.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/products/bolos/bolos.component.ts ***!
    \***************************************************/

  /*! exports provided: BolosComponent */

  /***/
  function srcAppProductsBolosBolosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BolosComponent", function () {
      return BolosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BolosComponent = /*#__PURE__*/function () {
      function BolosComponent(myJumbo) {
        _classCallCheck(this, BolosComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(BolosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //setTimeout(() => {
          this.myJumbo.mudarCateg("Bolos"); //});
        }
      }]);

      return BolosComponent;
    }();

    BolosComponent.ɵfac = function BolosComponent_Factory(t) {
      return new (t || BolosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    BolosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BolosComponent,
      selectors: [["app-bolos"]],
      decls: 12,
      vars: 0,
      consts: [["id", "myTabContent", 1, "tab-content", "pt-2"], [1, "row"], ["id", "menu-lateral"], ["id", "v-pills-tab1", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-pasta-tab", "routerLink", "pasta", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-naked-tab", "routerLink", "naked", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-confeitados-tab", "routerLink", "confeitados", "routerLinkActive", "active", 1, "nav-link"], ["id", "produtos-cnt"]],
      template: function BolosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Pasta Americana ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Naked Cake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Confeitados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["#menu-lateral[_ngcontent-%COMP%] {\n    -webkit-animation: tab-entrar2 1s ease both;\n            animation: tab-entrar2 1s ease both;\n}\n\n@-webkit-keyframes tab-entrar2 {\n    0% {\n      opacity: 0.4;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n@keyframes tab-entrar2 {\n    0% {\n      opacity: 0.4;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n@media (min-width: 641px) { \n#menu-lateral[_ngcontent-%COMP%] {\n    -webkit-animation: tab-entrar .23s ease both;\n            animation: tab-entrar .23s ease both;\n}\n\n    @-webkit-keyframes tab-entrar {\n    0% {\n      opacity: 0.5;\n      transform: translateX(2px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes tab-entrar {\n    0% {\n      opacity: 0.5;\n      transform: translateX(2px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n#menu-lateral[_ngcontent-%COMP%] {\n    padding-left: 4%;\n    padding-right: 0;\n    padding-top: 2.5rem;\n    width: calc(23% - 14px);\n    margin-left: 14px;\n    margin-right: -2px;\n    transition: all 150ms ease;\n\n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 120px;\n    margin-bottom: 3rem;\n    transition: all 150ms ease;\n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 700;\n    font-size: 26px;\n    border: 2px solid transparent;\n    color: #e0bfce;\n    text-align: left;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-right: 0px;\n    padding-left: 30px;\n    outline: none;\n    transition: all 150ms ease;\n    \n}\n\n\n\n@media (min-width: 641px) { \n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    color: #d14d8b;\n    border-color: #e0bfce80;\n    border-right-color: white;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    z-index: 2;\n    padding-left: 40px;\n    transition: all 230ms ease;\n    \n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    \n}\n\n#produtos-cnt[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n    padding-top: 0;\n    padding-bottom: 0rem;\n    margin-bottom: 2.0rem;\n    padding-left: 5%;\n    width: calc(75% - 14px);\n    margin-right: 14px;\n    min-height: 500px;\n    border-left: 2px solid #e0bfce80;\n    background-color: transparent;\n    \n}\n\n}\n\n@media (max-width: 640px) { \n    #menu-lateral[_ngcontent-%COMP%] {\n        padding-left: 4%;\n        padding-right: 4%;\n        padding-top: 0.7rem;\n        width: calc(100% - 28px);\n        margin-left: 14px;\n        margin-bottom: 0; \n         \n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n        display: flex !important;\n        flex-direction: row !important;\n        flex-wrap: nowrap !important;\n        justify-content: center;\n        width: 100%;\n        margin-bottom: 0;\n        padding-bottom: 1.0rem !important;\n        border-bottom: 4px dotted #e0bfce36; \n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        font-size: 18px;\n        padding: 5px 0;\n        flex-grow: 1;\n        text-align: center;\n        border: 1px solid #e0bfce70;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    background-color: #e0bfce25;\n    color: #d14d8b;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n        border-radius: 0;\n        border-left-width: 0;\n        border-right-width: 0;\n        border-top-width: 1px;\n        border-bottom-width: 1px;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-bottom: 2.0rem;\n    padding: 10px;\n    max-width: calc(80% -20px);\n        \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvYm9sb3MvYm9sb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtNQUNFLFlBQVk7O0lBRWQ7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztBQVJGO0lBQ0k7TUFDRSxZQUFZOztJQUVkO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFHRjtBQUNBO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztBQUN4Qzs7SUFFSTtJQUNBO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjs7SUFFNUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjs7SUFFNUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1REFBdUQ7QUFDM0Q7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQzs7QUFJRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCOzs7O3NEQUlrRDtBQUN0RDs7QUFFQTtJQUNJLGNBQWM7SUFDZDtpREFDNkM7QUFDakQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyw2QkFBNkI7O0FBRWpDOztBQUVBOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixpQ0FBaUM7UUFDakMsbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLDJCQUEyQjtJQUMvQjs7SUFFQTtJQUNBLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Q7O0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qiw0QkFBNEI7SUFDaEM7O0lBRUE7SUFDQSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwwQkFBMEI7O0lBRTFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9ib2xvcy9ib2xvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnUtbGF0ZXJhbCB7XG4gICAgYW5pbWF0aW9uOiB0YWItZW50cmFyMiAxcyBlYXNlIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgdGFiLWVudHJhcjIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7IFxuI21lbnUtbGF0ZXJhbCB7XG4gICAgYW5pbWF0aW9uOiB0YWItZW50cmFyIC4yM3MgZWFzZSBib3RoO1xufVxuXG4gICAgQGtleWZyYW1lcyB0YWItZW50cmFyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG4gIH1cbn1cblxuXG4jbWVudS1sYXRlcmFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgICB3aWR0aDogY2FsYygyMyUgLSAxNHB4KTtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG5cbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluayB7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZTBiZmNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTVweCAzcHggcmdiYSgyMywwLDEwLC4wMik7ICovXG59XG4vKlxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7IFxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgfVxuXG4gICAgI21lbnUtbGF0ZXJhbCAubmF2IGE6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxufVxuKi9cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluay5hY3RpdmUsICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGJvcmRlci1jb2xvcjogI2UwYmZjZTgwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIzMG1zIGVhc2U7XG4gICAgLyogXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyOTFiNztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCA0cHggM3B4IHJnYmEoMjMsMCwxMCwuMDcpOyAqL1xufVxuXG4jbWVudS1sYXRlcmFsIC5uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICAvKiBib3JkZXItY29sb3I6ICNlMjkxYjc7XG4gICAgIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTVweCA1cHggI2UyOTFiNzQ4OyAqL1xufVxuXG4jcHJvZHV0b3MtY250IHtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi4wcmVtO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgd2lkdGg6IGNhbGMoNzUlIC0gMTRweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2UwYmZjZTgwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIFxufVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAjbWVudS1sYXRlcmFsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjdyZW07XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IFxuICAgICAgICAgXG4gICAgfVxuXG4gICAgI21lbnUtbGF0ZXJhbCAubmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuMHJlbSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggZG90dGVkICNlMGJmY2UzNjsgXG4gICAgfVxuXG4gICAgI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBiZmNlNzA7XG4gICAgfVxuXG4gICAgI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluay5hY3RpdmUsICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBiZmNlMjU7XG4gICAgY29sb3I6ICNkMTRkOGI7XG4gICAgfVxuXG4gICAgI21lbnUtbGF0ZXJhbCAubmF2IGE6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjByZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoODAlIC0yMHB4KTtcbiAgICAgICAgXG4gICAgfVxufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BolosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bolos',
          templateUrl: './bolos.component.html',
          styleUrls: ['./bolos.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/bolos/confeitados/confeitados.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/products/bolos/confeitados/confeitados.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ConfeitadosComponent */

  /***/
  function srcAppProductsBolosConfeitadosConfeitadosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfeitadosComponent", function () {
      return ConfeitadosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var ConfeitadosComponent = /*#__PURE__*/function () {
      function ConfeitadosComponent(myJumbo) {
        _classCallCheck(this, ConfeitadosComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(ConfeitadosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //setTimeout(() => {
          this.myJumbo.mudarSubCateg("Confeitados"); //});
        }
      }]);

      return ConfeitadosComponent;
    }();

    ConfeitadosComponent.ɵfac = function ConfeitadosComponent_Factory(t) {
      return new (t || ConfeitadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    ConfeitadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfeitadosComponent,
      selectors: [["app-confeitados"]],
      decls: 157,
      vars: 0,
      consts: [["id", "confeitados"], [1, "titulo"], [1, "sabores-cnt"], [1, "col1"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "col2"], [1, "notas"], [1, "texto"]],
      template: function ConfeitadosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brigadeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R$ 32,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Massa de chocolate, creme de brigadeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brigadeiro Belga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "R$ 65,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Massa de chocolate, brigadeiro de chocolate belga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Brigadeiro com Morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "R$ 45,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Massa de chocolate, brigadeiro e morangos frescos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mousse de Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "R$ 32,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Massa de chocolate, mousse de chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Chocolate Amargo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "R$ 40,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Massa de chocolate, ganache de chocolate 70%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nozes com Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "R$ 50,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Massa de chocolate, nozes picadas e ganache");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Floresta Negra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "R$ 38,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Massa de chocolate, chantilly, chocolate e cerejas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sensa\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "R$ 32,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Massa de chocolate, mousse de morango e choc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Mousse de Maracuj\xE1 c/ Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "R$ 32,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Massa de chocolate, mousse de maracuj\xE1 e choc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sonho de Valsa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "R$ 40,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Massa branca, creme de choc. c/ sonho de valsa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Pessego");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "R$ 38,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Massa branca, mousse de pessego com peda\xE7os da fruta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Abacaxi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "R$ 38,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Massa branca, mousse de abacaxi com peda\xE7os da fruta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Mousse de Ninho c/ Abacaxi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "R$ 40,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Massa branca, mousse de Ninho com peda\xE7os de abacaxi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Mousse de Ninho c/ Morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "R$ 40,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Massa branca, mousse de Ninho com peda\xE7os de morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Prest\xEDgio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "R$ 36,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Massa de chocolate, brigadeiro de coco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Beijinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "R$ 36,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Massa branca, brigadeiro de coco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Doce de Leite c/ Coco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "R$ 36,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Massa branca, doce de leite com coco ralado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Doce de Leite c/ Ameixa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Massa branca, doce de leite com ameixas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Nozes com Doce de Leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "R$ 50,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Massa de nozes, doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Damasco com Doce de Leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Massa branca, doce de leite com gel\xE9ia de damasco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Pre\xE7o base por Kg ( aprox. 10 fatias )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Bolos cobertos com Chantilly ou Glac\xEA, confeitados, espatulados ou ondulados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Desenvolvemos as mais variadas decora\xE7\xF5es com flores ou acabamentos como: bolo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Kitkat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ", papel de arroz personalizado e topos de bolo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#confeitados[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#confeitados[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: -10px;\n        margin-bottom: 0px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvYm9sb3MvY29uZmVpdGFkb3MvY29uZmVpdGFkb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFJRjtBQUNBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztJQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7SUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0lBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztJQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZ0JBQWdCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0lBRUE7RUFDRSxXQUFXO0FBQ2I7O0lBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7SUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7SUFJQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztJQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztJQUlBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2JvbG9zL2NvbmZlaXRhZG9zL2NvbmZlaXRhZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29uZmVpdGFkb3Mge1xuICAgIGFuaW1hdGlvbjogc2xpZGUtZW50cmFyMiAuN3MgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjA1cztcbn1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGUtZW50cmFyMiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gIH1cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcbiNjb25mZWl0YWRvcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfeitadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confeitados',
          templateUrl: './confeitados.component.html',
          styleUrls: ['./confeitados.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/bolos/naked/naked.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/products/bolos/naked/naked.component.ts ***!
    \*********************************************************/

  /*! exports provided: NakedComponent */

  /***/
  function srcAppProductsBolosNakedNakedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NakedComponent", function () {
      return NakedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var NakedComponent = /*#__PURE__*/function () {
      function NakedComponent(myJumbo) {
        _classCallCheck(this, NakedComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(NakedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //setTimeout(() => {
          this.myJumbo.mudarSubCateg("Naked"); //});
        }
      }]);

      return NakedComponent;
    }();

    NakedComponent.ɵfac = function NakedComponent_Factory(t) {
      return new (t || NakedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    NakedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NakedComponent,
      selectors: [["app-naked"]],
      decls: 56,
      vars: 0,
      consts: [["id", "naked"], [1, "titulo"], [1, "sabores-cnt"], [1, "col1"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "col2"], [1, "notas"], [1, "texto"]],
      template: function NakedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bem Casado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Massa de baunilha, creme de doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Chocolate com Morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Massa de chocolate, brigadeiro com morangos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Red Velvet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Massa Red Velvet, creme de cheesecake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Oreo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Massa de chocolate, creme de cookies com Oreo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ninho com Nutella");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R$ 80,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Massa de chocolate, brigadeiro de Ninho e Nutella");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ferrero Rocher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "R$ 80,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Massa de chocolate, creme de avel\xE3 e Ferrero Rocher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pre\xE7o base por Kg ( aprox. 10 fatias )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Tamb\xE9m conhecido como bolo r\xFAstico ou bolo pelado, o Naked Cake possui recheio aparente e pode contar com frutas e flores para deix\xE1-lo ainda mais bonito e gracioso.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Desenvolvemos decora\xE7\xF5es com flores de a\xE7\xFAcar ou naturais ou deliciosas frutas frescas (sujeito a sazonalidade).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#naked[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#naked[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: -10px;\n        margin-bottom: 0px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvYm9sb3MvbmFrZWQvbmFrZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFJRjtBQUNBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztJQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7SUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0lBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztJQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZ0JBQWdCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0lBRUE7RUFDRSxXQUFXO0FBQ2I7O0lBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7SUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7SUFJQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztJQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztJQUlBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2JvbG9zL25ha2VkL25ha2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmFrZWQge1xuICAgIGFuaW1hdGlvbjogc2xpZGUtZW50cmFyMiAuN3MgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjA1cztcbn1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGUtZW50cmFyMiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gIH1cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcbiNuYWtlZCB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NakedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-naked',
          templateUrl: './naked.component.html',
          styleUrls: ['./naked.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/bolos/pasta/pasta.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/products/bolos/pasta/pasta.component.ts ***!
    \*********************************************************/

  /*! exports provided: PastaComponent */

  /***/
  function srcAppProductsBolosPastaPastaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PastaComponent", function () {
      return PastaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var PastaComponent = /*#__PURE__*/function () {
      function PastaComponent(myJumbo) {
        _classCallCheck(this, PastaComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(PastaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //setTimeout(() => {
          this.myJumbo.mudarSubCateg("Pasta Americana"); //});
        }
      }]);

      return PastaComponent;
    }();

    PastaComponent.ɵfac = function PastaComponent_Factory(t) {
      return new (t || PastaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    PastaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PastaComponent,
      selectors: [["app-pasta"]],
      decls: 104,
      vars: 0,
      consts: [["id", "pasta"], [1, "titulo"], [1, "sabores-cnt"], [1, "col1"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "col2"], [1, "notas"], [1, "texto"]],
      template: function PastaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brigadeiro Belga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R$ 10,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Massa de chocolate, brigadeiro de chocolate belga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Noir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "R$ 9,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Massa de chocolate e creme de cacau belga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gianduia com nozes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "R$ 9,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Massa de nozes, creme branco e trufa gianduia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Prest\xEDgio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "R$ 8,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Massa de chocolate, creme de coco fresco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Beijinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "R$ 8,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Massa branca, creme de beijinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Damasco com doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "R$ 9,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Massa branca, doce de leite e gel\xE9ia de damasco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Nozes com doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "R$ 9,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Massa de nozes, doce de leite e baba de mo\xE7a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Bem casado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "R$ 8,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Massa branca com doce de leite queimado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ameixa com doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "R$ 9,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Massa branca, creme branco e doce de leite com ameixa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Nozes com chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "R$ 9,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Massa de chocolate, doce de leite, nozes e ganache belga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Brigadeiro de Ninho com Morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "R$ 9,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Massa branca, brigadeiro de Ninho e gel\xE9ia de morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Brigadeiro de Ninho com Abacaxi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "R$ 9,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Massa branca, brigadeiro de Ninho e doce de abacaxi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Pre\xE7o base por Fatia ( peso aprox.: 100g )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Seja festa infantil, bodas, batizado, ch\xE1 de beb\xEA ou outra ocasi\xE3o, encante seus convidados com nossa arte feita em pasta de a\xE7\xFAcar: a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Pasta Americana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Desenvolvemos decora\xE7\xF5es com flores de a\xE7\xFAcar ou naturais, personagens e outros objetos modelados com Pasta Americana, al\xE9m de andares ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "fake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " para complementar seu bolo de andar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#pasta[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#pasta[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: -10px;\n        margin-bottom: 0px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvYm9sb3MvcGFzdGEvcGFzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFJRjtBQUNBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztJQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7SUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0lBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztJQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZ0JBQWdCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0lBRUE7RUFDRSxXQUFXO0FBQ2I7O0lBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7SUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7SUFJQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztJQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztJQUlBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2JvbG9zL3Bhc3RhL3Bhc3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFzdGEge1xuICAgIGFuaW1hdGlvbjogc2xpZGUtZW50cmFyMiAuN3MgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjA1cztcbn1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGUtZW50cmFyMiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gIH1cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcbiNwYXN0YSB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PastaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pasta',
          templateUrl: './pasta.component.html',
          styleUrls: ['./pasta.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/doces/bemcasados/bemcasados.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/products/doces/bemcasados/bemcasados.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BemcasadosComponent */

  /***/
  function srcAppProductsDocesBemcasadosBemcasadosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BemcasadosComponent", function () {
      return BemcasadosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var BemcasadosComponent = /*#__PURE__*/function () {
      function BemcasadosComponent(myJumbo) {
        _classCallCheck(this, BemcasadosComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(BemcasadosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarSubCateg("Bem Casados");
        }
      }]);

      return BemcasadosComponent;
    }();

    BemcasadosComponent.ɵfac = function BemcasadosComponent_Factory(t) {
      return new (t || BemcasadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    BemcasadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BemcasadosComponent,
      selectors: [["app-bemcasados"]],
      decls: 19,
      vars: 0,
      consts: [["id", "casados"], [1, "titulo"], [1, "sabores-cnt"], [1, "col2"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "notas"], [1, "texto"]],
      template: function BemcasadosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tradicional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R$ 2,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Massa branca com doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pre\xE7o Unit\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Embalagens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Os Bem Casados s\xE3o enviados em embalagem tradicional.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#casados[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#casados[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: -10px;\n        margin-bottom: 0px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jZXMvYmVtY2FzYWRvcy9iZW1jYXNhZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0lBRUk7SUFDQTtNQUNFLFVBQVU7TUFDViwyQkFBMkI7O0lBRTdCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMEJBQTBCO0lBQzVCO0VBQ0Y7O0lBVkU7SUFDQTtNQUNFLFVBQVU7TUFDViwyQkFBMkI7O0lBRTdCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMEJBQTBCO0lBQzVCO0VBQ0Y7O0lBSUY7QUFDQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0lBRUk7SUFDQTtNQUNFLFVBQVU7TUFDViw0QkFBNEI7O0lBRTlCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMEJBQTBCO0lBQzVCO0VBQ0Y7O0lBVkU7SUFDQTtNQUNFLFVBQVU7TUFDViw0QkFBNEI7O0lBRTlCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMEJBQTBCO0lBQzVCO0VBQ0Y7QUFDRjs7SUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7SUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0lBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztJQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7O0FBRXJCOztJQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0lBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztJQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2Qzs7SUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztJQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGdCQUFnQjtHQUNqQixrQkFBa0I7QUFDckI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztJQUVBO0VBQ0UsV0FBVztBQUNiOztJQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQ0FBa0M7QUFDdEM7O0lBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7O0lBSUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVDQUF1QztBQUMzQzs7SUFHQTtJQUNJLHlCQUF5QjtBQUM3Qjs7SUFJQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksUUFBUTtRQUNSLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZ0JBQWdCO0FBQ3hCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9kb2Nlcy9iZW1jYXNhZG9zL2JlbWNhc2Fkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXNhZG9zIHtcbiAgICBhbmltYXRpb246IHNsaWRlLWVudHJhcjIgLjdzIGVhc2UgYm90aDtcbiAgICBhbmltYXRpb24tZGVsYXk6IC4wNXM7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhcjIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgfVxuICB9XG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIHsgXG4jY2FzYWRvcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BemcasadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bemcasados',
          templateUrl: './bemcasados.component.html',
          styleUrls: ['./bemcasados.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/doces/cupcakes/cupcakes.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/products/doces/cupcakes/cupcakes.component.ts ***!
    \***************************************************************/

  /*! exports provided: CupcakesComponent */

  /***/
  function srcAppProductsDocesCupcakesCupcakesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CupcakesComponent", function () {
      return CupcakesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var CupcakesComponent = /*#__PURE__*/function () {
      function CupcakesComponent(myJumbo) {
        _classCallCheck(this, CupcakesComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(CupcakesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarSubCateg("Cupcakes");
        }
      }]);

      return CupcakesComponent;
    }();

    CupcakesComponent.ɵfac = function CupcakesComponent_Factory(t) {
      return new (t || CupcakesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    CupcakesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CupcakesComponent,
      selectors: [["app-cupcakes"]],
      decls: 104,
      vars: 0,
      consts: [["id", "cupcakes"], [1, "titulo"], [1, "sabores-cnt"], [1, "col1"], [1, "titulo-sabores"], [1, "cor-dif"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "col2"], [1, "notas"], [1, "texto"], [1, "notas2"]],
      template: function CupcakesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tamanho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Mini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "R$ 2,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Massa de chocolate, mousse de chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "R$ 2,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Massa branca, mousse de morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Doce de Leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "R$ 2,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Massa branca, doce de leite e chantilly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Tamanho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Padr\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "R$ 4,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Massa de chocolate, mousse de chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "R$ 4,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Massa branca, mousse de morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Doce de Leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "R$ 4,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Massa branca, doce de leite e chantilly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pre\xE7o unit\xE1rio (Chantilly)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Os Cupcakes podem ser decorados com Pasta Americana conforme op\xE7\xF5es abaixo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Tamanho Mini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "a partir de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " R$ 3,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Tamanho Padr\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "a partir de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " R$ 6,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " 3D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Tamanho Mini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "a partir de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " R$ 5,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Tamanho Padr\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "a partir de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " R$ 8,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Pre\xE7o \"com decora\xE7\xE3o\", unit\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#cupcakes[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#cupcakes[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 23px;\n    margin-bottom: -3px;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: 0px;\n        margin-bottom: -23px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jZXMvY3VwY2FrZXMvY3VwY2FrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFJRjtBQUNBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztJQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7SUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0lBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztJQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZ0JBQWdCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0lBRUE7RUFDRSxXQUFXO0FBQ2I7O0lBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7SUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7SUFJQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztJQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztJQUlBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtJQUNBLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25COztJQUVBO1FBQ0ksUUFBUTtRQUNSLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtBQUN4QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvZG9jZXMvY3VwY2FrZXMvY3VwY2FrZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjdXBjYWtlcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIyIC43cyBlYXNlIGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuMDVzO1xufVxuXG4gICAgQGtleWZyYW1lcyBzbGlkZS1lbnRyYXIyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgfVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7IFxuI2N1cGNha2VzIHtcbiAgICBhbmltYXRpb246IHNsaWRlLWVudHJhciAuMjNzIGVhc2UgYm90aDtcbn1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGUtZW50cmFyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG4gIH1cbn1cblxuLnRpdHVsbyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIG1hcmdpbi10b3A6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG5cbi50aXR1bG86Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRpdHVsby1zYWJvcmVzIHtcbiAgICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03JTtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG5cbi5jb3ItZGlmIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2UyOTFiN2JkO1xufVxuXG4udGV4dG8ge1xuICAgIHRleHQtaW5kZW50OiA1cmVtO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi50ZXh0byBhLCAudGV4dG8gYTp2aXNpdGVkLCAudGV4dG8gYTpmb2N1cyB7XG4gICAgY29sb3I6ICNkMTRkOGI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG59XG5cbi50ZXh0byBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG4tcGFkcmFvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBwYWRkaW5nOiA4cHggODBweDtcbn1cblxuLmJ0bi1jbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoOTMlKTtcbn1cblxuLnNhYm9yZXMtcHJvZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwwLDAsLjE1KTtcbn1cblxuLnNhYm9yZXMtY250IGxpIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgY29sb3I6ICNkMTRkOGI7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIFxufVxuXG4uY29sMSBsaSwgLmNvbDEgLnNhYm9yZXMtcHJvZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2JTtcbn1cblxuLmNvbDIgbGkge1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG59XG5cbi5jb2wyIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnNhYm9yZXMtY250IGxpIC5wcmVjbyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBjb2xvcjogI2UyOTFiNztcbn1cbi5zYWJvcmVzLWNudCBsaSAucG9udG9zIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjZTI5MWI3Njk7XG59XG5cbi5zdWJ0aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogI2JkOTZhODtcbn1cblxuLm5vdGFzLCAubm90YXMyIHtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubm90YXMyIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuLnNhYm9yZXMtY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuLnNhYm9yZXMtY250ID4gKiB7XG4gIGZsZXg6IDEgNDglO1xufVxuXG4uY29sMSB7XG4gICAgZmxleDogMSAwIDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggZG90dGVkICNlMGJmY2U4MDtcbn1cblxuLmNvbDJ7XG4gICAgZmxleDogMSAwIDA7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuXG59XG5cblxuXG4uZ2FsZXJpYS1wcm9kIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDdweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cblxuLmJnYWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGMEY1O1xufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7IFxuICAgIC50aXR1bG8ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAudGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIH1cblxuICAgICNwcm9kdXRvcy1jbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IGgxOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIH1cblxuICAgIC5zYWJvcmVzLWNudCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnRpdHVsby1zYWJvcmVzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CupcakesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cupcakes',
          templateUrl: './cupcakes.component.html',
          styleUrls: ['./cupcakes.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/doces/doces.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/products/doces/doces.component.ts ***!
    \***************************************************/

  /*! exports provided: DocesComponent */

  /***/
  function srcAppProductsDocesDocesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocesComponent", function () {
      return DocesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DocesComponent = /*#__PURE__*/function () {
      function DocesComponent(myJumbo) {
        _classCallCheck(this, DocesComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(DocesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarCateg("Doces");
        }
      }]);

      return DocesComponent;
    }();

    DocesComponent.ɵfac = function DocesComponent_Factory(t) {
      return new (t || DocesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    DocesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocesComponent,
      selectors: [["app-doces"]],
      decls: 12,
      vars: 0,
      consts: [["id", "myTabContent", 1, "tab-content", "pt-2"], [1, "row"], ["id", "menu-lateral"], ["id", "v-pills-tab3", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-cupcakes-tab", "routerLink", "cupcakes", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-pirulitos-tab", "routerLink", "pirulitos", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-casados-tab", "routerLink", "bemcasados", "routerLinkActive", "active", 1, "nav-link"], ["id", "produtos-cnt"]],
      template: function DocesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cupcakes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pirulitos Decorados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Bem Casados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["#menu-lateral[_ngcontent-%COMP%] {\n    -webkit-animation: tab-entrar2 1s ease both;\n            animation: tab-entrar2 1s ease both;\n}\n\n@-webkit-keyframes tab-entrar2 {\n    0% {\n      opacity: 0.4;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n@keyframes tab-entrar2 {\n    0% {\n      opacity: 0.4;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n@media (min-width: 641px) { \n#menu-lateral[_ngcontent-%COMP%] {\n    -webkit-animation: tab-entrar .23s ease both;\n            animation: tab-entrar .23s ease both;\n}\n\n    @-webkit-keyframes tab-entrar {\n    0% {\n      opacity: 0.5;\n      transform: translateX(2px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes tab-entrar {\n    0% {\n      opacity: 0.5;\n      transform: translateX(2px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n#menu-lateral[_ngcontent-%COMP%] {\n    padding-left: 4%;\n    padding-right: 0;\n    padding-top: 2.5rem;\n    width: calc(23% - 14px);\n    margin-left: 14px;\n    margin-right: -2px;\n    transition: all 150ms ease;\n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 120px;\n    margin-bottom: 3rem;\n    transition: all 150ms ease;\n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 700;\n    font-size: 26px;\n    border: 2px solid transparent;\n    color: #e0bfce;\n    text-align: left;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-right: 0px;\n    padding-left: 30px;\n    outline: none;\n    transition: all 150ms ease;\n    \n}\n\n\n\n@media (min-width: 641px) { \n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    color: #d14d8b;\n    border-color: #e0bfce80;\n    border-right-color: white;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    z-index: 10;\n    padding-left: 40px;\n    transition: all 230ms ease;\n    \n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    \n}\n\n#produtos-cnt[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n    padding-top: 0;\n    padding-bottom: 0rem;\n    margin-bottom: 2.0rem;\n    padding-left: 5%;\n    width: calc(75% - 14px);\n    margin-right: 14px;\n    min-height: 500px;\n    border-left: 2px solid #e0bfce80;\n    background-color: transparent;\n    \n}\n\n}\n\n@media (max-width: 640px) { \n    #menu-lateral[_ngcontent-%COMP%] {\n        padding-left: 4%;\n        padding-right: 4%;\n        padding-top: 0.7rem;\n        width: calc(100% - 28px);\n        margin-left: 14px;\n        margin-bottom: 0; \n         \n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n        display: flex !important;\n        flex-direction: row !important;\n        flex-wrap: nowrap !important;\n        justify-content: center;\n        width: 100%;\n        margin-bottom: 0;\n        padding-bottom: 1.0rem !important;\n        border-bottom: 4px dotted #e0bfce36; \n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        font-size: 18px;\n        padding: 5px 0;\n        flex-grow: 1;\n        text-align: center;\n        border: 1px solid #e0bfce70;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    background-color: #e0bfce25;\n    color: #d14d8b;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n        border-radius: 0;\n        border-left-width: 0;\n        border-right-width: 0;\n        border-top-width: 1px;\n        border-bottom-width: 1px;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-bottom: 2.0rem;\n    padding: 10px;\n    max-width: calc(80% -20px);\n        \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jZXMvZG9jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtNQUNFLFlBQVk7O0lBRWQ7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztBQVJGO0lBQ0k7TUFDRSxZQUFZOztJQUVkO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFHRjtBQUNBO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztBQUN4Qzs7SUFFSTtJQUNBO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjs7SUFFNUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjs7SUFFNUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVEQUF1RDtBQUMzRDs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JDOztBQUlEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUI7Ozs7c0RBSWtEO0FBQ3REOztBQUVBO0lBQ0ksY0FBYztJQUNkO2lEQUM2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLDZCQUE2Qjs7QUFFakM7O0FBRUE7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixpQkFBaUI7UUFDakIsZ0JBQWdCOztJQUVwQjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGlDQUFpQztRQUNqQyxtQ0FBbUM7SUFDdkM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsMkJBQTJCO0lBQy9COztJQUVBO0lBQ0EsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZDs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLDRCQUE0QjtJQUNoQzs7SUFFQTtJQUNBLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDBCQUEwQjs7SUFFMUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2RvY2VzL2RvY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudS1sYXRlcmFsIHtcbiAgICBhbmltYXRpb246IHRhYi1lbnRyYXIyIDFzIGVhc2UgYm90aDtcbn1cblxuQGtleWZyYW1lcyB0YWItZW50cmFyMiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIHsgXG4jbWVudS1sYXRlcmFsIHtcbiAgICBhbmltYXRpb246IHRhYi1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHRhYi1lbnRyYXIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbiAgfVxufVxuXG5cbiNtZW51LWxhdGVyYWwge1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICAgIHdpZHRoOiBjYWxjKDIzJSAtIDE0cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluayB7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZTBiZmNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTVweCAzcHggcmdiYSgyMywwLDEwLC4wMik7ICovXG59XG4vKlxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7IFxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgfVxuXG4gICAgI21lbnUtbGF0ZXJhbCAubmF2IGE6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxufVxuKi9cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluay5hY3RpdmUsICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGJvcmRlci1jb2xvcjogI2UwYmZjZTgwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAyMzBtcyBlYXNlO1xuICAgIC8qIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjkxYjc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggNHB4IDNweCByZ2JhKDIzLDAsMTAsLjA3KTsgKi9cbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgLyogYm9yZGVyLWNvbG9yOiAjZTI5MWI3O1xuICAgICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC01cHggNXB4ICNlMjkxYjc0ODsgKi9cbn1cblxuI3Byb2R1dG9zLWNudCB7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHdpZHRoOiBjYWxjKDc1JSAtIDE0cHgpO1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlMGJmY2U4MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcbn1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHsgXG4gICAgI21lbnUtbGF0ZXJhbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjhweCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyBcbiAgICAgICAgIFxuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjByZW0gIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IGRvdHRlZCAjZTBiZmNlMzY7IFxuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwYmZjZTcwO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsuYWN0aXZlLCAjbWVudS1sYXRlcmFsIC5uYXYgLm5hdi1saW5rLmFjdGl2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYmZjZTI1O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAjbWVudS1sYXRlcmFsIC5uYXYgYTpudGgtY2hpbGQoMikge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICB9XG5cbiAgICAjbWVudS1sYXRlcmFsIC5uYXYgYTpudGgtY2hpbGQoMykge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgICNwcm9kdXRvcy1jbnQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi4wcmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDgwJSAtMjBweCk7XG4gICAgICAgIFxuICAgIH1cbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doces',
          templateUrl: './doces.component.html',
          styleUrls: ['./doces.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/doces/pirulitos/pirulitos.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/products/doces/pirulitos/pirulitos.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PirulitosComponent */

  /***/
  function srcAppProductsDocesPirulitosPirulitosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PirulitosComponent", function () {
      return PirulitosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var PirulitosComponent = /*#__PURE__*/function () {
      function PirulitosComponent(myJumbo) {
        _classCallCheck(this, PirulitosComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(PirulitosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarSubCateg("Pirulitos");
        }
      }]);

      return PirulitosComponent;
    }();

    PirulitosComponent.ɵfac = function PirulitosComponent_Factory(t) {
      return new (t || PirulitosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    PirulitosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PirulitosComponent,
      selectors: [["app-pirulitos"]],
      decls: 57,
      vars: 0,
      consts: [["id", "pirulitos"], [1, "titulo"], [1, "sabores-cnt"], [1, "col1"], [1, "titulo-sabores"], [1, "cor-dif"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "col2"], [1, "notas"], [1, "texto"], [1, "notas2"]],
      template: function PirulitosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pirulitos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Maci\xE7os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chocolate ao Leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "R$ 1,80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pirulito de puro chocolate ao leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pirulitos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Recheados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Doce de Leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "R$ 3,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cobertura de chocolate, 2 biscoitos e doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pre\xE7o \"sem decora\xE7\xE3o\", unit\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Os pirulitos podem ser decorados com Pasta Americana de um dos lados, conforme tabela de pre\xE7os abaixo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Decora\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Pirulito Maci\xE7o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "a partir de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " R$ 5,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pirulito Recheado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "a partir de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " R$ 6,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pre\xE7o \"com decora\xE7\xE3o\", unit\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#pirulitos[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#pirulitos[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 23px;\n    margin-bottom: -3px;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: 0px;\n        margin-bottom: -15px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n        margin-bottom: 0;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jZXMvcGlydWxpdG9zL3BpcnVsaXRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0Qyw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztJQUVJO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQTJCOztJQUU3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGOztJQVZFO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQTJCOztJQUU3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGOztJQUlGO0FBQ0E7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDOztJQUVJO0lBQ0E7TUFDRSxVQUFVO01BQ1YsNEJBQTRCOztJQUU5QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGOztJQVZFO0lBQ0E7TUFDRSxVQUFVO01BQ1YsNEJBQTRCOztJQUU5QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGO0FBQ0Y7O0lBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztJQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztJQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0lBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztJQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7SUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7SUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCOztBQUVyQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7O0lBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0lBRUE7SUFDSSxnQkFBZ0I7R0FDakIsa0JBQWtCO0FBQ3JCOztJQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7SUFFQTtFQUNFLFdBQVc7QUFDYjs7SUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDOztJQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7O0FBRW5COztJQUlBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1Q0FBdUM7QUFDM0M7O0lBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0lBSUE7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO0lBQ0EsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksUUFBUTtRQUNSLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtBQUN4QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvZG9jZXMvcGlydWxpdG9zL3BpcnVsaXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BpcnVsaXRvcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIyIC43cyBlYXNlIGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuMDVzO1xufVxuXG4gICAgQGtleWZyYW1lcyBzbGlkZS1lbnRyYXIyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgfVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7IFxuI3BpcnVsaXRvcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgICB9XG5cbiAgICAuY29sMSB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG5cbiAgICAuY29sMiB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLnNhYm9yZXMtY250IGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLnNhYm9yZXMtcHJvZCwgLnNhYm9yZXMtY250IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYlO1xuICAgIH1cblxuICAgIC5zdWJ0aXR1bG8ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIH1cblxuICAgIC5ub3RhcyB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLm5vdGFzMiB7XG4gICAgICAgIG9yZGVyOiAzO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgICB9XG5cbiAgICAuYnRuLXBhZHJhbyB7XG4gICAgICAgIHBhZGRpbmc6IDhweCA0MHB4O1xuICAgIH1cblxuICAgIC50ZXh0byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDNyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PirulitosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pirulitos',
          templateUrl: './pirulitos.component.html',
          styleUrls: ['./pirulitos.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/docinhos/docinhos.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/products/docinhos/docinhos.component.ts ***!
    \*********************************************************/

  /*! exports provided: DocinhosComponent */

  /***/
  function srcAppProductsDocinhosDocinhosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocinhosComponent", function () {
      return DocinhosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DocinhosComponent = /*#__PURE__*/function () {
      function DocinhosComponent(myJumbo) {
        _classCallCheck(this, DocinhosComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(DocinhosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarCateg("Docinhos");
        }
      }]);

      return DocinhosComponent;
    }();

    DocinhosComponent.ɵfac = function DocinhosComponent_Factory(t) {
      return new (t || DocinhosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    DocinhosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocinhosComponent,
      selectors: [["app-docinhos"]],
      decls: 12,
      vars: 0,
      consts: [["id", "myTabContent", 1, "tab-content", "pt-2"], [1, "row"], ["id", "menu-lateral"], ["id", "v-pills-tab2", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["id", "v-pills-finos-tab", "routerLink", "finos", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-infantil-tab", "routerLink", "infantis", "routerLinkActive", "active", 1, "nav-link"], ["id", "v-pills-tradicionais-tab", "routerLink", "tradicionais", "routerLinkActive", "active", 1, "nav-link"], ["id", "produtos-cnt"]],
      template: function DocinhosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Doces Finos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Infantis ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tradicionais ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["#menu-lateral[_ngcontent-%COMP%] {\n    -webkit-animation: tab-entrar2 1s ease both;\n            animation: tab-entrar2 1s ease both;\n}\n\n@-webkit-keyframes tab-entrar2 {\n    0% {\n      opacity: 0.4;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n@keyframes tab-entrar2 {\n    0% {\n      opacity: 0.4;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n@media (min-width: 641px) { \n#menu-lateral[_ngcontent-%COMP%] {\n    -webkit-animation: tab-entrar .23s ease both;\n            animation: tab-entrar .23s ease both;\n}\n\n    @-webkit-keyframes tab-entrar {\n    0% {\n      opacity: 0.5;\n      transform: translateX(2px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes tab-entrar {\n    0% {\n      opacity: 0.5;\n      transform: translateX(2px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n#menu-lateral[_ngcontent-%COMP%] {\n    padding-left: 4%;\n    padding-right: 0;\n    padding-top: 2.5rem;\n    width: calc(23% - 14px);\n    margin-left: 14px;\n    margin-right: -2px;\n    transition: all 150ms ease;\n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 120px;\n    margin-bottom: 3rem;\n    transition: all 150ms ease;\n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 700;\n    font-size: 26px;\n    border: 2px solid transparent;\n    color: #e0bfce;\n    text-align: left;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-right: 0px;\n    padding-left: 30px;\n    outline: none;\n    transition: all 150ms ease;\n    \n}\n\n\n\n@media (min-width: 641px) { \n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    color: #d14d8b;\n    border-color: #e0bfce80;\n    border-right-color: white;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    z-index: 10;\n    padding-left: 40px;\n    transition: all 230ms ease;\n    \n}\n\n#menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    \n}\n\n#produtos-cnt[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n    padding-top: 0;\n    padding-bottom: 0rem;\n    margin-bottom: 2.0rem;\n    padding-left: 5%;\n    width: calc(75% - 14px);\n    margin-right: 14px;\n    min-height: 500px;\n    border-left: 2px solid #e0bfce80;\n    background-color: transparent;\n    \n}\n\n}\n\n@media (max-width: 640px) { \n    #menu-lateral[_ngcontent-%COMP%] {\n        padding-left: 4%;\n        padding-right: 4%;\n        padding-top: 0.7rem;\n        width: calc(100% - 28px);\n        margin-left: 14px;\n        margin-bottom: 0; \n         \n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n        display: flex !important;\n        flex-direction: row !important;\n        flex-wrap: nowrap !important;\n        justify-content: center;\n        width: 100%;\n        margin-bottom: 0;\n        padding-bottom: 1.0rem !important;\n        border-bottom: 4px dotted #e0bfce36; \n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        font-size: 18px;\n        padding: 5px 0;\n        flex-grow: 1;\n        text-align: center;\n        border: 1px solid #e0bfce70;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    background-color: #e0bfce25;\n    color: #d14d8b;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n        border-radius: 0;\n        border-left-width: 0;\n        border-right-width: 0;\n        border-top-width: 1px;\n        border-bottom-width: 1px;\n    }\n\n    #menu-lateral[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-bottom: 2.0rem;\n    padding: 10px;\n    max-width: calc(80% -20px);\n        \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jaW5ob3MvZG9jaW5ob3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSTtNQUNFLFlBQVk7O0lBRWQ7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztBQVJGO0lBQ0k7TUFDRSxZQUFZOztJQUVkO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFHRjtBQUNBO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztBQUN4Qzs7SUFFSTtJQUNBO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjs7SUFFNUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjs7SUFFNUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVEQUF1RDtBQUMzRDs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JDOztBQUlEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUI7Ozs7c0RBSWtEO0FBQ3REOztBQUVBO0lBQ0ksY0FBYztJQUNkO2lEQUM2QztBQUNqRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLDZCQUE2Qjs7QUFFakM7O0FBRUE7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixpQkFBaUI7UUFDakIsZ0JBQWdCOztJQUVwQjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGlDQUFpQztRQUNqQyxtQ0FBbUM7SUFDdkM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsMkJBQTJCO0lBQy9COztJQUVBO0lBQ0EsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZDs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLDRCQUE0QjtJQUNoQzs7SUFFQTtJQUNBLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDBCQUEwQjs7SUFFMUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2RvY2luaG9zL2RvY2luaG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudS1sYXRlcmFsIHtcbiAgICBhbmltYXRpb246IHRhYi1lbnRyYXIyIDFzIGVhc2UgYm90aDtcbn1cblxuQGtleWZyYW1lcyB0YWItZW50cmFyMiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIHsgXG4jbWVudS1sYXRlcmFsIHtcbiAgICBhbmltYXRpb246IHRhYi1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHRhYi1lbnRyYXIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbiAgfVxufVxuXG5cbiNtZW51LWxhdGVyYWwge1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICAgIHdpZHRoOiBjYWxjKDIzJSAtIDE0cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluayB7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZTBiZmNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTVweCAzcHggcmdiYSgyMywwLDEwLC4wMik7ICovXG59XG4vKlxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7IFxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgfVxuXG4gICAgI21lbnUtbGF0ZXJhbCAubmF2IGE6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxufVxuKi9cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluay5hY3RpdmUsICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsuYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGJvcmRlci1jb2xvcjogI2UwYmZjZTgwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAyMzBtcyBlYXNlO1xuICAgIC8qIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjkxYjc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggNHB4IDNweCByZ2JhKDIzLDAsMTAsLjA3KTsgKi9cbn1cblxuI21lbnUtbGF0ZXJhbCAubmF2IC5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgLyogYm9yZGVyLWNvbG9yOiAjZTI5MWI3O1xuICAgICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC01cHggNXB4ICNlMjkxYjc0ODsgKi9cbn1cblxuI3Byb2R1dG9zLWNudCB7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHdpZHRoOiBjYWxjKDc1JSAtIDE0cHgpO1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlMGJmY2U4MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBcbn1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHsgXG4gICAgI21lbnUtbGF0ZXJhbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjhweCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyBcbiAgICAgICAgIFxuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjByZW0gIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IGRvdHRlZCAjZTBiZmNlMzY7IFxuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwYmZjZTcwO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiAubmF2LWxpbmsuYWN0aXZlLCAjbWVudS1sYXRlcmFsIC5uYXYgLm5hdi1saW5rLmFjdGl2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYmZjZTI1O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIH1cblxuICAgICNtZW51LWxhdGVyYWwgLm5hdiBhOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAjbWVudS1sYXRlcmFsIC5uYXYgYTpudGgtY2hpbGQoMikge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICB9XG5cbiAgICAjbWVudS1sYXRlcmFsIC5uYXYgYTpudGgtY2hpbGQoMykge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgICNwcm9kdXRvcy1jbnQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi4wcmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDgwJSAtMjBweCk7XG4gICAgICAgIFxuICAgIH1cbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocinhosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-docinhos',
          templateUrl: './docinhos.component.html',
          styleUrls: ['./docinhos.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/docinhos/finos/finos.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/products/docinhos/finos/finos.component.ts ***!
    \************************************************************/

  /*! exports provided: FinosComponent */

  /***/
  function srcAppProductsDocinhosFinosFinosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinosComponent", function () {
      return FinosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var FinosComponent = /*#__PURE__*/function () {
      function FinosComponent(myJumbo) {
        _classCallCheck(this, FinosComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(FinosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarSubCateg("Finos");
        }
      }]);

      return FinosComponent;
    }();

    FinosComponent.ɵfac = function FinosComponent_Factory(t) {
      return new (t || FinosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    FinosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinosComponent,
      selectors: [["app-finos"]],
      decls: 91,
      vars: 0,
      consts: [["id", "finos"], [1, "titulo"], [1, "sabores-cnt"], [1, "col1"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "col2"], [1, "notas"], [1, "texto"]],
      template: function FinosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Camafeu de Nozes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R$ 2,10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recheio de Nozes, cobertura de Fondant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Surpresa de Uva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "R$ 2,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Brigadeiro de ninho com uva fresca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bombom Noivinhos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "R$ 2,30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bombom de chocolate, recheio de Nutella");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Damasco Recheado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "R$ 3,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Damasco com brigadeiro de chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "H\xF3stia com Iniciais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "R$ 3,20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Brigadeiro branco com 2 h\xF3stias decoradas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Del\xEDcia de Morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "R$ 4,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Morango com brigadeiro de Ninho e chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Encanto de Physalis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "R$ 3,20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Caixa de chocolate c/ ganache branca e Physalis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cora\xE7\xE3o com Brigadeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "R$ 3,50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cora\xE7\xE3o e alian\xE7as de chocolate c/ brigadeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Caixinha Pralin\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "R$ 3,20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Caixa de chocolate recheada com Pralin\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Caixinha com Buquet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "R$ 6,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Chocolate branco com brigadeiro de coco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mini Bolo de Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "R$ 7,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Chocolate branco, p\xE3o de l\xF3 e doce de leite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Pre\xE7o Unit\xE1rio ( pedido m\xEDnimo por sabor: 25un. )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Surpreenda seus convidados com nossa sele\xE7\xE3o especial de doces finos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Embalagens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Os docinhos s\xE3o enviados em caixinhas brancas por padr\xE3o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#finos[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#finos[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: -10px;\n        margin-bottom: 0px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jaW5ob3MvZmlub3MvZmlub3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFJRjtBQUNBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztJQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7SUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0lBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztJQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZ0JBQWdCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0lBRUE7RUFDRSxXQUFXO0FBQ2I7O0lBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7SUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7SUFJQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztJQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztJQUlBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2RvY2luaG9zL2Zpbm9zL2Zpbm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlub3Mge1xuICAgIGFuaW1hdGlvbjogc2xpZGUtZW50cmFyMiAuN3MgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjA1cztcbn1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGUtZW50cmFyMiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gIH1cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcbiNmaW5vcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-finos',
          templateUrl: './finos.component.html',
          styleUrls: ['./finos.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/docinhos/infantis/infantis.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/products/docinhos/infantis/infantis.component.ts ***!
    \******************************************************************/

  /*! exports provided: InfantisComponent */

  /***/
  function srcAppProductsDocinhosInfantisInfantisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfantisComponent", function () {
      return InfantisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var InfantisComponent = /*#__PURE__*/function () {
      function InfantisComponent(myJumbo) {
        _classCallCheck(this, InfantisComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(InfantisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarSubCateg("Infantis");
        }
      }]);

      return InfantisComponent;
    }();

    InfantisComponent.ɵfac = function InfantisComponent_Factory(t) {
      return new (t || InfantisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    InfantisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfantisComponent,
      selectors: [["app-infantis"]],
      decls: 20,
      vars: 0,
      consts: [["id", "infantil"], [1, "titulo"], [1, "sabores-cnt"], [1, "col2"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "notas"], [1, "texto"]],
      template: function InfantisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pasta de Leite Ninho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R$ 3,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Docinhos modelados em pasta de leite Ninho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pre\xE7o Unit\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Docinhos personalizados conforme o tema desejado, ideais para festas infantis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Embalagens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Os docinhos s\xE3o enviados em caixinhas brancas por padr\xE3o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#infantil[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#infantil[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: -10px;\n        margin-bottom: 0px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jaW5ob3MvaW5mYW50aXMvaW5mYW50aXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjs7SUFFN0I7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFJRjtBQUNBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7SUFFSTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjs7SUFWRTtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUE0Qjs7SUFFOUI7SUFDQTtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztJQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7SUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7O0lBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjs7QUFFckI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztJQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0lBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZ0JBQWdCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0lBRUE7RUFDRSxXQUFXO0FBQ2I7O0lBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7SUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7SUFJQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztJQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztJQUlBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2RvY2luaG9zL2luZmFudGlzL2luZmFudGlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5mYW50aWwge1xuICAgIGFuaW1hdGlvbjogc2xpZGUtZW50cmFyMiAuN3MgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjA1cztcbn1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGUtZW50cmFyMiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICAgIFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gIH1cblxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDFweCkgeyBcbiNpbmZhbnRpbCB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfantisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-infantis',
          templateUrl: './infantis.component.html',
          styleUrls: ['./infantis.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/docinhos/tradicionais/tradicionais.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/products/docinhos/tradicionais/tradicionais.component.ts ***!
    \**************************************************************************/

  /*! exports provided: TradicionaisComponent */

  /***/
  function srcAppProductsDocinhosTradicionaisTradicionaisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TradicionaisComponent", function () {
      return TradicionaisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");

    var TradicionaisComponent = /*#__PURE__*/function () {
      function TradicionaisComponent(myJumbo) {
        _classCallCheck(this, TradicionaisComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(TradicionaisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myJumbo.mudarSubCateg("Tradicionais");
        }
      }]);

      return TradicionaisComponent;
    }();

    TradicionaisComponent.ɵfac = function TradicionaisComponent_Factory(t) {
      return new (t || TradicionaisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    TradicionaisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TradicionaisComponent,
      selectors: [["app-tradicionais"]],
      decls: 47,
      vars: 0,
      consts: [["id", "tradicionais"], [1, "titulo"], [1, "sabores-cnt"], [1, "col1"], [1, "pontos"], [1, "preco"], [1, "subtitulo"], [1, "col2"], [1, "notas"], [1, "texto"]],
      template: function TradicionaisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sabores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Brigadeiro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Brigadeiro de chocolate, diversas op\xE7\xF5es de confeitos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Beijinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Brigadeiro de coco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bicho de P\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Brigadeiro de morango");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Casadinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "R$ 60,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Brigadeiro branco e de chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Palha Italiana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R$ 70,00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Massa de chocolate, biscoitos de maisena");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Pre\xE7o do Cento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Embalagens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Os docinhos s\xE3o enviados em forminhas redondas por padr\xE3o, com diversas op\xE7\xF5es de cores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#tradicionais[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar2 .7s ease both;\n            animation: slide-entrar2 .7s ease both;\n    -webkit-animation-delay: .05s;\n            animation-delay: .05s;\n}\n\n    @-webkit-keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @keyframes slide-entrar2 {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n    @media (min-width: 641px) { \n#tradicionais[_ngcontent-%COMP%] {\n    -webkit-animation: slide-entrar .23s ease both;\n            animation: slide-entrar .23s ease both;\n}\n\n    @-webkit-keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n\n    @keyframes slide-entrar {\n    0% {\n      opacity: 0;\n      transform: translateX(-20px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0px);\n    }\n  }\n}\n\n    .titulo[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    margin-top: 34px;\n    line-height: 45px;\n    color: #e291b7;\n}\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 10px;\n}\n\n    .titulo-sabores[_ngcontent-%COMP%] {\n    font-family: 'Indie Flower', cursive;\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: -3px;\n    margin-bottom: 3px;\n    margin-left: -7%;\n    line-height: 24px;\n    text-align: center;\n    color: #e291b7;\n}\n\n    .cor-dif[_ngcontent-%COMP%] {\n    display: inline;\n    font-weight: 500;\n    color: #e291b7bd;\n}\n\n    .texto[_ngcontent-%COMP%] {\n    text-indent: 5rem;\n    font-size: 18px;\n    margin-right: 5%;\n    text-align: justify;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #d14d8b;\n    transition: all 200ms ease;\n}\n\n    .texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e291b7;\n    text-decoration: none;\n}\n\n    .btn-padrao[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 25px;\n    padding: 8px 80px;\n}\n\n    .btn-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: calc(93%);\n}\n\n    .sabores-prod[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n    box-sizing: border-box;\n    border: 4px solid white;\n    border-radius: 2px;\n    margin-left: -10px;\n    margin-top: 8px;\n    margin-bottom: 3px;\n    box-shadow: 1px 1px 5px rgba(0,0,0,.15);\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display:flex;\n    justify-content: space-between;\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 24px;\n    line-height: 32px;\n    color: #d14d8b;\n    list-style-type: none;\n    margin-left: -7px;\n    \n}\n\n    .col1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .col1[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-right: 6%;\n}\n\n    .col2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 4%;\n}\n\n    .col2[_ngcontent-%COMP%]   .sabores-prod[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-right: 0;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .preco[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 4px;\n    line-height: 28px;\n    color: #e291b7;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .pontos[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 25px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-bottom: 2px dotted #e291b769;\n}\n\n    .subtitulo[_ngcontent-%COMP%] {\n    font-family: 'Amatic SC', cursive;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 20px;\n    color: #bd96a8;\n}\n\n    .notas[_ngcontent-%COMP%], .notas2[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    font-weight: 100;\n    font-size: 18px;\n    text-align: right;\n    color: #e291b7;\n    margin-right: 2%;\n    margin-top: 5px;\n}\n\n    .notas2[_ngcontent-%COMP%] {\n    margin-top: 12px;\n   text-align: center; \n}\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: 4%;\n    margin-bottom: 1.5rem;\n    padding-left: 2%;\n}\n\n    .sabores-cnt[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 48%;\n}\n\n    .col1[_ngcontent-%COMP%] {\n    flex: 1 0 0;\n    margin-left: 0;\n    border-right: 5px dotted #e0bfce80;\n}\n\n    .col2[_ngcontent-%COMP%]{\n    flex: 1 0 0;\n    margin-left: 4%;\n\n}\n\n    .galeria-prod[_ngcontent-%COMP%] {\n    width: 25%;\n    border: 6px solid white;\n    border-radius: 2px;\n    margin-left: 5%;\n    margin-bottom: 30px;\n    box-shadow: 1px 1px 7px rgba(0,0,0,.15);\n}\n\n    .bgalt[_ngcontent-%COMP%] {\n    background-color: #FAF0F5;\n}\n\n    @media (max-width: 640px) { \n    .titulo[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        line-height: 2rem;\n        margin-top: 32px;\n        margin-left: 25px;\n        margin-bottom: 20px;\n    }\n\n    .titulo[_ngcontent-%COMP%]:first-of-type {\n        margin-top: -5px;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    #produtos-cnt[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-of-type {\n        margin-top: 18px;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col1[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        margin-left: 0;\n        border-right: none;\n    }\n\n    .col2[_ngcontent-%COMP%] {\n        order: 2;\n        width: 100%;\n        margin-left: 0;\n    }\n\n    .sabores-cnt[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .sabores-prod[_ngcontent-%COMP%], .sabores-cnt[_ngcontent-%COMP%] {\n        margin-left: 6%;\n        margin-right: 6%;\n    }\n\n    .subtitulo[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 18px;\n        margin-bottom: 7px;\n        margin-left: -3px;\n        margin-top: -2px;\n    }\n\n    .notas[_ngcontent-%COMP%] {\n        order: 0;\n        font-size: 14px;\n        line-height: 14px;\n        margin-top: -10px;\n        margin-bottom: 0px;\n        margin-right: 0;\n    }\n\n    .notas2[_ngcontent-%COMP%] {\n        order: 3;\n        font-size: 14px;\n        line-height: 14px;\n        margin-left: -10%;\n    }\n\n    .btn-padrao[_ngcontent-%COMP%] {\n        padding: 8px 40px;\n    }\n\n    .texto[_ngcontent-%COMP%] {\n        font-size: 16px;\n        text-indent: 3rem;\n        margin-left: 5%;\n        margin-right: 5%;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZG9jaW5ob3MvdHJhZGljaW9uYWlzL3RyYWRpY2lvbmFpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0Qyw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztJQUVJO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQTJCOztJQUU3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGOztJQVZFO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQTJCOztJQUU3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGOztJQUlGO0FBQ0E7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDOztJQUVJO0lBQ0E7TUFDRSxVQUFVO01BQ1YsNEJBQTRCOztJQUU5QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGOztJQVZFO0lBQ0E7TUFDRSxVQUFVO01BQ1YsNEJBQTRCOztJQUU5QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGO0FBQ0Y7O0lBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztJQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztJQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0lBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztJQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7SUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztJQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7SUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCOztBQUVyQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztJQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7O0lBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7SUFFQTtJQUNJLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0lBRUE7SUFDSSxnQkFBZ0I7R0FDakIsa0JBQWtCO0FBQ3JCOztJQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7SUFFQTtFQUNFLFdBQVc7QUFDYjs7SUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDOztJQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7O0FBRW5COztJQUlBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1Q0FBdUM7QUFDM0M7O0lBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0lBSUE7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtBQUN4QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvZG9jaW5ob3MvdHJhZGljaW9uYWlzL3RyYWRpY2lvbmFpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RyYWRpY2lvbmFpcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIyIC43cyBlYXNlIGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuMDVzO1xufVxuXG4gICAgQGtleWZyYW1lcyBzbGlkZS1lbnRyYXIyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgfVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7IFxuI3RyYWRpY2lvbmFpcyB7XG4gICAgYW5pbWF0aW9uOiBzbGlkZS1lbnRyYXIgLjIzcyBlYXNlIGJvdGg7XG59XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlLWVudHJhciB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4udGl0dWxvOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXR1bG8tc2Fib3JlcyB7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNyU7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTI5MWI3O1xufVxuXG4uY29yLWRpZiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNlMjkxYjdiZDtcbn1cblxuLnRleHRvIHtcbiAgICB0ZXh0LWluZGVudDogNXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGV4dG8gYSwgLnRleHRvIGE6dmlzaXRlZCwgLnRleHRvIGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xufVxuXG4udGV4dG8gYTpob3ZlciB7XG4gICAgY29sb3I6ICNlMjkxYjc7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXBhZHJhbyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZzogOHB4IDgwcHg7XG59XG5cbi5idG4tY250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDkzJSk7XG59XG5cbi5zYWJvcmVzLXByb2Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLC4xNSk7XG59XG5cbi5zYWJvcmVzLWNudCBsaSB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cblxuLmNvbDEgbGksIC5jb2wxIC5zYWJvcmVzLXByb2Qge1xuICAgIG1hcmdpbi1yaWdodDogNiU7XG59XG5cbi5jb2wyIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4uY29sMiAuc2Fib3Jlcy1wcm9kIHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zYWJvcmVzLWNudCBsaSAucHJlY28ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICNlMjkxYjc7XG59XG4uc2Fib3Jlcy1jbnQgbGkgLnBvbnRvcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgI2UyOTFiNzY5O1xufVxuXG4uc3VidGl0dWxvIHtcbiAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNiZDk2YTg7XG59XG5cbi5ub3RhcywgLm5vdGFzMiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogI2UyOTFiNztcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5vdGFzMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5zYWJvcmVzLWNudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zYWJvcmVzLWNudCA+ICoge1xuICBmbGV4OiAxIDQ4JTtcbn1cblxuLmNvbDEge1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogNXB4IGRvdHRlZCAjZTBiZmNlODA7XG59XG5cbi5jb2wye1xuICAgIGZsZXg6IDEgMCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcblxufVxuXG5cblxuLmdhbGVyaWEtcHJvZCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggcmdiYSgwLDAsMCwuMTUpO1xufVxuXG5cbi5iZ2FsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjBGNTtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyBcbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnRpdHVsbzpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICB9XG5cbiAgICAjcHJvZHV0b3MtY250IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuXG4gICAgI3Byb2R1dG9zLWNudCBoMTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb2wxIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cblxuICAgIC5jb2wyIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1jbnQgbGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuc2Fib3Jlcy1wcm9kLCAuc2Fib3Jlcy1jbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNiU7XG4gICAgfVxuXG4gICAgLnN1YnRpdHVsbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLm5vdGFzIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAubm90YXMyIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIH1cblxuICAgIC5idG4tcGFkcmFvIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgfVxuXG4gICAgLnRleHRvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWluZGVudDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradicionaisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tradicionais',
          templateUrl: './tradicionais.component.html',
          styleUrls: ['./tradicionais.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/jumbotron.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/products/jumbotron.service.ts ***!
    \***********************************************/

  /*! exports provided: JumboService */

  /***/
  function srcAppProductsJumbotronServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JumboService", function () {
      return JumboService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JumboService = /*#__PURE__*/function () {
      function JumboService() {
        _classCallCheck(this, JumboService);

        this.emitirCateg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.emitirSubCateg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
      }

      _createClass(JumboService, [{
        key: "mudarCateg",
        value: function mudarCateg(categ) {
          this.emitirCateg.emit(categ);
        }
      }, {
        key: "mudarSubCateg",
        value: function mudarSubCateg(subcateg) {
          this.emitirSubCateg.emit(subcateg);
        }
      }]);

      return JumboService;
    }();

    JumboService.ɵfac = function JumboService_Factory(t) {
      return new (t || JumboService)();
    };

    JumboService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JumboService,
      factory: JumboService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JumboService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products-page/products-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/products/products-page/products-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductsPageComponent */

  /***/
  function srcAppProductsProductsPageProductsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function () {
      return ProductsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jumbotron.service */
    "./src/app/products/jumbotron.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductsPageComponent = /*#__PURE__*/function () {
      function ProductsPageComponent(myJumbo) {
        _classCallCheck(this, ProductsPageComponent);

        this.myJumbo = myJumbo;
      }

      _createClass(ProductsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          window.scrollTo(0, 0);
          this.myJumbo.emitirCateg.subscribe(function (categ) {
            return _this.categoria = categ;
          });
          this.myJumbo.emitirSubCateg.subscribe(function (subcateg) {
            return _this.subcategoria = subcateg;
          });
        }
      }]);

      return ProductsPageComponent;
    }();

    ProductsPageComponent.ɵfac = function ProductsPageComponent_Factory(t) {
      return new (t || ProductsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]));
    };

    ProductsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsPageComponent,
      selectors: [["app-products"]],
      decls: 18,
      vars: 2,
      consts: [[1, "mainprod"], [1, "jumbotron", "bg-white"], [1, "display-4"], [1, "lead", "jumbolead"], ["id", "prod-cnt", 1, "container", "bg-white"], ["id", "myTab", 1, "nav", "nav-tabs", "nav-fill"], [1, "nav-item"], ["id", "bolos-tab", "routerLink", "bolos", "routerLinkActive", "active", 1, "nav-link"], ["id", "docinhos-tab", "routerLink", "docinhos", "routerLinkActive", "active", 1, "nav-link"], ["id", "docesmaiores-tab", "routerLink", "doces", "routerLinkActive", "active", 1, "nav-link"]],
      template: function ProductsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bolos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Docinhos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Doces Maiores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subcategoria);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".jumbotron[_ngcontent-%COMP%] {\n    \n    \n    background-color: #8a546e !important;\n    background: radial-gradient(circle, rgba(150,93,121,1) 0%, rgba(99,66,80,1) 100%) !important;\n    margin-top: 0px;\n    border-radius: 0px;\n    position: absolute;\n    top:0;\n    margin-bottom:0px !important;\n    height: 365px;\n    width: 100%;\n    border: none;\n    z-index: 0;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);\n    font-family: 'Amatic SC', cursive;\n    font-weight: 900;\n    color: #fff;\n    padding-bottom: 100px;\n    -webkit-animation: jumbo-entrar2 1s ease both;\n            animation: jumbo-entrar2 1s ease both;\n    -webkit-animation-delay: .3s;\n            animation-delay: .3s;\n}\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    line-height: 2.5rem;\n    margin: 7px;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) !important;\n    -webkit-animation: jumbo-entrar .8s ease both;\n            animation: jumbo-entrar .8s ease both;\n    -webkit-animation-delay: .5s;\n            animation-delay: .5s;\n}\n.jumbotron[_ngcontent-%COMP%]   .jumbolead[_ngcontent-%COMP%] {\n    font-size: 5rem;\n    line-height: 5rem;\n    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5) !important;\n    -webkit-animation: jumbo-entrar .8s ease both;\n            animation: jumbo-entrar .8s ease both;\n    -webkit-animation-delay: .65s;\n            animation-delay: .65s;\n}\n@-webkit-keyframes jumbo-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n}\n@keyframes jumbo-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(-5px);\n      \n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n}\n@-webkit-keyframes jumbo-entrar2 {\n    0% {\n      opacity: 0;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n}\n@keyframes jumbo-entrar2 {\n    0% {\n      opacity: 0;\n      \n    }\n    100% {\n      opacity: 1;\n    }\n}\n\n#prod-cnt[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    position: relative;\n    max-width: 1200px;\n    margin-top: 300px;\n    top: 0 !important;\n    border-radius: 10px;\n    z-index: 1 !important;\n    min-height: 80vh;\n    -webkit-animation: prod-entrar .5s ease both;\n            animation: prod-entrar .5s ease both;\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n}\n@-webkit-keyframes prod-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n@keyframes prod-entrar {\n    0% {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n#myTab[_ngcontent-%COMP%] {\n  background-color: #f7e0ea;\n  \n}\n.nav-tabs[_ngcontent-%COMP%] {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-family: 'Mouse Memoirs', sans-serif;\n    line-height: 45px;\n    height: 55px;\n    font-size: 26px;\n    letter-spacing: 1px;\n    word-spacing: 3px;\n    color: #e0bfce;\n    background-color: #FAF0F5;\n    background: linear-gradient(180deg, rgba(250,240,245,1) 0%, rgba(250,240,245,1) 85%, rgba(243,225,232,.7) 100%);\n    border: none;\n    transition: all 100ms ease; \n}\n#bolos-tab[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 1px;\n}\n#docesmaiores-tab[_ngcontent-%COMP%] {\n    margin-left: 1px;\n    margin-right: 0px;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    color: #d14d8b;\n    background-color: #fff;\n    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%);\n    height: 65px;\n    margin-top: -10px;\n    transform: translate(0, 3px); \n    box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.03);\n\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: #d14d8b;\n    height: 58px;\n    margin-top: -3px;\n}\n#myTabContent[_ngcontent-%COMP%] {\n    padding: 0;\n\n}\n@media (min-width: 641px) and (max-width: 1199px) { \n.jumbotron[_ngcontent-%COMP%] {\n    height: 230px;\n    top: 70px;\n    padding-bottom: 50px;\n}\n\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    bottom: 4.2rem;\n}\n\n#prod-cnt[_ngcontent-%COMP%] {\n    margin-top: 300px;\n}\n}\n@media (max-width: 640px) { \n#prod-cnt[_ngcontent-%COMP%] {\n    margin-top: 130px;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:active {\n    font-size: 20px;\n    margin-top: 0;\n    line-height: 37px;\n    padding: 0;\n    height: 37px;\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    transition: all 230ms ease; \n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n    font-size: 20px;\n    margin-top: -6px;\n    height: 43px;\n}\n\n.router-outlet[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 167px;\n    width: 100%;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n    max-height: 135px;\n    padding-bottom: 27px;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .jumbolead[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 3.0rem;\n}\n\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    bottom: 4.2rem;\n    line-height: 1.5rem;\n}\n\nbody[_ngcontent-%COMP%] {overflow-x: hidden;}\n}\n.mainprod[_ngcontent-%COMP%] {\n    overflow:hidden;\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] { overflow:hidden; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0lBQ0ksbUVBQW1FO0lBQ25FLDBDQUEwQztJQUMxQyxvQ0FBb0M7SUFDcEMsNEZBQTRGO0lBQzVGLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTs7SUFFVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7QUFLQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNEQUFzRDtJQUN0RCw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0RBQXNEO0lBQ3RELDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUdJO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQTJCOztJQUU3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLHdCQUF3QjtJQUMxQjtBQUNKO0FBVkk7SUFDQTtNQUNFLFVBQVU7TUFDViwyQkFBMkI7O0lBRTdCO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0JBQXdCO0lBQzFCO0FBQ0o7QUFFSTtJQUNBO01BQ0UsVUFBVTs7SUFFWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0FBQ0o7QUFSSTtJQUNBO01BQ0UsVUFBVTs7SUFFWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0FBQ0o7QUFJQSwwQ0FBMEM7QUFFMUM7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUVJO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMEJBQTBCO0lBQzVCO0VBQ0Y7QUFURTtJQUNBO01BQ0UsVUFBVTtNQUNWLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGO0FBRUY7RUFDRSx5QkFBeUI7O0FBRTNCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLCtHQUErRztJQUMvRyxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1GQUFtRjtJQUNuRixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1Qiw0Q0FBNEM7O0FBRWhEO0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksVUFBVTs7QUFFZDtBQUdBO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtBQUVBO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBLE1BQU0sa0JBQWtCLENBQUM7QUFDekI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQSxhQUFhLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLXBhZ2UvcHJvZHVjdHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSEVSTyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmp1bWJvdHJvbiB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlbnMvcHJvZHV0b3MvcXVlbXNvbW9zLXRvcG8uanBnXCIpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM2MzQyNTAgIWltcG9ydGFudDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE1NDZlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgxNTAsOTMsMTIxLDEpIDAlLCByZ2JhKDk5LDY2LDgwLDEpIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgbWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM2NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB6LWluZGV4OiAwO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgIGFuaW1hdGlvbjoganVtYm8tZW50cmFyMiAxcyBlYXNlIGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuM3M7XG59XG5cbiAgXG5cblxuLmp1bWJvdHJvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICBtYXJnaW46IDdweDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uOiBqdW1iby1lbnRyYXIgLjhzIGVhc2UgYm90aDtcbiAgICBhbmltYXRpb24tZGVsYXk6IC41cztcbn1cblxuLmp1bWJvdHJvbiAuanVtYm9sZWFkIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDVyZW07XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbjoganVtYm8tZW50cmFyIC44cyBlYXNlIGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNjVzO1xufSAgXG5cblxuICAgIEBrZXlmcmFtZXMganVtYm8tZW50cmFyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgICAgXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbiAgICBAa2V5ZnJhbWVzIGp1bWJvLWVudHJhcjIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuXG5cbi8qIE1BSU4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI3Byb2QtY250IHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xuICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgYW5pbWF0aW9uOiBwcm9kLWVudHJhciAuNXMgZWFzZSBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cblxuICAgIEBrZXlmcmFtZXMgcHJvZC1lbnRyYXIge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgfVxuXG4jbXlUYWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlMGVhO1xuICBcbn1cbi5uYXYtdGFicyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHdvcmQtc3BhY2luZzogM3B4O1xuICAgIGNvbG9yOiAjZTBiZmNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUYwRjU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTAsMjQwLDI0NSwxKSAwJSwgcmdiYSgyNTAsMjQwLDI0NSwxKSA4NSUsIHJnYmEoMjQzLDIyNSwyMzIsLjcpIDEwMCUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTsgXG59XG5cbiNib2xvcy10YWIge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbiNkb2Nlc21haW9yZXMtdGFiIHtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDNweCk7IFxuICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuXG59XG5cbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjZDE0ZDhiO1xuICAgIGhlaWdodDogNThweDtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4jbXlUYWJDb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuXG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7IFxuLmp1bWJvdHJvbiB7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgICB0b3A6IDcwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5qdW1ib3Ryb24gaDEge1xuICAgIGJvdHRvbTogNC4ycmVtO1xufVxuXG4jcHJvZC1jbnQge1xuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xufVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHsgXG4jcHJvZC1jbnQge1xuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyLCAubmF2LXRhYnMgLm5hdi1saW5rOmFjdGl2ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIzMG1zIGVhc2U7IFxufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIGhlaWdodDogNDNweDtcbn1cblxuLnJvdXRlci1vdXRsZXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2N3B4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uanVtYm90cm9uIHtcbiAgICBtYXgtaGVpZ2h0OiAxMzVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjdweDtcbn1cblxuLmp1bWJvdHJvbiAuanVtYm9sZWFkIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDMuMHJlbTtcbn1cblxuLmp1bWJvdHJvbiBoMSB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgYm90dG9tOiA0LjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuYm9keSB7b3ZlcmZsb3cteDogaGlkZGVuO31cbn1cblxuLm1haW5wcm9kIHtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbmJvZHksIGh0bWwgeyBvdmVyZmxvdzpoaWRkZW47IH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products-page.component.html',
          styleUrls: ['./products-page.component.css']
        }]
      }], function () {
        return [{
          type: _jumbotron_service__WEBPACK_IMPORTED_MODULE_1__["JumboService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/products-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products-page/products-page.component */
    "./src/app/products/products-page/products-page.component.ts");
    /* harmony import */


    var _bolos_bolos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bolos/bolos.component */
    "./src/app/products/bolos/bolos.component.ts");
    /* harmony import */


    var _docinhos_docinhos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./docinhos/docinhos.component */
    "./src/app/products/docinhos/docinhos.component.ts");
    /* harmony import */


    var _doces_doces_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./doces/doces.component */
    "./src/app/products/doces/doces.component.ts");
    /* harmony import */


    var _bolos_pasta_pasta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bolos/pasta/pasta.component */
    "./src/app/products/bolos/pasta/pasta.component.ts");
    /* harmony import */


    var _bolos_naked_naked_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bolos/naked/naked.component */
    "./src/app/products/bolos/naked/naked.component.ts");
    /* harmony import */


    var _bolos_confeitados_confeitados_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./bolos/confeitados/confeitados.component */
    "./src/app/products/bolos/confeitados/confeitados.component.ts");
    /* harmony import */


    var _docinhos_finos_finos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./docinhos/finos/finos.component */
    "./src/app/products/docinhos/finos/finos.component.ts");
    /* harmony import */


    var _docinhos_infantis_infantis_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./docinhos/infantis/infantis.component */
    "./src/app/products/docinhos/infantis/infantis.component.ts");
    /* harmony import */


    var _docinhos_tradicionais_tradicionais_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./docinhos/tradicionais/tradicionais.component */
    "./src/app/products/docinhos/tradicionais/tradicionais.component.ts");
    /* harmony import */


    var _doces_cupcakes_cupcakes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./doces/cupcakes/cupcakes.component */
    "./src/app/products/doces/cupcakes/cupcakes.component.ts");
    /* harmony import */


    var _doces_pirulitos_pirulitos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./doces/pirulitos/pirulitos.component */
    "./src/app/products/doces/pirulitos/pirulitos.component.ts");
    /* harmony import */


    var _doces_bemcasados_bemcasados_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./doces/bemcasados/bemcasados.component */
    "./src/app/products/doces/bemcasados/bemcasados.component.ts");

    var routerConfig2 = [{
      path: '',
      component: _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_2__["ProductsPageComponent"],
      children: [{
        path: 'bolos',
        component: _bolos_bolos_component__WEBPACK_IMPORTED_MODULE_3__["BolosComponent"],
        children: [{
          path: 'pasta',
          component: _bolos_pasta_pasta_component__WEBPACK_IMPORTED_MODULE_6__["PastaComponent"]
        }, {
          path: 'naked',
          component: _bolos_naked_naked_component__WEBPACK_IMPORTED_MODULE_7__["NakedComponent"]
        }, {
          path: 'confeitados',
          component: _bolos_confeitados_confeitados_component__WEBPACK_IMPORTED_MODULE_8__["ConfeitadosComponent"]
        }, {
          path: '',
          redirectTo: 'pasta',
          pathMatch: 'prefix'
        }]
      }, {
        path: 'docinhos',
        component: _docinhos_docinhos_component__WEBPACK_IMPORTED_MODULE_4__["DocinhosComponent"],
        children: [{
          path: 'finos',
          component: _docinhos_finos_finos_component__WEBPACK_IMPORTED_MODULE_9__["FinosComponent"]
        }, {
          path: 'infantis',
          component: _docinhos_infantis_infantis_component__WEBPACK_IMPORTED_MODULE_10__["InfantisComponent"]
        }, {
          path: 'tradicionais',
          component: _docinhos_tradicionais_tradicionais_component__WEBPACK_IMPORTED_MODULE_11__["TradicionaisComponent"]
        }, {
          path: '',
          redirectTo: 'finos',
          pathMatch: 'prefix'
        }]
      }, {
        path: 'doces',
        component: _doces_doces_component__WEBPACK_IMPORTED_MODULE_5__["DocesComponent"],
        children: [{
          path: 'cupcakes',
          component: _doces_cupcakes_cupcakes_component__WEBPACK_IMPORTED_MODULE_12__["CupcakesComponent"]
        }, {
          path: 'pirulitos',
          component: _doces_pirulitos_pirulitos_component__WEBPACK_IMPORTED_MODULE_13__["PirulitosComponent"]
        }, {
          path: 'bemcasados',
          component: _doces_bemcasados_bemcasados_component__WEBPACK_IMPORTED_MODULE_14__["BemcasadosComponent"]
        }, {
          path: '',
          redirectTo: 'cupcakes',
          pathMatch: 'prefix'
        }]
      }, {
        path: '',
        redirectTo: 'bolos/pasta',
        pathMatch: 'full'
      }]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routerConfig2)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routerConfig2)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/products-routing.module.ts");
    /* harmony import */


    var _directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../directives.module */
    "./src/app/directives.module.ts");
    /* harmony import */


    var _products_page_products_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products-page/products-page.component */
    "./src/app/products/products-page/products-page.component.ts");
    /* harmony import */


    var _bolos_bolos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bolos/bolos.component */
    "./src/app/products/bolos/bolos.component.ts");
    /* harmony import */


    var _docinhos_docinhos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./docinhos/docinhos.component */
    "./src/app/products/docinhos/docinhos.component.ts");
    /* harmony import */


    var _doces_doces_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./doces/doces.component */
    "./src/app/products/doces/doces.component.ts");
    /* harmony import */


    var _bolos_pasta_pasta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./bolos/pasta/pasta.component */
    "./src/app/products/bolos/pasta/pasta.component.ts");
    /* harmony import */


    var _bolos_naked_naked_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./bolos/naked/naked.component */
    "./src/app/products/bolos/naked/naked.component.ts");
    /* harmony import */


    var _bolos_confeitados_confeitados_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./bolos/confeitados/confeitados.component */
    "./src/app/products/bolos/confeitados/confeitados.component.ts");
    /* harmony import */


    var _docinhos_finos_finos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./docinhos/finos/finos.component */
    "./src/app/products/docinhos/finos/finos.component.ts");
    /* harmony import */


    var _docinhos_infantis_infantis_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./docinhos/infantis/infantis.component */
    "./src/app/products/docinhos/infantis/infantis.component.ts");
    /* harmony import */


    var _docinhos_tradicionais_tradicionais_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./docinhos/tradicionais/tradicionais.component */
    "./src/app/products/docinhos/tradicionais/tradicionais.component.ts");
    /* harmony import */


    var _doces_cupcakes_cupcakes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./doces/cupcakes/cupcakes.component */
    "./src/app/products/doces/cupcakes/cupcakes.component.ts");
    /* harmony import */


    var _doces_pirulitos_pirulitos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./doces/pirulitos/pirulitos.component */
    "./src/app/products/doces/pirulitos/pirulitos.component.ts");
    /* harmony import */


    var _doces_bemcasados_bemcasados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./doces/bemcasados/bemcasados.component */
    "./src/app/products/doces/bemcasados/bemcasados.component.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _directives_module__WEBPACK_IMPORTED_MODULE_3__["DirectivesModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
        declarations: [_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductsPageComponent"], _bolos_bolos_component__WEBPACK_IMPORTED_MODULE_5__["BolosComponent"], _docinhos_docinhos_component__WEBPACK_IMPORTED_MODULE_6__["DocinhosComponent"], _doces_doces_component__WEBPACK_IMPORTED_MODULE_7__["DocesComponent"], _bolos_pasta_pasta_component__WEBPACK_IMPORTED_MODULE_8__["PastaComponent"], _bolos_naked_naked_component__WEBPACK_IMPORTED_MODULE_9__["NakedComponent"], _bolos_confeitados_confeitados_component__WEBPACK_IMPORTED_MODULE_10__["ConfeitadosComponent"], _docinhos_finos_finos_component__WEBPACK_IMPORTED_MODULE_11__["FinosComponent"], _docinhos_infantis_infantis_component__WEBPACK_IMPORTED_MODULE_12__["InfantisComponent"], _docinhos_tradicionais_tradicionais_component__WEBPACK_IMPORTED_MODULE_13__["TradicionaisComponent"], _doces_cupcakes_cupcakes_component__WEBPACK_IMPORTED_MODULE_14__["CupcakesComponent"], _doces_pirulitos_pirulitos_component__WEBPACK_IMPORTED_MODULE_15__["PirulitosComponent"], _doces_bemcasados_bemcasados_component__WEBPACK_IMPORTED_MODULE_16__["BemcasadosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _directives_module__WEBPACK_IMPORTED_MODULE_3__["DirectivesModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_4__["ProductsPageComponent"], _bolos_bolos_component__WEBPACK_IMPORTED_MODULE_5__["BolosComponent"], _docinhos_docinhos_component__WEBPACK_IMPORTED_MODULE_6__["DocinhosComponent"], _doces_doces_component__WEBPACK_IMPORTED_MODULE_7__["DocesComponent"], _bolos_pasta_pasta_component__WEBPACK_IMPORTED_MODULE_8__["PastaComponent"], _bolos_naked_naked_component__WEBPACK_IMPORTED_MODULE_9__["NakedComponent"], _bolos_confeitados_confeitados_component__WEBPACK_IMPORTED_MODULE_10__["ConfeitadosComponent"], _docinhos_finos_finos_component__WEBPACK_IMPORTED_MODULE_11__["FinosComponent"], _docinhos_infantis_infantis_component__WEBPACK_IMPORTED_MODULE_12__["InfantisComponent"], _docinhos_tradicionais_tradicionais_component__WEBPACK_IMPORTED_MODULE_13__["TradicionaisComponent"], _doces_cupcakes_cupcakes_component__WEBPACK_IMPORTED_MODULE_14__["CupcakesComponent"], _doces_pirulitos_pirulitos_component__WEBPACK_IMPORTED_MODULE_15__["PirulitosComponent"], _doces_bemcasados_bemcasados_component__WEBPACK_IMPORTED_MODULE_16__["BemcasadosComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _directives_module__WEBPACK_IMPORTED_MODULE_3__["DirectivesModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map