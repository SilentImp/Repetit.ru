var PersonalDataAll,
  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

PersonalDataAll = (function() {
  function PersonalDataAll() {
    this.checkDate = __bind(this.checkDate, this);
    this.avatarSelected = __bind(this.avatarSelected, this);
    this.removeAvatar = __bind(this.removeAvatar, this);
    this.drop = __bind(this.drop, this);
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
      this.step4.find('.ui-state-error:eq(0)').focus();
      return false;
    }
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    $('body').animate({
      scrollTop: 0
    }, '500');
    return console.log(JSON.parse(JSON.stringify($('.panel :input').serializeArray())));
  };

  PersonalDataAll.prototype.step4Back = function(event) {
    event.preventDefault();
    this.steps.find('.selected.step:last').removeClass('selected');
    this.current = this.current.removeClass('current').prev();
    this.current.addClass('current');
    return $('body').animate({
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
      this.step3.find('.ui-state-error:eq(0)').focus();
      return false;
    }
    this.steps.find('.selected.step:last').next().addClass('selected');
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    return $('body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.step3Back = function(event) {
    event.preventDefault();
    this.steps.find('.selected.step:last').removeClass('selected');
    this.current = this.current.removeClass('current').prev();
    this.current.addClass('current');
    return $('body').animate({
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
      return false;
    }
    this.steps.find('.selected.step:last').next().addClass('selected');
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    return $('body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.step2Back = function(event) {
    event.preventDefault();
    this.steps.find('.selected.step:last').removeClass('selected');
    this.current = this.current.removeClass('current').prev();
    this.current.addClass('current');
    return $('body').animate({
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
      return false;
    }
    this.steps.find('.selected.step:last').next().addClass('selected');
    this.current = this.current.removeClass('current').next();
    this.current.addClass('current');
    return $('body').animate({
      scrollTop: 0
    }, '500');
  };

  PersonalDataAll.prototype.droped = function(event) {
    event.preventDefault();
    return FileAPI.getDropFiles(event, function(files) {});
  };

  PersonalDataAll.prototype.over = function(over) {};

  PersonalDataAll.prototype.drop = function(files) {
    var reader;
    console.log(files);
    if (files.length) {
      reader = new FileReader();
      reader.onload = (function(_this) {
        return function(event) {
          var avatar, prev;
          _this.avatarTemplate.content.querySelector('img').src = event.target.result;
          avatar = document.importNode(_this.avatarTemplate.content, true);
          prev = _this.fileSelector.prev();
          if (prev.hasClass('current-avatar')) {
            prev.remove();
          }
          _this.fileSelector.before(avatar);
          return _this.fileSelector.prev().find('.close').on('click', _this.removeAvatar);
        };
      })(this);
      return reader.readAsDataURL(files[0]);
    }
  };

  PersonalDataAll.prototype.removeAvatar = function(event) {
    event.preventDefault();
    this.fileSelector.prev().remove();
    this.file.replaceWith(this.file.val('').clone(true));
    return this.file = this.step1.find('#registration-avatar');
  };

  PersonalDataAll.prototype.avatarSelected = function(event) {
    var ext, files, reader;
    files = FileAPI.getFiles(event);
    ext = files[0]['name'].substring(files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
    if (files[0] && (files[0].size <= FileAPI.MB) && (ext === "gif" || ext === "png" || ext === "jpeg" || ext === "jpg")) {
      reader = new FileReader();
      reader.onload = (function(_this) {
        return function(event) {
          var avatar, prev;
          _this.avatarTemplate.content.querySelector('img').src = event.target.result;
          avatar = document.importNode(_this.avatarTemplate.content, true);
          prev = _this.fileSelector.prev();
          if (prev.hasClass('current-avatar')) {
            prev.remove();
          }
          _this.fileSelector.before(avatar);
          return _this.fileSelector.prev().find('.close').on('click', _this.removeAvatar);
        };
      })(this);
      return reader.readAsDataURL(files[0]);
    } else {
      this.fileSelector.prev().remove();
      this.file.replaceWith(this.file.val('').clone(true));
      return this.file = this.step1.find('#registration-avatar');
    }
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

  return PersonalDataAll;

})();

$(document).ready(function() {
  return new PersonalDataAll();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDJDQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsNkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSx1REFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEseURBQUEsQ0FBQTtBQUFBLDZDQUFBLENBQUE7QUFBQSxRQUFBLGlCQUFBO0FBQUEsSUFBQSxJQUFDLENBQUEsTUFBRCxHQUFVLENBQUEsQ0FBRSxxQkFBRixDQUFWLENBQUE7QUFDQSxJQUFBLElBQUcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFSLEtBQWtCLENBQXJCO0FBQ0UsWUFBVSxJQUFBLEtBQUEsQ0FBTSxrQkFBTixDQUFWLENBREY7S0FEQTtBQUFBLElBSUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxRQUFiLENBSlQsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxRQUFiLENBTFYsQ0FBQTtBQUFBLElBTUEsSUFBQyxDQUFBLE9B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QVMsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQUEsQ0FBVSxDQUFDLElBQVgsQ0FBQSxDQUFULEVBQTRCLEVBQTVCLENBQU4sQ0FBQTtBQUVBLElBQUEsSUFBRyxHQUFBLEdBQUksQ0FBSixJQUFTLEtBQUEsQ0FBTSxHQUFOLENBQVo7QUFDRSxNQUFBLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFTLENBQVQsQ0FBQSxDQUFBO0FBQ0EsWUFBQSxDQUZGO0tBRkE7QUFBQSxJQU1BLElBQUEsR0FBTyxRQUFBLENBQVMsTUFBQSxDQUFPLElBQUMsQ0FBQSxJQUFJLENBQUMsR0FBTixDQUFBLENBQUEsR0FBWSxHQUFaLEdBQWdCLENBQUMsUUFBQSxDQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxDQUFBLENBQVQsRUFBc0IsRUFBdEIsQ0FBQSxHQUEwQixDQUEzQixDQUF2QixFQUFzRCxTQUF0RCxDQUFnRSxDQUFDLFdBQWpFLENBQUEsQ0FBVCxFQUF5RixFQUF6RixDQU5QLENBQUE7QUFPQSxJQUFBLElBQUcsR0FBQSxHQUFJLElBQVA7QUFDRSxNQUFBLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxDQURGO0tBUEE7QUFTQSxVQUFBLENBVEE7QUFXQSxJQUFBLElBQUcsR0FBQSxHQUFJLEVBQVA7YUFDRSxJQUFDLENBQUEsR0FBRyxDQUFDLEdBQUwsQ0FBUyxFQUFULEVBREY7S0FaUztFQUFBLENBbm9CWCxDQUFBOzt5QkFBQTs7SUFERixDQUFBOztBQUFBLENBbXBCQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO1NBQ1osSUFBQSxlQUFBLENBQUEsRUFEWTtBQUFBLENBQWxCLENBbnBCQSxDQUFBIiwiZmlsZSI6IlBlcnNvbmFsRGF0YUFsbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBlcnNvbmFsRGF0YUFsbFxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAd2lkZ2V0ID0gJCAnLnJlZ2lzdHJhdGlvbi1zdGVwcydcbiAgICBpZiBAd2lkZ2V0Lmxlbmd0aCA9PSAwXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9C90LUg0L3QsNC50LTQtdC9INCy0LjQtNC20LXRgicpXG5cbiAgICBAc3RlcHMgPSBAd2lkZ2V0LmZpbmQgJy5zdGVwcydcbiAgICBAcGFuZWxzID0gQHdpZGdldC5maW5kICcucGFuZWwnXG4gICAgQGN1cnJlbnQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5jdXJyZW50J1xuXG4gICAgQHN0ZXAxID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0xJ1xuICAgIEBzdGVwMiA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMidcbiAgICBAc3RlcDMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTMnXG4gICAgQHN0ZXA0ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC00J1xuICAgIEBzdGVwNSA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtNSdcblxuICAgICMg0J7QsdGJ0LXQtVxuICAgIHNlbGVjdCA9ICQgJ3NlbGVjdCdcbiAgICBpZiBzZWxlY3QubGVuZ3RoID4gMFxuICAgICAgc2VsZWN0LmNob3NlblxuICAgICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG5cbiAgICAkKCBcIi5wYW5lbFwiICkub24gXCJjaGFuZ2VcIiwgXCI6aW5wdXRcIiwgKGV2ZW50KS0+XG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzICd1bmNoYW5nZWQnXG5cbiAgICAjINCo0LDQsyAxXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMS5oNVZhbGlkYXRlKClcblxuICAgICMg0JfQsNCz0YDRg9C30LrQsCDQsNCy0LDRgtCw0YDQsFxuICAgIEBhdmFkcm9wID0gbmV3IERyb3B6b25lICQoJy5waG90bycpWzBdLFxuICAgICAgdXJsOiBcImh0dHA6Ly90ZXN0LnNpbGVudGltcC5pbmZvL1JlcGV0aXQucnUvdGVzdC5waHBcIlxuICAgICAgdXBsb2FkTXVsdGlwbGU6IGZhbHNlXG4gICAgICBtYXhGaWxlc2l6ZTogNVxuICAgICAgcGFyYW1OYW1lOiBcImF2YXRhclwiXG4gICAgICBtZXRob2Q6IFwicG9zdFwiXG4gICAgICBjbGlja2FibGU6IFwiLmZpbGUtc2VsZWN0b3JcIlxuICAgICAgdGh1bWJuYWlsV2lkdGg6IG51bGxcbiAgICAgIHRodW1ibmFpbEhlaWdodDogbnVsbFxuICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qXCJcbiAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBcIi5hdmF0YXJcIlxuICAgICAgcHJldmlld1RlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImN1cnJlbnQtYXZhdGFyXCI+PGltZyBkYXRhLWR6LXRodW1ibmFpbD1cImRhdGEtZHotdGh1bWJuYWlsXCIgLz48YSBocmVmPVwiI1wiIGRhdGEtZHotcmVtb3ZlPVwiZGF0YS1kei1yZW1vdmVcIiBjbGFzcz1cImNsb3NlXCI+PC9hPjwvZGl2PidcblxuICAgIEBhdmFkcm9wLm9uICdhZGRlZGZpbGUnLCAtPlxuICAgICAgJCgnLmZpbGUtc2VsZWN0b3InKS5oaWRlKClcblxuICAgIEBhdmFkcm9wLm9uICdyZW1vdmVkZmlsZScsIC0+XG4gICAgICAkKCcuZmlsZS1zZWxlY3RvcicpLnNob3coKVxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC+0L/Ri9GC0LBcbiAgICBleHAgPSAkICcjZXhwZXJpZW5jZSdcbiAgICBpZiBleHAubGVuZ3RoID4gMFxuICAgICAgZXhwLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgICAnbWF4JzogWzUwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcbiAgICAgIGV4cC5MaW5rKCdsb3dlcicpLnRvKCQoJyNleHBlcmllbmNlLXZhbHVlJykpXG5cbiAgICAjINCU0LDRgtCwINGA0L7QttC00LXQvdC40Y9cbiAgICBAbW9udGggPSBAc3RlcDEuZmluZCAnLm1vbnRoIHNlbGVjdCdcbiAgICBAeWVhciAgPSBAc3RlcDEuZmluZCAnLnllYXIgc2VsZWN0J1xuICAgIEBkYXkgICA9IEBzdGVwMS5maW5kICdpbnB1dC5kYXknXG4gICAgQGRheS5vbiAgICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQG1vbnRoLm9uICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQHllYXIub24gICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG5cbiAgICAjINCe0YLQv9GA0LDQstC60LAg0LTQsNC90L3Ri9GFINCo0LDQsyAxXG4gICAgQHN0ZXAxLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXAxU3VibWl0XG5cbiAgICAjINCo0LDQsyAyXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMi5oNVZhbGlkYXRlKClcblxuICAgICMg0J/QvtC70LfRg9C90L7QuiDQtNC70LjRgtC10LvRjNC90L7RgdGC0Lgg0LfQsNC90Y/RgtC40LlcbiAgICBAZHVyYXRpb25fdmFsdWUgPSAkKCcjZHVyYXRpb24tdmFsdWUnKVxuXG4gICAgdGltZSA9ICQgJyNkdXJhdGlvbidcbiAgICBpZiB0aW1lLmxlbmd0aCA+IDBcbiAgICAgIHRpbWUubm9VaVNsaWRlclxuICAgICAgICBzdGVwOiA1LFxuICAgICAgICBjb25uZWN0OiBcImxvd2VyXCIsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICByYW5nZTpcbiAgICAgICAgICAnbWluJzogWzMwXSxcbiAgICAgICAgICAnbWF4JzogWzE4MF1cbiAgICAgICAgZm9ybWF0OiB3TnVtYlxuICAgICAgICAgIGRlY2ltYWxzOiAwXG5cbiAgICAgIHRpbWUuTGluaygnbG93ZXInKS50byhAZHVyYXRpb25fdmFsdWUpXG4gICAgICB0aW1lLm9uICdjaGFuZ2UnLCAoZXZlbnQsIHVpKT0+XG4gICAgICAgICQoJ3N0cm9uZy5taW4tdGltZScpLnRleHQodWkpXG5cbiAgICAjINCk0L7RgNC80LDRgiDQt9Cw0L3Rj9GC0LjQuVxuICAgIEBmb3JtYXRzID0gQHN0ZXAyLmZpbmQgJy5sZXNzb25zLWZvcm1hdCdcbiAgICBAZm9ybWF0cy5maW5kKCdpbnB1dCcpLm9uICdjaGFuZ2UnLCBAY2hlY2tGb3JtYXRcbiAgICBAY2hlY2tGb3JtYXQoKVxuXG4gICAgIyDQlNC+0LHQsNCy0LrQsCDQv9GA0LXQtNC80LXRgtCwXG4gICAgQGFkZF9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5hZGQtc3ViamVjdCdcbiAgICBAc3Vial9jb3VudCA9IDBcbiAgICBAc3ViamVjdF9zb3VyY2UgPSAkKFwiI3N1YmotdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQHN1YmplY3Rfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NvdXJjZVxuICAgIEBhZGRfc3ViamVjdC5vbiAnY2xpY2snLCBAbmV3U3ViamVjdFxuICAgIEBhZGRfc3ViamVjdC50cmlnZ2VyICdjbGljaydcblxuICAgICMg0J/QvtC00YDQsNC30LTQtdC70Ysg0L/RgNC10LTQvNC10YLQsFxuICAgIEBzZWN0aW9uX2NvdW50ID0gMCBcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9ICQoXCIjc3Viai1zZWN0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlXG5cbiAgICAj0KPQtNCw0LvQtdC90LjQtSDQv9GA0LXQtNC80LXRgtCwXG4gICAgQHJlbW92ZV9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5yZW1vdmUtc3ViamVjdCdcbiAgICBAcmVtb3ZlX3N1YmplY3Qub24gJ2NsaWNrJywgQHJlbW92ZVN1YmplY3RcblxuICAgIEBzdGVwMi5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMlN1Ym1pdFxuICAgIEBzdGVwMi5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAyQmFja1xuXG5cbiAgICAjINCo0LDQsyAzXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMy5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQsNC00YDQtdGB0LBcbiAgICBAYWRkX2FkZHJlc3MgPSBAc3RlcDMuZmluZCAnLmFkZC1hZGRyZXNzJ1xuICAgIEBhZGRyZXNzX2NvdW50ID0gMFxuICAgIEBhZGRyZXNzX3NvdXJjZSA9ICQoXCIjYWRkcmVzcy10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAYWRkcmVzc19zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQGFkZHJlc3Nfc291cmNlXG4gICAgQGFkZF9hZGRyZXNzLm9uICdjbGljaycsIEBuZXdBZGRyZXNzXG4gICAgQGFkZF9hZGRyZXNzLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0LDQtNGA0LXRgdCwXG4gICAgQHJlbW92ZV9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5yZW1vdmUtYWRkcmVzcydcbiAgICBAcmVtb3ZlX2FkZHJlc3Mub24gJ2NsaWNrJywgQHJlbW92ZUFkZHJlc3NcblxuICAgIEBzdGVwMy5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwM1N1Ym1pdFxuICAgIEBzdGVwMy5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAzQmFja1xuXG5cbiAgICAjINCo0LDQsyA0XG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwNC5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQvtCx0YDQsNC30L7QstCw0L3QuNGPXG4gICAgQGFkZF9lZHVjYXRpb24gPSBAc3RlcDQuZmluZCAnLmFkZC1lZHVjYXRpb24nXG4gICAgQGVkdWNhdGlvbl9jb3VudCA9IDBcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9ICQoXCIjZWR1Y2F0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBlZHVjYXRpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBlZHVjYXRpb25fc291cmNlXG4gICAgQGFkZF9lZHVjYXRpb24ub24gJ2NsaWNrJywgQG5ld0VkdWNhdGlvblxuICAgIEBhZGRfZWR1Y2F0aW9uLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5yZW1vdmUtZWR1Y2F0aW9uJ1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uLm9uICdjbGljaycsIEByZW1vdmVFZHVjYXRpb25cblxuXG4gICAgQGNlcnRfbGlzdCA9IEBzdGVwNC5maW5kICcuc2VydGlmaWNhdC1saXN0J1xuICAgIEBjZXJpZmljYXRlc19jb3VudCA9IDBcbiAgICBAc2VydGlmaWNhdHMgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXRzJ1xuXG4gICAgQHNlcnRpZmljYXRzLmRyb3B6b25lXG4gICAgICB1cmw6IFwiaHR0cDovL3Rlc3Quc2lsZW50aW1wLmluZm8vUmVwZXRpdC5ydS90ZXN0LnBocFwiXG4gICAgICB1cGxvYWRNdWx0aXBsZTogdHJ1ZVxuICAgICAgbWF4RmlsZXNpemU6IDVcbiAgICAgIHBhcmFtTmFtZTogXCJjZXJ0aWZpY2F0c1wiXG4gICAgICBtZXRob2Q6IFwicG9zdFwiXG4gICAgICBwcmV2aWV3c0NvbnRhaW5lcjogXCIuc2VydGlmaWNhdC1saXN0XCJcbiAgICAgIGNsaWNrYWJsZTogXCIuYWRkLXNlcnRpZmljYXQgLmJ1dHRvblwiXG4gICAgICB0aHVtYm5haWxXaWR0aDogbnVsbFxuICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBudWxsXG4gICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLyosYXBwbGljYXRpb24vcGRmXCJcbiAgICAgIHByZXZpZXdUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJzZXJ0aWZpY2F0IGR6LXByZXZpZXcgZHotZmlsZS1wcmV2aWV3XCI+PGltZyBkYXRhLWR6LXRodW1ibmFpbD1cImRhdGEtZHotdGh1bWJuYWlsXCIgLz48YSBocmVmPVwiI1wiIGRhdGEtZHotcmVtb3ZlPVwiZGF0YS1kei1yZW1vdmVcIiBjbGFzcz1cInJlbW92ZVwiPjwvYT48dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRzW11cIiBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LXigKZcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPjwvZGl2PidcblxuICAgIEBzdGVwNC5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwNFN1Ym1pdFxuICAgIEBzdGVwNC5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXA0QmFja1xuXG4gIGFkZEhpbnQ6ID0+XG5cbiAgICAjIGxvY2F0aW9ucyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgIyAgIGRhdHVtVG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMub2JqLndoaXRlc3BhY2UoXCJjaXR5XCIpLFxuICAgICMgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgIyAgIHByZWZldGNoOiBcImh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzIwODEwNzcyL2NpdHlzLmpzb25cIlxuICAgIFxuICAgIGxvY2F0aW9ucyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgICBkYXR1bVRva2VuaXplcjogKGRhdGEpLT5cbiAgICAgICAgcmV0dXJuIEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlKGRhdGEudGl0bGUpXG4gICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICBsaW1pdDogNjAwXG4gICAgICBsb2NhbDogW3tcInRpdGxlXCI6XCLQnNC+0YHQutCy0LBcIn0se1widGl0bGVcIjpcItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCJ9LHtcInRpdGxlXCI6XCLQkNCx0LDQutCw0L1cIn0se1widGl0bGVcIjpcItCQ0L3QsNC00YvRgNGMXCJ9LHtcInRpdGxlXCI6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkNGB0YLRgNCw0YXQsNC90YxcIn0se1widGl0bGVcIjpcItCR0LDRgNC90LDRg9C7XCJ9LHtcInRpdGxlXCI6XCLQkdC10LvQs9C+0YDQvtC0XCJ9LHtcInRpdGxlXCI6XCLQkdC40YDQvtCx0LjQtNC20LDQvVwifSx7XCJ0aXRsZVwiOlwi0JHQu9Cw0LPQvtCy0LXRidC10L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdGA0Y/QvdGB0LpcIn0se1widGl0bGVcIjpcItCS0LXQu9C40LrQuNC5INCd0L7QstCz0L7RgNC+0LRcIn0se1widGl0bGVcIjpcItCS0LvQsNC00LjQstC+0YHRgtC+0LpcIn0se1widGl0bGVcIjpcItCS0LvQsNC00LjQutCw0LLQutCw0LdcIn0se1widGl0bGVcIjpcItCS0LvQsNC00LjQvNC40YBcIn0se1widGl0bGVcIjpcItCS0L7Qu9Cz0L7Qs9GA0LDQtFwifSx7XCJ0aXRsZVwiOlwi0JLQvtC70L7Qs9C00LBcIn0se1widGl0bGVcIjpcItCS0L7RgNC+0L3QtdC2XCJ9LHtcInRpdGxlXCI6XCLQk9C+0YDQvdC+LdCQ0LvRgtCw0LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQk9GA0L7Qt9C90YvQuVwifSx7XCJ0aXRsZVwiOlwi0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzXCJ9LHtcInRpdGxlXCI6XCLQmNCy0LDQvdC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JjQttC10LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmdC+0YjQutCw0YAt0J7Qu9CwXCJ9LHtcInRpdGxlXCI6XCLQmNGA0LrRg9GC0YHQulwifSx7XCJ0aXRsZVwiOlwi0JrQsNC30LDQvdGMXCJ9LHtcInRpdGxlXCI6XCLQmtCw0LvQuNC90LjQvdCz0YDQsNC0XCJ9LHtcInRpdGxlXCI6XCLQmtCw0LvRg9Cz0LBcIn0se1widGl0bGVcIjpcItCa0LXQvNC10YDQvtCy0L5cIn0se1widGl0bGVcIjpcItCa0LjRgNC+0LJcIn0se1widGl0bGVcIjpcItCa0L7RgdGC0YDQvtC80LBcIn0se1widGl0bGVcIjpcItCa0YDQsNGB0L3QvtC00LDRgFwifSx7XCJ0aXRsZVwiOlwi0JrRgNCw0YHQvdC+0Y/RgNGB0LpcIn0se1widGl0bGVcIjpcItCa0YPRgNCz0LDQvVwifSx7XCJ0aXRsZVwiOlwi0JrRg9GA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JrRi9C30YvQu1wifSx7XCJ0aXRsZVwiOlwi0JvQuNC/0LXRhtC6XCJ9LHtcInRpdGxlXCI6XCLQnNCw0LPQsNC00LDQvVwifSx7XCJ0aXRsZVwiOlwi0J3QsNC30YDQsNC90YxcIn0se1widGl0bGVcIjpcItCc0LDQudC60L7Qv1wifSx7XCJ0aXRsZVwiOlwi0JzQsNGF0LDRh9C60LDQu9CwXCJ9LHtcInRpdGxlXCI6XCLQnNGD0YDQvNCw0L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQndCw0LvRjNGH0LjQulwifSx7XCJ0aXRsZVwiOlwi0J3QsNGA0YzRj9C9LdCc0LDRgFwifSx7XCJ0aXRsZVwiOlwi0J3QuNC20L3QuNC5INCd0L7QstCz0L7RgNC+0LRcIn0se1widGl0bGVcIjpcItCd0L7QstC+0YHQuNCx0LjRgNGB0LpcIn0se1widGl0bGVcIjpcItCe0LzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQntGA0ZHQu1wifSx7XCJ0aXRsZVwiOlwi0J7RgNC10L3QsdGD0YDQs1wifSx7XCJ0aXRsZVwiOlwi0J/QtdC90LfQsFwifSx7XCJ0aXRsZVwiOlwi0J/QtdGA0LzRjFwifSx7XCJ0aXRsZVwiOlwi0J/QtdGC0YDQvtC30LDQstC+0LTRgdC6XCJ9LHtcInRpdGxlXCI6XCLQn9C10YLRgNC+0L/QsNCy0LvQvtCy0YHQui3QmtCw0LzRh9Cw0YLRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0J/RgdC60L7QslwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YNcIn0se1widGl0bGVcIjpcItCg0Y/Qt9Cw0L3RjFwifSx7XCJ0aXRsZVwiOlwi0KHQsNC70LXRhdCw0YDQtFwifSx7XCJ0aXRsZVwiOlwi0KHQsNC80LDRgNCwXCJ9LHtcInRpdGxlXCI6XCLQodCw0YDQsNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0KHQsNGA0LDRgtC+0LJcIn0se1widGl0bGVcIjpcItCh0LzQvtC70LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCh0YLQsNCy0YDQvtC/0L7Qu9GMXCJ9LHtcInRpdGxlXCI6XCLQodGL0LrRgtGL0LLQutCw0YBcIn0se1widGl0bGVcIjpcItCi0LDQvNCx0L7QslwifSx7XCJ0aXRsZVwiOlwi0KLQstC10YDRjFwifSx7XCJ0aXRsZVwiOlwi0KLQvtC80YHQulwifSx7XCJ0aXRsZVwiOlwi0KLRg9C70LBcIn0se1widGl0bGVcIjpcItCi0Y7QvNC10L3RjFwifSx7XCJ0aXRsZVwiOlwi0KPQu9Cw0L0t0KPQtNGNXCJ9LHtcInRpdGxlXCI6XCLQo9C70YzRj9C90L7QstGB0LpcIn0se1widGl0bGVcIjpcItCj0YTQsFwifSx7XCJ0aXRsZVwiOlwi0KXQsNCx0LDRgNC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQpdCw0L3RgtGLLdCc0LDQvdGB0LjQudGB0LpcIn0se1widGl0bGVcIjpcItCn0LXQsdC+0LrRgdCw0YDRi1wifSx7XCJ0aXRsZVwiOlwi0KfQtdC70Y/QsdC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQp9C10YDQutC10YHRgdC6XCJ9LHtcInRpdGxlXCI6XCLQp9C40YLQsFwifSx7XCJ0aXRsZVwiOlwi0K3Qu9C40YHRgtCwXCJ9LHtcInRpdGxlXCI6XCLQrtC20L3Qvi3QodCw0YXQsNC70LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCv0LrRg9GC0YHQulwifSx7XCJ0aXRsZVwiOlwi0K/RgNC+0YHQu9Cw0LLQu9GMXCJ9LHtcInRpdGxlXCI6XCLQp9C10YDQtdC/0L7QstC10YZcIn0se1widGl0bGVcIjpcItCQ0LHQtNGD0LvQuNC90L5cIn0se1widGl0bGVcIjpcItCQ0LPQuNC90YHQutC+0LVcIn0se1widGl0bGVcIjpcItCR0LXQu9C+0LrRg9GA0LjRhdCwXCJ9LHtcInRpdGxlXCI6XCLQkdC40LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtCw0LvRgtCw0LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQoNGD0LHRhtC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQodC70LDQstCz0L7RgNC+0LRcIn0se1widGl0bGVcIjpcItCh0LLQvtCx0L7QtNC90YvQuVwifSx7XCJ0aXRsZVwiOlwi0KLRi9C90LTQsFwifSx7XCJ0aXRsZVwiOlwi0JLQtdC70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtC+0YDRj9C20LzQsFwifSx7XCJ0aXRsZVwiOlwi0JrQvtGC0LvQsNGBXCJ9LHtcInRpdGxlXCI6XCLQodC10LLQtdGA0L7QtNCy0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCQ0YXRgtGD0LHQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JfQvdCw0LzQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JDQu9C10LrRgdC10LXQstC60LBcIn0se1widGl0bGVcIjpcItCT0YPQsdC60LjQvVwifSx7XCJ0aXRsZVwiOlwi0KHRgtCw0YDRi9C5INCe0YHQutC+0LtcIn0se1widGl0bGVcIjpcItCU0Y/RgtGM0LrQvtCy0L5cIn0se1widGl0bGVcIjpcItCa0LDRgNCw0YfQtdCyXCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtC30YvRgNGM0LrQvtCyXCJ9LHtcInRpdGxlXCI6XCLQo9C90LXRh9CwXCJ9LHtcInRpdGxlXCI6XCLQkNC70LXQutGB0LDQvdC00YDQvtCyXCJ9LHtcInRpdGxlXCI6XCLQk9GD0YHRjC3QpdGA0YPRgdGC0LDQu9GM0L3Ri9C5XCJ9LHtcInRpdGxlXCI6XCLQmtC+0LLRgNC+0LJcIn0se1widGl0bGVcIjpcItCc0YPRgNC+0LxcIn0se1widGl0bGVcIjpcItCf0L7QutGA0L7QslwifSx7XCJ0aXRsZVwiOlwi0JHRi9C60L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQktC+0LvQttGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmtCw0LzRi9GI0LjQvVwifSx7XCJ0aXRsZVwiOlwi0JzQuNGF0LDQudC70L7QstC60LBcIn0se1widGl0bGVcIjpcItCj0YDRjtC/0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCn0LXRgNC10L/QvtCy0LXRhlwifSx7XCJ0aXRsZVwiOlwi0JHQvtGA0LjRgdC+0LPQu9C10LHRgdC6XCJ9LHtcInRpdGxlXCI6XCLQm9C40YHQutC4XCJ9LHtcInRpdGxlXCI6XCLQmtC40L3QtdGI0LzQsFwifSx7XCJ0aXRsZVwiOlwi0KjRg9GPXCJ9LHtcInRpdGxlXCI6XCLQkNC90LPQsNGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JHRgNCw0YLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdC+0YXQsNC9XCJ9LHtcInRpdGxlXCI6XCLQo9GB0L7Qu9GM0LUt0KHQuNCx0LjRgNGB0LrQvtC1XCJ9LHtcInRpdGxlXCI6XCLQo9GB0YLRjC3QmNC70LjQvNGB0LpcIn0se1widGl0bGVcIjpcItCf0L7Qu9C10YHRgdC6XCJ9LHtcInRpdGxlXCI6XCLQodC+0LLQtdGC0YHQulwifSx7XCJ0aXRsZVwiOlwi0KfQtdGA0L3Rj9GF0L7QstGB0LpcIn0se1widGl0bGVcIjpcItCR0LDQu9Cw0LHQsNC90L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQmtC40YDQvtCyXCJ9LHtcInRpdGxlXCI6XCLQntCx0L3QuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JrQsNGA0LDRh9Cw0LXQstGB0LpcIn0se1widGl0bGVcIjpcItCj0YfQutC10LrQtdC9XCJ9LHtcInRpdGxlXCI6XCLQkNC90LbQtdGA0L4t0KHRg9C00LbQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JHQtdC70L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQmtC40YHQtdC70LXQstGB0LpcIn0se1widGl0bGVcIjpcItCb0LXQvdC40L3RgdC6LdCa0YPQt9C90LXRhtC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9GA0LXRh9C10L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtC60YPQt9C90LXRhtC6XCJ9LHtcInRpdGxlXCI6XCLQntGB0LjQvdC90LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQn9GA0L7QutC+0L/RjNC10LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQotCw0LnQs9CwXCJ9LHtcInRpdGxlXCI6XCLQotCw0YjRgtCw0LPQvtC7XCJ9LHtcInRpdGxlXCI6XCLQrtGA0LPQsFwifSx7XCJ0aXRsZVwiOlwi0JLRj9GC0YHQutC40LUg0J/QvtC70Y/QvdGLXCJ9LHtcInRpdGxlXCI6XCLQl9C90LDQvNC10L3QutCwXCJ9LHtcInRpdGxlXCI6XCLQmtC40YDQvtCy0L4t0KfQtdC/0LXRhtC6XCJ9LHtcInRpdGxlXCI6XCLQmtC+0YLQtdC70YzQvdC40YdcIn0se1widGl0bGVcIjpcItCd0L7RgNC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQodC70L7QsdC+0LTRgdC60L7QuVwifSx7XCJ0aXRsZVwiOlwi0JrQsNGA0LDQstCw0LXQstC+XCJ9LHtcInRpdGxlXCI6XCLQqNCw0YDRjNGPXCJ9LHtcInRpdGxlXCI6XCLQkNC90LDQv9CwXCJ9LHtcInRpdGxlXCI6XCLQkNGA0LzQsNCy0LjRgFwifSx7XCJ0aXRsZVwiOlwi0JHQtdC70L7RgNC10YfQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JPQtdC70LXQvdC00LbQuNC6XCJ9LHtcInRpdGxlXCI6XCLQk9C+0YDRj9GH0LjQuSDQmtC70Y7Rh1wifSx7XCJ0aXRsZVwiOlwi0JPRg9C70YzQutC10LLQuNGH0LhcIn0se1widGl0bGVcIjpcItCV0LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtC+0YDQtdC90L7QstGB0LpcIn0se1widGl0bGVcIjpcItCa0YDQvtC/0L7RgtC60LjQvVwifSx7XCJ0aXRsZVwiOlwi0JrRg9GJ0LXQstGB0LrQsNGPXCJ9LHtcInRpdGxlXCI6XCLQm9Cw0LHQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JvQtdC90LjQvdCz0YDQsNC00YHQutCw0Y9cIn0se1widGl0bGVcIjpcItCd0L7QstC+0YDQvtGB0YHQuNC50YHQulwifSx7XCJ0aXRsZVwiOlwi0J7RgtGA0LDQtNC90LDRj1wifSx7XCJ0aXRsZVwiOlwi0J/QsNCy0LvQvtCy0YHQutCw0Y9cIn0se1widGl0bGVcIjpcItCh0LvQsNCy0Y/QvdGB0Lot0L3QsC3QmtGD0LHQsNC90LhcIn0se1widGl0bGVcIjpcItCh0L7Rh9C4XCJ9LHtcInRpdGxlXCI6XCLQotC40YXQvtGA0LXRhtC6XCJ9LHtcInRpdGxlXCI6XCLQotGD0LDQv9GB0LVcIn0se1widGl0bGVcIjpcItCj0YHRgtGMLdCb0LDQsdC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQkNGH0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCW0LXQu9C10LfQvdC+0LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JfQtdC70LXQvdC+0LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JrQsNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JvQtdGB0L7RgdC40LHQuNGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JzQuNC90YPRgdC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQndC+0YDQuNC70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQqNCw0YDRi9C/0L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQm9C10YHQvdC40LrQvtCy0L5cIn0se1widGl0bGVcIjpcItCo0LDQtNGA0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCW0LXQu9C10LfQvdC+0LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JvRjNCz0L7QslwifSx7XCJ0aXRsZVwiOlwi0KDRi9C70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQodGD0LTQttCwXCJ9LHtcInRpdGxlXCI6XCLQkdC+0LrRgdC40YLQvtCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCS0L7Qu9GF0L7QslwifSx7XCJ0aXRsZVwiOlwi0JLRgdC10LLQvtC70LbRgdC6XCJ9LHtcInRpdGxlXCI6XCLQktGL0LHQvtGA0LNcIn0se1widGl0bGVcIjpcItCb0YPQs9CwXCJ9LHtcInRpdGxlXCI6XCLQk9Cw0YLRh9C40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JjQstCw0L3Qs9C+0YDQvtC0XCJ9LHtcInRpdGxlXCI6XCLQmtC40L3Qs9C40YHQtdC/0L9cIn0se1widGl0bGVcIjpcItCa0LjRgNC40YjQuFwifSx7XCJ0aXRsZVwiOlwi0J/QvtC00L/QvtGA0L7QttGM0LVcIn0se1widGl0bGVcIjpcItCh0LjQstC10YDRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0KHQu9Cw0L3RhtGLXCJ9LHtcInRpdGxlXCI6XCLQodC+0YHQvdC+0LLRi9C5INCx0L7RgFwifSx7XCJ0aXRsZVwiOlwi0KLQuNGF0LLQuNC9XCJ9LHtcInRpdGxlXCI6XCLQldC70LXRhlwifSx7XCJ0aXRsZVwiOlwi0JfQtdC70LXQvdC+0LPRgNCw0LRcIn0se1widGl0bGVcIjpcItCR0LDQu9Cw0YjQuNGF0LBcIn0se1widGl0bGVcIjpcItCR0LDRgNCy0LjRhdCwXCJ9LHtcInRpdGxlXCI6XCLQkdC+0LvRjNGI0LjQtSDQktGP0LfRkdC80YtcIn0se1widGl0bGVcIjpcItCR0YDQvtC90L3QuNGG0YtcIn0se1widGl0bGVcIjpcItCS0LjQtNC90L7QtVwifSx7XCJ0aXRsZVwiOlwi0JLQvtC70L7QutC+0LvQsNC80YHQulwifSx7XCJ0aXRsZVwiOlwi0JLQvtGB0LrRgNC10YHQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JPQvtC70LjRhtGL0L3QvlwifSx7XCJ0aXRsZVwiOlwi0KnRkdC70LrQvtCy0L5cIn0se1widGl0bGVcIjpcItCa0YPQsdC40L3QutCwXCJ9LHtcInRpdGxlXCI6XCLQlNC10LTQvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JTQt9C10YDQttC40L3RgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0JTQvNC40YLRgNC+0LJcIn0se1widGl0bGVcIjpcItCU0L7Qu9Cz0L7Qv9GA0YPQtNC90YvQuVwifSx7XCJ0aXRsZVwiOlwi0JTQvtC80L7QtNC10LTQvtCy0L5cIn0se1widGl0bGVcIjpcItCU0YPQsdC90LBcIn0se1widGl0bGVcIjpcItCV0LPQvtGA0YzQtdCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JbQtdC70LXQt9C90L7QtNC+0YDQvtC20L3Ri9C5XCJ9LHtcInRpdGxlXCI6XCLQltGD0LrQvtCy0YHQutC40LlcIn0se1widGl0bGVcIjpcItCY0LLQsNC90YLQtdC10LLQutCwXCJ9LHtcInRpdGxlXCI6XCLQmtCw0YjQuNGA0LBcIn0se1widGl0bGVcIjpcItCa0LvQuNC9XCJ9LHtcInRpdGxlXCI6XCLQmtC+0LrQvtGI0LrQuNC90L5cIn0se1widGl0bGVcIjpcItCa0L7Qu9C+0LzQvdCwXCJ9LHtcInRpdGxlXCI6XCLQmtC+0YDQvtC70ZHQslwifSx7XCJ0aXRsZVwiOlwi0JrQvtGC0LXQu9GM0L3QuNC60LhcIn0se1widGl0bGVcIjpcItCa0YDQsNGB0L3QvtCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCa0YDQsNGB0L3QvtC30L3QsNC80LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCb0Y7QsdC10YDRhtGLXCJ9LHtcInRpdGxlXCI6XCLQnNCw0LvQsNGF0L7QstC60LBcIn0se1widGl0bGVcIjpcItCc0L7QttCw0LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQp9C10LvRjtGB0LrQuNC90YHQutC40LlcIn0se1widGl0bGVcIjpcItCc0YvRgtC40YnQuFwifSx7XCJ0aXRsZVwiOlwi0J3QsNGA0L4t0KTQvtC80LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCd0L7Qs9C40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQntC00LjQvdGG0L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQntGA0LXRhdC+0LLQvi3Ql9GD0LXQstC+XCJ9LHtcInRpdGxlXCI6XCLQn9Cw0LLQu9C+0LLRgdC60LjQuSDQn9C+0YHQsNC0XCJ9LHtcInRpdGxlXCI6XCLQn9C+0LTQvtC70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQn9GA0L7RgtCy0LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQn9GD0YjQutC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0J/Rg9GJ0LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQoNCw0LTRg9C20L3Ri9C5XCJ9LHtcInRpdGxlXCI6XCLQoNCw0LzQtdC90YHQutC+0LVcIn0se1widGl0bGVcIjpcItCg0LXRg9GC0L7QslwifSx7XCJ0aXRsZVwiOlwi0KDRg9C30LBcIn0se1widGl0bGVcIjpcItCh0YLQsNGA0L7RgtC10YDRj9C10LLQvlwifSx7XCJ0aXRsZVwiOlwi0KHQtdGA0LPQuNC10LIg0J/QvtGB0LDQtFwifSx7XCJ0aXRsZVwiOlwi0KHQtdGA0L/Rg9GF0L7QslwifSx7XCJ0aXRsZVwiOlwi0KHQvtC70L3QtdGH0L3QvtCz0L7RgNGB0LpcIn0se1widGl0bGVcIjpcItCh0YLRg9C/0LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQodGF0L7QtNC90Y9cIn0se1widGl0bGVcIjpcItCi0YPRh9C60L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQpNGA0Y/Qt9C40L3QvlwifSx7XCJ0aXRsZVwiOlwi0KXQuNC80LrQuFwifSx7XCJ0aXRsZVwiOlwi0KfQtdGA0LrQuNC30L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQp9C10YXQvtCyXCJ9LHtcInRpdGxlXCI6XCLQqNCw0YLRg9GA0LBcIn0se1widGl0bGVcIjpcItCt0LvQtdC60YLRgNC+0YHRgtCw0LvRjFwifSx7XCJ0aXRsZVwiOlwi0K7QsdC40LvQtdC50L3Ri9C5XCJ9LHtcInRpdGxlXCI6XCLQkNC/0LDRgtC40YLRi1wifSx7XCJ0aXRsZVwiOlwi0JrQuNGA0L7QstGB0LpcIn0se1widGl0bGVcIjpcItCQ0YDQt9Cw0LzQsNGBXCJ9LHtcInRpdGxlXCI6XCLQktGL0LrRgdCwXCJ9LHtcInRpdGxlXCI6XCLQlNC30LXRgNC20LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCX0LDQstC+0LvQttGM0LVcIn0se1widGl0bGVcIjpcItCa0L3Rj9Cz0LjQvdC40L3QvlwifSx7XCJ0aXRsZVwiOlwi0JrRgdGC0L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQmtGD0LvQtdCx0LDQutC4XCJ9LHtcInRpdGxlXCI6XCLQn9Cw0LLQu9C+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0J/QtdGA0LXQstC+0LdcIn0se1widGl0bGVcIjpcItCh0LDRgNC+0LJcIn0se1widGl0bGVcIjpcItCh0LXRgNCz0LDRh1wifSx7XCJ0aXRsZVwiOlwi0KjQsNGI0YPQvdGM0Y9cIn0se1widGl0bGVcIjpcItCR0L7RgNC+0LLQvtGH0LhcIn0se1widGl0bGVcIjpcItCh0YLQsNGA0LDRjyDQoNGD0YHRgdCwXCJ9LHtcInRpdGxlXCI6XCLQkdC10YDQtNGB0LpcIn0se1widGl0bGVcIjpcItCY0YHQutC40YLQuNC8XCJ9LHtcInRpdGxlXCI6XCLQmtGD0LnQsdGL0YjQtdCyXCJ9LHtcInRpdGxlXCI6XCLQm9C40L3RkdCy0L5cIn0se1widGl0bGVcIjpcItCi0LDRgNCwXCJ9LHtcInRpdGxlXCI6XCLQkNC60LHRg9C70LDQulwifSx7XCJ0aXRsZVwiOlwi0JHRg9Cz0YPRgNGD0YHQu9Cw0L1cIn0se1widGl0bGVcIjpcItCR0YPQt9GD0LvRg9C6XCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtGC0YDQvtC40YbQulwifSx7XCJ0aXRsZVwiOlwi0J7RgNGB0LpcIn0se1widGl0bGVcIjpcItCb0LjQstC90YtcIn0se1widGl0bGVcIjpcItCc0YbQtdC90YHQulwifSx7XCJ0aXRsZVwiOlwi0JrRg9C30L3QtdGG0LpcIn0se1widGl0bGVcIjpcItCd0LjQttC90LjQuSDQm9C+0LzQvtCyXCJ9LHtcInRpdGxlXCI6XCLQodC10YDQtNC+0LHRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdC10YDQtdC30L3QuNC60LhcIn0se1widGl0bGVcIjpcItCa0YPQtNGL0LzQutCw0YBcIn0se1widGl0bGVcIjpcItCb0YvRgdGM0LLQsFwifSx7XCJ0aXRsZVwiOlwi0KHQvtC70LjQutCw0LzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQp9Cw0LnQutC+0LLRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0KfRg9GB0L7QstC+0LlcIn0se1widGl0bGVcIjpcItCQ0YDRgdC10L3RjNC10LJcIn0se1widGl0bGVcIjpcItCQ0YDRgtC10LxcIn0se1widGl0bGVcIjpcItCR0L7Qu9GM0YjQvtC5INCa0LDQvNC10L3RjFwifSx7XCJ0aXRsZVwiOlwi0JTQsNC70YzQvdC10LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JTQsNC70YzQvdC10YDQtdGH0LXQvdGB0LpcIn0se1widGl0bGVcIjpcItCa0LjRgNC+0LLRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0JvQtdGB0L7Qt9Cw0LLQvtC00YHQulwifSx7XCJ0aXRsZVwiOlwi0JzQuNGF0LDQudC70L7QstC60LBcIn0se1widGl0bGVcIjpcItCd0LDRhdC+0LTQutCwXCJ9LHtcInRpdGxlXCI6XCLQn9Cw0YDRgtC40LfQsNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0KHQu9Cw0LLRj9C90LrQsFwifSx7XCJ0aXRsZVwiOlwi0KHQv9Cw0YHRgdC6LdCU0LDQu9GM0L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQo9GB0YHRg9GA0LjQudGB0LpcIn0se1widGl0bGVcIjpcItCS0LXQu9C40LrQuNC1INCb0YPQutC4XCJ9LHtcInRpdGxlXCI6XCLQmtC+0YjQtdGF0LDQsdC70YxcIn0se1widGl0bGVcIjpcItCv0LHQu9C+0L3QvtCy0YHQutC40LlcIn0se1widGl0bGVcIjpcItCR0LXQu9C10LHQtdC5XCJ9LHtcInRpdGxlXCI6XCLQkdC10LvQvtGA0LXRhtC6XCJ9LHtcInRpdGxlXCI6XCLQkdC40YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmNGI0LjQvNCx0LDQuVwifSx7XCJ0aXRsZVwiOlwi0JrRg9C80LXRgNGC0LDRg1wifSx7XCJ0aXRsZVwiOlwi0JzQtdC70LXRg9C3XCJ9LHtcInRpdGxlXCI6XCLQndC10YTRgtC10LrQsNC80YHQulwifSx7XCJ0aXRsZVwiOlwi0J7QutGC0Y/QsdGA0YzRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0KHQsNC70LDQstCw0YJcIn0se1widGl0bGVcIjpcItCh0LjQsdCw0LlcIn0se1widGl0bGVcIjpcItCh0YLQtdGA0LvQuNGC0LDQvNCw0LpcIn0se1widGl0bGVcIjpcItCh0LXQstC10YDQvtCx0LDQudC60LDQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0JTQtdGA0LHQtdC90YJcIn0se1widGl0bGVcIjpcItCR0YPQudC90LDQutGB0LpcIn0se1widGl0bGVcIjpcItCY0LfQsdC10YDQsdCw0YhcIn0se1widGl0bGVcIjpcItCa0LDRgdC/0LjQudGB0LpcIn0se1widGl0bGVcIjpcItCa0LjQt9C40LvRjtGA0YJcIn0se1widGl0bGVcIjpcItCa0LjQt9C70Y/RgFwifSx7XCJ0aXRsZVwiOlwi0KXQsNGB0LDQstGO0YDRglwifSx7XCJ0aXRsZVwiOlwi0JzQsNCz0LDRgVwifSx7XCJ0aXRsZVwiOlwi0JrQvtGB0YLQvtC80YPQutGI0LBcIn0se1widGl0bGVcIjpcItCh0L7RgNGC0LDQstCw0LvQsFwifSx7XCJ0aXRsZVwiOlwi0JLQvtGA0LrRg9GC0LBcIn0se1widGl0bGVcIjpcItCj0YHQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0KPRhdGC0LBcIn0se1widGl0bGVcIjpcItCS0L7Qu9C20YHQulwifSx7XCJ0aXRsZVwiOlwi0JrQvtCy0YvQu9C60LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQoNGD0LfQsNC10LLQutCwXCJ9LHtcInRpdGxlXCI6XCLQnNC40YDQvdGL0LlcIn0se1widGl0bGVcIjpcItCd0LXRgNGO0L3Qs9GA0LhcIn0se1widGl0bGVcIjpcItCe0LrRgtC10L3RhtGLXCJ9LHtcInRpdGxlXCI6XCLQntC70ZHQutC80LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCn0YPRgNCw0L/Rh9CwXCJ9LHtcInRpdGxlXCI6XCLQkNC50YXQsNC7XCJ9LHtcInRpdGxlXCI6XCLQm9C10L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQkNC70YzQvNC10YLRjNC10LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdGD0LPRg9C70YzQvNCwXCJ9LHtcInRpdGxlXCI6XCLQldC70LDQsdGD0LPQsFwifSx7XCJ0aXRsZVwiOlwi0JfQtdC70LXQvdC+0LTQvtC70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQm9C10L3QuNC90L7Qs9C+0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQndCw0LHQtdGA0LXQttC90YvQtSDQp9C10LvQvdGLXCJ9LHtcInRpdGxlXCI6XCLQndC40LbQvdC10LrQsNC80YHQulwifSx7XCJ0aXRsZVwiOlwi0KfQuNGB0YLQvtC/0L7Qu9GMXCJ9LHtcInRpdGxlXCI6XCLQodCw0Y/QvdC+0LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JDQt9C+0LJcIn0se1widGl0bGVcIjpcItCR0LDRgtCw0LnRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdC10LvQsNGPINCa0LDQu9C40YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQktC10YjQtdC90YHQutCw0Y9cIn0se1widGl0bGVcIjpcItCS0L7Qu9Cz0L7QtNC+0L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQk9GD0LrQvtCy0L5cIn0se1widGl0bGVcIjpcItCU0L7QvdC10YbQulwifSx7XCJ0aXRsZVwiOlwi0JfQtdGA0L3QvtCz0YDQsNC0XCJ9LHtcInRpdGxlXCI6XCLQl9C40LzQvtCy0L3QuNC60LhcIn0se1widGl0bGVcIjpcItCa0LDQvNC10L3RgdC6LdCo0LDRhdGC0LjQvdGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmtC+0L3RgdGC0LDQvdGC0LjQvdC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtGA0LDRgdC90YvQuSDQodGD0LvQuNC8XCJ9LHtcInRpdGxlXCI6XCLQnNCw0YLQstC10LXQsiDQmtGD0YDQs9Cw0L1cIn0se1widGl0bGVcIjpcItCc0LjQu9C70LXRgNC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7Rh9C10YDQutCw0YHRgdC6XCJ9LHtcInRpdGxlXCI6XCLQndC+0LLQvtGI0LDRhdGC0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCf0LXRgNGB0LjQsNC90L7QstGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQodCw0LvRjNGB0LpcIn0se1widGl0bGVcIjpcItCi0LDQs9Cw0L3RgNC+0LNcIn0se1widGl0bGVcIjpcItCo0LDRhdGC0YtcIn0se1widGl0bGVcIjpcItCh0LDRgdC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JrQuNC90LXQu9GMXCJ9LHtcInRpdGxlXCI6XCLQn9C+0YXQstC40YHQvdC10LLQvlwifSx7XCJ0aXRsZVwiOlwi0KHRi9C30YDQsNC90YxcIn0se1widGl0bGVcIjpcItCi0L7Qu9GM0Y/RgtGC0LhcIn0se1widGl0bGVcIjpcItCf0YPRiNC60LjQvVwifSx7XCJ0aXRsZVwiOlwi0JHQsNC70LDQutC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JHQsNC70LDRiNC+0LJcIn0se1widGl0bGVcIjpcItCS0L7Qu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0JzQsNGA0LrRgVwifSx7XCJ0aXRsZVwiOlwi0K3QvdCz0LXQu9GM0YFcIn0se1widGl0bGVcIjpcItCl0L7Qu9C80YHQulwifSx7XCJ0aXRsZVwiOlwi0JDQu9Cw0L/QsNC10LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdC10YDQtdC30L7QstGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQktC10YDRhdC90Y/RjyDQodCw0LvQtNCwXCJ9LHtcInRpdGxlXCI6XCLQl9Cw0YDQtdGH0L3Ri9C5XCJ9LHtcInRpdGxlXCI6XCLQmNGA0LHQuNGCXCJ9LHtcInRpdGxlXCI6XCLQmtCw0LzQtdC90YHQui3Qo9GA0LDQu9GM0YHQutC40LlcIn0se1widGl0bGVcIjpcItCa0YDQsNGB0L3QvtGC0YPRgNGM0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCb0LXRgdC90L7QuVwifSx7XCJ0aXRsZVwiOlwi0J3QtdCy0YzRj9C90YHQulwifSx7XCJ0aXRsZVwiOlwi0J3QuNC20L3QuNC5INCi0LDQs9C40LtcIn0se1widGl0bGVcIjpcItCd0LjQttC90Y/RjyDQotGD0YDQsFwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7Rg9GA0LDQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0J/QtdGA0LLQvtGD0YDQsNC70YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQodC10YDQvtCyXCJ9LHtcInRpdGxlXCI6XCLQodGA0LXQtNC90LXRg9GA0LDQu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0JLRj9C30YzQvNCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHQu9Cw0LLQu9GMXCJ9LHtcInRpdGxlXCI6XCLQodCw0YTQvtC90L7QstC+XCJ9LHtcInRpdGxlXCI6XCLQkdGD0LTQtdC90L3QvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JPQtdC+0YDQs9C40LXQstGB0LpcIn0se1widGl0bGVcIjpcItCV0YHRgdC10L3RgtGD0LrQuFwifSx7XCJ0aXRsZVwiOlwi0JbQtdC70LXQt9C90L7QstC+0LTRgdC6XCJ9LHtcInRpdGxlXCI6XCLQmtC40YHQu9C+0LLQvtC00YHQulwifSx7XCJ0aXRsZVwiOlwi0JvQtdGA0LzQvtC90YLQvtCyXCJ9LHtcInRpdGxlXCI6XCLQnNC40L3QtdGA0LDQu9GM0L3Ri9C1INCS0L7QtNGLXCJ9LHtcInRpdGxlXCI6XCLQndC10LLQuNC90L3QvtC80YvRgdGB0LpcIn0se1widGl0bGVcIjpcItCf0Y/RgtC40LPQvtGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0JzQuNGH0YPRgNC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQo9Cy0LDRgNC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0JHQtdC20LXRhtC6XCJ9LHtcInRpdGxlXCI6XCLQktGL0YjQvdC40Lkg0JLQvtC70L7Rh9C10LpcIn0se1widGl0bGVcIjpcItCa0LjQvNGA0YtcIn0se1widGl0bGVcIjpcItCa0LDQvdCw0LrQvtCy0L5cIn0se1widGl0bGVcIjpcItCa0YPQstGI0LjQvdC+0LLQvlwifSx7XCJ0aXRsZVwiOlwi0KDQttC10LJcIn0se1widGl0bGVcIjpcItCi0L7RgNC20L7QulwifSx7XCJ0aXRsZVwiOlwi0KPQtNC+0LzQu9GPXCJ9LHtcInRpdGxlXCI6XCLQkNGB0LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQodC10LLQtdGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0KHRgtGA0LXQttC10LLQvtC5XCJ9LHtcInRpdGxlXCI6XCLQkNC70LXQutGB0LjQvVwifSx7XCJ0aXRsZVwiOlwi0J3QvtCy0L7QvNC+0YHQutC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQkdC10LvRi9C5INCv0YBcIn0se1widGl0bGVcIjpcItCT0YPQsdC60LjQvdGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQl9Cw0LLQvtC00L7Rg9C60L7QstGB0LpcIn0se1widGl0bGVcIjpcItCY0YjQuNC8XCJ9LHtcInRpdGxlXCI6XCLQmtC+0LPQsNC70YvQvFwifSx7XCJ0aXRsZVwiOlwi0JvQsNC90LPQtdC/0LDRgVwifSx7XCJ0aXRsZVwiOlwi0JzRg9GA0LDQstC70LXQvdC60L5cIn0se1widGl0bGVcIjpcItCd0LDQtNGL0LxcIn0se1widGl0bGVcIjpcItCd0LXRhNGC0LXRjtCz0LDQvdGB0LpcIn0se1widGl0bGVcIjpcItCd0LjQttC90LXQstCw0YDRgtC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQndC+0LLRi9C5INCj0YDQtdC90LPQvtC5XCJ9LHtcInRpdGxlXCI6XCLQndC+0Y/QsdGA0YzRgdC6XCJ9LHtcInRpdGxlXCI6XCLQndGP0LPQsNC90YxcIn0se1widGl0bGVcIjpcItCf0L7QudC60L7QstGB0LrQuNC5XCJ9LHtcInRpdGxlXCI6XCLQn9GL0YLRjC3Qr9GFXCJ9LHtcInRpdGxlXCI6XCLQodC+0LLQtdGC0YHQutC40LlcIn0se1widGl0bGVcIjpcItCh0YPRgNCz0YPRglwifSx7XCJ0aXRsZVwiOlwi0KLQvtCx0L7Qu9GM0YHQulwifSx7XCJ0aXRsZVwiOlwi0KPRgNCw0LlcIn0se1widGl0bGVcIjpcItCv0LvRg9GC0L7RgNC+0LLRgdC6XCJ9LHtcInRpdGxlXCI6XCLQktC+0YLQutC40L3RgdC6XCJ9LHtcInRpdGxlXCI6XCLQk9C70LDQt9C+0LJcIn0se1widGl0bGVcIjpcItCh0LDRgNCw0L/Rg9C7XCJ9LHtcInRpdGxlXCI6XCLQlNC80LjRgtGA0L7QstCz0YDQsNC0XCJ9LHtcInRpdGxlXCI6XCLQmNC90LfQsFwifSx7XCJ0aXRsZVwiOlwi0JLQsNC90LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQmtC+0LzRgdC+0LzQvtC70YzRgdC6LdC90LAt0JDQvNGD0YDQtVwifSx7XCJ0aXRsZVwiOlwi0KHQvtCy0LXRgtGB0LrQsNGPINCT0LDQstCw0L3RjFwifSx7XCJ0aXRsZVwiOlwi0JDRiNCwXCJ9LHtcInRpdGxlXCI6XCLQl9C70LDRgtC+0YPRgdGCXCJ9LHtcInRpdGxlXCI6XCLQmtCw0YDRgtCw0LvRi1wifSx7XCJ0aXRsZVwiOlwi0JrRg9GB0LBcIn0se1widGl0bGVcIjpcItCa0YvRiNGC0YvQvFwifSx7XCJ0aXRsZVwiOlwi0JzQsNCz0L3QuNGC0L7Qs9C+0YDRgdC6XCJ9LHtcInRpdGxlXCI6XCLQnNC40LDRgdGBXCJ9LHtcInRpdGxlXCI6XCLQndGP0LfQtdC/0LXRgtGA0L7QstGB0LpcIn0se1widGl0bGVcIjpcItCe0LfQtdGA0YHQulwifSx7XCJ0aXRsZVwiOlwi0KHQsNGC0LrQsFwifSx7XCJ0aXRsZVwiOlwi0KHQvdC10LbQuNC90YHQulwifSx7XCJ0aXRsZVwiOlwi0KLRgNGR0YXQs9C+0YDQvdGL0LlcIn0se1widGl0bGVcIjpcItCi0YDQvtC40YbQulwifSx7XCJ0aXRsZVwiOlwi0KPRgdGC0Ywt0JrQsNGC0LDQslwifSx7XCJ0aXRsZVwiOlwi0JDQu9Cw0YLRi9GA0YxcIn0se1widGl0bGVcIjpcItCR0LDRgtGL0YDQtdCy0L5cIn0se1widGl0bGVcIjpcItCc0LDRgNC40LjQvdGB0LrQuNC5INCf0L7RgdCw0LRcIn0se1widGl0bGVcIjpcItCd0L7QstC+0YfQtdCx0L7QutGB0LDRgNGB0LpcIn0se1widGl0bGVcIjpcItCf0LXRgNC10YHQu9Cw0LLQu9GMLdCX0LDQu9C10YHRgdC60LjQuVwifSx7XCJ0aXRsZVwiOlwi0KDRi9Cx0LjQvdGB0LpcIn0se1widGl0bGVcIjpcItCi0YPRgtCw0LXQslwifSx7XCJ0aXRsZVwiOlwi0KPQs9C70LjRh1wifSx7XCJ0aXRsZVwiOlwi0JHQsNC50LrQvtC90YPRgFwifSx7XCJ0aXRsZVwiOlwi0JHQuNGI0LrQtdC6XCJ9LHtcInRpdGxlXCI6XCLQlNGD0YjQsNC90LHQtVwifSx7XCJ0aXRsZVwiOlwi0JXRgNC10LLQsNC9XCJ9LHtcInRpdGxlXCI6XCLQmtGD0YDQs9Cw0L0t0YLRjtCx0LVcIn0se1widGl0bGVcIjpcItCc0L7Qs9C40LvQtdCyXCJ9LHtcInRpdGxlXCI6XCLQpdGD0LTQttCw0L3QtFwifSx7XCJ0aXRsZVwiOlwi0JfQsNGA0YPQsdC10LbQvdGL0LUg0LPQvtGA0L7QtNCwXCJ9LHtcInRpdGxlXCI6XCLQl9Cy0LXQvdC40LPQvtGA0L7QtFwifSx7XCJ0aXRsZVwiOlwi0JrQu9C40LzQvtCy0YHQulwifSx7XCJ0aXRsZVwiOlwi0JvQvtCx0L3Rj1wifSx7XCJ0aXRsZVwiOlwi0JvRi9GC0LrQsNGA0LjQvdC+XCJ9LHtcInRpdGxlXCI6XCLQmtGA0YPRgtC+0LVcIn0se1widGl0bGVcIjpcItCQ0L/RgNC10LvQtdCy0LrQsFwifSx7XCJ0aXRsZVwiOlwi0KHQtdCy0LDRgdGC0L7Qv9C+0LvRjFwifSx7XCJ0aXRsZVwiOlwi0JXQstC/0LDRgtC+0YDQuNGPXCJ9LHtcInRpdGxlXCI6XCLQmtC10YDRh9GMXCJ9LHtcInRpdGxlXCI6XCLQodC40LzRhNC10YDQvtC/0L7Qu9GMXCJ9LHtcInRpdGxlXCI6XCLQodGD0LTQsNC6XCJ9LHtcInRpdGxlXCI6XCLQpNC10L7QtNC+0YHQuNGPXCJ9LHtcInRpdGxlXCI6XCLQr9C70YLQsFwifSx7XCJ0aXRsZVwiOlwi0JrQvtC70LBcIn1dXG5cbiAgICBsb2NhdGlvbnMuaW5pdGlhbGl6ZSgpXG5cbiAgICBjaXR5ID0gJCgnLmVkdWNhdGlvbi13cmFwcGVyOmxhc3QgaW5wdXQuY2l0eScpXG4gICAgaWYgY2l0eS5oYXNDbGFzcyAndHQtaW5wdXQnXG4gICAgICAgIGNpdHkudHlwZWFoZWFkKCdkZXN0cm95JylcbiAgICBjaXR5LnR5cGVhaGVhZFxuICAgICAgaGludDogdHJ1ZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAnbG9jYXRpb25zJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogbG9jYXRpb25zLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICBjaXR5Lm9uICdjaGFuZ2UnLCBAYWRkVW5pdmVyY2l0eVxuICAgIGNpdHkub24gJ2JsdXInLCBAYWRkVW5pdmVyY2l0eVxuICAgIGNpdHkub24gJ3R5cGVhaGVhZDphdXRvY29tcGxldGVkJywgQGFkZFVuaXZlcmNpdHlcbiAgICBjaXR5Lm9uICd0eXBlYWhlYWQ6c2VsZWN0ZWQnLCBAYWRkVW5pdmVyY2l0eVxuXG4gIGFkZFVuaXZlcmNpdHk6IChldmVudCk9PlxuICAgIFxuICAgIGNpdHkgPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICB2YWx1ZSA9IGNpdHkudmFsKCkudHJpbSgpXG5cbiAgICB3cmFwcGVyID0gY2l0eS5jbG9zZXN0KCcuZWR1Y2F0aW9uLXdyYXBwZXInKVxuICAgIHVuaXZlcmNpdHkgPSB3cmFwcGVyLmZpbmQoJy51bml2ZXJjaXR5JylcbiAgICBmYWN1bHR5ID0gd3JhcHBlci5maW5kKCcuZmFjdWx0eScpXG5cblxuICAgIGlmIHZhbHVlID09ICfQnNC+0YHQutCy0LAnXG5cbiAgICAgIHVuaXZlcmNpdHlzID0gbmV3IEJsb29kaG91bmRcbiAgICAgICAgZGF0dW1Ub2tlbml6ZXI6IChkYXRhKS0+XG4gICAgICAgICAgcmV0dXJuIEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlKGRhdGEudGl0bGUpXG4gICAgICAgIHF1ZXJ5VG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxcbiAgICAgICAgbGltaXQ6IDYwMFxuICAgICAgICBsb2NhbDogW3tcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0YTQuNC90LDQvdGB0L7QsiDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0L3QsNGA0L7QtNC90L7Qs9C+INGF0L7Qt9GP0LnRgdGC0LLQsCDQuCDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lkg0YHQu9GD0LbQsdGLINC/0YDQuCDQn9GA0LXQt9C40LTQtdC90YLQtSDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0YLRgNGD0LTQsCDQuCDRgdC+0YbQuNCw0LvRjNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LlcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0YXQvtGA0L7QstC+0LPQviDQuNGB0LrRg9GB0YHRgtCy0LAg0LjQvNC10L3QuCDQki7QoS4g0J/QvtC/0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQktGB0LXRgNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINCy0L3QtdGI0L3QtdC5INGC0L7RgNCz0L7QstC70Lgg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGN0LrQvtC90L7QvNC40YfQtdGB0LrQvtCz0L4g0YDQsNC30LLQuNGC0LjRjyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCS0YHQtdGA0L7RgdGB0LjQudGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQvdCw0LvQvtCz0L7QstCw0Y8g0LDQutCw0LTQtdC80LjRj1wifSx7XCJ0aXRsZVwiOlwi0JLRgdC10YDQvtGB0YHQuNC50YHQutC40LkgINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC60LjQvdC10LzQsNGC0L7Qs9GA0LDRhNC40Lgg0LjQvC7QoS7QkC7Qk9C10YDQsNGB0LjQvNC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JfQsNC+0YfQvdGL0Lkg0YTQuNC90LDQvdGB0L7QstC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0KTQuNC90LDQvdGB0L7QstC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0L/RgNC4INCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstC1INCg0L7RgdGB0LjQudGB0LrQvtC5INGE0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDQodC+0LLRgNC10LzQtdC90L3QvtC1INC+0LHRgNCw0LfQvtCy0LDQvdC40LVcIn0se1widGl0bGVcIjpcItCi0LXQsNGC0YDQsNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCR0L7RgNC40YHQsCDQqdGD0LrQuNC90LAg0L/RgNC4INCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7QvCDQsNC60LDQtNC10LzQuNGH0LXRgdC60L7QvCDRgtC10LDRgtGA0LUg0LjQvNC10L3QuCDQldCy0LMuINCS0LDRhdGC0LDQvdCz0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQktGL0YHRiNC10LUg0YLQtdCw0YLRgNCw0LvRjNC90L7QtSDRg9GH0LjQu9C40YnQtSAo0LjQvdGB0YLQuNGC0YPRgikg0LjQvC4g0Jwu0KEuINCp0LXQv9C60LjQvdCwINC/0YDQuCDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lwg0LDQutCw0LTQtdC80LjRh9C10YHQutC+0Lwg0JzQsNC70L7QvCDRgtC10LDRgtGA0LUg0KDQvtGB0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0YHQu9Cw0LLRj9C90YHQutC+0Lkg0LrRg9C70YzRgtGD0YDRi1wifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQutC70LDRgdGB0LjRh9C10YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQuNC80LXQvdC4INCc0LDQudC80L7QvdC40LTQsFwifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YDRg9GB0YHQutC+0LPQviDRj9C30YvQutCwINC40Lwg0JAu0KEuINCf0YPRiNC60LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LzRg9C30YvQutCw0LvRjNC90L4t0L/QtdC00LDQs9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC40LzQtdC90Lgg0Jwu0JwuINCY0L/Qv9C+0LvQuNGC0L7QstCwLdCY0LLQsNC90L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YHQv9C10YbQuNCw0LvQuNC30LjRgNC+0LLQsNC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LjRgdC60YPRgdGB0YLQslwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDCq9CS0YvRgdGI0LDRjyDRiNC60L7Qu9CwINGN0LrQvtC90L7QvNC40LrQuMK7XCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9C+INC30LXQvNC70LXRg9GB0YLRgNC+0LnRgdGC0LLRg1wifSx7XCJ0aXRsZVwiOlwi0JPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIgKNCzLiDQnNC+0YHQutCy0LApXCJ9LHtcInRpdGxlXCI6XCLQlNC40L/Qu9C+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LDQutCw0LTQtdC80LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C+INC/0YDQsNCy0LAg0Lgg0Y3QutC+0L3QvtC80LjQutC4INC40LzQtdC90Lgg0JAu0KEu0JPRgNC40LHQvtC10LTQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0L7QstGA0LXQvNC10L3QvdC+0LPQviDQuNGB0LrRg9GB0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCb0LjRgtC10YDQsNGC0YPRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40LzQtdC90Lgg0JAu0Jwu0JPQvtGA0YzQutC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JzQkNCi0JggLSDQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQmi7QrS4g0KbQuNC+0LvQutC+0LLRgdC60L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGH0LXRgdC60LjQuSDQvNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQuNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINCc0J3QrdCf0KNcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LIg0JzQvtGB0LrQstC1XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwINC/0YDQuCDQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQtSDQsy4g0JzQvtGB0LrQstGLXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINGN0LrQvtC90L7QvNC40LrQuCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQstC10YLQtdGA0LjQvdCw0YDQvdC+0Lkg0LzQtdC00LjRhtC40L3RiyDQuCDQsdC40L7RgtC10YXQvdC+0LvQvtCz0LjQuCDQuNC80LXQvdC4INCaLtCYLiDQodC60YDRj9Cx0LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQstC+0LTQvdC+0LPQviDRgtGA0LDQvdGB0L/QvtGA0YLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LTQuNC30LDQudC90LAg0Lgg0YLQtdGF0L3QvtC70L7Qs9C40LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0YDQuNCx0L7RgNC+0YHRgtGA0L7QtdC90LjRjyDQuCDQuNC90YTQvtGA0LzQsNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRgtC+0L3QutC40YUg0YXQuNC80LjRh9C10YHQutC40YUg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0LjQvNC10L3QuCDQnC7Qki4g0JvQvtC80L7QvdC+0YHQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINGF0L7RgNC10L7Qs9GA0LDRhNC40LhcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQs9C10L7Qu9C+0LPQvtGA0LDQt9Cy0LXQtNC+0YfQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCh0LXRgNCz0L4g0J7RgNC00LbQvtC90LjQutC40LTQt9C1XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LrQvtC90YHQtdGA0LLQsNGC0L7RgNC40Y8gKNGD0L3QuNCy0LXRgNGB0LjRgtC10YIpINC40LzQtdC90Lgg0J8uINCYLiDQp9Cw0LnQutC+0LLRgdC60L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQtdC60YHRgtC40LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCICDQuNC80LXQvdC4INCQLtCdLiDQmtC+0YHRi9Cz0LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0Y7RgNC40LTQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0J4uINCVLiDQmtGD0YLQsNGE0LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQn9C10YDQstGL0Lkg0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80LXQtNC40YbQuNC90YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCYLtCcLiDQodC10YfQtdC90L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQvNC10LbQtNGD0L3QsNGA0L7QtNC90LDRjyDQstGL0YHRiNCw0Y8g0YjQutC+0LvQsCDQsdC40LfQvdC10YHQsCDQnNCY0KDQkdCY0KEgKNCY0L3RgdGC0LjRgtGD0YIpXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LDQs9GA0LDRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCLSDQnNCh0KXQkCDQuNC80LXQvdC4INCaLtCQLiDQotC40LzQuNGA0Y/Qt9C10LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LDRgNGF0LjRgtC10LrRgtGD0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiAo0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8pICjQnNCQ0KDQpdCYKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LHQsNC90LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGA0L7QtNGB0LrQvtC5INC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGA0L7QtNGB0LrQvtC5INC/0YHQuNGF0L7Qu9C+0LPQvi3Qv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINGA0LDQtNC40L7RgtC10YXQvdC40LrQuCwg0Y3Qu9C10LrRgtGA0L7QvdC40LrQuCDQuCDQsNCy0YLQvtC80LDRgtC40LrQuCAo0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCKSAo0JzQmNCg0K3QkClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCw0LLQuNCw0YbQuNC+0L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiAo0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgilcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCw0LLRgtC+0LzQvtCx0LjQu9GM0L3Qvi3QtNC+0YDQvtC20L3Ri9C5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgKNCc0JDQlNCYKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCw0LPRgNC+0LjQvdC20LXQvdC10YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCSLtCfLiDQk9C+0YDRj9GH0LrQuNC90LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQsNC60LDQtNC10LzQuNGH0LXRgdC60LjQuSDRhdGD0LTQvtC20LXRgdGC0LLQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LjQvNC10L3QuCDQki7QmC4g0KHRg9GA0LjQutC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCy0LXRh9C10YDQvdC40Lkg0LzQtdGC0LDQu9C70YPRgNCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCz0L7RgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRgtC10YXQvdC+0LvQvtCz0LjQuSDQuCDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuNC80LXQvdC4INCaLtCTLiDQoNCw0LfRg9C80L7QstGB0LrQvtCz0L5cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90LTRg9GB0YLRgNC40LDQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGP0LTQtdGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQnNCY0KTQmMK7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LkgKNGD0L3QuNCy0LXRgNGB0LjRgtC10YIpXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDCq9Cc0JjQodC40KHCu1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC70LXQutGC0YDQvtC90LjQutC4INC4INC80LDRgtC10LzQsNGC0LjQutC4INCd0LDRhtC40L7QvdCw0LvRjNC90L7Qs9C+INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAgwqvQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDRjdC60L7QvdC+0LzQuNC60LjCu1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC70LjQvdCz0LLQuNGB0YLQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQnC7QkC4g0KjQvtC70L7RhdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC+0YLQutGA0YvRgtGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCSLtChLiDQp9C10YDQvdC+0LzRi9GA0LTQuNC90LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgdC+0YbQuNCw0LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgLSDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LzQsNGI0LjQvdC+0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgKNCc0JDQnNCYKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQs9GA0LDQttC00LDQvdGB0LrQvtC5INCw0LLQuNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0J0u0K0uINCR0LDRg9C80LDQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQodGC0LDQvdC60LjQvcK7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCcLtCSLiDQm9C+0LzQvtC90L7RgdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LPQtdC+0LTQtdC30LjQuCDQuCDQutCw0YDRgtC+0LPRgNCw0YTQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC90LbQtdC90LXRgNC90L7QuSDRjdC60L7Qu9C+0LPQuNC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQvtGA0LPQvtCy0L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/QtdGH0LDRgtC4INC40LzQtdC90Lgg0JjQstCw0L3QsCDQpNC10LTQvtGA0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9C40YnQtdCy0YvRhSDQv9GA0L7QuNC30LLQvtC00YHRgtCyXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9GA0LjRgNC+0LTQvtC+0LHRg9GB0YLRgNC+0LnRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/Rg9GC0LXQuSDRgdC+0L7QsdGJ0LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGN0LrQvtC90L7QvNC40LrQuCwg0YHRgtCw0YLQuNGB0YLQuNC60Lgg0Lgg0LjQvdGE0L7RgNC80LDRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINGF0YPQtNC+0LbQtdGB0YLQstC10L3QvdC+LdC/0YDQvtC80YvRiNC70LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINC40LwuINChLtCTLiDQodGC0YDQvtCz0LDQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YLQuNC80LXQvdC4INCVLtCgLiDQlNCw0YjQutC+0LLQvtC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQutC+0LzQvNGD0L3QsNC70YzQvdC+0LPQviDRhdC+0LfRj9C50YHRgtCy0LAg0Lgg0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvNC10LTQuNC60L4t0YHRgtC+0LzQsNGC0L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNCe0KHQmtCe0JLQodCa0JjQmSDQndCe0JLQq9CZINCu0KDQmNCU0JjQp9CV0KHQmtCY0Jkg0JjQndCh0KLQmNCi0KPQolwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC+0LHQu9Cw0YHRgtC90L7QuSAg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0L/RgdC40YXQvtC70L7Qs9C+LdGB0L7RhtC40LDQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRgdCy0Y/Qt9C4INC4INC40L3RhNC+0YDQvNCw0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQnNCt0JjCu1wifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQvNGD0LfRi9C60Lgg0LjQvNC10L3QuCDQk9C90LXRgdC40L3Ri9GFXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGC0LXQsNGC0YDQsNC70YzQvdC+0LPQviDQuNGB0LrRg9GB0YHRgtCy0LAgLSDQk9CY0KLQmNChXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRhNC40LfQuNGH0LXRgdC60L7QuSDQutGD0LvRjNGC0YPRgNGLLCDRgdC/0L7RgNGC0LAsINC80L7Qu9C+0LTQtdC20Lgg0Lgg0YLRg9GA0LjQt9C80LAgKNCT0KbQntCb0JjQpNCaKVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0L/RgNCw0LLQvtCy0LDRjyDQsNC60LDQtNC10LzQuNGPINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDRjtGB0YLQuNGG0LjQuCDQoNCkXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDRiNC60L7Qu9CwINGH0LDRgdGC0L3QvtCz0L4g0L/RgNCw0LLQsCAo0LjQvdGB0YLQuNGC0YPRgilcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQky7Qki4g0J/Qu9C10YXQsNC90L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INC80LXQtNC40YbQuNC90YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCdLtCYLiDQn9C40YDQvtCz0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGC0LXQutGB0YLQuNC70YzQvdC+0Lkg0Lgg0LvQtdCz0LrQvtC5INC/0YDQvtC80YvRiNC70LXQvdC90L7RgdGC0Lgg0LzQvtGB0LrQvtCy0YHQutC+0LPQviDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINC40L3RgtC10LvQu9C10LrRgtGD0LDQu9GM0L3QvtC5INGB0L7QsdGB0YLQstC10L3QvdC+0YHRgtC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQvdC+0LLRi9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LTRgNGD0LbQsdGLINC90LDRgNC+0LTQvtCyXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDRhdC40LzQuNC60L4t0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQlC7QmC4g0JzQtdC90LTQtdC70LXQtdCy0LBcIn0se1widGl0bGVcIjpcItCk0LjQvdCw0L3RgdC+0LLRi9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/RgNC4INCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstC1INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KjQutC+0LvQsC3RgdGC0YPQtNC40Y8gKNC40L3RgdGC0LjRgtGD0YIpINC40LzQtdC90Lgg0JLQuy7QmC4g0J3QtdC80LjRgNC+0LLQuNGH0LAt0JTQsNC90YfQtdC90LrQviDQv9GA0Lgg0JzQvtGB0LrQvtCy0YHQutC+0Lwg0KXRg9C00L7QttC10YHRgtCy0LXQvdC90L7QvCDQsNC60LDQtNC10LzQuNGH0LXRgdC60L7QvCDRgtC10LDRgtGA0LUg0LjQvNC10L3QuCDQkC7Qny4g0KfQtdGF0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQutC40L3QvtCy0LjQtNC10L7QuNC90YHRgtC40YLRg9GCICjRhNC40LvQuNCw0LspINCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCz0YHQutC+0LPQviDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0LrQuNC90L4g0Lgg0YLQtdC70LXQstC40LTQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0L7QsdC70LDRgdGC0L3QvtC5INGE0LjQu9C40LDQuyDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs9GB0LrQvtCz0L4g0JPRg9C80LDQvdC40YLQsNGA0L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINC/0YDQvtGE0YHQvtGO0LfQvtCyINCY0L3RgdGC0LjRgtGD0YIg0LjRgdC60YPRgdGB0YLQsiDQuCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGD0L/RgNCw0LLQu9C10L3QuNGPINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDQstC90YPRgtGA0LXQvdC90LjRhSDQtNC10Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINCk0LXQtNC10YDQsNC70YzQvdC+0Lkg0YHQu9GD0LbQsdGLINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCh0LvQsNCy0Y/QvdGB0LrQuNC5INC00LXQu9C+0LLQvtC5INC40L3RgdGC0LjRgtGD0YIg0LjQvC4g0Jou0JIuINCd0LXRh9Cw0LXQstCwICjQnNC40YLRgNC+0L/QvtC70LjRgtCwINCf0LjRgtC40YDQuNC80LApXCJ9LHtcInRpdGxlXCI6XCLQo9C90LjQstC10YDRgdC40YLQtdGCINCg0L7RgdGB0LjQudGB0LrQvtC5INCw0LrQsNC00LXQvNC40Lgg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDQsNC00LzQuNC90LjRgdGC0YDQuNGA0L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3QvtC5INGC0L7RgNCz0L7QstC70Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GB0LjRhdC+0LvQvtCz0LjQuCDQuCDQv9C10LTQsNCz0L7Qs9C40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRgtC40L3QuNGH0L3QvtCz0L4g0LzQtdC90LXQtNC20LzQtdC90YLQsCDQuCDRgtGD0YDQuNC30LzQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwINC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4LCDQv9C+0LvQuNGC0LjQutC4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQvdCw0L3RgdC+0LLQvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9GD0LzQsNC90LjRgtCw0YDQvdC+LdGC0LXRhdC90LjRh9C10YHQutCw0Y8g0LDQutCw0LTQtdC80LjRj1wifSx7XCJ0aXRsZVwiOlwi0J/RgNCw0LLQvtGB0LvQsNCy0L3Ri9C5INCh0LLRj9GC0L4t0KLQuNGF0L7QvdC+0LLRgdC60LjQuSDQk9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0KPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRh9C10YHQutC40Lkg0L/RgNCw0LLQvtCy0L7QuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0J3QsNGC0LDQu9GM0Lgg0J3QtdGB0YLQtdGA0L7QstC+0LlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LHQuNC30L3QtdGB0LAg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHRgtGA0LDQvSDQktC+0YHRgtC+0LrQsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0L/RgNCw0LLQvtGB0LvQsNCy0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YHQstGP0YLQvtCz0L4g0JjQvtCw0L3QvdCwINCR0L7Qs9C+0YHQu9C+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0YHQu9Cw0LLRj9C90YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YLQtdC70LXQstC40LTQtdC90LjRjyDQuCDRgNCw0LTQuNC+0LLQtdGJ0LDQvdC40Y8g0LjQvC4g0Jwu0JAuINCb0LjRgtC+0LLRh9C40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQvNC40YDQvtCy0L7QuSDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRjdC60L7QvdC+0LzQuNC60L4t0YTQuNC90LDQvdGB0L7QstGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0Y7RgNC40LTQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQrdC60L7QvdC+0LzQuNC60L4t0L/RgNCw0LLQvtCy0L7QuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQv9C+0LPRgNCw0L3QuNGH0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0KTQtdC00LXRgNCw0LvRjNC90L7QuSDRgdC70YPQttCx0Ysg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LHQuNC30L3QtdGB0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0YUg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40YUg0YHQstGP0LfQtdC5XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC40YHQutGD0YHRgdGC0LLQsCDRgNC10YHRgtCw0LLRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRjdC60L7QvdC+0LzQuNC60L4t0L/RgNCw0LLQvtCy0L7QuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7QuSDQv9GA0L7RgtC40LLQvtC/0L7QttCw0YDQvdC+0Lkg0YHQu9GD0LbQsdGLXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQvdC10LTQttC80LXQvdGC0LAg0LjQvdC90L7QstCw0YbQuNC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPINC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCS0YvRgdGI0LDRjyDRiNC60L7Qu9CwINC/0YHQuNGF0L7Qu9C+0LPQuNC4ICjQmNC90YHRgtC40YLRg9GCKVwifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCw0LrQsNC00LXQvNC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LPRg9C80LDQvdC40YLQsNGA0L3Ri9GFINC90LDRg9C6XCJ9LHtcInRpdGxlXCI6XCLQk9GD0LzQsNC90LjRgtCw0YDQvdC+LdCt0LrQvtC70L7Qs9C40YfQtdGB0LrQuNC5INCY0L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCV0LLRgNC+0L/QtdC50YHQutC40Lkg0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQn9GA0LDQstCwIEpVU1RPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCx0LjQt9C90LXRgdCwINC4INC/0L7Qu9C40YLQuNC60LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIgJnF1b3Q70JLRi9GB0YjQuNC1INGB0YLQvtC70YvQv9C40L3RgdC60LjQtSDQutGD0YDRgdGLINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INC/0YDQsNCy0LAg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y8mcXVvdDtcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LXQstGA0L7Qv9C10LnRgdC60LjRhSDQutGD0LvRjNGC0YPRgFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNC90L7RgdGC0YDQsNC90L3Ri9GFINGP0LfRi9C60L7QslwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQutC+0LzQvNC10YDRhtC40Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQnNC40YDQvtCy0L7QuSDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0LjQvdGE0L7RgNC80LDRgtC40LfQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC40YDQvtCy0YvRhSDRhtC40LLQuNC70LjQt9Cw0YbQuNC5XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YDQsNC60YLQuNGH0LXRgdC60L7Qs9C+INCy0L7RgdGC0L7QutC+0LLQtdC00LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70YzQvdC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGE0LjQvdCw0L3RgdC+0LIsINGN0LrQvtC90L7QvNC40LrQuCDQuCDQv9GA0LDQstCwINC+0YTQuNGG0LXRgNC+0LIg0LfQsNC/0LDRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRj9C30YvQutC+0LIg0Lgg0LrRg9C70YzRgtGD0YAg0LjQvNC10L3QuCDQmy7QotC+0LvRgdGC0L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQvtGC0YDQsNGB0LvQtdCy0L7QuSDRgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YTQuNC90LDQvdGB0L7QstC+LdGO0YDQuNC00LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQnNCk0K7QkFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LzRg9C30YvQutC4INC40LzQtdC90Lgg0JAu0JMuINCo0L3QuNGC0LrQtVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0L/QtdC00LDQs9C+0LPQuNGH0LXRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDRgdGE0LXRgNGLINGB0L7RhtC40LDQu9GM0L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INChLtCuLiDQktC40YLRgtC1XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgdC+0YbQuNCw0LvRjNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDCq9Ci0KPQoNCewrtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIgKNCzLiDQnNC+0YHQutCy0LApXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGB0L7QstGA0LXQvNC10L3QvdC+0LPQviDQsNC60LDQtNC10LzQuNGH0LXRgdC60L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40LzQtdC90Lgg0JXQutCw0YLQtdGA0LjQvdGLINCS0LXQu9C40LrQvtC5XCJ9LHtcInRpdGxlXCI6XCLQn9C10YDQstGL0Lkg0LzQvtGB0LrQvtCy0YHQutC40Lkg0Y7RgNC40LTQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LDRjyDRiNC60L7Qu9CwICjQmNC90YHRgtC40YLRg9GCKVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L3QtdGE0YLQuCDQuCDQs9Cw0LfQsCDQuNC80LXQvdC4INCYLtCcLiDQk9GD0LHQutC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0KHQvtCy0YDQtdC80LXQvdC90LDRjyDQs9GD0LzQsNC90LjRgtCw0YDQvdCw0Y8g0LDQutCw0LTQtdC80LjRj1wifSx7XCJ0aXRsZVwiOlwi0KHQv9C10YbQuNCw0LvQuNC30LjRgNC+0LLQsNC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0Y7RgNC40YHQv9GA0YPQtNC10L3RhtC40LhcIn0se1widGl0bGVcIjpcItCh0YLQvtC70LjRh9C90YvQuSDQuNC90YHRgtC40YLRg9GCINC/0LXRgNC10LLQvtC00YfQuNC60L7QslwifSx7XCJ0aXRsZVwiOlwi0KTQuNC70LjQsNC7INCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCz0YHQutC+0LPQviDQuNC90YHRgtC40YLRg9GC0LAg0LLQvdC10YjQvdC10Y3QutC+0L3QvtC80LjRh9C10YHQutC40YUg0YHQstGP0LfQtdC5LCDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNCw0LLQsCDQsiDQsy4g0JzQvtGB0LrQstC1XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCQ0LrRgtGD0LDQu9GM0L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRjyDQrtGA0JjQvdGE0L7QoC3QnNCT0KNcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LbQuNCy0L7Qv9C40YHQuCwg0LLQsNGP0L3QuNGPINC4INC30L7QtNGH0LXRgdGC0LLQsCDQmNC70YzQuCDQk9C70LDQt9GD0L3QvtCy0LBcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0YHQvtGG0LjQsNC70YzQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQvtCz0L4g0YDQsNC30LLQuNGC0LjRjyAo0LjQvdGB0YLQuNGC0YPRgilcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0J/RgNCw0LrRgtC40YfQtdGB0LrQvtC5INCf0YHQuNGF0L7Qu9C+0LPQuNC4INC4INCf0YHQuNGF0L7QsNC90LDQu9C40LfQsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvdC90L7QstCw0YbQuNC+0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0Lgg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0L/RgNCw0LLQvtGB0YPQtNC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQvdCw0L3RgdC+0LLQvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDCq9Ch0LjQvdC10YDQs9C40Y/Cu1wifSx7XCJ0aXRsZVwiOlwi0JPRg9C80LDQvdC40YLQsNGA0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Qvi3RgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQnNC+0YHQutC+0LLRgdC60LDRjyDQstGL0YHRiNCw0Y8g0YjQutC+0LvQsCDRgdC+0YbQuNCw0LvRjNC90YvRhSDQuCDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjRhSDQvdCw0YPQulwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRjywg0L/RgNCw0LLQsCDQuCDQuNC90L3QvtCy0LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQs9GD0LzQsNC90LjRgtCw0YDQvdC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPINC4INC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40L3QtNGD0YHRgtGA0LjQuCDRgtGD0YDQuNC30LzQsCDQuNC80LXQvdC4INCuLtCQLtCh0LXQvdC60LXQstC40YfQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC10YDQstC40YHQsCAo0LMuINCc0L7RgdC60LLQsCkgKNGE0LjQu9C40LDQuykg0KDQvtGB0YHQuNC50YHQutC+0LPQviDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0YLRg9GA0LjQt9C80LAg0Lgg0YHQtdGA0LLQuNGB0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgNC+0LTRgdC60L7QuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGD0L/RgNCw0LLQu9C10L3QuNGPINCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstCwINCc0L7RgdC60LLRi1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGA0L7QtNGB0LrQvtC5INC40L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdC+0LPQviDRgtGD0YDQuNC30LzQsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQsNC00LLQvtC60LDRgtGD0YDRiyDQuCDQvdC+0YLQsNGA0LjQsNGC0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LjQvdC00YPRgdGC0YDQuNC4INC80L7QtNGLXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCwg0YTQuNC90LDQvdGB0L7QsiDQuCDQv9GA0LDQstCwICjQmNCt0KTQnylcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0KPQndCY0JpcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0KHRgtC+0LvQuNGH0L3QsNGPINGE0LjQvdCw0L3RgdC+0LLQvi3Qs9GD0LzQsNC90LjRgtCw0YDQvdCw0Y8g0LDQutCw0LTQtdC80LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDQuCDQutC+0YDQv9C+0YDQsNGC0LjQstC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC90LDRhtC40L7QvdCw0LvRjNC90YvRhSDQuCDRgNC10LPQuNC+0L3QsNC70YzQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3Ri9GFINC40L3QvdC+0LLQsNGG0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10L3QtdC00LbQvNC10L3RgtCwINC4INCx0LjQt9C90LXRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0L7RhtC40LDQu9GM0L3Ri9GFINC90LDRg9C6XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgdC+0YbQuNCw0LvRjNC90L4t0LPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LHQsNC90LrQvtCy0YHQutC+0LPQviDQtNC10LvQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQttGD0YDQvdCw0LvQuNGB0YLQuNC60Lgg0Lgg0LvQuNGC0LXRgNCw0YLRg9GA0L3QvtCz0L4g0YLQstC+0YDRh9C10YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQvdCw0L3RgdC+0LLQvi3Qv9GA0LDQstC+0LLQvtC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LDQstGC0L7QvNC+0LHQuNC70YzQvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC40L3RgdGC0LjRgtGD0YIgwqvQmNCd0KTQni3QoNGD0YLQtdC90LjRj8K7XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0L7QstGA0LXQvNC10L3QvdC+0LPQviDQv9GA0LDQstCwINC4INGN0LrQvtC90L7QvNC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjRhSDQv9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQoNGD0YHRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPINC40LzQtdC90Lgg0JIu0J8uINCn0LXRgNC90L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YDQsNCy0L7QstC+0Lkg0Y3QutC+0L3QvtC80LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsdGD0YXQs9Cw0LvRgtC10YDRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCICjQnNCR0JgpXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGE0LjQt9C40YfQtdGB0LrQvtC5INC60YPQu9GM0YLRg9GA0Ysg0Lgg0YHQv9C+0YDRgtCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGO0YDQuNGB0L/RgNGD0LTQtdC90YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC+0YLQutGA0YvRgtC+0LPQviDQsdC40LfQvdC10YEt0L7QsdGA0LDQt9C+0LLQsNC90LjRjyDQuCDQtNC40LfQsNC50L3QsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQodC+0LTRgNGD0LbQtdGB0YLQstCwINCd0LXQt9Cw0LLQuNGB0LjQvNGL0YUg0JPQvtGB0YPQtNCw0YDRgdGC0LJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INGB0L7RhtC40LDQu9GM0L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0LDQvdGC0LjQutGA0LjQt9C40YHQvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDRgNGL0L3QutCwINGC0YDRg9C00LAg0Lgg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgNC10LrQu9Cw0LzRi1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtC5INGN0LrQvtC90L7QvNC40LrQuCAo0LMuINCc0L7RgdC60LLQsClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINCy0L3Rg9GC0YDQtdC90L3QuNGFINC00LXQuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgdC40YXQvtGC0LXRgNCw0L/QuNC4INC4INC60LvQuNC90LjRh9C10YHQutC+0Lkg0L/RgdC40YXQvtC70L7Qs9C40LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCICZxdW90O9CS0KLQoyZxdW90O1wifSx7XCJ0aXRsZVwiOlwi0KHQvtGG0LjQsNC70YzQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YLRg9GA0LjQt9C80LAg0Lgg0LPQvtGB0YLQtdC/0YDQuNC40LzRgdGC0LLQsCAo0LMuINCc0L7RgdC60LLQsCkgKNGE0LjQu9C40LDQuykg0KDQvtGB0YHQuNC50YHQutC+0LPQviDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0YLRg9GA0LjQt9C80LAg0Lgg0YHQtdGA0LLQuNGB0LBcIn0se1widGl0bGVcIjpcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0L7RgtC60YDRi9GC0YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC40L3RhNGA0LDRgdGC0YDRg9C60YLRg9GA0Ysg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0YHQvtGG0LjQsNC70YzQvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JHQuNCx0LvQtdC50YHQutC+LdCx0L7Qs9C+0YHQu9C+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGB0LLRj9GC0L7Qs9C+INCw0L/QvtGB0YLQvtC70LAg0JDQvdC00YDQtdGPXCJ9LHtcInRpdGxlXCI6XCLQk9GD0LzQsNC90LjRgtCw0YDQvdC+LdCf0YDQvtCz0L3QvtGB0YLQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCx0LjQt9C90LXRgdCwINC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0L/RgdC40YXQvtCw0L3QsNC70LjQt9CwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPINC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INC60YPQu9GM0YLRg9GA0YsgKNCzLiDQnNC+0YHQutCy0LApXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC60L7QvNC80YPQvdC40LrQsNGC0LjQstC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90YvRhSDRgdC+0YbQuNCw0LvRjNC90L4t0LPRg9C80LDQvdC40YLQsNGA0L3Ri9GFINGB0LLRj9C30LXQuVwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDQk9C10L3QtdGA0LDQu9GM0L3QvtC5INC/0YDQvtC60YPRgNCw0YLRg9GA0Ysg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC90LXQtNCy0LjQttC40LzQvtGB0YLQuCDQuCDRgdGC0YDQvtC40YLQtdC70YzQvdC+0LPQviDQsdC40LfQvdC10YHQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRhNC40LvQvtGB0L7RhNC40LgsINGC0LXQvtC70L7Qs9C40Lgg0Lgg0LjRgdGC0L7RgNC40Lgg0YHQstGP0YLQvtCz0L4g0KTQvtC80YtcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YLQtdCw0YLRgNCw0LvRjNC90L7Qs9C+INC40YHQutGD0YHRgdGC0LLQsCDQuNC8LiDQny7QnC4g0JXRgNGI0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPLCDRjdC60L7QvdC+0LzQuNC60LgsINC/0YDQsNCy0LAg0Lgg0LjRgdC60YPRgdGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90LDRjyDQsNC60LDQtNC10LzQuNGPINC+0YbQtdC90LrQuCDQuCDQutC+0L3RgdCw0LvRgtC40L3Qs9CwXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdC+LdC70LjQvdCz0LLQuNGB0YLQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC40L3QtNGD0YHRgtGA0LjQuCDRgdC10YDQstC40YHQsFwifSx7XCJ0aXRsZVwiOlwi0JvQvtCx0L3QtdC90YHQutC40Lkg0YTQuNC70LjQsNC7INCc0L7RgdC60L7QstGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINGN0LrQvtC90L7QvNC40LrQuCwg0YHRgtCw0YLQuNGB0YLQuNC60Lgg0Lgg0LjQvdGE0L7RgNC80LDRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQsNC90LDQu9C40YLQuNGH0LXRgdC60L7QuSDQv9GB0LjRhdC+0LvQvtCz0LjQuCDQuCDQv9GB0LjRhdC+0LDQvdCw0LvQuNC30LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LvQuNC90LPQstC40YHRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRgNC10LrQu9Cw0LzRiywg0YLRg9GA0LjQt9C80LAsINGI0L7Rgy3QsdC40LfQvdC10YHQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0JjRgdC70LDQvNGB0LrQuNC5INCj0L3QuNCy0LXRgNGB0LjRgtC10YIgKNCj0YfRgNC10LbQtNC10L3QuNC1KVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0L3QsNC70L7Qs9C+0LLRi9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGC0YDQsNC90YHQv9C+0YDRgtC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0LTQuNC30LDQudC90LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y3QvdC10YDQs9C+0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC4INGN0L3QtdGA0LPQvtGB0LHQtdGA0LXQttC10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCx0LjQt9C90LXRgdCwINC4INC00LXQu9C+0LLQvtCz0L4g0LDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjRjyAo0JjQkdCU0JApINCg0L7RgdGB0LjQudGB0LrQvtC5INCw0LrQsNC00LXQvNC40Lgg0L3QsNGA0L7QtNC90L7Qs9C+INGF0L7Qt9GP0LnRgdGC0LLQsCDQuCDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lkg0YHQu9GD0LbQsdGLINC/0YDQuCDQn9GA0LXQt9C40LTQtdC90YLQtSDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LTQtdC70L7QstC+0Lkg0LrQsNGA0YzQtdGA0YtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGF0YPQtNC+0LbQtdGB0YLQstC10L3QvdC+LdC/0YDQvtC80YvRiNC70LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPINC4INC40L3RhNC+0YDQvNCw0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC10LLRgNC10LnRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCwg0YTQuNC90LDQvdGB0L7QsiDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQktC+0LXQvdC90YvQuSDRg9GH0LXQsdC90L4t0L3QsNGD0YfQvdGL0Lkg0YbQtdC90YLRgCDQktC+0LXQvdC90L4t0LLQvtC30LTRg9GI0L3Ri9GFINGB0LjQuyDCq9CS0L7QtdC90L3Qvi3QstC+0LfQtNGD0YjQvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQuNC80LXQvdC4INC/0YDQvtGE0LXRgdGB0L7RgNCwINCdLtCVLiDQltGD0LrQvtCy0YHQutC+0LPQviDQuCDQri7QkC4g0JPQsNCz0LDRgNC40L3QsMK7XCJ9LHtcInRpdGxlXCI6XCLQktC+0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINCg0LDQutC10YLQvdGL0YUg0LLQvtC50YHQuiDRgdGC0YDQsNGC0LXQs9C40YfQtdGB0LrQvtCz0L4g0L3QsNC30L3QsNGH0LXQvdC40Y8g0LjQvNC10L3QuCDQn9C10YLRgNCwINCS0LXQu9C40LrQvtCz0L5cIn0se1widGl0bGVcIjpcItCh0LLRj9GC0L4t0KTQuNC70LDRgNC10YLQvtCy0YHQutC40Lkg0L/RgNCw0LLQvtGB0LvQsNCy0L3Qvi3RhdGA0LjRgdGC0LjQsNC90YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JLQvtC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgtGA0LDQtNC40YbQuNC+0L3QvdC+0LPQviDQv9GA0LjQutC70LDQtNC90L7Qs9C+INC40YHQutGD0YHRgdGC0LLQsCAo0JzQvtGB0LrQvtCy0YHQutC40Lkg0YTQuNC70LjQsNC7KSDQktGL0YHRiNC10Lkg0YjQutC+0LvRiyDQvdCw0YDQvtC00L3Ri9GFINC40YHQutGD0YHRgdGC0LIgKNC40L3RgdGC0LjRgtGD0YLQsClcIn0se1widGl0bGVcIjpcItCk0LjQvdCw0L3RgdC+0LLQvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0LHQuNC30L3QtdGB0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YDRi9C90L7Rh9C90L7QuSDRjdC60L7QvdC+0LzQuNC60LgsINGB0L7RhtC40LDQu9GM0L3QvtC5INC/0L7Qu9C40YLQuNC60Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y8g0LIg0L/RgNC+0LzRi9GI0LvQtdC90L3QvtGB0YLQuFwifSx7XCJ0aXRsZVwiOlwi0JLQvtC10L3QvdGL0Lkg0YPRh9C10LHQvdC+LdC90LDRg9GH0L3Ri9C5INGG0LXQvdGC0YAg0KHRg9GF0L7Qv9GD0YLQvdGL0YUg0LLQvtC50YHQuiDCq9Ce0LHRidC10LLQvtC50YHQutC+0LLQsNGPINCw0LrQsNC00LXQvNC40Y8g0JLQvtC+0YDRg9C20LXQvdC90YvRhSDQodC40Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4wrtcIn0se1widGl0bGVcIjpcItCh0YLQvtC70LjRh9C90YvQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdC+0LPQviDRg9GH0LXRgtCwINC4INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGA0YPRgdGB0LrQvtCz0L4g0YLQtdCw0YLRgNCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCz0L7RgdGC0LjQvdC40YfQvdC+0LPQviDQuCDRgtGD0YDQuNGB0YLQuNGH0LXRgdC60L7Qs9C+INC80LXQvdC10LTQttC80LXQvdGC0LBcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQmNC90YHRgtC40YLRg9GCINCU0LjQt9Cw0LnQvdCwXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQvNC+0LTRi1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YTQuNC70LjQsNC7INCg0L7RgdGB0LjQudGB0LrQvtC5INC80LXQttC00YPQvdCw0YDQvtC00L3QvtC5INCw0LrQsNC00LXQvNC40Lgg0YLRg9GA0LjQt9C80LBcIn0se1widGl0bGVcIjpcItCf0L7Qs9GA0LDQvdC40YfQvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQpNC10LTQtdGA0LDQu9GM0L3QvtC5INGB0LvRg9C20LHRiyDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0L7QstGA0LXQvNC10L3QvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRjywg0LrQuNC90L4g0Lgg0YLQtdC70LXQstC40LTQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQvtC1INCy0YvRgdGI0LXQtSDQstC+0LXQvdC90L7QtSDQutC+0LzQsNC90LTQvdC+0LUg0YPRh9C40LvQuNGJ0LUgKNCy0L7QtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIpICjRhNC40LvQuNCw0LspINCS0L7QtdC90L3QvtCz0L4g0YPRh9C10LHQvdC+LdC90LDRg9GH0L3QvtCz0L4g0YbQtdC90YLRgNCwINCh0YPRhdC+0L/Rg9GC0L3Ri9GFINCy0L7QudGB0LogJnF1b3Q70J7QsdGJ0LXQstC+0LnRgdC60L7QstCw0Y8g0LDQutCw0LTQtdC80LjRjyDQktC+0L7RgNGD0LbQtdC90L3Ri9GFINCh0LjQuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LgmcXVvdDtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0L7RgtC60YDRi9GC0L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC90LXQtNC20LzQtdC90YLQsCwg0Y3QutC+0L3QvtC80LjQutC4INC4INC40L3QvdC+0LLQsNGG0LjQuVwifSx7XCJ0aXRsZVwiOlwi0J7RgdGC0LDQvdC60LjQvdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YLQtdC70LXQstC40LTQtdC90LjRjyDQuCDRgNCw0LTQuNC+0LLQtdGJ0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INGD0L/RgNCw0LLQu9C10L3QuNGPINCyINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstC1INC4INC/0YDQvtC80YvRiNC70LXQvdC90L7RgdGC0LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgdC40YXQvtC70L7Qs9C40LhcIn0se1widGl0bGVcIjpcItCe0YLQutGA0YvRgtGL0Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCh0LvQsNCy0Y/QvdC+LdCT0YDQtdC60L4t0JvQsNGC0LjQvdGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCw0YDRhdC40YLQtdC60YLRg9GA0L3Qvi3RgdGC0YDQvtC40YLQtdC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YHQvtGG0LjQsNC70YzQvdC+LdC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0J/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvdC10L/RgNC10YDRi9Cy0L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuCDRgdC10YDQstC40YHQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YTQuNC70LjQsNC7INCw0LLRgtC+0L3QvtC80L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNGC0LXQu9GM0L3QvtCz0L4g0YPRh9GA0LXQttC00LXQvdC40Y8g0JvQtdC90LjQvdCz0YDQsNC00YHQutC+0LPQviDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C90LjQstC10YDRgdC40YLQtdGC0LAg0LjQvNC10L3QuCDQkC7QoS4g0J/Rg9GI0LrQuNC90LBcIn0se1widGl0bGVcIjpcItCS0YvRgdGI0LDRjyDRiNC60L7Qu9CwINGE0LjQvdCw0L3RgdC+0LIg0Lgg0LzQtdC90LXQtNC20LzQtdC90YLQsCDQoNC+0YHRgdC40LnRgdC60L7QuSDQsNC60LDQtNC10LzQuNC4INC90LDRgNC+0LTQvdC+0LPQviDRhdC+0LfRj9C50YHRgtCy0LAg0Lgg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC5INGB0LvRg9C20LHRiyDQv9GA0Lgg0J/RgNC10LfQuNC00LXQvdGC0LUg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQodC+0LLRgNC10LzQtdC90L3Ri9C5INC80L7RgNGB0LrQvtC5INC40L3RgdGC0LjRgtGD0YJcIn1dXG5cbiAgICAgIHVuaXZlcmNpdHlzLmluaXRpYWxpemUoKVxuXG4gICAgICBpZiB1bml2ZXJjaXR5Lmhhc0NsYXNzICd0dC1pbnB1dCdcbiAgICAgICAgdW5pdmVyY2l0eS50eXBlYWhlYWQoJ2Rlc3Ryb3knKVxuXG4gICAgICB1bml2ZXJjaXR5LnR5cGVhaGVhZFxuICAgICAgICBoaW50OiBmYWxzZVxuICAgICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgICAgbWluTGVuZ3RoOiAxXG4gICAgICAsXG4gICAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuICAgICAgdW5pdmVyY2l0eS5vbiAnY2hhbmdlJywgQGFkZEZhY3VsdHlcbiAgICAgIHVuaXZlcmNpdHkub24gJ2JsdXInLCBAYWRkRmFjdWx0eVxuICAgICAgdW5pdmVyY2l0eS5vbiAndHlwZWFoZWFkOmF1dG9jb21wbGV0ZWQnLCBAYWRkRmFjdWx0eVxuICAgICAgdW5pdmVyY2l0eS5vbiAndHlwZWFoZWFkOnNlbGVjdGVkJywgQGFkZEZhY3VsdHlcblxuICAgIGVsc2VcblxuICAgICAgdW5pdmVyY2l0eS50eXBlYWhlYWQoJ2Rlc3Ryb3knKVxuICAgICAgdW5pdmVyY2l0eS5vZmYgJ2NoYW5nZScsIEBhZGRGYWN1bHR5XG4gICAgICB1bml2ZXJjaXR5Lm9mZiAnYmx1cicsIEBhZGRGYWN1bHR5XG4gICAgICBmYWN1bHR5LnR5cGVhaGVhZCgnZGVzdHJveScpXG5cblxuXG4gIGFkZEZhY3VsdHk6IChldmVudCk9PlxuXG4gICAgdW5pdmVyY2l0eSA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIHZhbHVlID0gdW5pdmVyY2l0eS52YWwoKS50cmltKClcblxuICAgIHdyYXBwZXIgPSB1bml2ZXJjaXR5LmNsb3Nlc3QoJy5lZHVjYXRpb24td3JhcHBlcicpXG4gICAgZmFjdWx0eSA9IHdyYXBwZXIuZmluZCgnLmZhY3VsdHknKVxuXG4gICAgaWYgdmFsdWUgPT0gJ9Cd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGP0LTQtdGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQnNCY0KTQmMK7J1xuXG4gICAgICBmYWN1bHR5cyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgICAgIGRhdHVtVG9rZW5pemVyOiAoZGF0YSktPlxuICAgICAgICAgIHJldHVybiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZShkYXRhLnRpdGxlKVxuICAgICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICAgIGxpbWl0OiA2MDBcbiAgICAgICAgbG9jYWw6IFt7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC90LDRgNC+0LTQvdC+0LPQviDRhdC+0LfRj9C50YHRgtCy0LAg0Lgg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC5INGB0LvRg9C20LHRiyDQv9GA0Lgg0J/RgNC10LfQuNC00LXQvdGC0LUg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGC0YDRg9C00LAg0Lgg0YHQvtGG0LjQsNC70YzQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5XCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGF0L7RgNC+0LLQvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwINC40LzQtdC90Lgg0JIu0KEuINCf0L7Qv9C+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLRgdC10YDQvtGB0YHQuNC50YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQstC90LXRiNC90LXQuSDRgtC+0YDQs9C+0LLQu9C4INCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDRjdC60L7QvdC+0LzQuNGH0LXRgdC60L7Qs9C+INGA0LDQt9Cy0LjRgtC40Y8g0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQktGB0LXRgNC+0YHRgdC40LnRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0L3QsNC70L7Qs9C+0LLQsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCS0YHQtdGA0L7RgdGB0LjQudGB0LrQuNC5ICDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQutC40L3QtdC80LDRgtC+0LPRgNCw0YTQuNC4INC40Lwu0KEu0JAu0JPQtdGA0LDRgdC40LzQvtCy0LBcIn0se1widGl0bGVcIjpcItCX0LDQvtGH0L3Ri9C5INGE0LjQvdCw0L3RgdC+0LLQvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCk0LjQvdCw0L3RgdC+0LLQvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINC/0YDQuCDQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQtSDQoNC+0YHRgdC40LnRgdC60L7QuSDRhNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0JLRi9GB0YjQsNGPINGI0LrQvtC70LAg0KHQvtCy0YDQtdC80LXQvdC90L7QtSDQvtCx0YDQsNC30L7QstCw0L3QuNC1XCJ9LHtcInRpdGxlXCI6XCLQotC10LDRgtGA0LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LjQvNC10L3QuCDQkdC+0YDQuNGB0LAg0KnRg9C60LjQvdCwINC/0YDQuCDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lwg0LDQutCw0LTQtdC80LjRh9C10YHQutC+0Lwg0YLQtdCw0YLRgNC1INC40LzQtdC90Lgg0JXQstCzLiDQktCw0YXRgtCw0L3Qs9C+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLRi9GB0YjQtdC1INGC0LXQsNGC0YDQsNC70YzQvdC+0LUg0YPRh9C40LvQuNGJ0LUgKNC40L3RgdGC0LjRgtGD0YIpINC40LwuINCcLtChLiDQqdC10L/QutC40L3QsCDQv9GA0Lgg0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC8INCw0LrQsNC00LXQvNC40YfQtdGB0LrQvtC8INCc0LDQu9C+0Lwg0YLQtdCw0YLRgNC1INCg0L7RgdC40LhcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPINGB0LvQsNCy0Y/QvdGB0LrQvtC5INC60YPQu9GM0YLRg9GA0YtcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LrQu9Cw0YHRgdC40YfQtdGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LjQvNC10L3QuCDQnNCw0LnQvNC+0L3QuNC00LBcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINGA0YPRgdGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCDQuNC8INCQLtChLiDQn9GD0YjQutC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80YPQt9GL0LrQsNC70YzQvdC+LdC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCcLtCcLiDQmNC/0L/QvtC70LjRgtC+0LLQsC3QmNCy0LDQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGB0L/QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40YHQutGD0YHRgdGC0LJcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDRjdC60L7QvdC+0LzQuNC60LjCu1wifSx7XCJ0aXRsZVwiOlwi0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/QviDQt9C10LzQu9C10YPRgdGC0YDQvtC50YHRgtCy0YNcIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCICjQsy4g0JzQvtGB0LrQstCwKVwifSx7XCJ0aXRsZVwiOlwi0JTQuNC/0LvQvtC80LDRgtC40YfQtdGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdC+0LPQviDQv9GA0LDQstCwINC4INGN0LrQvtC90L7QvNC40LrQuCDQuNC80LXQvdC4INCQLtChLtCT0YDQuNCx0L7QtdC00L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQm9C40YLQtdGA0LDRgtGD0YDQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCQLtCcLtCT0L7RgNGM0LrQvtCz0L5cIn0se1widGl0bGVcIjpcItCc0JDQotCYIC0g0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0Jou0K0uINCm0LjQvtC70LrQvtCy0YHQutC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRh9C10YHQutC40Lkg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDQnNCd0K3Qn9CjXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCyINCc0L7RgdC60LLQtVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsCDQv9GA0Lgg0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0LUg0LMuINCc0L7RgdC60LLRi1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LLQtdGC0LXRgNC40L3QsNGA0L3QvtC5INC80LXQtNC40YbQuNC90Ysg0Lgg0LHQuNC+0YLQtdGF0L3QvtC70L7Qs9C40Lgg0LjQvNC10L3QuCDQmi7QmC4g0KHQutGA0Y/QsdC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LLQvtC00L3QvtCz0L4g0YLRgNCw0L3RgdC/0L7RgNGC0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC00LjQt9Cw0LnQvdCwINC4INGC0LXRhdC90L7Qu9C+0LPQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9GA0LjQsdC+0YDQvtGB0YLRgNC+0LXQvdC40Y8g0Lgg0LjQvdGE0L7RgNC80LDRgtC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YLQvtC90LrQuNGFINGF0LjQvNC40YfQtdGB0LrQuNGFINGC0LXRhdC90L7Qu9C+0LPQuNC5INC40LzQtdC90Lgg0Jwu0JIuINCb0L7QvNC+0L3QvtGB0L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDRhdC+0YDQtdC+0LPRgNCw0YTQuNC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LPQtdC+0LvQvtCz0L7RgNCw0LfQstC10LTQvtGH0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQodC10YDQs9C+INCe0YDQtNC20L7QvdC40LrQuNC00LfQtVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7QvdGB0LXRgNCy0LDRgtC+0YDQuNGPICjRg9C90LjQstC10YDRgdC40YLQtdGCKSDQuNC80LXQvdC4INCfLiDQmC4g0KfQsNC50LrQvtCy0YHQutC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXQutGB0YLQuNC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiAg0LjQvNC10L3QuCDQkC7QnS4g0JrQvtGB0YvQs9C40L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGO0YDQuNC00LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCeLiDQlS4g0JrRg9GC0LDRhNC40L3QsFwifSx7XCJ0aXRsZVwiOlwi0J/QtdGA0LLRi9C5INCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQmC7QnC4g0KHQtdGH0LXQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LzQtdC20LTRg9C90LDRgNC+0LTQvdCw0Y8g0LLRi9GB0YjQsNGPINGI0LrQvtC70LAg0LHQuNC30L3QtdGB0LAg0JzQmNCg0JHQmNChICjQmNC90YHRgtC40YLRg9GCKVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCw0LPRgNCw0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgi0g0JzQodCl0JAg0LjQvNC10L3QuCDQmi7QkC4g0KLQuNC80LjRgNGP0LfQtdCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCw0YDRhdC40YLQtdC60YLRg9GA0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIgKNCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQsNC60LDQtNC10LzQuNGPKSAo0JzQkNCg0KXQmClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCx0LDQvdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgNC+0LTRgdC60L7QuSDQv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgNC+0LTRgdC60L7QuSDQv9GB0LjRhdC+0LvQvtCz0L4t0L/QtdC00LDQs9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgNCw0LTQuNC+0YLQtdGF0L3QuNC60LgsINGN0LvQtdC60YLRgNC+0L3QuNC60Lgg0Lgg0LDQstGC0L7QvNCw0YLQuNC60LggKNGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgikgKNCc0JjQoNCt0JApXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsNCy0LjQsNGG0LjQvtC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIgKNC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIpXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsNCy0YLQvtC80L7QsdC40LvRjNC90L4t0LTQvtGA0L7QttC90YvQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YLQtdGF0L3QuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCICjQnNCQ0JTQmClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQsNCz0YDQvtC40L3QttC10L3QtdGA0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQki7Qny4g0JPQvtGA0Y/Rh9C60LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LDQutCw0LTQtdC80LjRh9C10YHQutC40Lkg0YXRg9C00L7QttC10YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC40LzQtdC90Lgg0JIu0JguINCh0YPRgNC40LrQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQstC10YfQtdGA0L3QuNC5INC80LXRgtCw0LvQu9GD0YDQs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQs9C+0YDQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y8g0LjQvNC10L3QuCDQmi7Qky4g0KDQsNC30YPQvNC+0LLRgdC60L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdC00YPRgdGC0YDQuNCw0LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRj9C00LXRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0JzQmNCk0JjCu1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0YUg0L7RgtC90L7RiNC10L3QuNC5ICjRg9C90LjQstC10YDRgdC40YLQtdGCKVwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQnNCY0KHQuNChwrtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y3Qu9C10LrRgtGA0L7QvdC40LrQuCDQuCDQvNCw0YLQtdC80LDRgtC40LrQuCDQndCw0YbQuNC+0L3QsNC70YzQvdC+0LPQviDQuNGB0YHQu9C10LTQvtCy0LDRgtC10LvRjNGB0LrQvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwIMKr0JLRi9GB0YjQsNGPINGI0LrQvtC70LAg0Y3QutC+0L3QvtC80LjQutC4wrtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQu9C40L3Qs9Cy0LjRgdGC0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0Jwu0JAuINCo0L7Qu9C+0YXQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvtGC0LrRgNGL0YLRi9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQki7QoS4g0KfQtdGA0L3QvtC80YvRgNC00LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YHQvtGG0LjQsNC70YzQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGB0YLRgNC+0LjRgtC10LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIC0g0L3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40YHRgdC70LXQtNC+0LLQsNGC0LXQu9GM0YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INC80LDRiNC40L3QvtGB0YLRgNC+0LjRgtC10LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCICjQnNCQ0JzQmClcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LPRgNCw0LbQtNCw0L3RgdC60L7QuSDQsNCy0LjQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCdLtCtLiDQkdCw0YPQvNCw0L3QsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0KHRgtCw0L3QutC40L3Cu1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQnC7Qki4g0JvQvtC80L7QvdC+0YHQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCz0LXQvtC00LXQt9C40Lgg0Lgg0LrQsNGA0YLQvtCz0YDQsNGE0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvdC20LXQvdC10YDQvdC+0Lkg0Y3QutC+0LvQvtCz0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGC0L7RgNCz0L7QstC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0LXRh9Cw0YLQuCDQuNC80LXQvdC4INCY0LLQsNC90LAg0KTQtdC00L7RgNC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/QuNGJ0LXQstGL0YUg0L/RgNC+0LjQt9Cy0L7QtNGB0YLQslwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0L/RgNC40YDQvtC00L7QvtCx0YPRgdGC0YDQvtC50YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0YPRgtC10Lkg0YHQvtC+0LHRidC10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRjdC60L7QvdC+0LzQuNC60LgsINGB0YLQsNGC0LjRgdGC0LjQutC4INC4INC40L3RhNC+0YDQvNCw0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDRhdGD0LTQvtC20LXRgdGC0LLQtdC90L3Qvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQuNC8LiDQoS7Qky4g0KHRgtGA0L7Qs9Cw0L3QvtCy0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GC0LjQvNC10L3QuCDQlS7QoC4g0JTQsNGI0LrQvtCy0L7QuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LrQvtC80LzRg9C90LDQu9GM0L3QvtCz0L4g0YXQvtC30Y/QudGB0YLQstCwINC4INGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LzQtdC00LjQutC+LdGB0YLQvtC80LDRgtC+0LvQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRglwifSx7XCJ0aXRsZVwiOlwi0JzQntCh0JrQntCS0KHQmtCY0Jkg0J3QntCS0KvQmSDQrtCg0JjQlNCY0KfQldCh0JrQmNCZINCY0J3QodCi0JjQotCj0KJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQvtCx0LvQsNGB0YLQvdC+0LkgINGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC/0YHQuNGF0L7Qu9C+0LPQvi3RgdC+0YbQuNCw0LvRjNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgtC10YXQvdC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YHQstGP0LfQuCDQuCDQuNC90YTQvtGA0LzQsNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCIMKr0JzQrdCYwrtcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LzRg9C30YvQutC4INC40LzQtdC90Lgg0JPQvdC10YHQuNC90YvRhVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRgtC10LDRgtGA0LDQu9GM0L3QvtCz0L4g0LjRgdC60YPRgdGB0YLQstCwIC0g0JPQmNCi0JjQoVwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0YTQuNC30LjRh9C10YHQutC+0Lkg0LrRg9C70YzRgtGD0YDRiywg0YHQv9C+0YDRgtCwLCDQvNC+0LvQvtC00LXQttC4INC4INGC0YPRgNC40LfQvNCwICjQk9Cm0J7Qm9CY0KTQmilcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINC/0YDQsNCy0L7QstCw0Y8g0LDQutCw0LTQtdC80LjRjyDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0Y7RgdGC0LjRhtC40Lgg0KDQpFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0YjQutC+0LvQsCDRh9Cw0YHRgtC90L7Qs9C+INC/0YDQsNCy0LAgKNC40L3RgdGC0LjRgtGD0YIpXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0JMu0JIuINCf0LvQtdGF0LDQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjRgdGB0LvQtdC00L7QstCw0YLQtdC70YzRgdC60LjQuSDQvNC10LTQuNGG0LjQvdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQnS7QmC4g0J/QuNGA0L7Qs9C+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgtC10LrRgdGC0LjQu9GM0L3QvtC5INC4INC70LXQs9C60L7QuSDQv9GA0L7QvNGL0YjQu9C10L3QvdC+0YHRgtC4INC80L7RgdC60L7QstGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINGC0LXRhdC90L7Qu9C+0LPQuNC5INC4INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQuNC90YLQtdC70LvQtdC60YLRg9Cw0LvRjNC90L7QuSDRgdC+0LHRgdGC0LLQtdC90L3QvtGB0YLQuFwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0L3QvtCy0YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC00YDRg9C20LHRiyDQvdCw0YDQvtC00L7QslwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutC40Lkg0YXQuNC80LjQutC+LdGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40LzQtdC90Lgg0JQu0JguINCc0LXQvdC00LXQu9C10LXQstCwXCJ9LHtcInRpdGxlXCI6XCLQpNC40L3QsNC90YHQvtCy0YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC/0YDQuCDQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQtSDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCo0LrQvtC70LAt0YHRgtGD0LTQuNGPICjQuNC90YHRgtC40YLRg9GCKSDQuNC80LXQvdC4INCS0Lsu0JguINCd0LXQvNC40YDQvtCy0LjRh9CwLdCU0LDQvdGH0LXQvdC60L4g0L/RgNC4INCc0L7RgdC60L7QstGB0LrQvtC8INCl0YPQtNC+0LbQtdGB0YLQstC10L3QvdC+0Lwg0LDQutCw0LTQtdC80LjRh9C10YHQutC+0Lwg0YLQtdCw0YLRgNC1INC40LzQtdC90Lgg0JAu0J8uINCn0LXRhdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LrQuNC90L7QstC40LTQtdC+0LjQvdGB0YLQuNGC0YPRgiAo0YTQuNC70LjQsNC7KSDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs9GB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINC60LjQvdC+INC4INGC0LXQu9C10LLQuNC00LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC+0LHQu9Cw0YHRgtC90L7QuSDRhNC40LvQuNCw0Lsg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LPRgdC60L7Qs9C+INCT0YPQvNCw0L3QuNGC0LDRgNC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDQv9GA0L7RhNGB0L7RjtC30L7QsiDQmNC90YHRgtC40YLRg9GCINC40YHQutGD0YHRgdGC0LIg0Lgg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0LLQvdGD0YLRgNC10L3QvdC40YUg0LTQtdC7INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDQpNC10LTQtdGA0LDQu9GM0L3QvtC5INGB0LvRg9C20LHRiyDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQodC70LDQstGP0L3RgdC60LjQuSDQtNC10LvQvtCy0L7QuSDQuNC90YHRgtC40YLRg9GCINC40LwuINCaLtCSLiDQndC10YfQsNC10LLQsCAo0JzQuNGC0YDQvtC/0L7Qu9C40YLQsCDQn9C40YLQuNGA0LjQvNCwKVwifSx7XCJ0aXRsZVwiOlwi0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQoNC+0YHRgdC40LnRgdC60L7QuSDQsNC60LDQtNC10LzQuNC4INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0LDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7QuSDRgtC+0YDQs9C+0LLQu9C4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L/RgdC40YXQvtC70L7Qs9C40Lgg0Lgg0L/QtdC00LDQs9C+0LPQuNC60LhcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LPQvtGB0YLQuNC90LjRh9C90L7Qs9C+INC80LXQvdC10LTQttC80LXQvdGC0LAg0Lgg0YLRg9GA0LjQt9C80LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQv9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70YzRgdGC0LLQsCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCwg0L/QvtC70LjRgtC40LrQuCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40L3QsNC90YHQvtCy0L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3RgtC10YXQvdC40YfQtdGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCf0YDQsNCy0L7RgdC70LDQstC90YvQuSDQodCy0Y/RgtC+LdCi0LjRhdC+0L3QvtCy0YHQutC40Lkg0JPRg9C80LDQvdC40YLQsNGA0L3Ri9C5INCj0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40YfQtdGB0LrQuNC5INC/0YDQsNCy0L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LDQutCw0LTQtdC80LjRjyDQvtCx0YDQsNC30L7QstCw0L3QuNGPINCd0LDRgtCw0LvRjNC4INCd0LXRgdGC0LXRgNC+0LLQvtC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90LDRjyDQsNC60LDQtNC10LzQuNGPINCx0LjQt9C90LXRgdCwINC4INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGB0YLRgNCw0L0g0JLQvtGB0YLQvtC60LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INC/0YDQsNCy0L7RgdC70LDQstC90YvQuSDQuNC90YHRgtC40YLRg9GCINGB0LLRj9GC0L7Qs9C+INCY0L7QsNC90L3QsCDQkdC+0LPQvtGB0LvQvtCy0LBcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INGB0LvQsNCy0Y/QvdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCINGC0LXQu9C10LLQuNC00LXQvdC40Y8g0Lgg0YDQsNC00LjQvtCy0LXRidCw0L3QuNGPINC40LwuINCcLtCQLiDQm9C40YLQvtCy0YfQuNC90LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LzQuNGA0L7QstC+0Lkg0Y3QutC+0L3QvtC80LjQutC4INC4INC80LXQttC00YPQvdCw0YDQvtC00L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjQutC+LdGE0LjQvdCw0L3RgdC+0LLRi9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INGO0YDQuNC00LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0K3QutC+0L3QvtC80LjQutC+LdC/0YDQsNCy0L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0L/QvtCz0YDQsNC90LjRh9C90YvQuSDQuNC90YHRgtC40YLRg9GCINCk0LXQtNC10YDQsNC70YzQvdC+0Lkg0YHQu9GD0LbQsdGLINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQoNC+0YHRgdC40LnRgdC60L7QuSDQpNC10LTQtdGA0LDRhtC40LhcIn0se1widGl0bGVcIjpcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQuNC90YHRgtC40YLRg9GCINCx0LjQt9C90LXRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3Ri9GFINGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNGFINGB0LLRj9C30LXQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNGB0LrRg9GB0YHRgtCy0LAg0YDQtdGB0YLQsNCy0YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjQutC+LdC/0YDQsNCy0L7QstC+0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JDQutCw0LTQtdC80LjRjyDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0Lkg0L/RgNC+0YLQuNCy0L7Qv9C+0LbQsNGA0L3QvtC5INGB0LvRg9C20LHRi1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvNC10L3QtdC00LbQvNC10L3RgtCwINC40L3QvdC+0LLQsNGG0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDQv9GB0LjRhdC+0LvQvtCz0LjQuCAo0JjQvdGB0YLQuNGC0YPRgilcIn0se1widGl0bGVcIjpcItCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQsNC60LDQtNC10LzQuNGH0LXRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCz0YPQvNCw0L3QuNGC0LDRgNC90YvRhSDQvdCw0YPQulwifSx7XCJ0aXRsZVwiOlwi0JPRg9C80LDQvdC40YLQsNGA0L3Qvi3QrdC60L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQmNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQldCy0YDQvtC/0LXQudGB0LrQuNC5INCj0L3QuNCy0LXRgNGB0LjRgtC10YIg0J/RgNCw0LLQsCBKVVNUT1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQsdC40LfQvdC10YHQsCDQuCDQv9C+0LvQuNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCICZxdW90O9CS0YvRgdGI0LjQtSDRgdGC0L7Qu9GL0L/QuNC90YHQutC40LUg0LrRg9GA0YHRiyDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdC+0LPQviDQv9GA0LDQstCwINC4INGD0L/RgNCw0LLQu9C10L3QuNGPJnF1b3Q7XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC10LLRgNC+0L/QtdC50YHQutC40YUg0LrRg9C70YzRgtGD0YBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LjQvdC+0YHRgtGA0LDQvdC90YvRhSDRj9C30YvQutC+0LJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LrQvtC80LzQtdGA0YbQuNC4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0JzQuNGA0L7QstC+0Lkg0Y3QutC+0L3QvtC80LjQutC4INC4INC40L3RhNC+0YDQvNCw0YLQuNC30LDRhtC40LhcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQuNGA0L7QstGL0YUg0YbQuNCy0LjQu9C40LfQsNGG0LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GA0LDQutGC0LjRh9C10YHQutC+0LPQviDQstC+0YHRgtC+0LrQvtCy0LXQtNC10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRhNC40L3QsNC90YHQvtCyLCDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNCw0LLQsCDQvtGE0LjRhtC10YDQvtCyINC30LDQv9Cw0YHQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60Lgg0Lgg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y/Qt9GL0LrQvtCyINC4INC60YPQu9GM0YLRg9GAINC40LzQtdC90Lgg0Jsu0KLQvtC70YHRgtC+0LPQvlwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20L7RgtGA0LDRgdC70LXQstC+0Lkg0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQvdCw0L3RgdC+0LLQvi3RjtGA0LjQtNC40YfQtdGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JzQpNCu0JBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINC80YPQt9GL0LrQuCDQuNC80LXQvdC4INCQLtCTLiDQqNC90LjRgtC60LVcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC/0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0YHRhNC10YDRiyDRgdC+0YbQuNCw0LvRjNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LjQvNC10L3QuCDQoS7Qri4g0JLQuNGC0YLQtVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YHQvtGG0LjQsNC70YzQvdC+LdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQotCj0KDQnsK7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCICjQsy4g0JzQvtGB0LrQstCwKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0LDQutCw0LTQtdC80LjRh9C10YHQutC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC80LXQvdC4INCV0LrQsNGC0LXRgNC40L3RiyDQktC10LvQuNC60L7QuVwifSx7XCJ0aXRsZVwiOlwi0J/QtdGA0LLRi9C5INC80L7RgdC60L7QstGB0LrQuNC5INGO0YDQuNC00LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0KDQvtGB0YHQuNC50YHQutCw0Y8g0Y3QutC+0L3QvtC80LjRh9C10YHQutCw0Y8g0YjQutC+0LvQsCAo0JjQvdGB0YLQuNGC0YPRgilcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC90LXRhNGC0Lgg0Lgg0LPQsNC30LAg0LjQvNC10L3QuCDQmC7QnC4g0JPRg9Cx0LrQuNC90LBcIn0se1widGl0bGVcIjpcItCh0L7QstGA0LXQvNC10L3QvdCw0Y8g0LPRg9C80LDQvdC40YLQsNGA0L3QsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCh0L/QtdGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCINGO0YDQuNGB0L/RgNGD0LTQtdC90YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQodGC0L7Qu9C40YfQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQv9C10YDQtdCy0L7QtNGH0LjQutC+0LJcIn0se1widGl0bGVcIjpcItCk0LjQu9C40LDQuyDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs9GB0LrQvtCz0L4g0LjQvdGB0YLQuNGC0YPRgtCwINCy0L3QtdGI0L3QtdGN0LrQvtC90L7QvNC40YfQtdGB0LrQuNGFINGB0LLRj9C30LXQuSwg0Y3QutC+0L3QvtC80LjQutC4INC4INC/0YDQsNCy0LAg0LIg0LMuINCc0L7RgdC60LLQtVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQkNC60YLRg9Cw0LvRjNC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0K7RgNCY0L3RhNC+0KAt0JzQk9CjXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC20LjQstC+0L/QuNGB0LgsINCy0LDRj9C90LjRjyDQuCDQt9C+0LTRh9C10YHRgtCy0LAg0JjQu9GM0Lgg0JPQu9Cw0LfRg9C90L7QstCwXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGB0L7RhtC40LDQu9GM0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60L7Qs9C+INGA0LDQt9Cy0LjRgtC40Y8gKNC40L3RgdGC0LjRgtGD0YIpXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCf0YDQsNC60YLQuNGH0LXRgdC60L7QuSDQn9GB0LjRhdC+0LvQvtCz0LjQuCDQuCDQn9GB0LjRhdC+0LDQvdCw0LvQuNC30LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40L3QvdC+0LLQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5INC4INC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQoNC+0YHRgdC40LnRgdC60LDRjyDQsNC60LDQtNC10LzQuNGPINC/0YDQsNCy0L7RgdGD0LTQuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40L3QsNC90YHQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQodC40L3QtdGA0LPQuNGPwrtcIn0se1widGl0bGVcIjpcItCT0YPQvNCw0L3QuNGC0LDRgNC90L4t0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0Lgg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90L4t0YLQtdGF0L3QvtC70L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0LLRi9GB0YjQsNGPINGI0LrQvtC70LAg0YHQvtGG0LjQsNC70YzQvdGL0YUg0Lgg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40YUg0L3QsNGD0LpcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y8sINC/0YDQsNCy0LAg0Lgg0LjQvdC90L7QstCw0YbQuNC+0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LPRg9C80LDQvdC40YLQsNGA0L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRjyDQuCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQuNC90LTRg9GB0YLRgNC40Lgg0YLRg9GA0LjQt9C80LAg0LjQvNC10L3QuCDQri7QkC7QodC10L3QutC10LLQuNGH0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQtdGA0LLQuNGB0LAgKNCzLiDQnNC+0YHQutCy0LApICjRhNC40LvQuNCw0LspINCg0L7RgdGB0LjQudGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINGC0YPRgNC40LfQvNCwINC4INGB0LXRgNCy0LjRgdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQs9C+0YDQvtC00YHQutC+0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQsCDQnNC+0YHQutCy0YtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0L7RgNC+0LTRgdC60L7QuSDQuNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3QvtCz0L4g0YLRg9GA0LjQt9C80LBcIn0se1widGl0bGVcIjpcItCg0L7RgdGB0LjQudGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0LDQtNCy0L7QutCw0YLRg9GA0Ysg0Lgg0L3QvtGC0LDRgNC40LDRgtCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC40L3QtNGD0YHRgtGA0LjQuCDQvNC+0LTRi1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60LgsINGE0LjQvdCw0L3RgdC+0LIg0Lgg0L/RgNCw0LLQsCAo0JjQrdCk0J8pXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCj0J3QmNCaXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCh0YLQvtC70LjRh9C90LDRjyDRhNC40L3QsNC90YHQvtCy0L4t0LPRg9C80LDQvdC40YLQsNGA0L3QsNGPINCw0LrQsNC00LXQvNC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0Lgg0LrQvtGA0L/QvtGA0LDRgtC40LLQvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0YUg0Lgg0YDQtdCz0LjQvtC90LDQu9GM0L3Ri9GFINC+0YLQvdC+0YjQtdC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90YvRhSDQuNC90L3QvtCy0LDRhtC40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC90LXQtNC20LzQtdC90YLQsCDQuCDQsdC40LfQvdC10YHQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0YbQuNCw0LvRjNC90YvRhSDQvdCw0YPQulwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0YHQvtGG0LjQsNC70YzQvdC+LdCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINCx0LDQvdC60L7QstGB0LrQvtCz0L4g0LTQtdC70LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LbRg9GA0L3QsNC70LjRgdGC0LjQutC4INC4INC70LjRgtC10YDQsNGC0YPRgNC90L7Qs9C+INGC0LLQvtGA0YfQtdGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhNC40L3QsNC90YHQvtCy0L4t0L/RgNCw0LLQvtCy0L7QuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINCw0LLRgtC+0LzQvtCx0LjQu9GM0L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5INC4INGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQuNC90YHRgtC40YLRg9GCIMKr0JjQndCk0J4t0KDRg9GC0LXQvdC40Y/Cu1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0L/RgNCw0LLQsCDQuCDRjdC60L7QvdC+0LzQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40YUg0L/RgNC10L7QsdGA0LDQt9C+0LLQsNC90LjQuVwifSx7XCJ0aXRsZVwiOlwi0KDRg9GB0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuNC80LXQvdC4INCSLtCfLiDQp9C10YDQvdC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQv9GA0LDQstC+0LLQvtC5INGN0LrQvtC90L7QvNC40LrQuFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LHRg9GF0LPQsNC70YLQtdGA0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiAo0JzQkdCYKVwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRhNC40LfQuNGH0LXRgdC60L7QuSDQutGD0LvRjNGC0YPRgNGLINC4INGB0L/QvtGA0YLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjtGA0LjRgdC/0YDRg9C00LXQvdGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvtGC0LrRgNGL0YLQvtCz0L4g0LHQuNC30L3QtdGBLdC+0LHRgNCw0LfQvtCy0LDQvdC40Y8g0Lgg0LTQuNC30LDQudC90LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0KHQvtC00YDRg9C20LXRgdGC0LLQsCDQndC10LfQsNCy0LjRgdC40LzRi9GFINCT0L7RgdGD0LTQsNGA0YHRgtCyXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDRgdC+0YbQuNCw0LvRjNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INCw0L3RgtC40LrRgNC40LfQuNGB0L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQsNGPINCw0LrQsNC00LXQvNC40Y8g0YDRi9C90LrQsCDRgtGA0YPQtNCwINC4INC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCc0LXQttC00YPQvdCw0YDQvtC00L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YDQtdC60LvQsNC80YtcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7QuSDRjdC60L7QvdC+0LzQuNC60LggKNCzLiDQnNC+0YHQutCy0LApXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDQstC90YPRgtGA0LXQvdC90LjRhSDQtNC10Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YHQuNGF0L7RgtC10YDQsNC/0LjQuCDQuCDQutC70LjQvdC40YfQtdGB0LrQvtC5INC/0YHQuNGF0L7Qu9C+0LPQuNC4XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgtC10YXQvdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiAmcXVvdDvQktCi0KMmcXVvdDtcIn0se1widGl0bGVcIjpcItCh0L7RhtC40LDQu9GM0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGC0YPRgNC40LfQvNCwINC4INCz0L7RgdGC0LXQv9GA0LjQuNC80YHRgtCy0LAgKNCzLiDQnNC+0YHQutCy0LApICjRhNC40LvQuNCw0LspINCg0L7RgdGB0LjQudGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINGC0YPRgNC40LfQvNCwINC4INGB0LXRgNCy0LjRgdCwXCJ9LHtcInRpdGxlXCI6XCLQldCy0YDQsNC30LjQudGB0LrQuNC5INC+0YLQutGA0YvRgtGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNC90YTRgNCw0YHRgtGA0YPQutGC0YPRgNGLINC/0YDQtdC00L/RgNC40L3QuNC80LDRgtC10LvRjNGB0YLQstCwXCJ9LHtcInRpdGxlXCI6XCLQkNC60LDQtNC10LzQuNGPINGB0L7RhtC40LDQu9GM0L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCR0LjQsdC70LXQudGB0LrQvi3QsdC+0LPQvtGB0LvQvtCy0YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRgdCy0Y/RgtC+0LPQviDQsNC/0L7RgdGC0L7Qu9CwINCQ0L3QtNGA0LXRj1wifSx7XCJ0aXRsZVwiOlwi0JPRg9C80LDQvdC40YLQsNGA0L3Qvi3Qn9GA0L7Qs9C90L7RgdGC0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQsdC40LfQvdC10YHQsCDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC/0YHQuNGF0L7QsNC90LDQu9C40LfQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuCDQv9GA0LDQstCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDQutGD0LvRjNGC0YPRgNGLICjQsy4g0JzQvtGB0LrQstCwKVwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQutC+0LzQvNGD0L3QuNC60LDRgtC40LLQvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LlcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0LzQtdC20LTRg9C90LDRgNC+0LTQvdGL0YUg0YHQvtGG0LjQsNC70YzQvdC+LdCz0YPQvNCw0L3QuNGC0LDRgNC90YvRhSDRgdCy0Y/Qt9C10LlcIn0se1widGl0bGVcIjpcItCQ0LrQsNC00LXQvNC40Y8g0JPQtdC90LXRgNCw0LvRjNC90L7QuSDQv9GA0L7QutGD0YDQsNGC0YPRgNGLINCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQvdC10LTQstC40LbQuNC80L7RgdGC0Lgg0Lgg0YHRgtGA0L7QuNGC0LXQu9GM0L3QvtCz0L4g0LHQuNC30L3QtdGB0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YTQuNC70L7RgdC+0YTQuNC4LCDRgtC10L7Qu9C+0LPQuNC4INC4INC40YHRgtC+0YDQuNC4INGB0LLRj9GC0L7Qs9C+INCk0L7QvNGLXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGC0LXQsNGC0YDQsNC70YzQvdC+0LPQviDQuNGB0LrRg9GB0YHRgtCy0LAg0LjQvC4g0J8u0JwuINCV0YDRiNC+0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjywg0Y3QutC+0L3QvtC80LjQutC4LCDQv9GA0LDQstCwINC4INC40YHQutGD0YHRgdGC0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQvtGG0LXQvdC60Lgg0Lgg0LrQvtC90YHQsNC70YLQuNC90LPQsFwifSx7XCJ0aXRsZVwiOlwi0JzQtdC20LTRg9C90LDRgNC+0LTQvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3Qu9C40L3Qs9Cy0LjRgdGC0LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQuNC90LTRg9GB0YLRgNC40Lgg0YHQtdGA0LLQuNGB0LBcIn0se1widGl0bGVcIjpcItCb0L7QsdC90LXQvdGB0LrQuNC5INGE0LjQu9C40LDQuyDQnNC+0YHQutC+0LLRgdC60L7Qs9C+INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7Qs9C+INGD0L3QuNCy0LXRgNGB0LjRgtC10YLQsCDRjdC60L7QvdC+0LzQuNC60LgsINGB0YLQsNGC0LjRgdGC0LjQutC4INC4INC40L3RhNC+0YDQvNCw0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0LDQvdCw0LvQuNGC0LjRh9C10YHQutC+0Lkg0L/RgdC40YXQvtC70L7Qs9C40Lgg0Lgg0L/RgdC40YXQvtCw0L3QsNC70LjQt9CwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC70LjQvdCz0LLQuNGB0YLQuNC60LhcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YDQtdC60LvQsNC80YssINGC0YPRgNC40LfQvNCwLCDRiNC+0YMt0LHQuNC30L3QtdGB0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCY0YHQu9Cw0LzRgdC60LjQuSDQo9C90LjQstC10YDRgdC40YLQtdGCICjQo9GH0YDQtdC20LTQtdC90LjQtSlcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC90LDQu9C+0LPQvtCy0YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRgtGA0LDQvdGB0L/QvtGA0YLQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JzQvtGB0LrQvtCy0YHQutC40Lkg0Y3QutC+0L3QvtC80LjRh9C10YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YHQvtCy0YDQtdC80LXQvdC90L7Qs9C+INC00LjQt9Cw0LnQvdCwXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGN0L3QtdGA0LPQvtCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuCDRjdC90LXRgNCz0L7RgdCx0LXRgNC10LbQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQsdC40LfQvdC10YHQsCDQuCDQtNC10LvQvtCy0L7Qs9C+INCw0LTQvNC40L3QuNGB0YLRgNC40YDQvtCy0LDQvdC40Y8gKNCY0JHQlNCQKSDQoNC+0YHRgdC40LnRgdC60L7QuSDQsNC60LDQtNC10LzQuNC4INC90LDRgNC+0LTQvdC+0LPQviDRhdC+0LfRj9C50YHRgtCy0LAg0Lgg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtC5INGB0LvRg9C20LHRiyDQv9GA0Lgg0J/RgNC10LfQuNC00LXQvdGC0LUg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC00LXQu9C+0LLQvtC5INC60LDRgNGM0LXRgNGLXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDRhdGD0LTQvtC20LXRgdGC0LLQtdC90L3Qvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRglwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuCDQuNC90YTQvtGA0LzQsNGC0LjQutC4XCJ9LHtcInRpdGxlXCI6XCLQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQuSDQtdCy0YDQtdC50YHQutC40Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC+0LzQuNC60LgsINGE0LjQvdCw0L3RgdC+0LIg0Lgg0L/RgNCw0LLQsFwifSx7XCJ0aXRsZVwiOlwi0JLQvtC10L3QvdGL0Lkg0YPRh9C10LHQvdC+LdC90LDRg9GH0L3Ri9C5INGG0LXQvdGC0YAg0JLQvtC10L3QvdC+LdCy0L7Qt9C00YPRiNC90YvRhSDRgdC40LsgwqvQktC+0LXQvdC90L4t0LLQvtC30LTRg9GI0L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0LjQvNC10L3QuCDQv9GA0L7RhNC10YHRgdC+0YDQsCDQnS7QlS4g0JbRg9C60L7QstGB0LrQvtCz0L4g0Lgg0K4u0JAuINCT0LDQs9Cw0YDQuNC90LDCu1wifSx7XCJ0aXRsZVwiOlwi0JLQvtC10L3QvdCw0Y8g0LDQutCw0LTQtdC80LjRjyDQoNCw0LrQtdGC0L3Ri9GFINCy0L7QudGB0Log0YHRgtGA0LDRgtC10LPQuNGH0LXRgdC60L7Qs9C+INC90LDQt9C90LDRh9C10L3QuNGPINC40LzQtdC90Lgg0J/QtdGC0YDQsCDQktC10LvQuNC60L7Qs9C+XCJ9LHtcInRpdGxlXCI6XCLQodCy0Y/RgtC+LdCk0LjQu9Cw0YDQtdGC0L7QstGB0LrQuNC5INC/0YDQsNCy0L7RgdC70LDQstC90L4t0YXRgNC40YHRgtC40LDQvdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCS0L7QtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0YLRgNCw0LTQuNGG0LjQvtC90L3QvtCz0L4g0L/RgNC40LrQu9Cw0LTQvdC+0LPQviDQuNGB0LrRg9GB0YHRgtCy0LAgKNCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQu9C40LDQuykg0JLRi9GB0YjQtdC5INGI0LrQvtC70Ysg0L3QsNGA0L7QtNC90YvRhSDQuNGB0LrRg9GB0YHRgtCyICjQuNC90YHRgtC40YLRg9GC0LApXCJ9LHtcInRpdGxlXCI6XCLQpNC40L3QsNC90YHQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INCx0LjQt9C90LXRgdCwXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGA0YvQvdC+0YfQvdC+0Lkg0Y3QutC+0L3QvtC80LjQutC4LCDRgdC+0YbQuNCw0LvRjNC90L7QuSDQv9C+0LvQuNGC0LjQutC4INC4INC/0YDQsNCy0LBcIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0Y3QutC+0L3QvtC80LjQutC4INC4INGD0L/RgNCw0LLQu9C10L3QuNGPINCyINC/0YDQvtC80YvRiNC70LXQvdC90L7RgdGC0LhcIn0se1widGl0bGVcIjpcItCS0L7QtdC90L3Ri9C5INGD0YfQtdCx0L3Qvi3QvdCw0YPRh9C90YvQuSDRhtC10L3RgtGAINCh0YPRhdC+0L/Rg9GC0L3Ri9GFINCy0L7QudGB0LogwqvQntCx0YnQtdCy0L7QudGB0LrQvtCy0LDRjyDQsNC60LDQtNC10LzQuNGPINCS0L7QvtGA0YPQttC10L3QvdGL0YUg0KHQuNC7INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuMK7XCJ9LHtcInRpdGxlXCI6XCLQodGC0L7Qu9C40YfQvdGL0Lkg0LPRg9C80LDQvdC40YLQsNGA0L3Qvi3RjdC60L7QvdC+0LzQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQttC00YPQvdCw0YDQvtC00L3QvtCz0L4g0YPRh9C10YLQsCDQuCDRg9C/0YDQsNCy0LvQtdC90LjRj1wifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgNGD0YHRgdC60L7Qs9C+INGC0LXQsNGC0YDQsFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDQs9C+0YHRgtC40L3QuNGH0L3QvtCz0L4g0Lgg0YLRg9GA0LjRgdGC0LjRh9C10YHQutC+0LPQviDQvNC10L3QtdC00LbQvNC10L3RgtCwXCJ9LHtcInRpdGxlXCI6XCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JjQvdGB0YLQuNGC0YPRgiDQlNC40LfQsNC50L3QsFwifSx7XCJ0aXRsZVwiOlwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LzQvtC00YtcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQu9C40LDQuyDQoNC+0YHRgdC40LnRgdC60L7QuSDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7QuSDQsNC60LDQtNC10LzQuNC4INGC0YPRgNC40LfQvNCwXCJ9LHtcInRpdGxlXCI6XCLQn9C+0LPRgNCw0L3QuNGH0L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0KTQtdC00LXRgNCw0LvRjNC90L7QuSDRgdC70YPQttCx0Ysg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0JjQvdGB0YLQuNGC0YPRgiDRgdC+0LLRgNC10LzQtdC90L3QvtCz0L4g0YPQv9GA0LDQstC70LXQvdC40Y8sINC60LjQvdC+INC4INGC0LXQu9C10LLQuNC00LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INCz0YPQvNCw0L3QuNGC0LDRgNC90YvQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60L7QtSDQstGL0YHRiNC10LUg0LLQvtC10L3QvdC+0LUg0LrQvtC80LDQvdC00L3QvtC1INGD0YfQuNC70LjRidC1ICjQstC+0LXQvdC90YvQuSDQuNC90YHRgtC40YLRg9GCKSAo0YTQuNC70LjQsNC7KSDQktC+0LXQvdC90L7Qs9C+INGD0YfQtdCx0L3Qvi3QvdCw0YPRh9C90L7Qs9C+INGG0LXQvdGC0YDQsCDQodGD0YXQvtC/0YPRgtC90YvRhSDQstC+0LnRgdC6ICZxdW90O9Ce0LHRidC10LLQvtC50YHQutC+0LLQsNGPINCw0LrQsNC00LXQvNC40Y8g0JLQvtC+0YDRg9C20LXQvdC90YvRhSDQodC40Lsg0KDQvtGB0YHQuNC50YHQutC+0Lkg0KTQtdC00LXRgNCw0YbQuNC4JnF1b3Q7XCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINC+0YLQutGA0YvRgtC+0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC80LXQvdC10LTQttC80LXQvdGC0LAsINGN0LrQvtC90L7QvNC40LrQuCDQuCDQuNC90L3QvtCy0LDRhtC40LlcIn0se1widGl0bGVcIjpcItCe0YHRgtCw0L3QutC40L3RgdC60LjQuSDQuNC90YHRgtC40YLRg9GCINGC0LXQu9C10LLQuNC00LXQvdC40Y8g0Lgg0YDQsNC00LjQvtCy0LXRidCw0L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGN0LrQvtC90L7QvNC40LrQuCDQuCDRg9C/0YDQsNCy0LvQtdC90LjRjyDQsiDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQtSDQuCDQv9GA0L7QvNGL0YjQu9C10L3QvdC+0YHRgtC4XCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINC/0YHQuNGF0L7Qu9C+0LPQuNC4XCJ9LHtcInRpdGxlXCI6XCLQntGC0LrRgNGL0YLRi9C5INGC0LXRhdC90L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQuNC90YHRgtC40YLRg9GCXCJ9LHtcInRpdGxlXCI6XCLQmNC90YHRgtC40YLRg9GCINGD0L/RgNCw0LLQu9C10L3QuNGPXCJ9LHtcInRpdGxlXCI6XCLQodC70LDQstGP0L3Qvi3Qk9GA0LXQutC+LdCb0LDRgtC40L3RgdC60LDRjyDQsNC60LDQtNC10LzQuNGPXCJ9LHtcInRpdGxlXCI6XCLQnNC+0YHQutC+0LLRgdC60LjQuSDQsNGA0YXQuNGC0LXQutGC0YPRgNC90L4t0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGB0L7RhtC40LDQu9GM0L3Qvi3Qv9C10LTQsNCz0L7Qs9C40YfQtdGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YJcIn0se1widGl0bGVcIjpcItCf0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y9cIn0se1widGl0bGVcIjpcItCY0L3RgdGC0LjRgtGD0YIg0L3QtdC/0YDQtdGA0YvQstC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INC40L3RgdGC0LjRgtGD0YIg0YPQv9GA0LDQstC70LXQvdC40Y8g0Lgg0YHQtdGA0LLQuNGB0LBcIn0se1widGl0bGVcIjpcItCc0L7RgdC60L7QstGB0LrQuNC5INGE0LjQu9C40LDQuyDQsNCy0YLQvtC90L7QvNC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90L7Qs9C+INGD0YfRgNC10LbQtNC10L3QuNGPINCb0LXQvdC40L3Qs9GA0LDQtNGB0LrQvtCz0L4g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QvtCz0L4g0YPQvdC40LLQtdGA0YHQuNGC0LXRgtCwINC40LzQtdC90Lgg0JAu0KEuINCf0YPRiNC60LjQvdCwXCJ9LHtcInRpdGxlXCI6XCLQktGL0YHRiNCw0Y8g0YjQutC+0LvQsCDRhNC40L3QsNC90YHQvtCyINC4INC80LXQvdC10LTQttC80LXQvdGC0LAg0KDQvtGB0YHQuNC50YHQutC+0Lkg0LDQutCw0LTQtdC80LjQuCDQvdCw0YDQvtC00L3QvtCz0L4g0YXQvtC30Y/QudGB0YLQstCwINC4INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90L7QuSDRgdC70YPQttCx0Ysg0L/RgNC4INCf0YDQtdC30LjQtNC10L3RgtC1INCg0L7RgdGB0LjQudGB0LrQvtC5INCk0LXQtNC10YDQsNGG0LjQuFwifSx7XCJ0aXRsZVwiOlwi0KHQvtCy0YDQtdC80LXQvdC90YvQuSDQvNC+0YDRgdC60L7QuSDQuNC90YHRgtC40YLRg9GCXCJ9XVxuXG4gICAgICBmYWN1bHR5cy5pbml0aWFsaXplKClcblxuICAgICAgaWYgZmFjdWx0eS5oYXNDbGFzcyAndHQtaW5wdXQnXG4gICAgICAgIGZhY3VsdHkudHlwZWFoZWFkKCdkZXN0cm95JylcblxuICAgICAgZmFjdWx0eS50eXBlYWhlYWRcbiAgICAgICAgaGludDogZmFsc2VcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIG1pbkxlbmd0aDogMVxuICAgICAgLFxuICAgICAgICBuYW1lOiAnZmFjdWx0eXMnXG4gICAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICAgIHNvdXJjZTogZmFjdWx0eXMudHRBZGFwdGVyKClcbiAgICAgICAgdGVtcGxhdGVzOlxuICAgICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICBlbHNlXG5cbiAgICAgIGZhY3VsdHkudHlwZWFoZWFkKCdkZXN0cm95JylcblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0YDQsNC30LTQtdC70L7QsiDQtNC70Y8g0L/RgNC10LTQvNC10YLQsFxuICBnZXRTZWN0aW9uczogKGlkKT0+XG4gICAgY2hhcHRlcnMgPSBbJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutC40Lkg0LDQvdCw0LvQuNC3JytpZCwn0YLQtdC+0YDQuNGPINCy0LXRgNC+0Y/RgtC90L7RgdGC0LXQuScraWQsJ9GC0LXQvtGA0LXRgtC40YfQtdGB0LrQsNGPINC80LXRhdCw0L3QuNC60LAnK2lkLCfRgdC+0L/RgNC+0LzQsNGCJytpZCwn0LzQsNGC0LXQvNCw0YLQuCDQu9C+0LPQuNC60LAnK2lkLCfRjdC60L7QvdC+0LzQtdGC0YDQuNC60LAnK2lkLCfQstGL0YHRiNCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfQu9C40L3QtdC50L3QsNGPINCw0LvQs9C10LHRgNCwJytpZCwn0LTQuNGE0YTQtdGA0LXQvdGG0LjQsNC70YzQvdCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LDQvdCw0LvQuNGC0LjRh9C10YHQutCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LDRjyDRhNC40LfQuNC60LAnK2lkLCfQtNC40YTRhNC10YDQtdC90YbQuNCw0LvRjNC90YvQtSDRg9GA0LDQstC90LXQvdC40Y8nK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQsNGPINGB0YLQsNGC0LjRgdGC0LjQutCwJytpZCwn0LvQuNC90LXQudC90LDRjyDQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQtNC40YHQutGA0LXRgtC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0L7Qv9C+0LvQvtCz0LjRjycraWQsJ9GE0YPQvdC60YbQuNC+0L3QsNC70YzQvdGL0Lkg0LDQvdCw0LvQuNC3JytpZCwn0LjQvdGC0LXQs9GA0LDQu9GM0L3Ri9C1INGD0YDQsNCy0L3QtdC90LjRjycraWQsJ9GC0LXQvtGA0LjRjyDRh9C40YHQtdC7JytpZCwn0LLQtdC60YLQvtGA0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9Ci0KTQmtCfJytpZCwn0YLQtdC90LfQvtGA0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9GE0LjQvdCw0L3RgdC+0LLQsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YPRgNCw0LLQvdC10L3QuNGPINCyINGH0LDRgdGC0L3Ri9GFINC/0YDQvtC40LfQstC+0LTQvdGL0YUnK2lkLCfQsNC60YLRg9Cw0YDQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtC10L7RgNC40Y8g0LPRgNCw0YTQvtCyJytpZCwn0LrQvtC80LHQuNC90LDRgtC+0YDQuNC60LAnK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQuNC1INC80L7QtNC10LvQuCcraWQsJ9C/0YDQuNC60LvQsNC00L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLRgNC40LPQvtC90L7QvC3QuNGPJytpZCwn0YPRgNCw0LLQvdC10L3QuNGPINC80LDRgtC10LzQsNGC0LjRh9C10YHQutC+0Lkg0YTQuNC30LjQutC4JytpZCwn0YfQuNGB0LvQtdC90L3Ri9C1INC80LXRgtC+0LTRiycraWQsJ9GC0LXQvtGA0LjRjyDQv9GA0LjQsdC70LjQttC10L3QuNC5JytpZCwn0YLQtdC+0YDQuNGPINC+0L/RgtC40LzQuNC30LDRhtC40LgnK2lkLCcu0YjQutC+0LvRjNC90YvQuSDQutGD0YDRgScraWQsJ9C90LAg0LDQvdCz0LvQuNC50YHQutC+0Lwg0Y/Qt9GL0LrQtScraWQsJ9Cw0LvQs9C10LHRgNCwINC70L7Qs9C40LrQuCcraWQsJ9Cy0YvRh9C40YHQu9C40LzRi9C1INGE0YPQvdC60YbQuNC4JytpZCwn0YLQtdC+0YDQuNGPINC40LPRgCcraWQsJ9Cy0LDRgNC40LDRhtC40L7QvdC90L7QtSDQuNGB0YfQuNGB0LvQtdC90LjQtScraWQsJ9C+0L/RgtC40LzQsNC70YzQvdC+0LUg0YPQv9GA0LDQstC70LXQvdC40LUnK2lkLCfQvNC10YLQvtC00Ysg0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCcraWQsJ9C70LjQvdC10LnQvdC+0LUg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnK2lkLCfQsNC70LPQtdCx0YDQsCcraWQsJ9Cz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C80LXRgtC+0LTRiyDQvtC/0YLQuNC80LDQu9GM0L3Ri9GFINGA0LXRiNC10L3QuNC5JytpZF1cbiAgICBzZWN0aW9ucyA9IG5ldyBBcnJheVxuICAgIHNlY3Rpb24gPSBuZXcgT2JqZWN0XG4gICAgaWQgPSAwXG4gICAgZm9yIGNoYXB0ZXIgaW4gY2hhcHRlcnNcbiAgICAgIHNlY3Rpb24gPSB7XG4gICAgICAgIGlkIDogaWRcbiAgICAgICAgdGl0bGUgOiBjaGFwdGVyXG4gICAgICB9XG4gICAgICBzZWN0aW9ucy5wdXNoIHNlY3Rpb25cbiAgICAgIGlkKytcbiAgICByZXR1cm4gc2VjdGlvbnNcblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDQtNC+0L/QvtC70L3QtdC90LjQuSDQtNC70Y8g0YDQsNC30LTQtdC70LBcbiAgZ2V0U3ViU2VjdGlvbnM6IChpZCk9PlxuICAgIGNoYXB0ZXJzID0gbmV3IEFycmF5ICfQntCT0K0gKNCT0JjQkCknK2lkLCAn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0L7Qu9C40LzQv9C40LDQtNCw0LwnK2lkLCAn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0Y3QutC30LDQvNC10L3QsNC8JytpZFxuICAgIHNlY3Rpb25zID0gbmV3IEFycmF5XG4gICAgc2VjdGlvbiA9IG5ldyBPYmplY3RcbiAgICB1aWQgPSAwXG4gICAgZm9yIGNoYXB0ZXIgaW4gY2hhcHRlcnNcbiAgICAgIHNlY3Rpb25zLnB1c2hcbiAgICAgICAgJ2lkJyA6IHVpZFxuICAgICAgICAndGl0bGUnIDogY2hhcHRlclxuICAgICAgdWlkKytcbiAgICByZXR1cm4gc2VjdGlvbnNcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICBuZXdFZHVjYXRpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX2VkdWNhdGlvbi5wYXJlbnQoKS5iZWZvcmUgQGVkdWNhdGlvbl9zb3VyY2UoeydpbmRleCcgOiBAZWR1Y2F0aW9uX2NvdW50fSlcbiAgICBAZWR1Y2F0aW9uX2NvdW50KytcbiAgICBAc3RlcDQuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBpZiBAZWR1Y2F0aW9uX2NvdW50PjFcbiAgICAgIEByZW1vdmVfZWR1Y2F0aW9uLnNob3coKVxuXG4gICAgIyDQkNCy0YLQvtC30LDQv9C+0LvQvdC10L3QuNC1INC00LvRjyDQstGL0LHQvtGA0LAg0LPQvtGA0L7QtNCwINC4INCy0YPQt9CwXG4gICAgQGFkZEhpbnQoKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICByZW1vdmVFZHVjYXRpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAZWR1Y2F0aW9uX2NvdW50LS1cbiAgICAkKCcuZWR1Y2F0aW9uLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQGVkdWNhdGlvbl9jb3VudDwyXG4gICAgICBAcmVtb3ZlX2VkdWNhdGlvbi5oaWRlKClcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgNCDQuiA1INGI0LDQs9GDXG4gIHN0ZXA0U3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXA0LmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDQuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIEBzdGVwNC5maW5kKCcudWktc3RhdGUtZXJyb3I6ZXEoMCknKS5mb2N1cygpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAgICMg0J7RgtC/0YDQsNCy0LrQsCDQvdCwINGB0LXRgNCy0LXRgFxuICAgIGNvbnNvbGUubG9nIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJCgnLnBhbmVsIDppbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCkpKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiA0INC6IDMg0YjQsNCz0YNcbiAgc3RlcDRCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAzINC6IDQg0YjQsNCz0YNcbiAgc3RlcDNTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDMuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMy5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgQHN0ZXAzLmZpbmQoJy51aS1zdGF0ZS1lcnJvcjplcSgwKScpLmZvY3VzKClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMyDQuiAyINGI0LDQs9GDXG4gIHN0ZXAzQmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQsNC00YDQtdGBXG4gIG5ld0FkZHJlc3M6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX2FkZHJlc3MucGFyZW50KCkuYmVmb3JlIEBhZGRyZXNzX3NvdXJjZSh7J2luZGV4JyA6IEBhZGRyZXNzX2NvdW50fSlcbiAgICBAYWRkcmVzc19jb3VudCsrXG4gICAgQHN0ZXAzLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGFkZHJlc3NfY291bnQ+MVxuICAgICAgQHJlbW92ZV9hZGRyZXNzLnNob3coKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICByZW1vdmVBZGRyZXNzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZHJlc3NfY291bnQtLVxuICAgICQoJy5hZHJlc3Mtd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAYWRkcmVzc19jb3VudDwyXG4gICAgICBAcmVtb3ZlX2FkZHJlc3MuaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDIg0LogMyDRiNCw0LPRg1xuICBzdGVwMlN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMi5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAyLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICBAc3RlcDIuZmluZCgnLnVpLXN0YXRlLWVycm9yOmVxKDApJykuZm9jdXMoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAyINC6IDEg0YjQsNCz0YNcbiAgc3RlcDJCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG5cbiAgIyDQkdC70L7QutC40YDQvtCy0LDRgtGMINGG0LXQvdGLINC90LXQtNC+0L/Rg9GB0YLQuNC80YvRhSDRhNC+0YDQvNCw0YLQvtCyINC30LDQvdGP0YLQuNC5XG4gIGNoZWNrRm9ybWF0OiA9PlxuICAgIGlucHV0cyA9IEBmb3JtYXRzLmZpbmQgJ2lucHV0J1xuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGVsZW1lbnRzID0gQHN0ZXAyLmZpbmQoJ2lucHV0LicraW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLWZpZWxkJykpXG4gICAgICBmb3IgZWxlbWVudCBpbiBlbGVtZW50c1xuICAgICAgICBwcmljZSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnLnN1YmRldmlzaW9uJylcbiAgICAgICAgaWYgaW5wdXQuY2hlY2tlZFxuICAgICAgICAgIHByaWNlLnJlbW92ZUNsYXNzKCdoaWRlJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwcmljZS5hZGRDbGFzcygnaGlkZScpXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd1aS1zdGF0ZS1lcnJvcicpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKVxuXG4gICMg0JTQvtCx0LDQstC40YLRjCDRgNCw0LfQtNC10LvRiyDQv9GA0LXQtNC80LXRgtCwXG4gIHN1YmplY3RTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgc2VsZWN0ID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgc2VsZWN0LnJlbW92ZUNsYXNzICd1bmNoYW5nZWQnXG4gICAgaWQgPSBzZWxlY3QudmFsKClcblxuICAgIGxpbmUgPSBzZWxlY3QucGFyZW50cygnLmxpbmUnKVxuICAgIFxuICAgIHN1YnNlY3Rpb25zID0gQGdldFN1YlNlY3Rpb25zKGlkKVxuXG4gICAgaGFsZl9sZW5ndGggPSBNYXRoLmNlaWwoc3Vic2VjdGlvbnMubGVuZ3RoIC8gMilcbiAgICBsZWZ0U2lkZSA9IHN1YnNlY3Rpb25zLnNwbGljZSgwLGhhbGZfbGVuZ3RoKVxuXG4gICAgc2VjdGlvbnMgPSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSh7XG4gICAgICAnaW5kZXgnICAgOiBAc2VjdGlvbl9jb3VudFxuICAgICAgJ3NlY3Rpb24nIDogQGdldFNlY3Rpb25zKGlkKVxuICAgICAgJ2NvbHVtbjEnIDogbGVmdFNpZGVcbiAgICAgICdjb2x1bW4yJyA6IHN1YnNlY3Rpb25zXG4gICAgICB9KVxuXG4gICAgQHNlY3Rpb25fY291bnQrK1xuXG4gICAgbmV4dCA9IGxpbmUubmV4dCgpXG4gICAgaWYgbmV4dC5oYXNDbGFzcygnc2VjdGlvbicpXG4gICAgICBuZXh0LnJlcGxhY2VXaXRoIHNlY3Rpb25zXG4gICAgZWxzZVxuICAgICAgbGluZS5hZnRlciBzZWN0aW9uc1xuICAgIFxuICAgIEBzdGVwMi5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGZvciBlbGVtZW50IGluIEBzdGVwMi5maW5kKCcuZHJvcGRvd24tY29udGFpbmVyLXdpZGdldCcpXG4gICAgICBuZXcgRHJvcGRvd25XaWRnZXRDb250cm9sbGVyKCQoZWxlbWVudCkpXG5cblxuICBnZXRTZWN0aW9uOiAoaW5kZXgpPT5cbiAgICBzZWxlY3QgPSAgJCAnLnN1Ymotd3JhcHBlciAuc2VjdGlvbjplcSgnK2luZGV4KycpIHNlbGVjdCdcbiAgICBpZiBzZWxlY3QubGVuZ3RoID09IDFcbiAgICAgIHJldHVybiBzZWxlY3QudmFsKClcblxuICBnZXRBZGQ6IChpbmRleCk9PlxuICAgIGNoa2JveHMgPSAgJCAnLnN1Ymotd3JhcHBlciAuc2VjdGlvbjplcSgnK2luZGV4KycpIC5zdWItc2VjdGlvbiBpbnB1dFtuYW1lPVwiYWRkaXRpb25bXVwiXTpjaGVja2VkJ1xuICAgIHZhbHVlcyA9IG5ldyBBcnJheVxuICAgIGZvciBjaGtib3ggaW4gY2hrYm94c1xuICAgICAgdmFsdWVzLnB1c2ggJChjaGtib3gpLnZhbCgpXG4gICAgcmV0dXJuIHZhbHVlc1xuICAgIFxuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C5INC/0YDQtdC00LzQtdGCXG4gIG5ld1N1YmplY3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX3N1YmplY3QucGFyZW50KCkuYmVmb3JlIEBzdWJqZWN0X3NvdXJjZSh7J2luZGV4JyA6IEBzdWJqX2NvdW50fSlcbiAgICBAc3Vial9jb3VudCsrXG4gICAgXG4gICAgd3JhcHBlciA9IEBhZGRfc3ViamVjdC5wYXJlbnQoKS5wcmV2KClcbiAgICB3cmFwcGVyLmZpbmQoJ3NlbGVjdCcpLm9uICdjaGFuZ2UnLCBAc3ViamVjdFNlbGVjdGVkXG5cbiAgICBAc3RlcDIuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBAc3RlcDIuZmluZCgnLm1pbi10aW1lJykudGV4dCBAZHVyYXRpb25fdmFsdWUudmFsKClcbiAgICBAY2hlY2tGb3JtYXQoKVxuICAgIGZvciBlbGVtZW50IGluIEBzdGVwMi5maW5kKCcuZHJvcGRvd24tY29udGFpbmVyLXdpZGdldCcpXG4gICAgICBuZXcgRHJvcGRvd25XaWRnZXRDb250cm9sbGVyKCQoZWxlbWVudCkpXG4gICAgXG4gICAgaWYgQHN1YmpfY291bnQ+MVxuICAgICAgQHJlbW92ZV9zdWJqZWN0LnNob3coKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L/RgNC10LTQvNC10YJcbiAgcmVtb3ZlU3ViamVjdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdWJqX2NvdW50LS1cbiAgICAkKCcuc3Viai13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBzdWJqX2NvdW50PDJcbiAgICAgIEByZW1vdmVfc3ViamVjdC5oaWRlKClcblxuICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQsdC70L7QutC+0LIg0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjFxuICB2YWxpZGF0ZTogKGlucHV0KT0+XG5cbiAgICBpZiBpbnB1dC5oYXNBdHRyaWJ1dGUgJ2RhdGEtaDUtZXJyb3JpZCdcbiAgICAgIGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWg1LWVycm9yaWQnKVxuXG4gICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpXG4gICAgICBcbiAgICAgIGlmIGlucHV0LmNsYXNzTGlzdC5jb250YWlucyAndW5jaGFuZ2VkJ1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkICd1aS1zdGF0ZS1lcnJvcidcblxuICAgICAgaWYgaW5wdXQudmFsdWUgPT0gXCJ1bmNoYW5nZWRcIlxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkICd1aS1zdGF0ZS1lcnJvcidcblxuICAgICAgaWYgaW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQgJ3VpLXN0YXRlLWVycm9yJ1xuXG4gICAgaWYgaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zICd1aS1zdGF0ZS1lcnJvcidcbiAgICAgIGlmIGVycm9yXG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGVsc2VcbiAgICAgIGlmIGVycm9yXG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIHJldHVybiB0cnVlXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQutC+INCy0YLQvtGA0L7QvNGDINGI0LDQs9GDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgc3RlcDFTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDEuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMS5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgQHN0ZXAxLmZpbmQoJy51aS1zdGF0ZS1lcnJvcjplcSgwKScpLmZvY3VzKClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuXG4gICMg0KjQsNCzIDFcbiAgIyDQkNCy0LDRgtCw0YBcbiAgZHJvcGVkOiAoZXZlbnQpLT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgRmlsZUFQSS5nZXREcm9wRmlsZXMgZXZlbnQsIChmaWxlcyktPlxuXG4gICMg0L/QvtC00LLQtdC70Lgg0LrRg9GA0YHQvtGAINC6INCx0LvQvtC60YMg0LTRgNC+0L/QsCDQsNCy0LDRgtCw0YDQutC4XG4gIG92ZXI6IChvdmVyKS0+XG5cbiAgIyDQsdGA0L7RgdC40LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGRyb3A6IChmaWxlcyk9PlxuICAgIGNvbnNvbGUubG9nICBmaWxlc1xuICAgIGlmIGZpbGVzLmxlbmd0aFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgXG4gICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcbiAgICAgIFxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAjINCj0LTQsNC70LjQu9C4INCw0LLQsNGC0YDQsNC60YNcbiAgcmVtb3ZlQXZhdGFyOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG5cbiAgIyDQktGL0LHRgNCw0LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGF2YXRhclNlbGVjdGVkOiAoZXZlbnQpPT5cbiAgICBmaWxlcyA9IEZpbGVBUEkuZ2V0RmlsZXMoZXZlbnQpXG5cbiAgICBleHQgPSBmaWxlc1swXVsnbmFtZSddLnN1YnN0cmluZyhmaWxlc1swXVsnbmFtZSddLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoZmlsZXNbMF0gJiYgKGZpbGVzWzBdLnNpemUgPD0gRmlsZUFQSS5NQikgJiYgKGV4dCA9PSBcImdpZlwiIHx8IGV4dCA9PSBcInBuZ1wiIHx8IGV4dCA9PSBcImpwZWdcIiB8fCBleHQgPT0gXCJqcGdcIikpXG4gICAgICAgIFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBcbiAgICAgICAgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICBhdmF0YXIgPSBkb2N1bWVudC5pbXBvcnROb2RlIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LCB0cnVlXG4gICAgICAgIHByZXYgPSBAZmlsZVNlbGVjdG9yLnByZXYoKVxuICAgICAgICBpZiBwcmV2Lmhhc0NsYXNzKCdjdXJyZW50LWF2YXRhcicpXG4gICAgICAgICAgcHJldi5yZW1vdmUoKVxuICAgICAgICBAZmlsZVNlbGVjdG9yLmJlZm9yZSBhdmF0YXJcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkuZmluZCgnLmNsb3NlJykub24gJ2NsaWNrJywgQHJlbW92ZUF2YXRhclxuXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCBmaWxlc1swXVxuXG4gICAgZWxzZVxuICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICAgIEBmaWxlLnJlcGxhY2VXaXRoIEBmaWxlLnZhbCgnJykuY2xvbmUodHJ1ZSlcbiAgICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0J/RgNC+0LLQtdGA0Y/QtdC8INC80L7QttC10YIg0LvQuCDRgdGD0YnQtdGB0YLQstC+0LLQsNGC0Ywg0YPQutCw0LfQsNC90L3QsNGPINC00LDRgtCwLCDQvdCw0L/RgNC40LzQtdGAIDMxINGE0LXQstGA0LDQu9GPINC4INC40YHQv9GA0LDQstC70Y/QtdC8INCyINGB0LvRg9GH0LDQtSDQvtGI0LjQsdC60LhcbiAgY2hlY2tEYXRlOiAoZXZlbnQpPT5cbiAgICBkYXkgPSBwYXJzZUludCBAZGF5LnZhbCgpLnRyaW0oKSwgMTBcbiAgICBcbiAgICBpZiBkYXk8MSB8fCBpc05hTihkYXkpXG4gICAgICBAZGF5LnZhbCAxXG4gICAgICByZXR1cm5cblxuICAgIGRheXMgPSBwYXJzZUludCBtb21lbnQoQHllYXIudmFsKCkrXCItXCIrKHBhcnNlSW50KEBtb250aC52YWwoKSwxMCkrMSksIFwiWVlZWS1NTVwiKS5kYXlzSW5Nb250aCgpLCAxMFxuICAgIGlmIGRheT5kYXlzXG4gICAgICBAZGF5LnZhbCBkYXlzXG4gICAgcmV0dXJuXG5cbiAgICBpZiBkYXk+MzFcbiAgICAgIEBkYXkudmFsIDMxXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIG5ldyBQZXJzb25hbERhdGFBbGwoKVxuXG5cbiJdfQ==