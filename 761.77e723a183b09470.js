"use strict";(self.webpackChunkfastkart_ssr=self.webpackChunkfastkart_ssr||[]).push([[761],{6753:(N,P,s)=>{s.d(P,{Q:()=>g});var t=s(9212),c=s(6814);const _=a=>({"active disabled":a});function u(a,m){if(1&a){const e=t.EpF();t.TgZ(0,"li",2)(1,"a",6),t.NdJ("click",function(){const o=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.pageSet(o))}),t._uU(2),t.qZA()()}if(2&a){const e=m.$implicit,r=t.oxw(2);t.Q6J("ngClass",t.VKq(2,_,r.paginate.currentPage==e)),t.xp6(2),t.Oqu(e)}}const b=a=>({disabled:a});function n(a,m){if(1&a){const e=t.EpF();t.TgZ(0,"ul",1)(1,"li",2)(2,"a",3),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.pageSet(i.paginate.currentPage-1))}),t._UZ(3,"i",4),t.qZA()(),t.YNc(4,u,3,4,"li",5),t.TgZ(5,"li",2)(6,"a",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.pageSet(i.paginate.currentPage+1))}),t._UZ(7,"i",7),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(),t.Q6J("ngClass",t.VKq(3,b,1===e.paginate.currentPage)),t.xp6(3),t.Q6J("ngForOf",e.paginate.pages),t.xp6(),t.Q6J("ngClass",t.VKq(5,b,e.paginate.currentPage==e.paginate.totalPages))}}let g=(()=>{class a{constructor(){this.setPage=new t.vpe}ngOnChanges(e){this.total=e.total?e.total.currentValue:this.total,this.currentPage=e.currentPage?e.currentPage.currentValue:this.currentPage,this.pageSize=e.pageSize?e.pageSize.currentValue:this.pageSize,this.paginate=this.getPager(this.total,this.currentPage,this.pageSize)}pageSet(e){this.setPage.emit(e)}getPager(e,r,i){let p,f,o=Number(Math.ceil(Number(e)/Number(i)));Number(r)<1?r=1:Number(r)>Number(o)&&(r=Number(o)),Number(o)<=Number(3)?(p=1,f=Number(o)):Number(r)<=Number(Math.floor(Number(3)/2))?(p=1,f=Number(3)):Number(r)>=Number(o)-Number(Math.floor(Number(3)/2))?(p=Number(o)-Number(3)+1,f=Number(o)):(p=Number(r)-Number(Math.floor(Number(3)/2)),f=Number(r)+Number(Math.floor(Number(3)/2)));let d=(Number(r)-1)*Number(i),h=Math.min(Number(d)+Number(i)-1,Number(e)-1),C=Array.from(Array(Number(f)+1-Number(p)).keys()).map(E=>Number(p)+Number(E));return{totalItems:e,currentPage:r,pageSize:i,totalPages:o,startPage:p,endPage:f,startIndex:d,endIndex:h,pages:C}}static#t=this.\u0275fac=function(r){return new(r||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-pagination"]],inputs:{total:"total",currentPage:"currentPage",pageSize:"pageSize"},outputs:{setPage:"setPage"},features:[t.TTD],decls:1,vars:1,consts:[["class","pagination justify-content-center",4,"ngIf"],[1,"pagination","justify-content-center"],[1,"page-item",3,"ngClass"],["href","javascript:void(0)","tabindex","-1","aria-disabled","true",1,"page-link",3,"click"],[1,"ri-arrow-left-s-line"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["href","javascript:void(0)",1,"page-link",3,"click"],[1,"ri-arrow-right-s-line"]],template:function(r,i){1&r&&t.YNc(0,n,8,7,"ul",0),2&r&&t.Q6J("ngIf",i.paginate.pages&&i.paginate.pages.length)},dependencies:[c.mk,c.sg,c.O5]})}return a})()},9046:(N,P,s)=>{s.d(P,{K:()=>b});var t=s(4112),c=s(2181),_=s(9212),u=s(6814);let b=(()=>{class n{constructor(a,m){this.viewportScroller=a,this.router=m}canActivate(){return this.router.events.pipe((0,c.h)(a=>a instanceof t.Xs)).subscribe(a=>{this.router.url.includes("collections")?this.viewportScroller.scrollToPosition([150,150]):this.viewportScroller.scrollToPosition([0,0])}),!0}static#t=this.\u0275fac=function(m){return new(m||n)(_.LFG(u.EM),_.LFG(t.F0))};static#e=this.\u0275prov=_.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},5710:(N,P,s)=>{s.d(P,{K:()=>_});var t=s(9212),c=s(6593);let _=(()=>{class u{constructor(n){this.sanitizer=n}transform(n,g){if(!n)return"";let a=n.substring(0,g);return n.length>g&&(a+="..."),this.containsHtmlTags(n)?this.sanitizer.bypassSecurityTrustHtml(a):a}containsHtmlTags(n){return/<[a-z][\s\S]*>/i.test(n)}static#t=this.\u0275fac=function(g){return new(g||u)(t.Y36(c.H7,16))};static#e=this.\u0275pipe=t.Yjl({name:"summary",type:u,pure:!0})}return u})()}}]);