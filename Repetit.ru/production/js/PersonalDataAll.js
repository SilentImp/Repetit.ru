var PersonalDataAll,
  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

PersonalDataAll = (function() {
  function PersonalDataAll() {
    this.scrollToView = __bind(this.scrollToView, this);
    this.checkDate = __bind(this.checkDate, this);
    this.step1Submit = __bind(this.step1Submit, this);
    this.validate = __bind(this.validate, this);
    this.removeSubject = __bind(this.removeSubject, this);
    this.newSubject = __bind(this.newSubject, this);
    this.getAdd = __bind(this.getAdd, this);
    this.getSection = __bind(this.getSection, this);
    this.subjectSelected = __bind(this.subjectSelected, this);
    this.checkFormat = __bind(this.checkFormat, this);
    this.step2Back = __bind(this.step2Back, this);
    this.step2Submit = __bind(this.step2Submit, this);
    this.removeAddress = __bind(this.removeAddress, this);
    this.newAddress = __bind(this.newAddress, this);
    this.step3Back = __bind(this.step3Back, this);
    this.step3Submit = __bind(this.step3Submit, this);
    this.step4Back = __bind(this.step4Back, this);
    this.step4Submit = __bind(this.step4Submit, this);
    this.removeEducation = __bind(this.removeEducation, this);
    this.newEducation = __bind(this.newEducation, this);
    this.getSubSections = __bind(this.getSubSections, this);
    this.getSections = __bind(this.getSections, this);
    this.addFaculty = __bind(this.addFaculty, this);
    this.addUnivercity = __bind(this.addUnivercity, this);
    this.addHint = __bind(this.addHint, this);
    var exp, select, time;
    this.widget = $('.registration-steps');
    if (this.widget.length === 0) {
      throw new Error('не найден виджет');
    }
    this.steps = this.widget.find('.steps');
    this.panels = this.widget.find('.panel');
    this.current = this.widget.find('.panel.current');
    this.step1 = this.widget.find('.panel.step-1');
    this.step2 = this.widget.find('.panel.step-2');
    this.step3 = this.widget.find('.panel.step-3');
    this.step4 = this.widget.find('.panel.step-4');
    this.step5 = this.widget.find('.panel.step-5');
    select = $('select');
    if (select.length > 0) {
      select.chosen({
        disable_search_threshold: 30
      });
    }
    $(".panel").on("change", ":input", function(event) {
      return $(event.currentTarget).removeClass('unchanged');
    });
    this.step1.h5Validate();
    this.avadrop = new Dropzone($('.photo')[0], {
      url: "http://test.silentimp.info/Repetit.ru/test.php",
      uploadMultiple: false,
      maxFilesize: 5,
      paramName: "avatar",
      method: "post",
      clickable: ".file-selector",
      thumbnailWidth: null,
      thumbnailHeight: null,
      acceptedFiles: "image/*",
      previewsContainer: ".avatar",
      previewTemplate: '<div class="current-avatar"><img data-dz-thumbnail="data-dz-thumbnail" /><a href="#" data-dz-remove="data-dz-remove" class="close"></a></div>'
    });
    this.avadrop.on('addedfile', function() {
      return $('.file-selector').hide();
    });
    this.avadrop.on('removedfile', function() {
      return $('.file-selector').show();
    });
    exp = $('#experience');
    if (exp.length > 0) {
      exp.noUiSlider({
        step: 1,
        connect: "lower",
        start: 0,
        range: {
          'min': [0],
          'max': [50]
        },
        format: wNumb({
          decimals: 0
        })
      });
      exp.Link('lower').to($('#experience-value'));
    }
    this.month = this.step1.find('.month select');
    this.year = this.step1.find('.year select');
    this.day = this.step1.find('input.day');
    this.day.on('change', this.checkDate);
    this.month.on('change', this.checkDate);
    this.year.on('change', this.checkDate);
    this.step1.find('button[type="submit"]').on('click', this.step1Submit);
    this.step2.h5Validate();
    this.duration_value = $('#duration-value');
    time = $('#duration');
    if (time.length > 0) {
      time.noUiSlider({
        step: 5,
        connect: "lower",
        start: 0,
        range: {
          'min': [30],
          'max': [180]
        },
        format: wNumb({
          decimals: 0
        })
      });
      time.Link('lower').to(this.duration_value);
      time.on('change', (function(_this) {
        return function(event, ui) {
          return $('strong.min-time').text(ui);
        };
      })(this));
    }
    this.formats = this.step2.find('.lessons-format');
    this.formats.find('input').on('change', this.checkFormat);
    this.checkFormat();
    this.add_subject = this.step2.find('.add-subject');
    this.subj_count = 0;
    this.subject_source = $("#subj-template").html();
    this.subject_source = Handlebars.compile(this.subject_source);
    this.add_subject.on('click', this.newSubject);
    this.add_subject.trigger('click');
    this.section_count = 0;
    this.subject_section_source = $("#subj-section-template").html();
    this.subject_section_source = Handlebars.compile(this.subject_section_source);
    this.remove_subject = this.step2.find('.remove-subject');
    this.remove_subject.on('click', this.removeSubject);
    this.step2.find('button[type="submit"]').on('click', this.step2Submit);
    this.step2.find('a.previous').on('click', this.step2Back);
    this.step3.h5Validate();
    this.add_address = this.step3.find('.add-address');
    this.address_count = 0;
    this.address_source = $("#address-template").html();
    this.address_source = Handlebars.compile(this.address_source);
    this.add_address.on('click', this.newAddress);
    this.add_address.trigger('click');
    this.remove_address = this.step3.find('.remove-address');
    this.remove_address.on('click', this.removeAddress);
    this.step3.find('button[type="submit"]').on('click', this.step3Submit);
    this.step3.find('a.previous').on('click', this.step3Back);
    this.step4.h5Validate();
    this.add_education = this.step4.find('.add-education');
    this.education_count = 0;
    this.education_source = $("#education-template").html();
    this.education_source = Handlebars.compile(this.education_source);
    this.add_education.on('click', this.newEducation);
    this.add_education.trigger('click');
    this.remove_education = this.step4.find('.remove-education');
    this.remove_education.on('click', this.removeEducation);
    this.cert_list = this.step4.find('.sertificat-list');
    this.cerificates_count = 0;
    this.sertificats = this.step4.find('.sertificats');
    this.sertificats.dropzone({
      url: "http://test.silentimp.info/Repetit.ru/test.php",
      uploadMultiple: true,
      maxFilesize: 5,
      paramName: "certificats",
      method: "post",
      previewsContainer: ".sertificat-list",
      clickable: ".add-sertificat .button",
      thumbnailWidth: null,
      thumbnailHeight: null,
      acceptedFiles: "image/*,application/pdf",
      previewTemplate: '<div class="sertificat dz-preview dz-file-preview"><img data-dz-thumbnail="data-dz-thumbnail" /><a href="#" data-dz-remove="data-dz-remove" class="remove"></a><textarea name="comments[]" placeholder="Описание…" cols="30" rows="10"></textarea></div>'
    });
    this.step4.find('button[type="submit"]').on('click', this.step4Submit);
    this.step4.find('a.previous').on('click', this.step4Back);
  }

  PersonalDataAll.prototype.addHint = function() {
    var city, locations;
    locations = new Bloodhound({
      datumTokenizer: function(data) {
        return Bloodhound.tokenizers.whitespace(data.title);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 600,
      local: [
        {
          "title": "Москва"
        }, {
        "title": "Санкт-Петербург"
        }, {
        "title": "Абакан"
        }, {
        "title": "Анадырь"
        }, {
        "title": "Архангельск"
        }, {
        "title": "Астрахань"
        }, {
        "title": "Барнаул"
        }, {
        "title": "Белгород"
        }, {
        "title": "Биробиджан"
        }, {
        "title": "Благовещенск"
        }, {
        "title": "Брянск"
        }, {
        "title": "Великий Новгород"
        }, {
        "title": "Владивосток"
        }, {
        "title": "Владикавказ"
        }, {
        "title": "Владимир"
        }, {
        "title": "Волгоград"
        }, {
        "title": "Вологда"
        }, {
        "title": "Воронеж"
        }, {
        "title": "Горно-Алтайск"
        }, {
        "title": "Грозный"
        }, {
        "title": "Екатеринбург"
        }, {
        "title": "Иваново"
        }, {
        "title": "Ижевск"
        }, {
        "title": "Йошкар-Ола"
        }, {
        "title": "Иркутск"
        }, {
        "title": "Казань"
        }, {
        "title": "Калининград"
        }, {
        "title": "Калуга"
        }, {
        "title": "Кемерово"
        }, {
        "title": "Киров"
        }, {
        "title": "Кострома"
        }, {
        "title": "Краснодар"
        }, {
        "title": "Красноярск"
        }, {
        "title": "Курган"
        }, {
        "title": "Курск"
        }, {
        "title": "Кызыл"
        }, {
        "title": "Липецк"
        }, {
        "title": "Магадан"
        }, {
        "title": "Назрань"
        }, {
        "title": "Майкоп"
        }, {
        "title": "Махачкала"
        }, {
        "title": "Мурманск"
        }, {
        "title": "Нальчик"
        }, {
        "title": "Нарьян-Мар"
        }, {
        "title": "Нижний Новгород"
        }, {
        "title": "Новосибирск"
        }, {
        "title": "Омск"
        }, {
        "title": "Орёл"
        }, {
        "title": "Оренбург"
        }, {
        "title": "Пенза"
        }, {
        "title": "Пермь"
        }, {
        "title": "Петрозаводск"
        }, {
        "title": "Петропавловск-Камчатский"
        }, {
        "title": "Псков"
        }, {
        "title": "Ростов-на-Дону"
        }, {
        "title": "Рязань"
        }, {
        "title": "Салехард"
        }, {
        "title": "Самара"
        }, {
        "title": "Саранск"
        }, {
        "title": "Саратов"
        }, {
        "title": "Смоленск"
        }, {
        "title": "Ставрополь"
        }, {
        "title": "Сыктывкар"
        }, {
        "title": "Тамбов"
        }, {
        "title": "Тверь"
        }, {
        "title": "Томск"
        }, {
        "title": "Тула"
        }, {
        "title": "Тюмень"
        }, {
        "title": "Улан-Удэ"
        }, {
        "title": "Ульяновск"
        }, {
        "title": "Уфа"
        }, {
        "title": "Хабаровск"
        }, {
        "title": "Ханты-Мансийск"
        }, {
        "title": "Чебоксары"
        }, {
        "title": "Челябинск"
        }, {
        "title": "Черкесск"
        }, {
        "title": "Чита"
        }, {
        "title": "Элиста"
        }, {
        "title": "Южно-Сахалинск"
        }, {
        "title": "Якутск"
        }, {
        "title": "Ярославль"
        }, {
        "title": "Череповец"
        }, {
        "title": "Абдулино"
        }, {
        "title": "Агинское"
        }, {
        "title": "Белокуриха"
        }, {
        "title": "Бийск"
        }, {
        "title": "Новоалтайск"
        }, {
        "title": "Рубцовск"
        }, {
        "title": "Славгород"
        }, {
        "title": "Свободный"
        }, {
        "title": "Тында"
        }, {
        "title": "Вельск"
        }, {
        "title": "Коряжма"
        }, {
        "title": "Котлас"
        }, {
        "title": "Северодвинск"
        }, {
        "title": "Ахтубинск"
        }, {
        "title": "Знаменск"
        }, {
        "title": "Алексеевка"
        }, {
        "title": "Губкин"
        }, {
        "title": "Старый Оскол"
        }, {
        "title": "Дятьково"
        }, {
        "title": "Карачев"
        }, {
        "title": "Новозырьков"
        }, {
        "title": "Унеча"
        }, {
        "title": "Александров"
        }, {
        "title": "Гусь-Хрустальный"
        }, {
        "title": "Ковров"
        }, {
        "title": "Муром"
        }, {
        "title": "Покров"
        }, {
        "title": "Быково"
        }, {
        "title": "Волжский"
        }, {
        "title": "Камышин"
        }, {
        "title": "Михайловка"
        }, {
        "title": "Урюпинск"
        }, {
        "title": "Череповец"
        }, {
        "title": "Борисоглебск"
        }, {
        "title": "Лиски"
        }, {
        "title": "Кинешма"
        }, {
        "title": "Шуя"
        }, {
        "title": "Ангарск"
        }, {
        "title": "Братск"
        }, {
        "title": "Бохан"
        }, {
        "title": "Усолье-Сибирское"
        }, {
        "title": "Усть-Илимск"
        }, {
        "title": "Полесск"
        }, {
        "title": "Советск"
        }, {
        "title": "Черняховск"
        }, {
        "title": "Балабаново"
        }, {
        "title": "Киров"
        }, {
        "title": "Обнинск"
        }, {
        "title": "Карачаевск"
        }, {
        "title": "Учкекен"
        }, {
        "title": "Анжеро-Судженск"
        }, {
        "title": "Белово"
        }, {
        "title": "Киселевск"
        }, {
        "title": "Ленинск-Кузнецкий"
        }, {
        "title": "Междуреченск"
        }, {
        "title": "Новокузнецк"
        }, {
        "title": "Осинники"
        }, {
        "title": "Прокопьевск"
        }, {
        "title": "Тайга"
        }, {
        "title": "Таштагол"
        }, {
        "title": "Юрга"
        }, {
        "title": "Вятские Поляны"
        }, {
        "title": "Знаменка"
        }, {
        "title": "Кирово-Чепецк"
        }, {
        "title": "Котельнич"
        }, {
        "title": "Норинск"
        }, {
        "title": "Слободской"
        }, {
        "title": "Караваево"
        }, {
        "title": "Шарья"
        }, {
        "title": "Анапа"
        }, {
        "title": "Армавир"
        }, {
        "title": "Белореченск"
        }, {
        "title": "Геленджик"
        }, {
        "title": "Горячий Ключ"
        }, {
        "title": "Гулькевичи"
        }, {
        "title": "Ейск"
        }, {
        "title": "Кореновск"
        }, {
        "title": "Кропоткин"
        }, {
        "title": "Кущевская"
        }, {
        "title": "Лабинск"
        }, {
        "title": "Ленинградская"
        }, {
        "title": "Новороссийск"
        }, {
        "title": "Отрадная"
        }, {
        "title": "Павловская"
        }, {
        "title": "Славянск-на-Кубани"
        }, {
        "title": "Сочи"
        }, {
        "title": "Тихорецк"
        }, {
        "title": "Туапсе"
        }, {
        "title": "Усть-Лабинск"
        }, {
        "title": "Ачинск"
        }, {
        "title": "Железногорск"
        }, {
        "title": "Зеленогорск"
        }, {
        "title": "Канск"
        }, {
        "title": "Лесосибирск"
        }, {
        "title": "Минусинск"
        }, {
        "title": "Норильск"
        }, {
        "title": "Шарыпово"
        }, {
        "title": "Лесниково"
        }, {
        "title": "Шадринск"
        }, {
        "title": "Железногорск"
        }, {
        "title": "Льгов"
        }, {
        "title": "Рыльск"
        }, {
        "title": "Суджа"
        }, {
        "title": "Бокситогорск"
        }, {
        "title": "Волхов"
        }, {
        "title": "Всеволжск"
        }, {
        "title": "Выборг"
        }, {
        "title": "Луга"
        }, {
        "title": "Гатчина"
        }, {
        "title": "Ивангород"
        }, {
        "title": "Кингисепп"
        }, {
        "title": "Кириши"
        }, {
        "title": "Подпорожье"
        }, {
        "title": "Сиверский"
        }, {
        "title": "Сланцы"
        }, {
        "title": "Сосновый бор"
        }, {
        "title": "Тихвин"
        }, {
        "title": "Елец"
        }, {
        "title": "Зеленоград"
        }, {
        "title": "Балашиха"
        }, {
        "title": "Барвиха"
        }, {
        "title": "Большие Вязёмы"
        }, {
        "title": "Бронницы"
        }, {
        "title": "Видное"
        }, {
        "title": "Волоколамск"
        }, {
        "title": "Воскресенск"
        }, {
        "title": "Голицыно"
        }, {
        "title": "Щёлково"
        }, {
        "title": "Кубинка"
        }, {
        "title": "Дедовск"
        }, {
        "title": "Дзержинский"
        }, {
        "title": "Дмитров"
        }, {
        "title": "Долгопрудный"
        }, {
        "title": "Домодедово"
        }, {
        "title": "Дубна"
        }, {
        "title": "Егорьевск"
        }, {
        "title": "Железнодорожный"
        }, {
        "title": "Жуковский"
        }, {
        "title": "Ивантеевка"
        }, {
        "title": "Кашира"
        }, {
        "title": "Клин"
        }, {
        "title": "Кокошкино"
        }, {
        "title": "Коломна"
        }, {
        "title": "Королёв"
        }, {
        "title": "Котельники"
        }, {
        "title": "Красногорск"
        }, {
        "title": "Краснознаменск"
        }, {
        "title": "Люберцы"
        }, {
        "title": "Малаховка"
        }, {
        "title": "Можайск"
        }, {
        "title": "Челюскинский"
        }, {
        "title": "Мытищи"
        }, {
        "title": "Наро-Фоминск"
        }, {
        "title": "Ногинск"
        }, {
        "title": "Одинцово"
        }, {
        "title": "Орехово-Зуево"
        }, {
        "title": "Павловский Посад"
        }, {
        "title": "Подольск"
        }, {
        "title": "Протвино"
        }, {
        "title": "Пушкино"
        }, {
        "title": "Пущино"
        }, {
        "title": "Радужный"
        }, {
        "title": "Раменское"
        }, {
        "title": "Реутов"
        }, {
        "title": "Руза"
        }, {
        "title": "Старотеряево"
        }, {
        "title": "Сергиев Посад"
        }, {
        "title": "Серпухов"
        }, {
        "title": "Солнечногорск"
        }, {
        "title": "Ступино"
        }, {
        "title": "Сходня"
        }, {
        "title": "Тучково"
        }, {
        "title": "Фрязино"
        }, {
        "title": "Химки"
        }, {
        "title": "Черкизово"
        }, {
        "title": "Чехов"
        }, {
        "title": "Шатура"
        }, {
        "title": "Электросталь"
        }, {
        "title": "Юбилейный"
        }, {
        "title": "Апатиты"
        }, {
        "title": "Кировск"
        }, {
        "title": "Арзамас"
        }, {
        "title": "Выкса"
        }, {
        "title": "Дзержинск"
        }, {
        "title": "Заволжье"
        }, {
        "title": "Княгинино"
        }, {
        "title": "Кстово"
        }, {
        "title": "Кулебаки"
        }, {
        "title": "Павлово"
        }, {
        "title": "Перевоз"
        }, {
        "title": "Саров"
        }, {
        "title": "Сергач"
        }, {
        "title": "Шашунья"
        }, {
        "title": "Боровочи"
        }, {
        "title": "Старая Русса"
        }, {
        "title": "Бердск"
        }, {
        "title": "Искитим"
        }, {
        "title": "Куйбышев"
        }, {
        "title": "Линёво"
        }, {
        "title": "Тара"
        }, {
        "title": "Акбулак"
        }, {
        "title": "Бугуруслан"
        }, {
        "title": "Бузулук"
        }, {
        "title": "Новотроицк"
        }, {
        "title": "Орск"
        }, {
        "title": "Ливны"
        }, {
        "title": "Мценск"
        }, {
        "title": "Кузнецк"
        }, {
        "title": "Нижний Ломов"
        }, {
        "title": "Сердобск"
        }, {
        "title": "Березники"
        }, {
        "title": "Кудымкар"
        }, {
        "title": "Лысьва"
        }, {
        "title": "Соликамск"
        }, {
        "title": "Чайковский"
        }, {
        "title": "Чусовой"
        }, {
        "title": "Арсеньев"
        }, {
        "title": "Артем"
        }, {
        "title": "Большой Камень"
        }, {
        "title": "Дальнегорск"
        }, {
        "title": "Дальнереченск"
        }, {
        "title": "Кировский"
        }, {
        "title": "Лесозаводск"
        }, {
        "title": "Михайловка"
        }, {
        "title": "Находка"
        }, {
        "title": "Партизанск"
        }, {
        "title": "Славянка"
        }, {
        "title": "Спасск-Дальний"
        }, {
        "title": "Уссурийск"
        }, {
        "title": "Великие Луки"
        }, {
        "title": "Кошехабль"
        }, {
        "title": "Яблоновский"
        }, {
        "title": "Белебей"
        }, {
        "title": "Белорецк"
        }, {
        "title": "Бирск"
        }, {
        "title": "Ишимбай"
        }, {
        "title": "Кумертау"
        }, {
        "title": "Мелеуз"
        }, {
        "title": "Нефтекамск"
        }, {
        "title": "Октябрьский"
        }, {
        "title": "Салават"
        }, {
        "title": "Сибай"
        }, {
        "title": "Стерлитамак"
        }, {
        "title": "Северобайкальск"
        }, {
        "title": "Дербент"
        }, {
        "title": "Буйнакск"
        }, {
        "title": "Избербаш"
        }, {
        "title": "Каспийск"
        }, {
        "title": "Кизилюрт"
        }, {
        "title": "Кизляр"
        }, {
        "title": "Хасавюрт"
        }, {
        "title": "Магас"
        }, {
        "title": "Костомукша"
        }, {
        "title": "Сортавала"
        }, {
        "title": "Воркута"
        }, {
        "title": "Усинск"
        }, {
        "title": "Ухта"
        }, {
        "title": "Волжск"
        }, {
        "title": "Ковылкино"
        }, {
        "title": "Рузаевка"
        }, {
        "title": "Мирный"
        }, {
        "title": "Нерюнгри"
        }, {
        "title": "Октенцы"
        }, {
        "title": "Олёкминск"
        }, {
        "title": "Чурапча"
        }, {
        "title": "Айхал"
        }, {
        "title": "Ленск"
        }, {
        "title": "Альметьевск"
        }, {
        "title": "Бугульма"
        }, {
        "title": "Елабуга"
        }, {
        "title": "Зеленодольск"
        }, {
        "title": "Лениногорск"
        }, {
        "title": "Набережные Челны"
        }, {
        "title": "Нижнекамск"
        }, {
        "title": "Чистополь"
        }, {
        "title": "Саяногорск"
        }, {
        "title": "Азов"
        }, {
        "title": "Батайск"
        }, {
        "title": "Белая Калитва"
        }, {
        "title": "Вешенская"
        }, {
        "title": "Волгодонск"
        }, {
        "title": "Гуково"
        }, {
        "title": "Донецк"
        }, {
        "title": "Зерноград"
        }, {
        "title": "Зимовники"
        }, {
        "title": "Каменск-Шахтинский"
        }, {
        "title": "Константиновск"
        }, {
        "title": "Красный Сулим"
        }, {
        "title": "Матвеев Курган"
        }, {
        "title": "Миллерово"
        }, {
        "title": "Новочеркасск"
        }, {
        "title": "Новошахтинск"
        }, {
        "title": "Персиановский"
        }, {
        "title": "Сальск"
        }, {
        "title": "Таганрог"
        }, {
        "title": "Шахты"
        }, {
        "title": "Сасово"
        }, {
        "title": "Кинель"
        }, {
        "title": "Похвиснево"
        }, {
        "title": "Сызрань"
        }, {
        "title": "Тольятти"
        }, {
        "title": "Пушкин"
        }, {
        "title": "Балаково"
        }, {
        "title": "Балашов"
        }, {
        "title": "Вольск"
        }, {
        "title": "Маркс"
        }, {
        "title": "Энгельс"
        }, {
        "title": "Холмск"
        }, {
        "title": "Алапаевск"
        }, {
        "title": "Березовский"
        }, {
        "title": "Верхняя Салда"
        }, {
        "title": "Заречный"
        }, {
        "title": "Ирбит"
        }, {
        "title": "Каменск-Уральский"
        }, {
        "title": "Краснотурьинск"
        }, {
        "title": "Лесной"
        }, {
        "title": "Невьянск"
        }, {
        "title": "Нижний Тагил"
        }, {
        "title": "Нижняя Тура"
        }, {
        "title": "Новоуральск"
        }, {
        "title": "Первоуральск"
        }, {
        "title": "Серов"
        }, {
        "title": "Среднеуральск"
        }, {
        "title": "Вязьма"
        }, {
        "title": "Рославль"
        }, {
        "title": "Сафоново"
        }, {
        "title": "Буденновск"
        }, {
        "title": "Георгиевск"
        }, {
        "title": "Ессентуки"
        }, {
        "title": "Железноводск"
        }, {
        "title": "Кисловодск"
        }, {
        "title": "Лермонтов"
        }, {
        "title": "Минеральные Воды"
        }, {
        "title": "Невинномысск"
        }, {
        "title": "Пятигорск"
        }, {
        "title": "Мичуринск"
        }, {
        "title": "Уварово"
        }, {
        "title": "Бежецк"
        }, {
        "title": "Вышний Волочек"
        }, {
        "title": "Кимры"
        }, {
        "title": "Канаково"
        }, {
        "title": "Кувшиново"
        }, {
        "title": "Ржев"
        }, {
        "title": "Торжок"
        }, {
        "title": "Удомля"
        }, {
        "title": "Асино"
        }, {
        "title": "Северск"
        }, {
        "title": "Стрежевой"
        }, {
        "title": "Алексин"
        }, {
        "title": "Новомосковск"
        }, {
        "title": "Белый Яр"
        }, {
        "title": "Губкинский"
        }, {
        "title": "Заводоуковск"
        }, {
        "title": "Ишим"
        }, {
        "title": "Когалым"
        }, {
        "title": "Лангепас"
        }, {
        "title": "Муравленко"
        }, {
        "title": "Надым"
        }, {
        "title": "Нефтеюганск"
        }, {
        "title": "Нижневартовск"
        }, {
        "title": "Новый Уренгой"
        }, {
        "title": "Ноябрьск"
        }, {
        "title": "Нягань"
        }, {
        "title": "Пойковский"
        }, {
        "title": "Пыть-Ях"
        }, {
        "title": "Советский"
        }, {
        "title": "Сургут"
        }, {
        "title": "Тобольск"
        }, {
        "title": "Урай"
        }, {
        "title": "Ялуторовск"
        }, {
        "title": "Воткинск"
        }, {
        "title": "Глазов"
        }, {
        "title": "Сарапул"
        }, {
        "title": "Дмитровград"
        }, {
        "title": "Инза"
        }, {
        "title": "Ванино"
        }, {
        "title": "Комсомольск-на-Амуре"
        }, {
        "title": "Советская Гавань"
        }, {
        "title": "Аша"
        }, {
        "title": "Златоуст"
        }, {
        "title": "Карталы"
        }, {
        "title": "Куса"
        }, {
        "title": "Кыштым"
        }, {
        "title": "Магнитогорск"
        }, {
        "title": "Миасс"
        }, {
        "title": "Нязепетровск"
        }, {
        "title": "Озерск"
        }, {
        "title": "Сатка"
        }, {
        "title": "Снежинск"
        }, {
        "title": "Трёхгорный"
        }, {
        "title": "Троицк"
        }, {
        "title": "Усть-Катав"
        }, {
        "title": "Алатырь"
        }, {
        "title": "Батырево"
        }, {
        "title": "Мариинский Посад"
        }, {
        "title": "Новочебоксарск"
        }, {
        "title": "Переславль-Залесский"
        }, {
        "title": "Рыбинск"
        }, {
        "title": "Тутаев"
        }, {
        "title": "Углич"
        }, {
        "title": "Байконур"
        }, {
        "title": "Бишкек"
        }, {
        "title": "Душанбе"
        }, {
        "title": "Ереван"
        }, {
        "title": "Курган-тюбе"
        }, {
        "title": "Могилев"
        }, {
        "title": "Худжанд"
        }, {
        "title": "Зарубежные города"
        }, {
        "title": "Звенигород"
        }, {
        "title": "Климовск"
        }, {
        "title": "Лобня"
        }, {
        "title": "Лыткарино"
        }, {
        "title": "Крутое"
        }, {
        "title": "Апрелевка"
        }, {
        "title": "Севастополь"
        }, {
        "title": "Евпатория"
        }, {
        "title": "Керчь"
        }, {
        "title": "Симферополь"
        }, {
        "title": "Судак"
        }, {
        "title": "Феодосия"
        }, {
        "title": "Ялта"
        }, {
        "title": "Кола"
        }
      ]
    });
    locations.initialize();
    city = $('.education-wrapper:last input.city');
    if (city.hasClass('tt-input')) {
      city.typeahead('destroy');
    }
    city.typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    }, {
        name: 'locations',
        displayKey: 'title',
        source: locations.ttAdapter(),
        templates: {
          suggestion: Handlebars.compile('<p>{{title}}</p>')
        }
      });
    city.on('change', this.addUnivercity);
    city.on('blur', this.addUnivercity);
    city.on('typeahead:autocompleted', this.addUnivercity);
    return city.on('typeahead:selected', this.addUnivercity);
  };

  PersonalDataAll.prototype.addUnivercity = function(event) {
    var city, faculty, univercity, univercitys, value, wrapper;
    city = $(event.currentTarget);
    value = city.val().trim();
    wrapper = city.closest('.education-wrapper');
    univercity = wrapper.find('.univercity');
    faculty = wrapper.find('.faculty');
    if (value === 'Москва') {
      univercitys = new Bloodhound({
        datumTokenizer: function(data) {
          return Bloodhound.tokenizers.whitespace(data.title);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 600,
        local: [
          {
            "title": "Государственный университет Министерства финансов Российской Федерации"
          }, {
          "title": "Российская академия народного хозяйства и государственной службы при Президенте Российской Федерации"
          }, {
          "title": "Академия труда и социальных отношений"
          }, {
          "title": "Академия хорового искусства имени В.С. Попова"
          }, {
          "title": "Всероссийская академия внешней торговли Министерства экономического развития Российской Федерации"
          }, {
          "title": "Всероссийская государственная налоговая академия"
          }, {
          "title": "Всероссийский  государственный университет кинематографии им.С.А.Герасимова"
          }, {
          "title": "Заочный финансово-экономический институт Финансового университета при Правительстве Российской федерации"
          }, {
          "title": "Московский экономический институт Высшая школа Современное образование"
          }, {
          "title": "Театральный институт имени Бориса Щукина при Государственном академическом театре имени Евг. Вахтангова"
          }, {
          "title": "Высшее театральное училище (институт) им. М.С. Щепкина при Государственном академическом Малом театре Росии"
          }, {
          "title": "Государственная академия славянской культуры"
          }, {
          "title": "Государственный университет управления"
          }, {
          "title": "Государственная классическая академия имени Маймонида"
          }, {
          "title": "Государственный институт русского языка им А.С. Пушкина"
          }, {
          "title": "Государственный музыкально-педагогический институт имени М.М. Ипполитова-Иванова"
          }, {
          "title": "Государственный специализированный институт искусств"
          }, {
          "title": "Национальный исследовательский университет «Высшая школа экономики»"
          }, {
          "title": "Государственный университет по землеустройству"
          }, {
          "title": "Гуманитарный институт (г. Москва)"
          }, {
          "title": "Дипломатическая академия"
          }, {
          "title": "Институт международного права и экономики имени А.С.Грибоедова"
          }, {
          "title": "Московский гуманитарный университет"
          }, {
          "title": "Институт современного искусства"
          }, {
          "title": "Литературный институт имени А.М.Горького"
          }, {
          "title": "МАТИ - Российский государственный технологический университет имени К.Э. Циолковского"
          }, {
          "title": "Академический международный институт"
          }, {
          "title": "Международный институт экономики и права"
          }, {
          "title": "Академия МНЭПУ"
          }, {
          "title": "Международный университет в Москве"
          }, {
          "title": "Московская академия предпринимательства при Правительстве г. Москвы"
          }, {
          "title": "Московская академия экономики и права"
          }, {
          "title": "Московская государственная академия ветеринарной медицины и биотехнологии имени К.И. Скрябина"
          }, {
          "title": "Московская государственная академия водного транспорта"
          }, {
          "title": "Московский государственный университет дизайна и технологии"
          }, {
          "title": "Московский государственный университет приборостроения и информатики"
          }, {
          "title": "Московский государственный университет тонких химических технологий имени М.В. Ломоносова"
          }, {
          "title": "Московская государственная академия хореографии"
          }, {
          "title": "Российский государственный геологоразведочный университет имени Серго Орджоникидзе"
          }, {
          "title": "Московская государственная консерватория (университет) имени П. И. Чайковского"
          }, {
          "title": "Московский государственный текстильный университет  имени А.Н. Косыгина"
          }, {
          "title": "Московский государственный юридический университет имени О. Е. Кутафина"
          }, {
          "title": "Первый Московский государственный медицинский университет имени И.М. Сеченова"
          }, {
          "title": "Московская международная высшая школа бизнеса МИРБИС (Институт)"
          }, {
          "title": "Российский государственный аграрный университет- МСХА имени К.А. Тимирязева"
          }, {
          "title": "Московский архитектурный институт (государственная академия) (МАРХИ)"
          }, {
          "title": "Московский банковский институт"
          }, {
          "title": "Московский городской педагогический университет"
          }, {
          "title": "Московский городской психолого-педагогический университет"
          }, {
          "title": "Московский государственный институт радиотехники, электроники и автоматики (технический университет) (МИРЭА)"
          }, {
          "title": "Московский авиационный институт (национальный исследовательский университет)"
          }, {
          "title": "Московский автомобильно-дорожный государственный технический университет (МАДИ)"
          }, {
          "title": "Московский государственный агроинженерный университет имени В.П. Горячкина"
          }, {
          "title": "Московский государственный академический художественный институт имени В.И. Сурикова"
          }, {
          "title": "Московский государственный вечерний металлургический институт"
          }, {
          "title": "Московский государственный горный университет"
          }, {
          "title": "Московский государственный университет технологий и управления имени К.Г. Разумовского"
          }, {
          "title": "Московский государственный индустриальный университет"
          }, {
          "title": "Национальный исследовательский ядерный университет «МИФИ»"
          }, {
          "title": "Московский государственный институт международных отношений (университет)"
          }, {
          "title": "Национальный исследовательский технологический университет «МИСиС»"
          }, {
          "title": "Московский институт электроники и математики Национального исследовательского университета «Высшая школа экономики»"
          }, {
          "title": "Московский государственный лингвистический университет"
          }, {
          "title": "Московский государственный гуманитарный университет имени М.А. Шолохова"
          }, {
          "title": "Московский государственный открытый университет имени В.С. Черномырдина"
          }, {
          "title": "Российский государственный социальный университет"
          }, {
          "title": "Московский государственный строительный университет - национальный исследовательский университет"
          }, {
          "title": "Московский государственный машиностроительный университет (МАМИ)"
          }, {
          "title": "Московский государственный технический университет гражданской авиации"
          }, {
          "title": "Московский государственный технический университет имени Н.Э. Баумана"
          }, {
          "title": "Московский государственный технологический университет «Станкин»"
          }, {
          "title": "Московский государственный университет имени М.В. Ломоносова"
          }, {
          "title": "Московский государственный университет геодезии и картографии"
          }, {
          "title": "Московский государственный университет инженерной экологии"
          }, {
          "title": "Российский государственный торгово-экономический университет"
          }, {
          "title": "Московский государственный университет печати имени Ивана Федорова"
          }, {
          "title": "Московский государственный университет пищевых производств"
          }, {
          "title": "Московский государственный университет природообустройства"
          }, {
          "title": "Московский государственный университет путей сообщения"
          }, {
          "title": "Московский государственный университет экономики, статистики и информатики"
          }, {
          "title": "Московская государственная художественно-промышленная академия им. С.Г. Строганова"
          }, {
          "title": "Московский гуманитарный институтимени Е.Р. Дашковой"
          }, {
          "title": "Московская государственная академия коммунального хозяйства и строительства"
          }, {
          "title": "Московский государственный гуманитарно-экономический институт"
          }, {
          "title": "Московский государственный медико-стоматологический университет"
          }, {
          "title": "МОСКОВСКИЙ НОВЫЙ ЮРИДИЧЕСКИЙ ИНСТИТУТ"
          }, {
          "title": "Московский государственный областной  университет"
          }, {
          "title": "Московский психолого-социальный университет"
          }, {
          "title": "Московский технический университет связи и информатики"
          }, {
          "title": "Национальный исследовательский университет «МЭИ»"
          }, {
          "title": "Российская академия музыки имени Гнесиных"
          }, {
          "title": "Российский университет театрального искусства - ГИТИС"
          }, {
          "title": "Российский государственный университет физической культуры, спорта, молодежи и туризма (ГЦОЛИФК)"
          }, {
          "title": "Российская правовая академия Министерства юстиции РФ"
          }, {
          "title": "Российская школа частного права (институт)"
          }, {
          "title": "Российский экономический университет имени Г.В. Плеханова"
          }, {
          "title": "Российский государственный гуманитарный университет"
          }, {
          "title": "Российский национальный исследовательский медицинский университет имени Н.И. Пирогова"
          }, {
          "title": "Институт текстильной и легкой промышленности московского государственного университета технологий и управления"
          }, {
          "title": "Российская государственная академия интеллектуальной собственности"
          }, {
          "title": "Российский новый университет"
          }, {
          "title": "Российский университет дружбы народов"
          }, {
          "title": "Российский химико-технологический университет имени Д.И. Менделеева"
          }, {
          "title": "Финансовый университет при Правительстве Российской Федерации"
          }, {
          "title": "Школа-студия (институт) имени Вл.И. Немировича-Данченко при Московском Художественном академическом театре имени А.П. Чехова"
          }, {
          "title": "Московский киновидеоинститут (филиал) Санкт-Петербургского государственного университета кино и телевидения"
          }, {
          "title": "Московский областной филиал Санкт-Петербургского Гуманитарного университета профсоюзов Институт искусств и информационных технологий"
          }, {
          "title": "Академия управления Министерства внутренних дел Российской Федерации"
          }, {
          "title": "Академия Федеральной службы безопасности Российской Федерации"
          }, {
          "title": "Российская академия предпринимательства"
          }, {
          "title": "Славянский деловой институт им. К.В. Нечаева (Митрополита Питирима)"
          }, {
          "title": "Университет Российской академии образования"
          }, {
          "title": "Институт государственного администрирования"
          }, {
          "title": "Институт международной торговли и права"
          }, {
          "title": "Институт психологии и педагогики"
          }, {
          "title": "Международный институт гостиничного менеджмента и туризма"
          }, {
          "title": "Московский гуманитарно-экономический институт"
          }, {
          "title": "Московский институт предпринимательства и права"
          }, {
          "title": "Московский институт экономики, политики и права"
          }, {
          "title": "Московский финансово-экономический институт"
          }, {
          "title": "Московская гуманитарно-техническая академия"
          }, {
          "title": "Православный Свято-Тихоновский Гуманитарный Университет"
          }, {
          "title": "Академический правовой институт"
          }, {
          "title": "Московская академия образования Натальи Нестеровой"
          }, {
          "title": "Московский университет государственного управления"
          }, {
          "title": "Международная академия бизнеса и управления"
          }, {
          "title": "Институт стран Востока"
          }, {
          "title": "Российский православный институт святого Иоанна Богослова"
          }, {
          "title": "Международный славянский институт"
          }, {
          "title": "Гуманитарный институт телевидения и радиовещания им. М.А. Литовчина"
          }, {
          "title": "Московский институт мировой экономики и международных отношений"
          }, {
          "title": "Московский экономико-финансовый институт"
          }, {
          "title": "Международный юридический институт"
          }, {
          "title": "Экономико-правовой институт"
          }, {
          "title": "Московский пограничный институт Федеральной службы безопасности Российской Федерации"
          }, {
          "title": "Национальный институт бизнеса"
          }, {
          "title": "Институт международных экономических связей"
          }, {
          "title": "Институт искусства реставрации"
          }, {
          "title": "Московский экономико-правовой институт"
          }, {
          "title": "Академия Государственной противопожарной службы"
          }, {
          "title": "Институт менеджмента инноваций"
          }, {
          "title": "Московский институт государственного управления и права"
          }, {
          "title": "Высшая школа психологии (Институт)"
          }, {
          "title": "Государственный академический университет гуманитарных наук"
          }, {
          "title": "Гуманитарно-Экологический Институт"
          }, {
          "title": "Европейский Университет Права JUSTO"
          }, {
          "title": "Институт бизнеса и политики"
          }, {
          "title": "Институт &quot;Высшие столыпинские курсы государственного права и управления&quot;"
          }, {
          "title": "Институт европейских культур"
          }, {
          "title": "Институт иностранных языков"
          }, {
          "title": "Московский институт управления"
          }, {
          "title": "Институт коммерции и права"
          }, {
          "title": "Институт Мировой экономики и информатизации"
          }, {
          "title": "Институт мировых цивилизаций"
          }, {
          "title": "Институт практического востоковедения"
          }, {
          "title": "Институт профессионального образования"
          }, {
          "title": "Институт финансов, экономики и права офицеров запаса"
          }, {
          "title": "Институт экономики и предпринимательства"
          }, {
          "title": "Институт языков и культур имени Л.Толстого"
          }, {
          "title": "Межотраслевой технологический институт"
          }, {
          "title": "Московский финансово-юридический университет МФЮА"
          }, {
          "title": "Московский государственный институт музыки имени А.Г. Шнитке"
          }, {
          "title": "Московский педагогический государственный университет"
          }, {
          "title": "Академия сферы социальных отношений"
          }, {
          "title": "Московский университет имени С.Ю. Витте"
          }, {
          "title": "Московский социально-экономический институт"
          }, {
          "title": "Московский университет «ТУРО»"
          }, {
          "title": "Московский экономический институт (г. Москва)"
          }, {
          "title": "Московский институт современного академического образования"
          }, {
          "title": "Национальный институт имени Екатерины Великой"
          }, {
          "title": "Первый московский юридический институт"
          }, {
          "title": "Российская экономическая школа (Институт)"
          }, {
          "title": "Российский государственный университет нефти и газа имени И.М. Губкина"
          }, {
          "title": "Современная гуманитарная академия"
          }, {
          "title": "Специализированный институт юриспруденции"
          }, {
          "title": "Столичный институт переводчиков"
          }, {
          "title": "Филиал Санкт-Петербургского института внешнеэкономических связей, экономики и права в г. Москве"
          }, {
          "title": "Институт Актуального образования ЮрИнфоР-МГУ"
          }, {
          "title": "Российская академия живописи, ваяния и зодчества Ильи Глазунова"
          }, {
          "title": "Академия социально-экономического развития (институт)"
          }, {
          "title": "Институт Практической Психологии и Психоанализа"
          }, {
          "title": "Российский государственный университет инновационных технологий и предпринимательства"
          }, {
          "title": "Российская академия правосудия"
          }, {
          "title": "Московский финансово-промышленный университет «Синергия»"
          }, {
          "title": "Гуманитарно-экономический и информационно-технологический институт"
          }, {
          "title": "Институт Московская высшая школа социальных и экономических наук"
          }, {
          "title": "Институт государственного управления, права и инновационных технологий"
          }, {
          "title": "Институт гуманитарного образования и информационных технологий"
          }, {
          "title": "Московский государственный институт индустрии туризма имени Ю.А.Сенкевича"
          }, {
          "title": "Московский гуманитарный педагогический институт"
          }, {
          "title": "Институт сервиса (г. Москва) (филиал) Российского государственного университета туризма и сервиса"
          }, {
          "title": "Московский городской университет управления Правительства Москвы"
          }, {
          "title": "Московский городской институт международного туризма"
          }, {
          "title": "Российская академия адвокатуры и нотариата"
          }, {
          "title": "Институт индустрии моды"
          }, {
          "title": "Институт экономики, финансов и права (ИЭФП)"
          }, {
          "title": "Институт УНИК"
          }, {
          "title": "Московский институт права"
          }, {
          "title": "Столичная финансово-гуманитарная академия"
          }, {
          "title": "Московский институт государственного и корпоративного управления"
          }, {
          "title": "Московский институт национальных и региональных отношений"
          }, {
          "title": "Институт профессиональных инноваций"
          }, {
          "title": "Институт менеджмента и бизнеса"
          }, {
          "title": "Институт социальных наук"
          }, {
          "title": "Московский социально-гуманитарный институт"
          }, {
          "title": "Московский институт банковского дела"
          }, {
          "title": "Институт журналистики и литературного творчества"
          }, {
          "title": "Московский финансово-правовой институт"
          }, {
          "title": "Институт автомобильных технологий и управления"
          }, {
          "title": "Международный институт «ИНФО-Рутения»"
          }, {
          "title": "Институт современного права и экономики"
          }, {
          "title": "Московский институт экономических преобразований"
          }, {
          "title": "Русский институт управления имени В.П. Чернова"
          }, {
          "title": "Институт правовой экономики"
          }, {
          "title": "Московский бухгалтерский институт (МБИ)"
          }, {
          "title": "Московский институт физической культуры и спорта"
          }, {
          "title": "Московский институт юриспруденции"
          }, {
          "title": "Институт открытого бизнес-образования и дизайна"
          }, {
          "title": "Институт Содружества Независимых Государств"
          }, {
          "title": "Институт экономики и социальных отношений"
          }, {
          "title": "Институт экономики и антикризисного управления"
          }, {
          "title": "Московская академия рынка труда и информационных технологий"
          }, {
          "title": "Международный институт рекламы"
          }, {
          "title": "Институт современной экономики (г. Москва)"
          }, {
          "title": "Московский университет Министерства внутренних дел Российской Федерации"
          }, {
          "title": "Институт психотерапии и клинической психологии"
          }, {
          "title": "Московский технологический институт &quot;ВТУ&quot;"
          }, {
          "title": "Социально-экономический институт"
          }, {
          "title": "Институт туризма и гостеприимства (г. Москва) (филиал) Российского государственного университета туризма и сервиса"
          }, {
          "title": "Евразийский открытый институт"
          }, {
          "title": "Институт инфраструктуры предпринимательства"
          }, {
          "title": "Академия социального управления"
          }, {
          "title": "Библейско-богословский институт святого апостола Андрея"
          }, {
          "title": "Гуманитарно-Прогностический институт"
          }, {
          "title": "Институт бизнеса и права"
          }, {
          "title": "Московский институт психоанализа"
          }, {
          "title": "Институт управления и права"
          }, {
          "title": "Институт экономики и культуры (г. Москва)"
          }, {
          "title": "Институт коммуникативных технологий"
          }, {
          "title": "Институт международных социально-гуманитарных связей"
          }, {
          "title": "Академия Генеральной прокуратуры Российской Федерации"
          }, {
          "title": "Институт недвижимости и строительного бизнеса"
          }, {
          "title": "Институт философии, теологии и истории святого Фомы"
          }, {
          "title": "Институт театрального искусства им. П.М. Ершова"
          }, {
          "title": "Институт управления, экономики, права и искусства"
          }, {
          "title": "Международная академия оценки и консалтинга"
          }, {
          "title": "Международный гуманитарно-лингвистический институт"
          }, {
          "title": "Институт индустрии сервиса"
          }, {
          "title": "Лобненский филиал Московского государственного университета экономики, статистики и информатики"
          }, {
          "title": "Московский институт аналитической психологии и психоанализа"
          }, {
          "title": "Московский институт лингвистики"
          }, {
          "title": "Московский институт рекламы, туризма, шоу-бизнеса"
          }, {
          "title": "Московский Исламский Университет (Учреждение)"
          }, {
          "title": "Московский налоговый институт"
          }, {
          "title": "Московский транспортный институт"
          }, {
          "title": "Московский экономический институт"
          }, {
          "title": "Национальный институт современного дизайна"
          }, {
          "title": "Московский институт энергобезопасности и энергосбережения"
          }, {
          "title": "Институт бизнеса и делового администрирования (ИБДА) Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации"
          }, {
          "title": "Институт деловой карьеры"
          }, {
          "title": "Московский художественно-промышленный институт"
          }, {
          "title": "Институт управления и информатики"
          }, {
          "title": "Международный еврейский институт экономики, финансов и права"
          }, {
          "title": "Военный учебно-научный центр Военно-воздушных сил «Военно-воздушная академия имени профессора Н.Е. Жуковского и Ю.А. Гагарина»"
          }, {
          "title": "Военная академия Ракетных войск стратегического назначения имени Петра Великого"
          }, {
          "title": "Свято-Филаретовский православно-христианский институт"
          }, {
          "title": "Военный университет"
          }, {
          "title": "Институт традиционного прикладного искусства (Московский филиал) Высшей школы народных искусств (института)"
          }, {
          "title": "Финансово-промышленный институт"
          }, {
          "title": "Институт экономики бизнеса"
          }, {
          "title": "Институт рыночной экономики, социальной политики и права"
          }, {
          "title": "Институт экономики и управления в промышленности"
          }, {
          "title": "Военный учебно-научный центр Сухопутных войск «Общевойсковая академия Вооруженных Сил Российской Федерации»"
          }, {
          "title": "Столичный гуманитарно-экономический институт"
          }, {
          "title": "Институт международного учета и управления"
          }, {
          "title": "Институт русского театра"
          }, {
          "title": "Институт гостиничного и туристического менеджмента"
          }, {
          "title": "Национальный Институт Дизайна"
          }, {
          "title": "Национальный институт моды"
          }, {
          "title": "Московский филиал Российской международной академии туризма"
          }, {
          "title": "Пограничная академия Федеральной службы безопасности Российской Федерации"
          }, {
          "title": "Институт современного управления, кино и телевидения"
          }, {
          "title": "Московский гуманитарный институт"
          }, {
          "title": "Московское высшее военное командное училище (военный институт) (филиал) Военного учебно-научного центра Сухопутных войск &quot;Общевойсковая академия Вооруженных Сил Российской Федерации&quot;"
          }, {
          "title": "Московский институт открытого образования"
          }, {
          "title": "Институт менеджмента, экономики и инноваций"
          }, {
          "title": "Останкинский институт телевидения и радиовещания"
          }, {
          "title": "Институт экономики и управления в строительстве и промышленности"
          }, {
          "title": "Институт психологии"
          }, {
          "title": "Открытый технологический институт"
          }, {
          "title": "Институт управления"
          }, {
          "title": "Славяно-Греко-Латинская академия"
          }, {
          "title": "Московский архитектурно-строительный институт"
          }, {
          "title": "Московский социально-педагогический институт"
          }, {
          "title": "Профессиональный институт управления"
          }, {
          "title": "Институт непрерывного образования"
          }, {
          "title": "Московский институт управления и сервиса"
          }, {
          "title": "Московский филиал автономного образовательного учреждения Ленинградского государственного университета имени А.С. Пушкина"
          }, {
          "title": "Высшая школа финансов и менеджмента Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации"
          }, {
          "title": "Современный морской институт"
          }
        ]
      });
      univercitys.initialize();
      if (univercity.hasClass('tt-input')) {
        univercity.typeahead('destroy');
      }
      univercity.typeahead({
        hint: false,
        highlight: true,
        minLength: 1
      }, {
          name: 'univercitys',
          displayKey: 'title',
          source: univercitys.ttAdapter(),
          templates: {
            suggestion: Handlebars.compile('<p>{{title}}</p>')
          }
        });
      univercity.on('change', this.addFaculty);
      univercity.on('blur', this.addFaculty);
      univercity.on('typeahead:autocompleted', this.addFaculty);
      return univercity.on('typeahead:selected', this.addFaculty);
    } else {
      univercity.typeahead('destroy');
      univercity.off('change', this.addFaculty);
      univercity.off('blur', this.addFaculty);
      return faculty.typeahead('destroy');
    }
  };

  PersonalDataAll.prototype.addFaculty = function(event) {
    var faculty, facultys, univercity, value, wrapper;
    univercity = $(event.currentTarget);
    value = univercity.val().trim();
    wrapper = univercity.closest('.education-wrapper');
    faculty = wrapper.find('.faculty');
    if (value === 'Национальный исследовательский ядерный университет «МИФИ»') {
      facultys = new Bloodhound({
        datumTokenizer: function(data) {
          return Bloodhound.tokenizers.whitespace(data.title);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 600,
        local: [
          {
            "title": "Государственный университет Министерства финансов Российской Федерации"
          }, {
          "title": "Российская академия народного хозяйства и государственной службы при Президенте Российской Федерации"
          }, {
          "title": "Академия труда и социальных отношений"
          }, {
          "title": "Академия хорового искусства имени В.С. Попова"
          }, {
          "title": "Всероссийская академия внешней торговли Министерства экономического развития Российской Федерации"
          }, {
          "title": "Всероссийская государственная налоговая академия"
          }, {
          "title": "Всероссийский  государственный университет кинематографии им.С.А.Герасимова"
          }, {
          "title": "Заочный финансово-экономический институт Финансового университета при Правительстве Российской федерации"
          }, {
          "title": "Московский экономический институт Высшая школа Современное образование"
          }, {
          "title": "Театральный институт имени Бориса Щукина при Государственном академическом театре имени Евг. Вахтангова"
          }, {
          "title": "Высшее театральное училище (институт) им. М.С. Щепкина при Государственном академическом Малом театре Росии"
          }, {
          "title": "Государственная академия славянской культуры"
          }, {
          "title": "Государственный университет управления"
          }, {
          "title": "Государственная классическая академия имени Маймонида"
          }, {
          "title": "Государственный институт русского языка им А.С. Пушкина"
          }, {
          "title": "Государственный музыкально-педагогический институт имени М.М. Ипполитова-Иванова"
          }, {
          "title": "Государственный специализированный институт искусств"
          }, {
          "title": "Национальный исследовательский университет «Высшая школа экономики»"
          }, {
          "title": "Государственный университет по землеустройству"
          }, {
          "title": "Гуманитарный институт (г. Москва)"
          }, {
          "title": "Дипломатическая академия"
          }, {
          "title": "Институт международного права и экономики имени А.С.Грибоедова"
          }, {
          "title": "Московский гуманитарный университет"
          }, {
          "title": "Институт современного искусства"
          }, {
          "title": "Литературный институт имени А.М.Горького"
          }, {
          "title": "МАТИ - Российский государственный технологический университет имени К.Э. Циолковского"
          }, {
          "title": "Академический международный институт"
          }, {
          "title": "Международный институт экономики и права"
          }, {
          "title": "Академия МНЭПУ"
          }, {
          "title": "Международный университет в Москве"
          }, {
          "title": "Московская академия предпринимательства при Правительстве г. Москвы"
          }, {
          "title": "Московская академия экономики и права"
          }, {
          "title": "Московская государственная академия ветеринарной медицины и биотехнологии имени К.И. Скрябина"
          }, {
          "title": "Московская государственная академия водного транспорта"
          }, {
          "title": "Московский государственный университет дизайна и технологии"
          }, {
          "title": "Московский государственный университет приборостроения и информатики"
          }, {
          "title": "Московский государственный университет тонких химических технологий имени М.В. Ломоносова"
          }, {
          "title": "Московская государственная академия хореографии"
          }, {
          "title": "Российский государственный геологоразведочный университет имени Серго Орджоникидзе"
          }, {
          "title": "Московская государственная консерватория (университет) имени П. И. Чайковского"
          }, {
          "title": "Московский государственный текстильный университет  имени А.Н. Косыгина"
          }, {
          "title": "Московский государственный юридический университет имени О. Е. Кутафина"
          }, {
          "title": "Первый Московский государственный медицинский университет имени И.М. Сеченова"
          }, {
          "title": "Московская международная высшая школа бизнеса МИРБИС (Институт)"
          }, {
          "title": "Российский государственный аграрный университет- МСХА имени К.А. Тимирязева"
          }, {
          "title": "Московский архитектурный институт (государственная академия) (МАРХИ)"
          }, {
          "title": "Московский банковский институт"
          }, {
          "title": "Московский городской педагогический университет"
          }, {
          "title": "Московский городской психолого-педагогический университет"
          }, {
          "title": "Московский государственный институт радиотехники, электроники и автоматики (технический университет) (МИРЭА)"
          }, {
          "title": "Московский авиационный институт (национальный исследовательский университет)"
          }, {
          "title": "Московский автомобильно-дорожный государственный технический университет (МАДИ)"
          }, {
          "title": "Московский государственный агроинженерный университет имени В.П. Горячкина"
          }, {
          "title": "Московский государственный академический художественный институт имени В.И. Сурикова"
          }, {
          "title": "Московский государственный вечерний металлургический институт"
          }, {
          "title": "Московский государственный горный университет"
          }, {
          "title": "Московский государственный университет технологий и управления имени К.Г. Разумовского"
          }, {
          "title": "Московский государственный индустриальный университет"
          }, {
          "title": "Национальный исследовательский ядерный университет «МИФИ»"
          }, {
          "title": "Московский государственный институт международных отношений (университет)"
          }, {
          "title": "Национальный исследовательский технологический университет «МИСиС»"
          }, {
          "title": "Московский институт электроники и математики Национального исследовательского университета «Высшая школа экономики»"
          }, {
          "title": "Московский государственный лингвистический университет"
          }, {
          "title": "Московский государственный гуманитарный университет имени М.А. Шолохова"
          }, {
          "title": "Московский государственный открытый университет имени В.С. Черномырдина"
          }, {
          "title": "Российский государственный социальный университет"
          }, {
          "title": "Московский государственный строительный университет - национальный исследовательский университет"
          }, {
          "title": "Московский государственный машиностроительный университет (МАМИ)"
          }, {
          "title": "Московский государственный технический университет гражданской авиации"
          }, {
          "title": "Московский государственный технический университет имени Н.Э. Баумана"
          }, {
          "title": "Московский государственный технологический университет «Станкин»"
          }, {
          "title": "Московский государственный университет имени М.В. Ломоносова"
          }, {
          "title": "Московский государственный университет геодезии и картографии"
          }, {
          "title": "Московский государственный университет инженерной экологии"
          }, {
          "title": "Российский государственный торгово-экономический университет"
          }, {
          "title": "Московский государственный университет печати имени Ивана Федорова"
          }, {
          "title": "Московский государственный университет пищевых производств"
          }, {
          "title": "Московский государственный университет природообустройства"
          }, {
          "title": "Московский государственный университет путей сообщения"
          }, {
          "title": "Московский государственный университет экономики, статистики и информатики"
          }, {
          "title": "Московская государственная художественно-промышленная академия им. С.Г. Строганова"
          }, {
          "title": "Московский гуманитарный институтимени Е.Р. Дашковой"
          }, {
          "title": "Московская государственная академия коммунального хозяйства и строительства"
          }, {
          "title": "Московский государственный гуманитарно-экономический институт"
          }, {
          "title": "Московский государственный медико-стоматологический университет"
          }, {
          "title": "МОСКОВСКИЙ НОВЫЙ ЮРИДИЧЕСКИЙ ИНСТИТУТ"
          }, {
          "title": "Московский государственный областной  университет"
          }, {
          "title": "Московский психолого-социальный университет"
          }, {
          "title": "Московский технический университет связи и информатики"
          }, {
          "title": "Национальный исследовательский университет «МЭИ»"
          }, {
          "title": "Российская академия музыки имени Гнесиных"
          }, {
          "title": "Российский университет театрального искусства - ГИТИС"
          }, {
          "title": "Российский государственный университет физической культуры, спорта, молодежи и туризма (ГЦОЛИФК)"
          }, {
          "title": "Российская правовая академия Министерства юстиции РФ"
          }, {
          "title": "Российская школа частного права (институт)"
          }, {
          "title": "Российский экономический университет имени Г.В. Плеханова"
          }, {
          "title": "Российский государственный гуманитарный университет"
          }, {
          "title": "Российский национальный исследовательский медицинский университет имени Н.И. Пирогова"
          }, {
          "title": "Институт текстильной и легкой промышленности московского государственного университета технологий и управления"
          }, {
          "title": "Российская государственная академия интеллектуальной собственности"
          }, {
          "title": "Российский новый университет"
          }, {
          "title": "Российский университет дружбы народов"
          }, {
          "title": "Российский химико-технологический университет имени Д.И. Менделеева"
          }, {
          "title": "Финансовый университет при Правительстве Российской Федерации"
          }, {
          "title": "Школа-студия (институт) имени Вл.И. Немировича-Данченко при Московском Художественном академическом театре имени А.П. Чехова"
          }, {
          "title": "Московский киновидеоинститут (филиал) Санкт-Петербургского государственного университета кино и телевидения"
          }, {
          "title": "Московский областной филиал Санкт-Петербургского Гуманитарного университета профсоюзов Институт искусств и информационных технологий"
          }, {
          "title": "Академия управления Министерства внутренних дел Российской Федерации"
          }, {
          "title": "Академия Федеральной службы безопасности Российской Федерации"
          }, {
          "title": "Российская академия предпринимательства"
          }, {
          "title": "Славянский деловой институт им. К.В. Нечаева (Митрополита Питирима)"
          }, {
          "title": "Университет Российской академии образования"
          }, {
          "title": "Институт государственного администрирования"
          }, {
          "title": "Институт международной торговли и права"
          }, {
          "title": "Институт психологии и педагогики"
          }, {
          "title": "Международный институт гостиничного менеджмента и туризма"
          }, {
          "title": "Московский гуманитарно-экономический институт"
          }, {
          "title": "Московский институт предпринимательства и права"
          }, {
          "title": "Московский институт экономики, политики и права"
          }, {
          "title": "Московский финансово-экономический институт"
          }, {
          "title": "Московская гуманитарно-техническая академия"
          }, {
          "title": "Православный Свято-Тихоновский Гуманитарный Университет"
          }, {
          "title": "Академический правовой институт"
          }, {
          "title": "Московская академия образования Натальи Нестеровой"
          }, {
          "title": "Московский университет государственного управления"
          }, {
          "title": "Международная академия бизнеса и управления"
          }, {
          "title": "Институт стран Востока"
          }, {
          "title": "Российский православный институт святого Иоанна Богослова"
          }, {
          "title": "Международный славянский институт"
          }, {
          "title": "Гуманитарный институт телевидения и радиовещания им. М.А. Литовчина"
          }, {
          "title": "Московский институт мировой экономики и международных отношений"
          }, {
          "title": "Московский экономико-финансовый институт"
          }, {
          "title": "Международный юридический институт"
          }, {
          "title": "Экономико-правовой институт"
          }, {
          "title": "Московский пограничный институт Федеральной службы безопасности Российской Федерации"
          }, {
          "title": "Национальный институт бизнеса"
          }, {
          "title": "Институт международных экономических связей"
          }, {
          "title": "Институт искусства реставрации"
          }, {
          "title": "Московский экономико-правовой институт"
          }, {
          "title": "Академия Государственной противопожарной службы"
          }, {
          "title": "Институт менеджмента инноваций"
          }, {
          "title": "Московский институт государственного управления и права"
          }, {
          "title": "Высшая школа психологии (Институт)"
          }, {
          "title": "Государственный академический университет гуманитарных наук"
          }, {
          "title": "Гуманитарно-Экологический Институт"
          }, {
          "title": "Европейский Университет Права JUSTO"
          }, {
          "title": "Институт бизнеса и политики"
          }, {
          "title": "Институт &quot;Высшие столыпинские курсы государственного права и управления&quot;"
          }, {
          "title": "Институт европейских культур"
          }, {
          "title": "Институт иностранных языков"
          }, {
          "title": "Московский институт управления"
          }, {
          "title": "Институт коммерции и права"
          }, {
          "title": "Институт Мировой экономики и информатизации"
          }, {
          "title": "Институт мировых цивилизаций"
          }, {
          "title": "Институт практического востоковедения"
          }, {
          "title": "Институт профессионального образования"
          }, {
          "title": "Институт финансов, экономики и права офицеров запаса"
          }, {
          "title": "Институт экономики и предпринимательства"
          }, {
          "title": "Институт языков и культур имени Л.Толстого"
          }, {
          "title": "Межотраслевой технологический институт"
          }, {
          "title": "Московский финансово-юридический университет МФЮА"
          }, {
          "title": "Московский государственный институт музыки имени А.Г. Шнитке"
          }, {
          "title": "Московский педагогический государственный университет"
          }, {
          "title": "Академия сферы социальных отношений"
          }, {
          "title": "Московский университет имени С.Ю. Витте"
          }, {
          "title": "Московский социально-экономический институт"
          }, {
          "title": "Московский университет «ТУРО»"
          }, {
          "title": "Московский экономический институт (г. Москва)"
          }, {
          "title": "Московский институт современного академического образования"
          }, {
          "title": "Национальный институт имени Екатерины Великой"
          }, {
          "title": "Первый московский юридический институт"
          }, {
          "title": "Российская экономическая школа (Институт)"
          }, {
          "title": "Российский государственный университет нефти и газа имени И.М. Губкина"
          }, {
          "title": "Современная гуманитарная академия"
          }, {
          "title": "Специализированный институт юриспруденции"
          }, {
          "title": "Столичный институт переводчиков"
          }, {
          "title": "Филиал Санкт-Петербургского института внешнеэкономических связей, экономики и права в г. Москве"
          }, {
          "title": "Институт Актуального образования ЮрИнфоР-МГУ"
          }, {
          "title": "Российская академия живописи, ваяния и зодчества Ильи Глазунова"
          }, {
          "title": "Академия социально-экономического развития (институт)"
          }, {
          "title": "Институт Практической Психологии и Психоанализа"
          }, {
          "title": "Российский государственный университет инновационных технологий и предпринимательства"
          }, {
          "title": "Российская академия правосудия"
          }, {
          "title": "Московский финансово-промышленный университет «Синергия»"
          }, {
          "title": "Гуманитарно-экономический и информационно-технологический институт"
          }, {
          "title": "Институт Московская высшая школа социальных и экономических наук"
          }, {
          "title": "Институт государственного управления, права и инновационных технологий"
          }, {
          "title": "Институт гуманитарного образования и информационных технологий"
          }, {
          "title": "Московский государственный институт индустрии туризма имени Ю.А.Сенкевича"
          }, {
          "title": "Московский гуманитарный педагогический институт"
          }, {
          "title": "Институт сервиса (г. Москва) (филиал) Российского государственного университета туризма и сервиса"
          }, {
          "title": "Московский городской университет управления Правительства Москвы"
          }, {
          "title": "Московский городской институт международного туризма"
          }, {
          "title": "Российская академия адвокатуры и нотариата"
          }, {
          "title": "Институт индустрии моды"
          }, {
          "title": "Институт экономики, финансов и права (ИЭФП)"
          }, {
          "title": "Институт УНИК"
          }, {
          "title": "Московский институт права"
          }, {
          "title": "Столичная финансово-гуманитарная академия"
          }, {
          "title": "Московский институт государственного и корпоративного управления"
          }, {
          "title": "Московский институт национальных и региональных отношений"
          }, {
          "title": "Институт профессиональных инноваций"
          }, {
          "title": "Институт менеджмента и бизнеса"
          }, {
          "title": "Институт социальных наук"
          }, {
          "title": "Московский социально-гуманитарный институт"
          }, {
          "title": "Московский институт банковского дела"
          }, {
          "title": "Институт журналистики и литературного творчества"
          }, {
          "title": "Московский финансово-правовой институт"
          }, {
          "title": "Институт автомобильных технологий и управления"
          }, {
          "title": "Международный институт «ИНФО-Рутения»"
          }, {
          "title": "Институт современного права и экономики"
          }, {
          "title": "Московский институт экономических преобразований"
          }, {
          "title": "Русский институт управления имени В.П. Чернова"
          }, {
          "title": "Институт правовой экономики"
          }, {
          "title": "Московский бухгалтерский институт (МБИ)"
          }, {
          "title": "Московский институт физической культуры и спорта"
          }, {
          "title": "Московский институт юриспруденции"
          }, {
          "title": "Институт открытого бизнес-образования и дизайна"
          }, {
          "title": "Институт Содружества Независимых Государств"
          }, {
          "title": "Институт экономики и социальных отношений"
          }, {
          "title": "Институт экономики и антикризисного управления"
          }, {
          "title": "Московская академия рынка труда и информационных технологий"
          }, {
          "title": "Международный институт рекламы"
          }, {
          "title": "Институт современной экономики (г. Москва)"
          }, {
          "title": "Московский университет Министерства внутренних дел Российской Федерации"
          }, {
          "title": "Институт психотерапии и клинической психологии"
          }, {
          "title": "Московский технологический институт &quot;ВТУ&quot;"
          }, {
          "title": "Социально-экономический институт"
          }, {
          "title": "Институт туризма и гостеприимства (г. Москва) (филиал) Российского государственного университета туризма и сервиса"
          }, {
          "title": "Евразийский открытый институт"
          }, {
          "title": "Институт инфраструктуры предпринимательства"
          }, {
          "title": "Академия социального управления"
          }, {
          "title": "Библейско-богословский институт святого апостола Андрея"
          }, {
          "title": "Гуманитарно-Прогностический институт"
          }, {
          "title": "Институт бизнеса и права"
          }, {
          "title": "Московский институт психоанализа"
          }, {
          "title": "Институт управления и права"
          }, {
          "title": "Институт экономики и культуры (г. Москва)"
          }, {
          "title": "Институт коммуникативных технологий"
          }, {
          "title": "Институт международных социально-гуманитарных связей"
          }, {
          "title": "Академия Генеральной прокуратуры Российской Федерации"
          }, {
          "title": "Институт недвижимости и строительного бизнеса"
          }, {
          "title": "Институт философии, теологии и истории святого Фомы"
          }, {
          "title": "Институт театрального искусства им. П.М. Ершова"
          }, {
          "title": "Институт управления, экономики, права и искусства"
          }, {
          "title": "Международная академия оценки и консалтинга"
          }, {
          "title": "Международный гуманитарно-лингвистический институт"
          }, {
          "title": "Институт индустрии сервиса"
          }, {
          "title": "Лобненский филиал Московского государственного университета экономики, статистики и информатики"
          }, {
          "title": "Московский институт аналитической психологии и психоанализа"
          }, {
          "title": "Московский институт лингвистики"
          }, {
          "title": "Московский институт рекламы, туризма, шоу-бизнеса"
          }, {
          "title": "Московский Исламский Университет (Учреждение)"
          }, {
          "title": "Московский налоговый институт"
          }, {
          "title": "Московский транспортный институт"
          }, {
          "title": "Московский экономический институт"
          }, {
          "title": "Национальный институт современного дизайна"
          }, {
          "title": "Московский институт энергобезопасности и энергосбережения"
          }, {
          "title": "Институт бизнеса и делового администрирования (ИБДА) Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации"
          }, {
          "title": "Институт деловой карьеры"
          }, {
          "title": "Московский художественно-промышленный институт"
          }, {
          "title": "Институт управления и информатики"
          }, {
          "title": "Международный еврейский институт экономики, финансов и права"
          }, {
          "title": "Военный учебно-научный центр Военно-воздушных сил «Военно-воздушная академия имени профессора Н.Е. Жуковского и Ю.А. Гагарина»"
          }, {
          "title": "Военная академия Ракетных войск стратегического назначения имени Петра Великого"
          }, {
          "title": "Свято-Филаретовский православно-христианский институт"
          }, {
          "title": "Военный университет"
          }, {
          "title": "Институт традиционного прикладного искусства (Московский филиал) Высшей школы народных искусств (института)"
          }, {
          "title": "Финансово-промышленный институт"
          }, {
          "title": "Институт экономики бизнеса"
          }, {
          "title": "Институт рыночной экономики, социальной политики и права"
          }, {
          "title": "Институт экономики и управления в промышленности"
          }, {
          "title": "Военный учебно-научный центр Сухопутных войск «Общевойсковая академия Вооруженных Сил Российской Федерации»"
          }, {
          "title": "Столичный гуманитарно-экономический институт"
          }, {
          "title": "Институт международного учета и управления"
          }, {
          "title": "Институт русского театра"
          }, {
          "title": "Институт гостиничного и туристического менеджмента"
          }, {
          "title": "Национальный Институт Дизайна"
          }, {
          "title": "Национальный институт моды"
          }, {
          "title": "Московский филиал Российской международной академии туризма"
          }, {
          "title": "Пограничная академия Федеральной службы безопасности Российской Федерации"
          }, {
          "title": "Институт современного управления, кино и телевидения"
          }, {
          "title": "Московский гуманитарный институт"
          }, {
          "title": "Московское высшее военное командное училище (военный институт) (филиал) Военного учебно-научного центра Сухопутных войск &quot;Общевойсковая академия Вооруженных Сил Российской Федерации&quot;"
          }, {
          "title": "Московский институт открытого образования"
          }, {
          "title": "Институт менеджмента, экономики и инноваций"
          }, {
          "title": "Останкинский институт телевидения и радиовещания"
          }, {
          "title": "Институт экономики и управления в строительстве и промышленности"
          }, {
          "title": "Институт психологии"
          }, {
          "title": "Открытый технологический институт"
          }, {
          "title": "Институт управления"
          }, {
          "title": "Славяно-Греко-Латинская академия"
          }, {
          "title": "Московский архитектурно-строительный институт"
          }, {
          "title": "Московский социально-педагогический институт"
          }, {
          "title": "Профессиональный институт управления"
          }, {
          "title": "Институт непрерывного образования"
          }, {
          "title": "Московский институт управления и сервиса"
          }, {
          "title": "Московский филиал автономного образовательного учреждения Ленинградского государственного университета имени А.С. Пушкина"
          }, {
          "title": "Высшая школа финансов и менеджмента Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации"
          }, {
          "title": "Современный морской институт"
          }
        ]
      });
      facultys.initialize();
      if (faculty.hasClass('tt-input')) {
        faculty.typeahead('destroy');
      }
      return faculty.typeahead({
        hint: false,
        highlight: true,
        minLength: 1
      }, {
          name: 'facultys',
          displayKey: 'title',
          source: facultys.ttAdapter(),
          templates: {
            suggestion: Handlebars.compile('<p>{{title}}</p>')
          }
        });
    } else {
      return faculty.typeahead('destroy');
    }
  };

  PersonalDataAll.prototype.getSections = function(id) {
    var chapter, chapters, section, sections, _i, _len;
    chapters = ['математический анализ' + id, 'теория вероятностей' + id, 'теоретическая механика' + id, 'сопромат' + id, 'математи логика' + id, 'эконометрика' + id, 'высшая математика' + id, 'линейная алгебра' + id, 'дифференциальная геометрия' + id, 'аналитическая геометрия' + id, 'математическая физика' + id, 'дифференциальные уравнения' + id, 'математическая статистика' + id, 'линейная геометрия' + id, 'дискретная математика' + id, 'топология' + id, 'функциональный анализ' + id, 'интегральные уравнения' + id, 'теория чисел' + id, 'векторный анализ' + id, 'ТФКП' + id, 'тензорный анализ' + id, 'финансовая математика' + id, 'уравнения в частных производных' + id, 'актуарная математика' + id, 'теория графов' + id, 'комбинаторика' + id, 'математические модели' + id, 'прикладная математика' + id, 'тригоном-ия' + id, 'уравнения математической физики' + id, 'численные методы' + id, 'теория приближений' + id, 'теория оптимизации' + id, '.школьный курс' + id, 'на английском языке' + id, 'алгебра логики' + id, 'вычислимые функции' + id, 'теория игр' + id, 'вариационное исчисление' + id, 'оптимальное управление' + id, 'методы оптимизации' + id, 'линейное программирование' + id, 'алгебра' + id, 'геометрия' + id, 'методы оптимальных решений' + id];
    sections = new Array;
    section = new Object;
    id = 0;
    for (_i = 0, _len = chapters.length; _i < _len; _i++) {
      chapter = chapters[_i];
      section = {
        id: id,
        title: chapter
      };
      sections.push(section);
      id++;
    }
    return sections;
  };

  PersonalDataAll.prototype.getSubSections = function(id) {
    var chapter, chapters, section, sections, uid, _i, _len;
    chapters = new Array('ОГЭ (ГИА)' + id, 'Подготовка к олимпиадам' + id, 'Подготовка к экзаменам' + id);
    sections = new Array;
    section = new Object;
    uid = 0;
    for (_i = 0, _len = chapters.length; _i < _len; _i++) {
      chapter = chapters[_i];
      sections.push({
        'id': uid,
        'title': chapter
      });
      uid++;
    }
    return sections;
  };

  PersonalDataAll.prototype.newEducation = function(event) {
    event.preventDefault();
    this.add_education.parent().before(this.education_source({
      'index': this.education_count
    }));
    this.education_count++;
    this.step4.find('select:visible').chosen({
      disable_search_threshold: 30
    });
    if (this.education_count > 1) {
      this.remove_education.show();
    }
    return this.addHint();
  };

  PersonalDataAll.prototype.removeEducation = function(event) {
    event.preventDefault();
    this.education_count--;
    $('.education-wrapper:last').remove();
    if (this.education_count < 2) {
      return this.remove_education.hide();
    }
  };

  PersonalDataAll.prototype.step4Submit = function(event) {
    var input, inputs, _i, _len;
    event.preventDefault();
    inputs = this.step4.find(':input');
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      if (!this.validate(input)) {
        return false;
      }
    }
    if (this.step4.find('.ui-state-error').length > 0) {
      this.scrollToView(this.step4.find('.ui-state-error:eq(0)'));
      this.step4.find('.ui-state-error:eq(0)').focus();
      return false;
    }
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    $('html, body').animate({
      scrollTop: 0
    }, '500');
    return console.log(JSON.parse(JSON.stringify($('.panel :input').serializeArray())));
  };

  PersonalDataAll.prototype.step4Back = function(event) {
    event.preventDefault();
    this.steps.find('.selected.step:last').removeClass('selected');
    this.current = this.current.removeClass('current').prev();
    this.current.addClass('current');
    return $('html, body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.step3Submit = function(event) {
    var input, inputs, _i, _len;
    event.preventDefault();
    inputs = this.step3.find(':input');
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      if (!this.validate(input)) {
        return false;
      }
    }
    if (this.step3.find('.ui-state-error').length > 0) {
      this.scrollToView(this.step3.find('.ui-state-error:eq(0)'));
      this.step3.find('.ui-state-error:eq(0)').focus();
      return false;
    }
    this.steps.find('.selected.step:last').next().addClass('selected');
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    return $('html, body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.step3Back = function(event) {
    event.preventDefault();
    this.steps.find('.selected.step:last').removeClass('selected');
    this.current = this.current.removeClass('current').prev();
    this.current.addClass('current');
    return $('html, body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.newAddress = function(event) {
    event.preventDefault();
    this.add_address.parent().before(this.address_source({
      'index': this.address_count
    }));
    this.address_count++;
    this.step3.find('select:visible').chosen({
      disable_search_threshold: 30
    });
    if (this.address_count > 1) {
      return this.remove_address.show();
    }
  };

  PersonalDataAll.prototype.removeAddress = function(event) {
    event.preventDefault();
    this.address_count--;
    $('.adress-wrapper:last').remove();
    if (this.address_count < 2) {
      return this.remove_address.hide();
    }
  };

  PersonalDataAll.prototype.step2Submit = function(event) {
    var input, inputs, _i, _len;
    event.preventDefault();
    inputs = this.step2.find(':input');
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      if (!this.validate(input)) {
        return false;
      }
    }
    if (this.step2.find('.ui-state-error').length > 0) {
      this.step2.find('.ui-state-error:eq(0)').focus();
      this.scrollToView(this.step2.find('.ui-state-error:eq(0)'));
      return false;
    }
    this.steps.find('.selected.step:last').next().addClass('selected');
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    return $('html, body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.step2Back = function(event) {
    event.preventDefault();
    this.steps.find('.selected.step:last').removeClass('selected');
    this.current = this.current.removeClass('current').prev();
    this.current.addClass('current');
    return $('html, body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.checkFormat = function() {
    var element, elements, input, inputs, price, _i, _len, _results;
    inputs = this.formats.find('input');
    _results = [];
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      elements = this.step2.find('input.' + input.getAttribute('data-price-field'));
      _results.push((function() {
        var _j, _len1, _results1;
        _results1 = [];
        for (_j = 0, _len1 = elements.length; _j < _len1; _j++) {
          element = elements[_j];
          price = $(element).closest('.subdevision');
          if (input.checked) {
            price.removeClass('hide');
            element.removeAttribute('disabled');
            _results1.push(element.setAttribute('required', 'required'));
          } else {
            price.addClass('hide');
            element.classList.remove('ui-state-error');
            element.setAttribute('disabled', 'disabled');
            _results1.push(element.removeAttribute('required'));
          }
        }
        return _results1;
      })());
    }
    return _results;
  };

  PersonalDataAll.prototype.subjectSelected = function(event) {
    var element, half_length, id, leftSide, line, next, sections, select, subsections, _i, _len, _ref, _results;
    select = $(event.currentTarget);
    select.removeClass('unchanged');
    id = select.val();
    line = select.parents('.line');
    subsections = this.getSubSections(id);
    half_length = Math.ceil(subsections.length / 2);
    leftSide = subsections.splice(0, half_length);
    sections = this.subject_section_source({
      'index': this.section_count,
      'section': this.getSections(id),
      'column1': leftSide,
      'column2': subsections
    });
    this.section_count++;
    next = line.next();
    if (next.hasClass('section')) {
      next.replaceWith(sections);
    } else {
      line.after(sections);
    }
    this.step2.find('select:visible').chosen({
      disable_search_threshold: 30
    });
    _ref = this.step2.find('.dropdown-container-widget');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      element = _ref[_i];
      _results.push(new DropdownWidgetController($(element)));
    }
    return _results;
  };

  PersonalDataAll.prototype.getSection = function(index) {
    var select;
    select = $('.subj-wrapper .section:eq(' + index + ') select');
    if (select.length === 1) {
      return select.val();
    }
  };

  PersonalDataAll.prototype.getAdd = function(index) {
    var chkbox, chkboxs, values, _i, _len;
    chkboxs = $('.subj-wrapper .section:eq(' + index + ') .sub-section input[name="addition[]"]:checked');
    values = new Array;
    for (_i = 0, _len = chkboxs.length; _i < _len; _i++) {
      chkbox = chkboxs[_i];
      values.push($(chkbox).val());
    }
    return values;
  };

  PersonalDataAll.prototype.newSubject = function(event) {
    var element, wrapper, _i, _len, _ref;
    event.preventDefault();
    this.add_subject.parent().before(this.subject_source({
      'index': this.subj_count
    }));
    this.subj_count++;
    wrapper = this.add_subject.parent().prev();
    wrapper.find('select').on('change', this.subjectSelected);
    this.step2.find('select:visible').chosen({
      disable_search_threshold: 30
    });
    this.step2.find('.min-time').text(this.duration_value.val());
    this.checkFormat();
    _ref = this.step2.find('.dropdown-container-widget');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      element = _ref[_i];
      new DropdownWidgetController($(element));
    }
    if (this.subj_count > 1) {
      return this.remove_subject.show();
    }
  };

  PersonalDataAll.prototype.removeSubject = function(event) {
    event.preventDefault();
    this.subj_count--;
    $('.subj-wrapper:last').remove();
    if (this.subj_count < 2) {
      return this.remove_subject.hide();
    }
  };

  PersonalDataAll.prototype.validate = function(input) {
    var error;
    if (input.hasAttribute('data-h5-errorid')) {
      error = document.getElementById(input.getAttribute('data-h5-errorid'));
    }
    if (input.hasAttribute('required')) {
      if (input.classList.contains('unchanged')) {
        input.classList.add('ui-state-error');
      }
      if (input.value === "unchanged") {
        input.classList.add('ui-state-error');
      }
      if (input.value.trim().length === 0) {
        input.classList.add('ui-state-error');
      }
    }
    if (input.classList.contains('ui-state-error')) {
      if (error) {
        error.style.display = 'block';
      }
      input.focus();
      this.scrollToView(input);
      return false;
    } else {
      if (error) {
        error.style.display = 'none';
      }
    }
    return true;
  };

  PersonalDataAll.prototype.step1Submit = function(event) {
    var input, inputs, _i, _len;
    event.preventDefault();
    inputs = this.step1.find(':input');
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      if (!this.validate(input)) {
        return false;
      }
    }
    if (this.step1.find('.ui-state-error').length > 0) {
      this.step1.find('.ui-state-error:eq(0)').focus();
      this.scrollToView(this.step1.find('.ui-state-error:eq(0)'));
      return false;
    }
    this.steps.find('.selected.step:last').next().addClass('selected');
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    return $('html, body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.checkDate = function(event) {
    var day, days;
    day = parseInt(this.day.val().trim(), 10);
    if (day < 1 || isNaN(day)) {
      this.day.val(1);
      return;
    }
    days = parseInt(moment(this.year.val() + "-" + (parseInt(this.month.val(), 10) + 1), "YYYY-MM").daysInMonth(), 10);
    if (day > days) {
      this.day.val(days);
    }
    return;
    if (day > 31) {
      return this.day.val(31);
    }
  };

  PersonalDataAll.prototype.scrollToView = function(element) {
    element = $(element);
    if (!element.is(':visible')) {
      element = element.next();
    }
    return $('html, body').animate({
      scrollTop: element.offset().top + 'px'
    });
  };

  return PersonalDataAll;

})();

