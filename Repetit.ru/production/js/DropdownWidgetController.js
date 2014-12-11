var DropdownWidgetController,
  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

DropdownWidgetController = (function() {
  function DropdownWidgetController(widget) {
    this.widget = widget;
    this.closeDropdown = __bind(this.closeDropdown, this);
    this.stop = __bind(this.stop, this);
    this.toggleDropdown = __bind(this.toggleDropdown, this);
    this.startTimer = __bind(this.startTimer, this);
    this.stopTimer = __bind(this.stopTimer, this);
    if (this.widget.hasClass('started')) {
      return false;
    }
    this.widget.addClass('started');
    this.list = this.widget.find('.list');
    this.itype = 'click';
    if ($('html').hasClass('touch')) {
      this.itype = 'touchstart';
    }
    this.list = this.widget.find('.list');
    this.current = this.widget.find('.current');
    $(document).on(this.itype, this.closeDropdown);
    this.widget.on(this.itype, this.stop);
    this.current.on(this.itype, this.toggleDropdown);
    this.widget.on('mouseleave', this.startTimer);
    this.widget.on('mouseenter', this.stopTimer);
  }

  DropdownWidgetController.prototype.stopTimer = function(event) {
    if (this.timer !== void 0) {
      return window.clearTimeout(this.timer);
    }
  };

  DropdownWidgetController.prototype.startTimer = function(event) {
    return this.timer = window.setTimeout(this.closeDropdown, 1500);
  };

  DropdownWidgetController.prototype.toggleDropdown = function(event) {
    return this.list.toggle();
  };

  DropdownWidgetController.prototype.stop = function(event) {
    return event.stopPropagation();
  };

  DropdownWidgetController.prototype.closeDropdown = function() {
    return this.list.hide();
  };

  return DropdownWidgetController;

})();

