(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7Kdv":function(t,n,e){"use strict";e.r(n),e.d(n,"CreateTransactionPageModule",(function(){return g}));var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),s=e("mrSG"),c=e("fXoL"),b=e("5dVO"),u=e("lGQG");function l(t,n){1&t&&(c.Kb(0,"div"),c.jc(1,"Username Penerima harus diisi guys :("),c.Jb())}function d(t,n){if(1&t&&(c.Kb(0,"div",13),c.hc(1,l,2,0,"div",14),c.Jb()),2&t){const t=c.Ub();c.xb(1),c.ac("ngIf",t.f.receiver.errors.required)}}function m(t,n){1&t&&(c.Kb(0,"div"),c.jc(1,"Jumlah BTC harus diisi guys :("),c.Jb())}function f(t,n){if(1&t&&(c.Kb(0,"div",13),c.hc(1,m,2,0,"div",14),c.Jb()),2&t){const t=c.Ub();c.xb(1),c.ac("ngIf",t.f.amount.errors.required)}}const h=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o,r){this.loading=t,this.route=n,this.toastController=e,this.formBuilder=i,this.router=o,this.authService=r,this.submitted=!1;const a=JSON.parse(localStorage.getItem("indodax-laravel-user"));this.userData=a}ngOnInit(){this.transactionForm=this.formBuilder.group({receiver:[null,[o.j.required]],amount:[null,[o.j.required]]})}get f(){return this.transactionForm.controls}onSubmit(){this.submitted=!0,this.transactionForm.invalid||(console.log(this.transactionForm.value),this.loading.present(),this.authService.PostRequest(this.transactionForm.value,"transaction").subscribe(t=>{if(console.log(t),201===t.status){let t={replaceUrl:!0,state:{refreshPage:1}};this.loading.dismiss(),this.router.navigate(["/dashboard"],t)}else t.error&&(this.loading.dismiss(),this.presentToast(t.error,"bottom",5e3))}))}presentToast(t,n,e){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:t,duration:e,position:n})).present()}))}}return t.\u0275fac=function(n){return new(n||t)(c.Hb(b.a),c.Hb(a.a),c.Hb(r.P),c.Hb(o.a),c.Hb(a.g),c.Hb(u.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-create-transaction"]],decls:27,vars:3,consts:[["color","primary"],["slot","start"],["defaultHref","/dashboard","routerDirection","back","icon","chevron-back-outline"],[1,"ion-padding"],[3,"formGroup","ngSubmit"],[1,"marginTop"],["position","stacked"],["color","danger"],["type","text","placeholder","Masukan Username Penerima","formControlName","receiver"],["class","invalid-feedback","style","margin-top:-10px;",4,"ngIf"],["type","number","placeholder","Contoh : 1000","formControlName","amount"],[1,"ion-text-center",2,"margin-top","40px"],["expand","block","type","submit",2,"height","40px"],[1,"invalid-feedback",2,"margin-top","-10px"],[4,"ngIf"]],template:function(t,n){1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar",0),c.Kb(2,"ion-buttons",1),c.Ib(3,"ion-back-button",2),c.Jb(),c.Kb(4,"ion-title"),c.jc(5,"Transfer"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content",3),c.Kb(7,"form",4),c.Sb("ngSubmit",(function(){return n.onSubmit()})),c.Kb(8,"ion-item",5),c.Kb(9,"ion-label",6),c.jc(10,"Username Penerima "),c.Kb(11,"ion-text",7),c.jc(12,"*"),c.Jb(),c.Jb(),c.Ib(13,"ion-input",8),c.Jb(),c.hc(14,d,2,1,"div",9),c.Kb(15,"ion-item",5),c.Kb(16,"ion-label",6),c.jc(17,"Jumlah BTC "),c.Kb(18,"ion-text",7),c.jc(19,"* "),c.Kb(20,"sup"),c.jc(21,"Bilangan Bulat"),c.Jb(),c.Jb(),c.Jb(),c.Ib(22,"ion-input",10),c.Jb(),c.hc(23,f,2,1,"div",9),c.Kb(24,"div",11),c.Kb(25,"ion-button",12),c.jc(26,"Submit"),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(7),c.ac("formGroup",n.transactionForm),c.xb(7),c.ac("ngIf",n.submitted&&n.f.receiver.errors),c.xb(9),c.ac("ngIf",n.submitted&&n.f.amount.errors))},directives:[r.q,r.G,r.g,r.c,r.d,r.F,r.m,o.k,o.h,o.c,r.u,r.v,r.E,r.t,r.O,o.g,o.b,i.j,r.L,r.f],styles:[".marginTop[_ngcontent-%COMP%]{margin:20px 0}.invalid-feedback[_ngcontent-%COMP%]{color:red;font-size:13px}[_nghost-%COMP%]   .item-interactive.ion-valid[_ngcontent-%COMP%]{--highlight-background:#3dc2ff!important}ion-button[_ngcontent-%COMP%]{text-transform:none}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(h)],a.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[i.b,o.d,o.i,r.H,p]]}),t})()}}]);