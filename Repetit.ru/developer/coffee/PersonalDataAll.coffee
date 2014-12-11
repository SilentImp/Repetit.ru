class PersonalDataAll
  constructor: ->
    @widget = $ '.registration-steps'
    if @widget.length == 0
      throw new Error('не найден виджет')

    @steps = @widget.find '.steps'
    @panels = @widget.find '.panel'
    @current = @widget.find '.panel.current'

    @step1 = @widget.find '.panel.step-1'
    @step2 = @widget.find '.panel.step-2'
    @step3 = @widget.find '.panel.step-3'
    @step4 = @widget.find '.panel.step-4'
    @step5 = @widget.find '.panel.step-5'

    # Общее
    select = $ 'select'
    if select.length > 0
      select.chosen
        disable_search_threshold: 30

    # Шаг 1
    # Проверка полей ввода
    @step1.h5Validate()

    # Загрузка аватара
    @file = @step1.find '#registration-avatar'
    @avatarTemplate = document.getElementById 'current-avatar-template'
    @fileSelector = @step1.find '.file-selector'
    
    FileAPI.event.on @file[0], 'change', @avatarSelected
    @fileSelector.dnd @over, @drop
    FileAPI.event.on document, 'drop', @droped

    # Ползунок опыта
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

    # Дата рождения
    @month = @step1.find '.month select'
    @year  = @step1.find '.year select'
    @day   = @step1.find 'input.day'
    @day.on   'change', @checkDate
    @month.on 'change', @checkDate
    @year.on  'change', @checkDate

    # Отправка данных Шаг 1
    @step1.find('button[type="submit"]').on 'click', @step1Submit


    # Шаг 2
    # Проверка полей ввода
    @step2.h5Validate()

    # Ползунок длительности занятий
    @duration_value = $('#duration-value')

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

      
      time.Link('lower').to(@duration_value)
      time.on 'change', (event, ui)=>
        $('strong.min-time').text(ui)

    # Формат занятий
    @formats = @step2.find '.lessons-format'
    @formats.find('input').on 'change', @checkFormat
    @checkFormat()

    # Добавка предмета
    @add_subject = @step2.find '.add-subject'
    @subj_count = 0
    @subject_source = $("#subj-template").html()
    @subject_source = Handlebars.compile @subject_source
    @add_subject.on 'click', @newSubject
    @add_subject.trigger 'click'

    # Подразделы предмета
    @subject_section_source = $("#subj-section-template").html()
    @subject_section_source = Handlebars.compile @subject_section_source

    #Удаление предмета
    @remove_subject = @step2.find '.remove-subject'
    @remove_subject.on 'click', @removeSubject

    @step2.find('button[type="submit"]').on 'click', @step2Submit
    @step2.find('a.previous').on 'click', @step2Back


    # Шаг 3
    # Проверка полей ввода
    @step3.h5Validate()

    #Добавка адреса
    @add_address = @step3.find '.add-address'
    @address_count = 0
    @address_source = $("#address-template").html()
    @address_source = Handlebars.compile @address_source
    @add_address.on 'click', @newAddress
    @add_address.trigger 'click'

    #Удаление адреса
    @remove_address = @step3.find '.remove-address'
    @remove_address.on 'click', @removeAddress

    @step3.find('button[type="submit"]').on 'click', @step3Submit
    @step3.find('a.previous').on 'click', @step3Back


    # Шаг 4
    # Проверка полей ввода
    @step4.h5Validate()

    #Добавка образования
    @add_education = @step4.find '.add-education'
    @education_count = 0
    @education_source = $("#education-template").html()
    @education_source = Handlebars.compile @education_source
    @add_education.on 'click', @newEducation
    @add_education.trigger 'click'

    #Удаление образования
    @remove_education = @step4.find '.remove-education'
    @remove_education.on 'click', @removeEducation

    @sertificat_source = $("#sertificat-template").html()
    @sertificat_source = Handlebars.compile @sertificat_source
    @cert_list = @step4.find '.sertificat-list'
    @cerificates_count = 0
    @sertificats = @step4.find '.sertificats'
    @sertificats.fileapi
      url: 'http://test.silentimp.info/Repetit.ru/test.php'
      duplicate: false,
      accept: 'image/*',
      maxSize: 5 * FileAPI.MB,
      autoUpload: false,
      multiple: true,
      list: '.sertificat-list',
      elements:
        file: 
          tpl: '.js-file-tpl'
          preview:
            el: '.b-thumb__preview__pic'
            width: 80
            height: 80
      onSelect: (evt, ui)=>
        @cerificates_count++
        # reader = new FileReader()
        # reader.onload = (event)=>
        #   @cert_list.append @sertificat_source
        #     "id" : @cerificates_count
        #     "src" : event.target.result
        # reader.readAsDataURL ui.files[0]

    @step4.find('button[type="submit"]').on 'click', @step4Submit
    @step4.find('a.previous').on 'click', @step4Back

  addHint: =>
    locations = new Bloodhound
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace("city"),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: "https://dl.dropboxusercontent.com/u/20810772/citys.json"
    
    locations.initialize()

    $('.city').typeahead
      hint: false
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

    $('.univercity:not(.tt-input)').typeahead
      hint: false
      highlight: true
      minLength: 1
    ,
      name: 'univercitys'
      displayKey: 'title',
      source: univercitys.ttAdapter()
      templates:
        suggestion: Handlebars.compile('<p>{{title}}</p>')

    $('.faculty:not(.tt-input)').typeahead
      hint: false
      highlight: true
      minLength: 1
    ,
      name: 'univercitys'
      displayKey: 'title',
      source: univercitys.ttAdapter()
      templates:
        suggestion: Handlebars.compile('<p>{{title}}</p>')

    $('.specialization:not(.tt-input)').typeahead
      hint: false
      highlight: true
      minLength: 1
    ,
      name: 'univercitys'
      displayKey: 'title',
      source: univercitys.ttAdapter()
      templates:
        suggestion: Handlebars.compile('<p>{{title}}</p>')

  # Получение списка разделов для предмета
  getSections: (id)=>
    chapters = ['математический анализ'+id,'теория вероятностей'+id,'теоретическая механика'+id,'сопромат'+id,'математи логика'+id,'эконометрика'+id,'высшая математика'+id,'линейная алгебра'+id,'дифференциальная геометрия'+id,'аналитическая геометрия'+id,'математическая физика'+id,'дифференциальные уравнения'+id,'математическая статистика'+id,'линейная геометрия'+id,'дискретная математика'+id,'топология'+id,'функциональный анализ'+id,'интегральные уравнения'+id,'теория чисел'+id,'векторный анализ'+id,'ТФКП'+id,'тензорный анализ'+id,'финансовая математика'+id,'уравнения в частных производных'+id,'актуарная математика'+id,'теория графов'+id,'комбинаторика'+id,'математические модели'+id,'прикладная математика'+id,'тригоном-ия'+id,'уравнения математической физики'+id,'численные методы'+id,'теория приближений'+id,'теория оптимизации'+id,'.школьный курс'+id,'на английском языке'+id,'алгебра логики'+id,'вычислимые функции'+id,'теория игр'+id,'вариационное исчисление'+id,'оптимальное управление'+id,'методы оптимизации'+id,'линейное программирование'+id,'алгебра'+id,'геометрия'+id,'методы оптимальных решений'+id]
    sections = new Array
    section = new Object
    id = 0
    for chapter in chapters
      section = {
        id : id
        title : chapter
      }
      sections.push section
      id++
    return sections

  # Получение дополнений для раздела
  getSubSections: (id)=>
    chapters = new Array 'ОГЭ (ГИА)'+id, 'Подготовка к олимпиадам'+id, 'Подготовка к экзаменам'+id
    sections = new Array
    section = new Object
    uid = 0
    for chapter in chapters
      sections.push
        'id' : uid
        'title' : chapter
      uid++
    return sections

  # Добавить образование
  newEducation: (event)=>
    event.preventDefault()
    @add_education.parent().before @education_source({'index' : @education_count})
    @education_count++
    @step4.find('select:visible').chosen
      disable_search_threshold: 30
    if @education_count>1
      @remove_education.show()

    # Автозаполнение для выбора города и вуза
    @addHint()

  # Удалить образование
  removeEducation: (event)=>
    event.preventDefault()
    @education_count--
    $('.education-wrapper:last').remove()
    if @education_count<2
      @remove_education.hide()

  # Переход от 4 к 5 шагу
  step4Submit: (event)=>
    event.preventDefault()
    inputs = @step4.find(':input')
    for input in inputs
      if !@validate(input)
        return false

    if @step4.find('.ui-state-error').length>0
      return false

    @current = @current.removeClass('current').next()
    @current.addClass('current')
    $('body').animate {scrollTop:0}, '500'

    # Отправка на сервер
    console.log JSON.parse(JSON.stringify($('.panel :input').serializeArray()))

  # Переход от 4 к 3 шагу
  step4Back: (event)=>
    event.preventDefault()
    @steps.find('.selected.step:last').removeClass 'selected'
    @current = @current.removeClass('current').prev()
    @current.addClass('current')
    $('body').animate {scrollTop:0}, '500'

  # Переход от 3 к 4 шагу
  step3Submit: (event)=>
    event.preventDefault()
    inputs = @step3.find(':input')
    for input in inputs
      if !@validate(input)
        return false

    if @step3.find('.ui-state-error').length>0
      return false

    @steps.find('.selected.step:last').next().addClass 'selected'
    @current = @current.removeClass('current').next()
    @current.addClass('current')
    $('body').animate {scrollTop:0}, '500'

  # Переход от 3 к 2 шагу
  step3Back: (event)=>
    event.preventDefault()
    @steps.find('.selected.step:last').removeClass 'selected'
    @current = @current.removeClass('current').prev()
    @current.addClass('current')
    $('body').animate {scrollTop:0}, '500'

  # Добавить новый адрес
  newAddress: (event)=>
    event.preventDefault()
    @add_address.parent().before @address_source({'index' : @address_count})
    @address_count++
    @step3.find('select:visible').chosen
      disable_search_threshold: 30
    if @address_count>1
      @remove_address.show()

  # Удалить образование
  removeAddress: (event)=>
    event.preventDefault()
    @address_count--
    $('.adress-wrapper:last').remove()
    if @address_count<2
      @remove_address.hide()

  # Переход от 2 к 3 шагу
  step2Submit: (event)=>
    event.preventDefault()
    inputs = @step2.find(':input')
    for input in inputs
      if !@validate(input)
        return false

    if @step2.find('.ui-state-error').length>0
      return false

    @steps.find('.selected.step:last').next().addClass 'selected'
    @current = @current.removeClass('current').next()
    @current.addClass('current')
    $('body').animate {scrollTop:0}, '500'

  # Переход от 2 к 1 шагу
  step2Back: (event)=>
    event.preventDefault()
    @steps.find('.selected.step:last').removeClass 'selected'
    @current = @current.removeClass('current').prev()
    @current.addClass('current')
    $('body').animate {scrollTop:0}, '500'


  # Блокировать цены недопустимых форматов занятий
  checkFormat: =>
    inputs = @formats.find 'input'
    for input in inputs
      elements = @step2.find('input.'+input.getAttribute('data-price-field'))
      for element in elements
        price = $(element).closest('.subdevision')
        if input.checked
          price.removeClass('hide')
          element.removeAttribute('disabled')
          element.setAttribute('required', 'required')
        else
          price.addClass('hide')
          element.classList.remove('ui-state-error')
          element.setAttribute('disabled', 'disabled')
          element.removeAttribute('required')

  # Добавить разделы предмета
  subjectSelected: (event)=>
    select = $ event.currentTarget
    select.removeClass 'unchanged'
    id = select.val()

    line = select.parents('.line')
    
    subsections = @getSubSections(id)

    half_length = Math.ceil(subsections.length / 2)
    leftSide = subsections.splice(0,half_length)

    sections = @subject_section_source({
      index : @subj_count
      section : @getSections(id)
      column1 : leftSide
      column2 : subsections
      })

    next = line.next()
    if next.hasClass('section')
      next.replaceWith sections
    else
      line.after sections
    
    @step2.find('select:visible').chosen
      disable_search_threshold: 30
    for element in @step2.find('.dropdown-container-widget')
      new DropdownWidgetController($(element))


  getSection: (index)=>
    select =  $ '.subj-wrapper .section:eq('+index+') select'
    if select.length == 1
      return select.val()

  getAdd: (index)=>
    chkboxs =  $ '.subj-wrapper .section:eq('+index+') .sub-section input[name="addition[]"]:checked'
    values = new Array
    console.dir chkboxs
    console.log chkboxs
    for chkbox in chkboxs
      values.push $(chkbox).val()
    return values
    

  # Добавить новый предмет
  newSubject: (event)=>
    event.preventDefault()
    @add_subject.parent().before @subject_source({'index' : @subj_count})
    @subj_count++
    
    wrapper = @add_subject.parent().prev()
    wrapper.find('select').on 'change', @subjectSelected

    @step2.find('select:visible').chosen
      disable_search_threshold: 30
    @step2.find('.min-time').text @duration_value.val()
    @checkFormat()
    for element in @step2.find('.dropdown-container-widget')
      new DropdownWidgetController($(element))
    
    if @subj_count>1
      @remove_subject.show()

  # Удалить предмет
  removeSubject: (event)=>
    event.preventDefault()
    @subj_count--
    $('.subj-wrapper:last').remove()
    if @subj_count<2
      @remove_subject.hide()

  # Проверка полей блоков на валидность
  validate: (input)=>

    if input.hasAttribute 'data-h5-errorid'
      error = document.getElementById input.getAttribute('data-h5-errorid')

    if input.hasAttribute('required')
      if input.value.trim().length == 0
        input.classList.add 'ui-state-error'

    if input.classList.contains 'ui-state-error'
      if error
        error.style.display = 'block'
      return false
    else
      if error
        error.style.display = 'none'

    return true

  # Переход ко второму шагу регистрации
  step1Submit: (event)=>
    event.preventDefault()
    inputs = @step1.find(':input')
    for input in inputs
      if !@validate(input)
        return false

    if @step1.find('.ui-state-error').length>0
      return false

    @steps.find('.selected.step:last').next().addClass 'selected'
    @current = @current.removeClass('current').next()
    @current.addClass('current')
    $('body').animate {scrollTop:0}, '500'


  # Шаг 1
  # Аватар
  droped: (event)->
    event.preventDefault()
    FileAPI.getDropFiles event, (files)->

  # подвели курсор к блоку дропа аватарки
  over: (over)->

  # бросили аватарку
  drop: (files)=>
    console.log  files
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

  # Удалили аватраку
  removeAvatar: (event)=>
    event.preventDefault()
    @fileSelector.prev().remove()
    @file.replaceWith @file.val('').clone(true)
    @file = @step1.find '#registration-avatar'

  # Выбрали аватарку
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
      @file = @step1.find '#registration-avatar'

  # Проверяем может ли существовать указанная дата, например 31 февраля и исправляем в случае ошибки
  checkDate: (event)=>
    day = parseInt @day.val().trim(), 10
    
    if day<1 || isNaN(day)
      @day.val 1
      return

    days = parseInt moment(@year.val()+"-"+(parseInt(@month.val(),10)+1), "YYYY-MM").daysInMonth(), 10
    if day>days
      @day.val days
    return

    if day>31
      @day.val 31

$(document).ready ->
  new PersonalDataAll()


