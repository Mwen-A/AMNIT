(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");







// Create the routes for the application
var routes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
        data: {
            title: 'Home Page'
        }
    },
    {
        path: 'about',
        component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"],
        data: {
            title: 'About Page'
        }
    },
    {
        path: 'contact',
        component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactPageComponent"],
        data: {
            title: 'Contact Page'
        }
    },
    {
        path: '**',
        component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundPageComponent"],
        data: {
            title: 'The page was not found'
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // Initialize the router module to use the routes list for the application
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            // Export the router module to be used in the main application
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Can be found at nav-bar.component.ts selector -->\n<app-nav-bar></app-nav-bar>\n<!-- The router will handle the display of the main page content -->\n<router-outlet></router-outlet>\n<!-- Can be found at footer.component.ts selector -->\n<app-footer></app-footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team.service */ "./src/app/team.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_page_top_container_top_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-page/top-container/top-container.component */ "./src/app/home-page/top-container/top-container.component.ts");
/* harmony import */ var _home_page_who_are_we_who_are_we_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home-page/who-are-we/who-are-we.component */ "./src/app/home-page/who-are-we/who-are-we.component.ts");
/* harmony import */ var _home_page_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-page/what-we-do/what-we-do.component */ "./src/app/home-page/what-we-do/what-we-do.component.ts");
/* harmony import */ var _home_page_our_work_our_work_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-page/our-work/our-work.component */ "./src/app/home-page/our-work/our-work.component.ts");
/* harmony import */ var _home_page_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-page/our-team/our-team.component */ "./src/app/home-page/our-team/our-team.component.ts");
/* harmony import */ var _home_page_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home-page/newsletter/newsletter.component */ "./src/app/home-page/newsletter/newsletter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"],
                _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundPageComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _home_page_top_container_top_container_component__WEBPACK_IMPORTED_MODULE_13__["TopContainerComponent"],
                _home_page_who_are_we_who_are_we_component__WEBPACK_IMPORTED_MODULE_14__["WhoAreWeComponent"],
                _home_page_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_15__["WhatWeDoComponent"],
                _home_page_our_work_our_work_component__WEBPACK_IMPORTED_MODULE_16__["OurWorkComponent"],
                _home_page_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_17__["OurTeamComponent"],
                _home_page_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_18__["NewsletterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            providers: [_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* style color for block elements */\nh1,\nh3,\nh5,\nlabel,\ninput,\n::-webkit-input-placeholder {\n  color: #5A568D;\n}\nh1,\nh3,\nh5,\nlabel,\ninput,\n::-ms-input-placeholder {\n  color: #5A568D;\n}\nh1,\nh3,\nh5,\nlabel,\ninput,\n::placeholder {\n  color: #5A568D;\n}\n/* style border for all input fields */\n.input-enter {\n  border: 2px solid #5A568D;\n}\n/* style color button */\n.btn {\n  background: #5A568D !important;\n}\n/* style margin for address */\n.address {\n  margin-top: 120px;\n}\n/* style error messages */\n.error {\n  color: red;\n}\n/* style success message */\n.success {\n  color: green\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQzs7Ozs7O0VBTUUsZUFBZTtDQUNoQjtBQVBEOzs7Ozs7RUFNRSxlQUFlO0NBQ2hCO0FBUEQ7Ozs7OztFQU1FLGVBQWU7Q0FDaEI7QUFFRCx1Q0FBdUM7QUFDdkM7RUFDRSwwQkFBMEI7Q0FDM0I7QUFFRCx3QkFBd0I7QUFDeEI7RUFDRSwrQkFBK0I7Q0FDaEM7QUFFRCw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7Q0FDbkI7QUFFRCwwQkFBMEI7QUFDMUI7RUFDRSxXQUFXO0NBQ1o7QUFFRCwyQkFBMkI7QUFDM0I7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZSBjb2xvciBmb3IgYmxvY2sgZWxlbWVudHMgKi9cbmgxLFxuaDMsXG5oNSxcbmxhYmVsLFxuaW5wdXQsXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM1QTU2OEQ7XG59XG5cbi8qIHN0eWxlIGJvcmRlciBmb3IgYWxsIGlucHV0IGZpZWxkcyAqL1xuLmlucHV0LWVudGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzVBNTY4RDtcbn1cblxuLyogc3R5bGUgY29sb3IgYnV0dG9uICovXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogIzVBNTY4RCAhaW1wb3J0YW50O1xufVxuXG4vKiBzdHlsZSBtYXJnaW4gZm9yIGFkZHJlc3MgKi9cbi5hZGRyZXNzIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG5cbi8qIHN0eWxlIGVycm9yIG1lc3NhZ2VzICovXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBzdHlsZSBzdWNjZXNzIG1lc3NhZ2UgKi9cbi5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Container for the form -->\n<div class=\"container pb-3\">\n  <!-- Display heading -->\n  <h1 class=\"display-3 text-center mb-4\">CONTACT</h1>\n  <h5 class=\"text-center\">\n    Need to ask a question or make an enquiry? Send us a message by using our\n    contact form on this page, send us an email or give us a call on the number\n    below.\n  </h5>\n  <br />\n  <!-- A row -->\n  <div class=\"row\">\n    <!-- First column for the form -->\n    <div class=\"col-md-6\">\n      <h5 class=\"success\" *ngIf=\"success\">\n        Your message has been submitted, we will be in touch with you shortly!\n      </h5>\n      <form [formGroup]=\"messageForm\" *ngIf=\"!success\" (ngSubmit)=\"onSubmit()\">\n\n        <!-- Label & input field for name -->\n        <div class=\"form-group\">\n          <label for=\"fullname\">Full Name</label>\n          <input type=\"text\" class=\"form-control input-enter\" formControlName=\"name\" id=\"fullname\"\n            placeholder=\"Full Name\" [(ngModel)]=\"userModel.name\" />\n\n          <!-- Error message for fullname -->\n          <div *ngIf=\"submitted && messageForm.controls.name.errors\" class=\"error\">\n            <div *ngIf=\"messageForm.controls.name.errors.required\">\n              Your Name is required!\n            </div>\n          </div>\n        </div>\n\n        <!-- Label & input field for email -->\n        <div class=\"form-group mt-4\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" class=\"form-control input-enter\" formControlName=\"email\" id=\"email\" placeholder=\"Email\"\n            [(ngModel)]=\"userModel.email\" />\n\n          <!-- Error message for Email -->\n          <div *ngIf=\"submitted && messageForm.controls.email.errors\" class=\"error\">\n            <div *ngIf=\"messageForm.controls.email.errors.required\">\n              Your email is required!\n            </div>\n          </div>\n        </div>\n\n        <!-- Textarea for comments and enquiry -->\n        <div class=\"form-group mt-5\">\n          <label for=\"comment\">Enquiries</label>\n          <textarea name=\"comment\" id=\"comment\" cols=\"74\" rows=\"6\" class=\" form-control input-enter\"\n            formControlName=\"message\" placeholder=\"Leave a comment or ask a question\"\n            [(ngModel)]=\"userModel.message\"></textarea>\n\n          <!-- Error message for textarea -->\n          <div *ngIf=\"submitted && messageForm.controls.message.errors\" class=\"error\">\n            <div *ngIf=\"messageForm.controls.message.errors.required\">\n              Your message is required!\n            </div>\n          </div>\n        </div>\n\n        <!-- Button to submit form -->\n        <div class=\"form-group text-center mt-5\">\n          <button type=\"submit\" class=\"btn btn-info btn-lg center cta\">\n            Submit Enquiry\n          </button>\n        </div>\n      </form>\n    </div>\n    <!-- Second column for address -->\n    <div class=\"col-md-6 address text-center\">\n      <h3>Currently looking for a new office</h3>\n      <h3>+44 7886 837 410</h3>\n      <h3>info@amnick.com</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _enquire_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enquire.service */ "./src/app/enquire.service.ts");





var ContactPageComponent = /** @class */ (function () {
    // Constructor for formBuilder and EnquireService imports
    function ContactPageComponent(formBuilder, _enquireService) {
        this.formBuilder = formBuilder;
        this._enquireService = _enquireService;
        this.submitted = false;
        this.success = false;
        // userModel constructor call to display user input details from User.ts
        this.userModel = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '');
        // validators
        this.messageForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ContactPageComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.messageForm.invalid) {
            return;
        }
        else {
            this.success = true;
        }
        // Check if data is submitted or not
        this._enquireService
            .enquire(this.userModel)
            .subscribe(function (data) { return console.log('Success!', data); }, function (error) { return console.error('Error!', error); });
        // timeout method to hide input details
        // setTimeout(() => {
        //   this.userModel.name = '';
        //   this.userModel.email = '';
        //   this.userModel.message = '';
        // }, 3000);
        setTimeout(function () { return window.location.reload(); }, 3000);
    };
    ContactPageComponent.prototype.ngOnInit = function () { };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.css */ "./src/app/contact-page/contact-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _enquire_service__WEBPACK_IMPORTED_MODULE_4__["EnquireService"]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/enquire.service.ts":
/*!************************************!*\
  !*** ./src/app/enquire.service.ts ***!
  \************************************/
/*! exports provided: EnquireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquireService", function() { return EnquireService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EnquireService = /** @class */ (function () {
    function EnquireService(_http) {
        this._http = _http;
        // Url for address to post data
        this._url = 'http://localhost:3000/enquire';
    }
    // method for http request to post data
    EnquireService.prototype.enquire = function (user) {
        return this._http.post(this._url, user);
    };
    EnquireService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EnquireService);
    return EnquireService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".line-height{\n  line-height: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmUtaGVpZ2h0e1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- Footer container start -->\n<div class=\"container-fluid\" >\n  <div class=\"row py-5\">\n    <div class=\"col-sm-3 col-lg-2 offset-lg-2 text-light\">\n      <img class=\"ml-4\" src=\"assets/img/Logo.png\">\n      <p>&copy; Amnick 2019</p>\n      <!-- I don't understand why the copyright is located at the top of the footer? -->\n    </div>\n\n    <div class=\"col-sm-3 col-lg-2  text-light line-height pt-2\">\n \n      <!-- TODO: Convert to links -->\n      <p><a href=\"about-page.html\">About Us</a></p>\n      <p><a href=\"contact-page.html\">Contact</a></p>\n\n      <!-- PB: Is there an actual link for this section \"Working for Amnick\"? -->\n      <p>Working for Amnick</p>\n    </div>\n\n    <div class=\"col-sm-3 col-lg-2 text-light line-height pt-2\">\n      <!-- TODO: Convert to links and add same padding on all icons -->\n\n      <a href=\"https://www.facebook.com/amnicksocialenterprise1/\" ><i class=\"fab fa-facebook-f mr-2 fa-2x\"></i></a>\n      <a href=\"https://twitter.com/amnickse?lang=en-gb\"><i class=\"fab fa-twitter mr-2 fa-2x\"></i></a>\n      <a href=\"https://www.linkedin.com/company/amnick/about/\"><i class=\"fab fa-linkedin mr-2 fa-2x\"></i></a>\n    </div>\n \n\n    <div class=\"col-sm-3 col-lg-3 text-light line-height pt-2\">\n      <p>Currently looking for new office.</p>\n      <p>+44 7886 837 410</p>\n      <p>info@amnick.com</p>\n    </div>\n\n  </div>\n \n</div>\n<!-- Footer container end -->\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-container></app-top-container>\n<app-who-are-we></app-who-are-we>\n<app-what-we-do></app-what-we-do>\n<app-our-work></app-our-work>\n<app-our-team></app-our-team>\n<app-newsletter></app-newsletter>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/newsletter/newsletter.component.css":
/*!***************************************************************!*\
  !*** ./src/app/home-page/newsletter/newsletter.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Newsletter whitebox container */\n.shape {\n  border-radius: 20px;\n  box-shadow: 5px 5px 10px grey;\n  padding: 7px;\n}\n/* Newsletter font size */\n.news {\n  font-size:20px;\n}\n/* Newsletter input styles. TODO: Change into class */\ninput {\n  font-size: 18px;\n  width: 55%;\n  border: none;\n  border-radius: 30px;\n  background: #BBBBBB;\n  padding: 12px;\n  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.3);\n}\n/* Newsletter subscribe button styles */\n.btn-custom1 {\n  background: #4D4B86;\n  border: none;\n  color: white;\n  font-weight: 600;\n  margin-left:-85px;\n  border-radius: 30px;\n  padding: 12px;\n  position: absolute;\n  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.3);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL25ld3NsZXR0ZXIvbmV3c2xldHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQztFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsYUFBYTtDQUNkO0FBRUQsMEJBQTBCO0FBQzFCO0VBQ0UsZUFBZTtDQUNoQjtBQUVELHNEQUFzRDtBQUN0RDtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLDhDQUE4QztDQUMvQztBQUVELHdDQUF3QztBQUN4QztFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsOENBQThDO0NBQy9DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL25ld3NsZXR0ZXIvbmV3c2xldHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmV3c2xldHRlciB3aGl0ZWJveCBjb250YWluZXIgKi9cbi5zaGFwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBncmV5O1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi8qIE5ld3NsZXR0ZXIgZm9udCBzaXplICovXG4ubmV3cyB7XG4gIGZvbnQtc2l6ZToyMHB4O1xufVxuXG4vKiBOZXdzbGV0dGVyIGlucHV0IHN0eWxlcy4gVE9ETzogQ2hhbmdlIGludG8gY2xhc3MgKi9cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNTUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNCQkJCQkI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLyogTmV3c2xldHRlciBzdWJzY3JpYmUgYnV0dG9uIHN0eWxlcyAqL1xuLmJ0bi1jdXN0b20xIHtcbiAgYmFja2dyb3VuZDogIzRENEI4NjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1sZWZ0Oi04NXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/newsletter/newsletter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/home-page/newsletter/newsletter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Newsletter container start -->\n<div class=\"container-fluid bg-light\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-8 offset-lg-2 my-5 shape\">\n      <span><b class=\"news sm-mx-1 mx-5\">Newsletter</b>\n        <input type=\"email\" placeholder=\"Email Address Here.\">\n        <!-- TODO: Add submit action to send the email over at AMNICK -->\n        <button class=\"btn btn-custom1 px-5\">Subscribe</button>\n      </span>\n    </div>\n  </div>\n</div>\n<!-- Newsletter container start -->\n"

/***/ }),

/***/ "./src/app/home-page/newsletter/newsletter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home-page/newsletter/newsletter.component.ts ***!
  \**************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsletterComponent = /** @class */ (function () {
    function NewsletterComponent() {
    }
    NewsletterComponent.prototype.ngOnInit = function () {
    };
    NewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsletter',
            template: __webpack_require__(/*! ./newsletter.component.html */ "./src/app/home-page/newsletter/newsletter.component.html"),
            styles: [__webpack_require__(/*! ./newsletter.component.css */ "./src/app/home-page/newsletter/newsletter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsletterComponent);
    return NewsletterComponent;
}());



/***/ }),

/***/ "./src/app/home-page/our-team/our-team.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home-page/our-team/our-team.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Our team purple background image */\n.bg-4 {\n  background-image: url('bg-4.png');\n  background-size:100% 100%;\n  background-repeat: no-repeat;\n}\n@media screen and (max-width: 767.9px) {\n  .bg-4 {\n    background-image: linear-gradient(135deg, rgba(95, 93, 218, 1) 50%, transparent 50%);\n  }\n  /* Let a top margin between the cards on medium screens */\n  .col-md-4 + .col-md-4 {\n    margin-top: 1rem;\n  }\n}\n/* Card containers styles */\n.card {\n  max-width: 350px;\n  margin: 0 auto;\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);\n}\n/* Card top image styles */\n.card-img-top {\n  width:50%;\n  margin:20px auto;\n}\n/* Social container styles */\n.social{\n  font-size:1.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL291ci10ZWFtL291ci10ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0Usa0NBQXNEO0VBQ3RELDBCQUEwQjtFQUMxQiw2QkFBNkI7Q0FDOUI7QUFFRDtFQUNFO0lBQ0UscUZBQXFGO0dBQ3RGO0VBQ0QsMERBQTBEO0VBQzFEO0lBQ0UsaUJBQWlCO0dBQ2xCO0NBQ0Y7QUFFRCw0QkFBNEI7QUFDNUI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDRDQUE0QztDQUM3QztBQUVELDJCQUEyQjtBQUMzQjtFQUNFLFVBQVU7RUFDVixpQkFBaUI7Q0FDbEI7QUFFRCw2QkFBNkI7QUFDN0I7RUFDRSxpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2Uvb3VyLXRlYW0vb3VyLXRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE91ciB0ZWFtIHB1cnBsZSBiYWNrZ3JvdW5kIGltYWdlICovXG4uYmctNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmctNC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45cHgpIHtcbiAgLmJnLTQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoOTUsIDkzLCAyMTgsIDEpIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgfVxuICAvKiBMZXQgYSB0b3AgbWFyZ2luIGJldHdlZW4gdGhlIGNhcmRzIG9uIG1lZGl1bSBzY3JlZW5zICovXG4gIC5jb2wtbWQtNCArIC5jb2wtbWQtNCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufVxuXG4vKiBDYXJkIGNvbnRhaW5lcnMgc3R5bGVzICovXG4uY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAycHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4vKiBDYXJkIHRvcCBpbWFnZSBzdHlsZXMgKi9cbi5jYXJkLWltZy10b3Age1xuICB3aWR0aDo1MCU7XG4gIG1hcmdpbjoyMHB4IGF1dG87XG59XG5cbi8qIFNvY2lhbCBjb250YWluZXIgc3R5bGVzICovXG4uc29jaWFse1xuICBmb250LXNpemU6MS41cmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/our-team/our-team.component.html":
/*!************************************************************!*\
  !*** ./src/app/home-page/our-team/our-team.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Our team section start -->\n<section class=\"container-fluid text-center bg-4 py-5\">\n  <div class=\"heading\">\n    <h3 class=\"font-weight-bold text-light\"><span class=\"text-custom\">OUR</span> TEAM</h3>\n    <hr class=\"line mx-auto\" style=\"width:4rem; \">\n  </div>\n\n  <!-- Our team container start -->\n  <div class=\"container-fluid px-3 mb-5\">\n\n    <!-- Our team cards container start -->\n    <div class=\"row justify-content-around mb-5\">\n      <div class=\"col-md-4\" *ngFor=\"let member of teamMembers\">\n        <!-- Team member card container start -->\n        <div class=\"card h-100\">\n          <!-- Team member image -->\n          <img class=\"card-img-top rounded-circle\" src={{member.avatar}} alt={{member.fullName}}>\n          <!-- Team member details -->\n          <div class=\"card-body\">\n            <!-- Team member name -->\n            <h5 class=\"card-title\">{{ member.fullName | uppercase }}</h5>\n            <!-- Team member occupation -->\n            <h6 class=\"card-subtitle mb-2\">{{ member.occupation }}</h6>\n            <!-- Team member email -->\n            <a href=\"mailto:{{member.email}}\" class=\"card-link font-weight-bold text-custom1\">{{ member.email }}</a>\n          </div>\n          <div class=\"card-footer\">\n            <!-- Team member social links -->\n            <div class=\"social\">\n              <a\n                href={{social.url}}\n                target=\"_blank\"\n                class=\"card-link font-weight-bold text-custom1\"\n                title={{social.title}}\n                *ngFor=\"let social of member.links\">\n                <i class=\"{{social.icon.type}} {{social.icon.url}}\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n        <!-- Team member card container end -->\n      </div>\n    </div>\n    <!-- Our team cards container end -->\n\n    <!-- TODO: Change with the meet the team page when is made -->\n    <a routerLink=\"/about\" class=\"btn btn-custom px-5\">\n      View all the team\n    </a>\n  </div>\n  <!-- Our team container end -->\n\n</section>\n<!-- Our team section end -->\n"

/***/ }),

