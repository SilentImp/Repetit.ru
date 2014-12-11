var MessagePanel,
  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

MessagePanel = (function() {
  function MessagePanel(widget) {
    this.widget = widget;
    this.closePanel = __bind(this.closePanel, this);
    this.itype = 'click';
    if ($('html').hasClass('touch')) {
      this.itype = 'touchstart';
    }
    this.close = this.widget.find('.close');
    this.close.on(this.itype, this.closePanel);
  }

  MessagePanel.prototype.closePanel = function(event) {
    event.preventDefault();
    return this.widget.fadeOut((function(_this) {
      return function() {
        return _this.widget.remove();
      };
    })(this));
  };

  return MessagePanel;

})();

$(document).ready(function() {
  var element, _i, _len, _ref, _results;
  _ref = $('.message-panel');
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    element = _ref[_i];
    _results.push(new MessagePanel($(element)));
  }
  return _results;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1lc3NhZ2VQYW5lbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxZQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHNCQUFFLE1BQUYsR0FBQTtBQUNYLElBRFksSUFBQyxDQUFBLFNBQUEsTUFDYixDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLElBQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxPQUFULENBQUE7QUFDQSxJQUFBLElBQUcsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBSDtBQUNFLE1BQUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxZQUFULENBREY7S0FEQTtBQUFBLElBSUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxRQUFiLENBSlQsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLENBQVUsSUFBQyxDQUFBLEtBQVgsRUFBa0IsSUFBQyxDQUFBLFVBQW5CLENBTEEsQ0FEVztFQUFBLENBQWI7O0FBQUEseUJBUUEsVUFBQSxHQUFZLFNBQUMsS0FBRCxHQUFBO0FBQ1YsSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtXQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBUixDQUFnQixDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQSxHQUFBO2VBQ2QsS0FBQyxDQUFBLE1BQU0sQ0FBQyxNQUFSLENBQUEsRUFEYztNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWhCLEVBRlU7RUFBQSxDQVJaLENBQUE7O3NCQUFBOztJQURGLENBQUE7O0FBQUEsQ0FpQkEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUEsR0FBQTtBQUNoQixNQUFBLGlDQUFBO0FBQUE7QUFBQTtPQUFBLDJDQUFBO3VCQUFBO0FBQ0Usa0JBQUksSUFBQSxZQUFBLENBQWEsQ0FBQSxDQUFFLE9BQUYsQ0FBYixFQUFKLENBREY7QUFBQTtrQkFEZ0I7QUFBQSxDQUFsQixDQWpCQSxDQUFBIiwiZmlsZSI6Ik1lc3NhZ2VQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1lc3NhZ2VQYW5lbFxuICBjb25zdHJ1Y3RvcjogKEB3aWRnZXQpLT5cbiAgICBAaXR5cGUgPSAnY2xpY2snXG4gICAgaWYgJCgnaHRtbCcpLmhhc0NsYXNzKCd0b3VjaCcpXG4gICAgICBAaXR5cGUgPSAndG91Y2hzdGFydCdcblxuICAgIEBjbG9zZSA9IEB3aWRnZXQuZmluZCgnLmNsb3NlJylcbiAgICBAY2xvc2Uub24gQGl0eXBlLCBAY2xvc2VQYW5lbFxuXG4gIGNsb3NlUGFuZWw6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAd2lkZ2V0LmZhZGVPdXQgKCk9PlxuICAgICAgQHdpZGdldC5yZW1vdmUoKVxuXG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBmb3IgZWxlbWVudCBpbiAkKCcubWVzc2FnZS1wYW5lbCcpXG4gICAgbmV3IE1lc3NhZ2VQYW5lbCgkKGVsZW1lbnQpKSJdfQ==