class RegistrationStep0
  constructor: ->

    @itype = 'click'
    if $('html').hasClass('touch')
      @itype = 'touchstart'

    @widget = $ '.registration-step-0'

    if @widget.length != 1
      throw {error: 'не найден виджет'}

    $('.h5-phone').mask "+7 (999) 999-99-99"

     
    
    
    @form_registration = @widget.find '.registration'
    @form_sms = @widget.find '.sms'
    @form_sms_title = @form_sms.find '>.title'
    @submit = @form_registration.find 'button'
    inputs = @widget.find 'input'
    inputs.on 'keyup', @inputChange
    inputs.on 'blur', @inputChange
    inputs.on 'change', @inputChange
    @form_sms_title.on 'click', @backToForm

    
    @regions_input = $ '#reg-region'
    @regions_list = @widget.find '.regions-list'
    @regions_list_item = @regions_list.find '.item'
    @regions_list_search = @regions_list.find 'input'
    @regions_list_close = @regions_list.find '.regions-list-close'

    @regions_list_search.on 'keyup', @filterCity
    @regions_list_search.on 'change', @filterCity
    @regions_list_close.on @itype, @hideRegionsList

    $('body').on 'click', '.regions-list .regions a', @selectRegion

    region_controls = @widget.find '[for="reg-region"], .change-region'
    region_controls.on @itype+' focus', @showRegionsList
    @regions_input.on @itype+' focus', @showRegionsList

    

    @form_registration.h5Validate()
    @form_registration.on 'submit', @formSubmit

    # console.log @form_registration.find('input')
    # console.log $.h5Validate

    @form_sms.h5Validate()

    $('a.register').on @itype, @showRegistrationPopup

    @widget.find('.registration-step-0-close').on @itype,
      @hideRegistrationPopup

    if $('html').hasClass 'no-cssvhunit'
      vh = Math.max(document.documentElement.clientHeight,
        window.innerHeight || 0)
      @widget.css
        'height': vh
        'line-height': vh
      if !Modernizr.mq("screen and (max-width:600px)")
        @regions_list.css
          'max-height': 0.8*vh

  filterCity: (event)=>
    @regions_list_item.show()
    keyword = @regions_list_search.val().trim()
    if keyword.length==0
      return
    @regions_list.find('.item:not(:contains("'+keyword+'"))').hide()

  showRegistrationPopup: (event)=>
    event.preventDefault()
    @widget.stop().fadeIn()
    if Modernizr.mq("screen and (max-width:600px)")
      $('body>main.page, body>footer, body>header').stop().fadeOut()

  hideRegistrationPopup: (event)=>
    event.preventDefault()
    @widget.stop().fadeOut()
    @form_registration[0].reset()
    @form_sms[0].reset()
    @regions_input.removeClass 'changed'
    @regions_list_search.val ''
    if Modernizr.mq("screen and (max-width:600px)")
      $('body>main.page, body>footer, body>header').stop().fadeIn()

  showRegionsList: (event)=>
    event.preventDefault()
    @regions_list.show()
    @regions_list_item.show()
    @regions_list_search[0].focus()

  hideRegionsList: (event)=>
    event.preventDefault()
    @regions_list.hide()
    @submit.focus()
    @regions_list_search.val ''
    @regions_list_item.show()

  selectRegion: (event)=>
    event.preventDefault()
    @regions_input.val event.currentTarget.getAttribute('data-title')
    @regions_input.blur()
    @regions_list.hide()
    @submit.focus()
    @regions_list_search.val ''
    @regions_list_item.show()

  inputChange: (event)->
    input = $ event.currentTarget
    value = input.val().trim()
    if value.length == 0 || value == '+7 (___) ___-__-__'
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
    @regions_input.removeClass('changed').removeClass('ui-state-error')

    @form_registration[0].reset()

  formSubmited: (data)=>
    @form_registration.find('input').each (index, element)->
      $(element).removeClass('changed').removeClass('ui-state-error')
    @form_registration.fadeOut()
    @form_sms.fadeIn()

  backToForm: (event)=>
    @form_registration.fadeIn()
    @form_sms.fadeOut()

$(document).ready ->
  new RegistrationStep0()