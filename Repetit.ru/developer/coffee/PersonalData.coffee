class PersonalData
  constructor: ->
    @form = $ 'form.panel'
    if @form.length != 1
      throw new Error('не найдена форма')

    @file = @form.find '#registration-avatar'
    @avatarTemplate = document.getElementById 'current-avatar-template'
    @fileSelector = $ '.file-selector'

    # rega = $('.photo')
    # if rega.length > 0
    #   rega.fileapi
    #     # url: @form.attr('action'),
    #     url: 'http://test.silentimp.info/test.php'
    #     duplicate: false
    #     accept: 'image/*'
    #     maxSize: 5 * FileAPI.MB
    #     autoUpload: false
    #     multiple: false
    #     elements:
    #       empty: 
    #         show: '.file-selector'
    #       list: '.preview'
    #       file:
    #         preview:
    #           el: '.photo'
    #           width: 80
    #           height: 80
    #         tpl: '.current-avatar'
    #       dnd:
    #         el: '.file-selector'
    #         hover: '.file-selector__file'
    #     # onSelect: (evt, ui)=>
    #     #   reader = new FileReader()
    #     #   reader.onload = (event)=>
    #     #     @avatarTemplate.content.querySelector('img').src = event.target.result
    #     #     avatar = document.importNode @avatarTemplate.content, true
    #     #     prev = @fileSelector.prev()
    #     #     if prev.hasClass('current-avatar')
    #     #       prev.remove()
    #     #     @fileSelector.before avatar
    #     #     @fileSelector.prev().find('.close').on 'click', @removeAvatar
    #     #   reader.readAsDataURL ui.files[0]

    FileAPI.event.on document.getElementById('registration-avatar'), 'change', @avatarSelected
    $(document).dnd @over, @drop
    FileAPI.event.on document, 'drop', @droped

    sertificats = $('.sertificats')
    if sertificats.length>0
      sertificats.fileapi
        # url: @form.attr('action'),
        url: 'http://test.silentimp.info/test.php'
        duplicate: false,
        accept: 'image/*',
        maxSize: 5 * FileAPI.MB,
        autoUpload: false,
        multiple: true,
        onSelect: (evt, ui)=>
          @cerificates_count++
          reader = new FileReader()
          reader.onload = (event)=>
            @cert_list.append @source
              "id" : @cerificates_count
              "src" : event.target.result
          reader.readAsDataURL ui.files[0]
        elements:
          ctrl:
            upload: '.add-sertificat label'
          list: '.sertificat-list'


    sertificat = $("#sertificat-template")
    if sertificat.length >0
      @source = $("#sertificat-template").html()
      @source = Handlebars.compile @source
      @cert_list = $ '.sertificat-list'
      @cerificates_count = 0

    format = $ '.lessons-format'
    if format.length > 0
      inputs = format.find 'input'
      for input in inputs
        price_input = document.getElementById input.getAttribute('data-price-field')
        price = $(price_input).closest('.subdevision')
        if input.checked
          price.removeClass('hide')
          price_input.removeAttribute('disabled')
          price_input.setAttribute('required', 'required')
        else
          price.addClass('hide')
          price_input.classList.remove('ui-state-error')
          price_input.setAttribute('disabled', 'disabled')
          price_input.removeAttribute('required')

      inputs.on 'change', (event)=>
        input = $ event.currentTarget
        price_input = document.getElementById input.attr('data-price-field')
        price = $(price_input).closest('.subdevision')
        if event.currentTarget.checked
          price.removeClass('hide')
          price_input.removeAttribute('disabled')
          price_input.setAttribute('required', 'required')
        else
          price.addClass('hide')
          price_input.classList.remove('ui-state-error')
          price_input.setAttribute('disabled', 'disabled')
          price_input.removeAttribute('required')
          


    @address = $ '.address-holder'
    @address_count = 0
    if @address.length > 0
      @address_count++
      @address_source = $("#address-template").html()
      @address_source = Handlebars.compile @address_source
      @address.prepend @address_source
        "id" : @address_count
      @add_education = $ '.add-address'
      @add_education.on 'click', (event)=>
        event.preventDefault()
        @address_count++
        @add_education.before @address_source
          "id" : @address_count
        @address.find('.adress-wrapper:last select').chosen
          disable_search_threshold: 30

    @education = $ '.education'
    @education_count = 0
    if @education.length > 0
      @education_count++
      @education_source = $("#education-template").html()
      @education_source = Handlebars.compile @education_source
      @education.prepend @education_source
        "id" : @education_count
      @add_education = $ '.add-education'
      @add_education.on 'click', (event)=>
        event.preventDefault()
        @education_count++
        @add_education.before @education_source
          "id" : @education_count

    select = $ 'select'
    if select.length > 0
      select.chosen
        disable_search_threshold: 30

    time = $ '#duration'
    if time.length > 0
      time.noUiSlider
        step: 5,
        connect: "lower",
        start: 0,
        range:
          'min': [30],
          'max': [180]
        format: wNumb
          decimals: 0

      duration = $('#duration-value')
      time.Link('lower').to(duration)
      time.on 'change', (event, ui)=>
        console.log event.currentTarget, ui
        $('strong.min-time').text(ui)

    exp = $ '#experience'
    if exp.length > 0
      exp.noUiSlider
        step: 1,
        connect: "lower",
        start: 0,
        range:
          'min': [0],
          'max': [50]
        format: wNumb
          decimals: 0
      exp.Link('lower').to($('#experience-value'))

    @form.h5Validate()
    @form.on 'submit', @afterCheck

    @mounth_widget = @form.find '.month.dropdown-widget'
    @month =  @mounth_widget.find 'select'
    @year_widget = @form.find '.year.dropdown-widget'
    @year =  @year_widget.find 'select'
    @day = @form.find 'input.day'
    
    @day.on   'change', @checkDate
    @month.on 'change', @checkDate
    @year.on  'change', @checkDate

    locations = new Bloodhound
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace("city"),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: "https://dl.dropboxusercontent.com/u/20810772/citys.json"
    
    locations.initialize()

    $('#city').typeahead
      hint: true
      highlight: true
      minLength: 1
    ,
      name: 'locations'
      displayKey: 'city',
      source: locations.ttAdapter()
      templates:
        suggestion: Handlebars.compile('<p><b>{{region}}</b>{{city}}</p>')

    univercitys = new Bloodhound
      datumTokenizer: (data)->
        return Bloodhound.tokenizers.whitespace(data.title)
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: [{"title":"Andorra"},{"title":"UnitedArabEmirates"},{"title":"Afghanistan"},{"title":"AntiguaandBarbuda"},{"title":"Anguilla"},{"title":"Albania"},{"title":"Armenia"},{"title":"Angola"},{"title":"Antarctica"}]

    univercitys.initialize()

    $('#univercity').typeahead
      hint: true
      highlight: true
      minLength: 1
    ,
      name: 'univercitys'
      displayKey: 'title',
      source: univercitys.ttAdapter()
      templates:
        suggestion: Handlebars.compile('<p>{{title}}</p>')


  checkDate: (event)=>
    day = parseInt @day.val().trim(), 10

    if day<1 || isNaN(day)
      @day.val 1
      return

    if !@mounth_widget.hasClass('unchanged') && !@year_widget.hasClass('unchanged')

      days = parseInt moment(@year.val()+"-"+(parseInt(@month.val(),10)+1), "YYYY-MM").daysInMonth(), 10
      if day>days
        @day.val days
        
      return

    if day>31
      @day.val 31

  droped: (event)->
    event.preventDefault()
    FileAPI.getDropFiles event, (files)->

  over: (over)->


  drop: (files)=>
    if files.length
      reader = new FileReader()
      
      reader.onload = (event)=>
        @avatarTemplate.content.querySelector('img').src = event.target.result
        avatar = document.importNode @avatarTemplate.content, true
        prev = @fileSelector.prev()
        if prev.hasClass('current-avatar')
          prev.remove()
        @fileSelector.before avatar
        @fileSelector.prev().find('.close').on 'click', @removeAvatar
      
      reader.readAsDataURL files[0]

  removeAvatar: (event)=>
    event.preventDefault()
    @fileSelector.prev().remove()
    @file.replaceWith @file.val('').clone(true)
    @file = @form.find '#registration-avatar'

  avatarSelected: (event)=>
    files = FileAPI.getFiles(event)

    ext = files[0]['name'].substring(files[0]['name'].lastIndexOf('.') + 1).toLowerCase()

    if (files[0] && (files[0].size <= FileAPI.MB) && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg"))
        
      reader = new FileReader()
      reader.onload = (event)=>
        
        @avatarTemplate.content.querySelector('img').src = event.target.result
        avatar = document.importNode @avatarTemplate.content, true
        prev = @fileSelector.prev()
        if prev.hasClass('current-avatar')
          prev.remove()
        @fileSelector.before avatar
        @fileSelector.prev().find('.close').on 'click', @removeAvatar

      reader.readAsDataURL files[0]

    else
      @fileSelector.prev().remove()
      @file.replaceWith @file.val('').clone(true)
      @file = @form.find '#registration-avatar'


  afterCheck: (event)=>
    
    if @form.find('input.ui-state-error, select.ui-state-error, textarea.ui-state-error').length > 0
      return false

    drop_down_err = false

    for input in @form.find('.dropdown-widget')
      if !input.controller.validate()
        drop_down_err = true

    if drop_down_err
      event.preventDefault()
      return false


$(document).ready ->
  new PersonalData()