$(document).ready(function() {
  var element, _i, _len, _ref, _results;
  _ref = $('.dropdown-container-widget');
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    element = _ref[_i];
    _results.push(new DropdownWidgetController($(element)));
  }
  return _results;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyb3Bkb3duV2lkZ2V0Q29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSx3QkFBQTtFQUFBLGtGQUFBOztBQUFBO0FBQ2UsRUFBQSxrQ0FBRSxNQUFGLEdBQUE7QUFDWCxJQURZLElBQUMsQ0FBQSxTQUFBLE1BQ2IsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLG1EQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsUUFBUixDQUFpQixTQUFqQixDQUFIO0FBQ0UsYUFBTyxLQUFQLENBREY7S0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxRQUFSLENBQWlCLFNBQWpCLENBRkEsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxPQUFiLENBSFIsQ0FBQTtBQUFBLElBSUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxPQUpULENBQUE7QUFLQSxJQUFBLElBQUcsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBSDtBQUNFLE1BQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxZQUFULENBREY7S0FMQTtBQUFBLElBT0EsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxPQUFiLENBUFIsQ0FBQTtBQUFBLElBUUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxVQUFiLENBUlgsQ0FBQTtBQUFBLElBVUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEVBQVosQ0FBZSxJQUFDLENBQUEsS0FBaEIsRUFBdUIsSUFBQyxDQUFBLGFBQXhCLENBVkEsQ0FBQTtBQUFBLElBV0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxFQUFSLENBQVcsSUFBQyxDQUFBLEtBQVosRUFBbUIsSUFBQyxDQUFBLElBQXBCLENBWEEsQ0FBQTtBQUFBLElBWUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxFQUFULENBQVksSUFBQyxDQUFBLEtBQWIsRUFBb0IsSUFBQyxDQUFBLGNBQXJCLENBWkEsQ0FBQTtBQUFBLElBYUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxFQUFSLENBQVcsWUFBWCxFQUF5QixJQUFDLENBQUEsVUFBMUIsQ0FiQSxDQUFBO0FBQUEsSUFjQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxZQUFYLEVBQXlCLElBQUMsQ0FBQSxTQUExQixDQWRBLENBRFc7RUFBQSxDQUFiOztBQUFBLHFDQWlCQSxTQUFBLEdBQVcsU0FBQyxLQUFELEdBQUE7QUFDVCxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUQsS0FBUSxNQUFYO2FBQ0UsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsSUFBQyxDQUFBLEtBQXJCLEVBREY7S0FEUztFQUFBLENBakJYLENBQUE7O0FBQUEscUNBcUJBLFVBQUEsR0FBWSxTQUFDLEtBQUQsR0FBQTtXQUNWLElBQUMsQ0FBQSxLQUFELEdBQVMsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsSUFBQyxDQUFBLGFBQW5CLEVBQWtDLElBQWxDLEVBREM7RUFBQSxDQXJCWixDQUFBOztBQUFBLHFDQXdCQSxjQUFBLEdBQWdCLFNBQUMsS0FBRCxHQUFBO1dBQ2QsSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFOLENBQUEsRUFEYztFQUFBLENBeEJoQixDQUFBOztBQUFBLHFDQTJCQSxJQUFBLEdBQU0sU0FBQyxLQUFELEdBQUE7V0FDSixLQUFLLENBQUMsZUFBTixDQUFBLEVBREk7RUFBQSxDQTNCTixDQUFBOztBQUFBLHFDQThCQSxhQUFBLEdBQWUsU0FBQSxHQUFBO1dBQ2IsSUFBQyxDQUFBLElBQUksQ0FBQyxJQUFOLENBQUEsRUFEYTtFQUFBLENBOUJmLENBQUE7O2tDQUFBOztJQURGLENBQUE7O0FBQUEsQ0FrQ0EsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUEsR0FBQTtBQUNoQixNQUFBLGlDQUFBO0FBQUE7QUFBQTtPQUFBLDJDQUFBO3VCQUFBO0FBQ0Usa0JBQUksSUFBQSx3QkFBQSxDQUF5QixDQUFBLENBQUUsT0FBRixDQUF6QixFQUFKLENBREY7QUFBQTtrQkFEZ0I7QUFBQSxDQUFsQixDQWxDQSxDQUFBIiwiZmlsZSI6IkRyb3Bkb3duV2lkZ2V0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlclxuICBjb25zdHJ1Y3RvcjogKEB3aWRnZXQpLT5cbiAgICBpZiBAd2lkZ2V0Lmhhc0NsYXNzICdzdGFydGVkJ1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgQHdpZGdldC5hZGRDbGFzcyAnc3RhcnRlZCdcbiAgICBAbGlzdCA9IEB3aWRnZXQuZmluZCAnLmxpc3QnXG4gICAgQGl0eXBlID0gJ2NsaWNrJ1xuICAgIGlmICQoJ2h0bWwnKS5oYXNDbGFzcygndG91Y2gnKVxuICAgICAgQGl0eXBlID0gJ3RvdWNoc3RhcnQnXG4gICAgQGxpc3QgPSBAd2lkZ2V0LmZpbmQgJy5saXN0J1xuICAgIEBjdXJyZW50ID0gQHdpZGdldC5maW5kICcuY3VycmVudCdcblxuICAgICQoZG9jdW1lbnQpLm9uIEBpdHlwZSwgQGNsb3NlRHJvcGRvd25cbiAgICBAd2lkZ2V0Lm9uIEBpdHlwZSwgQHN0b3BcbiAgICBAY3VycmVudC5vbiBAaXR5cGUsIEB0b2dnbGVEcm9wZG93blxuICAgIEB3aWRnZXQub24gJ21vdXNlbGVhdmUnLCBAc3RhcnRUaW1lclxuICAgIEB3aWRnZXQub24gJ21vdXNlZW50ZXInLCBAc3RvcFRpbWVyXG5cbiAgc3RvcFRpbWVyOiAoZXZlbnQpPT5cbiAgICBpZiBAdGltZXIhPXVuZGVmaW5lZFxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCBAdGltZXJcblxuICBzdGFydFRpbWVyOiAoZXZlbnQpPT5cbiAgICBAdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCBAY2xvc2VEcm9wZG93biwgMTUwMFxuXG4gIHRvZ2dsZURyb3Bkb3duOiAoZXZlbnQpPT5cbiAgICBAbGlzdC50b2dnbGUoKVxuXG4gIHN0b3A6IChldmVudCk9PlxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgY2xvc2VEcm9wZG93bjogPT5cbiAgICBAbGlzdC5oaWRlKClcblxuJChkb2N1bWVudCkucmVhZHkgLT5cbiAgZm9yIGVsZW1lbnQgaW4gJCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcblxuIl19