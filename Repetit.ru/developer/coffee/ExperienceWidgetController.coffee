class ExperienceWidgetController
  constructor: (@widget)->
    @status = @widget.find '.experience-status'
    @line = @widget.find '.experience-line'
    @handle = @widget.find '.experience-handle'
    @input = @widget.find 'input.value'
    @max = parseInt @widget.attr('data-max'), 10
    @min = parseInt @widget.attr('data-min'), 10
    @initial = parseInt @widget.attr('data-initial'), 10

    @line.on 'click', @fromClick

    @input.on 'change', @fromInput

    @handle.draggable
      containment: "parent"
      axis: "x"
      drag: @fromDrag
      stop: @onStop
      handle: "span"

    @input.val Math.min(@max, Math.max(@min, @initial))
    percents = @initial*100/Math.abs(@max-@min)
    @status.css
      width: percents+'%'
    @handle.css
      left: percents+'%'



  fromInput: (event)=>
    val = @input.val().trim()
    if val == ""
      @input.val @initial
      val = @initial
    val = Math.min(@max, Math.max(@min, parseInt(val,10)))
    @input.val val
    percents = Math.min(100, parseInt(val,10)*100/@max)
    @status.css
      width: percents+'%'
    @handle.css
      left: percents+'%'

  fromClick: (event)=>
    @lineWidth = @line.width()
    left = event.clientX-@line.offset().left
    percents = Math.max((left*100/@lineWidth),  (@min*100/@max))
    @status.css
      width: percents+'%'
    @handle.css
      left: percents+'%'
    @input.val Math.min(@max, Math.max(@min, Math.round((percents/100)*@max)
      + @min))

  onStop: (event, ui)=>
    percents = Math.max(ui.position.left*100/@lineWidth,  (@min*100/@max))
    console.log ui.position.left, percents
    @handle.css
      left: percents+'%'

    # percents = Math.max(ui.position.left*100/@lineWidth,  (@min*100/@max))
    # @handle.css
    #   width: percents+'%'

  fromDrag: (event, ui)=>
    @lineWidth = @line.width()
    percents = Math.max(ui.position.left*100/@lineWidth,  (@min*100/@max))
    @status.css
      width: percents+'%'
    @input.val Math.min(@max, Math.max(@min, Math.round((percents/100)*@max)
      + @min))


$(document).ready ()->
  for element in $('.experience-widget')
    new ExperienceWidgetController $(element)