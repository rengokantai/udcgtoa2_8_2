import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {C1} from "./c1.component";
import {C2} from "./c2.component";
import {HttpService} from "./http.service";

//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    //template:`
    //<header>
    //<ul><li><a [routerLink]="['C1']">1</a></li><li><a [routerLink]="['C2']">2</a></li></ul>
    //</header>
    //<router-outlet></router-outlet>`,
    //directives:[ROUTER_DIRECTIVES]
    template:`
    <div>
    <div class="input">
    <label for="title">title</label>
    <input type="text" id="title" #title>
    </div>
        <div class="input">
    <label for="body">body</label>
    <input type="text" id="body" #body>
    </div>
        <div class="input">
    <label for="id">id</label>
    <input type="text" id="id" #id>
    </div>
    <button (click)="onPost(title.value,body.value,id.value)">post</button>
    <button (click)="onGetPosts()">get</button>
    <p>{{response|json}}</p>
    </div>
    `,
    providers:[HttpService]
})
/*@RouteConfig([
    {path:'/c-1',name:'C1',component:C1,useAsDefault:true},
    {path:'/c-2',name:'C2',component:C2}
])*/
export class AppComponent {

    response:string;
    constructor(private _http:HttpService){}
    onGetPosts(){
        this._http.getPosts().subscribe(response=>this.response=response,error=>console.log(error));
    }
    onPost(title:string,body:string,id:string){
        this._http.createPost({title:title,body:body,id:+id}).subscribe(response=>this.response=response,
        error=>console.log(error))
    }

}