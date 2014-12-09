class DropdownWidgetController
  constructor: (@widget)->
    if @widget.hasClass 'started'
      return false
    @widget.addClass 'started'
    @list = @widget.find '.list'
    @itype = 'click'
    if $('html').hasClass('touch')
      @itype = 'touchstart'
    @list = @widget.find '.list'
    @current = @widget.find '.current'

    $(document).on @itype, @closeDropdown
    @widget.on @itype, @stop
    @current.on @itype, @toggleDropdown
    @widget.on 'mouseleave', @startTimer
    @widget.on 'mouseenter', @stopTimer

  stopTimer: (event)=>
    if @timer!=undefined
      window.clearTimeout @timer

  startTimer: (event)=>
    @timer = window.setTimeout @closeDropdown, 1500

  toggleDropdown: (event)=>
    @list.toggle()

  stop: (event)=>
    event.stopPropagation()

  closeDropdown: =>
    @list.hide()

$(document).ready ->
  for element in $('.dropdown-container-widget')
    new DropdownWidgetController($(element))

