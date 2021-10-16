(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/netflix-angular/netflix-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 0, consts: [[1, "navbar"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/images/netflix-logo.png", "alt", "", 1, "netflix-logo"], [1, "navbar-menu"], ["routerLink", "/", 1, "navbar-item"], ["routerLink", "/tv-shows", 1, "navbar-item"], ["routerLink", "/movies", 1, "navbar-item"], ["href", "#", 1, "navbar-right-item"], ["href", "https://github.com/stantanasi"], ["src", "assets/images/profile-pic.jpg", "alt", "avatar", 1, "navbar-profile-pic"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enfants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "card_giftcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".netflix-logo[_ngcontent-%COMP%] {\n    width: 110px;\n    height: auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 12px;\n    z-index: 100;\n    top: 0;\n    position: fixed;\n    background-color: var(--background-color);\n    width: 100%;\n    align-items: center;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n    margin-right: 64px;\n}\n\n.navbar-menu[_ngcontent-%COMP%] {\n    display: flex;\n    margin-right: auto;\n}\n\n.navbar-item[_ngcontent-%COMP%] {\n    margin-right: 32px;\n    align-self: center;\n    font-size: 18px;\n    text-align: center;\n}\n\n.navbar-right-item[_ngcontent-%COMP%] {\n    margin-right: 24px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n    vertical-align: middle;\n}\n\n.navbar-profile-pic[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixNQUFNO0lBQ04sZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldGZsaXgtbG9nbyB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbi1yaWdodDogNjRweDtcbn1cblxuLm5hdmJhci1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm5hdmJhci1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXItcmlnaHQtaXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uYXZiYXItcHJvZmlsZS1waWMge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "5dWe":
/*!**************************************************!*\
  !*** ./src/app/services/the-movie-db.service.ts ***!
  \**************************************************/
/*! exports provided: TheMovieDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheMovieDbService", function() { return TheMovieDbService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TheMovieDbService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.themoviedb.org/3';
    }
    //
    // Movie
    //
    getMovie(id) {
        return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getMovieCredits(id) {
        return this.http.get(`${this.apiUrl}/movie/${id}/credits?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getMoviesRecommendations(id) {
        return this.http.get(`${this.apiUrl}/movie/${id}/recommendations?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    //
    // Movies
    //
    getPopularMovies() {
        return this.http.get(`${this.apiUrl}/movie/popular?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getTopRatedMovies() {
        return this.http.get(`${this.apiUrl}/movie/top_rated?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getUpcomingMovies() {
        return this.http.get(`${this.apiUrl}/movie/upcoming?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    //
    // TV Show
    //
    getTvShow(id) {
        return this.http.get(`${this.apiUrl}/tv/${id}?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getTvShowCredits(id) {
        return this.http.get(`${this.apiUrl}/tv/${id}/credits?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getTvShowSeason(id, season_number) {
        return this.http.get(`${this.apiUrl}/tv/${id}/season/${season_number}?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getTvShowsRecommendations(id) {
        return this.http.get(`${this.apiUrl}/tv/${id}/recommendations?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    //
    // TV Shows
    //
    getPopularTvShows() {
        return this.http.get(`${this.apiUrl}/tv/popular?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getTopRatedTvShows() {
        return this.http.get(`${this.apiUrl}/tv/top_rated?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
    getOnAirTvShows() {
        return this.http.get(`${this.apiUrl}/tv/on_the_air?api_key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiKey}`);
    }
}
TheMovieDbService.ɵfac = function TheMovieDbService_Factory(t) { return new (t || TheMovieDbService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TheMovieDbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TheMovieDbService, factory: TheMovieDbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
    production: false,
    apiKey: '966bc16006cd2667daf628d997d83afb',
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_the_movie_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/the-movie-db.service */ "5dWe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HomeComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tvShow_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/tv-shows/", tvShow_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", tvShow_r6.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", tvShow_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tvShow_r6.name);
} }
function HomeComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", movie_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", movie_r7.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", movie_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r7.title);
} }
function HomeComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tvShow_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/tv-shows/", tvShow_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", tvShow_r8.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", tvShow_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tvShow_r8.name);
} }
function HomeComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tvShow_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/tv-shows/", tvShow_r9.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", tvShow_r9.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", tvShow_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tvShow_r9.name);
} }
function HomeComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", movie_r10.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", movie_r10.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", movie_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r10.title);
} }
function HomeComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", movie_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/original/", movie_r11.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", movie_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r11.title);
} }
class HomeComponent {
    constructor(theMovieDbService) {
        this.theMovieDbService = theMovieDbService;
        this.popularTvShows = [];
        this.popularMovies = [];
        this.onAirTvShows = [];
        this.topRatedTvShows = [];
        this.topRatedMovies = [];
        this.upcomingMovies = [];
    }
    ngOnInit() {
        this.theMovieDbService.getPopularTvShows().subscribe(reponse => this.popularTvShows = reponse.results);
        this.theMovieDbService.getPopularMovies().subscribe(reponse => this.popularMovies = reponse.results);
        this.theMovieDbService.getOnAirTvShows().subscribe(reponse => this.onAirTvShows = reponse.results);
        this.theMovieDbService.getTopRatedTvShows().subscribe(reponse => this.topRatedTvShows = reponse.results);
        this.theMovieDbService.getTopRatedMovies().subscribe(reponse => this.topRatedMovies = reponse.results);
        this.theMovieDbService.getUpcomingMovies().subscribe(reponse => this.upcomingMovies = reponse.results);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_the_movie_db_service__WEBPACK_IMPORTED_MODULE_1__["TheMovieDbService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 41, vars: 12, consts: [[1, "header-container"], [1, "header-info-container"], [1, "info-title"], [1, "info-synopsis"], [1, "btn", "btn-rect", 3, "routerLink"], [1, "header-img-container"], [1, "header-img"], [1, "collection"], [1, "collection-name"], [1, "horizontal-row"], ["class", "horizontal-row-item", 4, "ngFor", "ngForOf"], [1, "horizontal-row-item"], [3, "routerLink"], [1, "tv-show-img", 3, "src", "alt"], [1, "row-item-title"], [1, "movie-img", 3, "src", "alt"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WATCH NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Popular tv-shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_li_15_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Popular movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_li_20_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TV On The Air");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_li_25_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Top rated tv-shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_li_30_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Top rated movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_li_35_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Upcoming movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HomeComponent_li_40_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.popularTvShows[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.popularTvShows[0].overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/tv-shows/", ctx.popularTvShows[0].id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(\"https://image.tmdb.org/t/p/original/", ctx.popularTvShows[0].backdrop_path, "\");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.popularTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.popularMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.onAirTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topRatedTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topRatedMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomingMovies);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".header-container[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    position: relative;\n    width: 100%;\n    height: 500px;\n}\n\n.header-info-container[_ngcontent-%COMP%] {\n    position: absolute;\n    justify-content: center;\n    width: 45%;\n    padding: 64px;\n}\n\n.header-info-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 30px;\n    font-weight: 700;\n    color: #fff\n}\n\n.info-synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #fff;\n    max-width: 100%;\n}\n\n.header-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center center;\n}\n\n.header-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(0.25turn, #181818, #18181888, #18181800),\n    linear-gradient(#181818, #18181800, #18181800, #18181800, #181818);\n}\n\n.collection[_ngcontent-%COMP%] {\n    position: relative;\n    top: -30px;\n    padding: 0 35px;\n    padding-bottom: 25px;\n}\n\n.collection-name[_ngcontent-%COMP%] {\n    padding-bottom: 14px;\n    font-size: 22px;\n}\n\n.horizontal-row[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: scroll;\n    scrollbar-width: none;\n}\n\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 12px;\n}\n\n.horizontal-row-item[_ngcontent-%COMP%] {\n    margin-right: 12px;\n}\n\n.horizontal-row-item[_ngcontent-%COMP%]   .tv-show-img[_ngcontent-%COMP%] {\n    width: auto;\n    height: 200px;\n}\n\n.horizontal-row-item[_ngcontent-%COMP%]   .movie-img[_ngcontent-%COMP%] {\n    width: auto;\n    height: 160px;\n}\n\n.row-item-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1o7c0VBQ2tFO0FBQ3RFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmhlYWRlci1pbmZvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgcGFkZGluZzogNjRweDtcbn1cblxuLmhlYWRlci1pbmZvLWNvbnRhaW5lciA+ICoge1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmluZm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5pbmZvLXN5bm9wc2lzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItaW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmhlYWRlci1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4yNXR1cm4sICMxODE4MTgsICMxODE4MTg4OCwgIzE4MTgxODAwKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoIzE4MTgxOCwgIzE4MTgxODAwLCAjMTgxODE4MDAsICMxODE4MTgwMCwgIzE4MTgxOCk7XG59XG5cbi5jb2xsZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMzBweDtcbiAgICBwYWRkaW5nOiAwIDM1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi5jb2xsZWN0aW9uLW5hbWUge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmhvcml6b250YWwtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEycHg7XG59XG5cbi5ob3Jpem9udGFsLXJvdy1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5ob3Jpem9udGFsLXJvdy1pdGVtIC50di1zaG93LWltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmhvcml6b250YWwtcm93LWl0ZW0gLm1vdmllLWltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLnJvdy1pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59Il19 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 59, vars: 0, consts: [[1, "footer"], [1, "footer-cols"], ["href", "#"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Questions? Call 1-866-579-7172");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Investor Relations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ways To Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Corporate Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Netflix Originals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Terms Of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Redeem Gift Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Speed Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Media Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Buy Gift Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Cookie Preferences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Legal Notices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\n    padding: 0 32px 20px 32px;\n    background: linear-gradient(var(--background-color), #000000);\n}\n\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #999;\n\tfont-size: 0.9rem;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n\tmargin-bottom: 1.5rem;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-cols[_ngcontent-%COMP%] {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-gap: 2rem;\n}\n\n.footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tline-height: 1.9;\n}\n\n.footer[_ngcontent-%COMP%]   .lang-select[_ngcontent-%COMP%] {\n\tmargin-top: 2rem;\n\tcolor: #999;\n\tbackground-color: #000;\n\tbackground-image: none;\n\tborder: 1px solid #333;\n\tpadding: 1rem 1.2rem;\n\tborder-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDZEQUE2RDtBQUNqRTs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgcGFkZGluZzogMCAzMnB4IDIwcHggMzJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tYmFja2dyb3VuZC1jb2xvciksICMwMDAwMDApO1xufVxuXG4uZm9vdGVyIGEge1xuXHRjb2xvcjogIzk5OTtcblx0Zm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5mb290ZXIgcCB7XG5cdG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZvb3RlciAuZm9vdGVyLWNvbHMge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuXHRncmlkLWdhcDogMnJlbTtcbn1cblxuLmZvb3RlciBsaSB7XG5cdGxpbmUtaGVpZ2h0OiAxLjk7XG59XG5cbi5mb290ZXIgLmxhbmctc2VsZWN0IHtcblx0bWFyZ2luLXRvcDogMnJlbTtcblx0Y29sb3I6ICM5OTk7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG5cdHBhZGRpbmc6IDFyZW0gMS4ycmVtO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _components_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tv-show/tv-show.component */ "oo8L");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_7__["MovieComponent"],
        _components_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_8__["TvShowComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]] }); })();


/***/ }),

/***/ "oo8L":
/*!*********************************************************!*\
  !*** ./src/app/components/tv-show/tv-show.component.ts ***!
  \*********************************************************/
/*! exports provided: TvShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowComponent", function() { return TvShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_the_movie_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/the-movie-db.service */ "5dWe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TvShowComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cast_r4.name, ", ");
} }
function TvShowComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", season_r5.season_number)("selected", season_r5.season_number == ctx_r1.showSeason);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Season ", season_r5.season_number, "");
} }
function TvShowComponent_div_38_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const episode_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", episode_r9.still_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", episode_r9.episode_number, ". ", episode_r9.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r9.overview);
} }
const _c0 = function (a0) { return { "season-active": a0 }; };
function TvShowComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvShowComponent_div_38_div_7_Template, 6, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, season_r6.season_number == ctx_r2.showSeason));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Release: ", season_r6.air_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](season_r6.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", season_r6.episodes);
} }
function TvShowComponent_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommendedTvShow_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/tv-shows/", recommendedTvShow_r10.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommendedTvShow_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", recommendedTvShow_r10.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TvShowComponent {
    constructor(route, theMovieDbService) {
        this.route = route;
        this.theMovieDbService = theMovieDbService;
        this.seasons = [];
        this.recommendations = [];
        this.showSeason = 1;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.theMovieDbService.getTvShow(params.id).subscribe(tvShow => {
                var _a;
                this.tvShow = tvShow;
                this.seasons = [];
                for (let seasonNumber = 1; seasonNumber <= ((_a = tvShow.number_of_seasons) !== null && _a !== void 0 ? _a : 0); seasonNumber++) {
                    this.theMovieDbService.getTvShowSeason(params.id, seasonNumber).subscribe(season => {
                        this.seasons.push(season);
                        this.seasons.sort((a, b) => a.season_number - b.season_number);
                    });
                }
            });
            this.theMovieDbService.getTvShowCredits(params.id)
                .subscribe(credits => this.credits = credits);
            this.theMovieDbService.getTvShowsRecommendations(params.id)
                .subscribe(recommendations => this.recommendations = recommendations.results);
        });
    }
    selectChangeHandler(event) {
        this.showSeason = event.target.value;
    }
}
TvShowComponent.ɵfac = function TvShowComponent_Factory(t) { return new (t || TvShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_the_movie_db_service__WEBPACK_IMPORTED_MODULE_2__["TheMovieDbService"])); };
TvShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvShowComponent, selectors: [["app-tv-show"]], decls: 45, vars: 18, consts: [[1, "header-container"], [1, "header-info-container"], [1, "info-title"], [1, "info-metadata"], [1, "info-metadata-item"], [1, "info-metadata-divider"], [1, "info-synopsis"], [1, "info-cast"], [1, "info-cast-label"], ["class", "info-cast-item", 4, "ngFor", "ngForOf"], [1, "header-img-container"], [1, "header-img"], [1, "section"], [1, "section-header"], [1, "section-header-text"], [1, "section-subheader-text"], [1, "season-selector-container"], [1, "season-selector", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "seasons-container"], ["class", "season", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "link-container"], ["class", "title-link", 3, "routerLink", "title", 4, "ngFor", "ngForOf"], [1, "info-cast-item"], [3, "value", "selected"], [1, "season", 3, "ngClass"], [1, "season-metadata"], [1, "season-release"], [1, "season-synopsis"], [1, "episodes-container"], ["class", "episode", 4, "ngFor", "ngForOf"], [1, "episode"], ["alt", "", 1, "episode-thumbnail", 3, "src"], [1, "episode-title"], [1, "episode-synopsis"], [1, "title-link", 3, "routerLink", "title"], ["alt", "", 1, "title-link-img", 3, "src"]], template: function TvShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "With: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TvShowComponent_span_24_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TvShowComponent_Template_select_change_35_listener($event) { return ctx.selectChangeHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TvShowComponent_option_36_Template, 2, 3, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TvShowComponent_div_38_Template, 8, 6, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Recommendations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TvShowComponent_a_44_Template, 2, 3, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvShow.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvShow.first_air_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvShow.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.tvShow.number_of_seasons, " seasons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.tvShow.vote_average, " / 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvShow.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 14, ctx.credits.cast, 0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(\"https://image.tmdb.org/t/p/original/", ctx.tvShow.backdrop_path, "\");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvShow.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommendations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".header-container[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    position: relative;\n    width: 100%;\n    height: 650px;\n}\n\n.header-info-container[_ngcontent-%COMP%] {\n    position: absolute;\n    justify-content: center;\n    width: 50%;\n    min-width: 500px;\n    max-width: 800px;\n    padding: 64px;\n}\n\n.header-info-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 16px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 30px;\n    font-weight: 700;\n    color: #fff\n}\n\n.info-metadata-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 18px;\n    font-weight: 500;\n    color: #a3a3a3;\n    display: inline-block;\n}\n\n.info-metadata-divider[_ngcontent-%COMP%] {\n    color: #a3a3a3;\n    margin: 0 9px;\n}\n\n.info-synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #fff;\n    max-width: 100%;\n}\n\n.info-cast-label[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #a3a3a3;\n    margin-right: 5px;\n}\n\n.info-cast-item[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #fff;\n}\n\n.header-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center center;\n}\n\n.header-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(0.25turn, #181818, #181818af, #18181800),\n    linear-gradient(#181818, #18181860, #18181800, #18181860, #181818);\n}\n\n.section[_ngcontent-%COMP%] {\n    padding: 0 64px;\n}\n\n.section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n}\n\n.section-header[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.section-header-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 34px;\n    font-weight: 400;\n    color: #fff;\n}\n\n.section-header[_ngcontent-%COMP%]   .section-subheader-text[_ngcontent-%COMP%] {\n    color: #a3a3a3;\n    white-space: nowrap;\n}\n\n.section-header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child) {\n    border-left: 1px solid #a3a3a3;\n    margin-left: 9px;\n    padding-left: 15px;\n}\n\n.link-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 33.333% 33.333% 33.333%;\n}\n\n.title-link[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 6px;\n}\n\n.title-link-img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.season[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.season[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-bottom: 16px;\n}\n\n.season-selector[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    line-height: 27px;\n    font-weight: 500;\n    color: #fff;\n    background: var(--background-color);\n    padding: 7px 30px 7px 0;\n    outline-offset: 3px;\n}\n\n.season.season-active[_ngcontent-%COMP%] {\n    display: block;\n}\n\n.season-metadata[_ngcontent-%COMP%]   .season-release-year[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #fff;\n    font-weight: 600;\n}\n\n.season-metadata[_ngcontent-%COMP%]   .season-synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #a3a3a3;\n    margin: 5px 0 20px;\n}\n\n.episodes-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 33.333% 33.333% 33.333%;\n}\n\n.episode[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 6px;\n}\n\n.episode-thumbnail[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.episode-title[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0;\n    font-size: 16px;\n    font-weight: 700;\n}\n\n.episode-synopsis[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 400;\n    color: #a3a3a3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJ0di1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaO3NFQUNrRTtBQUN0RTs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUN0SEE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoidHYtc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY1MHB4O1xufVxuXG4uaGVhZGVyLWluZm8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgcGFkZGluZzogNjRweDtcbn1cblxuLmhlYWRlci1pbmZvLWNvbnRhaW5lciA+ICoge1xuICAgIG1hcmdpbjogMTZweDtcbn1cblxuLmluZm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5pbmZvLW1ldGFkYXRhLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjYTNhM2EzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmluZm8tbWV0YWRhdGEtZGl2aWRlciB7XG4gICAgY29sb3I6ICNhM2EzYTM7XG4gICAgbWFyZ2luOiAwIDlweDtcbn1cblxuLmluZm8tc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmluZm8tY2FzdC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNhM2EzYTM7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pbmZvLWNhc3QtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXItaW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmhlYWRlci1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4yNXR1cm4sICMxODE4MTgsICMxODE4MThhZiwgIzE4MTgxODAwKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoIzE4MTgxOCwgIzE4MTgxODYwLCAjMTgxODE4MDAsICMxODE4MTg2MCwgIzE4MTgxOCk7XG59XG5cblxuXG4uc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMCA2NHB4O1xufVxuXG4uc2VjdGlvbiA+ICoge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uc2VjdGlvbi1oZWFkZXI+aDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlY3Rpb24taGVhZGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIgLnNlY3Rpb24tc3ViaGVhZGVyLXRleHQge1xuICAgIGNvbG9yOiAjYTNhM2EzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWN0aW9uLWhlYWRlcj46bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2EzYTNhMztcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuXG4ubGluay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zMzMlIDMzLjMzMyUgMzMuMzMzJTtcbn1cblxuLnRpdGxlLWxpbmsge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDZweDtcbn1cblxuLnRpdGxlLWxpbmstaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCJAaW1wb3J0IHVybCguLi9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuY3NzKTtcblxuXG5cbi5zZWFzb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWFzb24gPiAqIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnNlYXNvbi1zZWxlY3RvciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBwYWRkaW5nOiA3cHggMzBweCA3cHggMDtcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4uc2Vhc29uLnNlYXNvbi1hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2Vhc29uLW1ldGFkYXRhIC5zZWFzb24tcmVsZWFzZS15ZWFyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2Vhc29uLW1ldGFkYXRhIC5zZWFzb24tc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjYTNhM2EzO1xuICAgIG1hcmdpbjogNXB4IDAgMjBweDtcbn1cblxuLmVwaXNvZGVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzLjMzMyUgMzMuMzMzJSAzMy4zMzMlO1xufVxuXG4uZXBpc29kZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNnB4O1xufVxuXG4uZXBpc29kZS10aHVtYm5haWwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZXBpc29kZS10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmVwaXNvZGUtc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjYTNhM2EzO1xufSJdfQ== */"] });


