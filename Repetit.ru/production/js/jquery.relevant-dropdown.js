!function(e){e.expr[":"].RD_contains=e.expr.createPseudo(function(t){return function(i){return e(i).text().toUpperCase().indexOf(t.toUpperCase())>=0}}),e.fn.relevantDropdown=function(t){return t=e.extend({fadeOutSpeed:"normal",change:null},t),this.each(function(){function i(e){"function"==typeof t.change&&t.change.call(this,e)}var o,n=e(this),l=n.attr("list"),s=e("#"+l),a=s.find("option"),c=0,d=document.createDocumentFragment(),r=null;e("<ul />",{"class":"datalist",id:l}).appendTo("body"),s.remove(),s=e("#"+l),a.each(function(){r=e("<li />",{text:e(this).val()})[0],d.appendChild(r)}),s.append(d),a=s.find("li"),n.on("focus",function(){s.scrollTop(0),c=0}).on("blur",function(){setTimeout(function(){s.fadeOut(t.fadeOutSpeed),a.removeClass("active")},500)}).on("keyup focus",function(){o=n.position(),s.show().css({top:o.top+e(this).outerHeight(),left:o.left,width:n.outerWidth()}),a.hide(),s.find("li:RD_contains('"+n.val()+"')").show()}),a.on("mouseenter",function(){e(this).addClass("active").siblings().removeClass("active")}).on("mouseleave",function(){e(this).removeClass("active")}),e(window).resize(function(){o=n.position(),s.css({top:o.top+e(this).outerHeight(),left:o.left,width:n.outerWidth()})}),n.on("keydown",function(e){var o=s.find("li.active"),l=s.outerHeight(),d=a.outerHeight();if(38==e.keyCode&&o.length&&(prevAll=o.prevAll("li:visible"),prevAll.length>0&&(o.removeClass("active"),prevAll.eq(0).addClass("active")),prevAll.length&&prevAll.position().top<0&&c>0&&s.scrollTop(c-=d)),40==e.keyCode)if(o.length){var r=o.nextAll("li:visible");r.length>0&&(o.removeClass("active"),r.eq(0).addClass("active")),r.length&&r.position().top+d>=l&&s.stop().animate({scrollTop:c+=d},200)}else a.removeClass("active"),s.find("li:visible:first").addClass("active");(13==e.keyCode||9==e.keyCode)&&(o.length&&(n.val(o.text()),i(o.text())),s.fadeOut(t.fadeOutSpeed),a.removeClass("active")),13!=e.keyCode&&38!=e.keyCode&&40!=e.keyCode&&(a.removeClass("active"),s.find("li:visible:first").addClass("active"),s.scrollTop(0),c=0)}),a.on("click",function(){var o=e("li.active");o.length&&n.val(e(this).text()),s.fadeOut(t.fadeOutSpeed),a.removeClass("active"),i(e(this).text())})})}}(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIj8iXSwibmFtZXMiOlsiJCIsImV4cHIiLCJSRF9jb250YWlucyIsImNyZWF0ZVBzZXVkbyIsImFyZyIsImVsZW0iLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJpbmRleE9mIiwiZm4iLCJyZWxldmFudERyb3Bkb3duIiwib3B0aW9ucyIsImV4dGVuZCIsImZhZGVPdXRTcGVlZCIsImNoYW5nZSIsInRoaXMiLCJlYWNoIiwiaXRlbV9zZWxlY3RlZCIsIm5ld190ZXh0IiwiY2FsbCIsInNlYXJjaFBvc2l0aW9uIiwiJGlucHV0IiwibGlzdF9pZCIsImF0dHIiLCIkZGF0YWxpc3QiLCJkYXRhbGlzdEl0ZW1zIiwiZmluZCIsInNjcm9sbFZhbHVlIiwidGVtcF9pdGVtcyIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInRlbXBfaXRlbSIsImNsYXNzIiwiaWQiLCJhcHBlbmRUbyIsInJlbW92ZSIsInZhbCIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwib24iLCJzY3JvbGxUb3AiLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInJlbW92ZUNsYXNzIiwicG9zaXRpb24iLCJzaG93IiwiY3NzIiwidG9wIiwib3V0ZXJIZWlnaHQiLCJsZWZ0Iiwid2lkdGgiLCJvdXRlcldpZHRoIiwiaGlkZSIsImFkZENsYXNzIiwic2libGluZ3MiLCJ3aW5kb3ciLCJyZXNpemUiLCJlIiwiYWN0aXZlIiwiZGF0YWxpc3RIZWlnaHQiLCJkYXRhbGlzdEl0ZW1zSGVpZ2h0Iiwia2V5Q29kZSIsImxlbmd0aCIsInByZXZBbGwiLCJlcSIsIm5leHRBbGwiLCJzdG9wIiwiYW5pbWF0ZSIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBVUEsR0FJUkEsRUFBRUMsS0FBSyxLQUFLQyxZQUFjRixFQUFFQyxLQUFLRSxhQUFhLFNBQVNDLEdBQ25ELE1BQU8sVUFBVUMsR0FDYixNQUFPTCxHQUFFSyxHQUFNQyxPQUFPQyxjQUFjQyxRQUFRSixFQUFJRyxnQkFBa0IsS0FJMUVQLEVBQUVTLEdBQUdDLGlCQUFtQixTQUFTQyxHQU8vQixNQUxBQSxHQUFVWCxFQUFFWSxRQUNWQyxhQUFjLFNBQ2RDLE9BQVEsTUFDUEgsR0FFSUksS0FBS0MsS0FBSyxXQXNLZixRQUFTQyxHQUFjQyxHQUNTLGtCQUFuQlAsR0FBUUcsUUFDakJILEVBQVFHLE9BQU9LLEtBQUtKLEtBQU1HLEdBdEs5QixHQUtJRSxHQUxBQyxFQUFTckIsRUFBRWUsTUFDWE8sRUFBVUQsRUFBT0UsS0FBSyxRQUN0QkMsRUFBWXhCLEVBQUUsSUFBTXNCLEdBQ3BCRyxFQUFnQkQsRUFBVUUsS0FBSyxVQUcvQkMsRUFBYyxFQUdkQyxFQUFhQyxTQUFTQyx5QkFDdEJDLEVBQVksSUFHaEIvQixHQUFFLFVBQ0FnQyxRQUFTLFdBQ1RDLEdBQVNYLElBQ1JZLFNBQVMsUUFHWlYsRUFBVVcsU0FHVlgsRUFBWXhCLEVBQUUsSUFBTXNCLEdBR3BCRyxFQUFjVCxLQUFLLFdBQ2pCZSxFQUFZL0IsRUFBRSxVQUdaTSxLQUFRTixFQUFFZSxNQUFNcUIsUUFDZixHQUNIUixFQUFXUyxZQUFZTixLQUV6QlAsRUFBVWMsT0FBT1YsR0FHakJILEVBQWdCRCxFQUFVRSxLQUFLLE1BRy9CTCxFQUNHa0IsR0FBRyxRQUFTLFdBRVhmLEVBQVVnQixVQUFVLEdBQ3BCYixFQUFjLElBRWZZLEdBQUcsT0FBUSxXQUVWRSxXQUFXLFdBQ1RqQixFQUFVa0IsUUFBUS9CLEVBQVFFLGNBQzFCWSxFQUFja0IsWUFBWSxXQUN6QixPQUVKSixHQUFHLGNBQWUsV0FDakJuQixFQUFpQkMsRUFBT3VCLFdBRXhCcEIsRUFDR3FCLE9BQ0FDLEtBQ0NDLElBQUszQixFQUFlMkIsSUFBTS9DLEVBQUVlLE1BQU1pQyxjQUNsQ0MsS0FBTTdCLEVBQWU2QixLQUNyQkMsTUFBTzdCLEVBQU84QixlQUdsQjFCLEVBQWMyQixPQUNkNUIsRUFBVUUsS0FBSyxtQkFBcUJMLEVBQU9lLE1BQVEsTUFBTVMsU0FLN0RwQixFQUNHYyxHQUFHLGFBQWMsV0FDaEJ2QyxFQUFFZSxNQUFNc0MsU0FBUyxVQUFVQyxXQUFXWCxZQUFZLFlBRW5ESixHQUFHLGFBQWMsV0FDaEJ2QyxFQUFFZSxNQUFNNEIsWUFBWSxZQUl4QjNDLEVBQUV1RCxRQUFRQyxPQUFPLFdBQ2ZwQyxFQUFpQkMsRUFBT3VCLFdBQ3hCcEIsRUFDR3NCLEtBQ0NDLElBQUszQixFQUFlMkIsSUFBTS9DLEVBQUVlLE1BQU1pQyxjQUNsQ0MsS0FBTTdCLEVBQWU2QixLQUNyQkMsTUFBTzdCLEVBQU84QixpQkFLcEI5QixFQUFPa0IsR0FBRyxVQUFXLFNBQVNrQixHQUU1QixHQUFJQyxHQUFTbEMsRUFBVUUsS0FBSyxhQUN4QmlDLEVBQWlCbkMsRUFBVXdCLGNBQzNCWSxFQUFzQm5DLEVBQWN1QixhQWtCeEMsSUFma0IsSUFBYlMsRUFBRUksU0FDREgsRUFBT0ksU0FDVEMsUUFBVUwsRUFBT0ssUUFBUSxjQUNyQkEsUUFBUUQsT0FBUyxJQUNuQkosRUFBT2YsWUFBWSxVQUNuQm9CLFFBQVFDLEdBQUcsR0FBR1gsU0FBUyxXQUdwQlUsUUFBUUQsUUFBVUMsUUFBUW5CLFdBQVdHLElBQU0sR0FBS3BCLEVBQWMsR0FDakVILEVBQVVnQixVQUFVYixHQUFhaUMsSUFNckIsSUFBYkgsRUFBRUksUUFDTCxHQUFJSCxFQUFPSSxPQUFRLENBQ2pCLEdBQUlHLEdBQVVQLEVBQU9PLFFBQVEsYUFDekJBLEdBQVFILE9BQVMsSUFDbkJKLEVBQU9mLFlBQVksVUFDbkJzQixFQUFRRCxHQUFHLEdBQUdYLFNBQVMsV0FHcEJZLEVBQVFILFFBQVdHLEVBQVFyQixXQUFXRyxJQUFNYSxHQUF3QkQsR0FDdkVuQyxFQUFVMEMsT0FBT0MsU0FDZjNCLFVBQVdiLEdBQWVpQyxHQUN6QixTQUdMbkMsR0FBY2tCLFlBQVksVUFDMUJuQixFQUFVRSxLQUFLLG9CQUFvQjJCLFNBQVMsV0FLOUIsSUFBYkksRUFBRUksU0FBOEIsR0FBYkosRUFBRUksV0FDcEJILEVBQU9JLFNBQ1R6QyxFQUFPZSxJQUFJc0IsRUFBT3BELFFBQ2xCVyxFQUFjeUMsRUFBT3BELFNBRXZCa0IsRUFBVWtCLFFBQVEvQixFQUFRRSxjQUMxQlksRUFBY2tCLFlBQVksV0FJVixJQUFiYyxFQUFFSSxTQUE4QixJQUFiSixFQUFFSSxTQUE4QixJQUFiSixFQUFFSSxVQUUzQ3BDLEVBQWNrQixZQUFZLFVBQzFCbkIsRUFBVUUsS0FBSyxvQkFBb0IyQixTQUFTLFVBRzVDN0IsRUFBVWdCLFVBQVUsR0FDcEJiLEVBQWMsS0FNbEJGLEVBQWNjLEdBQUcsUUFBUyxXQUN4QixHQUFJbUIsR0FBUzFELEVBQUUsWUFDWDBELEdBQU9JLFFBQ1R6QyxFQUFPZSxJQUFJcEMsRUFBRWUsTUFBTVQsUUFFckJrQixFQUFVa0IsUUFBUS9CLEVBQVFFLGNBQzFCWSxFQUFja0IsWUFBWSxVQUMxQjFCLEVBQWNqQixFQUFFZSxNQUFNVCxjQVUzQjhEIiwiZmlsZSI6ImpxdWVyeS5yZWxldmFudC1kcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9