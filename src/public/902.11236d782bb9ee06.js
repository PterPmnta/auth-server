"use strict";(self.webpackChunkauth_client=self.webpackChunkauth_client||[]).push([[902],{2902:(p,i,e)=>{e.r(i),e.d(i,{ProtectedModule:()=>s});var l=e(6895),c=e(4154),t=e(8256),d=e(8115);class r{constructor(o,u){this.router=o,this.authService=u}get usuario(){return this.authService.usuario}logOut(){this.router.navigateByUrl("/auth/login"),this.authService.logOut()}}r.\u0275fac=function(o){return new(o||r)(t.Y36(c.F0),t.Y36(d.e))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-dashboard"]],decls:12,vars:3,consts:[[3,"click"]],template:function(o,u){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Dashboard"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"p"),t._uU(4,"Esta pagina solo puede ser visible si esta autenticado"),t.qZA(),t.TgZ(5,"span"),t._uU(6,"User"),t.qZA(),t.TgZ(7,"pre"),t._uU(8),t.ALo(9,"json"),t.qZA(),t.TgZ(10,"button",0),t.NdJ("click",function(){return u.logOut()}),t._uU(11,"Logout"),t.qZA()),2&o&&(t.xp6(8),t.hij(" ",t.lcZ(9,1,u.usuario)," "))},dependencies:[l.Ts],styles:["*[_ngcontent-%COMP%]{margin:15px}"]});const h=[{path:"",children:[{path:"",component:r},{path:"**",redirectTo:""}]}];class n{}n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(h),c.Bz]});class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[l.ez,n]})}}]);