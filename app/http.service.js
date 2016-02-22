System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (http_2_1) {
                http_2 = http_2_1;
            }],
        execute: function() {
            HttpService = (function () {
                function HttpService(_http) {
                    this._http = _http;
                }
                HttpService.prototype.getPosts = function () {
                    return this._http.get('http://jsonplaceholder.typicode.com/posts').map(function (res) { return res.json(); });
                };
                HttpService.prototype.createPost = function (post) {
                    var body = JSON.stringify(post);
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-urlencoded');
                    return this._http.post('http://jsonplaceholder.typicode.com/posts', body, { headers: headers }).map(function (res) { return res.json(); });
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            })();
            exports_1("HttpService", HttpService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6WyJIdHRwU2VydmljZSIsIkh0dHBTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiSHR0cFNlcnZpY2UuZ2V0UG9zdHMiLCJIdHRwU2VydmljZS5jcmVhdGVQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBRUlBLHFCQUFvQkEsS0FBVUE7b0JBQVZDLFVBQUtBLEdBQUxBLEtBQUtBLENBQUtBO2dCQUFFQSxDQUFDQTtnQkFFakNELDhCQUFRQSxHQUFSQTtvQkFDSUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkNBQTJDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFFQSxPQUFBQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFWQSxDQUFVQSxDQUFDQSxDQUFDQTtnQkFDNUZBLENBQUNBO2dCQUVERixnQ0FBVUEsR0FBVkEsVUFBV0EsSUFBeUNBO29CQUNoREcsSUFBTUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xDQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxFQUFFQSxDQUFDQTtvQkFDNUJBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGNBQWNBLEVBQUNBLDhCQUE4QkEsQ0FBQ0EsQ0FBQ0E7b0JBQzlEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSwyQ0FBMkNBLEVBQUNBLElBQUlBLEVBQUNBLEVBQUNBLE9BQU9BLEVBQUNBLE9BQU9BLEVBQUNBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUVBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBLENBQUFBO2dCQUNuSEEsQ0FBQ0E7Z0JBYkxIO29CQUFDQSxpQkFBVUEsRUFBRUE7O2dDQWNaQTtnQkFBREEsa0JBQUNBO1lBQURBLENBZEEsQUFjQ0EsSUFBQTtZQWRELHFDQWNDLENBQUEiLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzIyLlxyXG4gKi9cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwfWZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7SGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNle1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXt9XHJcblxyXG4gICAgZ2V0UG9zdHMoKTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpLm1hcChyZXM9PnJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBvc3QocG9zdDp7dGl0bGU6c3RyaW5nLGJvZHk6c3RyaW5nLGlkOm51bWJlcn0pOk9ic2VydmFibGU8YW55PntcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9zdCk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCdhcHBsaWNhdGlvbi94LXd3dy11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLGJvZHkse2hlYWRlcnM6aGVhZGVyc30pLm1hcChyZXM9PnJlcy5qc29uKCkpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
