class PersonalData
  constructor: ->
    @form = $ 'form.panel'
    if @form.length != 1
      throw {error: 'не найдена форма'}

    @file = @form.find '#registration-avatar'
    @avatarTemplate = document.getElementById 'current-avatar-template'
    @fileSelector = $ '.file-selector'

    FileAPI.event.on document.getElementById('registration-avatar'), 'change', @avatarSelected
    $(document).dnd @over, @drop

    FileAPI.event.on document, 'drop', @droped

    @form.h5Validate()
    @form.on 'submit', @afterCheck

    @mounth_widget = @form.find '.month.dropdown-widget'
    @month =  @mounth_widget.find 'select'
    @year_widget = @form.find '.year.dropdown-widget'
    @year =  @year_widget.find 'select'
    @day = @form.find 'input.day'
    
    @day.on 'change', @checkDate
    @month.on 'change', @checkDate
    @year.on 'change', @checkDate

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
    console.log 'droped', event
    FileAPI.getDropFiles event, (files)->
      console.log 'file: ', files

  over: (over)->


  drop: (files)=>
    console.log 'drop', files.length, files
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
    if (files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg"))
        
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