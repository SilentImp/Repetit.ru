class DropdownWidgetController
  constructor: (@widget)->

    @itype = 'click'
    if $('html').hasClass('touch')
      @itype = 'touchstart'

    @select =   @widget.find  'select'
    @list =     @widget.find  '.list'
    @options =  @list.find    '.option'
    @current =  @widget.find  '.current'

    @options.on @itype, @selectOption

    @widget[0].controller = 
      validate: @validate

  validate: =>
    attr = @select.attr 'required'
    if typeof attr == typeof undefined || attr == false
      return true

    err = @select.attr 'data-h5-errorid'
    if @select.hasClass 'unchanged'
      @widget.addClass 'ui-state-error'
      if typeof err != typeof undefined && err != false
        $("#"+err).show()
      return false
    else
      @widget.removeClass 'ui-state-error'
      if typeof err != typeof undefined && err != false
        if $('.dropdown-widget.ui-state-error [data-h5-errorid="'+err+'"]').length == 0
          $("#"+err).hide()

  selectOption: (event)=>
    option = $ event.currentTarget
    @list.find('.option.selected').removeClass 'selected'
    option.addClass 'selected'
    value = option.attr 'data-value'
    @select.val value
    @select.removeClass 'unchanged'
    @current.removeClass('default').text option.text()
    @validate()

  

$(document).ready ()->
  for element in $('.dropdown-widget')
    new DropdownWidgetController($(element))