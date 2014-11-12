var DropdownWidgetController,__bind=function(t,e){return function(){return t.apply(e,arguments)}};DropdownWidgetController=function(){function t(t){this.widget=t,this.selectOption=__bind(this.selectOption,this),this.validate=__bind(this.validate,this),this.itype="click",$("html").hasClass("touch")&&(this.itype="touchstart"),this.select=this.widget.find("select"),this.list=this.widget.find(".list"),this.options=this.list.find(".option"),this.current=this.widget.find(".current"),this.options.on(this.itype,this.selectOption),this.widget[0].controller={validate:this.validate}}return t.prototype.validate=function(){var t,e;return t=this.select.attr("required"),"undefined"==typeof t||t===!1?!0:(e=this.select.attr("data-h5-errorid"),this.select.hasClass("unchanged")?(this.widget.addClass("ui-state-error"),"undefined"!=typeof e&&e!==!1&&$("#"+e).show(),!1):(this.widget.removeClass("ui-state-error"),"undefined"!=typeof e&&e!==!1&&0===$('.dropdown-widget.ui-state-error [data-h5-errorid="'+e+'"]').length?$("#"+e).hide():void 0))},t.prototype.selectOption=function(t){var e,i;return e=$(t.currentTarget),this.list.find(".option.selected").removeClass("selected"),e.addClass("selected"),i=e.attr("data-value"),this.select.val(i),this.select.removeClass("unchanged"),this.current.removeClass("default").text(e.text()),this.validate()},t}(),$(document).ready(function(){var t,e,i,s,r;for(s=$(".dropdown-widget"),r=[],e=0,i=s.length;i>e;e++)t=s[e],r.push(new DropdownWidgetController($(t)));return r});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyb3Bkb3duV2lkZ2V0Q29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQSwwQkFBQSxPQUFBLFNBQUEsRUFBQSxHQUFBLE1BQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLFlBQUEsMEJBQUEsV0FDZSxRQUFBLEdBQUUsR0FBRCxLQUFDLE9BQUEsRUFFYixLQUFBLGFBQUEsT0FBQSxLQUFBLGFBQUEsTUFBQSxLQUFBLFNBQUEsT0FBQSxLQUFBLFNBQUEsTUFBQSxLQUFDLE1BQVEsUUFDTixFQUFFLFFBQVEsU0FBUyxXQUNwQixLQUFDLE1BQVEsY0FFWCxLQUFDLE9BQVcsS0FBQyxPQUFPLEtBQU0sVUFDMUIsS0FBQyxLQUFXLEtBQUMsT0FBTyxLQUFNLFNBQzFCLEtBQUMsUUFBVyxLQUFDLEtBQUssS0FBUSxXQUMxQixLQUFDLFFBQVcsS0FBQyxPQUFPLEtBQU0sWUFFMUIsS0FBQyxRQUFRLEdBQUcsS0FBQyxNQUFPLEtBQUMsY0FFckIsS0FBQyxPQUFPLEdBQUcsWUFDVCxTQUFVLEtBQUMsZ0JBZGYsR0FBQSxVQWdCQSxTQUFVLFdBQ1IsR0FBQSxHQUFBLENBQ0EsT0FEQSxHQUFPLEtBQUMsT0FBTyxLQUFLLFlBQ0YsbUJBQWYsSUFBbUMsS0FBUSxHQUNyQyxHQUVULEVBQU0sS0FBQyxPQUFPLEtBQUssbUJBQ2hCLEtBQUMsT0FBTyxTQUFTLGNBQ2xCLEtBQUMsT0FBTyxTQUFTLGtCQUNBLG1CQUFkLElBQWtDLEtBQU8sR0FDMUMsRUFBRSxJQUFJLEdBQUssUUFDTixJQUVQLEtBQUMsT0FBTyxZQUFZLGtCQUNILG1CQUFkLElBQWtDLEtBQU8sR0FDb0MsSUFBM0UsRUFBRSxxREFBcUQsRUFBSSxNQUFNLE9BQ2xFLEVBQUUsSUFBSSxHQUFLLE9BRmYsVUE3QkosRUFBQSxVQWlDQSxhQUFjLFNBQUMsR0FDYixHQUFBLEdBQUEsUUFBQSxHQUFTLEVBQUUsRUFBTSxlQUNqQixLQUFDLEtBQUssS0FBSyxvQkFBb0IsWUFBWSxZQUMzQyxFQUFPLFNBQVMsWUFDaEIsRUFBUSxFQUFPLEtBQUssY0FDcEIsS0FBQyxPQUFPLElBQUksR0FDWixLQUFDLE9BQU8sWUFBWSxhQUNwQixLQUFDLFFBQVEsWUFBWSxXQUFXLEtBQUssRUFBTyxRQUM1QyxLQUFDLGlCQTFDTCxFQThDRSxVQUFVLE1BQU0sV0FDaEIsR0FBQSxHQUFBLEVBQUEsRUFBQSxFQUFBLE1BQUEsRUFBQSxFQUFBLG9CQUFBLEtBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxPQUFBLEVBQUEsRUFBQSxXQUNFLEVBQUEsS0FBSSxHQUFBLDBCQUF5QixFQUFFIiwiZmlsZSI6IkRyb3Bkb3duV2lkZ2V0Q29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlclxuICBjb25zdHJ1Y3RvcjogKEB3aWRnZXQpLT5cblxuICAgIEBpdHlwZSA9ICdjbGljaydcbiAgICBpZiAkKCdodG1sJykuaGFzQ2xhc3MoJ3RvdWNoJylcbiAgICAgIEBpdHlwZSA9ICd0b3VjaHN0YXJ0J1xuXG4gICAgQHNlbGVjdCA9ICAgQHdpZGdldC5maW5kICAnc2VsZWN0J1xuICAgIEBsaXN0ID0gICAgIEB3aWRnZXQuZmluZCAgJy5saXN0J1xuICAgIEBvcHRpb25zID0gIEBsaXN0LmZpbmQgICAgJy5vcHRpb24nXG4gICAgQGN1cnJlbnQgPSAgQHdpZGdldC5maW5kICAnLmN1cnJlbnQnXG5cbiAgICBAb3B0aW9ucy5vbiBAaXR5cGUsIEBzZWxlY3RPcHRpb25cblxuICAgIEB3aWRnZXRbMF0uY29udHJvbGxlciA9IFxuICAgICAgdmFsaWRhdGU6IEB2YWxpZGF0ZVxuXG4gIHZhbGlkYXRlOiA9PlxuICAgIGF0dHIgPSBAc2VsZWN0LmF0dHIgJ3JlcXVpcmVkJ1xuICAgIGlmIHR5cGVvZiBhdHRyID09IHR5cGVvZiB1bmRlZmluZWQgfHwgYXR0ciA9PSBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgIGVyciA9IEBzZWxlY3QuYXR0ciAnZGF0YS1oNS1lcnJvcmlkJ1xuICAgIGlmIEBzZWxlY3QuaGFzQ2xhc3MgJ3VuY2hhbmdlZCdcbiAgICAgIEB3aWRnZXQuYWRkQ2xhc3MgJ3VpLXN0YXRlLWVycm9yJ1xuICAgICAgaWYgdHlwZW9mIGVyciAhPSB0eXBlb2YgdW5kZWZpbmVkICYmIGVyciAhPSBmYWxzZVxuICAgICAgICAkKFwiI1wiK2Vycikuc2hvdygpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBlbHNlXG4gICAgICBAd2lkZ2V0LnJlbW92ZUNsYXNzICd1aS1zdGF0ZS1lcnJvcidcbiAgICAgIGlmIHR5cGVvZiBlcnIgIT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBlcnIgIT0gZmFsc2VcbiAgICAgICAgaWYgJCgnLmRyb3Bkb3duLXdpZGdldC51aS1zdGF0ZS1lcnJvciBbZGF0YS1oNS1lcnJvcmlkPVwiJytlcnIrJ1wiXScpLmxlbmd0aCA9PSAwXG4gICAgICAgICAgJChcIiNcIitlcnIpLmhpZGUoKVxuXG4gIHNlbGVjdE9wdGlvbjogKGV2ZW50KT0+XG4gICAgb3B0aW9uID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgQGxpc3QuZmluZCgnLm9wdGlvbi5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBvcHRpb24uYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIHZhbHVlID0gb3B0aW9uLmF0dHIgJ2RhdGEtdmFsdWUnXG4gICAgQHNlbGVjdC52YWwgdmFsdWVcbiAgICBAc2VsZWN0LnJlbW92ZUNsYXNzICd1bmNoYW5nZWQnXG4gICAgQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2RlZmF1bHQnKS50ZXh0IG9wdGlvbi50ZXh0KClcbiAgICBAdmFsaWRhdGUoKVxuXG4gIFxuXG4kKGRvY3VtZW50KS5yZWFkeSAoKS0+XG4gIGZvciBlbGVtZW50IGluICQoJy5kcm9wZG93bi13aWRnZXQnKVxuICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=