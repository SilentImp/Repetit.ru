var RegistrationStep0,__bind=function(t,i){return function(){return t.apply(i,arguments)}};RegistrationStep0=function(){function t(){this.formSubmited=__bind(this.formSubmited,this),this.formSubmit=__bind(this.formSubmit,this),this.selectRegion=__bind(this.selectRegion,this),this.hideRegionsList=__bind(this.hideRegionsList,this),this.showRegionsList=__bind(this.showRegionsList,this),this.hideRegistrationPopup=__bind(this.hideRegistrationPopup,this),this.showRegistrationPopup=__bind(this.showRegistrationPopup,this);var t,i,s;if(this.itype="click",$("html").hasClass("touch")&&(this.itype="touchstart"),this.widget=$(".registration-step-0"),1!==this.widget.length)throw{error:"не найден виджет"};this.form_registration=this.widget.find(".registration"),this.form_sms=this.widget.find(".sms"),this.submit=this.form_registration.find("button"),t=this.widget.find("input"),t.on("keyup",this.inputChange),t.on("change",this.inputChange),this.regions_input=$("#reg-region"),this.regions_list=this.widget.find(".regions-list"),this.regions_list_search=this.regions_list.find("input"),this.regions_list_close=this.regions_list.find(".regions-list-close"),$("body").on("click",".regions-list .regions a",this.selectRegion),i=this.widget.find('[for="reg-region"], .change-region'),i.on(this.itype+" focus",this.showRegionsList),this.regions_input.on(this.itype+" focus",this.showRegionsList),this.regions_list_close.on(this.itype,this.hideRegionsList),this.form_registration.h5Validate(),this.form_registration.on("submit",this.formSubmit),this.form_sms.h5Validate(),$("a.register").on(this.itype,this.showRegistrationPopup),this.widget.find(".registration-step-0-close").on(this.itype,this.hideRegistrationPopup),$("html").hasClass("no-cssvhunit")&&(s=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.widget.css({height:s,"line-height":s}),this.regions_list.css({"max-height":.8*s}))}return t.prototype.showRegistrationPopup=function(t){return t.preventDefault(),this.widget.stop().fadeIn(),Modernizr.mq("screen and (max-width:600px)")?$("body>main.page, body>footer, body>header").stop().fadeOut():void 0},t.prototype.hideRegistrationPopup=function(t){return t.preventDefault(),this.widget.stop().fadeOut(),this.form_registration[0].reset(),this.form_sms[0].reset(),this.regions_input.removeClass("changed"),this.regions_list_search.val(""),Modernizr.mq("screen and (max-width:600px)")?$("body>main.page, body>footer, body>header").stop().fadeIn():void 0},t.prototype.showRegionsList=function(t){return t.preventDefault(),this.regions_list.show(),this.regions_list_search[0].focus()},t.prototype.hideRegionsList=function(t){return t.preventDefault(),this.regions_list.hide(),this.submit.focus(),this.regions_list_search.val("")},t.prototype.selectRegion=function(t){return t.preventDefault(),this.regions_input.val(t.currentTarget.getAttribute("data-title")),this.regions_input.addClass("changed"),this.regions_list.hide(),this.submit.focus(),this.regions_list_search.val("")},t.prototype.inputChange=function(t){var i;return i=$(t.currentTarget),0===i.val().trim().length?i.toggleClass("changed",!1):i.toggleClass("changed",!0)},t.prototype.formSubmit=function(t){return this.form_registration.find(".ui-state-error").length>0?void 0:(t.preventDefault(),$.ajax({type:"POST",url:this.form_registration.attr("action"),data:this.form_registration.serialize(),success:this.formSubmited,fail:this.formSubmited,complete:this.formSubmited,dataType:"json"}),this.form_registration[0].reset(),this.regions_input.removeClass("changed"))},t.prototype.formSubmited=function(){return this.form_registration.fadeOut(),this.form_sms.fadeIn()},t}(),$(document).ready(function(){return new RegistrationStep0});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlZ2lzdHJhdGlvblN0ZXAwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLG1CQUFBLE9BQUEsU0FBQSxFQUFBLEdBQUEsTUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsWUFBQSxtQkFBQSxXQUNlLFFBQUEsS0FFWCxLQUFBLGFBQUEsT0FBQSxLQUFBLGFBQUEsTUFBQSxLQUFBLFdBQUEsT0FBQSxLQUFBLFdBQUEsTUFBQSxLQUFBLGFBQUEsT0FBQSxLQUFBLGFBQUEsTUFBQSxLQUFBLGdCQUFBLE9BQUEsS0FBQSxnQkFBQSxNQUFBLEtBQUEsZ0JBQUEsT0FBQSxLQUFBLGdCQUFBLE1BQUEsS0FBQSxzQkFBQSxPQUFBLEtBQUEsc0JBQUEsTUFBQSxLQUFBLHNCQUFBLE9BQUEsS0FBQSxzQkFBQSxLQUFBLElBQUEsR0FBQSxFQUFBLENBTUEsSUFOQSxLQUFDLE1BQVEsUUFDTixFQUFFLFFBQVEsU0FBUyxXQUNwQixLQUFDLE1BQVEsY0FFWCxLQUFDLE9BQVMsRUFBRSx3QkFFUyxJQUFsQixLQUFDLE9BQU8sT0FDVCxNQUFPLE1BQU8sbUJBRWhCLE1BQUMsa0JBQW9CLEtBQUMsT0FBTyxLQUFLLGlCQUNsQyxLQUFDLFNBQVcsS0FBQyxPQUFPLEtBQUssUUFDekIsS0FBQyxPQUFTLEtBQUMsa0JBQWtCLEtBQUssVUFDbEMsRUFBUyxLQUFDLE9BQU8sS0FBSyxTQUN0QixFQUFPLEdBQUcsUUFBUyxLQUFDLGFBQ3BCLEVBQU8sR0FBRyxTQUFVLEtBQUMsYUFFckIsS0FBQyxjQUFnQixFQUFFLGVBQ25CLEtBQUMsYUFBZSxLQUFDLE9BQU8sS0FBSyxpQkFDN0IsS0FBQyxvQkFBc0IsS0FBQyxhQUFhLEtBQUssU0FDMUMsS0FBQyxtQkFBcUIsS0FBQyxhQUFhLEtBQUssdUJBRXpDLEVBQUUsUUFBUSxHQUFHLFFBQVMsMkJBQTRCLEtBQUMsY0FFbkQsRUFBa0IsS0FBQyxPQUFPLEtBQUssc0NBQy9CLEVBQWdCLEdBQUcsS0FBQyxNQUFNLFNBQVUsS0FBQyxpQkFDckMsS0FBQyxjQUFjLEdBQUcsS0FBQyxNQUFNLFNBQVUsS0FBQyxpQkFFcEMsS0FBQyxtQkFBbUIsR0FBRyxLQUFDLE1BQU8sS0FBQyxpQkFFaEMsS0FBQyxrQkFBa0IsYUFDbkIsS0FBQyxrQkFBa0IsR0FBRyxTQUFVLEtBQUMsWUFFakMsS0FBQyxTQUFTLGFBRVYsRUFBRSxjQUFjLEdBQUcsS0FBQyxNQUFPLEtBQUMsdUJBRTVCLEtBQUMsT0FBTyxLQUFLLDhCQUE4QixHQUFHLEtBQUMsTUFDN0MsS0FBQyx1QkFFQSxFQUFFLFFBQVEsU0FBUyxrQkFDcEIsRUFBSyxLQUFLLElBQUksU0FBUyxnQkFBZ0IsYUFDckMsT0FBTyxhQUFlLEdBQ3hCLEtBQUMsT0FBTyxLQUNOLE9BQVUsRUFDVixjQUFlLElBQ2pCLEtBQUMsYUFBYSxLQUNaLGFBQWMsR0FBSSxXQWhEeEIsR0FBQSxVQWtEQSxzQkFBdUIsU0FBQyxHQUd0QixNQUZBLEdBQU0saUJBQ04sS0FBQyxPQUFPLE9BQU8sU0FDWixVQUFVLEdBQUcsZ0NBQ2QsRUFBRSw0Q0FBNEMsT0FBTyxVQUR2RCxRQXJERixFQUFBLFVBd0RBLHNCQUF1QixTQUFDLEdBT3RCLE1BTkEsR0FBTSxpQkFDTixLQUFDLE9BQU8sT0FBTyxVQUNmLEtBQUMsa0JBQWtCLEdBQUcsUUFDdEIsS0FBQyxTQUFTLEdBQUcsUUFDYixLQUFDLGNBQWMsWUFBWSxXQUMzQixLQUFDLG9CQUFvQixJQUFJLElBQ3RCLFVBQVUsR0FBRyxnQ0FDZCxFQUFFLDRDQUE0QyxPQUFPLFNBRHZELFFBL0RGLEVBQUEsVUFrRUEsZ0JBQWlCLFNBQUMsU0FDaEIsR0FBTSxpQkFDTixLQUFDLGFBQWEsT0FDZCxLQUFDLG9CQUFvQixHQUFHLFNBckUxQixFQUFBLFVBdUVBLGdCQUFpQixTQUFDLFNBQ2hCLEdBQU0saUJBQ04sS0FBQyxhQUFhLE9BQ2QsS0FBQyxPQUFPLFFBQ1IsS0FBQyxvQkFBb0IsSUFBSSxLQTNFM0IsRUFBQSxVQTZFQSxhQUFjLFNBQUMsU0FDYixHQUFNLGlCQUNOLEtBQUMsY0FBYyxJQUFJLEVBQU0sY0FBYyxhQUFhLGVBQ3BELEtBQUMsY0FBYyxTQUFTLFdBQ3hCLEtBQUMsYUFBYSxPQUNkLEtBQUMsT0FBTyxRQUNSLEtBQUMsb0JBQW9CLElBQUksS0FuRjNCLEVBQUEsVUFxRkEsWUFBYSxTQUFDLEdBQ1osR0FBQSxFQUNBLE9BREEsR0FBUSxFQUFFLEVBQU0sZUFDZ0IsSUFBN0IsRUFBTSxNQUFNLE9BQU8sT0FDcEIsRUFBTSxZQUFZLFdBQVcsR0FFN0IsRUFBTSxZQUFZLFdBQVcsSUExRmpDLEVBQUEsVUE0RkEsV0FBWSxTQUFDLEdBQ1gsTUFBRyxNQUFDLGtCQUFrQixLQUFLLG1CQUFtQixPQUFPLEVBQXJELFFBRUEsRUFBTSxpQkFDTixFQUFFLE1BQ0EsS0FBTSxPQUNOLElBQUssS0FBQyxrQkFBa0IsS0FBSyxVQUM3QixLQUFNLEtBQUMsa0JBQWtCLFlBQ3pCLFFBQVMsS0FBQyxhQUNWLEtBQU0sS0FBQyxhQUNQLFNBQVUsS0FBQyxhQUNYLFNBQVUsU0FDWixLQUFDLGtCQUFrQixHQUFHLFFBQ3RCLEtBQUMsY0FBYyxZQUFZLGFBekc3QixFQUFBLFVBMkdBLGFBQWMsaUJBQ1osTUFBQyxrQkFBa0IsVUFDbkIsS0FBQyxTQUFTLGVBOUdkLEVBZ0hFLFVBQVUsTUFBTSxpQkFDWixJQUFBIiwiZmlsZSI6IlJlZ2lzdHJhdGlvblN0ZXAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVnaXN0cmF0aW9uU3RlcDBcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgICBAaXR5cGUgPSAnY2xpY2snXG4gICAgaWYgJCgnaHRtbCcpLmhhc0NsYXNzKCd0b3VjaCcpXG4gICAgICBAaXR5cGUgPSAndG91Y2hzdGFydCdcblxuICAgIEB3aWRnZXQgPSAkICcucmVnaXN0cmF0aW9uLXN0ZXAtMCdcblxuICAgIGlmIEB3aWRnZXQubGVuZ3RoICE9IDFcbiAgICAgIHRocm93IHtlcnJvcjogJ9C90LUg0L3QsNC50LTQtdC9INCy0LjQtNC20LXRgid9XG4gICAgXG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uID0gQHdpZGdldC5maW5kICcucmVnaXN0cmF0aW9uJ1xuICAgIEBmb3JtX3NtcyA9IEB3aWRnZXQuZmluZCAnLnNtcydcbiAgICBAc3VibWl0ID0gQGZvcm1fcmVnaXN0cmF0aW9uLmZpbmQgJ2J1dHRvbidcbiAgICBpbnB1dHMgPSBAd2lkZ2V0LmZpbmQgJ2lucHV0J1xuICAgIGlucHV0cy5vbiAna2V5dXAnLCBAaW5wdXRDaGFuZ2VcbiAgICBpbnB1dHMub24gJ2NoYW5nZScsIEBpbnB1dENoYW5nZVxuICAgIFxuICAgIEByZWdpb25zX2lucHV0ID0gJCAnI3JlZy1yZWdpb24nXG4gICAgQHJlZ2lvbnNfbGlzdCA9IEB3aWRnZXQuZmluZCAnLnJlZ2lvbnMtbGlzdCdcbiAgICBAcmVnaW9uc19saXN0X3NlYXJjaCA9IEByZWdpb25zX2xpc3QuZmluZCAnaW5wdXQnXG4gICAgQHJlZ2lvbnNfbGlzdF9jbG9zZSA9IEByZWdpb25zX2xpc3QuZmluZCAnLnJlZ2lvbnMtbGlzdC1jbG9zZSdcblxuICAgICQoJ2JvZHknKS5vbiAnY2xpY2snLCAnLnJlZ2lvbnMtbGlzdCAucmVnaW9ucyBhJywgQHNlbGVjdFJlZ2lvblxuXG4gICAgcmVnaW9uX2NvbnRyb2xzID0gQHdpZGdldC5maW5kICdbZm9yPVwicmVnLXJlZ2lvblwiXSwgLmNoYW5nZS1yZWdpb24nXG4gICAgcmVnaW9uX2NvbnRyb2xzLm9uIEBpdHlwZSsnIGZvY3VzJywgQHNob3dSZWdpb25zTGlzdFxuICAgIEByZWdpb25zX2lucHV0Lm9uIEBpdHlwZSsnIGZvY3VzJywgQHNob3dSZWdpb25zTGlzdFxuXG4gICAgQHJlZ2lvbnNfbGlzdF9jbG9zZS5vbiBAaXR5cGUsIEBoaWRlUmVnaW9uc0xpc3RcblxuICAgIEBmb3JtX3JlZ2lzdHJhdGlvbi5oNVZhbGlkYXRlKClcbiAgICBAZm9ybV9yZWdpc3RyYXRpb24ub24gJ3N1Ym1pdCcsIEBmb3JtU3VibWl0XG5cbiAgICBAZm9ybV9zbXMuaDVWYWxpZGF0ZSgpXG5cbiAgICAkKCdhLnJlZ2lzdGVyJykub24gQGl0eXBlLCBAc2hvd1JlZ2lzdHJhdGlvblBvcHVwXG5cbiAgICBAd2lkZ2V0LmZpbmQoJy5yZWdpc3RyYXRpb24tc3RlcC0wLWNsb3NlJykub24gQGl0eXBlLFxuICAgICAgQGhpZGVSZWdpc3RyYXRpb25Qb3B1cFxuXG4gICAgaWYgJCgnaHRtbCcpLmhhc0NsYXNzICduby1jc3N2aHVuaXQnXG4gICAgICB2aCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxuICAgICAgQHdpZGdldC5jc3NcbiAgICAgICAgJ2hlaWdodCc6IHZoXG4gICAgICAgICdsaW5lLWhlaWdodCc6IHZoXG4gICAgICBAcmVnaW9uc19saXN0LmNzc1xuICAgICAgICAnbWF4LWhlaWdodCc6IDAuOCp2aFxuXG4gIHNob3dSZWdpc3RyYXRpb25Qb3B1cDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEB3aWRnZXQuc3RvcCgpLmZhZGVJbigpXG4gICAgaWYgTW9kZXJuaXpyLm1xKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KVwiKVxuICAgICAgJCgnYm9keT5tYWluLnBhZ2UsIGJvZHk+Zm9vdGVyLCBib2R5PmhlYWRlcicpLnN0b3AoKS5mYWRlT3V0KClcblxuICBoaWRlUmVnaXN0cmF0aW9uUG9wdXA6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAd2lkZ2V0LnN0b3AoKS5mYWRlT3V0KClcbiAgICBAZm9ybV9yZWdpc3RyYXRpb25bMF0ucmVzZXQoKVxuICAgIEBmb3JtX3Ntc1swXS5yZXNldCgpXG4gICAgQHJlZ2lvbnNfaW5wdXQucmVtb3ZlQ2xhc3MgJ2NoYW5nZWQnXG4gICAgQHJlZ2lvbnNfbGlzdF9zZWFyY2gudmFsICcnXG4gICAgaWYgTW9kZXJuaXpyLm1xKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KVwiKVxuICAgICAgJCgnYm9keT5tYWluLnBhZ2UsIGJvZHk+Zm9vdGVyLCBib2R5PmhlYWRlcicpLnN0b3AoKS5mYWRlSW4oKVxuXG4gIHNob3dSZWdpb25zTGlzdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEByZWdpb25zX2xpc3Quc2hvdygpXG4gICAgQHJlZ2lvbnNfbGlzdF9zZWFyY2hbMF0uZm9jdXMoKVxuXG4gIGhpZGVSZWdpb25zTGlzdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEByZWdpb25zX2xpc3QuaGlkZSgpXG4gICAgQHN1Ym1pdC5mb2N1cygpXG4gICAgQHJlZ2lvbnNfbGlzdF9zZWFyY2gudmFsICcnXG5cbiAgc2VsZWN0UmVnaW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHJlZ2lvbnNfaW5wdXQudmFsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJylcbiAgICBAcmVnaW9uc19pbnB1dC5hZGRDbGFzcyAnY2hhbmdlZCdcbiAgICBAcmVnaW9uc19saXN0LmhpZGUoKVxuICAgIEBzdWJtaXQuZm9jdXMoKVxuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoLnZhbCAnJ1xuXG4gIGlucHV0Q2hhbmdlOiAoZXZlbnQpLT5cbiAgICBpbnB1dCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGlmIGlucHV0LnZhbCgpLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgaW5wdXQudG9nZ2xlQ2xhc3MgJ2NoYW5nZWQnLCBmYWxzZVxuICAgIGVsc2VcbiAgICAgIGlucHV0LnRvZ2dsZUNsYXNzICdjaGFuZ2VkJywgdHJ1ZVxuXG4gIGZvcm1TdWJtaXQ6IChldmVudCk9PlxuICAgIGlmIEBmb3JtX3JlZ2lzdHJhdGlvbi5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICQuYWpheFxuICAgICAgdHlwZTogXCJQT1NUXCJcbiAgICAgIHVybDogQGZvcm1fcmVnaXN0cmF0aW9uLmF0dHIoJ2FjdGlvbicpXG4gICAgICBkYXRhOiBAZm9ybV9yZWdpc3RyYXRpb24uc2VyaWFsaXplKClcbiAgICAgIHN1Y2Nlc3M6IEBmb3JtU3VibWl0ZWRcbiAgICAgIGZhaWw6IEBmb3JtU3VibWl0ZWRcbiAgICAgIGNvbXBsZXRlOiBAZm9ybVN1Ym1pdGVkXG4gICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uWzBdLnJlc2V0KClcbiAgICBAcmVnaW9uc19pbnB1dC5yZW1vdmVDbGFzcyAnY2hhbmdlZCdcblxuICBmb3JtU3VibWl0ZWQ6IChkYXRhKT0+XG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uLmZhZGVPdXQoKVxuICAgIEBmb3JtX3Ntcy5mYWRlSW4oKVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUmVnaXN0cmF0aW9uU3RlcDAoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==