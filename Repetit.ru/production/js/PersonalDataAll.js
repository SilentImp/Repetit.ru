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
    this.step1.h5Validate();
    window.FileAPI.debug = true;
    window.FileAPI = {
      debug: true,
      staticPath: 'js/'
    };
    this.file = this.step1.find('#registration-avatar');
    this.avatarTemplate = document.getElementById('current-avatar-template');
    this.fileSelector = this.step1.find('.file-selector');
    FileAPI.event.on(this.file[0], 'change', this.avatarSelected);
    this.fileSelector.dnd(this.over, this.drop);
    FileAPI.event.on(document, 'drop', this.droped);
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
    this.sertificat_source = $("#sertificat-template").html();
    this.sertificat_source = Handlebars.compile(this.sertificat_source);
    this.cert_list = this.step4.find('.sertificat-list');
    this.cerificates_count = 0;
    this.sertificats = this.step4.find('.sertificats');
    this.sertificats.fileapi({
      url: '"sex=male&month=0&year=2000&status=0&experience=0&experience=30&addition=on&subject=3&section=2&street%5B%5D=&house%5B%5D=&corpus%5B%5D=&building%5B%5D=&comments=&city%5B%5D=&univercity%5B%5D=&grad-year%5B%5D=&fac%5B%5D=&comments%5B%5D=&home=&office=&online=&message=&additional-information="',
      duplicate: false,
      accept: 'image/*',
      maxSize: 5 * FileAPI.MB,
      autoUpload: false,
      multiple: true,
      list: '.sertificat-list',
      elements: {
        file: {
          tpl: '.js-file-tpl',
          preview: {
            el: '.preview__pic',
            width: 80,
            height: 80
          }
        },
        ctrl: {
          upload: '.add-sertificat label'
        }
      },
      onSelect: (function(_this) {
        return function(evt, ui) {
          return _this.cerificates_count++;
        };
      })(this)
    });
    this.step4.find('button[type="submit"]').on('click', this.step4Submit);
    this.step4.find('a.previous').on('click', this.step4Back);
  }

  PersonalDataAll.prototype.addHint = function() {
    var locations, univercitys;
    locations = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace("city"),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: "https://dl.dropboxusercontent.com/u/20810772/citys.json"
    });
    locations.initialize();
    $('.city').typeahead({
      hint: false,
      highlight: true,
      minLength: 1
    }, {
        name: 'locations',
        displayKey: 'city',
        source: locations.ttAdapter(),
        templates: {
          suggestion: Handlebars.compile('<p><b>{{region}}</b>{{city}}</p>')
        }
      });
    univercitys = new Bloodhound({
      datumTokenizer: function(data) {
        return Bloodhound.tokenizers.whitespace(data.title);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: [
        {
          "title": "Andorra"
        }, {
        "title": "UnitedArabEmirates"
        }, {
        "title": "Afghanistan"
        }, {
        "title": "AntiguaandBarbuda"
        }, {
        "title": "Anguilla"
        }, {
        "title": "Albania"
        }, {
        "title": "Armenia"
        }, {
        "title": "Angola"
        }, {
        "title": "Antarctica"
        }
      ]
    });
    univercitys.initialize();
    $('.univercity:not(.tt-input)').typeahead({
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
    $('.faculty:not(.tt-input)').typeahead({
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
    return $('.specialization:not(.tt-input)').typeahead({
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
    var chapter, chapters, section, sections, _i, _len;
    chapters = ['ОГЭ (ГИА)' + id, 'Подготовка к олимпиадам' + id, 'Подготовка к экзаменам' + id];
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
      index: this.subj_count,
      section: this.getSections(id),
      column1: leftSide,
      column2: subsections
    });
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
      if (input.value.trim().length === 0) {
        input.classList.add('ui-state-error');
      }
    }
    if (input.classList.contains('ui-state-error')) {
      if (error) {
        error.style.display = 'block';
      }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2REFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsNkNBQUEsQ0FBQTtBQUFBLFFBQUEsaUJBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBQSxDQUFFLHFCQUFGLENBQVYsQ0FBQTtBQUNBLElBQUEsSUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsQ0FBckI7QUFDRSxZQUFVLElBQUEsS0FBQSxDQUFNLGtCQUFOLENBQVYsQ0FERjtLQURBO0FBQUEsSUFJQSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FKVCxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FMVixDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLGdCQUFiLENBTlgsQ0FBQTtBQUFBLElBUUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBUlQsQ0FBQTtBQUFBLElBU0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBVFQsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBVlQsQ0FBQTtBQUFBLElBV0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBWFQsQ0FBQTtBQUFBLElBWUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBWlQsQ0FBQTtBQUFBLElBZUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxRQUFGLENBZlQsQ0FBQTtBQWdCQSxJQUFBLElBQUcsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBbkI7QUFDRSxNQUFBLE1BQU0sQ0FBQyxNQUFQLENBQ0U7QUFBQSxRQUFBLHdCQUFBLEVBQTBCLEVBQTFCO09BREYsQ0FBQSxDQURGO0tBaEJBO0FBQUEsSUFzQkEsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLENBQUEsQ0F0QkEsQ0FBQTtBQUFBLElBd0JBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBZixHQUF1QixJQXhCdkIsQ0FBQTtBQUFBLElBMkJBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0FBQUEsTUFBQyxLQUFBLEVBQU8sSUFBUjtBQUFBLE1BQWMsVUFBQSxFQUFZLEtBQTFCO0tBM0JqQixDQUFBO0FBQUEsSUE4QkEsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxzQkFBWixDQTlCUixDQUFBO0FBQUEsSUErQkEsSUFBQyxDQUFBLGNBQUQsR0FBa0IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IseUJBQXhCLENBL0JsQixDQUFBO0FBQUEsSUFnQ0EsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksZ0JBQVosQ0FoQ2hCLENBQUE7QUFBQSxJQWtDQSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQWQsQ0FBaUIsSUFBQyxDQUFBLElBQUssQ0FBQSxDQUFBLENBQXZCLEVBQTJCLFFBQTNCLEVBQXFDLElBQUMsQ0FBQSxjQUF0QyxDQWxDQSxDQUFBO0FBQUEsSUFtQ0EsSUFBQyxDQUFBLFlBQVksQ0FBQyxHQUFkLENBQWtCLElBQUMsQ0FBQSxJQUFuQixFQUF5QixJQUFDLENBQUEsSUFBMUIsQ0FuQ0EsQ0FBQTtBQUFBLElBb0NBLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBZCxDQUFpQixRQUFqQixFQUEyQixNQUEzQixFQUFtQyxJQUFDLENBQUEsTUFBcEMsQ0FwQ0EsQ0FBQTtBQUFBLElBdUNBLEdBQUEsR0FBTSxDQUFBLENBQUUsYUFBRixDQXZDTixDQUFBO0FBd0NBLElBQUEsSUFBRyxHQUFHLENBQUMsTUFBSixHQUFhLENBQWhCO0FBQ0UsTUFBQSxHQUFHLENBQUMsVUFBSixDQUNFO0FBQUEsUUFBQSxJQUFBLEVBQU0sQ0FBTjtBQUFBLFFBQ0EsT0FBQSxFQUFTLE9BRFQ7QUFBQSxRQUVBLEtBQUEsRUFBTyxDQUZQO0FBQUEsUUFHQSxLQUFBLEVBQ0U7QUFBQSxVQUFBLEtBQUEsRUFBTyxDQUFDLENBQUQsQ0FBUDtBQUFBLFVBQ0EsS0FBQSxFQUFPLENBQUMsRUFBRCxDQURQO1NBSkY7QUFBQSxRQU1BLE1BQUEsRUFBUSxLQUFBLENBQ047QUFBQSxVQUFBLFFBQUEsRUFBVSxDQUFWO1NBRE0sQ0FOUjtPQURGLENBQUEsQ0FBQTtBQUFBLE1BU0EsR0FBRyxDQUFDLElBQUosQ0FBUyxPQUFULENBQWlCLENBQUMsRUFBbEIsQ0FBcUIsQ0FBQSxDQUFFLG1CQUFGLENBQXJCLENBVEEsQ0FERjtLQXhDQTtBQUFBLElBcURBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksZUFBWixDQXJEVCxDQUFBO0FBQUEsSUFzREEsSUFBQyxDQUFBLElBQUQsR0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxjQUFaLENBdERULENBQUE7QUFBQSxJQXVEQSxJQUFDLENBQUEsR0FBRCxHQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFdBQVosQ0F2RFQsQ0FBQTtBQUFBLElBd0RBLElBQUMsQ0FBQSxHQUFHLENBQUMsRUFBTCxDQUFVLFFBQVYsRUFBb0IsSUFBQyxDQUFBLFNBQXJCLENBeERBLENBQUE7QUFBQSxJQXlEQSxJQUFDLENBQUEsS0FBSyxDQUFDLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLElBQUMsQ0FBQSxTQUFyQixDQXpEQSxDQUFBO0FBQUEsSUEwREEsSUFBQyxDQUFBLElBQUksQ0FBQyxFQUFOLENBQVUsUUFBVixFQUFvQixJQUFDLENBQUEsU0FBckIsQ0ExREEsQ0FBQTtBQUFBLElBNkRBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLHVCQUFaLENBQW9DLENBQUMsRUFBckMsQ0FBd0MsT0FBeEMsRUFBaUQsSUFBQyxDQUFBLFdBQWxELENBN0RBLENBQUE7QUFBQSxJQWtFQSxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVAsQ0FBQSxDQWxFQSxDQUFBO0FBQUEsSUFxRUEsSUFBQyxDQUFBLGNBQUQsR0FBa0IsQ0FBQSxDQUFFLGlCQUFGLENBckVsQixDQUFBO0FBQUEsSUF1RUEsSUFBQSxHQUFPLENBQUEsQ0FBRSxXQUFGLENBdkVQLENBQUE7QUF3RUEsSUFBQSxJQUFHLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBakI7QUFDRSxNQUFBLElBQUksQ0FBQyxVQUFMLENBQ0U7QUFBQSxRQUFBLElBQUEsRUFBTSxDQUFOO0FBQUEsUUFDQSxPQUFBLEVBQVMsT0FEVDtBQUFBLFFBRUEsS0FBQSxFQUFPLENBRlA7QUFBQSxRQUdBLEtBQUEsRUFDRTtBQUFBLFVBQUEsS0FBQSxFQUFPLENBQUMsRUFBRCxDQUFQO0FBQUEsVUFDQSxLQUFBLEVBQU8sQ0FBQyxHQUFELENBRFA7U0FKRjtBQUFBLFFBTUEsTUFBQSxFQUFRLEtBQUEsQ0FDTjtBQUFBLFVBQUEsUUFBQSxFQUFVLENBQVY7U0FETSxDQU5SO09BREYsQ0FBQSxDQUFBO0FBQUEsTUFXQSxJQUFJLENBQUMsSUFBTCxDQUFVLE9BQVYsQ0FBa0IsQ0FBQyxFQUFuQixDQUFzQixJQUFDLENBQUEsY0FBdkIsQ0FYQSxDQUFBO0FBQUEsTUFZQSxJQUFJLENBQUMsRUFBTCxDQUFRLFFBQVIsRUFBa0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsS0FBRCxFQUFRLEVBQVIsR0FBQTtpQkFDaEIsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsSUFBckIsQ0FBMEIsRUFBMUIsRUFEZ0I7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsQixDQVpBLENBREY7S0F4RUE7QUFBQSxJQXlGQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGlCQUFaLENBekZYLENBQUE7QUFBQSxJQTBGQSxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxPQUFkLENBQXNCLENBQUMsRUFBdkIsQ0FBMEIsUUFBMUIsRUFBb0MsSUFBQyxDQUFBLFdBQXJDLENBMUZBLENBQUE7QUFBQSxJQTJGQSxJQUFDLENBQUEsV0FBRCxDQUFBLENBM0ZBLENBQUE7QUFBQSxJQThGQSxJQUFDLENBQUEsV0FBRCxHQUFlLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGNBQVosQ0E5RmYsQ0FBQTtBQUFBLElBK0ZBLElBQUMsQ0FBQSxVQUFELEdBQWMsQ0EvRmQsQ0FBQTtBQUFBLElBZ0dBLElBQUMsQ0FBQSxjQUFELEdBQWtCLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLElBQXBCLENBQUEsQ0FoR2xCLENBQUE7QUFBQSxJQWlHQSxJQUFDLENBQUEsY0FBRCxHQUFrQixVQUFVLENBQUMsT0FBWCxDQUFtQixJQUFDLENBQUEsY0FBcEIsQ0FqR2xCLENBQUE7QUFBQSxJQWtHQSxJQUFDLENBQUEsV0FBVyxDQUFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsSUFBQyxDQUFBLFVBQTFCLENBbEdBLENBQUE7QUFBQSxJQW1HQSxJQUFDLENBQUEsV0FBVyxDQUFDLE9BQWIsQ0FBcUIsT0FBckIsQ0FuR0EsQ0FBQTtBQUFBLElBc0dBLElBQUMsQ0FBQSxzQkFBRCxHQUEwQixDQUFBLENBQUUsd0JBQUYsQ0FBMkIsQ0FBQyxJQUE1QixDQUFBLENBdEcxQixDQUFBO0FBQUEsSUF1R0EsSUFBQyxDQUFBLHNCQUFELEdBQTBCLFVBQVUsQ0FBQyxPQUFYLENBQW1CLElBQUMsQ0FBQSxzQkFBcEIsQ0F2RzFCLENBQUE7QUFBQSxJQTBHQSxJQUFDLENBQUEsY0FBRCxHQUFrQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxpQkFBWixDQTFHbEIsQ0FBQTtBQUFBLElBMkdBLElBQUMsQ0FBQSxjQUFjLENBQUMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsSUFBQyxDQUFBLGFBQTdCLENBM0dBLENBQUE7QUFBQSxJQTZHQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSx1QkFBWixDQUFvQyxDQUFDLEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELElBQUMsQ0FBQSxXQUFsRCxDQTdHQSxDQUFBO0FBQUEsSUE4R0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksWUFBWixDQUF5QixDQUFDLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLElBQUMsQ0FBQSxTQUF2QyxDQTlHQSxDQUFBO0FBQUEsSUFtSEEsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLENBQUEsQ0FuSEEsQ0FBQTtBQUFBLElBc0hBLElBQUMsQ0FBQSxXQUFELEdBQWUsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksY0FBWixDQXRIZixDQUFBO0FBQUEsSUF1SEEsSUFBQyxDQUFBLGFBQUQsR0FBaUIsQ0F2SGpCLENBQUE7QUFBQSxJQXdIQSxJQUFDLENBQUEsY0FBRCxHQUFrQixDQUFBLENBQUUsbUJBQUYsQ0FBc0IsQ0FBQyxJQUF2QixDQUFBLENBeEhsQixDQUFBO0FBQUEsSUF5SEEsSUFBQyxDQUFBLGNBQUQsR0FBa0IsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsSUFBQyxDQUFBLGNBQXBCLENBekhsQixDQUFBO0FBQUEsSUEwSEEsSUFBQyxDQUFBLFdBQVcsQ0FBQyxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLElBQUMsQ0FBQSxVQUExQixDQTFIQSxDQUFBO0FBQUEsSUEySEEsSUFBQyxDQUFBLFdBQVcsQ0FBQyxPQUFiLENBQXFCLE9BQXJCLENBM0hBLENBQUE7QUFBQSxJQThIQSxJQUFDLENBQUEsY0FBRCxHQUFrQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxpQkFBWixDQTlIbEIsQ0FBQTtBQUFBLElBK0hBLElBQUMsQ0FBQSxjQUFjLENBQUMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsSUFBQyxDQUFBLGFBQTdCLENBL0hBLENBQUE7QUFBQSxJQWlJQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSx1QkFBWixDQUFvQyxDQUFDLEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELElBQUMsQ0FBQSxXQUFsRCxDQWpJQSxDQUFBO0FBQUEsSUFrSUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksWUFBWixDQUF5QixDQUFDLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLElBQUMsQ0FBQSxTQUF2QyxDQWxJQSxDQUFBO0FBQUEsSUF1SUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLENBQUEsQ0F2SUEsQ0FBQTtBQUFBLElBMElBLElBQUMsQ0FBQSxhQUFELEdBQWlCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGdCQUFaLENBMUlqQixDQUFBO0FBQUEsSUEySUEsSUFBQyxDQUFBLGVBQUQsR0FBbUIsQ0EzSW5CLENBQUE7QUFBQSxJQTRJQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsQ0FBQSxDQUFFLHFCQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBQSxDQTVJcEIsQ0FBQTtBQUFBLElBNklBLElBQUMsQ0FBQSxnQkFBRCxHQUFvQixVQUFVLENBQUMsT0FBWCxDQUFtQixJQUFDLENBQUEsZ0JBQXBCLENBN0lwQixDQUFBO0FBQUEsSUE4SUEsSUFBQyxDQUFBLGFBQWEsQ0FBQyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLElBQUMsQ0FBQSxZQUE1QixDQTlJQSxDQUFBO0FBQUEsSUErSUEsSUFBQyxDQUFBLGFBQWEsQ0FBQyxPQUFmLENBQXVCLE9BQXZCLENBL0lBLENBQUE7QUFBQSxJQWtKQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksbUJBQVosQ0FsSnBCLENBQUE7QUFBQSxJQW1KQSxJQUFDLENBQUEsZ0JBQWdCLENBQUMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsSUFBQyxDQUFBLGVBQS9CLENBbkpBLENBQUE7QUFBQSxJQXFKQSxJQUFDLENBQUEsaUJBQUQsR0FBcUIsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsSUFBMUIsQ0FBQSxDQXJKckIsQ0FBQTtBQUFBLElBc0pBLElBQUMsQ0FBQSxpQkFBRCxHQUFxQixVQUFVLENBQUMsT0FBWCxDQUFtQixJQUFDLENBQUEsaUJBQXBCLENBdEpyQixDQUFBO0FBQUEsSUF1SkEsSUFBQyxDQUFBLFNBQUQsR0FBYSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxrQkFBWixDQXZKYixDQUFBO0FBQUEsSUF3SkEsSUFBQyxDQUFBLGlCQUFELEdBQXFCLENBeEpyQixDQUFBO0FBQUEsSUF5SkEsSUFBQyxDQUFBLFdBQUQsR0FBZSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxjQUFaLENBekpmLENBQUE7QUFBQSxJQTBKQSxJQUFDLENBQUEsV0FBVyxDQUFDLE9BQWIsQ0FDRTtBQUFBLE1BQUEsR0FBQSxFQUFLLHNTQUFMO0FBQUEsTUFDQSxTQUFBLEVBQVcsS0FEWDtBQUFBLE1BRUEsTUFBQSxFQUFRLFNBRlI7QUFBQSxNQUdBLE9BQUEsRUFBUyxDQUFBLEdBQUksT0FBTyxDQUFDLEVBSHJCO0FBQUEsTUFJQSxVQUFBLEVBQVksS0FKWjtBQUFBLE1BS0EsUUFBQSxFQUFVLElBTFY7QUFBQSxNQU1BLElBQUEsRUFBTSxrQkFOTjtBQUFBLE1BT0EsUUFBQSxFQUNFO0FBQUEsUUFBQSxJQUFBLEVBQ0U7QUFBQSxVQUFBLEdBQUEsRUFBSyxjQUFMO0FBQUEsVUFDQSxPQUFBLEVBQ0U7QUFBQSxZQUFBLEVBQUEsRUFBSSxlQUFKO0FBQUEsWUFDQSxLQUFBLEVBQU8sRUFEUDtBQUFBLFlBRUEsTUFBQSxFQUFRLEVBRlI7V0FGRjtTQURGO0FBQUEsUUFNQSxJQUFBLEVBQ0U7QUFBQSxVQUFBLE1BQUEsRUFBUSx1QkFBUjtTQVBGO09BUkY7QUFBQSxNQWdCQSxRQUFBLEVBQVUsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsR0FBRCxFQUFNLEVBQU4sR0FBQTtpQkFDUixLQUFDLENBQUEsaUJBQUQsR0FEUTtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBaEJWO0tBREYsQ0ExSkEsQ0FBQTtBQUFBLElBb0xBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLHVCQUFaLENBQW9DLENBQUMsRUFBckMsQ0FBd0MsT0FBeEMsRUFBaUQsSUFBQyxDQUFBLFdBQWxELENBcExBLENBQUE7QUFBQSxJQXFMQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxZQUFaLENBQXlCLENBQUMsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsSUFBQyxDQUFBLFNBQXZDLENBckxBLENBRFc7RUFBQSxDQUFiOztBQUFBLDRCQXdMQSxPQUFBLEdBQVMsU0FBQSxHQUFBO0FBQ1AsUUFBQSxzQkFBQTtBQUFBLElBQUEsU0FBQSxHQUFnQixJQUFBLFVBQUEsQ0FDZDtBQUFBLE1BQUEsY0FBQSxFQUFnQixVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUExQixDQUFxQyxNQUFyQyxDQUFoQjtBQUFBLE1BQ0EsY0FBQSxFQUFnQixVQUFVLENBQUMsVUFBVSxDQUFDLFVBRHRDO0FBQUEsTUFFQSxRQUFBLEVBQVUseURBRlY7S0FEYyxDQUFoQixDQUFBO0FBQUEsSUFLQSxTQUFTLENBQUMsVUFBVixDQUFBLENBTEEsQ0FBQTtBQUFBLElBT0EsQ0FBQSxDQUFFLE9BQUYsQ0FBVSxDQUFDLFNBQVgsQ0FDRTtBQUFBLE1BQUEsSUFBQSxFQUFNLEtBQU47QUFBQSxNQUNBLFNBQUEsRUFBVyxJQURYO0FBQUEsTUFFQSxTQUFBLEVBQVcsQ0FGWDtLQURGLEVBS0U7QUFBQSxNQUFBLElBQUEsRUFBTSxXQUFOO0FBQUEsTUFDQSxVQUFBLEVBQVksTUFEWjtBQUFBLE1BRUEsTUFBQSxFQUFRLFNBQVMsQ0FBQyxTQUFWLENBQUEsQ0FGUjtBQUFBLE1BR0EsU0FBQSxFQUNFO0FBQUEsUUFBQSxVQUFBLEVBQVksVUFBVSxDQUFDLE9BQVgsQ0FBbUIsa0NBQW5CLENBQVo7T0FKRjtLQUxGLENBUEEsQ0FBQTtBQUFBLElBa0JBLFdBQUEsR0FBa0IsSUFBQSxVQUFBLENBQ2hCO0FBQUEsTUFBQSxjQUFBLEVBQWdCLFNBQUMsSUFBRCxHQUFBO0FBQ2QsZUFBTyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQXRCLENBQWlDLElBQUksQ0FBQyxLQUF0QyxDQUFQLENBRGM7TUFBQSxDQUFoQjtBQUFBLE1BRUEsY0FBQSxFQUFnQixVQUFVLENBQUMsVUFBVSxDQUFDLFVBRnRDO0FBQUEsTUFHQSxLQUFBLEVBQU87UUFBQztBQUFBLFVBQUMsT0FBQSxFQUFRLFNBQVQ7U0FBRCxFQUFxQjtBQUFBLFVBQUMsT0FBQSxFQUFRLG9CQUFUO1NBQXJCLEVBQW9EO0FBQUEsVUFBQyxPQUFBLEVBQVEsYUFBVDtTQUFwRCxFQUE0RTtBQUFBLFVBQUMsT0FBQSxFQUFRLG1CQUFUO1NBQTVFLEVBQTBHO0FBQUEsVUFBQyxPQUFBLEVBQVEsVUFBVDtTQUExRyxFQUErSDtBQUFBLFVBQUMsT0FBQSxFQUFRLFNBQVQ7U0FBL0gsRUFBbUo7QUFBQSxVQUFDLE9BQUEsRUFBUSxTQUFUO1NBQW5KLEVBQXVLO0FBQUEsVUFBQyxPQUFBLEVBQVEsUUFBVDtTQUF2SyxFQUEwTDtBQUFBLFVBQUMsT0FBQSxFQUFRLFlBQVQ7U0FBMUw7T0FIUDtLQURnQixDQWxCbEIsQ0FBQTtBQUFBLElBd0JBLFdBQVcsQ0FBQyxVQUFaLENBQUEsQ0F4QkEsQ0FBQTtBQUFBLElBMEJBLENBQUEsQ0FBRSw0QkFBRixDQUErQixDQUFDLFNBQWhDLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxLQUFOO0FBQUEsTUFDQSxTQUFBLEVBQVcsSUFEWDtBQUFBLE1BRUEsU0FBQSxFQUFXLENBRlg7S0FERixFQUtFO0FBQUEsTUFBQSxJQUFBLEVBQU0sYUFBTjtBQUFBLE1BQ0EsVUFBQSxFQUFZLE9BRFo7QUFBQSxNQUVBLE1BQUEsRUFBUSxXQUFXLENBQUMsU0FBWixDQUFBLENBRlI7QUFBQSxNQUdBLFNBQUEsRUFDRTtBQUFBLFFBQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxPQUFYLENBQW1CLGtCQUFuQixDQUFaO09BSkY7S0FMRixDQTFCQSxDQUFBO0FBQUEsSUFxQ0EsQ0FBQSxDQUFFLHlCQUFGLENBQTRCLENBQUMsU0FBN0IsQ0FDRTtBQUFBLE1BQUEsSUFBQSxFQUFNLEtBQU47QUFBQSxNQUNBLFNBQUEsRUFBVyxJQURYO0FBQUEsTUFFQSxTQUFBLEVBQVcsQ0FGWDtLQURGLEVBS0U7QUFBQSxNQUFBLElBQUEsRUFBTSxhQUFOO0FBQUEsTUFDQSxVQUFBLEVBQVksT0FEWjtBQUFBLE1BRUEsTUFBQSxFQUFRLFdBQVcsQ0FBQyxTQUFaLENBQUEsQ0FGUjtBQUFBLE1BR0EsU0FBQSxFQUNFO0FBQUEsUUFBQSxVQUFBLEVBQVksVUFBVSxDQUFDLE9BQVgsQ0FBbUIsa0JBQW5CLENBQVo7T0FKRjtLQUxGLENBckNBLENBQUE7V0FnREEsQ0FBQSxDQUFFLGdDQUFGLENBQW1DLENBQUMsU0FBcEMsQ0FDRTtBQUFBLE1BQUEsSUFBQSxFQUFNLEtBQU47QUFBQSxNQUNBLFNBQUEsRUFBVyxJQURYO0FBQUEsTUFFQSxTQUFBLEVBQVcsQ0FGWDtLQURGLEVBS0U7QUFBQSxNQUFBLElBQUEsRUFBTSxhQUFOO0FBQUEsTUFDQSxVQUFBLEVBQVksT0FEWjtBQUFBLE1BRUEsTUFBQSxFQUFRLFdBQVcsQ0FBQyxTQUFaLENBQUEsQ0FGUjtBQUFBLE1BR0EsU0FBQSxFQUNFO0FBQUEsUUFBQSxVQUFBLEVBQVksVUFBVSxDQUFDLE9BQVgsQ0FBbUIsa0JBQW5CLENBQVo7T0FKRjtLQUxGLEVBakRPO0VBQUEsQ0F4TFQsQ0FBQTs7QUFBQSw0QkFzUEEsV0FBQSxHQUFhLFNBQUMsRUFBRCxHQUFBO0FBQ1gsUUFBQSw4Q0FBQTtBQUFBLElBQUEsUUFBQSxHQUFXLENBQUMsdUJBQUEsR0FBd0IsRUFBekIsRUFBNEIscUJBQUEsR0FBc0IsRUFBbEQsRUFBcUQsd0JBQUEsR0FBeUIsRUFBOUUsRUFBaUYsVUFBQSxHQUFXLEVBQTVGLEVBQStGLGlCQUFBLEdBQWtCLEVBQWpILEVBQW9ILGNBQUEsR0FBZSxFQUFuSSxFQUFzSSxtQkFBQSxHQUFvQixFQUExSixFQUE2SixrQkFBQSxHQUFtQixFQUFoTCxFQUFtTCw0QkFBQSxHQUE2QixFQUFoTixFQUFtTix5QkFBQSxHQUEwQixFQUE3TyxFQUFnUCx1QkFBQSxHQUF3QixFQUF4USxFQUEyUSw0QkFBQSxHQUE2QixFQUF4UyxFQUEyUywyQkFBQSxHQUE0QixFQUF2VSxFQUEwVSxvQkFBQSxHQUFxQixFQUEvVixFQUFrVyx1QkFBQSxHQUF3QixFQUExWCxFQUE2WCxXQUFBLEdBQVksRUFBelksRUFBNFksdUJBQUEsR0FBd0IsRUFBcGEsRUFBdWEsd0JBQUEsR0FBeUIsRUFBaGMsRUFBbWMsY0FBQSxHQUFlLEVBQWxkLEVBQXFkLGtCQUFBLEdBQW1CLEVBQXhlLEVBQTJlLE1BQUEsR0FBTyxFQUFsZixFQUFxZixrQkFBQSxHQUFtQixFQUF4Z0IsRUFBMmdCLHVCQUFBLEdBQXdCLEVBQW5pQixFQUFzaUIsaUNBQUEsR0FBa0MsRUFBeGtCLEVBQTJrQixzQkFBQSxHQUF1QixFQUFsbUIsRUFBcW1CLGVBQUEsR0FBZ0IsRUFBcm5CLEVBQXduQixlQUFBLEdBQWdCLEVBQXhvQixFQUEyb0IsdUJBQUEsR0FBd0IsRUFBbnFCLEVBQXNxQix1QkFBQSxHQUF3QixFQUE5ckIsRUFBaXNCLGFBQUEsR0FBYyxFQUEvc0IsRUFBa3RCLGlDQUFBLEdBQWtDLEVBQXB2QixFQUF1dkIsa0JBQUEsR0FBbUIsRUFBMXdCLEVBQTZ3QixvQkFBQSxHQUFxQixFQUFseUIsRUFBcXlCLG9CQUFBLEdBQXFCLEVBQTF6QixFQUE2ekIsZ0JBQUEsR0FBaUIsRUFBOTBCLEVBQWkxQixxQkFBQSxHQUFzQixFQUF2MkIsRUFBMDJCLGdCQUFBLEdBQWlCLEVBQTMzQixFQUE4M0Isb0JBQUEsR0FBcUIsRUFBbjVCLEVBQXM1QixZQUFBLEdBQWEsRUFBbjZCLEVBQXM2Qix5QkFBQSxHQUEwQixFQUFoOEIsRUFBbThCLHdCQUFBLEdBQXlCLEVBQTU5QixFQUErOUIsb0JBQUEsR0FBcUIsRUFBcC9CLEVBQXUvQiwyQkFBQSxHQUE0QixFQUFuaEMsRUFBc2hDLFNBQUEsR0FBVSxFQUFoaUMsRUFBbWlDLFdBQUEsR0FBWSxFQUEvaUMsRUFBa2pDLDRCQUFBLEdBQTZCLEVBQS9rQyxDQUFYLENBQUE7QUFBQSxJQUNBLFFBQUEsR0FBVyxHQUFBLENBQUEsS0FEWCxDQUFBO0FBQUEsSUFFQSxPQUFBLEdBQVUsR0FBQSxDQUFBLE1BRlYsQ0FBQTtBQUFBLElBR0EsRUFBQSxHQUFLLENBSEwsQ0FBQTtBQUlBLFNBQUEsK0NBQUE7NkJBQUE7QUFDRSxNQUFBLE9BQUEsR0FBVTtBQUFBLFFBQ1IsRUFBQSxFQUFLLEVBREc7QUFBQSxRQUVSLEtBQUEsRUFBUSxPQUZBO09BQVYsQ0FBQTtBQUFBLE1BSUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxPQUFkLENBSkEsQ0FBQTtBQUFBLE1BS0EsRUFBQSxFQUxBLENBREY7QUFBQSxLQUpBO0FBV0EsV0FBTyxRQUFQLENBWlc7RUFBQSxDQXRQYixDQUFBOztBQUFBLDRCQXFRQSxjQUFBLEdBQWdCLFNBQUMsRUFBRCxHQUFBO0FBQ2QsUUFBQSw4Q0FBQTtBQUFBLElBQUEsUUFBQSxHQUFXLENBQUMsV0FBQSxHQUFZLEVBQWIsRUFBZ0IseUJBQUEsR0FBMEIsRUFBMUMsRUFBNkMsd0JBQUEsR0FBeUIsRUFBdEUsQ0FBWCxDQUFBO0FBQUEsSUFDQSxRQUFBLEdBQVcsR0FBQSxDQUFBLEtBRFgsQ0FBQTtBQUFBLElBRUEsT0FBQSxHQUFVLEdBQUEsQ0FBQSxNQUZWLENBQUE7QUFBQSxJQUdBLEVBQUEsR0FBSyxDQUhMLENBQUE7QUFJQSxTQUFBLCtDQUFBOzZCQUFBO0FBQ0UsTUFBQSxPQUFBLEdBQVU7QUFBQSxRQUNSLEVBQUEsRUFBSyxFQURHO0FBQUEsUUFFUixLQUFBLEVBQVEsT0FGQTtPQUFWLENBQUE7QUFBQSxNQUlBLFFBQVEsQ0FBQyxJQUFULENBQWMsT0FBZCxDQUpBLENBQUE7QUFBQSxNQUtBLEVBQUEsRUFMQSxDQURGO0FBQUEsS0FKQTtBQVdBLFdBQU8sUUFBUCxDQVpjO0VBQUEsQ0FyUWhCLENBQUE7O0FBQUEsNEJBb1JBLFlBQUEsR0FBYyxTQUFDLEtBQUQsR0FBQTtBQUNaLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxhQUFhLENBQUMsTUFBZixDQUFBLENBQXVCLENBQUMsTUFBeEIsQ0FBK0IsSUFBQyxDQUFBLGdCQUFELENBQWtCO0FBQUEsTUFBQyxPQUFBLEVBQVUsSUFBQyxDQUFBLGVBQVo7S0FBbEIsQ0FBL0IsQ0FEQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsZUFBRCxFQUZBLENBQUE7QUFBQSxJQUdBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGdCQUFaLENBQTZCLENBQUMsTUFBOUIsQ0FDRTtBQUFBLE1BQUEsd0JBQUEsRUFBMEIsRUFBMUI7S0FERixDQUhBLENBQUE7QUFLQSxJQUFBLElBQUcsSUFBQyxDQUFBLGVBQUQsR0FBaUIsQ0FBcEI7QUFDRSxNQUFBLElBQUMsQ0FBQSxnQkFBZ0IsQ0FBQyxJQUFsQixDQUFBLENBQUEsQ0FERjtLQUxBO1dBU0EsSUFBQyxDQUFBLE9BQUQsQ0FBQSxFQVZZO0VBQUEsQ0FwUmQsQ0FBQTs7QUFBQSw0QkFpU0EsZUFBQSxHQUFpQixTQUFDLEtBQUQsR0FBQTtBQUNmLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxlQUFELEVBREEsQ0FBQTtBQUFBLElBRUEsQ0FBQSxDQUFFLHlCQUFGLENBQTRCLENBQUMsTUFBN0IsQ0FBQSxDQUZBLENBQUE7QUFHQSxJQUFBLElBQUcsSUFBQyxDQUFBLGVBQUQsR0FBaUIsQ0FBcEI7YUFDRSxJQUFDLENBQUEsZ0JBQWdCLENBQUMsSUFBbEIsQ0FBQSxFQURGO0tBSmU7RUFBQSxDQWpTakIsQ0FBQTs7QUFBQSw0QkF5U0EsV0FBQSxHQUFhLFNBQUMsS0FBRCxHQUFBO0FBQ1gsUUFBQSx1QkFBQTtBQUFBLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLE1BQUEsR0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxRQUFaLENBRFQsQ0FBQTtBQUVBLFNBQUEsNkNBQUE7eUJBQUE7QUFDRSxNQUFBLElBQUcsQ0FBQSxJQUFFLENBQUEsUUFBRCxDQUFVLEtBQVYsQ0FBSjtBQUNFLGVBQU8sS0FBUCxDQURGO09BREY7QUFBQSxLQUZBO0FBTUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGlCQUFaLENBQThCLENBQUMsTUFBL0IsR0FBc0MsQ0FBekM7QUFDRSxhQUFPLEtBQVAsQ0FERjtLQU5BO0FBQUEsSUFTQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBVCxDQUFxQixTQUFyQixDQUErQixDQUFDLElBQWhDLENBQUEsQ0FUWCxDQUFBO0FBQUEsSUFVQSxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsU0FBbEIsQ0FWQSxDQUFBO0FBQUEsSUFXQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQjtBQUFBLE1BQUMsU0FBQSxFQUFVLENBQVg7S0FBbEIsRUFBaUMsS0FBakMsQ0FYQSxDQUFBO1dBY0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxTQUFMLENBQWUsQ0FBQSxDQUFFLGVBQUYsQ0FBa0IsQ0FBQyxjQUFuQixDQUFBLENBQWYsQ0FBWCxDQUFaLEVBZlc7RUFBQSxDQXpTYixDQUFBOztBQUFBLDRCQTJUQSxTQUFBLEdBQVcsU0FBQyxLQUFELEdBQUE7QUFDVCxJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxxQkFBWixDQUFrQyxDQUFDLFdBQW5DLENBQStDLFVBQS9DLENBREEsQ0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsU0FBckIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFBLENBRlgsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFULENBQWtCLFNBQWxCLENBSEEsQ0FBQTtXQUlBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxPQUFWLENBQWtCO0FBQUEsTUFBQyxTQUFBLEVBQVUsQ0FBWDtLQUFsQixFQUFpQyxLQUFqQyxFQUxTO0VBQUEsQ0EzVFgsQ0FBQTs7QUFBQSw0QkFtVUEsV0FBQSxHQUFhLFNBQUMsS0FBRCxHQUFBO0FBQ1gsUUFBQSx1QkFBQTtBQUFBLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLE1BQUEsR0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxRQUFaLENBRFQsQ0FBQTtBQUVBLFNBQUEsNkNBQUE7eUJBQUE7QUFDRSxNQUFBLElBQUcsQ0FBQSxJQUFFLENBQUEsUUFBRCxDQUFVLEtBQVYsQ0FBSjtBQUNFLGVBQU8sS0FBUCxDQURGO09BREY7QUFBQSxLQUZBO0FBTUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGlCQUFaLENBQThCLENBQUMsTUFBL0IsR0FBc0MsQ0FBekM7QUFDRSxhQUFPLEtBQVAsQ0FERjtLQU5BO0FBQUEsSUFTQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxxQkFBWixDQUFrQyxDQUFDLElBQW5DLENBQUEsQ0FBeUMsQ0FBQyxRQUExQyxDQUFtRCxVQUFuRCxDQVRBLENBQUE7QUFBQSxJQVVBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLFNBQXJCLENBQStCLENBQUMsSUFBaEMsQ0FBQSxDQVZYLENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxDQUFrQixTQUFsQixDQVhBLENBQUE7V0FZQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQjtBQUFBLE1BQUMsU0FBQSxFQUFVLENBQVg7S0FBbEIsRUFBaUMsS0FBakMsRUFiVztFQUFBLENBblViLENBQUE7O0FBQUEsNEJBbVZBLFNBQUEsR0FBVyxTQUFDLEtBQUQsR0FBQTtBQUNULElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLHFCQUFaLENBQWtDLENBQUMsV0FBbkMsQ0FBK0MsVUFBL0MsQ0FEQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBVCxDQUFxQixTQUFyQixDQUErQixDQUFDLElBQWhDLENBQUEsQ0FGWCxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsU0FBbEIsQ0FIQSxDQUFBO1dBSUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0I7QUFBQSxNQUFDLFNBQUEsRUFBVSxDQUFYO0tBQWxCLEVBQWlDLEtBQWpDLEVBTFM7RUFBQSxDQW5WWCxDQUFBOztBQUFBLDRCQTJWQSxVQUFBLEdBQVksU0FBQyxLQUFELEdBQUE7QUFDVixJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsV0FBVyxDQUFDLE1BQWIsQ0FBQSxDQUFxQixDQUFDLE1BQXRCLENBQTZCLElBQUMsQ0FBQSxjQUFELENBQWdCO0FBQUEsTUFBQyxPQUFBLEVBQVUsSUFBQyxDQUFBLGFBQVo7S0FBaEIsQ0FBN0IsQ0FEQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsYUFBRCxFQUZBLENBQUE7QUFBQSxJQUdBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGdCQUFaLENBQTZCLENBQUMsTUFBOUIsQ0FDRTtBQUFBLE1BQUEsd0JBQUEsRUFBMEIsRUFBMUI7S0FERixDQUhBLENBQUE7QUFLQSxJQUFBLElBQUcsSUFBQyxDQUFBLGFBQUQsR0FBZSxDQUFsQjthQUNFLElBQUMsQ0FBQSxjQUFjLENBQUMsSUFBaEIsQ0FBQSxFQURGO0tBTlU7RUFBQSxDQTNWWixDQUFBOztBQUFBLDRCQXFXQSxhQUFBLEdBQWUsU0FBQyxLQUFELEdBQUE7QUFDYixJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsYUFBRCxFQURBLENBQUE7QUFBQSxJQUVBLENBQUEsQ0FBRSxzQkFBRixDQUF5QixDQUFDLE1BQTFCLENBQUEsQ0FGQSxDQUFBO0FBR0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxhQUFELEdBQWUsQ0FBbEI7YUFDRSxJQUFDLENBQUEsY0FBYyxDQUFDLElBQWhCLENBQUEsRUFERjtLQUphO0VBQUEsQ0FyV2YsQ0FBQTs7QUFBQSw0QkE2V0EsV0FBQSxHQUFhLFNBQUMsS0FBRCxHQUFBO0FBQ1gsUUFBQSx1QkFBQTtBQUFBLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLE1BQUEsR0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxRQUFaLENBRFQsQ0FBQTtBQUVBLFNBQUEsNkNBQUE7eUJBQUE7QUFDRSxNQUFBLElBQUcsQ0FBQSxJQUFFLENBQUEsUUFBRCxDQUFVLEtBQVYsQ0FBSjtBQUNFLGVBQU8sS0FBUCxDQURGO09BREY7QUFBQSxLQUZBO0FBTUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGlCQUFaLENBQThCLENBQUMsTUFBL0IsR0FBc0MsQ0FBekM7QUFDRSxhQUFPLEtBQVAsQ0FERjtLQU5BO0FBQUEsSUFTQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxxQkFBWixDQUFrQyxDQUFDLElBQW5DLENBQUEsQ0FBeUMsQ0FBQyxRQUExQyxDQUFtRCxVQUFuRCxDQVRBLENBQUE7QUFBQSxJQVVBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLFNBQXJCLENBQStCLENBQUMsSUFBaEMsQ0FBQSxDQVZYLENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxDQUFrQixTQUFsQixDQVhBLENBQUE7V0FZQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQjtBQUFBLE1BQUMsU0FBQSxFQUFVLENBQVg7S0FBbEIsRUFBaUMsS0FBakMsRUFiVztFQUFBLENBN1diLENBQUE7O0FBQUEsNEJBNlhBLFNBQUEsR0FBVyxTQUFDLEtBQUQsR0FBQTtBQUNULElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLHFCQUFaLENBQWtDLENBQUMsV0FBbkMsQ0FBK0MsVUFBL0MsQ0FEQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBVCxDQUFxQixTQUFyQixDQUErQixDQUFDLElBQWhDLENBQUEsQ0FGWCxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsU0FBbEIsQ0FIQSxDQUFBO1dBSUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0I7QUFBQSxNQUFDLFNBQUEsRUFBVSxDQUFYO0tBQWxCLEVBQWlDLEtBQWpDLEVBTFM7RUFBQSxDQTdYWCxDQUFBOztBQUFBLDRCQXNZQSxXQUFBLEdBQWEsU0FBQSxHQUFBO0FBQ1gsUUFBQSwyREFBQTtBQUFBLElBQUEsTUFBQSxHQUFTLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBVCxDQUFjLE9BQWQsQ0FBVCxDQUFBO0FBQ0E7U0FBQSw2Q0FBQTt5QkFBQTtBQUNFLE1BQUEsUUFBQSxHQUFXLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFFBQUEsR0FBUyxLQUFLLENBQUMsWUFBTixDQUFtQixrQkFBbkIsQ0FBckIsQ0FBWCxDQUFBO0FBQUE7O0FBQ0E7YUFBQSxpREFBQTtpQ0FBQTtBQUNFLFVBQUEsS0FBQSxHQUFRLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxPQUFYLENBQW1CLGNBQW5CLENBQVIsQ0FBQTtBQUNBLFVBQUEsSUFBRyxLQUFLLENBQUMsT0FBVDtBQUNFLFlBQUEsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsTUFBbEIsQ0FBQSxDQUFBO0FBQUEsWUFDQSxPQUFPLENBQUMsZUFBUixDQUF3QixVQUF4QixDQURBLENBQUE7QUFBQSwyQkFFQSxPQUFPLENBQUMsWUFBUixDQUFxQixVQUFyQixFQUFpQyxVQUFqQyxFQUZBLENBREY7V0FBQSxNQUFBO0FBS0UsWUFBQSxLQUFLLENBQUMsUUFBTixDQUFlLE1BQWYsQ0FBQSxDQUFBO0FBQUEsWUFDQSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQWxCLENBQXlCLGdCQUF6QixDQURBLENBQUE7QUFBQSxZQUVBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLFVBQXJCLEVBQWlDLFVBQWpDLENBRkEsQ0FBQTtBQUFBLDJCQUdBLE9BQU8sQ0FBQyxlQUFSLENBQXdCLFVBQXhCLEVBSEEsQ0FMRjtXQUZGO0FBQUE7O1dBREEsQ0FERjtBQUFBO29CQUZXO0VBQUEsQ0F0WWIsQ0FBQTs7QUFBQSw0QkF1WkEsZUFBQSxHQUFpQixTQUFDLEtBQUQsR0FBQTtBQUNmLFFBQUEsdUdBQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUsS0FBSyxDQUFDLGFBQVIsQ0FBVCxDQUFBO0FBQUEsSUFDQSxNQUFNLENBQUMsV0FBUCxDQUFtQixXQUFuQixDQURBLENBQUE7QUFBQSxJQUVBLEVBQUEsR0FBSyxNQUFNLENBQUMsR0FBUCxDQUFBLENBRkwsQ0FBQTtBQUFBLElBSUEsSUFBQSxHQUFPLE1BQU0sQ0FBQyxPQUFQLENBQWUsT0FBZixDQUpQLENBQUE7QUFBQSxJQU1BLFdBQUEsR0FBYyxJQUFDLENBQUEsY0FBRCxDQUFnQixFQUFoQixDQU5kLENBQUE7QUFBQSxJQU9BLFdBQUEsR0FBYyxJQUFJLENBQUMsSUFBTCxDQUFVLFdBQVcsQ0FBQyxNQUFaLEdBQXFCLENBQS9CLENBUGQsQ0FBQTtBQUFBLElBUUEsUUFBQSxHQUFXLFdBQVcsQ0FBQyxNQUFaLENBQW1CLENBQW5CLEVBQXFCLFdBQXJCLENBUlgsQ0FBQTtBQUFBLElBVUEsUUFBQSxHQUFXLElBQUMsQ0FBQSxzQkFBRCxDQUF3QjtBQUFBLE1BQ2pDLEtBQUEsRUFBUSxJQUFDLENBQUEsVUFEd0I7QUFBQSxNQUVqQyxPQUFBLEVBQVUsSUFBQyxDQUFBLFdBQUQsQ0FBYSxFQUFiLENBRnVCO0FBQUEsTUFHakMsT0FBQSxFQUFVLFFBSHVCO0FBQUEsTUFJakMsT0FBQSxFQUFVLFdBSnVCO0tBQXhCLENBVlgsQ0FBQTtBQUFBLElBaUJBLElBQUEsR0FBTyxJQUFJLENBQUMsSUFBTCxDQUFBLENBakJQLENBQUE7QUFrQkEsSUFBQSxJQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsU0FBZCxDQUFIO0FBQ0UsTUFBQSxJQUFJLENBQUMsV0FBTCxDQUFpQixRQUFqQixDQUFBLENBREY7S0FBQSxNQUFBO0FBR0UsTUFBQSxJQUFJLENBQUMsS0FBTCxDQUFXLFFBQVgsQ0FBQSxDQUhGO0tBbEJBO0FBQUEsSUF1QkEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksZ0JBQVosQ0FBNkIsQ0FBQyxNQUE5QixDQUNFO0FBQUEsTUFBQSx3QkFBQSxFQUEwQixFQUExQjtLQURGLENBdkJBLENBQUE7QUF5QkE7QUFBQTtTQUFBLDJDQUFBO3lCQUFBO0FBQ0Usb0JBQUksSUFBQSx3QkFBQSxDQUF5QixDQUFBLENBQUUsT0FBRixDQUF6QixFQUFKLENBREY7QUFBQTtvQkExQmU7RUFBQSxDQXZaakIsQ0FBQTs7QUFBQSw0QkFzYkEsVUFBQSxHQUFZLFNBQUMsS0FBRCxHQUFBO0FBQ1YsUUFBQSxnQ0FBQTtBQUFBLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxXQUFXLENBQUMsTUFBYixDQUFBLENBQXFCLENBQUMsTUFBdEIsQ0FBNkIsSUFBQyxDQUFBLGNBQUQsQ0FBZ0I7QUFBQSxNQUFDLE9BQUEsRUFBVSxJQUFDLENBQUEsVUFBWjtLQUFoQixDQUE3QixDQURBLENBQUE7QUFBQSxJQUVBLElBQUMsQ0FBQSxVQUFELEVBRkEsQ0FBQTtBQUFBLElBSUEsT0FBQSxHQUFVLElBQUMsQ0FBQSxXQUFXLENBQUMsTUFBYixDQUFBLENBQXFCLENBQUMsSUFBdEIsQ0FBQSxDQUpWLENBQUE7QUFBQSxJQUtBLE9BQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUFzQixDQUFDLEVBQXZCLENBQTBCLFFBQTFCLEVBQW9DLElBQUMsQ0FBQSxlQUFyQyxDQUxBLENBQUE7QUFBQSxJQU9BLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGdCQUFaLENBQTZCLENBQUMsTUFBOUIsQ0FDRTtBQUFBLE1BQUEsd0JBQUEsRUFBMEIsRUFBMUI7S0FERixDQVBBLENBQUE7QUFBQSxJQVNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFdBQVosQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsY0FBYyxDQUFDLEdBQWhCLENBQUEsQ0FBOUIsQ0FUQSxDQUFBO0FBQUEsSUFVQSxJQUFDLENBQUEsV0FBRCxDQUFBLENBVkEsQ0FBQTtBQVdBO0FBQUEsU0FBQSwyQ0FBQTt5QkFBQTtBQUNFLE1BQUksSUFBQSx3QkFBQSxDQUF5QixDQUFBLENBQUUsT0FBRixDQUF6QixDQUFKLENBREY7QUFBQSxLQVhBO0FBY0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxVQUFELEdBQVksQ0FBZjthQUNFLElBQUMsQ0FBQSxjQUFjLENBQUMsSUFBaEIsQ0FBQSxFQURGO0tBZlU7RUFBQSxDQXRiWixDQUFBOztBQUFBLDRCQXljQSxhQUFBLEdBQWUsU0FBQyxLQUFELEdBQUE7QUFDYixJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsVUFBRCxFQURBLENBQUE7QUFBQSxJQUVBLENBQUEsQ0FBRSxvQkFBRixDQUF1QixDQUFDLE1BQXhCLENBQUEsQ0FGQSxDQUFBO0FBR0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxVQUFELEdBQVksQ0FBZjthQUNFLElBQUMsQ0FBQSxjQUFjLENBQUMsSUFBaEIsQ0FBQSxFQURGO0tBSmE7RUFBQSxDQXpjZixDQUFBOztBQUFBLDRCQWlkQSxRQUFBLEdBQVUsU0FBQyxLQUFELEdBQUE7QUFFUixRQUFBLEtBQUE7QUFBQSxJQUFBLElBQUcsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsaUJBQW5CLENBQUg7QUFDRSxNQUFBLEtBQUEsR0FBUSxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUFLLENBQUMsWUFBTixDQUFtQixpQkFBbkIsQ0FBeEIsQ0FBUixDQURGO0tBQUE7QUFHQSxJQUFBLElBQUcsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsVUFBbkIsQ0FBSDtBQUNFLE1BQUEsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQVosQ0FBQSxDQUFrQixDQUFDLE1BQW5CLEtBQTZCLENBQWhDO0FBQ0UsUUFBQSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQWhCLENBQW9CLGdCQUFwQixDQUFBLENBREY7T0FERjtLQUhBO0FBT0EsSUFBQSxJQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBaEIsQ0FBeUIsZ0JBQXpCLENBQUg7QUFDRSxNQUFBLElBQUcsS0FBSDtBQUNFLFFBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFaLEdBQXNCLE9BQXRCLENBREY7T0FBQTtBQUVBLGFBQU8sS0FBUCxDQUhGO0tBQUEsTUFBQTtBQUtFLE1BQUEsSUFBRyxLQUFIO0FBQ0UsUUFBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQVosR0FBc0IsTUFBdEIsQ0FERjtPQUxGO0tBUEE7QUFlQSxXQUFPLElBQVAsQ0FqQlE7RUFBQSxDQWpkVixDQUFBOztBQUFBLDRCQXFlQSxXQUFBLEdBQWEsU0FBQyxLQUFELEdBQUE7QUFDWCxRQUFBLHVCQUFBO0FBQUEsSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsTUFBQSxHQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFFBQVosQ0FEVCxDQUFBO0FBRUEsU0FBQSw2Q0FBQTt5QkFBQTtBQUNFLE1BQUEsSUFBRyxDQUFBLElBQUUsQ0FBQSxRQUFELENBQVUsS0FBVixDQUFKO0FBQ0UsZUFBTyxLQUFQLENBREY7T0FERjtBQUFBLEtBRkE7QUFNQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksaUJBQVosQ0FBOEIsQ0FBQyxNQUEvQixHQUFzQyxDQUF6QztBQUNFLGFBQU8sS0FBUCxDQURGO0tBTkE7QUFBQSxJQVNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLHFCQUFaLENBQWtDLENBQUMsSUFBbkMsQ0FBQSxDQUF5QyxDQUFDLFFBQTFDLENBQW1ELFVBQW5ELENBVEEsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsU0FBckIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFBLENBVlgsQ0FBQTtBQUFBLElBV0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFULENBQWtCLFNBQWxCLENBWEEsQ0FBQTtXQVlBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxPQUFWLENBQWtCO0FBQUEsTUFBQyxTQUFBLEVBQVUsQ0FBWDtLQUFsQixFQUFpQyxLQUFqQyxFQWJXO0VBQUEsQ0FyZWIsQ0FBQTs7QUFBQSw0QkF1ZkEsTUFBQSxHQUFRLFNBQUMsS0FBRCxHQUFBO0FBQ04sSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtXQUNBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEtBQXJCLEVBQTRCLFNBQUMsS0FBRCxHQUFBLENBQTVCLEVBRk07RUFBQSxDQXZmUixDQUFBOztBQUFBLDRCQTRmQSxJQUFBLEdBQU0sU0FBQyxJQUFELEdBQUEsQ0E1Zk4sQ0FBQTs7QUFBQSw0QkErZkEsSUFBQSxHQUFNLFNBQUMsS0FBRCxHQUFBO0FBQ0osUUFBQSxNQUFBO0FBQUEsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFhLEtBQWIsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxJQUFHLEtBQUssQ0FBQyxNQUFUO0FBQ0UsTUFBQSxNQUFBLEdBQWEsSUFBQSxVQUFBLENBQUEsQ0FBYixDQUFBO0FBQUEsTUFFQSxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxLQUFELEdBQUE7QUFDZCxjQUFBLFlBQUE7QUFBQSxVQUFBLEtBQUMsQ0FBQSxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQXhCLENBQXNDLEtBQXRDLENBQTRDLENBQUMsR0FBN0MsR0FBbUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFoRSxDQUFBO0FBQUEsVUFDQSxNQUFBLEdBQVMsUUFBUSxDQUFDLFVBQVQsQ0FBb0IsS0FBQyxDQUFBLGNBQWMsQ0FBQyxPQUFwQyxFQUE2QyxJQUE3QyxDQURULENBQUE7QUFBQSxVQUVBLElBQUEsR0FBTyxLQUFDLENBQUEsWUFBWSxDQUFDLElBQWQsQ0FBQSxDQUZQLENBQUE7QUFHQSxVQUFBLElBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxnQkFBZCxDQUFIO0FBQ0UsWUFBQSxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsQ0FERjtXQUhBO0FBQUEsVUFLQSxLQUFDLENBQUEsWUFBWSxDQUFDLE1BQWQsQ0FBcUIsTUFBckIsQ0FMQSxDQUFBO2lCQU1BLEtBQUMsQ0FBQSxZQUFZLENBQUMsSUFBZCxDQUFBLENBQW9CLENBQUMsSUFBckIsQ0FBMEIsUUFBMUIsQ0FBbUMsQ0FBQyxFQUFwQyxDQUF1QyxPQUF2QyxFQUFnRCxLQUFDLENBQUEsWUFBakQsRUFQYztRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBRmhCLENBQUE7YUFXQSxNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFNLENBQUEsQ0FBQSxDQUEzQixFQVpGO0tBRkk7RUFBQSxDQS9mTixDQUFBOztBQUFBLDRCQWdoQkEsWUFBQSxHQUFjLFNBQUMsS0FBRCxHQUFBO0FBQ1osSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLFlBQVksQ0FBQyxJQUFkLENBQUEsQ0FBb0IsQ0FBQyxNQUFyQixDQUFBLENBREEsQ0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLElBQUksQ0FBQyxXQUFOLENBQWtCLElBQUMsQ0FBQSxJQUFJLENBQUMsR0FBTixDQUFVLEVBQVYsQ0FBYSxDQUFDLEtBQWQsQ0FBb0IsSUFBcEIsQ0FBbEIsQ0FGQSxDQUFBO1dBR0EsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxzQkFBWixFQUpJO0VBQUEsQ0FoaEJkLENBQUE7O0FBQUEsNEJBdWhCQSxjQUFBLEdBQWdCLFNBQUMsS0FBRCxHQUFBO0FBQ2QsUUFBQSxrQkFBQTtBQUFBLElBQUEsS0FBQSxHQUFRLE9BQU8sQ0FBQyxRQUFSLENBQWlCLEtBQWpCLENBQVIsQ0FBQTtBQUFBLElBRUEsR0FBQSxHQUFNLEtBQU0sQ0FBQSxDQUFBLENBQUcsQ0FBQSxNQUFBLENBQU8sQ0FBQyxTQUFqQixDQUEyQixLQUFNLENBQUEsQ0FBQSxDQUFHLENBQUEsTUFBQSxDQUFPLENBQUMsV0FBakIsQ0FBNkIsR0FBN0IsQ0FBQSxHQUFvQyxDQUEvRCxDQUFpRSxDQUFDLFdBQWxFLENBQUEsQ0FGTixDQUFBO0FBSUEsSUFBQSxJQUFJLEtBQU0sQ0FBQSxDQUFBLENBQU4sSUFBWSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQUUsQ0FBQyxJQUFULElBQWlCLE9BQU8sQ0FBQyxFQUExQixDQUFaLElBQTZDLENBQUMsR0FBQSxLQUFPLEtBQVAsSUFBZ0IsR0FBQSxLQUFPLEtBQXZCLElBQWdDLEdBQUEsS0FBTyxNQUF2QyxJQUFpRCxHQUFBLEtBQU8sS0FBekQsQ0FBakQ7QUFFRSxNQUFBLE1BQUEsR0FBYSxJQUFBLFVBQUEsQ0FBQSxDQUFiLENBQUE7QUFBQSxNQUNBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLEtBQUQsR0FBQTtBQUVkLGNBQUEsWUFBQTtBQUFBLFVBQUEsS0FBQyxDQUFBLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBeEIsQ0FBc0MsS0FBdEMsQ0FBNEMsQ0FBQyxHQUE3QyxHQUFtRCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQWhFLENBQUE7QUFBQSxVQUNBLE1BQUEsR0FBUyxRQUFRLENBQUMsVUFBVCxDQUFvQixLQUFDLENBQUEsY0FBYyxDQUFDLE9BQXBDLEVBQTZDLElBQTdDLENBRFQsQ0FBQTtBQUFBLFVBRUEsSUFBQSxHQUFPLEtBQUMsQ0FBQSxZQUFZLENBQUMsSUFBZCxDQUFBLENBRlAsQ0FBQTtBQUdBLFVBQUEsSUFBRyxJQUFJLENBQUMsUUFBTCxDQUFjLGdCQUFkLENBQUg7QUFDRSxZQUFBLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxDQURGO1dBSEE7QUFBQSxVQUtBLEtBQUMsQ0FBQSxZQUFZLENBQUMsTUFBZCxDQUFxQixNQUFyQixDQUxBLENBQUE7aUJBTUEsS0FBQyxDQUFBLFlBQVksQ0FBQyxJQUFkLENBQUEsQ0FBb0IsQ0FBQyxJQUFyQixDQUEwQixRQUExQixDQUFtQyxDQUFDLEVBQXBDLENBQXVDLE9BQXZDLEVBQWdELEtBQUMsQ0FBQSxZQUFqRCxFQVJjO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FEaEIsQ0FBQTthQVdBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLEtBQU0sQ0FBQSxDQUFBLENBQTNCLEVBYkY7S0FBQSxNQUFBO0FBZ0JFLE1BQUEsSUFBQyxDQUFBLFlBQVksQ0FBQyxJQUFkLENBQUEsQ0FBb0IsQ0FBQyxNQUFyQixDQUFBLENBQUEsQ0FBQTtBQUFBLE1BQ0EsSUFBQyxDQUFBLElBQUksQ0FBQyxXQUFOLENBQWtCLElBQUMsQ0FBQSxJQUFJLENBQUMsR0FBTixDQUFVLEVBQVYsQ0FBYSxDQUFDLEtBQWQsQ0FBb0IsSUFBcEIsQ0FBbEIsQ0FEQSxDQUFBO2FBRUEsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxzQkFBWixFQWxCVjtLQUxjO0VBQUEsQ0F2aEJoQixDQUFBOztBQUFBLDRCQWlqQkEsU0FBQSxHQUFXLFNBQUMsS0FBRCxHQUFBO0FBQ1QsUUFBQSxTQUFBO0FBQUEsSUFBQSxHQUFBLEdBQU0sUUFBQSxDQUFTLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFBLENBQVUsQ0FBQyxJQUFYLENBQUEsQ0FBVCxFQUE0QixFQUE1QixDQUFOLENBQUE7QUFFQSxJQUFBLElBQUcsR0FBQSxHQUFJLENBQUosSUFBUyxLQUFBLENBQU0sR0FBTixDQUFaO0FBQ0UsTUFBQSxJQUFDLENBQUEsR0FBRyxDQUFDLEdBQUwsQ0FBUyxDQUFULENBQUEsQ0FBQTtBQUNBLFlBQUEsQ0FGRjtLQUZBO0FBQUEsSUFNQSxJQUFBLEdBQU8sUUFBQSxDQUFTLE1BQUEsQ0FBTyxJQUFDLENBQUEsSUFBSSxDQUFDLEdBQU4sQ0FBQSxDQUFBLEdBQVksR0FBWixHQUFnQixDQUFDLFFBQUEsQ0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVAsQ0FBQSxDQUFULEVBQXNCLEVBQXRCLENBQUEsR0FBMEIsQ0FBM0IsQ0FBdkIsRUFBc0QsU0FBdEQsQ0FBZ0UsQ0FBQyxXQUFqRSxDQUFBLENBQVQsRUFBeUYsRUFBekYsQ0FOUCxDQUFBO0FBT0EsSUFBQSxJQUFHLEdBQUEsR0FBSSxJQUFQO0FBQ0UsTUFBQSxJQUFDLENBQUEsR0FBRyxDQUFDLEdBQUwsQ0FBUyxJQUFULENBQUEsQ0FERjtLQVBBO0FBU0EsVUFBQSxDQVRBO0FBV0EsSUFBQSxJQUFHLEdBQUEsR0FBSSxFQUFQO2FBQ0UsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsRUFBVCxFQURGO0tBWlM7RUFBQSxDQWpqQlgsQ0FBQTs7eUJBQUE7O0lBREYsQ0FBQTs7QUFBQSxDQWlrQkEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUEsR0FBQTtTQUNaLElBQUEsZUFBQSxDQUFBLEVBRFk7QUFBQSxDQUFsQixDQWprQkEsQ0FBQSIsImZpbGUiOiJQZXJzb25hbERhdGFBbGwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQZXJzb25hbERhdGFBbGxcbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQHdpZGdldCA9ICQgJy5yZWdpc3RyYXRpb24tc3RlcHMnXG4gICAgaWYgQHdpZGdldC5sZW5ndGggPT0gMFxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfQvdC1INC90LDQudC00LXQvSDQstC40LTQttC10YInKVxuXG4gICAgQHN0ZXBzID0gQHdpZGdldC5maW5kICcuc3RlcHMnXG4gICAgQHBhbmVscyA9IEB3aWRnZXQuZmluZCAnLnBhbmVsJ1xuICAgIEBjdXJyZW50ID0gQHdpZGdldC5maW5kICcucGFuZWwuY3VycmVudCdcblxuICAgIEBzdGVwMSA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMSdcbiAgICBAc3RlcDIgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTInXG4gICAgQHN0ZXAzID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0zJ1xuICAgIEBzdGVwNCA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtNCdcbiAgICBAc3RlcDUgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTUnXG5cbiAgICAjINCe0LHRidC10LVcbiAgICBzZWxlY3QgPSAkICdzZWxlY3QnXG4gICAgaWYgc2VsZWN0Lmxlbmd0aCA+IDBcbiAgICAgIHNlbGVjdC5jaG9zZW5cbiAgICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuXG4gICAgIyDQqNCw0LMgMVxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDEuaDVWYWxpZGF0ZSgpXG5cbiAgICB3aW5kb3cuRmlsZUFQSS5kZWJ1ZyA9IHRydWVcblxuICAgICMg0JfQsNCz0YDRg9C30LrQsCDQsNCy0LDRgtCw0YDQsFxuICAgIHdpbmRvdy5GaWxlQVBJID0ge2RlYnVnOiB0cnVlLCBzdGF0aWNQYXRoOiAnanMvJ31cblxuXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG4gICAgQGF2YXRhclRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2N1cnJlbnQtYXZhdGFyLXRlbXBsYXRlJ1xuICAgIEBmaWxlU2VsZWN0b3IgPSBAc3RlcDEuZmluZCAnLmZpbGUtc2VsZWN0b3InXG4gICAgXG4gICAgRmlsZUFQSS5ldmVudC5vbiBAZmlsZVswXSwgJ2NoYW5nZScsIEBhdmF0YXJTZWxlY3RlZFxuICAgIEBmaWxlU2VsZWN0b3IuZG5kIEBvdmVyLCBAZHJvcFxuICAgIEZpbGVBUEkuZXZlbnQub24gZG9jdW1lbnQsICdkcm9wJywgQGRyb3BlZFxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC+0L/Ri9GC0LBcbiAgICBleHAgPSAkICcjZXhwZXJpZW5jZSdcbiAgICBpZiBleHAubGVuZ3RoID4gMFxuICAgICAgZXhwLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgICAnbWF4JzogWzUwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcbiAgICAgIGV4cC5MaW5rKCdsb3dlcicpLnRvKCQoJyNleHBlcmllbmNlLXZhbHVlJykpXG5cbiAgICAjINCU0LDRgtCwINGA0L7QttC00LXQvdC40Y9cbiAgICBAbW9udGggPSBAc3RlcDEuZmluZCAnLm1vbnRoIHNlbGVjdCdcbiAgICBAeWVhciAgPSBAc3RlcDEuZmluZCAnLnllYXIgc2VsZWN0J1xuICAgIEBkYXkgICA9IEBzdGVwMS5maW5kICdpbnB1dC5kYXknXG4gICAgQGRheS5vbiAgICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQG1vbnRoLm9uICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQHllYXIub24gICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG5cbiAgICAjINCe0YLQv9GA0LDQstC60LAg0LTQsNC90L3Ri9GFINCo0LDQsyAxXG4gICAgQHN0ZXAxLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXAxU3VibWl0XG5cblxuICAgICMg0KjQsNCzIDJcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAyLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQt9Cw0L3Rj9GC0LjQuVxuICAgIEBkdXJhdGlvbl92YWx1ZSA9ICQoJyNkdXJhdGlvbi12YWx1ZScpXG5cbiAgICB0aW1lID0gJCAnI2R1cmF0aW9uJ1xuICAgIGlmIHRpbWUubGVuZ3RoID4gMFxuICAgICAgdGltZS5ub1VpU2xpZGVyXG4gICAgICAgIHN0ZXA6IDUsXG4gICAgICAgIGNvbm5lY3Q6IFwibG93ZXJcIixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHJhbmdlOlxuICAgICAgICAgICdtaW4nOiBbMzBdLFxuICAgICAgICAgICdtYXgnOiBbMTgwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcblxuICAgICAgXG4gICAgICB0aW1lLkxpbmsoJ2xvd2VyJykudG8oQGR1cmF0aW9uX3ZhbHVlKVxuICAgICAgdGltZS5vbiAnY2hhbmdlJywgKGV2ZW50LCB1aSk9PlxuICAgICAgICAkKCdzdHJvbmcubWluLXRpbWUnKS50ZXh0KHVpKVxuXG4gICAgIyDQpNC+0YDQvNCw0YIg0LfQsNC90Y/RgtC40LlcbiAgICBAZm9ybWF0cyA9IEBzdGVwMi5maW5kICcubGVzc29ucy1mb3JtYXQnXG4gICAgQGZvcm1hdHMuZmluZCgnaW5wdXQnKS5vbiAnY2hhbmdlJywgQGNoZWNrRm9ybWF0XG4gICAgQGNoZWNrRm9ybWF0KClcblxuICAgICMg0JTQvtCx0LDQstC60LAg0L/RgNC10LTQvNC10YLQsFxuICAgIEBhZGRfc3ViamVjdCA9IEBzdGVwMi5maW5kICcuYWRkLXN1YmplY3QnXG4gICAgQHN1YmpfY291bnQgPSAwXG4gICAgQHN1YmplY3Rfc291cmNlID0gJChcIiNzdWJqLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zb3VyY2VcbiAgICBAYWRkX3N1YmplY3Qub24gJ2NsaWNrJywgQG5ld1N1YmplY3RcbiAgICBAYWRkX3N1YmplY3QudHJpZ2dlciAnY2xpY2snXG5cbiAgICAjINCf0L7QtNGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9ICQoXCIjc3Viai1zZWN0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlXG5cbiAgICAj0KPQtNCw0LvQtdC90LjQtSDQv9GA0LXQtNC80LXRgtCwXG4gICAgQHJlbW92ZV9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5yZW1vdmUtc3ViamVjdCdcbiAgICBAcmVtb3ZlX3N1YmplY3Qub24gJ2NsaWNrJywgQHJlbW92ZVN1YmplY3RcblxuICAgIEBzdGVwMi5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMlN1Ym1pdFxuICAgIEBzdGVwMi5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAyQmFja1xuXG5cbiAgICAjINCo0LDQsyAzXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMy5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQsNC00YDQtdGB0LBcbiAgICBAYWRkX2FkZHJlc3MgPSBAc3RlcDMuZmluZCAnLmFkZC1hZGRyZXNzJ1xuICAgIEBhZGRyZXNzX2NvdW50ID0gMFxuICAgIEBhZGRyZXNzX3NvdXJjZSA9ICQoXCIjYWRkcmVzcy10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAYWRkcmVzc19zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQGFkZHJlc3Nfc291cmNlXG4gICAgQGFkZF9hZGRyZXNzLm9uICdjbGljaycsIEBuZXdBZGRyZXNzXG4gICAgQGFkZF9hZGRyZXNzLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0LDQtNGA0LXRgdCwXG4gICAgQHJlbW92ZV9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5yZW1vdmUtYWRkcmVzcydcbiAgICBAcmVtb3ZlX2FkZHJlc3Mub24gJ2NsaWNrJywgQHJlbW92ZUFkZHJlc3NcblxuICAgIEBzdGVwMy5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwM1N1Ym1pdFxuICAgIEBzdGVwMy5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAzQmFja1xuXG5cbiAgICAjINCo0LDQsyA0XG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwNC5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQvtCx0YDQsNC30L7QstCw0L3QuNGPXG4gICAgQGFkZF9lZHVjYXRpb24gPSBAc3RlcDQuZmluZCAnLmFkZC1lZHVjYXRpb24nXG4gICAgQGVkdWNhdGlvbl9jb3VudCA9IDBcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9ICQoXCIjZWR1Y2F0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBlZHVjYXRpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBlZHVjYXRpb25fc291cmNlXG4gICAgQGFkZF9lZHVjYXRpb24ub24gJ2NsaWNrJywgQG5ld0VkdWNhdGlvblxuICAgIEBhZGRfZWR1Y2F0aW9uLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5yZW1vdmUtZWR1Y2F0aW9uJ1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uLm9uICdjbGljaycsIEByZW1vdmVFZHVjYXRpb25cblxuICAgIEBzZXJ0aWZpY2F0X3NvdXJjZSA9ICQoXCIjc2VydGlmaWNhdC10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc2VydGlmaWNhdF9zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQHNlcnRpZmljYXRfc291cmNlXG4gICAgQGNlcnRfbGlzdCA9IEBzdGVwNC5maW5kICcuc2VydGlmaWNhdC1saXN0J1xuICAgIEBjZXJpZmljYXRlc19jb3VudCA9IDBcbiAgICBAc2VydGlmaWNhdHMgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXRzJ1xuICAgIEBzZXJ0aWZpY2F0cy5maWxlYXBpXG4gICAgICB1cmw6ICdcInNleD1tYWxlJm1vbnRoPTAmeWVhcj0yMDAwJnN0YXR1cz0wJmV4cGVyaWVuY2U9MCZleHBlcmllbmNlPTMwJmFkZGl0aW9uPW9uJnN1YmplY3Q9MyZzZWN0aW9uPTImc3RyZWV0JTVCJTVEPSZob3VzZSU1QiU1RD0mY29ycHVzJTVCJTVEPSZidWlsZGluZyU1QiU1RD0mY29tbWVudHM9JmNpdHklNUIlNUQ9JnVuaXZlcmNpdHklNUIlNUQ9JmdyYWQteWVhciU1QiU1RD0mZmFjJTVCJTVEPSZjb21tZW50cyU1QiU1RD0maG9tZT0mb2ZmaWNlPSZvbmxpbmU9Jm1lc3NhZ2U9JmFkZGl0aW9uYWwtaW5mb3JtYXRpb249XCInXG4gICAgICBkdXBsaWNhdGU6IGZhbHNlLFxuICAgICAgYWNjZXB0OiAnaW1hZ2UvKicsXG4gICAgICBtYXhTaXplOiA1ICogRmlsZUFQSS5NQixcbiAgICAgIGF1dG9VcGxvYWQ6IGZhbHNlLFxuICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICBsaXN0OiAnLnNlcnRpZmljYXQtbGlzdCcsXG4gICAgICBlbGVtZW50czpcbiAgICAgICAgZmlsZTogXG4gICAgICAgICAgdHBsOiAnLmpzLWZpbGUtdHBsJ1xuICAgICAgICAgIHByZXZpZXc6XG4gICAgICAgICAgICBlbDogJy5wcmV2aWV3X19waWMnXG4gICAgICAgICAgICB3aWR0aDogODBcbiAgICAgICAgICAgIGhlaWdodDogODBcbiAgICAgICAgY3RybDpcbiAgICAgICAgICB1cGxvYWQ6ICcuYWRkLXNlcnRpZmljYXQgbGFiZWwnXG4gICAgICBvblNlbGVjdDogKGV2dCwgdWkpPT5cbiAgICAgICAgQGNlcmlmaWNhdGVzX2NvdW50KytcbiAgICAgICAgIyByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgICMgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICAjICAgQGNlcnRfbGlzdC5hcHBlbmQgQHNlcnRpZmljYXRfc291cmNlXG4gICAgICAgICMgICAgIFwiaWRcIiA6IEBjZXJpZmljYXRlc19jb3VudFxuICAgICAgICAjICAgICBcInNyY1wiIDogZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICAjIHJlYWRlci5yZWFkQXNEYXRhVVJMIHVpLmZpbGVzWzBdXG5cbiAgICBAc3RlcDQuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDRTdWJtaXRcbiAgICBAc3RlcDQuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwNEJhY2tcblxuICBhZGRIaW50OiA9PlxuICAgIGxvY2F0aW9ucyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgICBkYXR1bVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLm9iai53aGl0ZXNwYWNlKFwiY2l0eVwiKSxcbiAgICAgIHF1ZXJ5VG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxcbiAgICAgIHByZWZldGNoOiBcImh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzIwODEwNzcyL2NpdHlzLmpzb25cIlxuICAgIFxuICAgIGxvY2F0aW9ucy5pbml0aWFsaXplKClcblxuICAgICQoJy5jaXR5JykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAnbG9jYXRpb25zJ1xuICAgICAgZGlzcGxheUtleTogJ2NpdHknLFxuICAgICAgc291cmNlOiBsb2NhdGlvbnMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD48Yj57e3JlZ2lvbn19PC9iPnt7Y2l0eX19PC9wPicpXG5cbiAgICB1bml2ZXJjaXR5cyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgICBkYXR1bVRva2VuaXplcjogKGRhdGEpLT5cbiAgICAgICAgcmV0dXJuIEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlKGRhdGEudGl0bGUpXG4gICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICBsb2NhbDogW3tcInRpdGxlXCI6XCJBbmRvcnJhXCJ9LHtcInRpdGxlXCI6XCJVbml0ZWRBcmFiRW1pcmF0ZXNcIn0se1widGl0bGVcIjpcIkFmZ2hhbmlzdGFuXCJ9LHtcInRpdGxlXCI6XCJBbnRpZ3VhYW5kQmFyYnVkYVwifSx7XCJ0aXRsZVwiOlwiQW5ndWlsbGFcIn0se1widGl0bGVcIjpcIkFsYmFuaWFcIn0se1widGl0bGVcIjpcIkFybWVuaWFcIn0se1widGl0bGVcIjpcIkFuZ29sYVwifSx7XCJ0aXRsZVwiOlwiQW50YXJjdGljYVwifV1cblxuICAgIHVuaXZlcmNpdHlzLmluaXRpYWxpemUoKVxuXG4gICAgJCgnLnVuaXZlcmNpdHk6bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICAkKCcuZmFjdWx0eTpub3QoLnR0LWlucHV0KScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ3VuaXZlcmNpdHlzJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuICAgICQoJy5zcGVjaWFsaXphdGlvbjpub3QoLnR0LWlucHV0KScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ3VuaXZlcmNpdHlzJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuXG4gICMg0J/QvtC70YPRh9C10L3QuNC1INGB0L/QuNGB0LrQsCDRgNCw0LfQtNC10LvQvtCyINC00LvRjyDQv9GA0LXQtNC80LXRgtCwXG4gIGdldFNlY3Rpb25zOiAoaWQpPT5cbiAgICBjaGFwdGVycyA9IFsn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQuSDQsNC90LDQu9C40LcnK2lkLCfRgtC10L7RgNC40Y8g0LLQtdGA0L7Rj9GC0L3QvtGB0YLQtdC5JytpZCwn0YLQtdC+0YDQtdGC0LjRh9C10YHQutCw0Y8g0LzQtdGF0LDQvdC40LrQsCcraWQsJ9GB0L7Qv9GA0L7QvNCw0YInK2lkLCfQvNCw0YLQtdC80LDRgtC4INC70L7Qs9C40LrQsCcraWQsJ9GN0LrQvtC90L7QvNC10YLRgNC40LrQsCcraWQsJ9Cy0YvRgdGI0LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9C70LjQvdC10LnQvdCw0Y8g0LDQu9Cz0LXQsdGA0LAnK2lkLCfQtNC40YTRhNC10YDQtdC90YbQuNCw0LvRjNC90LDRjyDQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQsNC90LDQu9C40YLQuNGH0LXRgdC60LDRjyDQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQsNGPINGE0LjQt9C40LrQsCcraWQsJ9C00LjRhNGE0LXRgNC10L3RhtC40LDQu9GM0L3Ri9C1INGD0YDQsNCy0L3QtdC90LjRjycraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutCw0Y8g0YHRgtCw0YLQuNGB0YLQuNC60LAnK2lkLCfQu9C40L3QtdC50L3QsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C00LjRgdC60YDQtdGC0L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLQvtC/0L7Qu9C+0LPQuNGPJytpZCwn0YTRg9C90LrRhtC40L7QvdCw0LvRjNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfQuNC90YLQtdCz0YDQsNC70YzQvdGL0LUg0YPRgNCw0LLQvdC10L3QuNGPJytpZCwn0YLQtdC+0YDQuNGPINGH0LjRgdC10LsnK2lkLCfQstC10LrRgtC+0YDQvdGL0Lkg0LDQvdCw0LvQuNC3JytpZCwn0KLQpNCa0J8nK2lkLCfRgtC10L3Qt9C+0YDQvdGL0Lkg0LDQvdCw0LvQuNC3JytpZCwn0YTQuNC90LDQvdGB0L7QstCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRg9GA0LDQstC90LXQvdC40Y8g0LIg0YfQsNGB0YLQvdGL0YUg0L/RgNC+0LjQt9Cy0L7QtNC90YvRhScraWQsJ9Cw0LrRgtGD0LDRgNC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0LXQvtGA0LjRjyDQs9GA0LDRhNC+0LInK2lkLCfQutC+0LzQsdC40L3QsNGC0L7RgNC40LrQsCcraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutC40LUg0LzQvtC00LXQu9C4JytpZCwn0L/RgNC40LrQu9Cw0LTQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtGA0LjQs9C+0L3QvtC8LdC40Y8nK2lkLCfRg9GA0LDQstC90LXQvdC40Y8g0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60L7QuSDRhNC40LfQuNC60LgnK2lkLCfRh9C40YHQu9C10L3QvdGL0LUg0LzQtdGC0L7QtNGLJytpZCwn0YLQtdC+0YDQuNGPINC/0YDQuNCx0LvQuNC20LXQvdC40LknK2lkLCfRgtC10L7RgNC40Y8g0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCcraWQsJy7RiNC60L7Qu9GM0L3Ri9C5INC60YPRgNGBJytpZCwn0L3QsCDQsNC90LPQu9C40LnRgdC60L7QvCDRj9C30YvQutC1JytpZCwn0LDQu9Cz0LXQsdGA0LAg0LvQvtCz0LjQutC4JytpZCwn0LLRi9GH0LjRgdC70LjQvNGL0LUg0YTRg9C90LrRhtC40LgnK2lkLCfRgtC10L7RgNC40Y8g0LjQs9GAJytpZCwn0LLQsNGA0LjQsNGG0LjQvtC90L3QvtC1INC40YHRh9C40YHQu9C10L3QuNC1JytpZCwn0L7Qv9GC0LjQvNCw0LvRjNC90L7QtSDRg9C/0YDQsNCy0LvQtdC90LjQtScraWQsJ9C80LXRgtC+0LTRiyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4JytpZCwn0LvQuNC90LXQudC90L7QtSDQv9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtScraWQsJ9Cw0LvQs9C10LHRgNCwJytpZCwn0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LzQtdGC0L7QtNGLINC+0L/RgtC40LzQsNC70YzQvdGL0YUg0YDQtdGI0LXQvdC40LknK2lkXVxuICAgIHNlY3Rpb25zID0gbmV3IEFycmF5XG4gICAgc2VjdGlvbiA9IG5ldyBPYmplY3RcbiAgICBpZCA9IDBcbiAgICBmb3IgY2hhcHRlciBpbiBjaGFwdGVyc1xuICAgICAgc2VjdGlvbiA9IHtcbiAgICAgICAgaWQgOiBpZFxuICAgICAgICB0aXRsZSA6IGNoYXB0ZXJcbiAgICAgIH1cbiAgICAgIHNlY3Rpb25zLnB1c2ggc2VjdGlvblxuICAgICAgaWQrK1xuICAgIHJldHVybiBzZWN0aW9uc1xuXG4gICMg0J/QvtC70YPRh9C10L3QuNC1INC00L7Qv9C+0LvQvdC10L3QuNC5INC00LvRjyDRgNCw0LfQtNC10LvQsFxuICBnZXRTdWJTZWN0aW9uczogKGlkKT0+XG4gICAgY2hhcHRlcnMgPSBbJ9Ce0JPQrSAo0JPQmNCQKScraWQsJ9Cf0L7QtNCz0L7RgtC+0LLQutCwINC6INC+0LvQuNC80L/QuNCw0LTQsNC8JytpZCwn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0Y3QutC30LDQvNC10L3QsNC8JytpZF1cbiAgICBzZWN0aW9ucyA9IG5ldyBBcnJheVxuICAgIHNlY3Rpb24gPSBuZXcgT2JqZWN0XG4gICAgaWQgPSAwXG4gICAgZm9yIGNoYXB0ZXIgaW4gY2hhcHRlcnNcbiAgICAgIHNlY3Rpb24gPSB7XG4gICAgICAgIGlkIDogaWRcbiAgICAgICAgdGl0bGUgOiBjaGFwdGVyXG4gICAgICB9XG4gICAgICBzZWN0aW9ucy5wdXNoIHNlY3Rpb25cbiAgICAgIGlkKytcbiAgICByZXR1cm4gc2VjdGlvbnNcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICBuZXdFZHVjYXRpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX2VkdWNhdGlvbi5wYXJlbnQoKS5iZWZvcmUgQGVkdWNhdGlvbl9zb3VyY2UoeydpbmRleCcgOiBAZWR1Y2F0aW9uX2NvdW50fSlcbiAgICBAZWR1Y2F0aW9uX2NvdW50KytcbiAgICBAc3RlcDQuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBpZiBAZWR1Y2F0aW9uX2NvdW50PjFcbiAgICAgIEByZW1vdmVfZWR1Y2F0aW9uLnNob3coKVxuXG4gICAgIyDQkNCy0YLQvtC30LDQv9C+0LvQvdC10L3QuNC1INC00LvRjyDQstGL0LHQvtGA0LAg0LPQvtGA0L7QtNCwINC4INCy0YPQt9CwXG4gICAgQGFkZEhpbnQoKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICByZW1vdmVFZHVjYXRpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAZWR1Y2F0aW9uX2NvdW50LS1cbiAgICAkKCcuZWR1Y2F0aW9uLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQGVkdWNhdGlvbl9jb3VudDwyXG4gICAgICBAcmVtb3ZlX2VkdWNhdGlvbi5oaWRlKClcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgNCDQuiA1INGI0LDQs9GDXG4gIHN0ZXA0U3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXA0LmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDQuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICAgIyDQntGC0L/RgNCw0LLQutCwINC90LAg0YHQtdGA0LLQtdGAXG4gICAgY29uc29sZS5sb2cgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkKCcucGFuZWwgOmlucHV0Jykuc2VyaWFsaXplQXJyYXkoKSkpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDQg0LogMyDRiNCw0LPRg1xuICBzdGVwNEJhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDMg0LogNCDRiNCw0LPRg1xuICBzdGVwM1N1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMy5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAzLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDMg0LogMiDRiNCw0LPRg1xuICBzdGVwM0JhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGL0Lkg0LDQtNGA0LXRgVxuICBuZXdBZGRyZXNzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9hZGRyZXNzLnBhcmVudCgpLmJlZm9yZSBAYWRkcmVzc19zb3VyY2UoeydpbmRleCcgOiBAYWRkcmVzc19jb3VudH0pXG4gICAgQGFkZHJlc3NfY291bnQrK1xuICAgIEBzdGVwMy5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGlmIEBhZGRyZXNzX2NvdW50PjFcbiAgICAgIEByZW1vdmVfYWRkcmVzcy5zaG93KClcblxuICAjINCj0LTQsNC70LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgcmVtb3ZlQWRkcmVzczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRyZXNzX2NvdW50LS1cbiAgICAkKCcuYWRyZXNzLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQGFkZHJlc3NfY291bnQ8MlxuICAgICAgQHJlbW92ZV9hZGRyZXNzLmhpZGUoKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAyINC6IDMg0YjQsNCz0YNcbiAgc3RlcDJTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDIuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMi5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAyINC6IDEg0YjQsNCz0YNcbiAgc3RlcDJCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG5cbiAgIyDQkdC70L7QutC40YDQvtCy0LDRgtGMINGG0LXQvdGLINC90LXQtNC+0L/Rg9GB0YLQuNC80YvRhSDRhNC+0YDQvNCw0YLQvtCyINC30LDQvdGP0YLQuNC5XG4gIGNoZWNrRm9ybWF0OiA9PlxuICAgIGlucHV0cyA9IEBmb3JtYXRzLmZpbmQgJ2lucHV0J1xuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGVsZW1lbnRzID0gQHN0ZXAyLmZpbmQoJ2lucHV0LicraW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLWZpZWxkJykpXG4gICAgICBmb3IgZWxlbWVudCBpbiBlbGVtZW50c1xuICAgICAgICBwcmljZSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnLnN1YmRldmlzaW9uJylcbiAgICAgICAgaWYgaW5wdXQuY2hlY2tlZFxuICAgICAgICAgIHByaWNlLnJlbW92ZUNsYXNzKCdoaWRlJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwcmljZS5hZGRDbGFzcygnaGlkZScpXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd1aS1zdGF0ZS1lcnJvcicpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKVxuXG4gICMg0JTQvtCx0LDQstC40YLRjCDRgNCw0LfQtNC10LvRiyDQv9GA0LXQtNC80LXRgtCwXG4gIHN1YmplY3RTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgc2VsZWN0ID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgc2VsZWN0LnJlbW92ZUNsYXNzICd1bmNoYW5nZWQnXG4gICAgaWQgPSBzZWxlY3QudmFsKClcblxuICAgIGxpbmUgPSBzZWxlY3QucGFyZW50cygnLmxpbmUnKVxuICAgIFxuICAgIHN1YnNlY3Rpb25zID0gQGdldFN1YlNlY3Rpb25zKGlkKVxuICAgIGhhbGZfbGVuZ3RoID0gTWF0aC5jZWlsKHN1YnNlY3Rpb25zLmxlbmd0aCAvIDIpXG4gICAgbGVmdFNpZGUgPSBzdWJzZWN0aW9ucy5zcGxpY2UoMCxoYWxmX2xlbmd0aClcblxuICAgIHNlY3Rpb25zID0gQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2Uoe1xuICAgICAgaW5kZXggOiBAc3Vial9jb3VudFxuICAgICAgc2VjdGlvbiA6IEBnZXRTZWN0aW9ucyhpZClcbiAgICAgIGNvbHVtbjEgOiBsZWZ0U2lkZVxuICAgICAgY29sdW1uMiA6IHN1YnNlY3Rpb25zXG4gICAgICB9KVxuXG4gICAgbmV4dCA9IGxpbmUubmV4dCgpXG4gICAgaWYgbmV4dC5oYXNDbGFzcygnc2VjdGlvbicpXG4gICAgICBuZXh0LnJlcGxhY2VXaXRoIHNlY3Rpb25zXG4gICAgZWxzZVxuICAgICAgbGluZS5hZnRlciBzZWN0aW9uc1xuICAgIFxuICAgIEBzdGVwMi5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGZvciBlbGVtZW50IGluIEBzdGVwMi5maW5kKCcuZHJvcGRvd24tY29udGFpbmVyLXdpZGdldCcpXG4gICAgICBuZXcgRHJvcGRvd25XaWRnZXRDb250cm9sbGVyKCQoZWxlbWVudCkpXG5cblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQv9GA0LXQtNC80LXRglxuICBuZXdTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9zdWJqZWN0LnBhcmVudCgpLmJlZm9yZSBAc3ViamVjdF9zb3VyY2UoeydpbmRleCcgOiBAc3Vial9jb3VudH0pXG4gICAgQHN1YmpfY291bnQrK1xuICAgIFxuICAgIHdyYXBwZXIgPSBAYWRkX3N1YmplY3QucGFyZW50KCkucHJldigpXG4gICAgd3JhcHBlci5maW5kKCdzZWxlY3QnKS5vbiAnY2hhbmdlJywgQHN1YmplY3RTZWxlY3RlZFxuXG4gICAgQHN0ZXAyLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgQHN0ZXAyLmZpbmQoJy5taW4tdGltZScpLnRleHQgQGR1cmF0aW9uX3ZhbHVlLnZhbCgpXG4gICAgQGNoZWNrRm9ybWF0KClcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuICAgIFxuICAgIGlmIEBzdWJqX2NvdW50PjFcbiAgICAgIEByZW1vdmVfc3ViamVjdC5zaG93KClcblxuICAjINCj0LTQsNC70LjRgtGMINC/0YDQtdC00LzQtdGCXG4gIHJlbW92ZVN1YmplY3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3Vial9jb3VudC0tXG4gICAgJCgnLnN1Ymotd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAc3Vial9jb3VudDwyXG4gICAgICBAcmVtb3ZlX3N1YmplY3QuaGlkZSgpXG5cbiAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LHQu9C+0LrQvtCyINC90LAg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgdmFsaWRhdGU6IChpbnB1dCk9PlxuXG4gICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlICdkYXRhLWg1LWVycm9yaWQnXG4gICAgICBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1oNS1lcnJvcmlkJylcblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKVxuICAgICAgaWYgaW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQgJ3VpLXN0YXRlLWVycm9yJ1xuXG4gICAgaWYgaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zICd1aS1zdGF0ZS1lcnJvcidcbiAgICAgIGlmIGVycm9yXG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBlbHNlXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0LrQviDQstGC0L7RgNC+0LzRgyDRiNCw0LPRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIHN0ZXAxU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAxLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDEuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuXG4gICMg0KjQsNCzIDFcbiAgIyDQkNCy0LDRgtCw0YBcbiAgZHJvcGVkOiAoZXZlbnQpLT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgRmlsZUFQSS5nZXREcm9wRmlsZXMgZXZlbnQsIChmaWxlcyktPlxuXG4gICMg0L/QvtC00LLQtdC70Lgg0LrRg9GA0YHQvtGAINC6INCx0LvQvtC60YMg0LTRgNC+0L/QsCDQsNCy0LDRgtCw0YDQutC4XG4gIG92ZXI6IChvdmVyKS0+XG5cbiAgIyDQsdGA0L7RgdC40LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGRyb3A6IChmaWxlcyk9PlxuICAgIGNvbnNvbGUubG9nICBmaWxlc1xuICAgIGlmIGZpbGVzLmxlbmd0aFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgXG4gICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcbiAgICAgIFxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAjINCj0LTQsNC70LjQu9C4INCw0LLQsNGC0YDQsNC60YNcbiAgcmVtb3ZlQXZhdGFyOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG5cbiAgIyDQktGL0LHRgNCw0LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGF2YXRhclNlbGVjdGVkOiAoZXZlbnQpPT5cbiAgICBmaWxlcyA9IEZpbGVBUEkuZ2V0RmlsZXMoZXZlbnQpXG5cbiAgICBleHQgPSBmaWxlc1swXVsnbmFtZSddLnN1YnN0cmluZyhmaWxlc1swXVsnbmFtZSddLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoZmlsZXNbMF0gJiYgKGZpbGVzWzBdLnNpemUgPD0gRmlsZUFQSS5NQikgJiYgKGV4dCA9PSBcImdpZlwiIHx8IGV4dCA9PSBcInBuZ1wiIHx8IGV4dCA9PSBcImpwZWdcIiB8fCBleHQgPT0gXCJqcGdcIikpXG4gICAgICAgIFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBcbiAgICAgICAgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICBhdmF0YXIgPSBkb2N1bWVudC5pbXBvcnROb2RlIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LCB0cnVlXG4gICAgICAgIHByZXYgPSBAZmlsZVNlbGVjdG9yLnByZXYoKVxuICAgICAgICBpZiBwcmV2Lmhhc0NsYXNzKCdjdXJyZW50LWF2YXRhcicpXG4gICAgICAgICAgcHJldi5yZW1vdmUoKVxuICAgICAgICBAZmlsZVNlbGVjdG9yLmJlZm9yZSBhdmF0YXJcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkuZmluZCgnLmNsb3NlJykub24gJ2NsaWNrJywgQHJlbW92ZUF2YXRhclxuXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCBmaWxlc1swXVxuXG4gICAgZWxzZVxuICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICAgIEBmaWxlLnJlcGxhY2VXaXRoIEBmaWxlLnZhbCgnJykuY2xvbmUodHJ1ZSlcbiAgICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0J/RgNC+0LLQtdGA0Y/QtdC8INC80L7QttC10YIg0LvQuCDRgdGD0YnQtdGB0YLQstC+0LLQsNGC0Ywg0YPQutCw0LfQsNC90L3QsNGPINC00LDRgtCwLCDQvdCw0L/RgNC40LzQtdGAIDMxINGE0LXQstGA0LDQu9GPINC4INC40YHQv9GA0LDQstC70Y/QtdC8INCyINGB0LvRg9GH0LDQtSDQvtGI0LjQsdC60LhcbiAgY2hlY2tEYXRlOiAoZXZlbnQpPT5cbiAgICBkYXkgPSBwYXJzZUludCBAZGF5LnZhbCgpLnRyaW0oKSwgMTBcbiAgICBcbiAgICBpZiBkYXk8MSB8fCBpc05hTihkYXkpXG4gICAgICBAZGF5LnZhbCAxXG4gICAgICByZXR1cm5cblxuICAgIGRheXMgPSBwYXJzZUludCBtb21lbnQoQHllYXIudmFsKCkrXCItXCIrKHBhcnNlSW50KEBtb250aC52YWwoKSwxMCkrMSksIFwiWVlZWS1NTVwiKS5kYXlzSW5Nb250aCgpLCAxMFxuICAgIGlmIGRheT5kYXlzXG4gICAgICBAZGF5LnZhbCBkYXlzXG4gICAgcmV0dXJuXG5cbiAgICBpZiBkYXk+MzFcbiAgICAgIEBkYXkudmFsIDMxXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIG5ldyBQZXJzb25hbERhdGFBbGwoKVxuXG5cbiJdfQ==