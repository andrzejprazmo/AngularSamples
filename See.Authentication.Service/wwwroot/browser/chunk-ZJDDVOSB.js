import{c as me}from"./chunk-G6XNAQK2.js";import{a as ee,d as pe,j as ge}from"./chunk-V2JAHVB4.js";import{$ as de,Ba as y,Ea as ce,Fa as C,Ha as k,Ia as T,Ja as u,Ka as d,La as Q,Ma as he,N as O,Na as A,O as N,Oa as f,P as X,Pa as G,Q as x,Sa as fe,T as g,V as m,X as ue,Y as P,Z as c,_ as Y,a as h,b as _,l as ae,qa as K,r as S,sa as J,ua as v,va as a,x as le,ya as b}from"./chunk-2DWBKVJN.js";var Me=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(J),a(K))},e.\u0275dir=c({type:e});let t=e;return t})(),Je=(()=>{let e=class e extends Me{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=de(e)))(o||e)}})(),e.\u0275dir=c({type:e,features:[y]});let t=e;return t})(),Ee=new g("NgValueAccessor");var Qe={provide:Ee,useExisting:O(()=>q),multi:!0};function et(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var tt=new g("CompositionEventMode"),q=(()=>{let e=class e extends Me{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(J),a(K),a(tt,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&A("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[G([Qe]),y]});let t=e;return t})();function p(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Fe(t){return t!=null&&typeof t.length=="number"}var we=new g("NgValidators"),Ie=new g("NgAsyncValidators"),it=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,F=class{static min(e){return nt(e)}static max(e){return rt(e)}static required(e){return ot(e)}static requiredTrue(e){return st(e)}static email(e){return at(e)}static minLength(e){return lt(e)}static maxLength(e){return ut(e)}static pattern(e){return dt(e)}static nullValidator(e){return Se(e)}static compose(e){return Te(e)}static composeAsync(e){return je(e)}};function nt(t){return e=>{if(p(e.value)||p(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function rt(t){return e=>{if(p(e.value)||p(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function ot(t){return p(t.value)?{required:!0}:null}function st(t){return t.value===!0?null:{required:!0}}function at(t){return p(t.value)||it.test(t.value)?null:{email:!0}}function lt(t){return e=>p(e.value)||!Fe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function ut(t){return e=>Fe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function dt(t){if(!t)return Se;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(p(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Se(t){return null}function Oe(t){return t!=null}function Ne(t){return he(t)?ae(t):t}function xe(t){let e={};return t.forEach(n=>{e=n!=null?h(h({},e),n):e}),Object.keys(e).length===0?null:e}function Pe(t,e){return e.map(n=>n(t))}function ct(t){return!t.validate}function ke(t){return t.map(e=>ct(e)?e:n=>e.validate(n))}function Te(t){if(!t)return null;let e=t.filter(Oe);return e.length==0?null:function(n){return xe(Pe(n,e))}}function Ge(t){return t!=null?Te(ke(t)):null}function je(t){if(!t)return null;let e=t.filter(Oe);return e.length==0?null:function(n){let i=Pe(n,e).map(Ne);return le(i).pipe(S(xe))}}function Ue(t){return t!=null?je(ke(t)):null}function ve(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Be(t){return t._rawValidators}function Re(t){return t._rawAsyncValidators}function te(t){return t?Array.isArray(t)?t:[t]:[]}function U(t,e){return Array.isArray(t)?t.includes(e):t===e}function ye(t,e){let n=te(e);return te(t).forEach(r=>{U(n,r)||n.push(r)}),n}function _e(t,e){return te(e).filter(n=>!U(t,n))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ge(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},D=class extends B{get formDirective(){return null}get path(){return null}},w=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ht={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ri=_(h({},ht),{"[class.ng-submitted]":"isSubmitted"}),He=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(w,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&C("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})(),Le=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(D,10))},e.\u0275dir=c({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&C("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[y]});let t=e;return t})();var M="VALID",j="INVALID",V="PENDING",E="DISABLED";function $e(t){return(z(t)?t.validators:t)||null}function ft(t){return Array.isArray(t)?Ge(t):t||null}function We(t,e){return(z(e)?e.asyncValidators:t)||null}function pt(t){return Array.isArray(t)?Ue(t):t||null}function z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function gt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new N(1e3,"");if(!i[n])throw new N(1001,"")}function mt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var H=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===j}get pending(){return this.status==V}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ye(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(_e(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(i=>{i.disable(_(h({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=M,this._forEachChild(i=>{i.enable(_(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let n=Ne(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(j)?j:M}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ft(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}},L=class extends H{constructor(e,n,i){super($e(n),We(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){mt(this,!0,e),Object.keys(e).forEach(i=>{gt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var qe=new g("CallSetDisabledState",{providedIn:"root",factory:()=>ie}),ie="always";function vt(t,e){return[...e.path,t]}function Ce(t,e,n=ie){ne(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),_t(t,e),Vt(t,e),Ct(t,e),yt(t,e)}function Ve(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),W(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function $(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function yt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ne(t,e){let n=Be(t);e.validator!==null?t.setValidators(ve(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Re(t);e.asyncValidator!==null?t.setAsyncValidators(ve(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();$(e._rawValidators,r),$(e._rawAsyncValidators,r)}function W(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Be(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=Re(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return $(e._rawValidators,i),$(e._rawAsyncValidators,i),n}function _t(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ze(t,e)})}function Ct(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ze(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ze(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Vt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Dt(t,e){t==null,ne(t,e)}function bt(t,e){return W(t,e)}function At(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Mt(t){return Object.getPrototypeOf(t.constructor)===Je}function Et(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ft(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===q?n=o:Mt(o)?i=o:r=o}),r||i||n||null}function wt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function De(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function be(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Z=class extends H{constructor(e=null,n,i){super($e(n),We(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(be(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){De(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){De(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){be(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var It=t=>t instanceof Z;var Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var St=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=x({});let t=e;return t})();var Xe=new g("NgModelWithFormControlWarning");var Ot={provide:D,useExisting:O(()=>re)},re=(()=>{let e=class e extends D{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new b,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Ce(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Ve(i.control||null,i,!1),wt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Et(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Ve(r||null,i),It(o)&&(Ce(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Dt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&bt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ne(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(we,10),a(Ie,10),a(qe,8))},e.\u0275dir=c({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&A("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[G([Ot]),y,Y]});let t=e;return t})();var Nt={provide:w,useExisting:O(()=>oe)},oe=(()=>{let e=class e extends w{set isDisabled(i){}constructor(i,r,o,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new b,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Ft(this,s)}ngOnChanges(i){this._added||this._setUpControl(),At(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return vt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(D,13),a(we,10),a(Ie,10),a(Ee,10),a(Xe,8))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[G([Nt]),y,Y]});let t=e;return t})();var xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=x({imports:[St]});let t=e;return t})();var Ye=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Xe,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:qe,useValue:i.callSetDisabledState??ie}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=x({imports:[xt]});let t=e;return t})();var Ke=(()=>{let e=class e{constructor(){this.authService=m(me),this.http=m(pe)}buildLoginForm(i){return new L({login:new Z(i.login,[F.required]),password:new Z(i.password,[F.required])})}authenticate(i){return this.http.post("api/auth/sign-in",i).pipe(S(r=>(this.authService.saveToken(r.token),!0)))}logout(){this.authService.removeToken()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function kt(t,e){t&1&&(u(0,"div",16),f(1," Invalid credentials "),d())}function Tt(t,e){t&1&&(u(0,"div",17),f(1,"Username is required"),d())}function Gt(t,e){t&1&&(u(0,"div",17),f(1,"Password is required"),d())}var _i=(()=>{let e=class e{constructor(){this.loginService=m(Ke),this.router=m(ge),this.loginForm=this.loginService.buildLoginForm({login:"",password:""})}ngOnInit(){this.loginService.logout()}onSubmit(){if(this.loginForm.invalid){this.loginForm.markAllAsTouched();return}this.loginService.authenticate(this.mapLoginFormToModel(this.loginForm)).subscribe({next:i=>{if(i){this.router.navigate(["/dashboard/home"]);return}this.loginForm.setErrors({invalidCredentials:!0})},error:i=>{this.loginForm.setErrors({invalidCredentials:!0})}})}mapLoginFormToModel(i){return{login:i.controls.login.value||"",password:i.controls.password.value||""}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ue({type:e,selectors:[["app-login"]],standalone:!0,features:[fe],decls:21,vars:8,consts:[[1,"d-flex","justify-content-center"],[1,"card","w-50"],[1,"card-header"],[1,"form","card-body",3,"formGroup","ngSubmit"],[1,"card-body"],["class","alert alert-danger"],[1,"form-group","mb-2"],["for","username"],["type","text","id","login","formControlName","login",1,"form-control"],["class","invalid-feedback"],[1,"form-group"],["for","password"],["type","password","id","password","formControlName","password",1,"form-control"],[1,"card-footer"],[1,"d-flex"],["type","submit",1,"btn","btn-primary","ms-auto"],[1,"alert","alert-danger"],[1,"invalid-feedback"]],template:function(r,o){if(r&1&&(u(0,"div",0)(1,"div",1)(2,"div",2),f(3,"Login"),d(),u(4,"form",3),A("ngSubmit",function(){return o.onSubmit()}),u(5,"div",4),k(6,kt,2,0,"div",5),u(7,"div",6)(8,"label",7),f(9,"Username:"),d(),Q(10,"input",8),k(11,Tt,2,0,"div",9),d(),u(12,"div",10)(13,"label",11),f(14,"Password:"),d(),Q(15,"input",12),k(16,Gt,2,0,"div",9),d()(),u(17,"div",13)(18,"div",14)(19,"button",15),f(20,"Login"),d()()()()()()),r&2){let s,l,I,se;v(4),ce("formGroup",o.loginForm),v(2),T(6,o.loginForm.hasError("invalidCredentials")?6:-1),v(4),C("is-invalid",((s=o.loginForm.get("login"))==null?null:s.touched)&&((s=o.loginForm.get("login"))==null?null:s.invalid)),v(1),T(11,(l=o.loginForm.get("login"))!=null&&l.hasError("required")?11:-1),v(4),C("is-invalid",((I=o.loginForm.get("password"))==null?null:I.touched)&&((I=o.loginForm.get("password"))==null?null:I.invalid)),v(1),T(16,(se=o.loginForm.get("password"))!=null&&se.hasError("required")?16:-1)}},dependencies:[Ye,Ze,q,He,Le,re,oe]});let t=e;return t})();export{_i as default};
