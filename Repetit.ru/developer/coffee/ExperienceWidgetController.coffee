class ExperienceWidgetController
  constructor: (@widget)->
    @status = @widget.find '.experience-status'
    @line = @widget.find '.experience-line'
    @handle = @widget.find '.experience-handle'
    @input = @widget.find 'input.value'
    @max = parseInt @widget.attr('data-max'), 10
    @base = parseInt @widget.attr('data-base'), 10
    @initial = parseInt @widget.attr('data-initial'), 10

    @line.on 'click', @fromClick

    @input.on 'change', @fromInput

    @handle.draggable
      containment: "parent"
      axis: "x"
      drag: @fromDrag

    @input.val Math.min(@max, Math.max(@base, @initial))
    percents = @initial*100/Math.abs(@max-@base)
    @status.css
      width: percents+'%'
    @handle.css
      left: percents+'%'

  fromInput: (event)=>
    val = @input.val().trim()
    if val == ""
      @input.val @initial
      val = @initial
    percents = Math.min(100, parseInt(val,10)*100/Math.abs(@max-@base))
    @status.css
      width: percents+'%'
    @handle.css
      left: percents+'%'

  fromClick: (event)=>
    @lineWidth = @line.width()
    left = event.clientX-@line.offset().left
    percents = left*100/@lineWidth
    @status.css
      width: percents+'%'
    @handle.css
      left: percents+'%'
    @input.val Math.min(@max, Math.max(@base, Math.floor((percents/100)*@max)
      + @base))


  fromDrag: (event, ui)=>
    @lineWidth = @line.width()
    percents = ui.position.left*100/@lineWidth
    @status.css
      width: percents+'%'
    @input.val Math.min(@max, Math.max(@base, Math.floor((percents/100)*@max)
      + @base))


$(document).ready ()->
  for element in $('.experience-widget')
    new ExperienceWidgetController $(element)