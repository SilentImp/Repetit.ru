var RegistrationStep0,__bind=function(t,i){return function(){return t.apply(i,arguments)}};RegistrationStep0=function(){function t(){this.formSubmited=__bind(this.formSubmited,this),this.formSubmit=__bind(this.formSubmit,this),this.selectRegion=__bind(this.selectRegion,this),this.hideRegionsList=__bind(this.hideRegionsList,this),this.showRegionsList=__bind(this.showRegionsList,this),this.hideRegistrationPopup=__bind(this.hideRegistrationPopup,this),this.showRegistrationPopup=__bind(this.showRegistrationPopup,this);var t,i,s;if(this.itype="click",$("html").hasClass("touch")&&(this.itype="touchstart"),this.widget=$(".registration-step-0"),1!==this.widget.length)throw{error:"не найден виджет"};this.form_registration=this.widget.find(".registration"),this.form_sms=this.widget.find(".sms"),this.submit=this.form_registration.find("button"),t=this.widget.find("input"),t.on("keyup",this.inputChange),t.on("change",this.inputChange),this.regions_input=$("#reg-region"),this.regions_list=this.widget.find(".regions-list"),this.regions_list_search=this.regions_list.find("input"),this.regions_list_close=this.regions_list.find(".regions-list-close"),$("body").on(this.itype,".regions-list .regions a",this.selectRegion),i=this.widget.find('[for="reg-region"], .change-region'),i.on(this.itype+" focus",this.showRegionsList),this.regions_input.on(this.itype+" focus",this.showRegionsList),this.regions_list_close.on(this.itype,this.hideRegionsList),this.form_registration.h5Validate(),this.form_registration.on("submit",this.formSubmit),this.form_sms.h5Validate(),$("a.register").on(this.itype,this.showRegistrationPopup),this.widget.find(".registration-step-0-close").on(this.itype,this.hideRegistrationPopup),$("html").hasClass("no-cssvhunit")&&(s=Math.max(document.documentElement.clientHeight,window.innerHeight||0),this.widget.css({height:s,"line-height":s}),this.regions_list.css({"max-height":.8*s}))}return t.prototype.showRegistrationPopup=function(t){return t.preventDefault(),this.widget.stop().fadeIn(),Modernizr.mq("screen and (max-width:600px)")?$("body>main.page, body>footer, body>header").stop().fadeOut():void 0},t.prototype.hideRegistrationPopup=function(t){return t.preventDefault(),this.widget.stop().fadeOut(),this.form_registration[0].reset(),this.form_sms[0].reset(),this.regions_input.removeClass("changed"),this.regions_list_search.val(""),Modernizr.mq("screen and (max-width:600px)")?$("body>main.page, body>footer, body>header").stop().fadeIn():void 0},t.prototype.showRegionsList=function(t){return t.preventDefault(),this.regions_list.stop().fadeIn(),this.regions_list_search[0].focus()},t.prototype.hideRegionsList=function(t){return t.preventDefault(),this.regions_list.stop().fadeOut(),this.submit.focus(),this.regions_list_search.val("")},t.prototype.selectRegion=function(t){return t.preventDefault(),this.regions_input.val(t.currentTarget.getAttribute("data-title")),this.regions_input.addClass("changed"),this.regions_list.stop().fadeOut(),this.submit.focus(),this.regions_list_search.val("")},t.prototype.inputChange=function(t){var i;return i=$(t.currentTarget),0===i.val().trim().length?i.toggleClass("changed",!1):i.toggleClass("changed",!0)},t.prototype.formSubmit=function(t){return this.form_registration.find(".ui-state-error").length>0?void 0:(t.preventDefault(),$.ajax({type:"POST",url:this.form_registration.attr("action"),data:this.form_registration.serialize(),success:this.formSubmited,fail:this.formSubmited,complete:this.formSubmited,dataType:"json"}),this.form_registration[0].reset(),this.regions_input.removeClass("changed"))},t.prototype.formSubmited=function(){return this.form_registration.fadeOut(),this.form_sms.fadeIn()},t}(),$(document).ready(function(){return new RegistrationStep0});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlZ2lzdHJhdGlvblN0ZXAwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLG1CQUFBLE9BQUEsU0FBQSxFQUFBLEdBQUEsTUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsWUFBQSxtQkFBQSxXQUNlLFFBQUEsS0FFWCxLQUFBLGFBQUEsT0FBQSxLQUFBLGFBQUEsTUFBQSxLQUFBLFdBQUEsT0FBQSxLQUFBLFdBQUEsTUFBQSxLQUFBLGFBQUEsT0FBQSxLQUFBLGFBQUEsTUFBQSxLQUFBLGdCQUFBLE9BQUEsS0FBQSxnQkFBQSxNQUFBLEtBQUEsZ0JBQUEsT0FBQSxLQUFBLGdCQUFBLE1BQUEsS0FBQSxzQkFBQSxPQUFBLEtBQUEsc0JBQUEsTUFBQSxLQUFBLHNCQUFBLE9BQUEsS0FBQSxzQkFBQSxLQUFBLElBQUEsR0FBQSxFQUFBLENBTUEsSUFOQSxLQUFDLE1BQVEsUUFDTixFQUFFLFFBQVEsU0FBUyxXQUNwQixLQUFDLE1BQVEsY0FFWCxLQUFDLE9BQVMsRUFBRSx3QkFFUyxJQUFsQixLQUFDLE9BQU8sT0FDVCxNQUFPLE1BQU8sbUJBRWhCLE1BQUMsa0JBQW9CLEtBQUMsT0FBTyxLQUFLLGlCQUNsQyxLQUFDLFNBQVcsS0FBQyxPQUFPLEtBQUssUUFDekIsS0FBQyxPQUFTLEtBQUMsa0JBQWtCLEtBQUssVUFDbEMsRUFBUyxLQUFDLE9BQU8sS0FBSyxTQUN0QixFQUFPLEdBQUcsUUFBUyxLQUFDLGFBQ3BCLEVBQU8sR0FBRyxTQUFVLEtBQUMsYUFFckIsS0FBQyxjQUFnQixFQUFFLGVBQ25CLEtBQUMsYUFBZSxLQUFDLE9BQU8sS0FBSyxpQkFDN0IsS0FBQyxvQkFBc0IsS0FBQyxhQUFhLEtBQUssU0FDMUMsS0FBQyxtQkFBcUIsS0FBQyxhQUFhLEtBQUssdUJBRXpDLEVBQUUsUUFBUSxHQUFHLEtBQUMsTUFBTywyQkFBNEIsS0FBQyxjQUVsRCxFQUFrQixLQUFDLE9BQU8sS0FBSyxzQ0FDL0IsRUFBZ0IsR0FBRyxLQUFDLE1BQU0sU0FBVSxLQUFDLGlCQUNyQyxLQUFDLGNBQWMsR0FBRyxLQUFDLE1BQU0sU0FBVSxLQUFDLGlCQUVwQyxLQUFDLG1CQUFtQixHQUFHLEtBQUMsTUFBTyxLQUFDLGlCQUVoQyxLQUFDLGtCQUFrQixhQUNuQixLQUFDLGtCQUFrQixHQUFHLFNBQVUsS0FBQyxZQUVqQyxLQUFDLFNBQVMsYUFFVixFQUFFLGNBQWMsR0FBRyxLQUFDLE1BQU8sS0FBQyx1QkFFNUIsS0FBQyxPQUFPLEtBQUssOEJBQThCLEdBQUcsS0FBQyxNQUM3QyxLQUFDLHVCQUVBLEVBQUUsUUFBUSxTQUFTLGtCQUNwQixFQUFLLEtBQUssSUFBSSxTQUFTLGdCQUFnQixhQUNyQyxPQUFPLGFBQWUsR0FDeEIsS0FBQyxPQUFPLEtBQ04sT0FBVSxFQUNWLGNBQWUsSUFDakIsS0FBQyxhQUFhLEtBQ1osYUFBYyxHQUFJLFdBaER4QixHQUFBLFVBa0RBLHNCQUF1QixTQUFDLEdBR3RCLE1BRkEsR0FBTSxpQkFDTixLQUFDLE9BQU8sT0FBTyxTQUNaLFVBQVUsR0FBRyxnQ0FDZCxFQUFFLDRDQUE0QyxPQUFPLFVBRHZELFFBckRGLEVBQUEsVUF3REEsc0JBQXVCLFNBQUMsR0FPdEIsTUFOQSxHQUFNLGlCQUNOLEtBQUMsT0FBTyxPQUFPLFVBQ2YsS0FBQyxrQkFBa0IsR0FBRyxRQUN0QixLQUFDLFNBQVMsR0FBRyxRQUNiLEtBQUMsY0FBYyxZQUFZLFdBQzNCLEtBQUMsb0JBQW9CLElBQUksSUFDdEIsVUFBVSxHQUFHLGdDQUNkLEVBQUUsNENBQTRDLE9BQU8sU0FEdkQsUUEvREYsRUFBQSxVQWtFQSxnQkFBaUIsU0FBQyxTQUNoQixHQUFNLGlCQUNOLEtBQUMsYUFBYSxPQUFPLFNBQ3JCLEtBQUMsb0JBQW9CLEdBQUcsU0FyRTFCLEVBQUEsVUF1RUEsZ0JBQWlCLFNBQUMsU0FDaEIsR0FBTSxpQkFDTixLQUFDLGFBQWEsT0FBTyxVQUNyQixLQUFDLE9BQU8sUUFDUixLQUFDLG9CQUFvQixJQUFJLEtBM0UzQixFQUFBLFVBNkVBLGFBQWMsU0FBQyxTQUNiLEdBQU0saUJBQ04sS0FBQyxjQUFjLElBQUksRUFBTSxjQUFjLGFBQWEsZUFDcEQsS0FBQyxjQUFjLFNBQVMsV0FDeEIsS0FBQyxhQUFhLE9BQU8sVUFDckIsS0FBQyxPQUFPLFFBQ1IsS0FBQyxvQkFBb0IsSUFBSSxLQW5GM0IsRUFBQSxVQXFGQSxZQUFhLFNBQUMsR0FDWixHQUFBLEVBQ0EsT0FEQSxHQUFRLEVBQUUsRUFBTSxlQUNnQixJQUE3QixFQUFNLE1BQU0sT0FBTyxPQUNwQixFQUFNLFlBQVksV0FBVyxHQUU3QixFQUFNLFlBQVksV0FBVyxJQTFGakMsRUFBQSxVQTRGQSxXQUFZLFNBQUMsR0FDWCxNQUFHLE1BQUMsa0JBQWtCLEtBQUssbUJBQW1CLE9BQU8sRUFBckQsUUFFQSxFQUFNLGlCQUNOLEVBQUUsTUFDQSxLQUFNLE9BQ04sSUFBSyxLQUFDLGtCQUFrQixLQUFLLFVBQzdCLEtBQU0sS0FBQyxrQkFBa0IsWUFDekIsUUFBUyxLQUFDLGFBQ1YsS0FBTSxLQUFDLGFBQ1AsU0FBVSxLQUFDLGFBQ1gsU0FBVSxTQUNaLEtBQUMsa0JBQWtCLEdBQUcsUUFDdEIsS0FBQyxjQUFjLFlBQVksYUF6RzdCLEVBQUEsVUEyR0EsYUFBYyxpQkFDWixNQUFDLGtCQUFrQixVQUNuQixLQUFDLFNBQVMsZUE5R2QsRUFnSEUsVUFBVSxNQUFNLGlCQUNaLElBQUEiLCJmaWxlIjoiUmVnaXN0cmF0aW9uU3RlcDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSZWdpc3RyYXRpb25TdGVwMFxuICBjb25zdHJ1Y3RvcjogLT5cblxuICAgIEBpdHlwZSA9ICdjbGljaydcbiAgICBpZiAkKCdodG1sJykuaGFzQ2xhc3MoJ3RvdWNoJylcbiAgICAgIEBpdHlwZSA9ICd0b3VjaHN0YXJ0J1xuXG4gICAgQHdpZGdldCA9ICQgJy5yZWdpc3RyYXRpb24tc3RlcC0wJ1xuXG4gICAgaWYgQHdpZGdldC5sZW5ndGggIT0gMVxuICAgICAgdGhyb3cge2Vycm9yOiAn0L3QtSDQvdCw0LnQtNC10L0g0LLQuNC00LbQtdGCJ31cbiAgICBcbiAgICBAZm9ybV9yZWdpc3RyYXRpb24gPSBAd2lkZ2V0LmZpbmQgJy5yZWdpc3RyYXRpb24nXG4gICAgQGZvcm1fc21zID0gQHdpZGdldC5maW5kICcuc21zJ1xuICAgIEBzdWJtaXQgPSBAZm9ybV9yZWdpc3RyYXRpb24uZmluZCAnYnV0dG9uJ1xuICAgIGlucHV0cyA9IEB3aWRnZXQuZmluZCAnaW5wdXQnXG4gICAgaW5wdXRzLm9uICdrZXl1cCcsIEBpbnB1dENoYW5nZVxuICAgIGlucHV0cy5vbiAnY2hhbmdlJywgQGlucHV0Q2hhbmdlXG4gICAgXG4gICAgQHJlZ2lvbnNfaW5wdXQgPSAkICcjcmVnLXJlZ2lvbidcbiAgICBAcmVnaW9uc19saXN0ID0gQHdpZGdldC5maW5kICcucmVnaW9ucy1saXN0J1xuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoID0gQHJlZ2lvbnNfbGlzdC5maW5kICdpbnB1dCdcbiAgICBAcmVnaW9uc19saXN0X2Nsb3NlID0gQHJlZ2lvbnNfbGlzdC5maW5kICcucmVnaW9ucy1saXN0LWNsb3NlJ1xuXG4gICAgJCgnYm9keScpLm9uIEBpdHlwZSwgJy5yZWdpb25zLWxpc3QgLnJlZ2lvbnMgYScsIEBzZWxlY3RSZWdpb25cblxuICAgIHJlZ2lvbl9jb250cm9scyA9IEB3aWRnZXQuZmluZCAnW2Zvcj1cInJlZy1yZWdpb25cIl0sIC5jaGFuZ2UtcmVnaW9uJ1xuICAgIHJlZ2lvbl9jb250cm9scy5vbiBAaXR5cGUrJyBmb2N1cycsIEBzaG93UmVnaW9uc0xpc3RcbiAgICBAcmVnaW9uc19pbnB1dC5vbiBAaXR5cGUrJyBmb2N1cycsIEBzaG93UmVnaW9uc0xpc3RcblxuICAgIEByZWdpb25zX2xpc3RfY2xvc2Uub24gQGl0eXBlLCBAaGlkZVJlZ2lvbnNMaXN0XG5cbiAgICBAZm9ybV9yZWdpc3RyYXRpb24uaDVWYWxpZGF0ZSgpXG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uLm9uICdzdWJtaXQnLCBAZm9ybVN1Ym1pdFxuXG4gICAgQGZvcm1fc21zLmg1VmFsaWRhdGUoKVxuXG4gICAgJCgnYS5yZWdpc3RlcicpLm9uIEBpdHlwZSwgQHNob3dSZWdpc3RyYXRpb25Qb3B1cFxuXG4gICAgQHdpZGdldC5maW5kKCcucmVnaXN0cmF0aW9uLXN0ZXAtMC1jbG9zZScpLm9uIEBpdHlwZSxcbiAgICAgIEBoaWRlUmVnaXN0cmF0aW9uUG9wdXBcblxuICAgIGlmICQoJ2h0bWwnKS5oYXNDbGFzcyAnbm8tY3Nzdmh1bml0J1xuICAgICAgdmggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMClcbiAgICAgIEB3aWRnZXQuY3NzXG4gICAgICAgICdoZWlnaHQnOiB2aFxuICAgICAgICAnbGluZS1oZWlnaHQnOiB2aFxuICAgICAgQHJlZ2lvbnNfbGlzdC5jc3NcbiAgICAgICAgJ21heC1oZWlnaHQnOiAwLjgqdmhcblxuICBzaG93UmVnaXN0cmF0aW9uUG9wdXA6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAd2lkZ2V0LnN0b3AoKS5mYWRlSW4oKVxuICAgIGlmIE1vZGVybml6ci5tcShcInNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweClcIilcbiAgICAgICQoJ2JvZHk+bWFpbi5wYWdlLCBib2R5PmZvb3RlciwgYm9keT5oZWFkZXInKS5zdG9wKCkuZmFkZU91dCgpXG5cbiAgaGlkZVJlZ2lzdHJhdGlvblBvcHVwOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHdpZGdldC5zdG9wKCkuZmFkZU91dCgpXG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uWzBdLnJlc2V0KClcbiAgICBAZm9ybV9zbXNbMF0ucmVzZXQoKVxuICAgIEByZWdpb25zX2lucHV0LnJlbW92ZUNsYXNzICdjaGFuZ2VkJ1xuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoLnZhbCAnJ1xuICAgIGlmIE1vZGVybml6ci5tcShcInNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweClcIilcbiAgICAgICQoJ2JvZHk+bWFpbi5wYWdlLCBib2R5PmZvb3RlciwgYm9keT5oZWFkZXInKS5zdG9wKCkuZmFkZUluKClcblxuICBzaG93UmVnaW9uc0xpc3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAcmVnaW9uc19saXN0LnN0b3AoKS5mYWRlSW4oKVxuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoWzBdLmZvY3VzKClcblxuICBoaWRlUmVnaW9uc0xpc3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAcmVnaW9uc19saXN0LnN0b3AoKS5mYWRlT3V0KClcbiAgICBAc3VibWl0LmZvY3VzKClcbiAgICBAcmVnaW9uc19saXN0X3NlYXJjaC52YWwgJydcblxuICBzZWxlY3RSZWdpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAcmVnaW9uc19pbnB1dC52YWwgZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKVxuICAgIEByZWdpb25zX2lucHV0LmFkZENsYXNzICdjaGFuZ2VkJ1xuICAgIEByZWdpb25zX2xpc3Quc3RvcCgpLmZhZGVPdXQoKVxuICAgIEBzdWJtaXQuZm9jdXMoKVxuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoLnZhbCAnJ1xuXG4gIGlucHV0Q2hhbmdlOiAoZXZlbnQpLT5cbiAgICBpbnB1dCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIGlmIGlucHV0LnZhbCgpLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgaW5wdXQudG9nZ2xlQ2xhc3MgJ2NoYW5nZWQnLCBmYWxzZVxuICAgIGVsc2VcbiAgICAgIGlucHV0LnRvZ2dsZUNsYXNzICdjaGFuZ2VkJywgdHJ1ZVxuXG4gIGZvcm1TdWJtaXQ6IChldmVudCk9PlxuICAgIGlmIEBmb3JtX3JlZ2lzdHJhdGlvbi5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICQuYWpheFxuICAgICAgdHlwZTogXCJQT1NUXCJcbiAgICAgIHVybDogQGZvcm1fcmVnaXN0cmF0aW9uLmF0dHIoJ2FjdGlvbicpXG4gICAgICBkYXRhOiBAZm9ybV9yZWdpc3RyYXRpb24uc2VyaWFsaXplKClcbiAgICAgIHN1Y2Nlc3M6IEBmb3JtU3VibWl0ZWRcbiAgICAgIGZhaWw6IEBmb3JtU3VibWl0ZWRcbiAgICAgIGNvbXBsZXRlOiBAZm9ybVN1Ym1pdGVkXG4gICAgICBkYXRhVHlwZTogJ2pzb24nXG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uWzBdLnJlc2V0KClcbiAgICBAcmVnaW9uc19pbnB1dC5yZW1vdmVDbGFzcyAnY2hhbmdlZCdcblxuICBmb3JtU3VibWl0ZWQ6IChkYXRhKT0+XG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uLmZhZGVPdXQoKVxuICAgIEBmb3JtX3Ntcy5mYWRlSW4oKVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUmVnaXN0cmF0aW9uU3RlcDAoKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==