/***/ "./src/app/home-page/our-team/our-team.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-page/our-team/our-team.component.ts ***!
  \**********************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/team.service */ "./src/app/team.service.ts");



var OurTeamComponent = /** @class */ (function () {
    function OurTeamComponent(teamService) {
        this.teamService = teamService;
    }
    OurTeamComponent.prototype.ngOnInit = function () {
        // Get the members from the teamService
        this.teamMembers = this.teamService.getMembers();
        // Get the members with http request
        // this.teamService.getTeamMembers()
        //   .subscribe(data => console.log(data));
    };
    OurTeamComponent.prototype.handleHover = function (event, color) {
        console.log(event);
    };
    OurTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-team',
            template: __webpack_require__(/*! ./our-team.component.html */ "./src/app/home-page/our-team/our-team.component.html"),
            styles: [__webpack_require__(/*! ./our-team.component.css */ "./src/app/home-page/our-team/our-team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], OurTeamComponent);
    return OurTeamComponent;
}());



/***/ }),

/***/ "./src/app/home-page/our-work/our-work.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home-page/our-work/our-work.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9vdXItd29yay9vdXItd29yay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home-page/our-work/our-work.component.html":
/*!************************************************************!*\
  !*** ./src/app/home-page/our-work/our-work.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Separate our work component from what we do component -->"

/***/ }),