/***/ }),

/***/ "qO9b":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_the_movie_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/the-movie-db.service */ "5dWe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MovieComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cast_r2.name, ", ");
} }
function MovieComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recommendedMovie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movies/", recommendedMovie_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", recommendedMovie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", recommendedMovie_r3.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MovieComponent {
    constructor(route, theMovieDbService) {
        this.route = route;
        this.theMovieDbService = theMovieDbService;
        this.recommendations = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.theMovieDbService.getMovie(params.id)
                .subscribe(movie => this.movie = movie);
            this.theMovieDbService.getMovieCredits(params.id)
                .subscribe(credits => this.credits = credits);
            this.theMovieDbService.getMoviesRecommendations(params.id)
                .subscribe(recommendations => this.recommendations = recommendations.results);
        });
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_the_movie_db_service__WEBPACK_IMPORTED_MODULE_2__["TheMovieDbService"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 34, vars: 15, consts: [[1, "header-container"], [1, "header-info-container"], [1, "info-title"], [1, "info-metadata"], [1, "info-metadata-item"], [1, "info-metadata-divider"], [1, "info-synopsis"], [1, "info-cast"], [1, "info-cast-label"], ["class", "info-cast-item", 4, "ngFor", "ngForOf"], [1, "header-img-container"], [1, "header-img"], [1, "section"], [1, "section-header"], [1, "section-header-text"], [1, "link-container"], ["class", "title-link", 3, "routerLink", "title", 4, "ngFor", "ngForOf"], [1, "info-cast-item"], [1, "title-link", 3, "routerLink", "title"], ["alt", "", 1, "title-link-img", 3, "src"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "With: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MovieComponent_span_24_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Recommendations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MovieComponent_a_33_Template, 2, 3, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.release_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.movie.runtime, " min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.movie.vote_average, " / 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](25, 11, ctx.credits.cast, 0, 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(\"https://image.tmdb.org/t/p/original/", ctx.movie.backdrop_path, "\");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommendations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".header-container[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    position: relative;\n    width: 100%;\n    height: 650px;\n}\n\n.header-info-container[_ngcontent-%COMP%] {\n    position: absolute;\n    justify-content: center;\n    width: 50%;\n    min-width: 500px;\n    max-width: 800px;\n    padding: 64px;\n}\n\n.header-info-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 16px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 30px;\n    font-weight: 700;\n    color: #fff\n}\n\n.info-metadata-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 18px;\n    font-weight: 500;\n    color: #a3a3a3;\n    display: inline-block;\n}\n\n.info-metadata-divider[_ngcontent-%COMP%] {\n    color: #a3a3a3;\n    margin: 0 9px;\n}\n\n.info-synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #fff;\n    max-width: 100%;\n}\n\n.info-cast-label[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #a3a3a3;\n    margin-right: 5px;\n}\n\n.info-cast-item[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    color: #fff;\n}\n\n.header-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center center;\n}\n\n.header-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(0.25turn, #181818, #181818af, #18181800),\n    linear-gradient(#181818, #18181860, #18181800, #18181860, #181818);\n}\n\n.section[_ngcontent-%COMP%] {\n    padding: 0 64px;\n}\n\n.section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n}\n\n.section-header[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.section-header-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 34px;\n    font-weight: 400;\n    color: #fff;\n}\n\n.section-header[_ngcontent-%COMP%]   .section-subheader-text[_ngcontent-%COMP%] {\n    color: #a3a3a3;\n    white-space: nowrap;\n}\n\n.section-header[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child) {\n    border-left: 1px solid #a3a3a3;\n    margin-left: 9px;\n    padding-left: 15px;\n}\n\n.link-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 33.333% 33.333% 33.333%;\n}\n\n.title-link[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 6px;\n}\n\n.title-link-img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaO3NFQUNrRTtBQUN0RTs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJtb3ZpZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY1MHB4O1xufVxuXG4uaGVhZGVyLWluZm8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgcGFkZGluZzogNjRweDtcbn1cblxuLmhlYWRlci1pbmZvLWNvbnRhaW5lciA+ICoge1xuICAgIG1hcmdpbjogMTZweDtcbn1cblxuLmluZm8tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5pbmZvLW1ldGFkYXRhLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjYTNhM2EzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmluZm8tbWV0YWRhdGEtZGl2aWRlciB7XG4gICAgY29sb3I6ICNhM2EzYTM7XG4gICAgbWFyZ2luOiAwIDlweDtcbn1cblxuLmluZm8tc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmluZm8tY2FzdC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNhM2EzYTM7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pbmZvLWNhc3QtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXItaW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmhlYWRlci1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC4yNXR1cm4sICMxODE4MTgsICMxODE4MThhZiwgIzE4MTgxODAwKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoIzE4MTgxOCwgIzE4MTgxODYwLCAjMTgxODE4MDAsICMxODE4MTg2MCwgIzE4MTgxOCk7XG59XG5cblxuXG4uc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMCA2NHB4O1xufVxuXG4uc2VjdGlvbiA+ICoge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uc2VjdGlvbi1oZWFkZXI+aDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlY3Rpb24taGVhZGVyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIgLnNlY3Rpb24tc3ViaGVhZGVyLXRleHQge1xuICAgIGNvbG9yOiAjYTNhM2EzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWN0aW9uLWhlYWRlcj46bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2EzYTNhMztcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuXG4ubGluay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zMzMlIDMzLjMzMyUgMzMuMzMzJTtcbn1cblxuLnRpdGxlLWxpbmsge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDZweDtcbn1cblxuLnRpdGxlLWxpbmstaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movie/movie.component */ "qO9b");
/* harmony import */ var _components_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tv-show/tv-show.component */ "oo8L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', pathMatch: 'full', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'movies/:id', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"] },
    { path: 'tv-shows/:id', component: _components_tv_show_tv_show_component__WEBPACK_IMPORTED_MODULE_3__["TvShowComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map