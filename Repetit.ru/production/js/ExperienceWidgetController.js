var ExperienceWidgetController,
  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

ExperienceWidgetController = (function() {
  function ExperienceWidgetController(widget) {
    var percents;
    this.widget = widget;
    this.fromDrag = __bind(this.fromDrag, this);
    this.onStop = __bind(this.onStop, this);
    this.fromClick = __bind(this.fromClick, this);
    this.fromInput = __bind(this.fromInput, this);
    this.status = this.widget.find('.experience-status');
    this.line = this.widget.find('.experience-line');
    this.handle = this.widget.find('.experience-handle');
    this.input = this.widget.find('input.value');
    this.max = parseInt(this.widget.attr('data-max'), 10);
    this.min = parseInt(this.widget.attr('data-min'), 10);
    this.initial = parseInt(this.widget.attr('data-initial'), 10);
    this.line.on('click', this.fromClick);
    this.input.on('change', this.fromInput);
    this.handle.draggable({
      containment: "parent",
      axis: "x",
      drag: this.fromDrag,
      stop: this.onStop,
      handle: "span"
    });
    this.input.val(Math.min(this.max, Math.max(this.min, this.initial)));
    percents = this.initial * 100 / Math.abs(this.max - this.min);
    this.status.css({
      width: percents + '%'
    });
    this.handle.css({
      left: percents + '%'
    });
  }

  ExperienceWidgetController.prototype.fromInput = function(event) {
    var percents, val;
    val = this.input.val().trim();
    if (val === "") {
      this.input.val(this.initial);
      val = this.initial;
    }
    val = Math.min(this.max, Math.max(this.min, parseInt(val, 10)));
    this.input.val(val);
    percents = Math.min(100, parseInt(val, 10) * 100 / this.max);
    this.status.css({
      width: percents + '%'
    });
    return this.handle.css({
      left: percents + '%'
    });
  };

  ExperienceWidgetController.prototype.fromClick = function(event) {
    var left, percents;
    this.lineWidth = this.line.width();
    left = event.clientX - this.line.offset().left;
    percents = Math.max(left * 100 / this.lineWidth, this.min * 100 / this.max);
    this.status.css({
      width: percents + '%'
    });
    this.handle.css({
      left: percents + '%'
    });
    return this.input.val(Math.min(this.max, Math.max(this.min, Math.round((percents / 100) * this.max), +this.min)));
  };

  ExperienceWidgetController.prototype.onStop = function(event, ui) {
    var percents;
    percents = Math.max(ui.position.left * 100 / this.lineWidth, this.min * 100 / this.max);
    console.log(ui.position.left, percents);
    return this.handle.css({
      left: percents + '%'
    });
  };

  ExperienceWidgetController.prototype.fromDrag = function(event, ui) {
    var percents;
    this.lineWidth = this.line.width();
    percents = Math.max(ui.position.left * 100 / this.lineWidth, this.min * 100 / this.max);
    this.status.css({
      width: percents + '%'
    });
    return this.input.val(Math.min(this.max, Math.max(this.min, Math.round((percents / 100) * this.max), +this.min)));
  };

  return ExperienceWidgetController;

})();