$(document).ready(function() {
  return new PersonalDataAll();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCx1REFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSwrQ0FBQSxDQUFBO0FBQUEseURBQUEsQ0FBQTtBQUFBLG1EQUFBLENBQUE7QUFBQSwyQ0FBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2REFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSw2Q0FBQSxDQUFBO0FBQUEsUUFBQSxpQkFBQTtBQUFBLElBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxDQUFBLENBQUUscUJBQUYsQ0FBVixDQUFBO0FBQ0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixLQUFrQixDQUFyQjtBQUNFLFlBQVUsSUFBQSxLQUFBLENBQU0sa0JBQU4sQ0FBVixDQURGO0tBREE7QUFBQSxJQUlBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUpULENBQUE7QUFBQSxJQUtBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUxWLENBQUE7QUFBQSxJQU1BLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFS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QWhCLENBQXdCO0FBQUEsTUFBQyxTQUFBLEVBQVcsT0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUFnQixDQUFDLEdBQWpCLEdBQXVCLElBQW5DO0tBQXhCLEVBSlk7RUFBQSxDQTVsQmQsQ0FBQTs7eUJBQUE7O0lBREYsQ0FBQTs7QUFBQSxDQW1tQkEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUEsR0FBQTtTQUNaLElBQUEsZUFBQSxDQUFBLEVBRFk7QUFBQSxDQUFsQixDQW5tQkEsQ0FBQSIsImZpbGUiOiJQZXJzb25hbERhdGFBbGwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQZXJzb25hbERhdGFBbGxcbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQHdpZGdldCA9ICQgJy5yZWdpc3RyYXRpb24tc3RlcHMnXG4gICAgaWYgQHdpZGdldC5sZW5ndGggPT0gMFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfQvdC1INC90LDQudC00LXQvSDQstC40LTQttC10YInKVxuXG4gICAgQHN0ZXBzID0gQHdpZGdldC5maW5kICcuc3RlcHMnXG4gICAgQHBhbmVscyA9IEB3aWRnZXQuZmluZCAnLnBhbmVsJ1xuICAgIEBjdXJyZW50ID0gQHdpZGdldC5maW5kICcucGFuZWwuY3VycmVudCdcblxuICAgIEBzdGVwMSA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMSdcbiAgICBAc3RlcDIgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTInXG4gICAgQHN0ZXAzID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0zJ1xuICAgIEBzdGVwNCA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtNCdcbiAgICBAc3RlcDUgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTUnXG5cbiAgICAjINCe0LHRidC10LVcbiAgICBzZWxlY3QgPSAkICdzZWxlY3QnXG4gICAgaWYgc2VsZWN0Lmxlbmd0aCA+IDBcbiAgICAgIHNlbGVjdC5jaG9zZW5cbiAgICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuXG4gICAgJCggXCIucGFuZWxcIiApLm9uIFwiY2hhbmdlXCIsIFwiOmlucHV0XCIsIChldmVudCktPlxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcyAndW5jaGFuZ2VkJ1xuXG4gICAgIyDQqNCw0LMgMVxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDEuaDVWYWxpZGF0ZSgpXG5cbiAgICAjINCX0LDQs9GA0YPQt9C60LAg0LDQstCw0YLQsNGA0LBcbiAgICBAYXZhZHJvcCA9IG5ldyBEcm9wem9uZSAkKCcucGhvdG8nKVswXSxcbiAgICAgIHVybDogXCJodHRwOi8vdGVzdC5zaWxlbnRpbXAuaW5mby9SZXBldGl0LnJ1L3Rlc3QucGhwXCJcbiAgICAgIHVwbG9hZE11bHRpcGxlOiBmYWxzZVxuICAgICAgbWF4RmlsZXNpemU6IDVcbiAgICAgIHBhcmFtTmFtZTogXCJhdmF0YXJcIlxuICAgICAgbWV0aG9kOiBcInBvc3RcIlxuICAgICAgY2xpY2thYmxlOiBcIi5maWxlLXNlbGVjdG9yXCJcbiAgICAgIHRodW1ibmFpbFdpZHRoOiBudWxsXG4gICAgICB0aHVtYm5haWxIZWlnaHQ6IG51bGxcbiAgICAgIGFjY2VwdGVkRmlsZXM6IFwiaW1hZ2UvKlwiXG4gICAgICBwcmV2aWV3c0NvbnRhaW5lcjogXCIuYXZhdGFyXCJcbiAgICAgIHByZXZpZXdUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJjdXJyZW50LWF2YXRhclwiPjxpbWcgZGF0YS1kei10aHVtYm5haWw9XCJkYXRhLWR6LXRodW1ibmFpbFwiIC8+PGEgaHJlZj1cIiNcIiBkYXRhLWR6LXJlbW92ZT1cImRhdGEtZHotcmVtb3ZlXCIgY2xhc3M9XCJjbG9zZVwiPjwvYT48L2Rpdj4nXG5cbiAgICBAYXZhZHJvcC5vbiAnYWRkZWRmaWxlJywgLT5cbiAgICAgICQoJy5maWxlLXNlbGVjdG9yJykuaGlkZSgpXG5cbiAgICBAYXZhZHJvcC5vbiAncmVtb3ZlZGZpbGUnLCAtPlxuICAgICAgJCgnLmZpbGUtc2VsZWN0b3InKS5zaG93KClcblxuICAgICMg0J/QvtC70LfRg9C90L7QuiDQvtC/0YvRgtCwXG4gICAgZXhwID0gJCAnI2V4cGVyaWVuY2UnXG4gICAgaWYgZXhwLmxlbmd0aCA+IDBcbiAgICAgIGV4cC5ub1VpU2xpZGVyXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIGNvbm5lY3Q6IFwibG93ZXJcIixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHJhbmdlOlxuICAgICAgICAgICdtaW4nOiBbMF0sXG4gICAgICAgICAgJ21heCc6IFs1MF1cbiAgICAgICAgZm9ybWF0OiB3TnVtYlxuICAgICAgICAgIGRlY2ltYWxzOiAwXG4gICAgICBleHAuTGluaygnbG93ZXInKS50bygkKCcjZXhwZXJpZW5jZS12YWx1ZScpKVxuXG4gICAgIyDQlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPXG4gICAgQG1vbnRoID0gQHN0ZXAxLmZpbmQgJy5tb250aCBzZWxlY3QnXG4gICAgQHllYXIgID0gQHN0ZXAxLmZpbmQgJy55ZWFyIHNlbGVjdCdcbiAgICBAZGF5ICAgPSBAc3RlcDEuZmluZCAnaW5wdXQuZGF5J1xuICAgIEBkYXkub24gICAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuICAgIEBtb250aC5vbiAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuICAgIEB5ZWFyLm9uICAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuXG4gICAgIyDQntGC0L/RgNCw0LLQutCwINC00LDQvdC90YvRhSDQqNCw0LMgMVxuICAgIEBzdGVwMS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMVN1Ym1pdFxuXG4gICAgIyDQqNCw0LMgMlxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDIuaDVWYWxpZGF0ZSgpXG5cbiAgICAjINCf0L7Qu9C30YPQvdC+0Log0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INC30LDQvdGP0YLQuNC5XG4gICAgQGR1cmF0aW9uX3ZhbHVlID0gJCgnI2R1cmF0aW9uLXZhbHVlJylcblxuICAgIHRpbWUgPSAkICcjZHVyYXRpb24nXG4gICAgaWYgdGltZS5sZW5ndGggPiAwXG4gICAgICB0aW1lLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogNSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFszMF0sXG4gICAgICAgICAgJ21heCc6IFsxODBdXG4gICAgICAgIGZvcm1hdDogd051bWJcbiAgICAgICAgICBkZWNpbWFsczogMFxuXG4gICAgICB0aW1lLkxpbmsoJ2xvd2VyJykudG8oQGR1cmF0aW9uX3ZhbHVlKVxuICAgICAgdGltZS5vbiAnY2hhbmdlJywgKGV2ZW50LCB1aSk9PlxuICAgICAgICAkKCdzdHJvbmcubWluLXRpbWUnKS50ZXh0KHVpKVxuXG4gICAgIyDQpNC+0YDQvNCw0YIg0LfQsNC90Y/RgtC40LlcbiAgICBAZm9ybWF0cyA9IEBzdGVwMi5maW5kICcubGVzc29ucy1mb3JtYXQnXG4gICAgQGZvcm1hdHMuZmluZCgnaW5wdXQnKS5vbiAnY2hhbmdlJywgQGNoZWNrRm9ybWF0XG4gICAgQGNoZWNrRm9ybWF0KClcblxuICAgICMg0JTQvtCx0LDQstC60LAg0L/RgNC10LTQvNC10YLQsFxuICAgIEBhZGRfc3ViamVjdCA9IEBzdGVwMi5maW5kICcuYWRkLXN1YmplY3QnXG4gICAgQHN1YmpfY291bnQgPSAwXG4gICAgQHN1YmplY3Rfc291cmNlID0gJChcIiNzdWJqLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zb3VyY2VcbiAgICBAYWRkX3N1YmplY3Qub24gJ2NsaWNrJywgQG5ld1N1YmplY3RcbiAgICBAYWRkX3N1YmplY3QudHJpZ2dlciAnY2xpY2snXG5cbiAgICAjINCf0L7QtNGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgICBAc2VjdGlvbl9jb3VudCA9IDAgXG4gICAgQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2UgPSAkKFwiI3N1Ymotc2VjdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZVxuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L/RgNC10LTQvNC10YLQsFxuICAgIEByZW1vdmVfc3ViamVjdCA9IEBzdGVwMi5maW5kICcucmVtb3ZlLXN1YmplY3QnXG4gICAgQHJlbW92ZV9zdWJqZWN0Lm9uICdjbGljaycsIEByZW1vdmVTdWJqZWN0XG5cbiAgICBAc3RlcDIuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDJTdWJtaXRcbiAgICBAc3RlcDIuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwMkJhY2tcblxuXG4gICAgIyDQqNCw0LMgM1xuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDMuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0LDQtNGA0LXRgdCwXG4gICAgQGFkZF9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5hZGQtYWRkcmVzcydcbiAgICBAYWRkcmVzc19jb3VudCA9IDBcbiAgICBAYWRkcmVzc19zb3VyY2UgPSAkKFwiI2FkZHJlc3MtdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQGFkZHJlc3Nfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBhZGRyZXNzX3NvdXJjZVxuICAgIEBhZGRfYWRkcmVzcy5vbiAnY2xpY2snLCBAbmV3QWRkcmVzc1xuICAgIEBhZGRfYWRkcmVzcy50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INCw0LTRgNC10YHQsFxuICAgIEByZW1vdmVfYWRkcmVzcyA9IEBzdGVwMy5maW5kICcucmVtb3ZlLWFkZHJlc3MnXG4gICAgQHJlbW92ZV9hZGRyZXNzLm9uICdjbGljaycsIEByZW1vdmVBZGRyZXNzXG5cbiAgICBAc3RlcDMuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDNTdWJtaXRcbiAgICBAc3RlcDMuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwM0JhY2tcblxuXG4gICAgIyDQqNCw0LMgNFxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDQuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEBhZGRfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5hZGQtZWR1Y2F0aW9uJ1xuICAgIEBlZHVjYXRpb25fY291bnQgPSAwXG4gICAgQGVkdWNhdGlvbl9zb3VyY2UgPSAkKFwiI2VkdWNhdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAZWR1Y2F0aW9uX3NvdXJjZVxuICAgIEBhZGRfZWR1Y2F0aW9uLm9uICdjbGljaycsIEBuZXdFZHVjYXRpb25cbiAgICBAYWRkX2VkdWNhdGlvbi50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cbiAgICBAcmVtb3ZlX2VkdWNhdGlvbiA9IEBzdGVwNC5maW5kICcucmVtb3ZlLWVkdWNhdGlvbidcbiAgICBAcmVtb3ZlX2VkdWNhdGlvbi5vbiAnY2xpY2snLCBAcmVtb3ZlRWR1Y2F0aW9uXG5cblxuICAgIEBjZXJ0X2xpc3QgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXQtbGlzdCdcbiAgICBAY2VyaWZpY2F0ZXNfY291bnQgPSAwXG4gICAgQHNlcnRpZmljYXRzID0gQHN0ZXA0LmZpbmQgJy5zZXJ0aWZpY2F0cydcblxuICAgIEBzZXJ0aWZpY2F0cy5kcm9wem9uZVxuICAgICAgdXJsOiBcImh0dHA6Ly90ZXN0LnNpbGVudGltcC5pbmZvL1JlcGV0aXQucnUvdGVzdC5waHBcIlxuICAgICAgdXBsb2FkTXVsdGlwbGU6IHRydWVcbiAgICAgIG1heEZpbGVzaXplOiA1XG4gICAgICBwYXJhbU5hbWU6IFwiY2VydGlmaWNhdHNcIlxuICAgICAgbWV0aG9kOiBcInBvc3RcIlxuICAgICAgcHJldmlld3NDb250YWluZXI6IFwiLnNlcnRpZmljYXQtbGlzdFwiXG4gICAgICBjbGlja2FibGU6IFwiLmFkZC1zZXJ0aWZpY2F0IC5idXR0b25cIlxuICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGxcbiAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbFxuICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qLGFwcGxpY2F0aW9uL3BkZlwiXG4gICAgICBwcmV2aWV3VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwic2VydGlmaWNhdCBkei1wcmV2aWV3IGR6LWZpbGUtcHJldmlld1wiPjxpbWcgZGF0YS1kei10aHVtYm5haWw9XCJkYXRhLWR6LXRodW1ibmFpbFwiIC8+PGEgaHJlZj1cIiNcIiBkYXRhLWR6LXJlbW92ZT1cImRhdGEtZHotcmVtb3ZlXCIgY2xhc3M9XCJyZW1vdmVcIj48L2E+PHRleHRhcmVhIG5hbWU9XCJjb21tZW50c1tdXCIgcGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC14oCmXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT48L2Rpdj4nXG5cbiAgICBAc3RlcDQuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDRTdWJtaXRcbiAgICBAc3RlcDQuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwNEJhY2tcblxuICBhZGRIaW50OiA9PlxuXG4gICAgIyBsb2NhdGlvbnMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICMgICBkYXR1bVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLm9iai53aGl0ZXNwYWNlKFwiY2l0eVwiKSxcbiAgICAjICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICMgICBwcmVmZXRjaDogXCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8yMDgxMDc3Mi9jaXR5cy5qc29uXCJcbiAgICBcbiAgICBsb2NhdGlvbnMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IChkYXRhKS0+XG4gICAgICAgIHJldHVybiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZShkYXRhLnRpdGxlKVxuICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgbGltaXQ6IDYwMFxuICAgICAgbG9jYWw6IFt7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQstCwXCJ9LHtcInRpdGxlXCI6XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wifSx7XCJ0aXRsZVwiOlwi0JDQsdCw0LrQsNC9XCJ9LHtcInRpdGxlXCI6XCLQkNC90LDQtNGL0YDRjFwifSx7XCJ0aXRsZVwiOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0JDRgdGC0YDQsNGF0LDQvdGMXCJ9LHtcInRpdGxlXCI6XCLQkdCw0YDQvdCw0YPQu1wifSx7XCJ0aXRsZVwiOlwi0JHQtdC70LPQvtGA0L7QtFwifSx7XCJ0aXRsZVwiOlwi0JHQuNGA0L7QsdC40LTQttCw0L1cIn0se1widGl0bGVcIjpcItCR0LvQsNCz0L7QstC10YnQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JHRgNGP0L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQktC10LvQuNC60LjQuSDQndC+0LLQs9C+0YDQvtC0XCJ9LHtcInRpdGxlXCI6XCLQktC70LDQtNC40LLQvtGB0YLQvtC6XCJ9LHtcInRpdGxlXCI6XCLQktC70LDQtNC40LrQsNCy0LrQsNC3XCJ9LHtcInRpdGxlXCI6XCLQktC70LDQtNC40LzQuNGAXCJ9LHtcInRpdGxlXCI6XCLQktC+0LvQs9C+0LPRgNCw0LRcIn0se1widGl0bGVcIjpcItCS0L7Qu9C+0LPQtNCwXCJ9LHtcInRpdGxlXCI6XCLQktC+0YDQvtC90LXQtlwifSx7XCJ0aXRsZVwiOlwi0JPQvtGA0L3Qvi3QkNC70YLQsNC50YHQulwifSx7XCJ0aXRsZVwiOlwi0JPRgNC+0LfQvdGL0LlcIn0se1widGl0bGVcIjpcItCV0LrQsNGC0LXRgNC40L3QsdGD0YDQs1wifSx7XCJ0aXRsZVwiOlwi0JjQstCw0L3QvtCy0L5cIn0se1widGl0bGVcIjpcItCY0LbQtdCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JnQvtGI0LrQsNGALdCe0LvQsFwifSx7XCJ0aXRsZVwiOlwi0JjRgNC60YPRgtGB0LpcIn0se1widGl0bGVcIjpcItCa0LDQt9Cw0L3RjFwifSx7XCJ0aXRsZVwiOlwi0JrQsNC70LjQvdC40L3Qs9GA0LDQtFwifSx7XCJ0aXRsZVwiOlwi0JrQsNC70YPQs9CwXCJ9LHtcInRpdGxlXCI6XCLQmtC10LzQtdGA0L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQmtC40YDQvtCyXCJ9LHtcInRpdGxlXCI6XCLQmtC+0YHRgtGA0L7QvNCwXCJ9LHtcInRpdGxlXCI6XCLQmtGA0LDRgdC90L7QtNCw0YBcIn0se1widGl0bGVcIjpcItCa0YDQsNGB0L3QvtGP0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtGD0YDQs9Cw0L1cIn0se1widGl0bGVcIjpcItCa0YPRgNGB0LpcIn0se1widGl0bGVcIjpcItCa0YvQt9GL0LtcIn0se1widGl0bGVcIjpcItCb0LjQv9C10YbQulwifSx7XCJ0aXRsZVwiOlwi0JzQsNCz0LDQtNCw0L1cIn0se1widGl0bGVcIjpcItCd0LDQt9GA0LDQvdGMXCJ9LHtcInRpdGxlXCI6XCLQnNCw0LnQutC+0L9cIn0se1widGl0bGVcIjpcItCc0LDRhdCw0YfQutCw0LvQsFwifSx7XCJ0aXRsZVwiOlwi0JzRg9GA0LzQsNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QsNC70YzRh9C40LpcIn0se1widGl0bGVcIjpcItCd0LDRgNGM0Y/QvS3QnNCw0YBcIn0se1widGl0bGVcIjpcItCd0LjQttC90LjQuSDQndC+0LLQs9C+0YDQvtC0XCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtGB0LjQsdC40YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQntC80YHQulwifSx7XCJ0aXRsZVwiOlwi0J7RgNGR0LtcIn0se1widGl0bGVcIjpcItCe0YDQtdC90LHRg9GA0LNcIn0se1widGl0bGVcIjpcItCf0LXQvdC30LBcIn0se1widGl0bGVcIjpcItCf0LXRgNC80YxcIn0se1widGl0bGVcIjpcItCf0LXRgtGA0L7Qt9Cw0LLQvtC00YHQulwifSx7XCJ0aXRsZVwiOlwi0J/QtdGC0YDQvtC/0LDQstC70L7QstGB0Lot0JrQsNC80YfQsNGC0YHQutC40LlcIn0se1widGl0bGVcIjpcItCf0YHQutC+0LJcIn0se1widGl0bGVcIjpcItCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDXCJ9LHtcInRpdGxlXCI6XCLQoNGP0LfQsNC90YxcIn0se1widGl0bGVcIjpcItCh0LDQu9C10YXQsNGA0LRcIn0se1widGl0bGVcIjpcItCh0LDQvNCw0YDQsFwifSx7XCJ0aXRsZVwiOlwi0KHQsNGA0LDQvdGB0LpcIn0se1widGl0bGVcIjpcItCh0LDRgNCw0YLQvtCyXCJ9LHtcInRpdGxlXCI6XCLQodC80L7Qu9C10L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQodGC0LDQstGA0L7Qv9C+0LvRjFwifSx7XCJ0aXRsZVwiOlwi0KHRi9C60YLRi9Cy0LrQsNGAXCJ9LHtcInRpdGxlXCI6XCLQotCw0LzQsdC+0LJcIn0se1widGl0bGVcIjpcItCi0LLQtdGA0YxcIn0se1widGl0bGVcIjpcItCi0L7QvNGB0LpcIn0se1widGl0bGVcIjpcItCi0YPQu9CwXCJ9LHtcInRpdGxlXCI6XCLQotGO0LzQtdC90YxcIn0se1widGl0bGVcIjpcItCj0LvQsNC9LdCj0LTRjVwifSx7XCJ0aXRsZVwiOlwi0KPQu9GM0Y/QvdC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQo9GE0LBcIn0se1widGl0bGVcIjpcItCl0LDQsdCw0YDQvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0KXQsNC90YLRiy3QnNCw0L3RgdC40LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQp9C10LHQvtC60YHQsNGA0YtcIn0se1widGl0bGVcIjpcItCn0LXQu9GP0LHQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0KfQtdGA0LrQtdGB0YHQulwifSx7XCJ0aXRsZVwiOlwi0KfQuNGC0LBcIn0se1widGl0bGVcIjpcItCt0LvQuNGB0YLQsFwifSx7XCJ0aXRsZVwiOlwi0K7QttC90L4t0KHQsNGF0LDQu9C40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQr9C60YPRgtGB0LpcIn0se1widGl0bGVcIjpcItCv0YDQvtGB0LvQsNCy0LvRjFwifSx7XCJ0aXRsZVwiOlwi0KfQtdGA0LXQv9C+0LLQtdGGXCJ9LHtcInRpdGxlXCI6XCLQkNCx0LTRg9C70LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQkNCz0LjQvdGB0LrQvtC1XCJ9LHtcInRpdGxlXCI6XCLQkdC10LvQvtC60YPRgNC40YXQsFwifSx7XCJ0aXRsZVwiOlwi0JHQuNC50YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7QsNC70YLQsNC50YHQulwifSx7XCJ0aXRsZVwiOlwi0KDRg9Cx0YbQvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0KHQu9Cw0LLQs9C+0YDQvtC0XCJ9LHtcInRpdGxlXCI6XCLQodCy0L7QsdC+0LTQvdGL0LlcIn0se1widGl0bGVcIjpcItCi0YvQvdC00LBcIn0se1widGl0bGVcIjpcItCS0LXQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0JrQvtGA0Y/QttC80LBcIn0se1widGl0bGVcIjpcItCa0L7RgtC70LDRgVwifSx7XCJ0aXRsZVwiOlwi0KHQtdCy0LXRgNC+0LTQstC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQkNGF0YLRg9Cx0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCX0L3QsNC80LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCQ0LvQtdC60YHQtdC10LLQutCwXCJ9LHtcInRpdGxlXCI6XCLQk9GD0LHQutC40L1cIn0se1widGl0bGVcIjpcItCh0YLQsNGA0YvQuSDQntGB0LrQvtC7XCJ9LHtcInRpdGxlXCI6XCLQlNGP0YLRjNC60L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQmtCw0YDQsNGH0LXQslwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7Qt9GL0YDRjNC60L7QslwifSx7XCJ0aXRsZVwiOlwi0KPQvdC10YfQsFwifSx7XCJ0aXRsZVwiOlwi0JDQu9C10LrRgdCw0L3QtNGA0L7QslwifSx7XCJ0aXRsZVwiOlwi0JPRg9GB0Ywt0KXRgNGD0YHRgtCw0LvRjNC90YvQuVwifSx7XCJ0aXRsZVwiOlwi0JrQvtCy0YDQvtCyXCJ9LHtcInRpdGxlXCI6XCLQnNGD0YDQvtC8XCJ9LHtcInRpdGxlXCI6XCLQn9C+0LrRgNC+0LJcIn0se1widGl0bGVcIjpcItCR0YvQutC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JLQvtC70LbRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0JrQsNC80YvRiNC40L1cIn0se1widGl0bGVcIjpcItCc0LjRhdCw0LnQu9C+0LLQutCwXCJ9LHtcInRpdGxlXCI6XCLQo9GA0Y7Qv9C40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQp9C10YDQtdC/0L7QstC10YZcIn0se1widGl0bGVcIjpcItCR0L7RgNC40YHQvtCz0LvQtdCx0YHQulwifSx7XCJ0aXRsZVwiOlwi0JvQuNGB0LrQuFwifSx7XCJ0aXRsZVwiOlwi0JrQuNC90LXRiNC80LBcIn0se1widGl0bGVcIjpcItCo0YPRj1wifSx7XCJ0aXRsZVwiOlwi0JDQvdCz0LDRgNGB0LpcIn0se1widGl0bGVcIjpcItCR0YDQsNGC0YHQulwifSx7XCJ0aXRsZVwiOlwi0JHQvtGF0LDQvVwifSx7XCJ0aXRsZVwiOlwi0KPRgdC+0LvRjNC1LdCh0LjQsdC40YDRgdC60L7QtVwifSx7XCJ0aXRsZVwiOlwi0KPRgdGC0Ywt0JjQu9C40LzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQn9C+0LvQtdGB0YHQulwifSx7XCJ0aXRsZVwiOlwi0KHQvtCy0LXRgtGB0LpcIn0se1widGl0bGVcIjpcItCn0LXRgNC90Y/RhdC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdCw0LvQsNCx0LDQvdC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JrQuNGA0L7QslwifSx7XCJ0aXRsZVwiOlwi0J7QsdC90LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCa0LDRgNCw0YfQsNC10LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQo9GH0LrQtdC60LXQvVwifSx7XCJ0aXRsZVwiOlwi0JDQvdC20LXRgNC+LdCh0YPQtNC20LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCR0LXQu9C+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JrQuNGB0LXQu9C10LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQm9C10L3QuNC90YHQui3QmtGD0LfQvdC10YbQutC40LlcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPRgNC10YfQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7QutGD0LfQvdC10YbQulwifSx7XCJ0aXRsZVwiOlwi0J7RgdC40L3QvdC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0J/RgNC+0LrQvtC/0YzQtdCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0KLQsNC50LPQsFwifSx7XCJ0aXRsZVwiOlwi0KLQsNGI0YLQsNCz0L7Qu1wifSx7XCJ0aXRsZVwiOlwi0K7RgNCz0LBcIn0se1widGl0bGVcIjpcItCS0Y/RgtGB0LrQuNC1INCf0L7Qu9GP0L3Ri1wifSx7XCJ0aXRsZVwiOlwi0JfQvdCw0LzQtdC90LrQsFwifSx7XCJ0aXRsZVwiOlwi0JrQuNGA0L7QstC+LdCn0LXQv9C10YbQulwifSx7XCJ0aXRsZVwiOlwi0JrQvtGC0LXQu9GM0L3QuNGHXCJ9LHtcInRpdGxlXCI6XCLQndC+0YDQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0KHQu9C+0LHQvtC00YHQutC+0LlcIn0se1widGl0bGVcIjpcItCa0LDRgNCw0LLQsNC10LLQvlwifSx7XCJ0aXRsZVwiOlwi0KjQsNGA0YzRj1wifSx7XCJ0aXRsZVwiOlwi0JDQvdCw0L/QsFwifSx7XCJ0aXRsZVwiOlwi0JDRgNC80LDQstC40YBcIn0se1widGl0bGVcIjpcItCR0LXQu9C+0YDQtdGH0LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCT0LXQu9C10L3QtNC20LjQulwifSx7XCJ0aXRsZVwiOlwi0JPQvtGA0Y/Rh9C40Lkg0JrQu9GO0YdcIn0se1widGl0bGVcIjpcItCT0YPQu9GM0LrQtdCy0LjRh9C4XCJ9LHtcInRpdGxlXCI6XCLQldC50YHQulwifSx7XCJ0aXRsZVwiOlwi0JrQvtGA0LXQvdC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtGA0L7Qv9C+0YLQutC40L1cIn0se1widGl0bGVcIjpcItCa0YPRidC10LLRgdC60LDRj1wifSx7XCJ0aXRsZVwiOlwi0JvQsNCx0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCb0LXQvdC40L3Qs9GA0LDQtNGB0LrQsNGPXCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtGA0L7RgdGB0LjQudGB0LpcIn0se1widGl0bGVcIjpcItCe0YLRgNCw0LTQvdCw0Y9cIn0se1widGl0bGVcIjpcItCf0LDQstC70L7QstGB0LrQsNGPXCJ9LHtcInRpdGxlXCI6XCLQodC70LDQstGP0L3RgdC6LdC90LAt0JrRg9Cx0LDQvdC4XCJ9LHtcInRpdGxlXCI6XCLQodC+0YfQuFwifSx7XCJ0aXRsZVwiOlwi0KLQuNGF0L7RgNC10YbQulwifSx7XCJ0aXRsZVwiOlwi0KLRg9Cw0L/RgdC1XCJ9LHtcInRpdGxlXCI6XCLQo9GB0YLRjC3Qm9Cw0LHQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JDRh9C40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQltC10LvQtdC30L3QvtCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCX0LXQu9C10L3QvtCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCa0LDQvdGB0LpcIn0se1widGl0bGVcIjpcItCb0LXRgdC+0YHQuNCx0LjRgNGB0LpcIn0se1widGl0bGVcIjpcItCc0LjQvdGD0YHQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QvtGA0LjQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0KjQsNGA0YvQv9C+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JvQtdGB0L3QuNC60L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQqNCw0LTRgNC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQltC10LvQtdC30L3QvtCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCb0YzQs9C+0LJcIn0se1widGl0bGVcIjpcItCg0YvQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0KHRg9C00LbQsFwifSx7XCJ0aXRsZVwiOlwi0JHQvtC60YHQuNGC0L7Qs9C+0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQktC+0LvRhdC+0LJcIn0se1widGl0bGVcIjpcItCS0YHQtdCy0L7Qu9C20YHQulwifSx7XCJ0aXRsZVwiOlwi0JLRi9Cx0L7RgNCzXCJ9LHtcInRpdGxlXCI6XCLQm9GD0LPQsFwifSx7XCJ0aXRsZVwiOlwi0JPQsNGC0YfQuNC90LBcIn0se1widGl0bGVcIjpcItCY0LLQsNC90LPQvtGA0L7QtFwifSx7XCJ0aXRsZVwiOlwi0JrQuNC90LPQuNGB0LXQv9C/XCJ9LHtcInRpdGxlXCI6XCLQmtC40YDQuNGI0LhcIn0se1widGl0bGVcIjpcItCf0L7QtNC/0L7RgNC+0LbRjNC1XCJ9LHtcInRpdGxlXCI6XCLQodC40LLQtdGA0YHQutC40LlcIn0se1widGl0bGVcIjpcItCh0LvQsNC90YbRi1wifSx7XCJ0aXRsZVwiOlwi0KHQvtGB0L3QvtCy0YvQuSDQsdC+0YBcIn0se1widGl0bGVcIjpcItCi0LjRhdCy0LjQvVwifSx7XCJ0aXRsZVwiOlwi0JXQu9C10YZcIn0se1widGl0bGVcIjpcItCX0LXQu9C10L3QvtCz0YDQsNC0XCJ9LHtcInRpdGxlXCI6XCLQkdCw0LvQsNGI0LjRhdCwXCJ9LHtcInRpdGxlXCI6XCLQkdCw0YDQstC40YXQsFwifSx7XCJ0aXRsZVwiOlwi0JHQvtC70YzRiNC40LUg0JLRj9C30ZHQvNGLXCJ9LHtcInRpdGxlXCI6XCLQkdGA0L7QvdC90LjRhtGLXCJ9LHtcInRpdGxlXCI6XCLQktC40LTQvdC+0LVcIn0se1widGl0bGVcIjpcItCS0L7Qu9C+0LrQvtC70LDQvNGB0LpcIn0se1widGl0bGVcIjpcItCS0L7RgdC60YDQtdGB0LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCT0L7Qu9C40YbRi9C90L5cIn0se1widGl0bGVcIjpcItCp0ZHQu9C60L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQmtGD0LHQuNC90LrQsFwifSx7XCJ0aXRsZVwiOlwi0JTQtdC00L7QstGB0LpcIn0se1widGl0bGVcIjpcItCU0LfQtdGA0LbQuNC90YHQutC40LlcIn0se1widGl0bGVcIjpcItCU0LzQuNGC0YDQvtCyXCJ9LHtcInRpdGxlXCI6XCLQlNC+0LvQs9C+0L/RgNGD0LTQvdGL0LlcIn0se1widGl0bGVcIjpcItCU0L7QvNC+0LTQtdC00L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQlNGD0LHQvdCwXCJ9LHtcInRpdGxlXCI6XCLQldCz0L7RgNGM0LXQstGB0LpcIn0se1widGl0bGVcIjpcItCW0LXQu9C10LfQvdC+0LTQvtGA0L7QttC90YvQuVwifSx7XCJ0aXRsZVwiOlwi0JbRg9C60L7QstGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmNCy0LDQvdGC0LXQtdCy0LrQsFwifSx7XCJ0aXRsZVwiOlwi0JrQsNGI0LjRgNCwXCJ9LHtcInRpdGxlXCI6XCLQmtC70LjQvVwifSx7XCJ0aXRsZVwiOlwi0JrQvtC60L7RiNC60LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQmtC+0LvQvtC80L3QsFwifSx7XCJ0aXRsZVwiOlwi0JrQvtGA0L7Qu9GR0LJcIn0se1widGl0bGVcIjpcItCa0L7RgtC10LvRjNC90LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQmtGA0LDRgdC90L7Qs9C+0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtGA0LDRgdC90L7Qt9C90LDQvNC10L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQm9GO0LHQtdGA0YbRi1wifSx7XCJ0aXRsZVwiOlwi0JzQsNC70LDRhdC+0LLQutCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0LbQsNC50YHQulwifSx7XCJ0aXRsZVwiOlwi0KfQtdC70Y7RgdC60LjQvdGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQnNGL0YLQuNGJ0LhcIn0se1widGl0bGVcIjpcItCd0LDRgNC+LdCk0L7QvNC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQndC+0LPQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0J7QtNC40L3RhtC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0J7RgNC10YXQvtCy0L4t0JfRg9C10LLQvlwifSx7XCJ0aXRsZVwiOlwi0J/QsNCy0LvQvtCy0YHQutC40Lkg0J/QvtGB0LDQtFwifSx7XCJ0aXRsZVwiOlwi0J/QvtC00L7Qu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0J/RgNC+0YLQstC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0J/Rg9GI0LrQuNC90L5cIn0se1widGl0bGVcIjpcItCf0YPRidC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0KDQsNC00YPQttC90YvQuVwifSx7XCJ0aXRsZVwiOlwi0KDQsNC80LXQvdGB0LrQvtC1XCJ9LHtcInRpdGxlXCI6XCLQoNC10YPRgtC+0LJcIn0se1widGl0bGVcIjpcItCg0YPQt9CwXCJ9LHtcInRpdGxlXCI6XCLQodGC0LDRgNC+0YLQtdGA0Y/QtdCy0L5cIn0se1widGl0bGVcIjpcItCh0LXRgNCz0LjQtdCyINCf0L7RgdCw0LRcIn0se1widGl0bGVcIjpcItCh0LXRgNC/0YPRhdC+0LJcIn0se1widGl0bGVcIjpcItCh0L7Qu9C90LXRh9C90L7Qs9C+0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQodGC0YPQv9C40L3QvlwifSx7XCJ0aXRsZVwiOlwi0KHRhdC+0LTQvdGPXCJ9LHtcInRpdGxlXCI6XCLQotGD0YfQutC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0KTRgNGP0LfQuNC90L5cIn0se1widGl0bGVcIjpcItCl0LjQvNC60LhcIn0se1widGl0bGVcIjpcItCn0LXRgNC60LjQt9C+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0KfQtdGF0L7QslwifSx7XCJ0aXRsZVwiOlwi0KjQsNGC0YPRgNCwXCJ9LHtcInRpdGxlXCI6XCLQrdC70LXQutGC0YDQvtGB0YLQsNC70YxcIn0se1widGl0bGVcIjpcItCu0LHQuNC70LXQudC90YvQuVwifSx7XCJ0aXRsZVwiOlwi0JDQv9Cw0YLQuNGC0YtcIn0se1widGl0bGVcIjpcItCa0LjRgNC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkNGA0LfQsNC80LDRgVwifSx7XCJ0aXRsZVwiOlwi0JLRi9C60YHQsFwifSx7XCJ0aXRsZVwiOlwi0JTQt9C10YDQttC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQl9Cw0LLQvtC70LbRjNC1XCJ9LHtcInRpdGxlXCI6XCLQmtC90Y/Qs9C40L3QuNC90L5cIn0se1widGl0bGVcIjpcItCa0YHRgtC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JrRg9C70LXQsdCw0LrQuFwifSx7XCJ0aXRsZVwiOlwi0J/QsNCy0LvQvtCy0L5cIn0se1widGl0bGVcIjpcItCf0LXRgNC10LLQvtC3XCJ9LHtcInRpdGxlXCI6XCLQodCw0YDQvtCyXCJ9LHtcInRpdGxlXCI6XCLQodC10YDQs9Cw0YdcIn0se1widGl0bGVcIjpcItCo0LDRiNGD0L3RjNGPXCJ9LHtcInRpdGxlXCI6XCLQkdC+0YDQvtCy0L7Rh9C4XCJ9LHtcInRpdGxlXCI6XCLQodGC0LDRgNCw0Y8g0KDRg9GB0YHQsFwifSx7XCJ0aXRsZVwiOlwi0JHQtdGA0LTRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmNGB0LrQuNGC0LjQvFwifSx7XCJ0aXRsZVwiOlwi0JrRg9C50LHRi9GI0LXQslwifSx7XCJ0aXRsZVwiOlwi0JvQuNC90ZHQstC+XCJ9LHtcInRpdGxlXCI6XCLQotCw0YDQsFwifSx7XCJ0aXRsZVwiOlwi0JDQutCx0YPQu9Cw0LpcIn0se1widGl0bGVcIjpcItCR0YPQs9GD0YDRg9GB0LvQsNC9XCJ9LHtcInRpdGxlXCI6XCLQkdGD0LfRg9C70YPQulwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7RgtGA0L7QuNGG0LpcIn0se1widGl0bGVcIjpcItCe0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQm9C40LLQvdGLXCJ9LHtcInRpdGxlXCI6XCLQnNGG0LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCa0YPQt9C90LXRhtC6XCJ9LHtcInRpdGxlXCI6XCLQndC40LbQvdC40Lkg0JvQvtC80L7QslwifSx7XCJ0aXRsZVwiOlwi0KHQtdGA0LTQvtCx0YHQulwifSx7XCJ0aXRsZVwiOlwi0JHQtdGA0LXQt9C90LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQmtGD0LTRi9C80LrQsNGAXCJ9LHtcInRpdGxlXCI6XCLQm9GL0YHRjNCy0LBcIn0se1widGl0bGVcIjpcItCh0L7Qu9C40LrQsNC80YHQulwifSx7XCJ0aXRsZVwiOlwi0KfQsNC50LrQvtCy0YHQutC40LlcIn0se1widGl0bGVcIjpcItCn0YPRgdC+0LLQvtC5XCJ9LHtcInRpdGxlXCI6XCLQkNGA0YHQtdC90YzQtdCyXCJ9LHtcInRpdGxlXCI6XCLQkNGA0YLQtdC8XCJ9LHtcInRpdGxlXCI6XCLQkdC+0LvRjNGI0L7QuSDQmtCw0LzQtdC90YxcIn0se1widGl0bGVcIjpcItCU0LDQu9GM0L3QtdCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCU0LDQu9GM0L3QtdGA0LXRh9C10L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtC40YDQvtCy0YHQutC40LlcIn0se1widGl0bGVcIjpcItCb0LXRgdC+0LfQsNCy0L7QtNGB0LpcIn0se1widGl0bGVcIjpcItCc0LjRhdCw0LnQu9C+0LLQutCwXCJ9LHtcInRpdGxlXCI6XCLQndCw0YXQvtC00LrQsFwifSx7XCJ0aXRsZVwiOlwi0J/QsNGA0YLQuNC30LDQvdGB0LpcIn0se1widGl0bGVcIjpcItCh0LvQsNCy0Y/QvdC60LBcIn0se1widGl0bGVcIjpcItCh0L/QsNGB0YHQui3QlNCw0LvRjNC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0KPRgdGB0YPRgNC40LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQktC10LvQuNC60LjQtSDQm9GD0LrQuFwifSx7XCJ0aXRsZVwiOlwi0JrQvtGI0LXRhdCw0LHQu9GMXCJ9LHtcInRpdGxlXCI6XCLQr9Cx0LvQvtC90L7QstGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQkdC10LvQtdCx0LXQuVwifSx7XCJ0aXRsZVwiOlwi0JHQtdC70L7RgNC10YbQulwifSx7XCJ0aXRsZVwiOlwi0JHQuNGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JjRiNC40LzQsdCw0LlcIn0se1widGl0bGVcIjpcItCa0YPQvNC10YDRgtCw0YNcIn0se1widGl0bGVcIjpcItCc0LXQu9C10YPQt1wifSx7XCJ0aXRsZVwiOlwi0J3QtdGE0YLQtdC60LDQvNGB0LpcIn0se1widGl0bGVcIjpcItCe0LrRgtGP0LHRgNGM0YHQutC40LlcIn0se1widGl0bGVcIjpcItCh0LDQu9Cw0LLQsNGCXCJ9LHtcInRpdGxlXCI6XCLQodC40LHQsNC5XCJ9LHtcInRpdGxlXCI6XCLQodGC0LXRgNC70LjRgtCw0LzQsNC6XCJ9LHtcInRpdGxlXCI6XCLQodC10LLQtdGA0L7QsdCw0LnQutCw0LvRjNGB0LpcIn0se1widGl0bGVcIjpcItCU0LXRgNCx0LXQvdGCXCJ9LHtcInRpdGxlXCI6XCLQkdGD0LnQvdCw0LrRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmNC30LHQtdGA0LHQsNGIXCJ9LHtcInRpdGxlXCI6XCLQmtCw0YHQv9C40LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtC40LfQuNC70Y7RgNGCXCJ9LHtcInRpdGxlXCI6XCLQmtC40LfQu9GP0YBcIn0se1widGl0bGVcIjpcItCl0LDRgdCw0LLRjtGA0YJcIn0se1widGl0bGVcIjpcItCc0LDQs9Cw0YFcIn0se1widGl0bGVcIjpcItCa0L7RgdGC0L7QvNGD0LrRiNCwXCJ9LHtcInRpdGxlXCI6XCLQodC+0YDRgtCw0LLQsNC70LBcIn0se1widGl0bGVcIjpcItCS0L7RgNC60YPRgtCwXCJ9LHtcInRpdGxlXCI6XCLQo9GB0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCj0YXRgtCwXCJ9LHtcInRpdGxlXCI6XCLQktC+0LvQttGB0LpcIn0se1widGl0bGVcIjpcItCa0L7QstGL0LvQutC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0KDRg9C30LDQtdCy0LrQsFwifSx7XCJ0aXRsZVwiOlwi0JzQuNGA0L3Ri9C5XCJ9LHtcInRpdGxlXCI6XCLQndC10YDRjtC90LPRgNC4XCJ9LHtcInRpdGxlXCI6XCLQntC60YLQtdC90YbRi1wifSx7XCJ0aXRsZVwiOlwi0J7Qu9GR0LrQvNC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQp9GD0YDQsNC/0YfQsFwifSx7XCJ0aXRsZVwiOlwi0JDQudGF0LDQu1wifSx7XCJ0aXRsZVwiOlwi0JvQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JDQu9GM0LzQtdGC0YzQtdCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JHRg9Cz0YPQu9GM0LzQsFwifSx7XCJ0aXRsZVwiOlwi0JXQu9Cw0LHRg9Cz0LBcIn0se1widGl0bGVcIjpcItCX0LXQu9C10L3QvtC00L7Qu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0JvQtdC90LjQvdC+0LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QsNCx0LXRgNC10LbQvdGL0LUg0KfQtdC70L3Ri1wifSx7XCJ0aXRsZVwiOlwi0J3QuNC20L3QtdC60LDQvNGB0LpcIn0se1widGl0bGVcIjpcItCn0LjRgdGC0L7Qv9C+0LvRjFwifSx7XCJ0aXRsZVwiOlwi0KHQsNGP0L3QvtCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCQ0LfQvtCyXCJ9LHtcInRpdGxlXCI6XCLQkdCw0YLQsNC50YHQulwifSx7XCJ0aXRsZVwiOlwi0JHQtdC70LDRjyDQmtCw0LvQuNGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLQtdGI0LXQvdGB0LrQsNGPXCJ9LHtcInRpdGxlXCI6XCLQktC+0LvQs9C+0LTQvtC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JPRg9C60L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQlNC+0L3QtdGG0LpcIn0se1widGl0bGVcIjpcItCX0LXRgNC90L7Qs9GA0LDQtFwifSx7XCJ0aXRsZVwiOlwi0JfQuNC80L7QstC90LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQmtCw0LzQtdC90YHQui3QqNCw0YXRgtC40L3RgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JrRgNCw0YHQvdGL0Lkg0KHRg9C70LjQvFwifSx7XCJ0aXRsZVwiOlwi0JzQsNGC0LLQtdC10LIg0JrRg9GA0LPQsNC9XCJ9LHtcInRpdGxlXCI6XCLQnNC40LvQu9C10YDQvtCy0L5cIn0se1widGl0bGVcIjpcItCd0L7QstC+0YfQtdGA0LrQsNGB0YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7RiNCw0YXRgtC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQn9C10YDRgdC40LDQvdC+0LLRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0KHQsNC70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQotCw0LPQsNC90YDQvtCzXCJ9LHtcInRpdGxlXCI6XCLQqNCw0YXRgtGLXCJ9LHtcInRpdGxlXCI6XCLQodCw0YHQvtCy0L5cIn0se1widGl0bGVcIjpcItCa0LjQvdC10LvRjFwifSx7XCJ0aXRsZVwiOlwi0J/QvtGF0LLQuNGB0L3QtdCy0L5cIn0se1widGl0bGVcIjpcItCh0YvQt9GA0LDQvdGMXCJ9LHtcInRpdGxlXCI6XCLQotC+0LvRjNGP0YLRgtC4XCJ9LHtcInRpdGxlXCI6XCLQn9GD0YjQutC40L1cIn0se1widGl0bGVcIjpcItCR0LDQu9Cw0LrQvtCy0L5cIn0se1widGl0bGVcIjpcItCR0LDQu9Cw0YjQvtCyXCJ9LHtcInRpdGxlXCI6XCLQktC+0LvRjNGB0LpcIn0se1widGl0bGVcIjpcItCc0LDRgNC60YFcIn0se1widGl0bGVcIjpcItCt0L3Qs9C10LvRjNGBXCJ9LHtcInRpdGxlXCI6XCLQpdC+0LvQvNGB0LpcIn0se1widGl0bGVcIjpcItCQ0LvQsNC/0LDQtdCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JHQtdGA0LXQt9C+0LLRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0JLQtdGA0YXQvdGP0Y8g0KHQsNC70LTQsFwifSx7XCJ0aXRsZVwiOlwi0JfQsNGA0LXRh9C90YvQuVwifSx7XCJ0aXRsZVwiOlwi0JjRgNCx0LjRglwifSx7XCJ0aXRsZVwiOlwi0JrQsNC80LXQvdGB0Lot0KPRgNCw0LvRjNGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmtGA0LDRgdC90L7RgtGD0YDRjNC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQm9C10YHQvdC+0LlcIn0se1widGl0bGVcIjpcItCd0LXQstGM0Y/QvdGB0LpcIn0se1widGl0bGVcIjpcItCd0LjQttC90LjQuSDQotCw0LPQuNC7XCJ9LHtcInRpdGxlXCI6XCLQndC40LbQvdGP0Y8g0KLRg9GA0LBcIn0se1widGl0bGVcIjpcItCd0L7QstC+0YPRgNCw0LvRjNGB0LpcIn0se1widGl0bGVcIjpcItCf0LXRgNCy0L7Rg9GA0LDQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0KHQtdGA0L7QslwifSx7XCJ0aXRsZVwiOlwi0KHRgNC10LTQvdC10YPRgNCw0LvRjNGB0LpcIn0se1widGl0bGVcIjpcItCS0Y/Qt9GM0LzQsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0LvQsNCy0LvRjFwifSx7XCJ0aXRsZVwiOlwi0KHQsNGE0L7QvdC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JHRg9C00LXQvdC90L7QstGB0LpcIn0se1widGl0bGVcIjpcItCT0LXQvtGA0LPQuNC10LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQldGB0YHQtdC90YLRg9C60LhcIn0se1widGl0bGVcIjpcItCW0LXQu9C10LfQvdC+0LLQvtC00YHQulwifSx7XCJ0aXRsZVwiOlwi0JrQuNGB0LvQvtCy0L7QtNGB0LpcIn0se1widGl0bGVcIjpcItCb0LXRgNC80L7QvdGC0L7QslwifSx7XCJ0aXRsZVwiOlwi0JzQuNC90LXRgNCw0LvRjNC90YvQtSDQktC+0LTRi1wifSx7XCJ0aXRsZVwiOlwi0J3QtdCy0LjQvdC90L7QvNGL0YHRgdC6XCJ9LHtcInRpdGxlXCI6XCLQn9GP0YLQuNCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCc0LjRh9GD0YDQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0KPQstCw0YDQvtCy0L5cIn0se1widGl0bGVcIjpcItCR0LXQttC10YbQulwifSx7XCJ0aXRsZVwiOlwi0JLRi9GI0L3QuNC5INCS0L7Qu9C+0YfQtdC6XCJ9LHtcInRpdGxlXCI6XCLQmtC40LzRgNGLXCJ9LHtcInRpdGxlXCI6XCLQmtCw0L3QsNC60L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQmtGD0LLRiNC40L3QvtCy0L5cIn0se1widGl0bGVcIjpcItCg0LbQtdCyXCJ9LHtcInRpdGxlXCI6XCLQotC+0YDQttC+0LpcIn0se1widGl0bGVcIjpcItCj0LTQvtC80LvRj1wifSx7XCJ0aXRsZVwiOlwi0JDRgdC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0KHQtdCy0LXRgNGB0LpcIn0se1widGl0bGVcIjpcItCh0YLRgNC10LbQtdCy0L7QuVwifSx7XCJ0aXRsZVwiOlwi0JDQu9C10LrRgdC40L1cIn0se1widGl0bGVcIjpcItCd0L7QstC+0LzQvtGB0LrQvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JHQtdC70YvQuSDQr9GAXCJ9LHtcInRpdGxlXCI6XCLQk9GD0LHQutC40L3RgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0JfQsNCy0L7QtNC+0YPQutC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmNGI0LjQvFwifSx7XCJ0aXRsZVwiOlwi0JrQvtCz0LDQu9GL0LxcIn0se1widGl0bGVcIjpcItCb0LDQvdCz0LXQv9Cw0YFcIn0se1widGl0bGVcIjpcItCc0YPRgNCw0LLQu9C10L3QutC+XCJ9LHtcInRpdGxlXCI6XCLQndCw0LTRi9C8XCJ9LHtcInRpdGxlXCI6XCLQndC10YTRgtC10Y7Qs9Cw0L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQndC40LbQvdC10LLQsNGA0YLQvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0YvQuSDQo9GA0LXQvdCz0L7QuVwifSx7XCJ0aXRsZVwiOlwi0J3QvtGP0LHRgNGM0YHQulwifSx7XCJ0aXRsZVwiOlwi0J3Rj9Cz0LDQvdGMXCJ9LHtcInRpdGxlXCI6XCLQn9C+0LnQutC+0LLRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0J/Ri9GC0Ywt0K/RhVwifSx7XCJ0aXRsZVwiOlwi0KHQvtCy0LXRgtGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQodGD0YDQs9GD0YJcIn0se1widGl0bGVcIjpcItCi0L7QsdC+0LvRjNGB0LpcIn0se1widGl0bGVcIjpcItCj0YDQsNC5XCJ9LHtcInRpdGxlXCI6XCLQr9C70YPRgtC+0YDQvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JLQvtGC0LrQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JPQu9Cw0LfQvtCyXCJ9LHtcInRpdGxlXCI6XCLQodCw0YDQsNC/0YPQu1wifSx7XCJ0aXRsZVwiOlwi0JTQvNC40YLRgNC+0LLQs9GA0LDQtFwifSx7XCJ0aXRsZVwiOlwi0JjQvdC30LBcIn0se1widGl0bGVcIjpcItCS0LDQvdC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0JrQvtC80YHQvtC80L7Qu9GM0YHQui3QvdCwLdCQ0LzRg9GA0LVcIn0se1widGl0bGVcIjpcItCh0L7QstC10YLRgdC60LDRjyDQk9Cw0LLQsNC90YxcIn0se1widGl0bGVcIjpcItCQ0YjQsFwifSx7XCJ0aXRsZVwiOlwi0JfQu9Cw0YLQvtGD0YHRglwifSx7XCJ0aXRsZVwiOlwi0JrQsNGA0YLQsNC70YtcIn0se1widGl0bGVcIjpcItCa0YPRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmtGL0YjRgtGL0LxcIn0se1widGl0bGVcIjpcItCc0LDQs9C90LjRgtC+0LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JzQuNCw0YHRgVwifSx7XCJ0aXRsZVwiOlwi0J3Rj9C30LXQv9C10YLRgNC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQntC30LXRgNGB0LpcIn0se1widGl0bGVcIjpcItCh0LDRgtC60LBcIn0se1widGl0bGVcIjpcItCh0L3QtdC20LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCi0YDRkdGF0LPQvtGA0L3Ri9C5XCJ9LHtcInRpdGxlXCI6XCLQotGA0L7QuNGG0LpcIn0se1widGl0bGVcIjpcItCj0YHRgtGMLdCa0LDRgtCw0LJcIn0se1widGl0bGVcIjpcItCQ0LvQsNGC0YvRgNGMXCJ9LHtcInRpdGxlXCI6XCLQkdCw0YLRi9GA0LXQstC+XCJ9LHtcInRpdGxlXCI6XCLQnNCw0YDQuNC40L3RgdC60LjQuSDQn9C+0YHQsNC0XCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtGH0LXQsdC+0LrRgdCw0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQn9C10YDQtdGB0LvQsNCy0LvRjC3Ql9Cw0LvQtdGB0YHQutC40LlcIn0se1widGl0bGVcIjpcItCg0YvQsdC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQotGD0YLQsNC10LJcIn0se1widGl0bGVcIjpcItCj0LPQu9C40YdcIn0se1widGl0bGVcIjpcItCR0LDQudC60L7QvdGD0YBcIn0se1widGl0bGVcIjpcItCR0LjRiNC60LXQulwifSx7XCJ0aXRsZVwiOlwi0JTRg9GI0LDQvdCx0LVcIn0se1widGl0bGVcIjpcItCV0YDQtdCy0LDQvVwifSx7XCJ0aXRsZVwiOlwi0JrRg9GA0LPQsNC9LdGC0Y7QsdC1XCJ9LHtcInRpdGxlXCI6XCLQnNC+0LPQuNC70LXQslwifSx7XCJ0aXRsZVwiOlwi0KXRg9C00LbQsNC90LRcIn0se1widGl0bGVcIjpcItCX0LDRgNGD0LHQtdC20L3Ri9C1INCz0L7RgNC+0LTQsFwifSx7XCJ0aXRsZVwiOlwi0JfQstC10L3QuNCz0L7RgNC+0LRcIn0se1widGl0bGVcIjpcItCa0LvQuNC80L7QstGB0LpcIn0se1widGl0bGVcIjpcItCb0L7QsdC90Y9cIn0se1widGl0bGVcIjpcItCb0YvRgtC60LDRgNC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0JrRgNGD0YLQvtC1XCJ9LHtcInRpdGxlXCI6XCLQkNC/0YDQtdC70LXQstC60LBcIn0se1widGl0bGVcIjpcItCh0LXQstCw0YHRgtC+0L/QvtC70YxcIn0se1widGl0bGVcIjpcItCV0LLQv9Cw0YLQvtGA0LjRj1wifSx7XCJ0aXRsZVwiOlwi0JrQtdGA0YfRjFwifSx7XCJ0aXRsZVwiOlwi0KHQuNC80YTQtdGA0L7Qv9C+0LvRjFwifSx7XCJ0aXRsZVwiOlwi0KHRg9C00LDQulwifSx7XCJ0aXRsZVwiOlwi0KTQtdC+0LTQvtGB0LjRj1wifSx7XCJ0aXRsZVwiOlwi0K/Qu9GC0LBcIn0se1widGl0bGVcIjpcItCa0L7Qu9CwXCJ9XVxuXG4gICAgbG9jYXRpb25zLmluaXRpYWxpemUoKVxuXG4gICAgY2l0eSA9ICQoJy5lZHVjYXRpb24td3JhcHBlcjpsYXN0IGlucHV0LmNpdHknKVxuICAgIGlmIGNpdHkuaGFzQ2xhc3MgJ3R0LWlucHV0J1xuICAgICAgICBjaXR5LnR5cGVhaGVhZCgnZGVzdHJveScpXG4gICAgY2l0eS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IHRydWVcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ2xvY2F0aW9ucydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IGxvY2F0aW9ucy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgY2l0eS5vbiAnY2hhbmdlJywgQGFkZFVuaXZlcmNpdHlcbiAgICBjaXR5Lm9uICdibHVyJywgQGFkZFVuaXZlcmNpdHlcbiAgICBjaXR5Lm9uICd0eXBlYWhlYWQ6YXV0b2NvbXBsZXRlZCcsIEBhZGRVbml2ZXJjaXR5XG4gICAgY2l0eS5vbiAndHlwZWFoZWFkOnNlbGVjdGVkJywgQGFkZFVuaXZlcmNpdHlcblxuICBhZGRVbml2ZXJjaXR5OiAoZXZlbnQpPT5cbiAgICBcbiAgICBjaXR5ID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgdmFsdWUgPSBjaXR5LnZhbCgpLnRyaW0oKVxuXG4gICAgd3JhcHBlciA9IGNpdHkuY2xvc2VzdCgnLmVkdWNhdGlvbi13cmFwcGVyJylcbiAgICB1bml2ZXJjaXR5ID0gd3JhcHBlci5maW5kKCcudW5pdmVyY2l0eScpXG4gICAgZmFjdWx0eSA9IHdyYXBwZXIuZmluZCgnLmZhY3VsdHknKVxuXG5cbiAgICBpZiB2YWx1ZSA9PSAn0JzQvtGB0LrQstCwJ1xuXG4gICAgICB1bml2ZXJjaXR5cyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgICAgIGRhdHVtVG9rZW5pemVyOiAoZGF0YSktPlxuICAgICAgICAgIHJldHVybiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZShkYXRhLnRpdGxlKVxuICAgICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICAgIGxpbWl0OiA2MDBcbiAgICAgICAgbG9jYWw6IFt7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC90LDRgNC+0LTQvdC+0LPQviDRhdC+0LfRj9C50YHRgtCy0LAg0Lgg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC5INGB0LvRg9C20LHRiyDQv9GA0Lgg0J/RgNC10LfQuNC00LXQvdGC0LUg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGC0YDRg9C00LAg0Lgg0YHQvtGG0LjQsNC70YzQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGF0L7RgNC+0LLQvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwINC40LzQtdC90Lgg0JIu0KEuINCf0L7Qv9C+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLRgdC10YDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQstC90LXRiNC90LXQuSDRgtC+0YDQs9C+0LLQu9C4INCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDRjdC60L7QvdC+0LzQuNGH0LXRgdC60L7Qs9C+INGA0LDQt9Cy0LjRgtC40Y8g0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQktGB0LXRgNC+0YHRgdC40LnRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0L3QsNC70L7Qs9C+0LLQsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCS0YHQtdGA0L7RgdGB0LjQudGB0LrQuNC5ICDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQutC40L3QtdC80LDRgtC+0LPRgNCw0YTQuNC4INC40Lwu0KEu0JAu0JPQtdGA0LDRgdC40LzQvtCy0LBcIn0se1widGl0bGVcIjpcItCX0LDQvtGH0L3Ri9C5INGE0LjQvdCw0L3RgdC+0LLQvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCk0LjQvdCw0L3RgdC+0LLQvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINC/0YDQuCDQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQtSDQoNC+0YHRgdC40LnRgdC60L7QuSDRhNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0JLRi9GB0YjQsNGPINGI0LrQvtC70LAg0KHQvtCy0YDQtdC80LXQvdC90L7QtSDQvtCx0YDQsNC30L7QstCw0L3QuNC1XCJ9LHtcInRpdGxlXCI6XCLQotC10LDRgtGA0LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LjQvNC10L3QuCDQkdC+0YDQuNGB0LAg0KnRg9C60LjQvdCwINC/0YDQuCDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lwg0LDQutCw0LTQtdC80LjRh9C10YHQutC+0Lwg0YLQtdCw0YLRgNC1INC40LzQtdC90Lgg0JXQstCzLiDQktCw0YXRgtCw0L3Qs9C+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLRi9GB0YjQtdC1INGC0LXQsNGC0YDQsNC70YzQvdC+0LUg0YPRh9C40LvQuNGJ0LUgKNC40L3RgdGC0LjRgtGD0YIpINC40LwuINCcLtChLiDQqdC10L/QutC40L3QsCDQv9GA0Lgg0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC8INCw0LrQsNC00LXQvNC40YfQtdGB0LrQvtC8INCc0LDQu9C+0Lwg0YLQtdCw0YLRgNC1INCg0L7RgdC40LhcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINGB0LvQsNCy0Y/QvdGB0LrQvtC5INC60YPQu9GM0YLRg9GA0YtcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LrQu9Cw0YHRgdC40YfQtdGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LjQvNC10L3QuCDQnNCw0LnQvNC+0L3QuNC00LBcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINGA0YPRgdGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCDQuNC8INCQLtChLiDQn9GD0YjQutC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80YPQt9GL0LrQsNC70YzQvdC+LdC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCcLtCcLiDQmNC/0L/QvtC70LjRgtC+0LLQsC3QmNCy0LDQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGB0L/QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40YHQutGD0YHRgdGC0LJcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDRjdC60L7QvdC+0LzQuNC60LjCu1wifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/QviDQt9C10LzQu9C10YPRgdGC0YDQvtC50YHRgtCy0YNcIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCICjQsy4g0JzQvtGB0LrQstCwKVwifSx7XCJ0aXRsZVwiOlwi0JTQuNC/0LvQvtC80LDRgtC40YfQtdGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdC+0LPQviDQv9GA0LDQstCwINC4INGN0LrQvtC90L7QvNC40LrQuCDQuNC80LXQvdC4INCQLtChLtCT0YDQuNCx0L7QtdC00L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQm9C40YLQtdGA0LDRgtGD0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCQLtCcLtCT0L7RgNGM0LrQvtCz0L5cIn0se1widGl0bGVcIjpcItCc0JDQotCYIC0g0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0Jou0K0uINCm0LjQvtC70LrQvtCy0YHQutC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRh9C10YHQutC40Lkg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDQnNCd0K3Qn9CjXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCyINCc0L7RgdC60LLQtVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsCDQv9GA0Lgg0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0LUg0LMuINCc0L7RgdC60LLRi1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LLQtdGC0LXRgNC40L3QsNGA0L3QvtC5INC80LXQtNC40YbQuNC90Ysg0Lgg0LHQuNC+0YLQtdGF0L3QvtC70L7Qs9C40Lgg0LjQvNC10L3QuCDQmi7QmC4g0KHQutGA0Y/QsdC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LLQvtC00L3QvtCz0L4g0YLRgNCw0L3RgdC/0L7RgNGC0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC00LjQt9Cw0LnQvdCwINC4INGC0LXRhdC90L7Qu9C+0LPQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9GA0LjQsdC+0YDQvtGB0YLRgNC+0LXQvdC40Y8g0Lgg0LjQvdGE0L7RgNC80LDRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YLQvtC90LrQuNGFINGF0LjQvNC40YfQtdGB0LrQuNGFINGC0LXRhdC90L7Qu9C+0LPQuNC5INC40LzQtdC90Lgg0Jwu0JIuINCb0L7QvNC+0L3QvtGB0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDRhdC+0YDQtdC+0LPRgNCw0YTQuNC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LPQtdC+0LvQvtCz0L7RgNCw0LfQstC10LTQvtGH0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQodC10YDQs9C+INCe0YDQtNC20L7QvdC40LrQuNC00LfQtVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7QvdGB0LXRgNCy0LDRgtC+0YDQuNGPICjRg9C90LjQstC10YDRgdC40YLQtdGCKSDQuNC80LXQvdC4INCfLiDQmC4g0KfQsNC50LrQvtCy0YHQutC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXQutGB0YLQuNC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAg0LjQvNC10L3QuCDQkC7QnS4g0JrQvtGB0YvQs9C40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGO0YDQuNC00LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCeLiDQlS4g0JrRg9GC0LDRhNC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0J/QtdGA0LLRi9C5INCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQmC7QnC4g0KHQtdGH0LXQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LzQtdC20LTRg9C90LDRgNC+0LTQvdCw0Y8g0LLRi9GB0YjQsNGPINGI0LrQvtC70LAg0LHQuNC30L3QtdGB0LAg0JzQmNCg0JHQmNChICjQmNC90YHRgtC40YLRg9GCKVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCw0LPRgNCw0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgi0g0JzQodCl0JAg0LjQvNC10L3QuCDQmi7QkC4g0KLQuNC80LjRgNGP0LfQtdCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCw0YDRhdC40YLQtdC60YLRg9GA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIgKNCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPKSAo0JzQkNCg0KXQmClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCx0LDQvdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgNC+0LTRgdC60L7QuSDQv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgNC+0LTRgdC60L7QuSDQv9GB0LjRhdC+0LvQvtCz0L4t0L/QtdC00LDQs9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgNCw0LTQuNC+0YLQtdGF0L3QuNC60LgsINGN0LvQtdC60YLRgNC+0L3QuNC60Lgg0Lgg0LDQstGC0L7QvNCw0YLQuNC60LggKNGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgikgKNCc0JjQoNCt0JApXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsNCy0LjQsNGG0LjQvtC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIgKNC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIpXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsNCy0YLQvtC80L7QsdC40LvRjNC90L4t0LTQvtGA0L7QttC90YvQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCICjQnNCQ0JTQmClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQsNCz0YDQvtC40L3QttC10L3QtdGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQki7Qny4g0JPQvtGA0Y/Rh9C60LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LDQutCw0LTQtdC80LjRh9C10YHQutC40Lkg0YXRg9C00L7QttC10YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40LzQtdC90Lgg0JIu0JguINCh0YPRgNC40LrQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQstC10YfQtdGA0L3QuNC5INC80LXRgtCw0LvQu9GD0YDQs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQs9C+0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y8g0LjQvNC10L3QuCDQmi7Qky4g0KDQsNC30YPQvNC+0LLRgdC60L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdC00YPRgdGC0YDQuNCw0LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRj9C00LXRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0JzQmNCk0JjCu1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5ICjRg9C90LjQstC10YDRgdC40YLQtdGCKVwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQnNCY0KHQuNChwrtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y3Qu9C10LrRgtGA0L7QvdC40LrQuCDQuCDQvNCw0YLQtdC80LDRgtC40LrQuCDQndCw0YbQuNC+0L3QsNC70YzQvdC+0LPQviDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwIMKr0JLRi9GB0YjQsNGPINGI0LrQvtC70LAg0Y3QutC+0L3QvtC80LjQutC4wrtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQu9C40L3Qs9Cy0LjRgdGC0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0Jwu0JAuINCo0L7Qu9C+0YXQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvtGC0LrRgNGL0YLRi9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQki7QoS4g0KfQtdGA0L3QvtC80YvRgNC00LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YHQvtGG0LjQsNC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGB0YLRgNC+0LjRgtC10LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIC0g0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80LDRiNC40L3QvtGB0YLRgNC+0LjRgtC10LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCICjQnNCQ0JzQmClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LPRgNCw0LbQtNCw0L3RgdC60L7QuSDQsNCy0LjQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCdLtCtLiDQkdCw0YPQvNCw0L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0KHRgtCw0L3QutC40L3Cu1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQnC7Qki4g0JvQvtC80L7QvdC+0YHQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCz0LXQvtC00LXQt9C40Lgg0Lgg0LrQsNGA0YLQvtCz0YDQsNGE0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvdC20LXQvdC10YDQvdC+0Lkg0Y3QutC+0LvQvtCz0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0L7RgNCz0L7QstC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0LXRh9Cw0YLQuCDQuNC80LXQvdC4INCY0LLQsNC90LAg0KTQtdC00L7RgNC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/QuNGJ0LXQstGL0YUg0L/RgNC+0LjQt9Cy0L7QtNGB0YLQslwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/RgNC40YDQvtC00L7QvtCx0YPRgdGC0YDQvtC50YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0YPRgtC10Lkg0YHQvtC+0LHRidC10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRjdC60L7QvdC+0LzQuNC60LgsINGB0YLQsNGC0LjRgdGC0LjQutC4INC4INC40L3RhNC+0YDQvNCw0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDRhdGD0LTQvtC20LXRgdGC0LLQtdC90L3Qvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQuNC8LiDQoS7Qky4g0KHRgtGA0L7Qs9Cw0L3QvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GC0LjQvNC10L3QuCDQlS7QoC4g0JTQsNGI0LrQvtCy0L7QuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LrQvtC80LzRg9C90LDQu9GM0L3QvtCz0L4g0YXQvtC30Y/QudGB0YLQstCwINC4INGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LzQtdC00LjQutC+LdGB0YLQvtC80LDRgtC+0LvQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQntCh0JrQntCS0KHQmtCY0Jkg0J3QntCS0KvQmSDQrtCg0JjQlNCY0KfQldCh0JrQmNCZINCY0J3QodCi0JjQotCj0KJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvtCx0LvQsNGB0YLQvdC+0LkgINGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC/0YHQuNGF0L7Qu9C+0LPQvi3RgdC+0YbQuNCw0LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YHQstGP0LfQuCDQuCDQuNC90YTQvtGA0LzQsNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0JzQrdCYwrtcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LzRg9C30YvQutC4INC40LzQtdC90Lgg0JPQvdC10YHQuNC90YvRhVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRgtC10LDRgtGA0LDQu9GM0L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIC0g0JPQmNCi0JjQoVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YTQuNC30LjRh9C10YHQutC+0Lkg0LrRg9C70YzRgtGD0YDRiywg0YHQv9C+0YDRgtCwLCDQvNC+0LvQvtC00LXQttC4INC4INGC0YPRgNC40LfQvNCwICjQk9Cm0J7Qm9CY0KTQmilcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINC/0YDQsNCy0L7QstCw0Y8g0LDQutCw0LTQtdC80LjRjyDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0Y7RgdGC0LjRhtC40Lgg0KDQpFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0YjQutC+0LvQsCDRh9Cw0YHRgtC90L7Qs9C+INC/0YDQsNCy0LAgKNC40L3RgdGC0LjRgtGD0YIpXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0JMu0JIuINCf0LvQtdGF0LDQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQnS7QmC4g0J/QuNGA0L7Qs9C+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgtC10LrRgdGC0LjQu9GM0L3QvtC5INC4INC70LXQs9C60L7QuSDQv9GA0L7QvNGL0YjQu9C10L3QvdC+0YHRgtC4INC80L7RgdC60L7QstGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINGC0LXRhdC90L7Qu9C+0LPQuNC5INC4INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQuNC90YLQtdC70LvQtdC60YLRg9Cw0LvRjNC90L7QuSDRgdC+0LHRgdGC0LLQtdC90L3QvtGB0YLQuFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0L3QvtCy0YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC00YDRg9C20LHRiyDQvdCw0YDQvtC00L7QslwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0YXQuNC80LjQutC+LdGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0JQu0JguINCc0LXQvdC00LXQu9C10LXQstCwXCJ9LHtcInRpdGxlXCI6XCLQpNC40L3QsNC90YHQvtCy0YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0YDQuCDQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQtSDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCo0LrQvtC70LAt0YHRgtGD0LTQuNGPICjQuNC90YHRgtC40YLRg9GCKSDQuNC80LXQvdC4INCS0Lsu0JguINCd0LXQvNC40YDQvtCy0LjRh9CwLdCU0LDQvdGH0LXQvdC60L4g0L/RgNC4INCc0L7RgdC60L7QstGB0LrQvtC8INCl0YPQtNC+0LbQtdGB0YLQstC10L3QvdC+0Lwg0LDQutCw0LTQtdC80LjRh9C10YHQutC+0Lwg0YLQtdCw0YLRgNC1INC40LzQtdC90Lgg0JAu0J8uINCn0LXRhdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LrQuNC90L7QstC40LTQtdC+0LjQvdGB0YLQuNGC0YPRgiAo0YTQuNC70LjQsNC7KSDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs9GB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINC60LjQvdC+INC4INGC0LXQu9C10LLQuNC00LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC+0LHQu9Cw0YHRgtC90L7QuSDRhNC40LvQuNCw0Lsg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LPRgdC60L7Qs9C+INCT0YPQvNCw0L3QuNGC0LDRgNC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDQv9GA0L7RhNGB0L7RjtC30L7QsiDQmNC90YHRgtC40YLRg9GCINC40YHQutGD0YHRgdGC0LIg0Lgg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0LLQvdGD0YLRgNC10L3QvdC40YUg0LTQtdC7INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDQpNC10LTQtdGA0LDQu9GM0L3QvtC5INGB0LvRg9C20LHRiyDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQodC70LDQstGP0L3RgdC60LjQuSDQtNC10LvQvtCy0L7QuSDQuNC90YHRgtC40YLRg9GCINC40LwuINCaLtCSLiDQndC10YfQsNC10LLQsCAo0JzQuNGC0YDQvtC/0L7Qu9C40YLQsCDQn9C40YLQuNGA0LjQvNCwKVwifSx7XCJ0aXRsZVwiOlwi0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQoNC+0YHRgdC40LnRgdC60L7QuSDQsNC60LDQtNC10LzQuNC4INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0LDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7QuSDRgtC+0YDQs9C+0LLQu9C4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgdC40YXQvtC70L7Qs9C40Lgg0Lgg0L/QtdC00LDQs9C+0LPQuNC60LhcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LPQvtGB0YLQuNC90LjRh9C90L7Qs9C+INC80LXQvdC10LTQttC80LXQvdGC0LAg0Lgg0YLRg9GA0LjQt9C80LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCwg0L/QvtC70LjRgtC40LrQuCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40L3QsNC90YHQvtCy0L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3RgtC10YXQvdC40YfQtdGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCf0YDQsNCy0L7RgdC70LDQstC90YvQuSDQodCy0Y/RgtC+LdCi0LjRhdC+0L3QvtCy0YHQutC40Lkg0JPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INCj0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40YfQtdGB0LrQuNC5INC/0YDQsNCy0L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQvtCx0YDQsNC30L7QstCw0L3QuNGPINCd0LDRgtCw0LvRjNC4INCd0LXRgdGC0LXRgNC+0LLQvtC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90LDRjyDQsNC60LDQtNC10LzQuNGPINCx0LjQt9C90LXRgdCwINC4INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0YLRgNCw0L0g0JLQvtGB0YLQvtC60LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INC/0YDQsNCy0L7RgdC70LDQstC90YvQuSDQuNC90YHRgtC40YLRg9GCINGB0LLRj9GC0L7Qs9C+INCY0L7QsNC90L3QsCDQkdC+0LPQvtGB0LvQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INGB0LvQsNCy0Y/QvdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCINGC0LXQu9C10LLQuNC00LXQvdC40Y8g0Lgg0YDQsNC00LjQvtCy0LXRidCw0L3QuNGPINC40LwuINCcLtCQLiDQm9C40YLQvtCy0YfQuNC90LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LzQuNGA0L7QstC+0Lkg0Y3QutC+0L3QvtC80LjQutC4INC4INC80LXQttC00YPQvdCw0YDQvtC00L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjQutC+LdGE0LjQvdCw0L3RgdC+0LLRi9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INGO0YDQuNC00LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0K3QutC+0L3QvtC80LjQutC+LdC/0YDQsNCy0L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0L/QvtCz0YDQsNC90LjRh9C90YvQuSDQuNC90YHRgtC40YLRg9GCINCk0LXQtNC10YDQsNC70YzQvdC+0Lkg0YHQu9GD0LbQsdGLINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCINCx0LjQt9C90LXRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3Ri9GFINGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNGFINGB0LLRj9C30LXQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNGB0LrRg9GB0YHRgtCy0LAg0YDQtdGB0YLQsNCy0YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjQutC+LdC/0YDQsNCy0L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lkg0L/RgNC+0YLQuNCy0L7Qv9C+0LbQsNGA0L3QvtC5INGB0LvRg9C20LHRi1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10L3QtdC00LbQvNC10L3RgtCwINC40L3QvdC+0LLQsNGG0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDQv9GB0LjRhdC+0LvQvtCz0LjQuCAo0JjQvdGB0YLQuNGC0YPRgilcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQsNC60LDQtNC10LzQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCz0YPQvNCw0L3QuNGC0LDRgNC90YvRhSDQvdCw0YPQulwifSx7XCJ0aXRsZVwiOlwi0JPRg9C80LDQvdC40YLQsNGA0L3Qvi3QrdC60L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQmNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQldCy0YDQvtC/0LXQudGB0LrQuNC5INCj0L3QuNCy0LXRgNGB0LjRgtC10YIg0J/RgNCw0LLQsCBKVVNUT1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQsdC40LfQvdC10YHQsCDQuCDQv9C+0LvQuNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCICZxdW90O9CS0YvRgdGI0LjQtSDRgdGC0L7Qu9GL0L/QuNC90YHQutC40LUg0LrRg9GA0YHRiyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDQv9GA0LDQstCwINC4INGD0L/RgNCw0LLQu9C10L3QuNGPJnF1b3Q7XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC10LLRgNC+0L/QtdC50YHQutC40YUg0LrRg9C70YzRgtGD0YBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LjQvdC+0YHRgtGA0LDQvdC90YvRhSDRj9C30YvQutC+0LJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LrQvtC80LzQtdGA0YbQuNC4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0JzQuNGA0L7QstC+0Lkg0Y3QutC+0L3QvtC80LjQutC4INC4INC40L3RhNC+0YDQvNCw0YLQuNC30LDRhtC40LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQuNGA0L7QstGL0YUg0YbQuNCy0LjQu9C40LfQsNGG0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GA0LDQutGC0LjRh9C10YHQutC+0LPQviDQstC+0YHRgtC+0LrQvtCy0LXQtNC10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRhNC40L3QsNC90YHQvtCyLCDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNCw0LLQsCDQvtGE0LjRhtC10YDQvtCyINC30LDQv9Cw0YHQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y/Qt9GL0LrQvtCyINC4INC60YPQu9GM0YLRg9GAINC40LzQtdC90Lgg0Jsu0KLQvtC70YHRgtC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20L7RgtGA0LDRgdC70LXQstC+0Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQvdCw0L3RgdC+0LLQvi3RjtGA0LjQtNC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JzQpNCu0JBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC80YPQt9GL0LrQuCDQuNC80LXQvdC4INCQLtCTLiDQqNC90LjRgtC60LVcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0YHRhNC10YDRiyDRgdC+0YbQuNCw0LvRjNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQoS7Qri4g0JLQuNGC0YLQtVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YHQvtGG0LjQsNC70YzQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQotCj0KDQnsK7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCICjQsy4g0JzQvtGB0LrQstCwKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0LDQutCw0LTQtdC80LjRh9C10YHQutC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCV0LrQsNGC0LXRgNC40L3RiyDQktC10LvQuNC60L7QuVwifSx7XCJ0aXRsZVwiOlwi0J/QtdGA0LLRi9C5INC80L7RgdC60L7QstGB0LrQuNC5INGO0YDQuNC00LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0Y3QutC+0L3QvtC80LjRh9C10YHQutCw0Y8g0YjQutC+0LvQsCAo0JjQvdGB0YLQuNGC0YPRgilcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC90LXRhNGC0Lgg0Lgg0LPQsNC30LAg0LjQvNC10L3QuCDQmC7QnC4g0JPRg9Cx0LrQuNC90LBcIn0se1widGl0bGVcIjpcItCh0L7QstGA0LXQvNC10L3QvdCw0Y8g0LPRg9C80LDQvdC40YLQsNGA0L3QsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCh0L/QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINGO0YDQuNGB0L/RgNGD0LTQtdC90YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQodGC0L7Qu9C40YfQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQv9C10YDQtdCy0L7QtNGH0LjQutC+0LJcIn0se1widGl0bGVcIjpcItCk0LjQu9C40LDQuyDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs9GB0LrQvtCz0L4g0LjQvdGB0YLQuNGC0YPRgtCwINCy0L3QtdGI0L3QtdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNGFINGB0LLRj9C30LXQuSwg0Y3QutC+0L3QvtC80LjQutC4INC4INC/0YDQsNCy0LAg0LIg0LMuINCc0L7RgdC60LLQtVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQkNC60YLRg9Cw0LvRjNC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0K7RgNCY0L3RhNC+0KAt0JzQk9CjXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC20LjQstC+0L/QuNGB0LgsINCy0LDRj9C90LjRjyDQuCDQt9C+0LTRh9C10YHRgtCy0LAg0JjQu9GM0Lgg0JPQu9Cw0LfRg9C90L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGB0L7RhtC40LDQu9GM0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60L7Qs9C+INGA0LDQt9Cy0LjRgtC40Y8gKNC40L3RgdGC0LjRgtGD0YIpXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCf0YDQsNC60YLQuNGH0LXRgdC60L7QuSDQn9GB0LjRhdC+0LvQvtCz0LjQuCDQuCDQn9GB0LjRhdC+0LDQvdCw0LvQuNC30LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40L3QvdC+0LLQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5INC4INC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC/0YDQsNCy0L7RgdGD0LTQuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40L3QsNC90YHQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQodC40L3QtdGA0LPQuNGPwrtcIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0Lgg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90L4t0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LLRi9GB0YjQsNGPINGI0LrQvtC70LAg0YHQvtGG0LjQsNC70YzQvdGL0YUg0Lgg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40YUg0L3QsNGD0LpcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y8sINC/0YDQsNCy0LAg0Lgg0LjQvdC90L7QstCw0YbQuNC+0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LPRg9C80LDQvdC40YLQsNGA0L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRjyDQuCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC90LTRg9GB0YLRgNC40Lgg0YLRg9GA0LjQt9C80LAg0LjQvNC10L3QuCDQri7QkC7QodC10L3QutC10LLQuNGH0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQtdGA0LLQuNGB0LAgKNCzLiDQnNC+0YHQutCy0LApICjRhNC40LvQuNCw0LspINCg0L7RgdGB0LjQudGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINGC0YPRgNC40LfQvNCwINC4INGB0LXRgNCy0LjRgdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YDQvtC00YHQutC+0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQsCDQnNC+0YHQutCy0YtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgNC+0LTRgdC60L7QuSDQuNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3QvtCz0L4g0YLRg9GA0LjQt9C80LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LDQtNCy0L7QutCw0YLRg9GA0Ysg0Lgg0L3QvtGC0LDRgNC40LDRgtCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC40L3QtNGD0YHRgtGA0LjQuCDQvNC+0LTRi1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60LgsINGE0LjQvdCw0L3RgdC+0LIg0Lgg0L/RgNCw0LLQsCAo0JjQrdCk0J8pXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCj0J3QmNCaXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCh0YLQvtC70LjRh9C90LDRjyDRhNC40L3QsNC90YHQvtCy0L4t0LPRg9C80LDQvdC40YLQsNGA0L3QsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0Lgg0LrQvtGA0L/QvtGA0LDRgtC40LLQvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0YUg0Lgg0YDQtdCz0LjQvtC90LDQu9GM0L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90YvRhSDQuNC90L3QvtCy0LDRhtC40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC90LXQtNC20LzQtdC90YLQsCDQuCDQsdC40LfQvdC10YHQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0YbQuNCw0LvRjNC90YvRhSDQvdCw0YPQulwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YHQvtGG0LjQsNC70YzQvdC+LdCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCx0LDQvdC60L7QstGB0LrQvtCz0L4g0LTQtdC70LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LbRg9GA0L3QsNC70LjRgdGC0LjQutC4INC4INC70LjRgtC10YDQsNGC0YPRgNC90L7Qs9C+INGC0LLQvtGA0YfQtdGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40L3QsNC90YHQvtCy0L4t0L/RgNCw0LLQvtCy0L7QuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCw0LLRgtC+0LzQvtCx0LjQu9GM0L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5INC4INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQuNC90YHRgtC40YLRg9GCIMKr0JjQndCk0J4t0KDRg9GC0LXQvdC40Y/Cu1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0L/RgNCw0LLQsCDQuCDRjdC60L7QvdC+0LzQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40YUg0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0KDRg9GB0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuNC80LXQvdC4INCSLtCfLiDQp9C10YDQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GA0LDQstC+0LLQvtC5INGN0LrQvtC90L7QvNC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LHRg9GF0LPQsNC70YLQtdGA0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiAo0JzQkdCYKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRhNC40LfQuNGH0LXRgdC60L7QuSDQutGD0LvRjNGC0YPRgNGLINC4INGB0L/QvtGA0YLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjtGA0LjRgdC/0YDRg9C00LXQvdGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvtGC0LrRgNGL0YLQvtCz0L4g0LHQuNC30L3QtdGBLdC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0Lgg0LTQuNC30LDQudC90LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0KHQvtC00YDRg9C20LXRgdGC0LLQsCDQndC10LfQsNCy0LjRgdC40LzRi9GFINCT0L7RgdGD0LTQsNGA0YHRgtCyXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDRgdC+0YbQuNCw0LvRjNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INCw0L3RgtC40LrRgNC40LfQuNGB0L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0YDRi9C90LrQsCDRgtGA0YPQtNCwINC4INC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YDQtdC60LvQsNC80YtcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7QuSDRjdC60L7QvdC+0LzQuNC60LggKNCzLiDQnNC+0YHQutCy0LApXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDQstC90YPRgtGA0LXQvdC90LjRhSDQtNC10Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YHQuNGF0L7RgtC10YDQsNC/0LjQuCDQuCDQutC70LjQvdC40YfQtdGB0LrQvtC5INC/0YHQuNGF0L7Qu9C+0LPQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiAmcXVvdDvQktCi0KMmcXVvdDtcIn0se1widGl0bGVcIjpcItCh0L7RhtC40LDQu9GM0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGC0YPRgNC40LfQvNCwINC4INCz0L7RgdGC0LXQv9GA0LjQuNC80YHRgtCy0LAgKNCzLiDQnNC+0YHQutCy0LApICjRhNC40LvQuNCw0LspINCg0L7RgdGB0LjQudGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINGC0YPRgNC40LfQvNCwINC4INGB0LXRgNCy0LjRgdCwXCJ9LHtcInRpdGxlXCI6XCLQldCy0YDQsNC30LjQudGB0LrQuNC5INC+0YLQutGA0YvRgtGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNC90YTRgNCw0YHRgtGA0YPQutGC0YPRgNGLINC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGB0L7RhtC40LDQu9GM0L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCR0LjQsdC70LXQudGB0LrQvi3QsdC+0LPQvtGB0LvQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRgdCy0Y/RgtC+0LPQviDQsNC/0L7RgdGC0L7Qu9CwINCQ0L3QtNGA0LXRj1wifSx7XCJ0aXRsZVwiOlwi0JPRg9C80LDQvdC40YLQsNGA0L3Qvi3Qn9GA0L7Qs9C90L7RgdGC0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQsdC40LfQvdC10YHQsCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC/0YHQuNGF0L7QsNC90LDQu9C40LfQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDQutGD0LvRjNGC0YPRgNGLICjQsy4g0JzQvtGB0LrQstCwKVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQutC+0LzQvNGD0L3QuNC60LDRgtC40LLQvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0YUg0YHQvtGG0LjQsNC70YzQvdC+LdCz0YPQvNCw0L3QuNGC0LDRgNC90YvRhSDRgdCy0Y/Qt9C10LlcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0JPQtdC90LXRgNCw0LvRjNC90L7QuSDQv9GA0L7QutGD0YDQsNGC0YPRgNGLINCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvdC10LTQstC40LbQuNC80L7RgdGC0Lgg0Lgg0YHRgtGA0L7QuNGC0LXQu9GM0L3QvtCz0L4g0LHQuNC30L3QtdGB0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YTQuNC70L7RgdC+0YTQuNC4LCDRgtC10L7Qu9C+0LPQuNC4INC4INC40YHRgtC+0YDQuNC4INGB0LLRj9GC0L7Qs9C+INCk0L7QvNGLXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGC0LXQsNGC0YDQsNC70YzQvdC+0LPQviDQuNGB0LrRg9GB0YHRgtCy0LAg0LjQvC4g0J8u0JwuINCV0YDRiNC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjywg0Y3QutC+0L3QvtC80LjQutC4LCDQv9GA0LDQstCwINC4INC40YHQutGD0YHRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQvtGG0LXQvdC60Lgg0Lgg0LrQvtC90YHQsNC70YLQuNC90LPQsFwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3Qu9C40L3Qs9Cy0LjRgdGC0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNC90LTRg9GB0YLRgNC40Lgg0YHQtdGA0LLQuNGB0LBcIn0se1widGl0bGVcIjpcItCb0L7QsdC90LXQvdGB0LrQuNC5INGE0LjQu9C40LDQuyDQnNC+0YHQutC+0LLRgdC60L7Qs9C+INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDRjdC60L7QvdC+0LzQuNC60LgsINGB0YLQsNGC0LjRgdGC0LjQutC4INC4INC40L3RhNC+0YDQvNCw0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LDQvdCw0LvQuNGC0LjRh9C10YHQutC+0Lkg0L/RgdC40YXQvtC70L7Qs9C40Lgg0Lgg0L/RgdC40YXQvtCw0L3QsNC70LjQt9CwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC70LjQvdCz0LLQuNGB0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YDQtdC60LvQsNC80YssINGC0YPRgNC40LfQvNCwLCDRiNC+0YMt0LHQuNC30L3QtdGB0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCY0YHQu9Cw0LzRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCICjQo9GH0YDQtdC20LTQtdC90LjQtSlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC90LDQu9C+0LPQvtCy0YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgtGA0LDQvdGB0L/QvtGA0YLQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7Qs9C+INC00LjQt9Cw0LnQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGN0L3QtdGA0LPQvtCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuCDRjdC90LXRgNCz0L7RgdCx0LXRgNC10LbQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQsdC40LfQvdC10YHQsCDQuCDQtNC10LvQvtCy0L7Qs9C+INCw0LTQvNC40L3QuNGB0YLRgNC40YDQvtCy0LDQvdC40Y8gKNCY0JHQlNCQKSDQoNC+0YHRgdC40LnRgdC60L7QuSDQsNC60LDQtNC10LzQuNC4INC90LDRgNC+0LTQvdC+0LPQviDRhdC+0LfRj9C50YHRgtCy0LAg0Lgg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC5INGB0LvRg9C20LHRiyDQv9GA0Lgg0J/RgNC10LfQuNC00LXQvdGC0LUg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC00LXQu9C+0LLQvtC5INC60LDRgNGM0LXRgNGLXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhdGD0LTQvtC20LXRgdGC0LLQtdC90L3Qvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuCDQuNC90YTQvtGA0LzQsNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQtdCy0YDQtdC50YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60LgsINGE0LjQvdCw0L3RgdC+0LIg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLQvtC10L3QvdGL0Lkg0YPRh9C10LHQvdC+LdC90LDRg9GH0L3Ri9C5INGG0LXQvdGC0YAg0JLQvtC10L3QvdC+LdCy0L7Qt9C00YPRiNC90YvRhSDRgdC40LsgwqvQktC+0LXQvdC90L4t0LLQvtC30LTRg9GI0L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LjQvNC10L3QuCDQv9GA0L7RhNC10YHRgdC+0YDQsCDQnS7QlS4g0JbRg9C60L7QstGB0LrQvtCz0L4g0Lgg0K4u0JAuINCT0LDQs9Cw0YDQuNC90LDCu1wifSx7XCJ0aXRsZVwiOlwi0JLQvtC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQoNCw0LrQtdGC0L3Ri9GFINCy0L7QudGB0Log0YHRgtGA0LDRgtC10LPQuNGH0LXRgdC60L7Qs9C+INC90LDQt9C90LDRh9C10L3QuNGPINC40LzQtdC90Lgg0J/QtdGC0YDQsCDQktC10LvQuNC60L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQodCy0Y/RgtC+LdCk0LjQu9Cw0YDQtdGC0L7QstGB0LrQuNC5INC/0YDQsNCy0L7RgdC70LDQstC90L4t0YXRgNC40YHRgtC40LDQvdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCS0L7QtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YLRgNCw0LTQuNGG0LjQvtC90L3QvtCz0L4g0L/RgNC40LrQu9Cw0LTQvdC+0LPQviDQuNGB0LrRg9GB0YHRgtCy0LAgKNCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQu9C40LDQuykg0JLRi9GB0YjQtdC5INGI0LrQvtC70Ysg0L3QsNGA0L7QtNC90YvRhSDQuNGB0LrRg9GB0YHRgtCyICjQuNC90YHRgtC40YLRg9GC0LApXCJ9LHtcInRpdGxlXCI6XCLQpNC40L3QsNC90YHQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INCx0LjQt9C90LXRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGA0YvQvdC+0YfQvdC+0Lkg0Y3QutC+0L3QvtC80LjQutC4LCDRgdC+0YbQuNCw0LvRjNC90L7QuSDQv9C+0LvQuNGC0LjQutC4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INGD0L/RgNCw0LLQu9C10L3QuNGPINCyINC/0YDQvtC80YvRiNC70LXQvdC90L7RgdGC0LhcIn0se1widGl0bGVcIjpcItCS0L7QtdC90L3Ri9C5INGD0YfQtdCx0L3Qvi3QvdCw0YPRh9C90YvQuSDRhtC10L3RgtGAINCh0YPRhdC+0L/Rg9GC0L3Ri9GFINCy0L7QudGB0LogwqvQntCx0YnQtdCy0L7QudGB0LrQvtCy0LDRjyDQsNC60LDQtNC10LzQuNGPINCS0L7QvtGA0YPQttC10L3QvdGL0YUg0KHQuNC7INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuMK7XCJ9LHtcInRpdGxlXCI6XCLQodGC0L7Qu9C40YfQvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3QvtCz0L4g0YPRh9C10YLQsCDQuCDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgNGD0YHRgdC60L7Qs9C+INGC0LXQsNGC0YDQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRgtC40L3QuNGH0L3QvtCz0L4g0Lgg0YLRg9GA0LjRgdGC0LjRh9C10YHQutC+0LPQviDQvNC10L3QtdC00LbQvNC10L3RgtCwXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JjQvdGB0YLQuNGC0YPRgiDQlNC40LfQsNC50L3QsFwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LzQvtC00YtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQu9C40LDQuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7QuSDQsNC60LDQtNC10LzQuNC4INGC0YPRgNC40LfQvNCwXCJ9LHtcInRpdGxlXCI6XCLQn9C+0LPRgNCw0L3QuNGH0L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0KTQtdC00LXRgNCw0LvRjNC90L7QuSDRgdC70YPQttCx0Ysg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y8sINC60LjQvdC+INC4INGC0LXQu9C10LLQuNC00LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60L7QtSDQstGL0YHRiNC10LUg0LLQvtC10L3QvdC+0LUg0LrQvtC80LDQvdC00L3QvtC1INGD0YfQuNC70LjRidC1ICjQstC+0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCKSAo0YTQuNC70LjQsNC7KSDQktC+0LXQvdC90L7Qs9C+INGD0YfQtdCx0L3Qvi3QvdCw0YPRh9C90L7Qs9C+INGG0LXQvdGC0YDQsCDQodGD0YXQvtC/0YPRgtC90YvRhSDQstC+0LnRgdC6ICZxdW90O9Ce0LHRidC10LLQvtC50YHQutC+0LLQsNGPINCw0LrQsNC00LXQvNC40Y8g0JLQvtC+0YDRg9C20LXQvdC90YvRhSDQodC40Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4JnF1b3Q7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC+0YLQutGA0YvRgtC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQvdC10LTQttC80LXQvdGC0LAsINGN0LrQvtC90L7QvNC40LrQuCDQuCDQuNC90L3QvtCy0LDRhtC40LlcIn0se1widGl0bGVcIjpcItCe0YHRgtCw0L3QutC40L3RgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGC0LXQu9C10LLQuNC00LXQvdC40Y8g0Lgg0YDQsNC00LjQvtCy0LXRidCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDRg9C/0YDQsNCy0LvQtdC90LjRjyDQsiDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQtSDQuCDQv9GA0L7QvNGL0YjQu9C10L3QvdC+0YHRgtC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YHQuNGF0L7Qu9C+0LPQuNC4XCJ9LHtcInRpdGxlXCI6XCLQntGC0LrRgNGL0YLRi9C5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQodC70LDQstGP0L3Qvi3Qk9GA0LXQutC+LdCb0LDRgtC40L3RgdC60LDRjyDQsNC60LDQtNC10LzQuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsNGA0YXQuNGC0LXQutGC0YPRgNC90L4t0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGB0L7RhtC40LDQu9GM0L3Qvi3Qv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCf0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L3QtdC/0YDQtdGA0YvQstC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y8g0Lgg0YHQtdGA0LLQuNGB0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQu9C40LDQuyDQsNCy0YLQvtC90L7QvNC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90L7Qs9C+INGD0YfRgNC10LbQtNC10L3QuNGPINCb0LXQvdC40L3Qs9GA0LDQtNGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINC40LzQtdC90Lgg0JAu0KEuINCf0YPRiNC60LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDRhNC40L3QsNC90YHQvtCyINC4INC80LXQvdC10LTQttC80LXQvdGC0LAg0KDQvtGB0YHQuNC50YHQutC+0Lkg0LDQutCw0LTQtdC80LjQuCDQvdCw0YDQvtC00L3QvtCz0L4g0YXQvtC30Y/QudGB0YLQstCwINC4INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7QuSDRgdC70YPQttCx0Ysg0L/RgNC4INCf0YDQtdC30LjQtNC10L3RgtC1INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KHQvtCy0YDQtdC80LXQvdC90YvQuSDQvNC+0YDRgdC60L7QuSDQuNC90YHRgtC40YLRg9GCXCJ9XVxuXG4gICAgICB1bml2ZXJjaXR5cy5pbml0aWFsaXplKClcblxuICAgICAgaWYgdW5pdmVyY2l0eS5oYXNDbGFzcyAndHQtaW5wdXQnXG4gICAgICAgIHVuaXZlcmNpdHkudHlwZWFoZWFkKCdkZXN0cm95JylcblxuICAgICAgdW5pdmVyY2l0eS50eXBlYWhlYWRcbiAgICAgICAgaGludDogZmFsc2VcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIG1pbkxlbmd0aDogMVxuICAgICAgLFxuICAgICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgICAgdGVtcGxhdGVzOlxuICAgICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICAgIHVuaXZlcmNpdHkub24gJ2NoYW5nZScsIEBhZGRGYWN1bHR5XG4gICAgICB1bml2ZXJjaXR5Lm9uICdibHVyJywgQGFkZEZhY3VsdHlcbiAgICAgIHVuaXZlcmNpdHkub24gJ3R5cGVhaGVhZDphdXRvY29tcGxldGVkJywgQGFkZEZhY3VsdHlcbiAgICAgIHVuaXZlcmNpdHkub24gJ3R5cGVhaGVhZDpzZWxlY3RlZCcsIEBhZGRGYWN1bHR5XG5cbiAgICBlbHNlXG5cbiAgICAgIHVuaXZlcmNpdHkudHlwZWFoZWFkKCdkZXN0cm95JylcbiAgICAgIHVuaXZlcmNpdHkub2ZmICdjaGFuZ2UnLCBAYWRkRmFjdWx0eVxuICAgICAgdW5pdmVyY2l0eS5vZmYgJ2JsdXInLCBAYWRkRmFjdWx0eVxuICAgICAgZmFjdWx0eS50eXBlYWhlYWQoJ2Rlc3Ryb3knKVxuXG5cblxuICBhZGRGYWN1bHR5OiAoZXZlbnQpPT5cblxuICAgIHVuaXZlcmNpdHkgPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICB2YWx1ZSA9IHVuaXZlcmNpdHkudmFsKCkudHJpbSgpXG5cbiAgICB3cmFwcGVyID0gdW5pdmVyY2l0eS5jbG9zZXN0KCcuZWR1Y2F0aW9uLXdyYXBwZXInKVxuICAgIGZhY3VsdHkgPSB3cmFwcGVyLmZpbmQoJy5mYWN1bHR5JylcblxuICAgIGlmIHZhbHVlID09ICfQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRj9C00LXRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0JzQmNCk0JjCuydcblxuICAgICAgZmFjdWx0eXMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgICBkYXR1bVRva2VuaXplcjogKGRhdGEpLT5cbiAgICAgICAgICByZXR1cm4gQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UoZGF0YS50aXRsZSlcbiAgICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgICBsaW1pdDogNjAwXG4gICAgICAgIGxvY2FsOiBbe1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDRhNC40L3QsNC90YHQvtCyINCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQvdCw0YDQvtC00L3QvtCz0L4g0YXQvtC30Y/QudGB0YLQstCwINC4INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7QuSDRgdC70YPQttCx0Ysg0L/RgNC4INCf0YDQtdC30LjQtNC10L3RgtC1INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDRgtGA0YPQtNCwINC4INGB0L7RhtC40LDQu9GM0L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDRhdC+0YDQvtCy0L7Qs9C+INC40YHQutGD0YHRgdGC0LLQsCDQuNC80LXQvdC4INCSLtChLiDQn9C+0L/QvtCy0LBcIn0se1widGl0bGVcIjpcItCS0YHQtdGA0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LLQvdC10YjQvdC10Lkg0YLQvtGA0LPQvtCy0LvQuCDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0Y3QutC+0L3QvtC80LjRh9C10YHQutC+0LPQviDRgNCw0LfQstC40YLQuNGPINCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JLRgdC10YDQvtGB0YHQuNC50YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC90LDQu9C+0LPQvtCy0LDRjyDQsNC60LDQtNC10LzQuNGPXCJ9LHtcInRpdGxlXCI6XCLQktGB0LXRgNC+0YHRgdC40LnRgdC60LjQuSAg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LrQuNC90LXQvNCw0YLQvtCz0YDQsNGE0LjQuCDQuNC8LtChLtCQLtCT0LXRgNCw0YHQuNC80L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQl9Cw0L7Rh9C90YvQuSDRhNC40L3QsNC90YHQvtCy0L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQpNC40L3QsNC90YHQvtCy0L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDQv9GA0Lgg0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0LUg0KDQvtGB0YHQuNC50YHQutC+0Lkg0YTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCS0YvRgdGI0LDRjyDRiNC60L7Qu9CwINCh0L7QstGA0LXQvNC10L3QvdC+0LUg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVwifSx7XCJ0aXRsZVwiOlwi0KLQtdCw0YLRgNCw0LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40LzQtdC90Lgg0JHQvtGA0LjRgdCwINCp0YPQutC40L3QsCDQv9GA0Lgg0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC8INCw0LrQsNC00LXQvNC40YfQtdGB0LrQvtC8INGC0LXQsNGC0YDQtSDQuNC80LXQvdC4INCV0LLQsy4g0JLQsNGF0YLQsNC90LPQvtCy0LBcIn0se1widGl0bGVcIjpcItCS0YvRgdGI0LXQtSDRgtC10LDRgtGA0LDQu9GM0L3QvtC1INGD0YfQuNC70LjRidC1ICjQuNC90YHRgtC40YLRg9GCKSDQuNC8LiDQnC7QoS4g0KnQtdC/0LrQuNC90LAg0L/RgNC4INCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7QvCDQsNC60LDQtNC10LzQuNGH0LXRgdC60L7QvCDQnNCw0LvQvtC8INGC0LXQsNGC0YDQtSDQoNC+0YHQuNC4XCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDRgdC70LDQstGP0L3RgdC60L7QuSDQutGD0LvRjNGC0YPRgNGLXCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60LvQsNGB0YHQuNGH0LXRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC40LzQtdC90Lgg0JzQsNC50LzQvtC90LjQtNCwXCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgNGD0YHRgdC60L7Qs9C+INGP0LfRi9C60LAg0LjQvCDQkC7QoS4g0J/Rg9GI0LrQuNC90LBcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvNGD0LfRi9C60LDQu9GM0L3Qvi3Qv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LjQvNC10L3QuCDQnC7QnC4g0JjQv9C/0L7Qu9C40YLQvtCy0LAt0JjQstCw0L3QvtCy0LBcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgdC/0LXRhtC40LDQu9C40LfQuNGA0L7QstCw0L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNGB0LrRg9GB0YHRgtCyXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0JLRi9GB0YjQsNGPINGI0LrQvtC70LAg0Y3QutC+0L3QvtC80LjQutC4wrtcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0L4g0LfQtdC80LvQtdGD0YHRgtGA0L7QudGB0YLQstGDXCJ9LHtcInRpdGxlXCI6XCLQk9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiAo0LMuINCc0L7RgdC60LLQsClcIn0se1widGl0bGVcIjpcItCU0LjQv9C70L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3QvtCz0L4g0L/RgNCw0LLQsCDQuCDRjdC60L7QvdC+0LzQuNC60Lgg0LjQvNC10L3QuCDQkC7QoS7Qk9GA0LjQsdC+0LXQtNC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7Qs9C+INC40YHQutGD0YHRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JvQuNGC0LXRgNCw0YLRg9GA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LjQvNC10L3QuCDQkC7QnC7Qk9C+0YDRjNC60L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQnNCQ0KLQmCAtINCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCaLtCtLiDQptC40L7Qu9C60L7QstGB0LrQvtCz0L5cIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40YfQtdGB0LrQuNC5INC80LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0JzQndCt0J/Qo1wifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQsiDQnNC+0YHQutCy0LVcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LAg0L/RgNC4INCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstC1INCzLiDQnNC+0YHQutCy0YtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0Y3QutC+0L3QvtC80LjQutC4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINCy0LXRgtC10YDQuNC90LDRgNC90L7QuSDQvNC10LTQuNGG0LjQvdGLINC4INCx0LjQvtGC0LXRhdC90L7Qu9C+0LPQuNC4INC40LzQtdC90Lgg0Jou0JguINCh0LrRgNGP0LHQuNC90LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINCy0L7QtNC90L7Qs9C+INGC0YDQsNC90YHQv9C+0YDRgtCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQtNC40LfQsNC50L3QsCDQuCDRgtC10YXQvdC+0LvQvtCz0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/RgNC40LHQvtGA0L7RgdGC0YDQvtC10L3QuNGPINC4INC40L3RhNC+0YDQvNCw0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGC0L7QvdC60LjRhSDRhdC40LzQuNGH0LXRgdC60LjRhSDRgtC10YXQvdC+0LvQvtCz0LjQuSDQuNC80LXQvdC4INCcLtCSLiDQm9C+0LzQvtC90L7RgdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0YXQvtGA0LXQvtCz0YDQsNGE0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCz0LXQvtC70L7Qs9C+0YDQsNC30LLQtdC00L7Rh9C90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0KHQtdGA0LPQviDQntGA0LTQttC+0L3QuNC60LjQtNC30LVcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQutC+0L3RgdC10YDQstCw0YLQvtGA0LjRjyAo0YPQvdC40LLQtdGA0YHQuNGC0LXRgikg0LjQvNC10L3QuCDQny4g0JguINCn0LDQudC60L7QstGB0LrQvtCz0L5cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10LrRgdGC0LjQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgINC40LzQtdC90Lgg0JAu0J0uINCa0L7RgdGL0LPQuNC90LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRjtGA0LjQtNC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQni4g0JUuINCa0YPRgtCw0YTQuNC90LBcIn0se1widGl0bGVcIjpcItCf0LXRgNCy0YvQuSDQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LzQtdC00LjRhtC40L3RgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0Jgu0JwuINCh0LXRh9C10L3QvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINC80LXQttC00YPQvdCw0YDQvtC00L3QsNGPINCy0YvRgdGI0LDRjyDRiNC60L7Qu9CwINCx0LjQt9C90LXRgdCwINCc0JjQoNCR0JjQoSAo0JjQvdGB0YLQuNGC0YPRgilcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQsNCz0YDQsNGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YItINCc0KHQpdCQINC40LzQtdC90Lgg0Jou0JAuINCi0LjQvNC40YDRj9C30LXQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsNGA0YXQuNGC0LXQutGC0YPRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCICjQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjykgKNCc0JDQoNCl0JgpXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsdCw0L3QutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YDQvtC00YHQutC+0Lkg0L/QtdC00LDQs9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YDQvtC00YHQutC+0Lkg0L/RgdC40YXQvtC70L7Qs9C+LdC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YDQsNC00LjQvtGC0LXRhdC90LjQutC4LCDRjdC70LXQutGC0YDQvtC90LjQutC4INC4INCw0LLRgtC+0LzQsNGC0LjQutC4ICjRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIpICjQnNCY0KDQrdCQKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LDQstC40LDRhtC40L7QvdC90YvQuSDQuNC90YHRgtC40YLRg9GCICjQvdCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LDQstGC0L7QvNC+0LHQuNC70YzQvdC+LdC00L7RgNC+0LbQvdGL0Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAo0JzQkNCU0JgpXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LDQs9GA0L7QuNC90LbQtdC90LXRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0JIu0J8uINCT0L7RgNGP0YfQutC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCw0LrQsNC00LXQvNC40YfQtdGB0LrQuNC5INGF0YPQtNC+0LbQtdGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCSLtCYLiDQodGD0YDQuNC60L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LLQtdGH0LXRgNC90LjQuSDQvNC10YLQsNC70LvRg9GA0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LPQvtGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGC0LXRhdC90L7Qu9C+0LPQuNC5INC4INGD0L/RgNCw0LLQu9C10L3QuNGPINC40LzQtdC90Lgg0Jou0JMuINCg0LDQt9GD0LzQvtCy0YHQutC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40L3QtNGD0YHRgtGA0LjQsNC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0Y/QtNC10YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDCq9Cc0JjQpNCYwrtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuSAo0YPQvdC40LLQtdGA0YHQuNGC0LXRgilcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0JzQmNCh0LjQocK7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGN0LvQtdC60YLRgNC+0L3QuNC60Lgg0Lgg0LzQsNGC0LXQvNCw0YLQuNC60Lgg0J3QsNGG0LjQvtC90LDQu9GM0L3QvtCz0L4g0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDCq9CS0YvRgdGI0LDRjyDRiNC60L7Qu9CwINGN0LrQvtC90L7QvNC40LrQuMK7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LvQuNC90LPQstC40YHRgtC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCcLtCQLiDQqNC+0LvQvtGF0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0L7RgtC60YDRi9GC0YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0JIu0KEuINCn0LXRgNC90L7QvNGL0YDQtNC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGB0L7RhtC40LDQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgdGC0YDQvtC40YLQtdC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAtINC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvNCw0YjQuNC90L7RgdGC0YDQvtC40YLQtdC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAo0JzQkNCc0JgpXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCz0YDQsNC20LTQsNC90YHQutC+0Lkg0LDQstC40LDRhtC40LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQnS7QrS4g0JHQsNGD0LzQsNC90LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDCq9Ch0YLQsNC90LrQuNC9wrtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0Jwu0JIuINCb0L7QvNC+0L3QvtGB0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQs9C10L7QtNC10LfQuNC4INC4INC60LDRgNGC0L7Qs9GA0LDRhNC40LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40L3QttC10L3QtdGA0L3QvtC5INGN0LrQvtC70L7Qs9C40LhcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC+0YDQs9C+0LLQvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9C10YfQsNGC0Lgg0LjQvNC10L3QuCDQmNCy0LDQvdCwINCk0LXQtNC+0YDQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0LjRidC10LLRi9GFINC/0YDQvtC40LfQstC+0LTRgdGC0LJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0YDQuNGA0L7QtNC+0L7QsdGD0YHRgtGA0L7QudGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9GD0YLQtdC5INGB0L7QvtCx0YnQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0Y3QutC+0L3QvtC80LjQutC4LCDRgdGC0LDRgtC40YHRgtC40LrQuCDQuCDQuNC90YTQvtGA0LzQsNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0YXRg9C00L7QttC10YHRgtCy0LXQvdC90L4t0L/RgNC+0LzRi9GI0LvQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LjQvC4g0KEu0JMuINCh0YLRgNC+0LPQsNC90L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgtC40LzQtdC90Lgg0JUu0KAuINCU0LDRiNC60L7QstC+0LlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINC60L7QvNC80YPQvdCw0LvRjNC90L7Qs9C+INGF0L7Qt9GP0LnRgdGC0LLQsCDQuCDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCz0YPQvNCw0L3QuNGC0LDRgNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80LXQtNC40LrQvi3RgdGC0L7QvNCw0YLQvtC70L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0J7QodCa0J7QktCh0JrQmNCZINCd0J7QktCr0Jkg0K7QoNCY0JTQmNCn0JXQodCa0JjQmSDQmNCd0KHQotCY0KLQo9CiXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0L7QsdC70LDRgdGC0L3QvtC5ICDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQv9GB0LjRhdC+0LvQvtCz0L4t0YHQvtGG0LjQsNC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGB0LLRj9C30Lgg0Lgg0LjQvdGE0L7RgNC80LDRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDCq9Cc0K3QmMK7XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC80YPQt9GL0LrQuCDQuNC80LXQvdC4INCT0L3QtdGB0LjQvdGL0YVcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YLQtdCw0YLRgNCw0LvRjNC90L7Qs9C+INC40YHQutGD0YHRgdGC0LLQsCAtINCT0JjQotCY0KFcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGE0LjQt9C40YfQtdGB0LrQvtC5INC60YPQu9GM0YLRg9GA0YssINGB0L/QvtGA0YLQsCwg0LzQvtC70L7QtNC10LbQuCDQuCDRgtGD0YDQuNC30LzQsCAo0JPQptCe0JvQmNCk0JopXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQv9GA0LDQstC+0LLQsNGPINCw0LrQsNC00LXQvNC40Y8g0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGO0YHRgtC40YbQuNC4INCg0KRcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINGI0LrQvtC70LAg0YfQsNGB0YLQvdC+0LPQviDQv9GA0LDQstCwICjQuNC90YHRgtC40YLRg9GCKVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCTLtCSLiDQn9C70LXRhdCw0L3QvtCy0LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0LzQtdC00LjRhtC40L3RgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0J0u0JguINCf0LjRgNC+0LPQvtCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YLQtdC60YHRgtC40LvRjNC90L7QuSDQuCDQu9C10LPQutC+0Lkg0L/RgNC+0LzRi9GI0LvQtdC90L3QvtGB0YLQuCDQvNC+0YHQutC+0LLRgdC60L7Qs9C+INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDRgtC10YXQvdC+0LvQvtCz0LjQuSDQuCDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LjQvdGC0LXQu9C70LXQutGC0YPQsNC70YzQvdC+0Lkg0YHQvtCx0YHRgtCy0LXQvdC90L7RgdGC0LhcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INC90L7QstGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQtNGA0YPQttCx0Ysg0L3QsNGA0L7QtNC+0LJcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INGF0LjQvNC40LrQvi3RgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCULtCYLiDQnNC10L3QtNC10LvQtdC10LLQsFwifSx7XCJ0aXRsZVwiOlwi0KTQuNC90LDQvdGB0L7QstGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9GA0Lgg0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0LUg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQqNC60L7Qu9CwLdGB0YLRg9C00LjRjyAo0LjQvdGB0YLQuNGC0YPRgikg0LjQvNC10L3QuCDQktC7LtCYLiDQndC10LzQuNGA0L7QstC40YfQsC3QlNCw0L3Rh9C10L3QutC+INC/0YDQuCDQnNC+0YHQutC+0LLRgdC60L7QvCDQpdGD0LTQvtC20LXRgdGC0LLQtdC90L3QvtC8INCw0LrQsNC00LXQvNC40YfQtdGB0LrQvtC8INGC0LXQsNGC0YDQtSDQuNC80LXQvdC4INCQLtCfLiDQp9C10YXQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC60LjQvdC+0LLQuNC00LXQvtC40L3RgdGC0LjRgtGD0YIgKNGE0LjQu9C40LDQuykg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LPRgdC60L7Qs9C+INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDQutC40L3QviDQuCDRgtC10LvQtdCy0LjQtNC10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQvtCx0LvQsNGB0YLQvdC+0Lkg0YTQuNC70LjQsNC7INCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCz0YHQutC+0LPQviDQk9GD0LzQsNC90LjRgtCw0YDQvdC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0L/RgNC+0YTRgdC+0Y7Qt9C+0LIg0JjQvdGB0YLQuNGC0YPRgiDQuNGB0LrRg9GB0YHRgtCyINC4INC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0YPQv9GA0LDQstC70LXQvdC40Y8g0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINCy0L3Rg9GC0YDQtdC90L3QuNGFINC00LXQuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0KTQtdC00LXRgNCw0LvRjNC90L7QuSDRgdC70YPQttCx0Ysg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0KHQu9Cw0LLRj9C90YHQutC40Lkg0LTQtdC70L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC8LiDQmi7Qki4g0J3QtdGH0LDQtdCy0LAgKNCc0LjRgtGA0L7Qv9C+0LvQuNGC0LAg0J/QuNGC0LjRgNC40LzQsClcIn0se1widGl0bGVcIjpcItCj0L3QuNCy0LXRgNGB0LjRgtC10YIg0KDQvtGB0YHQuNC50YHQutC+0Lkg0LDQutCw0LTQtdC80LjQuCDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INCw0LTQvNC40L3QuNGB0YLRgNC40YDQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdC+0Lkg0YLQvtGA0LPQvtCy0LvQuCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YHQuNGF0L7Qu9C+0LPQuNC4INC4INC/0LXQtNCw0LPQvtCz0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQuNC90YHRgtC40YLRg9GCINCz0L7RgdGC0LjQvdC40YfQvdC+0LPQviDQvNC10L3QtdC00LbQvNC10L3RgtCwINC4INGC0YPRgNC40LfQvNCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LAg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60LgsINC/0L7Qu9C40YLQuNC60Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YTQuNC90LDQvdGB0L7QstC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0YPQvNCw0L3QuNGC0LDRgNC90L4t0YLQtdGF0L3QuNGH0LXRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPXCJ9LHtcInRpdGxlXCI6XCLQn9GA0LDQstC+0YHQu9Cw0LLQvdGL0Lkg0KHQstGP0YLQvi3QotC40YXQvtC90L7QstGB0LrQuNC5INCT0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQo9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGH0LXRgdC60LjQuSDQv9GA0LDQstC+0LLQvtC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0L7QsdGA0LDQt9C+0LLQsNC90LjRjyDQndCw0YLQsNC70YzQuCDQndC10YHRgtC10YDQvtCy0L7QuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQsdC40LfQvdC10YHQsCDQuCDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdGC0YDQsNC9INCS0L7RgdGC0L7QutCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQv9GA0LDQstC+0YHQu9Cw0LLQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgdCy0Y/RgtC+0LPQviDQmNC+0LDQvdC90LAg0JHQvtCz0L7RgdC70L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDRgdC70LDQstGP0L3RgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQk9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgtC10LvQtdCy0LjQtNC10L3QuNGPINC4INGA0LDQtNC40L7QstC10YnQsNC90LjRjyDQuNC8LiDQnC7QkC4g0JvQuNGC0L7QstGH0LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC80LjRgNC+0LLQvtC5INGN0LrQvtC90L7QvNC40LrQuCDQuCDQvNC10LbQtNGD0L3QsNGA0L7QtNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGN0LrQvtC90L7QvNC40LrQvi3RhNC40L3QsNC90YHQvtCy0YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDRjtGA0LjQtNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCt0LrQvtC90L7QvNC40LrQvi3Qv9GA0LDQstC+0LLQvtC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC/0L7Qs9GA0LDQvdC40YfQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQpNC10LTQtdGA0LDQu9GM0L3QvtC5INGB0LvRg9C20LHRiyDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQsdC40LfQvdC10YHQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90YvRhSDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjRhSDRgdCy0Y/Qt9C10LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LjRgdC60YPRgdGB0YLQstCwINGA0LXRgdGC0LDQstGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGN0LrQvtC90L7QvNC40LrQvi3Qv9GA0LDQstC+0LLQvtC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC5INC/0YDQvtGC0LjQstC+0L/QvtC20LDRgNC90L7QuSDRgdC70YPQttCx0YtcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC90LXQtNC20LzQtdC90YLQsCDQuNC90L3QvtCy0LDRhtC40LlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y8g0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLRi9GB0YjQsNGPINGI0LrQvtC70LAg0L/RgdC40YXQvtC70L7Qs9C40LggKNCY0L3RgdGC0LjRgtGD0YIpXCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LDQutCw0LTQtdC80LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0YUg0L3QsNGD0LpcIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90L4t0K3QutC+0LvQvtCz0LjRh9C10YHQutC40Lkg0JjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JXQstGA0L7Qv9C10LnRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCf0YDQsNCy0LAgSlVTVE9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LHQuNC30L3QtdGB0LAg0Lgg0L/QvtC70LjRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiAmcXVvdDvQktGL0YHRiNC40LUg0YHRgtC+0LvRi9C/0LjQvdGB0LrQuNC1INC60YPRgNGB0Ysg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0L/RgNCw0LLQsCDQuCDRg9C/0YDQsNCy0LvQtdC90LjRjyZxdW90O1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQtdCy0YDQvtC/0LXQudGB0LrQuNGFINC60YPQu9GM0YLRg9GAXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC40L3QvtGB0YLRgNCw0L3QvdGL0YUg0Y/Qt9GL0LrQvtCyXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC60L7QvNC80LXRgNGG0LjQuCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCc0LjRgNC+0LLQvtC5INGN0LrQvtC90L7QvNC40LrQuCDQuCDQuNC90YTQvtGA0LzQsNGC0LjQt9Cw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LjRgNC+0LLRi9GFINGG0LjQstC40LvQuNC30LDRhtC40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgNCw0LrRgtC40YfQtdGB0LrQvtCz0L4g0LLQvtGB0YLQvtC60L7QstC10LTQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YTQuNC90LDQvdGB0L7Qsiwg0Y3QutC+0L3QvtC80LjQutC4INC4INC/0YDQsNCy0LAg0L7RhNC40YbQtdGA0L7QsiDQt9Cw0L/QsNGB0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGP0LfRi9C60L7QsiDQuCDQutGD0LvRjNGC0YPRgCDQuNC80LXQvdC4INCbLtCi0L7Qu9GB0YLQvtCz0L5cIn0se1widGl0bGVcIjpcItCc0LXQttC+0YLRgNCw0YHQu9C10LLQvtC5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40L3QsNC90YHQvtCy0L4t0Y7RgNC40LTQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCc0KTQrtCQXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQvNGD0LfRi9C60Lgg0LjQvNC10L3QuCDQkC7Qky4g0KjQvdC40YLQutC1XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGB0YTQtdGA0Ysg0YHQvtGG0LjQsNC70YzQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0KEu0K4uINCS0LjRgtGC0LVcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGB0L7RhtC40LDQu9GM0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0KLQo9Cg0J7Cu1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiAo0LMuINCc0L7RgdC60LLQsClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7Qs9C+INCw0LrQsNC00LXQvNC40YfQtdGB0LrQvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LjQvNC10L3QuCDQldC60LDRgtC10YDQuNC90Ysg0JLQtdC70LjQutC+0LlcIn0se1widGl0bGVcIjpcItCf0LXRgNCy0YvQuSDQvNC+0YHQutC+0LLRgdC60LjQuSDRjtGA0LjQtNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINGN0LrQvtC90L7QvNC40YfQtdGB0LrQsNGPINGI0LrQvtC70LAgKNCY0L3RgdGC0LjRgtGD0YIpXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQvdC10YTRgtC4INC4INCz0LDQt9CwINC40LzQtdC90Lgg0Jgu0JwuINCT0YPQsdC60LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQodC+0LLRgNC10LzQtdC90L3QsNGPINCz0YPQvNCw0L3QuNGC0LDRgNC90LDRjyDQsNC60LDQtNC10LzQuNGPXCJ9LHtcInRpdGxlXCI6XCLQodC/0LXRhtC40LDQu9C40LfQuNGA0L7QstCw0L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRjtGA0LjRgdC/0YDRg9C00LXQvdGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KHRgtC+0LvQuNGH0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0L/QtdGA0LXQstC+0LTRh9C40LrQvtCyXCJ9LHtcInRpdGxlXCI6XCLQpNC40LvQuNCw0Lsg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LPRgdC60L7Qs9C+INC40L3RgdGC0LjRgtGD0YLQsCDQstC90LXRiNC90LXRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjRhSDRgdCy0Y/Qt9C10LksINGN0LrQvtC90L7QvNC40LrQuCDQuCDQv9GA0LDQstCwINCyINCzLiDQnNC+0YHQutCy0LVcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0JDQutGC0YPQsNC70YzQvdC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPINCu0YDQmNC90YTQvtCgLdCc0JPQo1wifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQttC40LLQvtC/0LjRgdC4LCDQstCw0Y/QvdC40Y8g0Lgg0LfQvtC00YfQtdGB0YLQstCwINCY0LvRjNC4INCT0LvQsNC30YPQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDRgdC+0YbQuNCw0LvRjNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC+0LPQviDRgNCw0LfQstC40YLQuNGPICjQuNC90YHRgtC40YLRg9GCKVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQn9GA0LDQutGC0LjRh9C10YHQutC+0Lkg0J/RgdC40YXQvtC70L7Qs9C40Lgg0Lgg0J/RgdC40YXQvtCw0L3QsNC70LjQt9CwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC90L3QvtCy0LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuSDQuCDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQv9GA0LDQstC+0YHRg9C00LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YTQuNC90LDQvdGB0L7QstC+LdC/0YDQvtC80YvRiNC70LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0KHQuNC90LXRgNCz0LjRj8K7XCJ9LHtcInRpdGxlXCI6XCLQk9GD0LzQsNC90LjRgtCw0YDQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC4INC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdC+LdGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCc0L7RgdC60L7QstGB0LrQsNGPINCy0YvRgdGI0LDRjyDRiNC60L7Qu9CwINGB0L7RhtC40LDQu9GM0L3Ri9GFINC4INGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNGFINC90LDRg9C6XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPLCDQv9GA0LDQstCwINC4INC40L3QvdC+0LLQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCz0YPQvNCw0L3QuNGC0LDRgNC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0Lgg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LjQvdC00YPRgdGC0YDQuNC4INGC0YPRgNC40LfQvNCwINC40LzQtdC90Lgg0K4u0JAu0KHQtdC90LrQtdCy0LjRh9CwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0L/QtdC00LDQs9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0LXRgNCy0LjRgdCwICjQsy4g0JzQvtGB0LrQstCwKSAo0YTQuNC70LjQsNC7KSDQoNC+0YHRgdC40LnRgdC60L7Qs9C+INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDRgtGD0YDQuNC30LzQsCDQuCDRgdC10YDQstC40YHQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGA0L7QtNGB0LrQvtC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YPQv9GA0LDQstC70LXQvdC40Y8g0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0LAg0JzQvtGB0LrQstGLXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YDQvtC00YHQutC+0Lkg0LjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C+INGC0YPRgNC40LfQvNCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINCw0LTQstC+0LrQsNGC0YPRgNGLINC4INC90L7RgtCw0YDQuNCw0YLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNC90LTRg9GB0YLRgNC40Lgg0LzQvtC00YtcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4LCDRhNC40L3QsNC90YHQvtCyINC4INC/0YDQsNCy0LAgKNCY0K3QpNCfKVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQo9Cd0JjQmlwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQodGC0L7Qu9C40YfQvdCw0Y8g0YTQuNC90LDQvdGB0L7QstC+LdCz0YPQvNCw0L3QuNGC0LDRgNC90LDRjyDQsNC60LDQtNC10LzQuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INC4INC60L7RgNC/0L7RgNCw0YLQuNCy0L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9GFINC4INGA0LXQs9C40L7QvdCw0LvRjNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70YzQvdGL0YUg0LjQvdC90L7QstCw0YbQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQvdC10LTQttC80LXQvdGC0LAg0Lgg0LHQuNC30L3QtdGB0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQvtGG0LjQsNC70YzQvdGL0YUg0L3QsNGD0LpcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGB0L7RhtC40LDQu9GM0L3Qvi3Qs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQsdCw0L3QutC+0LLRgdC60L7Qs9C+INC00LXQu9CwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC20YPRgNC90LDQu9C40YHRgtC40LrQuCDQuCDQu9C40YLQtdGA0LDRgtGD0YDQvdC+0LPQviDRgtCy0L7RgNGH0LXRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YTQuNC90LDQvdGB0L7QstC+LdC/0YDQsNCy0L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQsNCy0YLQvtC80L7QsdC40LvRjNC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuSDQuCDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDCq9CY0J3QpNCeLdCg0YPRgtC10L3QuNGPwrtcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7Qs9C+INC/0YDQsNCy0LAg0Lgg0Y3QutC+0L3QvtC80LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNGFINC/0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40LlcIn0se1widGl0bGVcIjpcItCg0YPRgdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y8g0LjQvNC10L3QuCDQki7Qny4g0KfQtdGA0L3QvtCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgNCw0LLQvtCy0L7QuSDRjdC60L7QvdC+0LzQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCx0YPRhdCz0LDQu9GC0LXRgNGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIgKNCc0JHQmClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YTQuNC30LjRh9C10YHQutC+0Lkg0LrRg9C70YzRgtGD0YDRiyDQuCDRgdC/0L7RgNGC0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y7RgNC40YHQv9GA0YPQtNC10L3RhtC40LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L7RgtC60YDRi9GC0L7Qs9C+INCx0LjQt9C90LXRgS3QvtCx0YDQsNC30L7QstCw0L3QuNGPINC4INC00LjQt9Cw0LnQvdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCh0L7QtNGA0YPQttC10YHRgtCy0LAg0J3QtdC30LDQstC40YHQuNC80YvRhSDQk9C+0YHRg9C00LDRgNGB0YLQslwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0YHQvtGG0LjQsNC70YzQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDQsNC90YLQuNC60YDQuNC30LjRgdC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINGA0YvQvdC60LAg0YLRgNGD0LTQsCDQuCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5XCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQuNC90YHRgtC40YLRg9GCINGA0LXQutC70LDQvNGLXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0L7QstGA0LXQvNC10L3QvdC+0Lkg0Y3QutC+0L3QvtC80LjQutC4ICjQsy4g0JzQvtGB0LrQstCwKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0LLQvdGD0YLRgNC10L3QvdC40YUg0LTQtdC7INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GB0LjRhdC+0YLQtdGA0LDQv9C40Lgg0Lgg0LrQu9C40L3QuNGH0LXRgdC60L7QuSDQv9GB0LjRhdC+0LvQvtCz0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIgJnF1b3Q70JLQotCjJnF1b3Q7XCJ9LHtcInRpdGxlXCI6XCLQodC+0YbQuNCw0LvRjNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgtGD0YDQuNC30LzQsCDQuCDQs9C+0YHRgtC10L/RgNC40LjQvNGB0YLQstCwICjQsy4g0JzQvtGB0LrQstCwKSAo0YTQuNC70LjQsNC7KSDQoNC+0YHRgdC40LnRgdC60L7Qs9C+INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDRgtGD0YDQuNC30LzQsCDQuCDRgdC10YDQstC40YHQsFwifSx7XCJ0aXRsZVwiOlwi0JXQstGA0LDQt9C40LnRgdC60LjQuSDQvtGC0LrRgNGL0YLRi9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LjQvdGE0YDQsNGB0YLRgNGD0LrRgtGD0YDRiyDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDRgdC+0YbQuNCw0LvRjNC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQkdC40LHQu9C10LnRgdC60L4t0LHQvtCz0L7RgdC70L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YHQstGP0YLQvtCz0L4g0LDQv9C+0YHRgtC+0LvQsCDQkNC90LTRgNC10Y9cIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90L4t0J/RgNC+0LPQvdC+0YHRgtC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LHQuNC30L3QtdGB0LAg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQv9GB0LjRhdC+0LDQvdCw0LvQuNC30LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y8g0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0LrRg9C70YzRgtGD0YDRiyAo0LMuINCc0L7RgdC60LLQsClcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LrQvtC80LzRg9C90LjQutCw0YLQuNCy0L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3Ri9GFINGB0L7RhtC40LDQu9GM0L3Qvi3Qs9GD0LzQsNC90LjRgtCw0YDQvdGL0YUg0YHQstGP0LfQtdC5XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINCT0LXQvdC10YDQsNC70YzQvdC+0Lkg0L/RgNC+0LrRg9GA0LDRgtGD0YDRiyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L3QtdC00LLQuNC20LjQvNC+0YHRgtC4INC4INGB0YLRgNC+0LjRgtC10LvRjNC90L7Qs9C+INCx0LjQt9C90LXRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGE0LjQu9C+0YHQvtGE0LjQuCwg0YLQtdC+0LvQvtCz0LjQuCDQuCDQuNGB0YLQvtGA0LjQuCDRgdCy0Y/RgtC+0LPQviDQpNC+0LzRi1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgtC10LDRgtGA0LDQu9GM0L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwINC40LwuINCfLtCcLiDQldGA0YjQvtCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y8sINGN0LrQvtC90L7QvNC40LrQuCwg0L/RgNCw0LLQsCDQuCDQuNGB0LrRg9GB0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0L7RhtC10L3QutC4INC4INC60L7QvdGB0LDQu9GC0LjQvdCz0LBcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INCz0YPQvNCw0L3QuNGC0LDRgNC90L4t0LvQuNC90LPQstC40YHRgtC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LjQvdC00YPRgdGC0YDQuNC4INGB0LXRgNCy0LjRgdCwXCJ9LHtcInRpdGxlXCI6XCLQm9C+0LHQvdC10L3RgdC60LjQuSDRhNC40LvQuNCw0Lsg0JzQvtGB0LrQvtCy0YHQutC+0LPQviDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0Y3QutC+0L3QvtC80LjQutC4LCDRgdGC0LDRgtC40YHRgtC40LrQuCDQuCDQuNC90YTQvtGA0LzQsNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCw0L3QsNC70LjRgtC40YfQtdGB0LrQvtC5INC/0YHQuNGF0L7Qu9C+0LPQuNC4INC4INC/0YHQuNGF0L7QsNC90LDQu9C40LfQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQu9C40L3Qs9Cy0LjRgdGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGA0LXQutC70LDQvNGLLCDRgtGD0YDQuNC30LzQsCwg0YjQvtGDLdCx0LjQt9C90LXRgdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQmNGB0LvQsNC80YHQutC40Lkg0KPQvdC40LLQtdGA0YHQuNGC0LXRgiAo0KPRh9GA0LXQttC00LXQvdC40LUpXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQvdCw0LvQvtCz0L7QstGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YLRgNCw0L3RgdC/0L7RgNGC0L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCINGB0L7QstGA0LXQvNC10L3QvdC+0LPQviDQtNC40LfQsNC50L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC90LXRgNCz0L7QsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0Lgg0Y3QvdC10YDQs9C+0YHQsdC10YDQtdC20LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LHQuNC30L3QtdGB0LAg0Lgg0LTQtdC70L7QstC+0LPQviDQsNC00LzQuNC90LjRgdGC0YDQuNGA0L7QstCw0L3QuNGPICjQmNCR0JTQkCkg0KDQvtGB0YHQuNC50YHQutC+0Lkg0LDQutCw0LTQtdC80LjQuCDQvdCw0YDQvtC00L3QvtCz0L4g0YXQvtC30Y/QudGB0YLQstCwINC4INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7QuSDRgdC70YPQttCx0Ysg0L/RgNC4INCf0YDQtdC30LjQtNC10L3RgtC1INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQtNC10LvQvtCy0L7QuSDQutCw0YDRjNC10YDRi1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YXRg9C00L7QttC10YHRgtCy0LXQvdC90L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y8g0Lgg0LjQvdGE0L7RgNC80LDRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LXQstGA0LXQudGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4LCDRhNC40L3QsNC90YHQvtCyINC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCS0L7QtdC90L3Ri9C5INGD0YfQtdCx0L3Qvi3QvdCw0YPRh9C90YvQuSDRhtC10L3RgtGAINCS0L7QtdC90L3Qvi3QstC+0LfQtNGD0YjQvdGL0YUg0YHQuNC7IMKr0JLQvtC10L3QvdC+LdCy0L7Qt9C00YPRiNC90LDRjyDQsNC60LDQtNC10LzQuNGPINC40LzQtdC90Lgg0L/RgNC+0YTQtdGB0YHQvtGA0LAg0J0u0JUuINCW0YPQutC+0LLRgdC60L7Qs9C+INC4INCuLtCQLiDQk9Cw0LPQsNGA0LjQvdCwwrtcIn0se1widGl0bGVcIjpcItCS0L7QtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0KDQsNC60LXRgtC90YvRhSDQstC+0LnRgdC6INGB0YLRgNCw0YLQtdCz0LjRh9C10YHQutC+0LPQviDQvdCw0LfQvdCw0YfQtdC90LjRjyDQuNC80LXQvdC4INCf0LXRgtGA0LAg0JLQtdC70LjQutC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0KHQstGP0YLQvi3QpNC40LvQsNGA0LXRgtC+0LLRgdC60LjQuSDQv9GA0LDQstC+0YHQu9Cw0LLQvdC+LdGF0YDQuNGB0YLQuNCw0L3RgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQktC+0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGC0YDQsNC00LjRhtC40L7QvdC90L7Qs9C+INC/0YDQuNC60LvQsNC00L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwICjQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40LvQuNCw0LspINCS0YvRgdGI0LXQuSDRiNC60L7Qu9GLINC90LDRgNC+0LTQvdGL0YUg0LjRgdC60YPRgdGB0YLQsiAo0LjQvdGB0YLQuNGC0YPRgtCwKVwifSx7XCJ0aXRsZVwiOlwi0KTQuNC90LDQvdGB0L7QstC+LdC/0YDQvtC80YvRiNC70LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQsdC40LfQvdC10YHQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgNGL0L3QvtGH0L3QvtC5INGN0LrQvtC90L7QvNC40LrQuCwg0YHQvtGG0LjQsNC70YzQvdC+0Lkg0L/QvtC70LjRgtC40LrQuCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDRg9C/0YDQsNCy0LvQtdC90LjRjyDQsiDQv9GA0L7QvNGL0YjQu9C10L3QvdC+0YHRgtC4XCJ9LHtcInRpdGxlXCI6XCLQktC+0LXQvdC90YvQuSDRg9GH0LXQsdC90L4t0L3QsNGD0YfQvdGL0Lkg0YbQtdC90YLRgCDQodGD0YXQvtC/0YPRgtC90YvRhSDQstC+0LnRgdC6IMKr0J7QsdGJ0LXQstC+0LnRgdC60L7QstCw0Y8g0LDQutCw0LTQtdC80LjRjyDQktC+0L7RgNGD0LbQtdC90L3Ri9GFINCh0LjQuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LjCu1wifSx7XCJ0aXRsZVwiOlwi0KHRgtC+0LvQuNGH0L3Ri9C5INCz0YPQvNCw0L3QuNGC0LDRgNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C+INGD0YfQtdGC0LAg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YDRg9GB0YHQutC+0LPQviDRgtC10LDRgtGA0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LPQvtGB0YLQuNC90LjRh9C90L7Qs9C+INC4INGC0YPRgNC40YHRgtC40YfQtdGB0LrQvtCz0L4g0LzQtdC90LXQtNC20LzQtdC90YLQsFwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCY0L3RgdGC0LjRgtGD0YIg0JTQuNC30LDQudC90LBcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCINC80L7QtNGLXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40LvQuNCw0Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0LzQtdC20LTRg9C90LDRgNC+0LTQvdC+0Lkg0LDQutCw0LTQtdC80LjQuCDRgtGD0YDQuNC30LzQsFwifSx7XCJ0aXRsZVwiOlwi0J/QvtCz0YDQsNC90LjRh9C90LDRjyDQsNC60LDQtNC10LzQuNGPINCk0LXQtNC10YDQsNC70YzQvdC+0Lkg0YHQu9GD0LbQsdGLINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPLCDQutC40L3QviDQuCDRgtC10LvQtdCy0LjQtNC10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC+0LUg0LLRi9GB0YjQtdC1INCy0L7QtdC90L3QvtC1INC60L7QvNCw0L3QtNC90L7QtSDRg9GH0LjQu9C40YnQtSAo0LLQvtC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgikgKNGE0LjQu9C40LDQuykg0JLQvtC10L3QvdC+0LPQviDRg9GH0LXQsdC90L4t0L3QsNGD0YfQvdC+0LPQviDRhtC10L3RgtGA0LAg0KHRg9GF0L7Qv9GD0YLQvdGL0YUg0LLQvtC50YHQuiAmcXVvdDvQntCx0YnQtdCy0L7QudGB0LrQvtCy0LDRjyDQsNC60LDQtNC10LzQuNGPINCS0L7QvtGA0YPQttC10L3QvdGL0YUg0KHQuNC7INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuCZxdW90O1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQvtGC0LrRgNGL0YLQvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10L3QtdC00LbQvNC10L3RgtCwLCDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0LjQvdC90L7QstCw0YbQuNC5XCJ9LHtcInRpdGxlXCI6XCLQntGB0YLQsNC90LrQuNC90YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRgtC10LvQtdCy0LjQtNC10L3QuNGPINC4INGA0LDQtNC40L7QstC10YnQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y8g0LIg0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0LUg0Lgg0L/RgNC+0LzRi9GI0LvQtdC90L3QvtGB0YLQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GB0LjRhdC+0LvQvtCz0LjQuFwifSx7XCJ0aXRsZVwiOlwi0J7RgtC60YDRi9GC0YvQuSDRgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0KHQu9Cw0LLRj9C90L4t0JPRgNC10LrQvi3Qm9Cw0YLQuNC90YHQutCw0Y8g0LDQutCw0LTQtdC80LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LDRgNGF0LjRgtC10LrRgtGD0YDQvdC+LdGB0YLRgNC+0LjRgtC10LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgdC+0YbQuNCw0LvRjNC90L4t0L/QtdC00LDQs9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQn9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC90LXQv9GA0LXRgNGL0LLQvdC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPINC4INGB0LXRgNCy0LjRgdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40LvQuNCw0Lsg0LDQstGC0L7QvdC+0LzQvdC+0LPQviDQvtCx0YDQsNC30L7QstCw0YLQtdC70YzQvdC+0LPQviDRg9GH0YDQtdC20LTQtdC90LjRjyDQm9C10L3QuNC90LPRgNCw0LTRgdC60L7Qs9C+INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDQuNC80LXQvdC4INCQLtChLiDQn9GD0YjQutC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JLRi9GB0YjQsNGPINGI0LrQvtC70LAg0YTQuNC90LDQvdGB0L7QsiDQuCDQvNC10L3QtdC00LbQvNC10L3RgtCwINCg0L7RgdGB0LjQudGB0LrQvtC5INCw0LrQsNC00LXQvNC40Lgg0L3QsNGA0L7QtNC90L7Qs9C+INGF0L7Qt9GP0LnRgdGC0LLQsCDQuCDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lkg0YHQu9GD0LbQsdGLINC/0YDQuCDQn9GA0LXQt9C40LTQtdC90YLQtSDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCh0L7QstGA0LXQvNC10L3QvdGL0Lkg0LzQvtGA0YHQutC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifV1cblxuICAgICAgZmFjdWx0eXMuaW5pdGlhbGl6ZSgpXG5cbiAgICAgIGlmIGZhY3VsdHkuaGFzQ2xhc3MgJ3R0LWlucHV0J1xuICAgICAgICBmYWN1bHR5LnR5cGVhaGVhZCgnZGVzdHJveScpXG5cbiAgICAgIGZhY3VsdHkudHlwZWFoZWFkXG4gICAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgICBtaW5MZW5ndGg6IDFcbiAgICAgICxcbiAgICAgICAgbmFtZTogJ2ZhY3VsdHlzJ1xuICAgICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgICBzb3VyY2U6IGZhY3VsdHlzLnR0QWRhcHRlcigpXG4gICAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgZWxzZVxuXG4gICAgICBmYWN1bHR5LnR5cGVhaGVhZCgnZGVzdHJveScpXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0YHQv9C40YHQutCwINGA0LDQt9C00LXQu9C+0LIg0LTQu9GPINC/0YDQtdC00LzQtdGC0LBcbiAgZ2V0U2VjdGlvbnM6IChpZCk9PlxuICAgIGNoYXB0ZXJzID0gWyfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQuNC5INCw0L3QsNC70LjQtycraWQsJ9GC0LXQvtGA0LjRjyDQstC10YDQvtGP0YLQvdC+0YHRgtC10LknK2lkLCfRgtC10L7RgNC10YLQuNGH0LXRgdC60LDRjyDQvNC10YXQsNC90LjQutCwJytpZCwn0YHQvtC/0YDQvtC80LDRgicraWQsJ9C80LDRgtC10LzQsNGC0Lgg0LvQvtCz0LjQutCwJytpZCwn0Y3QutC+0L3QvtC80LXRgtGA0LjQutCwJytpZCwn0LLRi9GB0YjQsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0LvQuNC90LXQudC90LDRjyDQsNC70LPQtdCx0YDQsCcraWQsJ9C00LjRhNGE0LXRgNC10L3RhtC40LDQu9GM0L3QsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9Cw0L3QsNC70LjRgtC40YfQtdGB0LrQsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutCw0Y8g0YTQuNC30LjQutCwJytpZCwn0LTQuNGE0YTQtdGA0LXQvdGG0LjQsNC70YzQvdGL0LUg0YPRgNCw0LLQvdC10L3QuNGPJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsCcraWQsJ9C70LjQvdC10LnQvdCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LTQuNGB0LrRgNC10YLQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtC+0L/QvtC70L7Qs9C40Y8nK2lkLCfRhNGD0L3QutGG0LjQvtC90LDQu9GM0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9C40L3RgtC10LPRgNCw0LvRjNC90YvQtSDRg9GA0LDQstC90LXQvdC40Y8nK2lkLCfRgtC10L7RgNC40Y8g0YfQuNGB0LXQuycraWQsJ9Cy0LXQutGC0L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfQotCk0JrQnycraWQsJ9GC0LXQvdC30L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfRhNC40L3QsNC90YHQvtCy0LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQsiDRh9Cw0YHRgtC90YvRhSDQv9GA0L7QuNC30LLQvtC00L3Ri9GFJytpZCwn0LDQutGC0YPQsNGA0L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLQtdC+0YDQuNGPINCz0YDQsNGE0L7QsicraWQsJ9C60L7QvNCx0LjQvdCw0YLQvtGA0LjQutCwJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQtSDQvNC+0LTQtdC70LgnK2lkLCfQv9GA0LjQutC70LDQtNC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0YDQuNCz0L7QvdC+0Lwt0LjRjycraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQvtC5INGE0LjQt9C40LrQuCcraWQsJ9GH0LjRgdC70LXQvdC90YvQtSDQvNC10YLQvtC00YsnK2lkLCfRgtC10L7RgNC40Y8g0L/RgNC40LHQu9C40LbQtdC90LjQuScraWQsJ9GC0LXQvtGA0LjRjyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4JytpZCwnLtGI0LrQvtC70YzQvdGL0Lkg0LrRg9GA0YEnK2lkLCfQvdCwINCw0L3Qs9C70LjQudGB0LrQvtC8INGP0LfRi9C60LUnK2lkLCfQsNC70LPQtdCx0YDQsCDQu9C+0LPQuNC60LgnK2lkLCfQstGL0YfQuNGB0LvQuNC80YvQtSDRhNGD0L3QutGG0LjQuCcraWQsJ9GC0LXQvtGA0LjRjyDQuNCz0YAnK2lkLCfQstCw0YDQuNCw0YbQuNC+0L3QvdC+0LUg0LjRgdGH0LjRgdC70LXQvdC40LUnK2lkLCfQvtC/0YLQuNC80LDQu9GM0L3QvtC1INGD0L/RgNCw0LLQu9C10L3QuNC1JytpZCwn0LzQtdGC0L7QtNGLINC+0L/RgtC40LzQuNC30LDRhtC40LgnK2lkLCfQu9C40L3QtdC50L3QvtC1INC/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC1JytpZCwn0LDQu9Cz0LXQsdGA0LAnK2lkLCfQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQvNC10YLQvtC00Ysg0L7Qv9GC0LjQvNCw0LvRjNC90YvRhSDRgNC10YjQtdC90LjQuScraWRdXG4gICAgc2VjdGlvbnMgPSBuZXcgQXJyYXlcbiAgICBzZWN0aW9uID0gbmV3IE9iamVjdFxuICAgIGlkID0gMFxuICAgIGZvciBjaGFwdGVyIGluIGNoYXB0ZXJzXG4gICAgICBzZWN0aW9uID0ge1xuICAgICAgICBpZCA6IGlkXG4gICAgICAgIHRpdGxlIDogY2hhcHRlclxuICAgICAgfVxuICAgICAgc2VjdGlvbnMucHVzaCBzZWN0aW9uXG4gICAgICBpZCsrXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQvtC/0L7Qu9C90LXQvdC40Lkg0LTQu9GPINGA0LDQt9C00LXQu9CwXG4gIGdldFN1YlNlY3Rpb25zOiAoaWQpPT5cbiAgICBjaGFwdGVycyA9IG5ldyBBcnJheSAn0J7Qk9CtICjQk9CY0JApJytpZCwgJ9Cf0L7QtNCz0L7RgtC+0LLQutCwINC6INC+0LvQuNC80L/QuNCw0LTQsNC8JytpZCwgJ9Cf0L7QtNCz0L7RgtC+0LLQutCwINC6INGN0LrQt9Cw0LzQtdC90LDQvCcraWRcbiAgICBzZWN0aW9ucyA9IG5ldyBBcnJheVxuICAgIHNlY3Rpb24gPSBuZXcgT2JqZWN0XG4gICAgdWlkID0gMFxuICAgIGZvciBjaGFwdGVyIGluIGNoYXB0ZXJzXG4gICAgICBzZWN0aW9ucy5wdXNoXG4gICAgICAgICdpZCcgOiB1aWRcbiAgICAgICAgJ3RpdGxlJyA6IGNoYXB0ZXJcbiAgICAgIHVpZCsrXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgbmV3RWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9lZHVjYXRpb24ucGFyZW50KCkuYmVmb3JlIEBlZHVjYXRpb25fc291cmNlKHsnaW5kZXgnIDogQGVkdWNhdGlvbl9jb3VudH0pXG4gICAgQGVkdWNhdGlvbl9jb3VudCsrXG4gICAgQHN0ZXA0LmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGVkdWNhdGlvbl9jb3VudD4xXG4gICAgICBAcmVtb3ZlX2VkdWNhdGlvbi5zaG93KClcblxuICAgICMg0JDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjQtSDQtNC70Y8g0LLRi9Cx0L7RgNCwINCz0L7RgNC+0LTQsCDQuCDQstGD0LfQsFxuICAgIEBhZGRIaW50KClcblxuICAjINCj0LTQsNC70LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgcmVtb3ZlRWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGVkdWNhdGlvbl9jb3VudC0tXG4gICAgJCgnLmVkdWNhdGlvbi13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBlZHVjYXRpb25fY291bnQ8MlxuICAgICAgQHJlbW92ZV9lZHVjYXRpb24uaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDQg0LogNSDRiNCw0LPRg1xuICBzdGVwNFN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwNC5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXA0LmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICBAc2Nyb2xsVG9WaWV3KEBzdGVwNC5maW5kKCcudWktc3RhdGUtZXJyb3I6ZXEoMCknKSlcbiAgICAgIEBzdGVwNC5maW5kKCcudWktc3RhdGUtZXJyb3I6ZXEoMCknKS5mb2N1cygpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAgICMg0J7RgtC/0YDQsNCy0LrQsCDQvdCwINGB0LXRgNCy0LXRgFxuICAgIGNvbnNvbGUubG9nIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJCgnLnBhbmVsIDppbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCkpKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiA0INC6IDMg0YjQsNCz0YNcbiAgc3RlcDRCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAzINC6IDQg0YjQsNCz0YNcbiAgc3RlcDNTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDMuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMy5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgQHNjcm9sbFRvVmlldyhAc3RlcDMuZmluZCgnLnVpLXN0YXRlLWVycm9yOmVxKDApJykpXG4gICAgICBAc3RlcDMuZmluZCgnLnVpLXN0YXRlLWVycm9yOmVxKDApJykuZm9jdXMoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAzINC6IDIg0YjQsNCz0YNcbiAgc3RlcDNCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C5INCw0LTRgNC10YFcbiAgbmV3QWRkcmVzczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfYWRkcmVzcy5wYXJlbnQoKS5iZWZvcmUgQGFkZHJlc3Nfc291cmNlKHsnaW5kZXgnIDogQGFkZHJlc3NfY291bnR9KVxuICAgIEBhZGRyZXNzX2NvdW50KytcbiAgICBAc3RlcDMuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBpZiBAYWRkcmVzc19jb3VudD4xXG4gICAgICBAcmVtb3ZlX2FkZHJlc3Muc2hvdygpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIHJlbW92ZUFkZHJlc3M6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkcmVzc19jb3VudC0tXG4gICAgJCgnLmFkcmVzcy13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBhZGRyZXNzX2NvdW50PDJcbiAgICAgIEByZW1vdmVfYWRkcmVzcy5oaWRlKClcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMiDQuiAzINGI0LDQs9GDXG4gIHN0ZXAyU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAyLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDIuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIEBzdGVwMi5maW5kKCcudWktc3RhdGUtZXJyb3I6ZXEoMCknKS5mb2N1cygpXG4gICAgICBAc2Nyb2xsVG9WaWV3KEBzdGVwMi5maW5kKCcudWktc3RhdGUtZXJyb3I6ZXEoMCknKSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMiDQuiAxINGI0LDQs9GDXG4gIHN0ZXAyQmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuXG4gICMg0JHQu9C+0LrQuNGA0L7QstCw0YLRjCDRhtC10L3RiyDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0YUg0YTQvtGA0LzQsNGC0L7QsiDQt9Cw0L3Rj9GC0LjQuVxuICBjaGVja0Zvcm1hdDogPT5cbiAgICBpbnB1dHMgPSBAZm9ybWF0cy5maW5kICdpbnB1dCdcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBlbGVtZW50cyA9IEBzdGVwMi5maW5kKCdpbnB1dC4nK2lucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1maWVsZCcpKVxuICAgICAgZm9yIGVsZW1lbnQgaW4gZWxlbWVudHNcbiAgICAgICAgcHJpY2UgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5zdWJkZXZpc2lvbicpXG4gICAgICAgIGlmIGlucHV0LmNoZWNrZWRcbiAgICAgICAgICBwcmljZS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcHJpY2UuYWRkQ2xhc3MoJ2hpZGUnKVxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndWktc3RhdGUtZXJyb3InKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0YDQsNC30LTQtdC70Ysg0L/RgNC10LTQvNC10YLQsFxuICBzdWJqZWN0U2VsZWN0ZWQ6IChldmVudCk9PlxuICAgIHNlbGVjdCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIHNlbGVjdC5yZW1vdmVDbGFzcyAndW5jaGFuZ2VkJ1xuICAgIGlkID0gc2VsZWN0LnZhbCgpXG5cbiAgICBsaW5lID0gc2VsZWN0LnBhcmVudHMoJy5saW5lJylcbiAgICBcbiAgICBzdWJzZWN0aW9ucyA9IEBnZXRTdWJTZWN0aW9ucyhpZClcblxuICAgIGhhbGZfbGVuZ3RoID0gTWF0aC5jZWlsKHN1YnNlY3Rpb25zLmxlbmd0aCAvIDIpXG4gICAgbGVmdFNpZGUgPSBzdWJzZWN0aW9ucy5zcGxpY2UoMCxoYWxmX2xlbmd0aClcblxuICAgIHNlY3Rpb25zID0gQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2Uoe1xuICAgICAgJ2luZGV4JyAgIDogQHNlY3Rpb25fY291bnRcbiAgICAgICdzZWN0aW9uJyA6IEBnZXRTZWN0aW9ucyhpZClcbiAgICAgICdjb2x1bW4xJyA6IGxlZnRTaWRlXG4gICAgICAnY29sdW1uMicgOiBzdWJzZWN0aW9uc1xuICAgICAgfSlcblxuICAgIEBzZWN0aW9uX2NvdW50KytcblxuICAgIG5leHQgPSBsaW5lLm5leHQoKVxuICAgIGlmIG5leHQuaGFzQ2xhc3MoJ3NlY3Rpb24nKVxuICAgICAgbmV4dC5yZXBsYWNlV2l0aCBzZWN0aW9uc1xuICAgIGVsc2VcbiAgICAgIGxpbmUuYWZ0ZXIgc2VjdGlvbnNcbiAgICBcbiAgICBAc3RlcDIuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuXG5cbiAgZ2V0U2VjdGlvbjogKGluZGV4KT0+XG4gICAgc2VsZWN0ID0gICQgJy5zdWJqLXdyYXBwZXIgLnNlY3Rpb246ZXEoJytpbmRleCsnKSBzZWxlY3QnXG4gICAgaWYgc2VsZWN0Lmxlbmd0aCA9PSAxXG4gICAgICByZXR1cm4gc2VsZWN0LnZhbCgpXG5cbiAgZ2V0QWRkOiAoaW5kZXgpPT5cbiAgICBjaGtib3hzID0gICQgJy5zdWJqLXdyYXBwZXIgLnNlY3Rpb246ZXEoJytpbmRleCsnKSAuc3ViLXNlY3Rpb24gaW5wdXRbbmFtZT1cImFkZGl0aW9uW11cIl06Y2hlY2tlZCdcbiAgICB2YWx1ZXMgPSBuZXcgQXJyYXlcbiAgICBmb3IgY2hrYm94IGluIGNoa2JveHNcbiAgICAgIHZhbHVlcy5wdXNoICQoY2hrYm94KS52YWwoKVxuICAgIHJldHVybiB2YWx1ZXNcbiAgICBcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQv9GA0LXQtNC80LXRglxuICBuZXdTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9zdWJqZWN0LnBhcmVudCgpLmJlZm9yZSBAc3ViamVjdF9zb3VyY2UoeydpbmRleCcgOiBAc3Vial9jb3VudH0pXG4gICAgQHN1YmpfY291bnQrK1xuICAgIFxuICAgIHdyYXBwZXIgPSBAYWRkX3N1YmplY3QucGFyZW50KCkucHJldigpXG4gICAgd3JhcHBlci5maW5kKCdzZWxlY3QnKS5vbiAnY2hhbmdlJywgQHN1YmplY3RTZWxlY3RlZFxuXG4gICAgQHN0ZXAyLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgQHN0ZXAyLmZpbmQoJy5taW4tdGltZScpLnRleHQgQGR1cmF0aW9uX3ZhbHVlLnZhbCgpXG4gICAgQGNoZWNrRm9ybWF0KClcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuICAgIFxuICAgIGlmIEBzdWJqX2NvdW50PjFcbiAgICAgIEByZW1vdmVfc3ViamVjdC5zaG93KClcblxuICAjINCj0LTQsNC70LjRgtGMINC/0YDQtdC00LzQtdGCXG4gIHJlbW92ZVN1YmplY3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3Vial9jb3VudC0tXG4gICAgJCgnLnN1Ymotd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAc3Vial9jb3VudDwyXG4gICAgICBAcmVtb3ZlX3N1YmplY3QuaGlkZSgpXG5cbiAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LHQu9C+0LrQvtCyINC90LAg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgdmFsaWRhdGU6IChpbnB1dCk9PlxuXG4gICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlICdkYXRhLWg1LWVycm9yaWQnXG4gICAgICBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1oNS1lcnJvcmlkJylcblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKVxuICAgICAgXG4gICAgICBpZiBpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMgJ3VuY2hhbmdlZCdcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCAndWktc3RhdGUtZXJyb3InXG5cbiAgICAgIGlmIGlucHV0LnZhbHVlID09IFwidW5jaGFuZ2VkXCJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCAndWktc3RhdGUtZXJyb3InXG5cbiAgICAgIGlmIGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkICd1aS1zdGF0ZS1lcnJvcidcblxuICAgIGlmIGlucHV0LmNsYXNzTGlzdC5jb250YWlucyAndWktc3RhdGUtZXJyb3InXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuXG4gICAgICBpbnB1dC5mb2N1cygpXG4gICAgICBAc2Nyb2xsVG9WaWV3KGlucHV0KVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgZWxzZVxuICAgICAgaWYgZXJyb3JcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgcmV0dXJuIHRydWVcblxuICAjINCf0LXRgNC10YXQvtC0INC60L4g0LLRgtC+0YDQvtC80YMg0YjQsNCz0YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBzdGVwMVN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMS5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAxLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICBAc3RlcDEuZmluZCgnLnVpLXN0YXRlLWVycm9yOmVxKDApJykuZm9jdXMoKVxuICAgICAgQHNjcm9sbFRvVmlldyhAc3RlcDEuZmluZCgnLnVpLXN0YXRlLWVycm9yOmVxKDApJykpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCf0YDQvtCy0LXRgNGP0LXQvCDQvNC+0LbQtdGCINC70Lgg0YHRg9GJ0LXRgdGC0LLQvtCy0LDRgtGMINGD0LrQsNC30LDQvdC90LDRjyDQtNCw0YLQsCwg0L3QsNC/0YDQuNC80LXRgCAzMSDRhNC10LLRgNCw0LvRjyDQuCDQuNGB0L/RgNCw0LLQu9GP0LXQvCDQsiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQutC4XG4gIGNoZWNrRGF0ZTogKGV2ZW50KT0+XG4gICAgZGF5ID0gcGFyc2VJbnQgQGRheS52YWwoKS50cmltKCksIDEwXG4gICAgXG4gICAgaWYgZGF5PDEgfHwgaXNOYU4oZGF5KVxuICAgICAgQGRheS52YWwgMVxuICAgICAgcmV0dXJuXG5cbiAgICBkYXlzID0gcGFyc2VJbnQgbW9tZW50KEB5ZWFyLnZhbCgpK1wiLVwiKyhwYXJzZUludChAbW9udGgudmFsKCksMTApKzEpLCBcIllZWVktTU1cIikuZGF5c0luTW9udGgoKSwgMTBcbiAgICBpZiBkYXk+ZGF5c1xuICAgICAgQGRheS52YWwgZGF5c1xuICAgIHJldHVyblxuXG4gICAgaWYgZGF5PjMxXG4gICAgICBAZGF5LnZhbCAzMVxuXG4gIHNjcm9sbFRvVmlldzogKGVsZW1lbnQpPT5cbiAgICBlbGVtZW50ID0gJCBlbGVtZW50XG4gICAgaWYgIWVsZW1lbnQuaXMgJzp2aXNpYmxlJ1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQubmV4dCgpXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogZWxlbWVudC5vZmZzZXQoKS50b3AgKyAncHgnfSlcblxuJChkb2N1bWVudCkucmVhZHkgLT5cbiAgbmV3IFBlcnNvbmFsRGF0YUFsbCgpXG5cblxuIl19