/***/ "./src/app/home-page/our-work/our-work.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-page/our-work/our-work.component.ts ***!
  \**********************************************************/
/*! exports provided: OurWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurWorkComponent", function() { return OurWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurWorkComponent = /** @class */ (function () {
    function OurWorkComponent() {
    }
    OurWorkComponent.prototype.ngOnInit = function () {
    };
    OurWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-work',
            template: __webpack_require__(/*! ./our-work.component.html */ "./src/app/home-page/our-work/our-work.component.html"),
            styles: [__webpack_require__(/*! ./our-work.component.css */ "./src/app/home-page/our-work/our-work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurWorkComponent);
    return OurWorkComponent;
}());



/***/ }),

/***/ "./src/app/home-page/top-container/top-container.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/home-page/top-container/top-container.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Top container wrapper styles */\n.top-container {\n  min-height: 95vh; /* Display at least 95% of the visual display */\n  position: relative; /* Relative position to place the arrow on the bottom */\n  padding: 1.5em;\n  display: flex;\n  align-items: center;\n}\n/* Top container background image */\n.bg1{\n  background-image: url('home-top-container-bg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom;\n  position: relative; /* Relative position to add a pseudo element for the bottom bg */\n}\n/* Add the bottom white background */\n.bg1::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 140px;\n  bottom: 0;\n  left: 0;\n  background-image: url('Path3.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 70% bottom;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n  z-index: 1;\n}\n/* Card container background */\n.bg1 .bg-secondary {\n  background-color:  rgba(250,250,250,.8) !important;\n}\n/* Welcome message card */\n.card1{\n  max-width: 450px;\n  /* margin-left: 6rem; */\n  border-radius: 10px;\n  box-shadow: 4px 6px 10px 2px rgba(0, 0, 0, 0.3);\n}\n/* Arrow container styles */\n.arrow-container {\n  position: absolute; /* Absolute position to stick on the bottom of the container */\n  bottom: 0;\n  /* ALign in the center */\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 2;\n}\n.btn-arrow {\n  /* Overwrite bootstrap class */\n  font-size: 40px;\n  padding: 0;\n  line-height: 0;\n  border-radius: 50%;\n  background-color: inherit;\n  /* Fixed size */\n  min-height: 42px;\n  min-width: 42px;\n}\n.btn-arrow:hover, .btn-arrow:focus {\n  color: white;\n  border-color: #333;\n  background-color: #333;\n}\n/* Large screen styles */\n@media screen and (min-width: 992px) {\n  /* Welcome container */\n  .card1 {\n    margin-left: 5em;\n  }\n}\n/* Landscape styles for mobile screens */\n@media screen and (orientation: landscape) and (max-height: 440px) {\n  .card1 {\n    margin: 80px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3RvcC1jb250YWluZXIvdG9wLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQztFQUNFLGlCQUFpQixDQUFDLGdEQUFnRDtFQUNsRSxtQkFBbUIsQ0FBQyx3REFBd0Q7RUFDNUUsZUFBZTtFQUNmLGNBQWM7RUFDZCxvQkFBb0I7Q0FDckI7QUFFRCxvQ0FBb0M7QUFDcEM7RUFDRSxtREFBdUU7RUFDdkUsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsbUJBQW1CLENBQUMsaUVBQWlFO0NBQ3RGO0FBRUQscUNBQXFDO0FBQ3JDO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixRQUFRO0VBQ1IsbUNBQXVEO0VBQ3ZELDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsV0FBVztDQUNaO0FBRUQsK0JBQStCO0FBQy9CO0VBQ0UsbURBQW1EO0NBQ3BEO0FBRUQsMEJBQTBCO0FBQzFCO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsZ0RBQWdEO0NBQ2pEO0FBRUQsNEJBQTRCO0FBQzVCO0VBQ0UsbUJBQW1CLENBQUMsK0RBQStEO0VBQ25GLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsV0FBVztDQUNaO0FBRUQ7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7Q0FDeEI7QUFFRCx5QkFBeUI7QUFDekI7RUFDRSx1QkFBdUI7RUFDdkI7SUFDRSxpQkFBaUI7R0FDbEI7Q0FDRjtBQUVELHlDQUF5QztBQUN6QztFQUNFO0lBQ0UsZUFBZTtHQUNoQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3RvcC1jb250YWluZXIvdG9wLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG9wIGNvbnRhaW5lciB3cmFwcGVyIHN0eWxlcyAqL1xuLnRvcC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA5NXZoOyAvKiBEaXNwbGF5IGF0IGxlYXN0IDk1JSBvZiB0aGUgdmlzdWFsIGRpc3BsYXkgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZWxhdGl2ZSBwb3NpdGlvbiB0byBwbGFjZSB0aGUgYXJyb3cgb24gdGhlIGJvdHRvbSAqL1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogVG9wIGNvbnRhaW5lciBiYWNrZ3JvdW5kIGltYWdlICovXG4uYmcxe1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2hvbWUtdG9wLWNvbnRhaW5lci1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBSZWxhdGl2ZSBwb3NpdGlvbiB0byBhZGQgYSBwc2V1ZG8gZWxlbWVudCBmb3IgdGhlIGJvdHRvbSBiZyAqL1xufVxuXG4vKiBBZGQgdGhlIGJvdHRvbSB3aGl0ZSBiYWNrZ3JvdW5kICovXG4uYmcxOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvUGF0aDMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3MCUgYm90dG9tO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogQ2FyZCBjb250YWluZXIgYmFja2dyb3VuZCAqL1xuLmJnMSAuYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjUwLDI1MCwyNTAsLjgpICFpbXBvcnRhbnQ7XG59XG5cbi8qIFdlbGNvbWUgbWVzc2FnZSBjYXJkICovXG4uY2FyZDF7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIC8qIG1hcmdpbi1sZWZ0OiA2cmVtOyAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiA0cHggNnB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLyogQXJyb3cgY29udGFpbmVyIHN0eWxlcyAqL1xuLmFycm93LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogQWJzb2x1dGUgcG9zaXRpb24gdG8gc3RpY2sgb24gdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyICovXG4gIGJvdHRvbTogMDtcbiAgLyogQUxpZ24gaW4gdGhlIGNlbnRlciAqL1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMjtcbn1cblxuLmJ0bi1hcnJvdyB7XG4gIC8qIE92ZXJ3cml0ZSBib290c3RyYXAgY2xhc3MgKi9cbiAgZm9udC1zaXplOiA0MHB4O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAvKiBGaXhlZCBzaXplICovXG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIG1pbi13aWR0aDogNDJweDtcbn1cblxuLmJ0bi1hcnJvdzpob3ZlciwgLmJ0bi1hcnJvdzpmb2N1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4vKiBMYXJnZSBzY3JlZW4gc3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAvKiBXZWxjb21lIGNvbnRhaW5lciAqL1xuICAuY2FyZDEge1xuICAgIG1hcmdpbi1sZWZ0OiA1ZW07XG4gIH1cbn1cblxuLyogTGFuZHNjYXBlIHN0eWxlcyBmb3IgbW9iaWxlIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC1oZWlnaHQ6IDQ0MHB4KSB7XG4gIC5jYXJkMSB7XG4gICAgbWFyZ2luOiA4MHB4IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home-page/top-container/top-container.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/home-page/top-container/top-container.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top container start -->\n<div class=\"container-fluid top-container bg1\">\n\n  <div class=\"card card1 text-black bg-secondary py-2\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title text-center\">Welcome</h5>\n      <p class=\"card-text pl-2\">\n        This is the Web Development's team website of AMNICK Social Enterprise. AMNICK is creating e-work experience programs to make everyone more employable.\n      </p>\n      <div class=\"text-center\">\n        <a routerLink=\"/about\" class=\"btn btn-custom px-5\">Learn More</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"arrow-container\">\n    <!-- On click scroll to the element with class bg-2 -->\n    <button class=\"btn btn-arrow\" (click)=\"scrollIntoView('.bg-2')\">\n      <i class=\"fas fa-angle-down\"></i>\n    </button>\n  </div>\n\n</div>\n<!-- Top container end -->\n"

