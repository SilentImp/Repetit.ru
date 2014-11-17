var ExperienceWidgetController,__bind=function(t,i){return function(){return t.apply(i,arguments)}};ExperienceWidgetController=function(){function t(t){var i;this.widget=t,this.fromDrag=__bind(this.fromDrag,this),this.onStop=__bind(this.onStop,this),this.fromClick=__bind(this.fromClick,this),this.fromInput=__bind(this.fromInput,this),this.status=this.widget.find(".experience-status"),this.line=this.widget.find(".experience-line"),this.handle=this.widget.find(".experience-handle"),this.input=this.widget.find("input.value"),this.max=parseInt(this.widget.attr("data-max"),10),this.min=parseInt(this.widget.attr("data-min"),10),this.initial=parseInt(this.widget.attr("data-initial"),10),this.line.on("click",this.fromClick),this.input.on("change",this.fromInput),this.handle.draggable({containment:"parent",axis:"x",drag:this.fromDrag,stop:this.onStop,handle:"span"}),this.input.val(Math.min(this.max,Math.max(this.min,this.initial))),i=100*this.initial/Math.abs(this.max-this.min),this.status.css({width:i+"%"}),this.handle.css({left:i+"%"})}return t.prototype.fromInput=function(){var t,i;return i=this.input.val().trim(),""===i&&(this.input.val(this.initial),i=this.initial),i=Math.min(this.max,Math.max(this.min,parseInt(i,10))),this.input.val(i),t=Math.min(100,100*parseInt(i,10)/this.max),this.status.css({width:t+"%"}),this.handle.css({left:t+"%"})},t.prototype.fromClick=function(t){var i,n;return this.lineWidth=this.line.width(),i=t.clientX-this.line.offset().left,n=Math.max(100*i/this.lineWidth,100*this.min/this.max),this.status.css({width:n+"%"}),this.handle.css({left:n+"%"}),this.input.val(Math.min(this.max,Math.max(this.min,Math.round(n/100*this.max),+this.min)))},t.prototype.onStop=function(t,i){var n;return n=Math.max(100*i.position.left/this.lineWidth,100*this.min/this.max),console.log(i.position.left,n),this.handle.css({left:n+"%"})},t.prototype.fromDrag=function(t,i){var n;return this.lineWidth=this.line.width(),n=Math.max(100*i.position.left/this.lineWidth,100*this.min/this.max),this.status.css({width:n+"%"}),this.input.val(Math.min(this.max,Math.max(this.min,Math.round(n/100*this.max),+this.min)))},t}(),$(document).ready(function(){var t,i,n,s,h;for(s=$(".experience-widget"),h=[],i=0,n=s.length;n>i;i++)t=s[i],h.push(new ExperienceWidgetController($(t)));return h});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cGVyaWVuY2VXaWRnZXRDb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLDRCQUFBLE9BQUEsU0FBQSxFQUFBLEdBQUEsTUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsWUFBQSw0QkFBQSxXQUNlLFFBQUEsR0FBRSxHQUNiLEdBQUEsRUFEWSxNQUFDLE9BQUEsRUFDYixLQUFBLFNBQUEsT0FBQSxLQUFBLFNBQUEsTUFBQSxLQUFBLE9BQUEsT0FBQSxLQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsT0FBQSxLQUFBLFVBQUEsTUFBQSxLQUFBLFVBQUEsT0FBQSxLQUFBLFVBQUEsTUFBQSxLQUFDLE9BQVMsS0FBQyxPQUFPLEtBQUssc0JBQ3ZCLEtBQUMsS0FBTyxLQUFDLE9BQU8sS0FBSyxvQkFDckIsS0FBQyxPQUFTLEtBQUMsT0FBTyxLQUFLLHNCQUN2QixLQUFDLE1BQVEsS0FBQyxPQUFPLEtBQUssZUFDdEIsS0FBQyxJQUFNLFNBQVMsS0FBQyxPQUFPLEtBQUssWUFBYSxJQUMxQyxLQUFDLElBQU0sU0FBUyxLQUFDLE9BQU8sS0FBSyxZQUFhLElBQzFDLEtBQUMsUUFBVSxTQUFTLEtBQUMsT0FBTyxLQUFLLGdCQUFpQixJQUVsRCxLQUFDLEtBQUssR0FBRyxRQUFTLEtBQUMsV0FFbkIsS0FBQyxNQUFNLEdBQUcsU0FBVSxLQUFDLFdBRXJCLEtBQUMsT0FBTyxXQUNOLFlBQWEsU0FDYixLQUFNLElBQ04sS0FBTSxLQUFDLFNBQ1AsS0FBTSxLQUFDLE9BQ1AsT0FBUSxTQUVWLEtBQUMsTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFDLElBQUssS0FBSyxJQUFJLEtBQUMsSUFBSyxLQUFDLFdBQzFDLEVBQW9CLElBQVQsS0FBQyxRQUFZLEtBQUssSUFBSSxLQUFDLElBQUksS0FBQyxLQUN2QyxLQUFDLE9BQU8sS0FDTixNQUFPLEVBQVMsTUFDbEIsS0FBQyxPQUFPLEtBQ04sS0FBTSxFQUFTLFlBekJuQixHQUFBLFVBNkJBLFVBQVcsV0FDVCxHQUFBLEdBQUEsUUFBQSxHQUFNLEtBQUMsTUFBTSxNQUFNLE9BQ1QsS0FBUCxJQUNELEtBQUMsTUFBTSxJQUFJLEtBQUMsU0FDWixFQUFNLEtBQUMsU0FDVCxFQUFNLEtBQUssSUFBSSxLQUFDLElBQUssS0FBSyxJQUFJLEtBQUMsSUFBSyxTQUFTLEVBQUksTUFDakQsS0FBQyxNQUFNLElBQUksR0FDWCxFQUFXLEtBQUssSUFBSSxJQUFzQixJQUFqQixTQUFTLEVBQUksSUFBUSxLQUFDLEtBQy9DLEtBQUMsT0FBTyxLQUNOLE1BQU8sRUFBUyxNQUNsQixLQUFDLE9BQU8sS0FDTixLQUFNLEVBQVMsT0F4Q25CLEVBQUEsVUEwQ0EsVUFBVyxTQUFDLEdBQ1YsR0FBQSxHQUFBLFFBQUEsTUFBQyxVQUFZLEtBQUMsS0FBSyxRQUNuQixFQUFPLEVBQU0sUUFBUSxLQUFDLEtBQUssU0FBUyxLQUNwQyxFQUFXLEtBQUssSUFBVSxJQUFMLEVBQVMsS0FBQyxVQUFtQixJQUFMLEtBQUMsSUFBUSxLQUFDLEtBQ3ZELEtBQUMsT0FBTyxLQUNOLE1BQU8sRUFBUyxNQUNsQixLQUFDLE9BQU8sS0FDTixLQUFNLEVBQVMsTUFDakIsS0FBQyxNQUFNLElBQUksS0FBSyxJQUFJLEtBQUMsSUFBSyxLQUFLLElBQUksS0FBQyxJQUFLLEtBQUssTUFBTyxFQUFTLElBQUssS0FBQyxNQUNsRSxLQUFHLFFBbkRQLEVBQUEsVUFxREEsT0FBUSxTQUFDLEVBQU8sR0FDZCxHQUFBLFNBQUEsR0FBVyxLQUFLLElBQXFCLElBQWpCLEVBQUcsU0FBUyxLQUFTLEtBQUMsVUFBa0IsSUFBTCxLQUFDLElBQVEsS0FBQyxLQUNqRSxRQUFRLElBQUksRUFBRyxTQUFTLEtBQU0sR0FDOUIsS0FBQyxPQUFPLEtBQ04sS0FBTSxFQUFTLE9BekRuQixFQUFBLFVBK0RBLFNBQVUsU0FBQyxFQUFPLEdBQ2hCLEdBQUEsU0FBQSxNQUFDLFVBQVksS0FBQyxLQUFLLFFBQ25CLEVBQVcsS0FBSyxJQUFxQixJQUFqQixFQUFHLFNBQVMsS0FBUyxLQUFDLFVBQWtCLElBQUwsS0FBQyxJQUFRLEtBQUMsS0FDakUsS0FBQyxPQUFPLEtBQ04sTUFBTyxFQUFTLE1BQ2xCLEtBQUMsTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFDLElBQUssS0FBSyxJQUFJLEtBQUMsSUFBSyxLQUFLLE1BQU8sRUFBUyxJQUFLLEtBQUMsTUFDbEUsS0FBRyxhQXRFVCxFQXlFRSxVQUFVLE1BQU0sV0FDaEIsR0FBQSxHQUFBLEVBQUEsRUFBQSxFQUFBLE1BQUEsRUFBQSxFQUFBLHNCQUFBLEtBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxPQUFBLEVBQUEsRUFBQSxXQUNFLEVBQUEsS0FBSSxHQUFBLDRCQUEyQixFQUFFIiwiZmlsZSI6IkV4cGVyaWVuY2VXaWRnZXRDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhwZXJpZW5jZVdpZGdldENvbnRyb2xsZXJcbiAgY29uc3RydWN0b3I6IChAd2lkZ2V0KS0+XG4gICAgQHN0YXR1cyA9IEB3aWRnZXQuZmluZCAnLmV4cGVyaWVuY2Utc3RhdHVzJ1xuICAgIEBsaW5lID0gQHdpZGdldC5maW5kICcuZXhwZXJpZW5jZS1saW5lJ1xuICAgIEBoYW5kbGUgPSBAd2lkZ2V0LmZpbmQgJy5leHBlcmllbmNlLWhhbmRsZSdcbiAgICBAaW5wdXQgPSBAd2lkZ2V0LmZpbmQgJ2lucHV0LnZhbHVlJ1xuICAgIEBtYXggPSBwYXJzZUludCBAd2lkZ2V0LmF0dHIoJ2RhdGEtbWF4JyksIDEwXG4gICAgQG1pbiA9IHBhcnNlSW50IEB3aWRnZXQuYXR0cignZGF0YS1taW4nKSwgMTBcbiAgICBAaW5pdGlhbCA9IHBhcnNlSW50IEB3aWRnZXQuYXR0cignZGF0YS1pbml0aWFsJyksIDEwXG5cbiAgICBAbGluZS5vbiAnY2xpY2snLCBAZnJvbUNsaWNrXG5cbiAgICBAaW5wdXQub24gJ2NoYW5nZScsIEBmcm9tSW5wdXRcblxuICAgIEBoYW5kbGUuZHJhZ2dhYmxlXG4gICAgICBjb250YWlubWVudDogXCJwYXJlbnRcIlxuICAgICAgYXhpczogXCJ4XCJcbiAgICAgIGRyYWc6IEBmcm9tRHJhZ1xuICAgICAgc3RvcDogQG9uU3RvcFxuICAgICAgaGFuZGxlOiBcInNwYW5cIlxuXG4gICAgQGlucHV0LnZhbCBNYXRoLm1pbihAbWF4LCBNYXRoLm1heChAbWluLCBAaW5pdGlhbCkpXG4gICAgcGVyY2VudHMgPSBAaW5pdGlhbCoxMDAvTWF0aC5hYnMoQG1heC1AbWluKVxuICAgIEBzdGF0dXMuY3NzXG4gICAgICB3aWR0aDogcGVyY2VudHMrJyUnXG4gICAgQGhhbmRsZS5jc3NcbiAgICAgIGxlZnQ6IHBlcmNlbnRzKyclJ1xuXG5cblxuICBmcm9tSW5wdXQ6IChldmVudCk9PlxuICAgIHZhbCA9IEBpbnB1dC52YWwoKS50cmltKClcbiAgICBpZiB2YWwgPT0gXCJcIlxuICAgICAgQGlucHV0LnZhbCBAaW5pdGlhbFxuICAgICAgdmFsID0gQGluaXRpYWxcbiAgICB2YWwgPSBNYXRoLm1pbihAbWF4LCBNYXRoLm1heChAbWluLCBwYXJzZUludCh2YWwsMTApKSlcbiAgICBAaW5wdXQudmFsIHZhbFxuICAgIHBlcmNlbnRzID0gTWF0aC5taW4oMTAwLCBwYXJzZUludCh2YWwsMTApKjEwMC9AbWF4KVxuICAgIEBzdGF0dXMuY3NzXG4gICAgICB3aWR0aDogcGVyY2VudHMrJyUnXG4gICAgQGhhbmRsZS5jc3NcbiAgICAgIGxlZnQ6IHBlcmNlbnRzKyclJ1xuXG4gIGZyb21DbGljazogKGV2ZW50KT0+XG4gICAgQGxpbmVXaWR0aCA9IEBsaW5lLndpZHRoKClcbiAgICBsZWZ0ID0gZXZlbnQuY2xpZW50WC1AbGluZS5vZmZzZXQoKS5sZWZ0XG4gICAgcGVyY2VudHMgPSBNYXRoLm1heCgobGVmdCoxMDAvQGxpbmVXaWR0aCksICAoQG1pbioxMDAvQG1heCkpXG4gICAgQHN0YXR1cy5jc3NcbiAgICAgIHdpZHRoOiBwZXJjZW50cysnJSdcbiAgICBAaGFuZGxlLmNzc1xuICAgICAgbGVmdDogcGVyY2VudHMrJyUnXG4gICAgQGlucHV0LnZhbCBNYXRoLm1pbihAbWF4LCBNYXRoLm1heChAbWluLCBNYXRoLnJvdW5kKChwZXJjZW50cy8xMDApKkBtYXgpXG4gICAgICArIEBtaW4pKVxuXG4gIG9uU3RvcDogKGV2ZW50LCB1aSk9PlxuICAgIHBlcmNlbnRzID0gTWF0aC5tYXgodWkucG9zaXRpb24ubGVmdCoxMDAvQGxpbmVXaWR0aCwgIChAbWluKjEwMC9AbWF4KSlcbiAgICBjb25zb2xlLmxvZyB1aS5wb3NpdGlvbi5sZWZ0LCBwZXJjZW50c1xuICAgIEBoYW5kbGUuY3NzXG4gICAgICBsZWZ0OiBwZXJjZW50cysnJSdcblxuICAgICMgcGVyY2VudHMgPSBNYXRoLm1heCh1aS5wb3NpdGlvbi5sZWZ0KjEwMC9AbGluZVdpZHRoLCAgKEBtaW4qMTAwL0BtYXgpKVxuICAgICMgQGhhbmRsZS5jc3NcbiAgICAjICAgd2lkdGg6IHBlcmNlbnRzKyclJ1xuXG4gIGZyb21EcmFnOiAoZXZlbnQsIHVpKT0+XG4gICAgQGxpbmVXaWR0aCA9IEBsaW5lLndpZHRoKClcbiAgICBwZXJjZW50cyA9IE1hdGgubWF4KHVpLnBvc2l0aW9uLmxlZnQqMTAwL0BsaW5lV2lkdGgsICAoQG1pbioxMDAvQG1heCkpXG4gICAgQHN0YXR1cy5jc3NcbiAgICAgIHdpZHRoOiBwZXJjZW50cysnJSdcbiAgICBAaW5wdXQudmFsIE1hdGgubWluKEBtYXgsIE1hdGgubWF4KEBtaW4sIE1hdGgucm91bmQoKHBlcmNlbnRzLzEwMCkqQG1heClcbiAgICAgICsgQG1pbikpXG5cblxuJChkb2N1bWVudCkucmVhZHkgKCktPlxuICBmb3IgZWxlbWVudCBpbiAkKCcuZXhwZXJpZW5jZS13aWRnZXQnKVxuICAgIG5ldyBFeHBlcmllbmNlV2lkZ2V0Q29udHJvbGxlciAkKGVsZW1lbnQpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9