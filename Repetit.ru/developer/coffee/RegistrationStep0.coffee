class RegistrationStep0
  constructor: ->
    @widget = $ '.registration-step-0'

    if @widget.length != 1
      throw {error: 'не найден виджет'}
    
    @form_registration = @widget.find '.registration'
    @form_sms = @widget.find '.sms'
    @submit = @form_registration.find 'button'
    inputs = @widget.find 'input'
    inputs.on 'keyup', @inputChange
    inputs.on 'change', @inputChange
    
    @regions_input = $ '#reg-region'
    @regions_list = @widget.find '.regions-list'
    @regions_list_search = @regions_list.find 'input'
    @regions_list_close = @regions_list.find '.regions-list-close'

    $('body').on 'click', '.regions-list .regions a', @selectRegion

    region_controls = @widget.find '[for="reg-region"], .change-region'
    region_controls.on 'click focus', @showRegionsList
    @regions_input.on 'click focus', @showRegionsList

    @regions_list_close.on 'click', @hideRegionsList

    @form_registration.h5Validate()
    @form_registration.on 'submit', @formSubmit

    @form_sms.h5Validate()

    $('a.register').on 'click', @showRegistrationPopup

    @widget.find('.registration-step-0-close').on 'click',
      @hideRegistrationPopup

    if $('html').hasClass 'no-cssvhunit'
      vh = Math.max(document.documentElement.clientHeight,
        window.innerHeight || 0)
      @widget.css
        'height': vh
        'line-height': vh
      @regions_list.css
        'max-height': 0.8*vh

  showRegistrationPopup: (event)=>
    event.preventDefault()
    @widget.stop().fadeIn()

  hideRegistrationPopup: (event)=>
    event.preventDefault()
    @widget.stop().fadeOut()
    @form_registration[0].reset()
    @form_sms[0].reset()
    @regions_input.removeClass 'changed'
    @regions_list_search.val ''

  showRegionsList: (event)=>
    event.preventDefault()
    @regions_list.stop().fadeIn()
    @regions_list_search[0].focus()

  hideRegionsList: (event)=>
    event.preventDefault()
    @regions_list.stop().fadeOut()
    @submit.focus()
    @regions_list_search.val ''

  selectRegion: (event)=>
    event.preventDefault()
    @regions_input.val event.currentTarget.getAttribute('data-title')
    @regions_input.addClass 'changed'
    @regions_list.stop().fadeOut()
    @submit.focus()
    @regions_list_search.val ''

  inputChange: (event)->
    input = $ event.currentTarget
    if input.val().trim().length == 0
      input.toggleClass 'changed', false
    else
      input.toggleClass 'changed', true

  formSubmit: (event)=>
    if @form_registration.find('.ui-state-error').length>0
      return
    event.preventDefault()
    $.ajax
      type: "POST"
      url: @form_registration.attr('action')
      data: @form_registration.serialize()
      success: @formSubmited
      fail: @formSubmited
      complete: @formSubmited
      dataType: 'json'
    @form_registration[0].reset()
    @regions_input.removeClass 'changed'

  formSubmited: (data)=>
    @form_registration.fadeOut()
    @form_sms.fadeIn()

$(document).ready ->
  new RegistrationStep0()