/***/ }),

/***/ "./src/app/home-page/top-container/top-container.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home-page/top-container/top-container.component.ts ***!
  \********************************************************************/
/*! exports provided: TopContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopContainerComponent", function() { return TopContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopContainerComponent = /** @class */ (function () {
    function TopContainerComponent() {
    }
    TopContainerComponent.prototype.ngOnInit = function () {
    };
    /**
     * Scroll the window to an element
     * @param id The string id of the element
     */
    TopContainerComponent.prototype.scrollIntoView = function (id) {
        // Select the element and then scroll to that element. https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
        document.querySelector(id).scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    TopContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-container',
            template: __webpack_require__(/*! ./top-container.component.html */ "./src/app/home-page/top-container/top-container.component.html"),
            styles: [__webpack_require__(/*! ./top-container.component.css */ "./src/app/home-page/top-container/top-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopContainerComponent);
    return TopContainerComponent;
}());



/***/ }),

/***/ "./src/app/home-page/what-we-do/what-we-do.component.css":
/*!***************************************************************!*\
  !*** ./src/app/home-page/what-we-do/what-we-do.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* What we do purple background image */\n.bg-3 {\n  background-image: url('bg-3.png');\n  background-size:100% 100%;\n  background-repeat: no-repeat;\n}\n/* Our work button styles */\n.tab {\n  margin-left:25px;\n  cursor: pointer;\n}\n.tab.active {\n  padding:10px;\n  background: white;\n  border-radius: 10px;\n  color: black;\n  cursor: pointer;\n}\n/* Our work images styles */\n.workimages .col-md-4 {\n  margin: 0;\n  padding:0;\n}\n.workimages img {\n  width:100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3doYXQtd2UtZG8vd2hhdC13ZS1kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3QztBQUN4QztFQUNFLGtDQUFzRDtFQUN0RCwwQkFBMEI7RUFDMUIsNkJBQTZCO0NBQzlCO0FBRUQsNEJBQTRCO0FBQzVCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtBQUVELDRCQUE0QjtBQUM1QjtFQUNFLFVBQVU7RUFDVixVQUFVO0NBQ1g7QUFFRDtFQUNFLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS93aGF0LXdlLWRvL3doYXQtd2UtZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdoYXQgd2UgZG8gcHVycGxlIGJhY2tncm91bmQgaW1hZ2UgKi9cbi5iZy0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy0zLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLyogT3VyIHdvcmsgYnV0dG9uIHN0eWxlcyAqL1xuLnRhYiB7XG4gIG1hcmdpbi1sZWZ0OjI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYi5hY3RpdmUge1xuICBwYWRkaW5nOjEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogT3VyIHdvcmsgaW1hZ2VzIHN0eWxlcyAqL1xuLndvcmtpbWFnZXMgLmNvbC1tZC00IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOjA7XG59XG5cbi53b3JraW1hZ2VzIGltZyB7XG4gIHdpZHRoOjEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/what-we-do/what-we-do.component.html":
/*!****************************************************************!*\
  !*** ./src/app/home-page/what-we-do/what-we-do.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- What we do and our work background wrapper start -->\n<div class=\"container-fluid text-center bg-3\">\n\n  <!-- What we do heading start -->\n  <div class=\"heading my-5\">\n    <h3 class=\"font-weight-bold\"><span class=\"text-secondary\">WHAT</span> WE DO?</h3>\n    <hr class=\"line mx-auto\" style=\"width:4rem; \">\n  </div>\n  <!-- What we do heading end -->\n\n  <!-- What we do card container start -->\n  <div class=\"container mb-5\">\n    <div class=\"row mb-5\">\n      <div class=\"col-md-4\">\n        <div class=\"card mr-5 mt-1\">\n          <img class=\"card-img-top rounded-circle\" width=\"80px\" src=\"assets/img/icon.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Web Development</h5>\n            <p class=\"card-text text-left\">\n              We create innovative web apps\n              from scratch by using Angular 7\n              for our Front-End and PHP with\n              Laravel for Back-End.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card mr-5 mt-1\">\n          <img class=\"card-img-top rounded-circle\" width=\"80px\" src=\"assets/img/icon2.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">UI / UX Design</h5>\n            <p class=\"card-text text-left\">\n              We use Photoshop and Adobe\n              XD to bring to life our ideas by\n              designing the Wireframes and\n              Prototypes before progressing\n              to coding.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card mr-5 mt-1\">\n          <img class=\"card-img-top rounded-circle\" width=\"80px\" src=\"assets/img/icon3.png\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Responsive Design</h5>\n            <p class=\"card-text text-left\">\n              We use Bootstrap and best\n              CSS techniques to create web\n              applications that respond to any\n              modern device's browser.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- What we do card container end -->\n\n  <!-- Our work button container start -->\n  <h3 class=\"font-weight-bold text-center text-light mt-5\"><span class=\"text-custom\">OUR</span> WORKS</h3>\n  <hr class=\"line mx-auto\" style=\"width:4rem; \">\n  <div class=\"container-fluid py-5 text-custom font-weight-bold\">\n    <!-- TODO: Change into buttons to filter projects -->\n    <span class=\"tab active px-5\">All</span>\n    <span class=\"tab\">Recent</span>\n    <span class=\"tab\">On going</span>\n  </div>\n  <!-- Our work button container end -->\n\n</div>\n<!-- What we do and our work background wrapper end -->\n\n<!-- Our work profolio images start -->\n<div class=\"container-fluid workimages\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-4\">\n      <img src=\"assets/img/work2.png\">\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <img src=\"assets/img/work.png\">\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <img src=\"assets/img/work3.png\">\n    </div>\n  </div>\n</div>\n<!-- Our work profolio images end -->\n"

/***/ }),

