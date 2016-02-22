System.register(['angular2/core', "./http.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent(_http) {
                    this._http = _http;
                }
                AppComponent.prototype.onGetPosts = function () {
                    var _this = this;
                    this._http.getPosts().subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
                };
                AppComponent.prototype.onPost = function (title, body, id) {
                    var _this = this;
                    this._http.createPost({ title: title, body: body, id: +id }).subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //template:`
                        //<header>
                        //<ul><li><a [routerLink]="['C1']">1</a></li><li><a [routerLink]="['C2']">2</a></li></ul>
                        //</header>
                        //<router-outlet></router-outlet>`,
                        //directives:[ROUTER_DIRECTIVES]
                        template: "\n    <div>\n    <div class=\"input\">\n    <label for=\"title\">title</label>\n    <input type=\"text\" id=\"title\" #title>\n    </div>\n        <div class=\"input\">\n    <label for=\"body\">body</label>\n    <input type=\"text\" id=\"body\" #body>\n    </div>\n        <div class=\"input\">\n    <label for=\"id\">id</label>\n    <input type=\"text\" id=\"id\" #id>\n    </div>\n    <button (click)=\"onPost(title.value,body.value,id.value)\">post</button>\n    <button (click)=\"onGetPosts()\">get</button>\n    <p>{{response|json}}</p>\n    </div>\n    ",
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uR2V0UG9zdHMiLCJBcHBDb21wb25lbnQub25Qb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxrR0FBa0c7WUFDbEc7Z0JBb0NJQSxzQkFBb0JBLEtBQWlCQTtvQkFBakJDLFVBQUtBLEdBQUxBLEtBQUtBLENBQVlBO2dCQUFFQSxDQUFDQTtnQkFDeENELGlDQUFVQSxHQUFWQTtvQkFBQUUsaUJBRUNBO29CQURHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFFQSxPQUFBQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFDQSxRQUFRQSxFQUF0QkEsQ0FBc0JBLEVBQUNBLFVBQUFBLEtBQUtBLElBQUVBLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hHQSxDQUFDQTtnQkFDREYsNkJBQU1BLEdBQU5BLFVBQU9BLEtBQVlBLEVBQUNBLElBQVdBLEVBQUNBLEVBQVNBO29CQUF6Q0csaUJBR0NBO29CQUZHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFDQSxLQUFLQSxFQUFDQSxLQUFLQSxFQUFDQSxJQUFJQSxFQUFDQSxJQUFJQSxFQUFDQSxFQUFFQSxFQUFDQSxDQUFDQSxFQUFFQSxFQUFDQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFFQSxPQUFBQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFDQSxRQUFRQSxFQUF0QkEsQ0FBc0JBLEVBQ2hHQSxVQUFBQSxLQUFLQSxJQUFFQSxPQUFBQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFsQkEsQ0FBa0JBLENBQUNBLENBQUFBO2dCQUM5QkEsQ0FBQ0E7Z0JBM0NMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFlBQVlBO3dCQUNaQSxVQUFVQTt3QkFDVkEseUZBQXlGQTt3QkFDekZBLFdBQVdBO3dCQUNYQSxtQ0FBbUNBO3dCQUNuQ0EsZ0NBQWdDQTt3QkFDaENBLFFBQVFBLEVBQUNBLGlqQkFrQlJBO3dCQUNEQSxTQUFTQSxFQUFDQSxDQUFDQSwwQkFBV0EsQ0FBQ0E7cUJBQzFCQSxDQUFDQTs7aUNBaUJEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBN0NBLEFBNkNDQSxJQUFBO1lBN0NELHVDQTZDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcclxuaW1wb3J0IHtDMX0gZnJvbSBcIi4vYzEuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QzJ9IGZyb20gXCIuL2MyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcclxuXHJcbi8vcGFzcyBbbXluYW1lXSBmcm9tIHBhcmVudCBjb21wb25lbnQgdG8gY2hpbGQgY29tcG9uZW50LmNoaWxkIGNvbXBvbmVudCByZWNlaXZlIGRhdGEgZnJvbSBbaW5wdXRdXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgLy90ZW1wbGF0ZTpgXHJcbiAgICAvLzxoZWFkZXI+XHJcbiAgICAvLzx1bD48bGk+PGEgW3JvdXRlckxpbmtdPVwiWydDMSddXCI+MTwvYT48L2xpPjxsaT48YSBbcm91dGVyTGlua109XCJbJ0MyJ11cIj4yPC9hPjwvbGk+PC91bD5cclxuICAgIC8vPC9oZWFkZXI+XHJcbiAgICAvLzxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5gLFxyXG4gICAgLy9kaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFU11cclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPnRpdGxlPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAjdGl0bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJib2R5XCI+Ym9keTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImJvZHlcIiAjYm9keT5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgPGxhYmVsIGZvcj1cImlkXCI+aWQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpZFwiICNpZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25Qb3N0KHRpdGxlLnZhbHVlLGJvZHkudmFsdWUsaWQudmFsdWUpXCI+cG9zdDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25HZXRQb3N0cygpXCI+Z2V0PC9idXR0b24+XHJcbiAgICA8cD57e3Jlc3BvbnNlfGpzb259fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczpbSHR0cFNlcnZpY2VdXHJcbn0pXHJcbi8qQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOicvYy0xJyxuYW1lOidDMScsY29tcG9uZW50OkMxLHVzZUFzRGVmYXVsdDp0cnVlfSxcclxuICAgIHtwYXRoOicvYy0yJyxuYW1lOidDMicsY29tcG9uZW50OkMyfVxyXG5dKSovXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIHJlc3BvbnNlOnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cFNlcnZpY2Upe31cclxuICAgIG9uR2V0UG9zdHMoKXtcclxuICAgICAgICB0aGlzLl9odHRwLmdldFBvc3RzKCkuc3Vic2NyaWJlKHJlc3BvbnNlPT50aGlzLnJlc3BvbnNlPXJlc3BvbnNlLGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfVxyXG4gICAgb25Qb3N0KHRpdGxlOnN0cmluZyxib2R5OnN0cmluZyxpZDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2h0dHAuY3JlYXRlUG9zdCh7dGl0bGU6dGl0bGUsYm9keTpib2R5LGlkOitpZH0pLnN1YnNjcmliZShyZXNwb25zZT0+dGhpcy5yZXNwb25zZT1yZXNwb25zZSxcclxuICAgICAgICBlcnJvcj0+Y29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