$(document).ready(function() {
  var element, _i, _len, _ref, _results;
  _ref = $('.experience-widget');
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    element = _ref[_i];
    _results.push(new ExperienceWidgetController($(element)));
  }
  return _results;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cGVyaWVuY2VXaWRnZXRDb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLDBCQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLG9DQUFFLE1BQUYsR0FBQTtBQUNYLFFBQUEsUUFBQTtBQUFBLElBRFksSUFBQyxDQUFBLFNBQUEsTUFDYixDQUFBO0FBQUEsK0NBQUEsQ0FBQTtBQUFBLDJDQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLElBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxvQkFBYixDQUFWLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxJQUFELEdBQVEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsa0JBQWIsQ0FEUixDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLG9CQUFiLENBRlYsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxhQUFiLENBSFQsQ0FBQTtBQUFBLElBSUEsSUFBQyxDQUFBLEdBQUQsR0FBTyxRQUFBLENBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsVUFBYixDQUFULEVBQW1DLEVBQW5DLENBSlAsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLEdBQUQsR0FBTyxRQUFBLENBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsVUFBYixDQUFULEVBQW1DLEVBQW5DLENBTFAsQ0FBQTtBQUFBLElBTUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxRQUFBLENBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsY0FBYixDQUFULEVBQXVDLEVBQXZDLENBTlgsQ0FBQTtBQUFBLElBUUEsSUFBQyxDQUFBLElBQUksQ0FBQyxFQUFO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cmllbmNlV2lkZ2V0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4cGVyaWVuY2VXaWRnZXRDb250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAoQHdpZGdldCktPlxuICAgIEBzdGF0dXMgPSBAd2lkZ2V0LmZpbmQgJy5leHBlcmllbmNlLXN0YXR1cydcbiAgICBAbGluZSA9IEB3aWRnZXQuZmluZCAnLmV4cGVyaWVuY2UtbGluZSdcbiAgICBAaGFuZGxlID0gQHdpZGdldC5maW5kICcuZXhwZXJpZW5jZS1oYW5kbGUnXG4gICAgQGlucHV0ID0gQHdpZGdldC5maW5kICdpbnB1dC52YWx1ZSdcbiAgICBAbWF4ID0gcGFyc2VJbnQgQHdpZGdldC5hdHRyKCdkYXRhLW1heCcpLCAxMFxuICAgIEBtaW4gPSBwYXJzZUludCBAd2lkZ2V0LmF0dHIoJ2RhdGEtbWluJyksIDEwXG4gICAgQGluaXRpYWwgPSBwYXJzZUludCBAd2lkZ2V0LmF0dHIoJ2RhdGEtaW5pdGlhbCcpLCAxMFxuXG4gICAgQGxpbmUub24gJ2NsaWNrJywgQGZyb21DbGlja1xuXG4gICAgQGlucHV0Lm9uICdjaGFuZ2UnLCBAZnJvbUlucHV0XG5cbiAgICBAaGFuZGxlLmRyYWdnYWJsZVxuICAgICAgY29udGFpbm1lbnQ6IFwicGFyZW50XCJcbiAgICAgIGF4aXM6IFwieFwiXG4gICAgICBkcmFnOiBAZnJvbURyYWdcbiAgICAgIHN0b3A6IEBvblN0b3BcbiAgICAgIGhhbmRsZTogXCJzcGFuXCJcblxuICAgIEBpbnB1dC52YWwgTWF0aC5taW4oQG1heCwgTWF0aC5tYXgoQG1pbiwgQGluaXRpYWwpKVxuICAgIHBlcmNlbnRzID0gQGluaXRpYWwqMTAwL01hdGguYWJzKEBtYXgtQG1pbilcbiAgICBAc3RhdHVzLmNzc1xuICAgICAgd2lkdGg6IHBlcmNlbnRzKyclJ1xuICAgIEBoYW5kbGUuY3NzXG4gICAgICBsZWZ0OiBwZXJjZW50cysnJSdcblxuXG5cbiAgZnJvbUlucHV0OiAoZXZlbnQpPT5cbiAgICB2YWwgPSBAaW5wdXQudmFsKCkudHJpbSgpXG4gICAgaWYgdmFsID09IFwiXCJcbiAgICAgIEBpbnB1dC52YWwgQGluaXRpYWxcbiAgICAgIHZhbCA9IEBpbml0aWFsXG4gICAgdmFsID0gTWF0aC5taW4oQG1heCwgTWF0aC5tYXgoQG1pbiwgcGFyc2VJbnQodmFsLDEwKSkpXG4gICAgQGlucHV0LnZhbCB2YWxcbiAgICBwZXJjZW50cyA9IE1hdGgubWluKDEwMCwgcGFyc2VJbnQodmFsLDEwKSoxMDAvQG1heClcbiAgICBAc3RhdHVzLmNzc1xuICAgICAgd2lkdGg6IHBlcmNlbnRzKyclJ1xuICAgIEBoYW5kbGUuY3NzXG4gICAgICBsZWZ0OiBwZXJjZW50cysnJSdcblxuICBmcm9tQ2xpY2s6IChldmVudCk9PlxuICAgIEBsaW5lV2lkdGggPSBAbGluZS53aWR0aCgpXG4gICAgbGVmdCA9IGV2ZW50LmNsaWVudFgtQGxpbmUub2Zmc2V0KCkubGVmdFxuICAgIHBlcmNlbnRzID0gTWF0aC5tYXgoKGxlZnQqMTAwL0BsaW5lV2lkdGgpLCAgKEBtaW4qMTAwL0BtYXgpKVxuICAgIEBzdGF0dXMuY3NzXG4gICAgICB3aWR0aDogcGVyY2VudHMrJyUnXG4gICAgQGhhbmRsZS5jc3NcbiAgICAgIGxlZnQ6IHBlcmNlbnRzKyclJ1xuICAgIEBpbnB1dC52YWwgTWF0aC5taW4oQG1heCwgTWF0aC5tYXgoQG1pbiwgTWF0aC5yb3VuZCgocGVyY2VudHMvMTAwKSpAbWF4KVxuICAgICAgKyBAbWluKSlcblxuICBvblN0b3A6IChldmVudCwgdWkpPT5cbiAgICBwZXJjZW50cyA9IE1hdGgubWF4KHVpLnBvc2l0aW9uLmxlZnQqMTAwL0BsaW5lV2lkdGgsICAoQG1pbioxMDAvQG1heCkpXG4gICAgY29uc29sZS5sb2cgdWkucG9zaXRpb24ubGVmdCwgcGVyY2VudHNcbiAgICBAaGFuZGxlLmNzc1xuICAgICAgbGVmdDogcGVyY2VudHMrJyUnXG5cbiAgICAjIHBlcmNlbnRzID0gTWF0aC5tYXgodWkucG9zaXRpb24ubGVmdCoxMDAvQGxpbmVXaWR0aCwgIChAbWluKjEwMC9AbWF4KSlcbiAgICAjIEBoYW5kbGUuY3NzXG4gICAgIyAgIHdpZHRoOiBwZXJjZW50cysnJSdcblxuICBmcm9tRHJhZzogKGV2ZW50LCB1aSk9PlxuICAgIEBsaW5lV2lkdGggPSBAbGluZS53aWR0aCgpXG4gICAgcGVyY2VudHMgPSBNYXRoLm1heCh1aS5wb3NpdGlvbi5sZWZ0KjEwMC9AbGluZVdpZHRoLCAgKEBtaW4qMTAwL0BtYXgpKVxuICAgIEBzdGF0dXMuY3NzXG4gICAgICB3aWR0aDogcGVyY2VudHMrJyUnXG4gICAgQGlucHV0LnZhbCBNYXRoLm1pbihAbWF4LCBNYXRoLm1heChAbWluLCBNYXRoLnJvdW5kKChwZXJjZW50cy8xMDApKkBtYXgpXG4gICAgICArIEBtaW4pKVxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5ICgpLT5cbiAgZm9yIGVsZW1lbnQgaW4gJCgnLmV4cGVyaWVuY2Utd2lkZ2V0JylcbiAgICBuZXcgRXhwZXJpZW5jZVdpZGdldENvbnRyb2xsZXIgJChlbGVtZW50KSJdfQ==