/***/ "./src/app/home-page/what-we-do/what-we-do.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home-page/what-we-do/what-we-do.component.ts ***!
  \**************************************************************/
/*! exports provided: WhatWeDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatWeDoComponent", function() { return WhatWeDoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhatWeDoComponent = /** @class */ (function () {
    function WhatWeDoComponent() {
    }
    WhatWeDoComponent.prototype.ngOnInit = function () {
    };
    WhatWeDoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-what-we-do',
            template: __webpack_require__(/*! ./what-we-do.component.html */ "./src/app/home-page/what-we-do/what-we-do.component.html"),
            styles: [__webpack_require__(/*! ./what-we-do.component.css */ "./src/app/home-page/what-we-do/what-we-do.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WhatWeDoComponent);
    return WhatWeDoComponent;
}());



/***/ }),

/***/ "./src/app/home-page/who-are-we/who-are-we.component.css":
/*!***************************************************************!*\
  !*** ./src/app/home-page/who-are-we/who-are-we.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Top background image */\n.bg-2{\n  width: 100%;\n  background-image: url('Path3.png');\n  background-size:100% 100%;\n  background-repeat:no-repeat;\n  padding: 1px;\n  margin: 0;\n}\n/* Who we are main container styles */\n.who{\n  background: #EEEEEE;\n  margin-top:-3px;\n}\n/* Left column with the header and paragraph */\n.col1{\n  padding-left:30px !important;\n  padding-right:30px !important;\n  margin-top:120px;\n}\n/* Content container */\n.content{\n  padding-left:30px !important;\n  padding-right:30px !important;\n}\n/* Right column, image styles */\n.who img{\n  width: 100%;\n  height: 100%;\n}\n.who .col-lg-6{\n  padding-right:0 !important;\n  padding-left: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3doby1hcmUtd2Uvd2hvLWFyZS13ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLFlBQVk7RUFDWixtQ0FBdUQ7RUFDdkQsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsVUFBVTtDQUNYO0FBRUQsc0NBQXNDO0FBQ3RDO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjtBQUVELCtDQUErQztBQUMvQztFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0NBQ2xCO0FBRUQsdUJBQXVCO0FBQ3ZCO0VBQ0UsNkJBQTZCO0VBQzdCLDhCQUE4QjtDQUMvQjtBQUVELGdDQUFnQztBQUNoQztFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQiwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2Uvd2hvLWFyZS13ZS93aG8tYXJlLXdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb3AgYmFja2dyb3VuZCBpbWFnZSAqL1xuLmJnLTJ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL1BhdGgzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogV2hvIHdlIGFyZSBtYWluIGNvbnRhaW5lciBzdHlsZXMgKi9cbi53aG97XG4gIGJhY2tncm91bmQ6ICNFRUVFRUU7XG4gIG1hcmdpbi10b3A6LTNweDtcbn1cblxuLyogTGVmdCBjb2x1bW4gd2l0aCB0aGUgaGVhZGVyIGFuZCBwYXJhZ3JhcGggKi9cbi5jb2wxe1xuICBwYWRkaW5nLWxlZnQ6MzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OjMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDoxMjBweDtcbn1cblxuLyogQ29udGVudCBjb250YWluZXIgKi9cbi5jb250ZW50e1xuICBwYWRkaW5nLWxlZnQ6MzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OjMwcHggIWltcG9ydGFudDtcbn1cblxuLyogUmlnaHQgY29sdW1uLCBpbWFnZSBzdHlsZXMgKi9cbi53aG8gaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud2hvIC5jb2wtbGctNntcbiAgcGFkZGluZy1yaWdodDowICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/who-are-we/who-are-we.component.html":
/*!****************************************************************!*\
  !*** ./src/app/home-page/who-are-we/who-are-we.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Who are we container start -->\n<div class=\"container-fluid bg-2\">\n  <!-- Top background image container -->\n</div>\n<!-- Main paragraph container -->\n<div class=\"container-fluid who mb-5\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6 col1\">\n      <div class=\"content\">\n        <h1 class=\"font-weight-bold\"> <span class=\"text-secondary\">WHO</span> ARE WE? </h1>\n        <div class=\"line\"></div>\n        <h4>We are a passionate experienced team of professionals\n          that create innovative applications.</h4>\n        <p class=\"py-3\">\n          We are a team of more than 10 individuals based on different locations and cooperate on weekly Skype meetings by learning and helping each other to create outstanding web applications.\n        </p>\n        <a routerLink=\"/about\">\n          <button class=\"btn btn-custom px-5 ml-8 font-weight-bold\">Read More</button>\n        </a>\n      </div>\n    </div>\n    <!-- Right image container -->\n    <div class=\"col-lg-6\">\n      <img src=\"assets/img/left.png\">\n    </div>\n  </div>\n</div>\n<!-- Who are we container end -->\n"

/***/ }),

