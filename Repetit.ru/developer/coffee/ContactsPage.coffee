class ContactsPage
  constructor: ->
    @widget = $ '.contacts-and-feedback'

    if @widget.length != 1
      throw {error: 'не найден виджет'}

    @widget.find('.show-on-map').on 'click', @showMap
    @message = @widget.find '.message-send'
    @lightbox = $ '.lightbox'
    @map = $ '.contacts-map'
    @map.find('.close').on 'click', @hideMap
    @form = @widget.find 'form.feedback'
    @form.on 'submit', @formSubmit

    select = $ 'select'
    if select.length > 0
      select.chosen
        disable_search_threshold: 30

  formSubmit: (event)=>
    event.preventDefault()
    $.ajax
      type: "POST"
      url: @form.attr('action')
      data: @form.serialize()
      success: @formSent
      dataType: 'json'

    # Убрать на продакшене
    @formSent()

  formSent: (data)=>
    @form[0].reset()
    @message.fadeIn()

  hideMap: (event)=>
    event.preventDefault()
    @map.fadeOut()
    @lightbox.fadeOut()
    

  showMap: (event)=>
    event.preventDefault()
    @map.fadeIn()
    @lightbox.fadeIn()
    


$(document).ready ->
  new ContactsPage()