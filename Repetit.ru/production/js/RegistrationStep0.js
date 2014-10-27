var RegistrationStep0,__bind=function(t,i){return function(){return t.apply(i,arguments)}};RegistrationStep0=function(){function t(){this.formSubmited=__bind(this.formSubmited,this),this.formSubmit=__bind(this.formSubmit,this),this.selectRegion=__bind(this.selectRegion,this),this.hideRegionsList=__bind(this.hideRegionsList,this),this.showRegionsList=__bind(this.showRegionsList,this),this.hideRegistrationPopup=__bind(this.hideRegistrationPopup,this),this.showRegistrationPopup=__bind(this.showRegistrationPopup,this);var t,i,s;if(this.widget=$(".registration-step-0"),1!==this.widget.length)throw{error:"не найден виджет"};this.form_registration=this.widget.find(".registration"),this.form_sms=this.widget.find(".sms"),this.submit=this.form_registration.find("button"),t=this.widget.find("input"),t.on("keyup",this.inputChange),t.on("change",this.inputChange),this.regions_input=$("#reg-region"),this.regions_list=this.widget.find(".regions-list"),this.regions_list_search=this.regions_list.find("input"),this.regions_list_close=this.regions_list.find(".regions-list-close"),$("body").on("click",".regions-list .regions a",this.selectRegion),i=this.widget.find('[for="reg-region"], .change-region'),i.on("click focus",this.showRegionsList),this.regions_input.on("click focus",this.showRegionsList),this.regions_list_close.on("click",this.hideRegionsList),this.form_registration.h5Validate(),this.form_registration.on("submit",this.formSubmit),this.form_sms.h5Validate(),$("a.register").on("click",this.showRegistrationPopup),this.widget.find(".registration-step-0-close").on("click",this.hideRegistrationPopup),$("html").hasClass("no-cssvhunit")&&(s=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.widget.css({height:s,"line-height":s}),this.regions_list.css({"max-height":.8*s}))}return t.prototype.showRegistrationPopup=function(t){return t.preventDefault(),this.widget.stop().fadeIn()},t.prototype.hideRegistrationPopup=function(t){return t.preventDefault(),this.widget.stop().fadeOut(),this.form_registration[0].reset(),this.form_sms[0].reset(),this.regions_input.removeClass("changed"),this.regions_list_search.val("")},t.prototype.showRegionsList=function(t){return t.preventDefault(),this.regions_list.stop().fadeIn(),this.regions_list_search[0].focus()},t.prototype.hideRegionsList=function(t){return t.preventDefault(),this.regions_list.stop().fadeOut(),this.submit.focus(),this.regions_list_search.val("")},t.prototype.selectRegion=function(t){return t.preventDefault(),this.regions_input.val(t.currentTarget.getAttribute("data-title")),this.regions_input.addClass("changed"),this.regions_list.stop().fadeOut(),this.submit.focus(),this.regions_list_search.val("")},t.prototype.inputChange=function(t){var i;return i=$(t.currentTarget),0===i.val().trim().length?i.toggleClass("changed",!1):i.toggleClass("changed",!0)},t.prototype.formSubmit=function(t){return this.form_registration.find(".ui-state-error").length>0?void 0:(t.preventDefault(),$.ajax({type:"POST",url:this.form_registration.attr("action"),data:this.form_registration.serialize(),success:this.formSubmited,fail:this.formSubmited,complete:this.formSubmited,dataType:"json"}),this.form_registration[0].reset(),this.regions_input.removeClass("changed"))},t.prototype.formSubmited=function(){return this.form_registration.fadeOut(),this.form_sms.fadeIn()},t}(),$(document).ready(function(){return new RegistrationStep0});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlZ2lzdHJhdGlvblN0ZXAwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLG1CQUFBLE9BQUEsU0FBQSxFQUFBLEdBQUEsTUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsWUFBQSxtQkFBQSxXQUNlLFFBQUEsS0FDWCxLQUFBLGFBQUEsT0FBQSxLQUFBLGFBQUEsTUFBQSxLQUFBLFdBQUEsT0FBQSxLQUFBLFdBQUEsTUFBQSxLQUFBLGFBQUEsT0FBQSxLQUFBLGFBQUEsTUFBQSxLQUFBLGdCQUFBLE9BQUEsS0FBQSxnQkFBQSxNQUFBLEtBQUEsZ0JBQUEsT0FBQSxLQUFBLGdCQUFBLE1BQUEsS0FBQSxzQkFBQSxPQUFBLEtBQUEsc0JBQUEsTUFBQSxLQUFBLHNCQUFBLE9BQUEsS0FBQSxzQkFBQSxLQUFBLElBQUEsR0FBQSxFQUFBLENBRUEsSUFGQSxLQUFDLE9BQVMsRUFBRSx3QkFFUyxJQUFsQixLQUFDLE9BQU8sT0FDVCxNQUFPLE1BQU8sbUJBRWhCLE1BQUMsa0JBQW9CLEtBQUMsT0FBTyxLQUFLLGlCQUNsQyxLQUFDLFNBQVcsS0FBQyxPQUFPLEtBQUssUUFDekIsS0FBQyxPQUFTLEtBQUMsa0JBQWtCLEtBQUssVUFDbEMsRUFBUyxLQUFDLE9BQU8sS0FBSyxTQUN0QixFQUFPLEdBQUcsUUFBUyxLQUFDLGFBQ3BCLEVBQU8sR0FBRyxTQUFVLEtBQUMsYUFFckIsS0FBQyxjQUFnQixFQUFFLGVBQ25CLEtBQUMsYUFBZSxLQUFDLE9BQU8sS0FBSyxpQkFDN0IsS0FBQyxvQkFBc0IsS0FBQyxhQUFhLEtBQUssU0FDMUMsS0FBQyxtQkFBcUIsS0FBQyxhQUFhLEtBQUssdUJBRXpDLEVBQUUsUUFBUSxHQUFHLFFBQVMsMkJBQTRCLEtBQUMsY0FFbkQsRUFBa0IsS0FBQyxPQUFPLEtBQUssc0NBQy9CLEVBQWdCLEdBQUcsY0FBZSxLQUFDLGlCQUNuQyxLQUFDLGNBQWMsR0FBRyxjQUFlLEtBQUMsaUJBRWxDLEtBQUMsbUJBQW1CLEdBQUcsUUFBUyxLQUFDLGlCQUVqQyxLQUFDLGtCQUFrQixhQUNuQixLQUFDLGtCQUFrQixHQUFHLFNBQVUsS0FBQyxZQUVqQyxLQUFDLFNBQVMsYUFFVixFQUFFLGNBQWMsR0FBRyxRQUFTLEtBQUMsdUJBRTdCLEtBQUMsT0FBTyxLQUFLLDhCQUE4QixHQUFHLFFBQzVDLEtBQUMsdUJBRUEsRUFBRSxRQUFRLFNBQVMsa0JBQ3BCLEVBQUssS0FBSyxJQUFJLFNBQVMsZ0JBQWdCLGFBQ3JDLE9BQU8sYUFBZSxHQUN4QixLQUFDLE9BQU8sS0FDTixPQUFVLEVBQ1YsY0FBZSxJQUNqQixLQUFDLGFBQWEsS0FDWixhQUFjLEdBQUksV0EzQ3hCLEdBQUEsVUE2Q0Esc0JBQXVCLFNBQUMsU0FDdEIsR0FBTSxpQkFDTixLQUFDLE9BQU8sT0FBTyxVQS9DakIsRUFBQSxVQWlEQSxzQkFBdUIsU0FBQyxTQUN0QixHQUFNLGlCQUNOLEtBQUMsT0FBTyxPQUFPLFVBQ2YsS0FBQyxrQkFBa0IsR0FBRyxRQUN0QixLQUFDLFNBQVMsR0FBRyxRQUNiLEtBQUMsY0FBYyxZQUFZLFdBQzNCLEtBQUMsb0JBQW9CLElBQUksS0F2RDNCLEVBQUEsVUF5REEsZ0JBQWlCLFNBQUMsU0FDaEIsR0FBTSxpQkFDTixLQUFDLGFBQWEsT0FBTyxTQUNyQixLQUFDLG9CQUFvQixHQUFHLFNBNUQxQixFQUFBLFVBOERBLGdCQUFpQixTQUFDLFNBQ2hCLEdBQU0saUJBQ04sS0FBQyxhQUFhLE9BQU8sVUFDckIsS0FBQyxPQUFPLFFBQ1IsS0FBQyxvQkFBb0IsSUFBSSxLQWxFM0IsRUFBQSxVQW9FQSxhQUFjLFNBQUMsU0FDYixHQUFNLGlCQUNOLEtBQUMsY0FBYyxJQUFJLEVBQU0sY0FBYyxhQUFhLGVBQ3BELEtBQUMsY0FBYyxTQUFTLFdBQ3hCLEtBQUMsYUFBYSxPQUFPLFVBQ3JCLEtBQUMsT0FBTyxRQUNSLEtBQUMsb0JBQW9CLElBQUksS0ExRTNCLEVBQUEsVUE0RUEsWUFBYSxTQUFDLEdBQ1osR0FBQSxFQUNBLE9BREEsR0FBUSxFQUFFLEVBQU0sZUFDZ0IsSUFBN0IsRUFBTSxNQUFNLE9BQU8sT0FDcEIsRUFBTSxZQUFZLFdBQVcsR0FFN0IsRUFBTSxZQUFZLFdBQVcsSUFqRmpDLEVBQUEsVUFtRkEsV0FBWSxTQUFDLEdBQ1gsTUFBRyxNQUFDLGtCQUFrQixLQUFLLG1CQUFtQixPQUFPLEVBQXJELFFBRUEsRUFBTSxpQkFDTixFQUFFLE1BQ0EsS0FBTSxPQUNOLElBQUssS0FBQyxrQkFBa0IsS0FBSyxVQUM3QixLQUFNLEtBQUMsa0JBQWtCLFlBQ3pCLFFBQVMsS0FBQyxhQUNWLEtBQU0sS0FBQyxhQUNQLFNBQVUsS0FBQyxhQUNYLFNBQVUsU0FDWixLQUFDLGtCQUFrQixHQUFHLFFBQ3RCLEtBQUMsY0FBYyxZQUFZLGFBaEc3QixFQUFBLFVBa0dBLGFBQWMsaUJBQ1osTUFBQyxrQkFBa0IsVUFDbkIsS0FBQyxTQUFTLGVBckdkLEVBdUdFLFVBQVUsTUFBTSxpQkFDWixJQUFBIiwiZmlsZSI6IlJlZ2lzdHJhdGlvblN0ZXAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVnaXN0cmF0aW9uU3RlcDBcbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQHdpZGdldCA9ICQgJy5yZWdpc3RyYXRpb24tc3RlcC0wJ1xuXG4gICAgaWYgQHdpZGdldC5sZW5ndGggIT0gMVxuICAgICAgdGhyb3cge2Vycm9yOiAn0L3QtSDQvdCw0LnQtNC10L0g0LLQuNC00LbQtdGCJ31cbiAgICBcbiAgICBAZm9ybV9yZWdpc3RyYXRpb24gPSBAd2lkZ2V0LmZpbmQgJy5yZWdpc3RyYXRpb24nXG4gICAgQGZvcm1fc21zID0gQHdpZGdldC5maW5kICcuc21zJ1xuICAgIEBzdWJtaXQgPSBAZm9ybV9yZWdpc3RyYXRpb24uZmluZCAnYnV0dG9uJ1xuICAgIGlucHV0cyA9IEB3aWRnZXQuZmluZCAnaW5wdXQnXG4gICAgaW5wdXRzLm9uICdrZXl1cCcsIEBpbnB1dENoYW5nZVxuICAgIGlucHV0cy5vbiAnY2hhbmdlJywgQGlucHV0Q2hhbmdlXG4gICAgXG4gICAgQHJlZ2lvbnNfaW5wdXQgPSAkICcjcmVnLXJlZ2lvbidcbiAgICBAcmVnaW9uc19saXN0ID0gQHdpZGdldC5maW5kICcucmVnaW9ucy1saXN0J1xuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoID0gQHJlZ2lvbnNfbGlzdC5maW5kICdpbnB1dCdcbiAgICBAcmVnaW9uc19saXN0X2Nsb3NlID0gQHJlZ2lvbnNfbGlzdC5maW5kICcucmVnaW9ucy1saXN0LWNsb3NlJ1xuXG4gICAgJCgnYm9keScpLm9uICdjbGljaycsICcucmVnaW9ucy1saXN0IC5yZWdpb25zIGEnLCBAc2VsZWN0UmVnaW9uXG5cbiAgICByZWdpb25fY29udHJvbHMgPSBAd2lkZ2V0LmZpbmQgJ1tmb3I9XCJyZWctcmVnaW9uXCJdLCAuY2hhbmdlLXJlZ2lvbidcbiAgICByZWdpb25fY29udHJvbHMub24gJ2NsaWNrIGZvY3VzJywgQHNob3dSZWdpb25zTGlzdFxuICAgIEByZWdpb25zX2lucHV0Lm9uICdjbGljayBmb2N1cycsIEBzaG93UmVnaW9uc0xpc3RcblxuICAgIEByZWdpb25zX2xpc3RfY2xvc2Uub24gJ2NsaWNrJywgQGhpZGVSZWdpb25zTGlzdFxuXG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uLmg1VmFsaWRhdGUoKVxuICAgIEBmb3JtX3JlZ2lzdHJhdGlvbi5vbiAnc3VibWl0JywgQGZvcm1TdWJtaXRcblxuICAgIEBmb3JtX3Ntcy5oNVZhbGlkYXRlKClcblxuICAgICQoJ2EucmVnaXN0ZXInKS5vbiAnY2xpY2snLCBAc2hvd1JlZ2lzdHJhdGlvblBvcHVwXG5cbiAgICBAd2lkZ2V0LmZpbmQoJy5yZWdpc3RyYXRpb24tc3RlcC0wLWNsb3NlJykub24gJ2NsaWNrJyxcbiAgICAgIEBoaWRlUmVnaXN0cmF0aW9uUG9wdXBcblxuICAgIGlmICQoJ2h0bWwnKS5oYXNDbGFzcyAnbm8tY3Nzdmh1bml0J1xuICAgICAgdmggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMClcbiAgICAgIEB3aWRnZXQuY3NzXG4gICAgICAgICdoZWlnaHQnOiB2aFxuICAgICAgICAnbGluZS1oZWlnaHQnOiB2aFxuICAgICAgQHJlZ2lvbnNfbGlzdC5jc3NcbiAgICAgICAgJ21heC1oZWlnaHQnOiAwLjgqdmhcblxuICBzaG93UmVnaXN0cmF0aW9uUG9wdXA6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAd2lkZ2V0LnN0b3AoKS5mYWRlSW4oKVxuXG4gIGhpZGVSZWdpc3RyYXRpb25Qb3B1cDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEB3aWRnZXQuc3RvcCgpLmZhZGVPdXQoKVxuICAgIEBmb3JtX3JlZ2lzdHJhdGlvblswXS5yZXNldCgpXG4gICAgQGZvcm1fc21zWzBdLnJlc2V0KClcbiAgICBAcmVnaW9uc19pbnB1dC5yZW1vdmVDbGFzcyAnY2hhbmdlZCdcbiAgICBAcmVnaW9uc19saXN0X3NlYXJjaC52YWwgJydcblxuICBzaG93UmVnaW9uc0xpc3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAcmVnaW9uc19saXN0LnN0b3AoKS5mYWRlSW4oKVxuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoWzBdLmZvY3VzKClcblxuICBoaWRlUmVnaW9uc0xpc3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAcmVnaW9uc19saXN0LnN0b3AoKS5mYWRlT3V0KClcbiAgICBAc3VibWl0LmZvY3VzKClcbiAgICBAcmVnaW9uc19saXN0X3NlYXJjaC52YWwgJydcblxuICBzZWxlY3RSZWdpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAcmVnaW9uc19pbnB1dC52YWwgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKVxuICAgIEByZWdpb25zX2lucHV0LmFkZENsYXNzICdjaGFuZ2VkJ1xuICAgIEByZWdpb25zX2xpc3Quc3RvcCgpLmZhZGVPdXQoKVxuICAgIEBzdWJtaXQuZm9jdXMoKVxuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoLnZhbCAnJ1xuXG4gIGlucHV0Q2hhbmdlOiAoZXZlbnQpLT5cbiAgICBpbnB1dCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGlmIGlucHV0LnZhbCgpLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgaW5wdXQudG9nZ2xlQ2xhc3MgJ2NoYW5nZWQnLCBmYWxzZVxuICAgIGVsc2VcbiAgICAgIGlucHV0LnRvZ2dsZUNsYXNzICdjaGFuZ2VkJywgdHJ1ZVxuXG4gIGZvcm1TdWJtaXQ6IChldmVudCk9PlxuICAgIGlmIEBmb3JtX3JlZ2lzdHJhdGlvbi5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICQuYWpheFxuICAgICAgdHlwZTogXCJQT1NUXCJcbiAgICAgIHVybDogQGZvcm1fcmVnaXN0cmF0aW9uLmF0dHIoJ2FjdGlvbicpXG4gICAgICBkYXRhOiBAZm9ybV9yZWdpc3RyYXRpb24uc2VyaWFsaXplKClcbiAgICAgIHN1Y2Nlc3M6IEBmb3JtU3VibWl0ZWRcbiAgICAgIGZhaWw6IEBmb3JtU3VibWl0ZWRcbiAgICAgIGNvbXBsZXRlOiBAZm9ybVN1Ym1pdGVkXG4gICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uWzBdLnJlc2V0KClcbiAgICBAcmVnaW9uc19pbnB1dC5yZW1vdmVDbGFzcyAnY2hhbmdlZCdcblxuICBmb3JtU3VibWl0ZWQ6IChkYXRhKT0+XG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uLmZhZGVPdXQoKVxuICAgIEBmb3JtX3Ntcy5mYWRlSW4oKVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUmVnaXN0cmF0aW9uU3RlcDAoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==