/***/ "./src/app/home-page/who-are-we/who-are-we.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home-page/who-are-we/who-are-we.component.ts ***!
  \**************************************************************/
/*! exports provided: WhoAreWeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoAreWeComponent", function() { return WhoAreWeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhoAreWeComponent = /** @class */ (function () {
    function WhoAreWeComponent() {
    }
    WhoAreWeComponent.prototype.ngOnInit = function () {
    };
    WhoAreWeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-who-are-we',
            template: __webpack_require__(/*! ./who-are-we.component.html */ "./src/app/home-page/who-are-we/who-are-we.component.html"),
            styles: [__webpack_require__(/*! ./who-are-we.component.css */ "./src/app/home-page/who-are-we/who-are-we.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WhoAreWeComponent);
    return WhoAreWeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navbar background color */\n.navbar.bg-light {\n  background-color: rgba(250,250,250,.8) !important;\n}\n/* Navbar brand logo styles */\n.navbar-brand {\n  display: flex; /* Display flex in order to align items in the middle */\n  flex-flow: row nowrap;\n  align-items: center;\n}\n.navbar-logo {\n  margin-right: 0.5rem; /* Right margin for some space to the title */\n}\n/* Navbar links styles */\n.navbar-nav {\n  font-size: 22px;\n}\n.navbar-light .navbar-nav .nav-link {\n  color: #444444 !important;\n}\n@media screen and (min-width: 992px) {\n  .navbar {\n    padding: 0.3em 0.8em 0; /* Overide bootstrap padding to make links border to be on bottom */\n  }\n\n  .navbar-light .navbar-nav .nav-link {\n    position: relative; /* Add relative position to add pseudo elements */\n    padding: 0.8em 0;\n    margin: 0 0.5em;\n  }\n\n  /* Add a bottom border */\n  .nav-link::after {\n    position: absolute;\n    content: '';\n    top: 100%;\n    left: 0;\n    width: 100%;\n    border: 2px solid #4D4B86; /* Reconsider the color */\n\n    -webkit-transform: scaleX(0);\n\n            transform: scaleX(0); /* Scale down the x axis to make a nice animation */\n    transition: -webkit-transform 0.25s ease-in;\n    transition: transform 0.25s ease-in;\n    transition: transform 0.25s ease-in, -webkit-transform 0.25s ease-in;\n  }\n\n  .nav-link:hover::after, .nav-link:focus::after, .nav-link.active::after {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); /* Scale up the x axis to make the animation */\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCO0VBQ0Usa0RBQWtEO0NBQ25EO0FBRUQsOEJBQThCO0FBQzlCO0VBQ0UsY0FBYyxDQUFDLHdEQUF3RDtFQUN2RSxzQkFBc0I7RUFDdEIsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxxQkFBcUIsQ0FBQyw4Q0FBOEM7Q0FDckU7QUFFRCx5QkFBeUI7QUFDekI7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0U7SUFDRSx1QkFBdUIsQ0FBQyxvRUFBb0U7R0FDN0Y7O0VBRUQ7SUFDRSxtQkFBbUIsQ0FBQyxrREFBa0Q7SUFDdEUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtHQUNqQjs7RUFFRCx5QkFBeUI7RUFDekI7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLDBCQUEwQixDQUFDLDBCQUEwQjs7SUFFckQsNkJBQXFCOztZQUFyQixxQkFBcUIsQ0FBQyxvREFBb0Q7SUFDMUUsNENBQW9DO0lBQXBDLG9DQUFvQztJQUFwQyxxRUFBb0M7R0FDckM7O0VBRUQ7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCLENBQUMsK0NBQStDO0dBQ3RFO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5hdmJhciBiYWNrZ3JvdW5kIGNvbG9yICovXG4ubmF2YmFyLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsMjUwLDI1MCwuOCkgIWltcG9ydGFudDtcbn1cblxuLyogTmF2YmFyIGJyYW5kIGxvZ28gc3R5bGVzICovXG4ubmF2YmFyLWJyYW5kIHtcbiAgZGlzcGxheTogZmxleDsgLyogRGlzcGxheSBmbGV4IGluIG9yZGVyIHRvIGFsaWduIGl0ZW1zIGluIHRoZSBtaWRkbGUgKi9cbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2YmFyLWxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgLyogUmlnaHQgbWFyZ2luIGZvciBzb21lIHNwYWNlIHRvIHRoZSB0aXRsZSAqL1xufVxuXG4vKiBOYXZiYXIgbGlua3Mgc3R5bGVzICovXG4ubmF2YmFyLW5hdiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogIzQ0NDQ0NCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjhlbSAwOyAvKiBPdmVyaWRlIGJvb3RzdHJhcCBwYWRkaW5nIHRvIG1ha2UgbGlua3MgYm9yZGVyIHRvIGJlIG9uIGJvdHRvbSAqL1xuICB9XG5cbiAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkIHJlbGF0aXZlIHBvc2l0aW9uIHRvIGFkZCBwc2V1ZG8gZWxlbWVudHMgKi9cbiAgICBwYWRkaW5nOiAwLjhlbSAwO1xuICAgIG1hcmdpbjogMCAwLjVlbTtcbiAgfVxuXG4gIC8qIEFkZCBhIGJvdHRvbSBib3JkZXIgKi9cbiAgLm5hdi1saW5rOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0RDRCODY7IC8qIFJlY29uc2lkZXIgdGhlIGNvbG9yICovXG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTsgLyogU2NhbGUgZG93biB0aGUgeCBheGlzIHRvIG1ha2UgYSBuaWNlIGFuaW1hdGlvbiAqL1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluO1xuICB9XG5cbiAgLm5hdi1saW5rOmhvdmVyOjphZnRlciwgLm5hdi1saW5rOmZvY3VzOjphZnRlciwgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpOyAvKiBTY2FsZSB1cCB0aGUgeCBheGlzIHRvIG1ha2UgdGhlIGFuaW1hdGlvbiAqL1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar container start -->\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n  <!-- Amnick Logo -->\n  <a class=\"navbar-brand\" title=\"AMNICK\" routerLink=\"/\">\n    <img src=\"assets/img/Logo.png\" width=\"60\" height=\"60\" class=\"d-inline-block align-top navbar-logo\" alt=\"Amnick logo\">\n    <span class=\"font-weight-bold custom-color custom-font\">AMNICK</span>\n  </a>\n\n  <!-- Menu button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Menu navigation list -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto font-weight-bold\">\n      <li class=\"nav-item px-2\">\n        <!-- routerLinkActive: Set an a class when the link is active -->\n        <a\n          class=\"nav-link\"\n          routerLink=\"/\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\"\n          >Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item  px-2\">\n        <!-- TODO: Add a dropdown menu for the other about pages -->\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n      </li>\n      <li class=\"nav-item  px-2\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n<!-- Navbar container end -->\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/team.service.ts":
/*!*********************************!*\
  !*** ./src/app/team.service.ts ***!
  \*********************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/* Create an object like being the response of the server for testing */
var teamMembers = [
    {
        id: 0,
        name: 'Athanasios',
        lastName: 'Markou',
        fullName: 'Athanasios Markou',
        occupation: 'Front-End Developer',
        avatar: 'https://avatars0.githubusercontent.com/u/35178536?s=460&v=4',
        email: 'thanasismarko@gmail.com',
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/markoboy',
                icon: {
                    type: 'fab',
                    url: 'fa-github',
                    color: '#000'
                }
            },
            {
                title: 'LinkedIn',
                url: 'https://github.com/markoboy',
                icon: {
                    type: 'fab',
                    url: 'fa-linkedin-in',
                    color: '#00d'
                }
            }
        ]
    },
    {
        id: 1,
        name: 'Esly',
        lastName: 'Lescano',
        fullName: 'Esly Lescano',
        occupation: 'Web Developer',
        avatar: 'https://avatars3.githubusercontent.com/u/11892083?s=460&v=4',
        email: 'test@email.com',
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/eslylescano',
                icon: {
                    type: 'fab',
                    url: 'fa-github',
                    color: '#000'
                }
            }
        ]
    },
    {
        id: 2,
        name: 'Jennifer',
        lastName: 'Mwen',
        fullName: 'Jennifer Mwen',
        occupation: 'Web Developer',
        avatar: 'https://avatars2.githubusercontent.com/u/45672207?s=460&v=4',
        email: 'test@email.com',
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/Mwen-A',
                icon: {
                    type: 'fab',
                    url: 'fa-github',
                    color: '#000'
                }
            }
        ]
    }
];
var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        // TODO: Add the url from where we fetch the team data.
        this.url = '';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // For test purpose
    TeamService.prototype.getMembers = function () {
        return teamMembers;
    };
    /* Get all team members and return an observable */
    TeamService.prototype.getTeamMembers = function () {
        return this.http.get(this.url)
            .pipe(
        // Log the results on the console
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('Fetched members: ', _); }), 
        // Handle any error occured
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * Get a team member by their ID
     * @param id The id of the member
     * @returns An observable of type TeamMember
     */
    TeamService.prototype.getTeamMember = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(
        // Log the results on the console
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('Fetched member: ', _); }), 
        // Handle any error occured
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * Update a team member's values
     * @param member The member to update
     */
    TeamService.prototype.updateTeamMember = function (member) {
        return this.http.put(this.url, member, this.httpOptions)
            .pipe(
        // Log the results on the console
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('Updated member: ', _); }), 
        // Handle any error occured
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * Add a new team member
     * @param member The member to add
     */
    TeamService.prototype.addTeamMember = function (member) {
        return this.http.post(this.url, member, this.httpOptions)
            .pipe(
        // Log the results on the console
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('Added member: ', _); }), 
        // Handle any error occured
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * Delete a team member
     * @param member The member or the member id to delete
     */
    TeamService.prototype.deleteTeamMember = function (member) {
        // Get the id of the member and create the url
        var id = typeof member === 'number' ? member : member.id;
        var url = this.url + "/" + id;
        return this.http.delete(url, this.httpOptions)
            .pipe(
        // Log the results on the console
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('Deleted member: ', _); }), 
        // Handle any error occured
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /* Handle errors by loggin on the console */
    TeamService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            /* If a client error occured */
            console.error('An error occured:', error.error.message);
        }
        else {
            /* If a backend error occured */
            console.error("Error code: " + error.status + "\n        Error body: " + error.error);
        }
        /* Return an observable with a user-facing message */
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('An error occured when getting team members; please try again later.');
    };
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    return User;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/AmnIT/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map