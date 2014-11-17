class MessagePanel
  constructor: (@widget)->
    @itype = 'click'
    if $('html').hasClass('touch')
      @itype = 'touchstart'

    @close = @widget.find('.close')
    @close.on @itype, @closePanel

  closePanel: (event)=>
    event.preventDefault()
    @widget.fadeOut ()=>
      @widget.remove()




$(document).ready ->
  for element in $('.message-panel')
    new MessagePanel($(element))