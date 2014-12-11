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
    window.FileAPI.debug = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2REFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsNkNBQUEsQ0FBQTtBQUFBLFFBQUEsaUJBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBQSxDQUFFLHFCQUFGLENBQVYsQ0FBQTtBQUNBLElBQUEsSUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsQ0FBckI7QUFDRSxZQUFVLElBQUEsS0FBQSxDQUFNLGtCQUFOLENBQVYsQ0FERjtLQURBO0FBQUEsSUFJQSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FKVCxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FMVixDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLGdCQUFiLENBTlgsQ0FBQTtBQUFBLElBUUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBUlQsQ0FBQTtBQUFBLElBU0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBVFQsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBVlQsQ0FBQTtBQUFBLElBV0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBWFQsQ0FBQTtBQUFBLElBWUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBWlQsQ0FBQTtBQUFBLElBZUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxRQUFGLENBZlQsQ0FBQTtBQWdCQSxJQUFBLElBQUcsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBbkI7QUFDRSxNQUFBLE1BQU0sQ0FBQyxNQUFQLENBQ0U7QUFBQSxRQUFBLHdCQUFBLEVBQTBCLEVBQTFCO09BREYsQ0FBQSxDQURGO0tBaEJBO0FBQUEsSUFzQkEsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLENBQUEsQ0F0QkEsQ0FBQTtBQUFBLElBd0JBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBZixHQUF1QixJQXhCdkIsQ0FBQTtBQUFBLElBMkJBLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBZixHQUF1QixJQTNCdkIsQ0FBQTtBQUFBLElBNkJBLElBQUMsQ0FBQSxJQUFELEdBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksc0JBQVosQ0E3QlIsQ0FBQTtBQUFBLElBOEJBLElBQUMsQ0FBQSxjQUFELEdBQWtCLFFBQVEsQ0FBQyxjQUFULENBQXdCLHlCQUF4QixDQTlCbEIsQ0FBQTtBQUFBLElBK0JBLElBQUMsQ0FBQSxZQUFELEdBQWdCLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGdCQUFaLENBL0JoQixDQUFBO0FBQUEsSUFpQ0EsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWlCLElBQUMsQ0FBQSxJQUFLLENBQUEsQ0FBQSxDQUF2QixFQUEyQixRQUEzQixFQUFxQyxJQUFDLENBQUEsY0FBdEMsQ0FqQ0EsQ0FBQTtBQUFBLElBa0NBLElBQUMsQ0FBQSxZQUFZLENBQUMsR0FBZCxDQUFrQixJQUFDLENBQUEsSUFBbkIsRUFBeUIsSUFBQyxDQUFBLElBQTFCLENBbENBLENBQUE7QUFBQSxJQW1DQSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsTUFBM0IsRUFBbUMsSUFBQyxDQUFBLE1BQXBDLENBbkNBLENBQUE7QUFBQSxJQXNDQSxHQUFBLEdBQU0sQ0FBQSxDQUFFLGFBQUYsQ0F0Q04sQ0FBQTtBQXVDQSxJQUFBLElBQUcsR0FBRyxDQUFDLE1BQUosR0FBYSxDQUFoQjtBQUNFLE1BQUEsR0FBRyxDQUFDLFVBQUosQ0FDRTtBQUFBLFFBQUEsSUFBQSxFQUFNLENBQU47QUFBQSxRQUNBLE9BQUEsRUFBUyxPQURUO0FBQUEsUUFFQSxLQUFBLEVBQU8sQ0FGUDtBQUFBLFFBR0EsS0FBQSxFQUNFO0FBQUEsVUFBQSxLQUFBLEVBQU8sQ0FBQyxDQUFELENBQVA7QUFBQSxVQUNBLEtBQUEsRUFBTyxDQUFDLEVBQUQsQ0FEUDtTQUpGO0FBQUEsUUFNQSxNQUFBLEVBQVEsS0FBQSxDQUNOO0FBQUEsVUFBQSxRQUFBLEVBQVUsQ0FBVjtTQURNLENBTlI7T0FERixDQUFBLENBQUE7QUFBQSxNQVNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsT0FBVCxDQUFpQixDQUFDLEVBQWxCLENBQXFCLENBQUEsQ0FBRSxtQkFBRixDQUFyQixDQVRBLENBREY7S0F2Q0E7QUFBQSxJQW9EQSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGVBQVosQ0FwRFQsQ0FBQTtBQUFBLElBcURBLElBQUMsQ0FBQSxJQUFELEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksY0FBWixDQXJEVCxDQUFBO0FBQUEsSUFzREEsSUFBQyxDQUFBLEdBQUQsR0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxXQUFaLENBdERULENBQUE7QUFBQSxJQXVEQSxJQUFDLENBQUEsR0FBRyxDQUFDLEVBQUwsQ0FBVSxRQUFWLEVBQW9CLElBQUMsQ0FBQSxTQUFyQixDQXZEQSxDQUFBO0FBQUEsSUF3REEsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLENBQVUsUUFBVixFQUFvQixJQUFDLENBQUEsU0FBckIsQ0F4REEsQ0FBQTtBQUFBLElBeURBLElBQUMsQ0FBQSxJQUFJLENBQUMsRUFBTixDQUFVLFFBQVYsRUFBb0IsSUFBQyxDQUFBLFNBQXJCLENBekRBLENBQUE7QUFBQSxJQTREQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSx1QkFBWixDQUFvQyxDQUFDLEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELElBQUMsQ0FBQSxXQUFsRCxDQTVEQSxDQUFBO0FBQUEsSUFpRUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFQLENBQUEsQ0FqRUEsQ0FBQTtBQUFBLElBb0VBLElBQUMsQ0FBQSxjQUFELEdBQWtCLENBQUEsQ0FBRSxpQkFBRixDQXBFbEIsQ0FBQTtBQUFBLElBc0VBLElBQUEsR0FBTyxDQUFBLENBQUUsV0FBRixDQXRFUCxDQUFBO0FBdUVBLElBQUEsSUFBRyxJQUFJLENBQUMsTUFBTCxHQUFjLENBQWpCO0FBQ0UsTUFBQSxJQUFJLENBQUMsVUFBTCxDQUNFO0FBQUEsUUFBQSxJQUFBLEVBQU0sQ0FBTjtBQUFBLFFBQ0EsT0FBQSxFQUFTLE9BRFQ7QUFBQSxRQUVBLEtBQUEsRUFBTyxDQUZQO0FBQUEsUUFHQSxLQUFBLEVBQ0U7QUFBQSxVQUFBLEtBQUEsRUFBTyxDQUFDLEVBQUQsQ0FBUDtBQUFBLFVBQ0EsS0FBQSxFQUFPLENBQUMsR0FBRCxDQURQO1NBSkY7QUFBQSxRQU1BLE1BQUEsRUFBUSxLQUFBLENBQ047QUFBQSxVQUFBLFFBQUEsRUFBVSxDQUFWO1NBRE0sQ0FOUjtPQURGLENBQUEsQ0FBQTtBQUFBLE1BV0EsSUFBSSxDQUFDLElBQUwsQ0FBVSxPQUFWLENBQWtCLENBQUMsRUFBbkIsQ0FBc0IsSUFBQyxDQUFBLGNBQXZCLENBWEEsQ0FBQTtBQUFBLE1BWUEsSUFBSSxDQUFDLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLEtBQUQsRUFBUSxFQUFSLEdBQUE7aUJBQ2hCLENBQUEsQ0FBRSxpQkFBRixDQUFvQixDQUFDLElBQXJCLENBQTBCLEVBQTFCLEVBRGdCO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEIsQ0FaQSxDQURGO0tBdkVBO0FBQUEsSUF3RkEsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxpQkFBWixDQXhGWCxDQUFBO0FBQUEsSUF5RkEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsT0FBZCxDQUFzQixDQUFDLEVBQXZCLENBQTBCLFFBQTFCLEVBQW9DLElBQUMsQ0FBQSxXQUFyQyxDQXpGQSxDQUFBO0FBQUEsSUEwRkEsSUFBQyxDQUFBLFdBQUQsQ0FBQSxDQTFGQSxDQUFBO0FBQUEsSUE2RkEsSUFBQyxDQUFBLFdBQUQsR0FBZSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxjQUFaLENBN0ZmLENBQUE7QUFBQSxJQThGQSxJQUFDLENBQUEsVUFBRCxHQUFjLENBOUZkLENBQUE7QUFBQSxJQStGQSxJQUFDLENBQUEsY0FBRCxHQUFrQixDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxJQUFwQixDQUFBLENBL0ZsQixDQUFBO0FBQUEsSUFnR0EsSUFBQyxDQUFBLGNBQUQsR0FBa0IsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsSUFBQyxDQUFBLGNBQXBCLENBaEdsQixDQUFBO0FBQUEsSUFpR0EsSUFBQyxDQUFBLFdBQVcsQ0FBQyxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLElBQUMsQ0FBQSxVQUExQixDQWpHQSxDQUFBO0FBQUEsSUFrR0EsSUFBQyxDQUFBLFdBQVcsQ0FBQyxPQUFiLENBQXFCLE9BQXJCLENBbEdBLENBQUE7QUFBQSxJQXFHQSxJQUFDLENBQUEsc0JBQUQsR0FBMEIsQ0FBQSxDQUFFLHdCQUFGLENBQTJCLENBQUMsSUFBNUIsQ0FBQSxDQXJHMUIsQ0FBQTtBQUFBLElBc0dBLElBQUMsQ0FBQSxzQkFBRCxHQUEwQixVQUFVLENBQUMsT0FBWCxDQUFtQixJQUFDLENBQUEsc0JBQXBCLENBdEcxQixDQUFBO0FBQUEsSUF5R0EsSUFBQyxDQUFBLGNBQUQsR0FBa0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksaUJBQVosQ0F6R2xCLENBQUE7QUFBQSxJQTBHQSxJQUFDLENBQUEsY0FBYyxDQUFDLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLElBQUMsQ0FBQSxhQUE3QixDQTFHQSxDQUFBO0FBQUEsSUE0R0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksdUJBQVosQ0FBb0MsQ0FBQyxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxJQUFDLENBQUEsV0FBbEQsQ0E1R0EsQ0FBQTtBQUFBLElBNkdBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFlBQVosQ0FBeUIsQ0FBQyxFQUExQixDQUE2QixPQUE3QixFQUFzQyxJQUFDLENBQUEsU0FBdkMsQ0E3R0EsQ0FBQTtBQUFBLElBa0hBLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBUCxDQUFBLENBbEhBLENBQUE7QUFBQSxJQXFIQSxJQUFDLENBQUEsV0FBRCxHQUFlLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGNBQVosQ0FySGYsQ0FBQTtBQUFBLElBc0hBLElBQUMsQ0FBQSxhQUFELEdBQWlCLENBdEhqQixDQUFBO0FBQUEsSUF1SEEsSUFBQyxDQUFBLGNBQUQsR0FBa0IsQ0FBQSxDQUFFLG1CQUFGLENBQXNCLENBQUMsSUFBdkIsQ0FBQSxDQXZIbEIsQ0FBQTtBQUFBLElBd0hBLElBQUMsQ0FBQSxjQUFELEdBQWtCLFVBQVUsQ0FBQyxPQUFYLENBQW1CLElBQUMsQ0FBQSxjQUFwQixDQXhIbEIsQ0FBQTtBQUFBLElBeUhBLElBQUMsQ0FBQSxXQUFXLENBQUMsRUFBYixDQUFnQixPQUFoQixFQUF5QixJQUFDLENBQUEsVUFBMUIsQ0F6SEEsQ0FBQTtBQUFBLElBMEhBLElBQUMsQ0FBQSxXQUFXLENBQUMsT0FBYixDQUFxQixPQUFyQixDQTFIQSxDQUFBO0FBQUEsSUE2SEEsSUFBQyxDQUFBLGNBQUQsR0FBa0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksaUJBQVosQ0E3SGxCLENBQUE7QUFBQSxJQThIQSxJQUFDLENBQUEsY0FBYyxDQUFDLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLElBQUMsQ0FBQSxhQUE3QixDQTlIQSxDQUFBO0FBQUEsSUFnSUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksdUJBQVosQ0FBb0MsQ0FBQyxFQUFyQyxDQUF3QyxPQUF4QyxFQUFpRCxJQUFDLENBQUEsV0FBbEQsQ0FoSUEsQ0FBQTtBQUFBLElBaUlBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLFlBQVosQ0FBeUIsQ0FBQyxFQUExQixDQUE2QixPQUE3QixFQUFzQyxJQUFDLENBQUEsU0FBdkMsQ0FqSUEsQ0FBQTtBQUFBLElBc0lBLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBUCxDQUFBLENBdElBLENBQUE7QUFBQSxJQXlJQSxJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxnQkFBWixDQXpJakIsQ0FBQTtBQUFBLElBMElBLElBQUMsQ0FBQSxlQUFELEdBQW1CLENBMUluQixDQUFBO0FBQUEsSUEySUEsSUFBQyxDQUFBLGdCQUFELEdBQW9CLENBQUEsQ0FBRSxxQkFBRixDQUF3QixDQUFDLElBQXpCLENBQUEsQ0EzSXBCLENBQUE7QUFBQSxJQTRJQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsSUFBQyxDQUFBLGdCQUFwQixDQTVJcEIsQ0FBQTtBQUFBLElBNklBLElBQUMsQ0FBQSxhQUFhLENBQUMsRUFBZixDQUFrQixPQUFsQixFQUEyQixJQUFDLENBQUEsWUFBNUIsQ0E3SUEsQ0FBQTtBQUFBLElBOElBLElBQUMsQ0FBQSxhQUFhLENBQUMsT0FBZixDQUF1QixPQUF2QixDQTlJQSxDQUFBO0FBQUEsSUFpSkEsSUFBQyxDQUFBLGdCQUFELEdBQW9CLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLG1CQUFaLENBakpwQixDQUFBO0FBQUEsSUFrSkEsSUFBQyxDQUFBLGdCQUFnQixDQUFDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLElBQUMsQ0FBQSxlQUEvQixDQWxKQSxDQUFBO0FBQUEsSUFvSkEsSUFBQyxDQUFBLGlCQUFELEdBQXFCLENBQUEsQ0FBRSxzQkFBRixDQUF5QixDQUFDLElBQTFCLENBQUEsQ0FwSnJCLENBQUE7QUFBQSxJQXFKQSxJQUFDLENBQUEsaUJBQUQsR0FBcUIsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsSUFBQyxDQUFBLGlCQUFwQixDQXJKckIsQ0FBQTtBQUFBLElBc0pBLElBQUMsQ0FBQSxTQUFELEdBQWEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksa0JBQVosQ0F0SmIsQ0FBQTtBQUFBLElBdUpBLElBQUMsQ0FBQSxpQkFBRCxHQUFxQixDQXZKckIsQ0FBQTtBQUFBLElBd0pBLElBQUMsQ0FBQSxXQUFELEdBQWUsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksY0FBWixDQXhKZixDQUFBO0FBQUEsSUF5SkEsSUFBQyxDQUFBLFdBQVcsQ0FBQyxPQUFiLENBQ0U7QUFBQSxNQUFBLEdBQUEsRUFBSyxzU0FBTDtBQUFBLE1BQ0EsU0FBQSxFQUFXLEtBRFg7QUFBQSxNQUVBLE1BQUEsRUFBUSxTQUZSO0FBQUEsTUFHQSxPQUFBLEVBQVMsQ0FBQSxHQUFJLE9BQU8sQ0FBQyxFQUhyQjtBQUFBLE1BSUEsVUFBQSxFQUFZLEtBSlo7QUFBQSxNQUtBLFFBQUEsRUFBVSxJQUxWO0FBQUEsTUFNQSxJQUFBLEVBQU0sa0JBTk47QUFBQSxNQU9BLFFBQUEsRUFDRTtBQUFBLFFBQUEsSUFBQSxFQUNFO0FBQUEsVUFBQSxHQUFBLEVBQUssY0FBTDtBQUFBLFVBQ0EsT0FBQSxFQUNFO0FBQUEsWUFBQSxFQUFBLEVBQUksZUFBSjtBQUFBLFlBQ0EsS0FBQSxFQUFPLEVBRFA7QUFBQSxZQUVBLE1BQUEsRUFBUSxFQUZSO1dBRkY7U0FERjtBQUFBLFFBTUEsSUFBQSxFQUNFO0FBQUEsVUFBQSxNQUFBLEVBQVEsdUJBQVI7U0FQRjtPQVJGO0FBQUEsTUFnQkEsUUFBQSxFQUFVLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFDLEdBQUQsRUFBTSxFQUFOLEdBQUE7aUJBQ1IsS0FBQyxDQUFBLGlCQUFELEdBRFE7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQWhCVjtLQURGLENBekpBLENBQUE7QUFBQSxJQW1MQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSx1QkFBWixDQUFvQyxDQUFDLEVBQXJDLENBQXdDLE9BQXhDLEVBQWlELElBQUMsQ0FBQSxXQUFsRCxDQW5MQSxDQUFBO0FBQUEsSUFvTEEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksWUFBWixDQUF5QixDQUFDLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLElBQUMsQ0FBQSxTQUF2QyxDQXBMQSxDQURXO0VBQUEsQ0FBYjs7QUFBQSw0QkF1TEEsT0FBQSxHQUFTLFNBQUEsR0FBQTtBQUNQLFFBQUEsc0JBQUE7QUFBQSxJQUFBLFNBQUEsR0FBZ0IsSUFBQSxVQUFBLENBQ2Q7QUFBQSxNQUFBLGNBQUEsRUFBZ0IsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBMUIsQ0FBcUMsTUFBckMsQ0FBaEI7QUFBQSxNQUNBLGNBQUEsRUFBZ0IsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUR0QztBQUFBLE1BRUEsUUFBQSxFQUFVLHlEQUZWO0tBRGMsQ0FBaEIsQ0FBQTtBQUFBLElBS0EsU0FBUyxDQUFDLFVBQVYsQ0FBQSxDQUxBLENBQUE7QUFBQSxJQU9BLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxTQUFYLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxLQUFOO0FBQUEsTUFDQSxTQUFBLEVBQVcsSUFEWDtBQUFBLE1BRUEsU0FBQSxFQUFXLENBRlg7S0FERixFQUtFO0FBQUEsTUFBQSxJQUFBLEVBQU0sV0FBTjtBQUFBLE1BQ0EsVUFBQSxFQUFZLE1BRFo7QUFBQSxNQUVBLE1BQUEsRUFBUSxTQUFTLENBQUMsU0FBVixDQUFBLENBRlI7QUFBQSxNQUdBLFNBQUEsRUFDRTtBQUFBLFFBQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxPQUFYLENBQW1CLGtDQUFuQixDQUFaO09BSkY7S0FMRixDQVBBLENBQUE7QUFBQSxJQWtCQSxXQUFBLEdBQWtCLElBQUEsVUFBQSxDQUNoQjtBQUFBLE1BQUEsY0FBQSxFQUFnQixTQUFDLElBQUQsR0FBQTtBQUNkLGVBQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUF0QixDQUFpQyxJQUFJLENBQUMsS0FBdEMsQ0FBUCxDQURjO01BQUEsQ0FBaEI7QUFBQSxNQUVBLGNBQUEsRUFBZ0IsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUZ0QztBQUFBLE1BR0EsS0FBQSxFQUFPO1FBQUM7QUFBQSxVQUFDLE9BQUEsRUFBUSxTQUFUO1NBQUQsRUFBcUI7QUFBQSxVQUFDLE9BQUEsRUFBUSxvQkFBVDtTQUFyQixFQUFvRDtBQUFBLFVBQUMsT0FBQSxFQUFRLGFBQVQ7U0FBcEQsRUFBNEU7QUFBQSxVQUFDLE9BQUEsRUFBUSxtQkFBVDtTQUE1RSxFQUEwRztBQUFBLFVBQUMsT0FBQSxFQUFRLFVBQVQ7U0FBMUcsRUFBK0g7QUFBQSxVQUFDLE9BQUEsRUFBUSxTQUFUO1NBQS9ILEVBQW1KO0FBQUEsVUFBQyxPQUFBLEVBQVEsU0FBVDtTQUFuSixFQUF1SztBQUFBLFVBQUMsT0FBQSxFQUFRLFFBQVQ7U0FBdkssRUFBMEw7QUFBQSxVQUFDLE9BQUEsRUFBUSxZQUFUO1NBQTFMO09BSFA7S0FEZ0IsQ0FsQmxCLENBQUE7QUFBQSxJQXdCQSxXQUFXLENBQUMsVUFBWixDQUFBLENBeEJBLENBQUE7QUFBQSxJQTBCQSxDQUFBLENBQUUsNEJBQUYsQ0FBK0IsQ0FBQyxTQUFoQyxDQUNFO0FBQUEsTUFBQSxJQUFBLEVBQU0sS0FBTjtBQUFBLE1BQ0EsU0FBQSxFQUFXLElBRFg7QUFBQSxNQUVBLFNBQUEsRUFBVyxDQUZYO0tBREYsRUFLRTtBQUFBLE1BQUEsSUFBQSxFQUFNLGFBQU47QUFBQSxNQUNBLFVBQUEsRUFBWSxPQURaO0FBQUEsTUFFQSxNQUFBLEVBQVEsV0FBVyxDQUFDLFNBQVosQ0FBQSxDQUZSO0FBQUEsTUFHQSxTQUFBLEVBQ0U7QUFBQSxRQUFBLFVBQUEsRUFBWSxVQUFVLENBQUMsT0FBWCxDQUFtQixrQkFBbkIsQ0FBWjtPQUpGO0tBTEYsQ0ExQkEsQ0FBQTtBQUFBLElBcUNBLENBQUEsQ0FBRSx5QkFBRixDQUE0QixDQUFDLFNBQTdCLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxLQUFOO0FBQUEsTUFDQSxTQUFBLEVBQVcsSUFEWDtBQUFBLE1BRUEsU0FBQSxFQUFXLENBRlg7S0FERixFQUtFO0FBQUEsTUFBQSxJQUFBLEVBQU0sYUFBTjtBQUFBLE1BQ0EsVUFBQSxFQUFZLE9BRFo7QUFBQSxNQUVBLE1BQUEsRUFBUSxXQUFXLENBQUMsU0FBWixDQUFBLENBRlI7QUFBQSxNQUdBLFNBQUEsRUFDRTtBQUFBLFFBQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxPQUFYLENBQW1CLGtCQUFuQixDQUFaO09BSkY7S0FMRixDQXJDQSxDQUFBO1dBZ0RBLENBQUEsQ0FBRSxnQ0FBRixDQUFtQyxDQUFDLFNBQXBDLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxLQUFOO0FBQUEsTUFDQSxTQUFBLEVBQVcsSUFEWDtBQUFBLE1BRUEsU0FBQSxFQUFXLENBRlg7S0FERixFQUtFO0FBQUEsTUFBQSxJQUFBLEVBQU0sYUFBTjtBQUFBLE1BQ0EsVUFBQSxFQUFZLE9BRFo7QUFBQSxNQUVBLE1BQUEsRUFBUSxXQUFXLENBQUMsU0FBWixDQUFBLENBRlI7QUFBQSxNQUdBLFNBQUEsRUFDRTtBQUFBLFFBQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxPQUFYLENBQW1CLGtCQUFuQixDQUFaO09BSkY7S0FMRixFQWpETztFQUFBLENBdkxULENBQUE7O0FBQUEsNEJBcVBBLFdBQUEsR0FBYSxTQUFDLEVBQUQsR0FBQTtBQUNYLFFBQUEsOENBQUE7QUFBQSxJQUFBLFFBQUEsR0FBVyxDQUFDLHVCQUFBLEdBQXdCLEVBQXpCLEVBQTRCLHFCQUFBLEdBQXNCLEVBQWxELEVBQXFELHdCQUFBLEdBQXlCLEVBQTlFLEVBQWlGLFVBQUEsR0FBVyxFQUE1RixFQUErRixpQkFBQSxHQUFrQixFQUFqSCxFQUFvSCxjQUFBLEdBQWUsRUFBbkksRUFBc0ksbUJBQUEsR0FBb0IsRUFBMUosRUFBNkosa0JBQUEsR0FBbUIsRUFBaEwsRUFBbUwsNEJBQUEsR0FBNkIsRUFBaE4sRUFBbU4seUJBQUEsR0FBMEIsRUFBN08sRUFBZ1AsdUJBQUEsR0FBd0IsRUFBeFEsRUFBMlEsNEJBQUEsR0FBNkIsRUFBeFMsRUFBMlMsMkJBQUEsR0FBNEIsRUFBdlUsRUFBMFUsb0JBQUEsR0FBcUIsRUFBL1YsRUFBa1csdUJBQUEsR0FBd0IsRUFBMVgsRUFBNlgsV0FBQSxHQUFZLEVBQXpZLEVBQTRZLHVCQUFBLEdBQXdCLEVBQXBhLEVBQXVhLHdCQUFBLEdBQXlCLEVBQWhjLEVBQW1jLGNBQUEsR0FBZSxFQUFsZCxFQUFxZCxrQkFBQSxHQUFtQixFQUF4ZSxFQUEyZSxNQUFBLEdBQU8sRUFBbGYsRUFBcWYsa0JBQUEsR0FBbUIsRUFBeGdCLEVBQTJnQix1QkFBQSxHQUF3QixFQUFuaUIsRUFBc2lCLGlDQUFBLEdBQWtDLEVBQXhrQixFQUEya0Isc0JBQUEsR0FBdUIsRUFBbG1CLEVBQXFtQixlQUFBLEdBQWdCLEVBQXJuQixFQUF3bkIsZUFBQSxHQUFnQixFQUF4b0IsRUFBMm9CLHVCQUFBLEdBQXdCLEVBQW5xQixFQUFzcUIsdUJBQUEsR0FBd0IsRUFBOXJCLEVBQWlzQixhQUFBLEdBQWMsRUFBL3NCLEVBQWt0QixpQ0FBQSxHQUFrQyxFQUFwdkIsRUFBdXZCLGtCQUFBLEdBQW1CLEVBQTF3QixFQUE2d0Isb0JBQUEsR0FBcUIsRUFBbHlCLEVBQXF5QixvQkFBQSxHQUFxQixFQUExekIsRUFBNnpCLGdCQUFBLEdBQWlCLEVBQTkwQixFQUFpMUIscUJBQUEsR0FBc0IsRUFBdjJCLEVBQTAyQixnQkFBQSxHQUFpQixFQUEzM0IsRUFBODNCLG9CQUFBLEdBQXFCLEVBQW41QixFQUFzNUIsWUFBQSxHQUFhLEVBQW42QixFQUFzNkIseUJBQUEsR0FBMEIsRUFBaDhCLEVBQW04Qix3QkFBQSxHQUF5QixFQUE1OUIsRUFBKzlCLG9CQUFBLEdBQXFCLEVBQXAvQixFQUF1L0IsMkJBQUEsR0FBNEIsRUFBbmhDLEVBQXNoQyxTQUFBLEdBQVUsRUFBaGlDLEVBQW1pQyxXQUFBLEdBQVksRUFBL2lDLEVBQWtqQyw0QkFBQSxHQUE2QixFQUEva0MsQ0FBWCxDQUFBO0FBQUEsSUFDQSxRQUFBLEdBQVcsR0FBQSxDQUFBLEtBRFgsQ0FBQTtBQUFBLElBRUEsT0FBQSxHQUFVLEdBQUEsQ0FBQSxNQUZWLENBQUE7QUFBQSxJQUdBLEVBQUEsR0FBSyxDQUhMLENBQUE7QUFJQSxTQUFBLCtDQUFBOzZCQUFBO0FBQ0UsTUFBQSxPQUFBLEdBQVU7QUFBQSxRQUNSLEVBQUEsRUFBSyxFQURHO0FBQUEsUUFFUixLQUFBLEVBQVEsT0FGQTtPQUFWLENBQUE7QUFBQSxNQUlBLFFBQVEsQ0FBQyxJQUFULENBQWMsT0FBZCxDQUpBLENBQUE7QUFBQSxNQUtBLEVBQUEsRUFMQSxDQURGO0FBQUEsS0FKQTtBQVdBLFdBQU8sUUFBUCxDQVpXO0VBQUEsQ0FyUGIsQ0FBQTs7QUFBQSw0QkFvUUEsY0FBQSxHQUFnQixTQUFDLEVBQUQsR0FBQTtBQUNkLFFBQUEsOENBQUE7QUFBQSxJQUFBLFFBQUEsR0FBVyxDQUFDLFdBQUEsR0FBWSxFQUFiLEVBQWdCLHlCQUFBLEdBQTBCLEVBQTFDLEVBQTZDLHdCQUFBLEdBQXlCLEVBQXRFLENBQVgsQ0FBQTtBQUFBLElBQ0EsUUFBQSxHQUFXLEdBQUEsQ0FBQSxLQURYLENBQUE7QUFBQSxJQUVBLE9BQUEsR0FBVSxHQUFBLENBQUEsTUFGVixDQUFBO0FBQUEsSUFHQSxFQUFBLEdBQUssQ0FITCxDQUFBO0FBSUEsU0FBQSwrQ0FBQTs2QkFBQTtBQUNFLE1BQUEsT0FBQSxHQUFVO0FBQUEsUUFDUixFQUFBLEVBQUssRUFERztBQUFBLFFBRVIsS0FBQSxFQUFRLE9BRkE7T0FBVixDQUFBO0FBQUEsTUFJQSxRQUFRLENBQUMsSUFBVCxDQUFjLE9BQWQsQ0FKQSxDQUFBO0FBQUEsTUFLQSxFQUFBLEVBTEEsQ0FERjtBQUFBLEtBSkE7QUFXQSxXQUFPLFFBQVAsQ0FaYztFQUFBLENBcFFoQixDQUFBOztBQUFBLDRCQW1SQSxZQUFBLEdBQWMsU0FBQyxLQUFELEdBQUE7QUFDWixJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsYUFBYSxDQUFDLE1BQWYsQ0FBQSxDQUF1QixDQUFDLE1BQXhCLENBQStCLElBQUMsQ0FBQSxnQkFBRCxDQUFrQjtBQUFBLE1BQUMsT0FBQSxFQUFVLElBQUMsQ0FBQSxlQUFaO0tBQWxCLENBQS9CLENBREEsQ0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLGVBQUQsRUFGQSxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxnQkFBWixDQUE2QixDQUFDLE1BQTlCLENBQ0U7QUFBQSxNQUFBLHdCQUFBLEVBQTBCLEVBQTFCO0tBREYsQ0FIQSxDQUFBO0FBS0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxlQUFELEdBQWlCLENBQXBCO0FBQ0UsTUFBQSxJQUFDLENBQUEsZ0JBQWdCLENBQUMsSUFBbEIsQ0FBQSxDQUFBLENBREY7S0FMQTtXQVNBLElBQUMsQ0FBQSxPQUFELENBQUEsRUFWWTtFQUFBLENBblJkLENBQUE7O0FBQUEsNEJBZ1NBLGVBQUEsR0FBaUIsU0FBQyxLQUFELEdBQUE7QUFDZixJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsZUFBRCxFQURBLENBQUE7QUFBQSxJQUVBLENBQUEsQ0FBRSx5QkFBRixDQUE0QixDQUFDLE1BQTdCLENBQUEsQ0FGQSxDQUFBO0FBR0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxlQUFELEdBQWlCLENBQXBCO2FBQ0UsSUFBQyxDQUFBLGdCQUFnQixDQUFDLElBQWxCLENBQUEsRUFERjtLQUplO0VBQUEsQ0FoU2pCLENBQUE7O0FBQUEsNEJBd1NBLFdBQUEsR0FBYSxTQUFDLEtBQUQsR0FBQTtBQUNYLFFBQUEsdUJBQUE7QUFBQSxJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxNQUFBLEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksUUFBWixDQURULENBQUE7QUFFQSxTQUFBLDZDQUFBO3lCQUFBO0FBQ0UsTUFBQSxJQUFHLENBQUEsSUFBRSxDQUFBLFFBQUQsQ0FBVSxLQUFWLENBQUo7QUFDRSxlQUFPLEtBQVAsQ0FERjtPQURGO0FBQUEsS0FGQTtBQU1BLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxpQkFBWixDQUE4QixDQUFDLE1BQS9CLEdBQXNDLENBQXpDO0FBQ0UsYUFBTyxLQUFQLENBREY7S0FOQTtBQUFBLElBU0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsU0FBckIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFBLENBVFgsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFULENBQWtCLFNBQWxCLENBVkEsQ0FBQTtBQUFBLElBV0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0I7QUFBQSxNQUFDLFNBQUEsRUFBVSxDQUFYO0tBQWxCLEVBQWlDLEtBQWpDLENBWEEsQ0FBQTtXQWNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsU0FBTCxDQUFlLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsY0FBbkIsQ0FBQSxDQUFmLENBQVgsQ0FBWixFQWZXO0VBQUEsQ0F4U2IsQ0FBQTs7QUFBQSw0QkEwVEEsU0FBQSxHQUFXLFNBQUMsS0FBRCxHQUFBO0FBQ1QsSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVkscUJBQVosQ0FBa0MsQ0FBQyxXQUFuQyxDQUErQyxVQUEvQyxDQURBLENBQUE7QUFBQSxJQUVBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLFNBQXJCLENBQStCLENBQUMsSUFBaEMsQ0FBQSxDQUZYLENBQUE7QUFBQSxJQUdBLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxDQUFrQixTQUFsQixDQUhBLENBQUE7V0FJQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQjtBQUFBLE1BQUMsU0FBQSxFQUFVLENBQVg7S0FBbEIsRUFBaUMsS0FBakMsRUFMUztFQUFBLENBMVRYLENBQUE7O0FBQUEsNEJBa1VBLFdBQUEsR0FBYSxTQUFDLEtBQUQsR0FBQTtBQUNYLFFBQUEsdUJBQUE7QUFBQSxJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxNQUFBLEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksUUFBWixDQURULENBQUE7QUFFQSxTQUFBLDZDQUFBO3lCQUFBO0FBQ0UsTUFBQSxJQUFHLENBQUEsSUFBRSxDQUFBLFFBQUQsQ0FBVSxLQUFWLENBQUo7QUFDRSxlQUFPLEtBQVAsQ0FERjtPQURGO0FBQUEsS0FGQTtBQU1BLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxpQkFBWixDQUE4QixDQUFDLE1BQS9CLEdBQXNDLENBQXpDO0FBQ0UsYUFBTyxLQUFQLENBREY7S0FOQTtBQUFBLElBU0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVkscUJBQVosQ0FBa0MsQ0FBQyxJQUFuQyxDQUFBLENBQXlDLENBQUMsUUFBMUMsQ0FBbUQsVUFBbkQsQ0FUQSxDQUFBO0FBQUEsSUFVQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBVCxDQUFxQixTQUFyQixDQUErQixDQUFDLElBQWhDLENBQUEsQ0FWWCxDQUFBO0FBQUEsSUFXQSxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsU0FBbEIsQ0FYQSxDQUFBO1dBWUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0I7QUFBQSxNQUFDLFNBQUEsRUFBVSxDQUFYO0tBQWxCLEVBQWlDLEtBQWpDLEVBYlc7RUFBQSxDQWxVYixDQUFBOztBQUFBLDRCQWtWQSxTQUFBLEdBQVcsU0FBQyxLQUFELEdBQUE7QUFDVCxJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxxQkFBWixDQUFrQyxDQUFDLFdBQW5DLENBQStDLFVBQS9DLENBREEsQ0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsU0FBckIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFBLENBRlgsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFULENBQWtCLFNBQWxCLENBSEEsQ0FBQTtXQUlBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxPQUFWLENBQWtCO0FBQUEsTUFBQyxTQUFBLEVBQVUsQ0FBWDtLQUFsQixFQUFpQyxLQUFqQyxFQUxTO0VBQUEsQ0FsVlgsQ0FBQTs7QUFBQSw0QkEwVkEsVUFBQSxHQUFZLFNBQUMsS0FBRCxHQUFBO0FBQ1YsSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLFdBQVcsQ0FBQyxNQUFiLENBQUEsQ0FBcUIsQ0FBQyxNQUF0QixDQUE2QixJQUFDLENBQUEsY0FBRCxDQUFnQjtBQUFBLE1BQUMsT0FBQSxFQUFVLElBQUMsQ0FBQSxhQUFaO0tBQWhCLENBQTdCLENBREEsQ0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLGFBQUQsRUFGQSxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxnQkFBWixDQUE2QixDQUFDLE1BQTlCLENBQ0U7QUFBQSxNQUFBLHdCQUFBLEVBQTBCLEVBQTFCO0tBREYsQ0FIQSxDQUFBO0FBS0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxhQUFELEdBQWUsQ0FBbEI7YUFDRSxJQUFDLENBQUEsY0FBYyxDQUFDLElBQWhCLENBQUEsRUFERjtLQU5VO0VBQUEsQ0ExVlosQ0FBQTs7QUFBQSw0QkFvV0EsYUFBQSxHQUFlLFNBQUMsS0FBRCxHQUFBO0FBQ2IsSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLGFBQUQsRUFEQSxDQUFBO0FBQUEsSUFFQSxDQUFBLENBQUUsc0JBQUYsQ0FBeUIsQ0FBQyxNQUExQixDQUFBLENBRkEsQ0FBQTtBQUdBLElBQUEsSUFBRyxJQUFDLENBQUEsYUFBRCxHQUFlLENBQWxCO2FBQ0UsSUFBQyxDQUFBLGNBQWMsQ0FBQyxJQUFoQixDQUFBLEVBREY7S0FKYTtFQUFBLENBcFdmLENBQUE7O0FBQUEsNEJBNFdBLFdBQUEsR0FBYSxTQUFDLEtBQUQsR0FBQTtBQUNYLFFBQUEsdUJBQUE7QUFBQSxJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxNQUFBLEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksUUFBWixDQURULENBQUE7QUFFQSxTQUFBLDZDQUFBO3lCQUFBO0FBQ0UsTUFBQSxJQUFHLENBQUEsSUFBRSxDQUFBLFFBQUQsQ0FBVSxLQUFWLENBQUo7QUFDRSxlQUFPLEtBQVAsQ0FERjtPQURGO0FBQUEsS0FGQTtBQU1BLElBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxpQkFBWixDQUE4QixDQUFDLE1BQS9CLEdBQXNDLENBQXpDO0FBQ0UsYUFBTyxLQUFQLENBREY7S0FOQTtBQUFBLElBU0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVkscUJBQVosQ0FBa0MsQ0FBQyxJQUFuQyxDQUFBLENBQXlDLENBQUMsUUFBMUMsQ0FBbUQsVUFBbkQsQ0FUQSxDQUFBO0FBQUEsSUFVQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBVCxDQUFxQixTQUFyQixDQUErQixDQUFDLElBQWhDLENBQUEsQ0FWWCxDQUFBO0FBQUEsSUFXQSxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVQsQ0FBa0IsU0FBbEIsQ0FYQSxDQUFBO1dBWUEsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLE9BQVYsQ0FBa0I7QUFBQSxNQUFDLFNBQUEsRUFBVSxDQUFYO0tBQWxCLEVBQWlDLEtBQWpDLEVBYlc7RUFBQSxDQTVXYixDQUFBOztBQUFBLDRCQTRYQSxTQUFBLEdBQVcsU0FBQyxLQUFELEdBQUE7QUFDVCxJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxxQkFBWixDQUFrQyxDQUFDLFdBQW5DLENBQStDLFVBQS9DLENBREEsQ0FBQTtBQUFBLElBRUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsU0FBckIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFBLENBRlgsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFULENBQWtCLFNBQWxCLENBSEEsQ0FBQTtXQUlBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxPQUFWLENBQWtCO0FBQUEsTUFBQyxTQUFBLEVBQVUsQ0FBWDtLQUFsQixFQUFpQyxLQUFqQyxFQUxTO0VBQUEsQ0E1WFgsQ0FBQTs7QUFBQSw0QkFxWUEsV0FBQSxHQUFhLFNBQUEsR0FBQTtBQUNYLFFBQUEsMkRBQUE7QUFBQSxJQUFBLE1BQUEsR0FBUyxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxPQUFkLENBQVQsQ0FBQTtBQUNBO1NBQUEsNkNBQUE7eUJBQUE7QUFDRSxNQUFBLFFBQUEsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxRQUFBLEdBQVMsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsa0JBQW5CLENBQXJCLENBQVgsQ0FBQTtBQUFBOztBQUNBO2FBQUEsaURBQUE7aUNBQUE7QUFDRSxVQUFBLEtBQUEsR0FBUSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsT0FBWCxDQUFtQixjQUFuQixDQUFSLENBQUE7QUFDQSxVQUFBLElBQUcsS0FBSyxDQUFDLE9BQVQ7QUFDRSxZQUFBLEtBQUssQ0FBQyxXQUFOLENBQWtCLE1BQWxCLENBQUEsQ0FBQTtBQUFBLFlBQ0EsT0FBTyxDQUFDLGVBQVIsQ0FBd0IsVUFBeEIsQ0FEQSxDQUFBO0FBQUEsMkJBRUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsVUFBckIsRUFBaUMsVUFBakMsRUFGQSxDQURGO1dBQUEsTUFBQTtBQUtFLFlBQUEsS0FBSyxDQUFDLFFBQU4sQ0FBZSxNQUFmLENBQUEsQ0FBQTtBQUFBLFlBQ0EsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFsQixDQUF5QixnQkFBekIsQ0FEQSxDQUFBO0FBQUEsWUFFQSxPQUFPLENBQUMsWUFBUixDQUFxQixVQUFyQixFQUFpQyxVQUFqQyxDQUZBLENBQUE7QUFBQSwyQkFHQSxPQUFPLENBQUMsZUFBUixDQUF3QixVQUF4QixFQUhBLENBTEY7V0FGRjtBQUFBOztXQURBLENBREY7QUFBQTtvQkFGVztFQUFBLENBclliLENBQUE7O0FBQUEsNEJBc1pBLGVBQUEsR0FBaUIsU0FBQyxLQUFELEdBQUE7QUFDZixRQUFBLHVHQUFBO0FBQUEsSUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLEtBQUssQ0FBQyxhQUFSLENBQVQsQ0FBQTtBQUFBLElBQ0EsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsV0FBbkIsQ0FEQSxDQUFBO0FBQUEsSUFFQSxFQUFBLEdBQUssTUFBTSxDQUFDLEdBQVAsQ0FBQSxDQUZMLENBQUE7QUFBQSxJQUlBLElBQUEsR0FBTyxNQUFNLENBQUMsT0FBUCxDQUFlLE9BQWYsQ0FKUCxDQUFBO0FBQUEsSUFNQSxXQUFBLEdBQWMsSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsRUFBaEIsQ0FOZCxDQUFBO0FBQUEsSUFPQSxXQUFBLEdBQWMsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFXLENBQUMsTUFBWixHQUFxQixDQUEvQixDQVBkLENBQUE7QUFBQSxJQVFBLFFBQUEsR0FBVyxXQUFXLENBQUMsTUFBWixDQUFtQixDQUFuQixFQUFxQixXQUFyQixDQVJYLENBQUE7QUFBQSxJQVVBLFFBQUEsR0FBVyxJQUFDLENBQUEsc0JBQUQsQ0FBd0I7QUFBQSxNQUNqQyxLQUFBLEVBQVEsSUFBQyxDQUFBLFVBRHdCO0FBQUEsTUFFakMsT0FBQSxFQUFVLElBQUMsQ0FBQSxXQUFELENBQWEsRUFBYixDQUZ1QjtBQUFBLE1BR2pDLE9BQUEsRUFBVSxRQUh1QjtBQUFBLE1BSWpDLE9BQUEsRUFBVSxXQUp1QjtLQUF4QixDQVZYLENBQUE7QUFBQSxJQWlCQSxJQUFBLEdBQU8sSUFBSSxDQUFDLElBQUwsQ0FBQSxDQWpCUCxDQUFBO0FBa0JBLElBQUEsSUFBRyxJQUFJLENBQUMsUUFBTCxDQUFjLFNBQWQsQ0FBSDtBQUNFLE1BQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsUUFBakIsQ0FBQSxDQURGO0tBQUEsTUFBQTtBQUdFLE1BQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLENBQUEsQ0FIRjtLQWxCQTtBQUFBLElBdUJBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGdCQUFaLENBQTZCLENBQUMsTUFBOUIsQ0FDRTtBQUFBLE1BQUEsd0JBQUEsRUFBMEIsRUFBMUI7S0FERixDQXZCQSxDQUFBO0FBeUJBO0FBQUE7U0FBQSwyQ0FBQTt5QkFBQTtBQUNFLG9CQUFJLElBQUEsd0JBQUEsQ0FBeUIsQ0FBQSxDQUFFLE9BQUYsQ0FBekIsRUFBSixDQURGO0FBQUE7b0JBMUJlO0VBQUEsQ0F0WmpCLENBQUE7O0FBQUEsNEJBcWJBLFVBQUEsR0FBWSxTQUFDLEtBQUQsR0FBQTtBQUNWLFFBQUEsZ0NBQUE7QUFBQSxJQUFBLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsV0FBVyxDQUFDLE1BQWIsQ0FBQSxDQUFxQixDQUFDLE1BQXRCLENBQTZCLElBQUMsQ0FBQSxjQUFELENBQWdCO0FBQUEsTUFBQyxPQUFBLEVBQVUsSUFBQyxDQUFBLFVBQVo7S0FBaEIsQ0FBN0IsQ0FEQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsVUFBRCxFQUZBLENBQUE7QUFBQSxJQUlBLE9BQUEsR0FBVSxJQUFDLENBQUEsV0FBVyxDQUFDLE1BQWIsQ0FBQSxDQUFxQixDQUFDLElBQXRCLENBQUEsQ0FKVixDQUFBO0FBQUEsSUFLQSxPQUFPLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FBc0IsQ0FBQyxFQUF2QixDQUEwQixRQUExQixFQUFvQyxJQUFDLENBQUEsZUFBckMsQ0FMQSxDQUFBO0FBQUEsSUFPQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxnQkFBWixDQUE2QixDQUFDLE1BQTlCLENBQ0U7QUFBQSxNQUFBLHdCQUFBLEVBQTBCLEVBQTFCO0tBREYsQ0FQQSxDQUFBO0FBQUEsSUFTQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxXQUFaLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLGNBQWMsQ0FBQyxHQUFoQixDQUFBLENBQTlCLENBVEEsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLFdBQUQsQ0FBQSxDQVZBLENBQUE7QUFXQTtBQUFBLFNBQUEsMkNBQUE7eUJBQUE7QUFDRSxNQUFJLElBQUEsd0JBQUEsQ0FBeUIsQ0FBQSxDQUFFLE9BQUYsQ0FBekIsQ0FBSixDQURGO0FBQUEsS0FYQTtBQWNBLElBQUEsSUFBRyxJQUFDLENBQUEsVUFBRCxHQUFZLENBQWY7YUFDRSxJQUFDLENBQUEsY0FBYyxDQUFDLElBQWhCLENBQUEsRUFERjtLQWZVO0VBQUEsQ0FyYlosQ0FBQTs7QUFBQSw0QkF3Y0EsYUFBQSxHQUFlLFNBQUMsS0FBRCxHQUFBO0FBQ2IsSUFBQSxLQUFLLENBQUMsY0FBTixDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLFVBQUQsRUFEQSxDQUFBO0FBQUEsSUFFQSxDQUFBLENBQUUsb0JBQUYsQ0FBdUIsQ0FBQyxNQUF4QixDQUFBLENBRkEsQ0FBQTtBQUdBLElBQUEsSUFBRyxJQUFDLENBQUEsVUFBRCxHQUFZLENBQWY7YUFDRSxJQUFDLENBQUEsY0FBYyxDQUFDLElBQWhCLENBQUEsRUFERjtLQUphO0VBQUEsQ0F4Y2YsQ0FBQTs7QUFBQSw0QkFnZEEsUUFBQSxHQUFVLFNBQUMsS0FBRCxHQUFBO0FBRVIsUUFBQSxLQUFBO0FBQUEsSUFBQSxJQUFHLEtBQUssQ0FBQyxZQUFOLENBQW1CLGlCQUFuQixDQUFIO0FBQ0UsTUFBQSxLQUFBLEdBQVEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsaUJBQW5CLENBQXhCLENBQVIsQ0FERjtLQUFBO0FBR0EsSUFBQSxJQUFHLEtBQUssQ0FBQyxZQUFOLENBQW1CLFVBQW5CLENBQUg7QUFDRSxNQUFBLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFaLENBQUEsQ0FBa0IsQ0FBQyxNQUFuQixLQUE2QixDQUFoQztBQUNFLFFBQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFoQixDQUFvQixnQkFBcEIsQ0FBQSxDQURGO09BREY7S0FIQTtBQU9BLElBQUEsSUFBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQWhCLENBQXlCLGdCQUF6QixDQUFIO0FBQ0UsTUFBQSxJQUFHLEtBQUg7QUFDRSxRQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBWixHQUFzQixPQUF0QixDQURGO09BQUE7QUFFQSxhQUFPLEtBQVAsQ0FIRjtLQUFBLE1BQUE7QUFLRSxNQUFBLElBQUcsS0FBSDtBQUNFLFFBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFaLEdBQXNCLE1BQXRCLENBREY7T0FMRjtLQVBBO0FBZUEsV0FBTyxJQUFQLENBakJRO0VBQUEsQ0FoZFYsQ0FBQTs7QUFBQSw0QkFvZUEsV0FBQSxHQUFhLFNBQUMsS0FBRCxHQUFBO0FBQ1gsUUFBQSx1QkFBQTtBQUFBLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLE1BQUEsR0FBUyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxRQUFaLENBRFQsQ0FBQTtBQUVBLFNBQUEsNkNBQUE7eUJBQUE7QUFDRSxNQUFBLElBQUcsQ0FBQSxJQUFFLENBQUEsUUFBRCxDQUFVLEtBQVYsQ0FBSjtBQUNFLGVBQU8sS0FBUCxDQURGO09BREY7QUFBQSxLQUZBO0FBTUEsSUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLGlCQUFaLENBQThCLENBQUMsTUFBL0IsR0FBc0MsQ0FBekM7QUFDRSxhQUFPLEtBQVAsQ0FERjtLQU5BO0FBQUEsSUFTQSxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsQ0FBWSxxQkFBWixDQUFrQyxDQUFDLElBQW5DLENBQUEsQ0FBeUMsQ0FBQyxRQUExQyxDQUFtRCxVQUFuRCxDQVRBLENBQUE7QUFBQSxJQVVBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLFNBQXJCLENBQStCLENBQUMsSUFBaEMsQ0FBQSxDQVZYLENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxDQUFrQixTQUFsQixDQVhBLENBQUE7V0FZQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsT0FBVixDQUFrQjtBQUFBLE1BQUMsU0FBQSxFQUFVLENBQVg7S0FBbEIsRUFBaUMsS0FBakMsRUFiVztFQUFBLENBcGViLENBQUE7O0FBQUEsNEJBc2ZBLE1BQUEsR0FBUSxTQUFDLEtBQUQsR0FBQTtBQUNOLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7V0FDQSxPQUFPLENBQUMsWUFBUixDQUFxQixLQUFyQixFQUE0QixTQUFDLEtBQUQsR0FBQSxDQUE1QixFQUZNO0VBQUEsQ0F0ZlIsQ0FBQTs7QUFBQSw0QkEyZkEsSUFBQSxHQUFNLFNBQUMsSUFBRCxHQUFBLENBM2ZOLENBQUE7O0FBQUEsNEJBOGZBLElBQUEsR0FBTSxTQUFDLEtBQUQsR0FBQTtBQUNKLFFBQUEsTUFBQTtBQUFBLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxLQUFiLENBQUEsQ0FBQTtBQUNBLElBQUEsSUFBRyxLQUFLLENBQUMsTUFBVDtBQUNFLE1BQUEsTUFBQSxHQUFhLElBQUEsVUFBQSxDQUFBLENBQWIsQ0FBQTtBQUFBLE1BRUEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUMsS0FBRCxHQUFBO0FBQ2QsY0FBQSxZQUFBO0FBQUEsVUFBQSxLQUFDLENBQUEsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUF4QixDQUFzQyxLQUF0QyxDQUE0QyxDQUFDLEdBQTdDLEdBQW1ELEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBaEUsQ0FBQTtBQUFBLFVBQ0EsTUFBQSxHQUFTLFFBQVEsQ0FBQyxVQUFULENBQW9CLEtBQUMsQ0FBQSxjQUFjLENBQUMsT0FBcEMsRUFBNkMsSUFBN0MsQ0FEVCxDQUFBO0FBQUEsVUFFQSxJQUFBLEdBQU8sS0FBQyxDQUFBLFlBQVksQ0FBQyxJQUFkLENBQUEsQ0FGUCxDQUFBO0FBR0EsVUFBQSxJQUFHLElBQUksQ0FBQyxRQUFMLENBQWMsZ0JBQWQsQ0FBSDtBQUNFLFlBQUEsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLENBREY7V0FIQTtBQUFBLFVBS0EsS0FBQyxDQUFBLFlBQVksQ0FBQyxNQUFkLENBQXFCLE1BQXJCLENBTEEsQ0FBQTtpQkFNQSxLQUFDLENBQUEsWUFBWSxDQUFDLElBQWQsQ0FBQSxDQUFvQixDQUFDLElBQXJCLENBQTBCLFFBQTFCLENBQW1DLENBQUMsRUFBcEMsQ0FBdUMsT0FBdkMsRUFBZ0QsS0FBQyxDQUFBLFlBQWpELEVBUGM7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUZoQixDQUFBO2FBV0EsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsS0FBTSxDQUFBLENBQUEsQ0FBM0IsRUFaRjtLQUZJO0VBQUEsQ0E5Zk4sQ0FBQTs7QUFBQSw0QkErZ0JBLFlBQUEsR0FBYyxTQUFDLEtBQUQsR0FBQTtBQUNaLElBQUEsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxZQUFZLENBQUMsSUFBZCxDQUFBLENBQW9CLENBQUMsTUFBckIsQ0FBQSxDQURBLENBQUE7QUFBQSxJQUVBLElBQUMsQ0FBQSxJQUFJLENBQUMsV0FBTixDQUFrQixJQUFDLENBQUEsSUFBSSxDQUFDLEdBQU4sQ0FBVSxFQUFWLENBQWEsQ0FBQyxLQUFkLENBQW9CLElBQXBCLENBQWxCLENBRkEsQ0FBQTtXQUdBLElBQUMsQ0FBQSxJQUFELEdBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksc0JBQVosRUFKSTtFQUFBLENBL2dCZCxDQUFBOztBQUFBLDRCQXNoQkEsY0FBQSxHQUFnQixTQUFDLEtBQUQsR0FBQTtBQUNkLFFBQUEsa0JBQUE7QUFBQSxJQUFBLEtBQUEsR0FBUSxPQUFPLENBQUMsUUFBUixDQUFpQixLQUFqQixDQUFSLENBQUE7QUFBQSxJQUVBLEdBQUEsR0FBTSxLQUFNLENBQUEsQ0FBQSxDQUFHLENBQUEsTUFBQSxDQUFPLENBQUMsU0FBakIsQ0FBMkIsS0FBTSxDQUFBLENBQUEsQ0FBRyxDQUFBLE1BQUEsQ0FBTyxDQUFDLFdBQWpCLENBQTZCLEdBQTdCLENBQUEsR0FBb0MsQ0FBL0QsQ0FBaUUsQ0FBQyxXQUFsRSxDQUFBLENBRk4sQ0FBQTtBQUlBLElBQUEsSUFBSSxLQUFNLENBQUEsQ0FBQSxDQUFOLElBQVksQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFFLENBQUMsSUFBVCxJQUFpQixPQUFPLENBQUMsRUFBMUIsQ0FBWixJQUE2QyxDQUFDLEdBQUEsS0FBTyxLQUFQLElBQWdCLEdBQUEsS0FBTyxLQUF2QixJQUFnQyxHQUFBLEtBQU8sTUFBdkMsSUFBaUQsR0FBQSxLQUFPLEtBQXpELENBQWpEO0FBRUUsTUFBQSxNQUFBLEdBQWEsSUFBQSxVQUFBLENBQUEsQ0FBYixDQUFBO0FBQUEsTUFDQSxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxLQUFELEdBQUE7QUFFZCxjQUFBLFlBQUE7QUFBQSxVQUFBLEtBQUMsQ0FBQSxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQXhCLENBQXNDLEtBQXRDLENBQTRDLENBQUMsR0FBN0MsR0FBbUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFoRSxDQUFBO0FBQUEsVUFDQSxNQUFBLEdBQVMsUUFBUSxDQUFDLFVBQVQsQ0FBb0IsS0FBQyxDQUFBLGNBQWMsQ0FBQyxPQUFwQyxFQUE2QyxJQUE3QyxDQURULENBQUE7QUFBQSxVQUVBLElBQUEsR0FBTyxLQUFDLENBQUEsWUFBWSxDQUFDLElBQWQsQ0FBQSxDQUZQLENBQUE7QUFHQSxVQUFBLElBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxnQkFBZCxDQUFIO0FBQ0UsWUFBQSxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsQ0FERjtXQUhBO0FBQUEsVUFLQSxLQUFDLENBQUEsWUFBWSxDQUFDLE1BQWQsQ0FBcUIsTUFBckIsQ0FMQSxDQUFBO2lCQU1BLEtBQUMsQ0FBQSxZQUFZLENBQUMsSUFBZCxDQUFBLENBQW9CLENBQUMsSUFBckIsQ0FBMEIsUUFBMUIsQ0FBbUMsQ0FBQyxFQUFwQyxDQUF1QyxPQUF2QyxFQUFnRCxLQUFDLENBQUEsWUFBakQsRUFSYztRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBRGhCLENBQUE7YUFXQSxNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFNLENBQUEsQ0FBQSxDQUEzQixFQWJGO0tBQUEsTUFBQTtBQWdCRSxNQUFBLElBQUMsQ0FBQSxZQUFZLENBQUMsSUFBZCxDQUFBLENBQW9CLENBQUMsTUFBckIsQ0FBQSxDQUFBLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxJQUFJLENBQUMsV0FBTixDQUFrQixJQUFDLENBQUEsSUFBSSxDQUFDLEdBQU4sQ0FBVSxFQUFWLENBQWEsQ0FBQyxLQUFkLENBQW9CLElBQXBCLENBQWxCLENBREEsQ0FBQTthQUVBLElBQUMsQ0FBQSxJQUFELEdBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksc0JBQVosRUFsQlY7S0FMYztFQUFBLENBdGhCaEIsQ0FBQTs7QUFBQSw0QkFnakJBLFNBQUEsR0FBVyxTQUFDLEtBQUQsR0FBQTtBQUNULFFBQUEsU0FBQTtBQUFBLElBQUEsR0FBQSxHQUFNLFFBQUEsQ0FBUyxJQUFDLENBQUEsR0FBRyxDQUFDLEdBQUwsQ0FBQSxDQUFVLENBQUMsSUFBWCxDQUFBLENBQVQsRUFBNEIsRUFBNUIsQ0FBTixDQUFBO0FBRUEsSUFBQSxJQUFHLEdBQUEsR0FBSSxDQUFKLElBQVMsS0FBQSxDQUFNLEdBQU4sQ0FBWjtBQUNFLE1BQUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsQ0FBVCxDQUFBLENBQUE7QUFDQSxZQUFBLENBRkY7S0FGQTtBQUFBLElBTUEsSUFBQSxHQUFPLFFBQUEsQ0FBUyxNQUFBLENBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxHQUFOLENBQUEsQ0FBQSxHQUFZLEdBQVosR0FBZ0IsQ0FBQyxRQUFBLENBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQUEsQ0FBVCxFQUFzQixFQUF0QixDQUFBLEdBQTBCLENBQTNCLENBQXZCLEVBQXNELFNBQXRELENBQWdFLENBQUMsV0FBakUsQ0FBQSxDQUFULEVBQXlGLEVBQXpGLENBTlAsQ0FBQTtBQU9BLElBQUEsSUFBRyxHQUFBLEdBQUksSUFBUDtBQUNFLE1BQUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLENBREY7S0FQQTtBQVNBLFVBQUEsQ0FUQTtBQVdBLElBQUEsSUFBRyxHQUFBLEdBQUksRUFBUDthQUNFLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFTLEVBQVQsRUFERjtLQVpTO0VBQUEsQ0FoakJYLENBQUE7O3lCQUFBOztJQURGLENBQUE7O0FBQUEsQ0Fna0JBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7U0FDWixJQUFBLGVBQUEsQ0FBQSxFQURZO0FBQUEsQ0FBbEIsQ0Foa0JBLENBQUEiLCJmaWxlIjoiUGVyc29uYWxEYXRhQWxsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uYWxEYXRhQWxsXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEB3aWRnZXQgPSAkICcucmVnaXN0cmF0aW9uLXN0ZXBzJ1xuICAgIGlmIEB3aWRnZXQubGVuZ3RoID09IDBcbiAgICAgIHRocm93IG5ldyBFcnJvcign0L3QtSDQvdCw0LnQtNC10L0g0LLQuNC00LbQtdGCJylcblxuICAgIEBzdGVwcyA9IEB3aWRnZXQuZmluZCAnLnN0ZXBzJ1xuICAgIEBwYW5lbHMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbCdcbiAgICBAY3VycmVudCA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLmN1cnJlbnQnXG5cbiAgICBAc3RlcDEgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTEnXG4gICAgQHN0ZXAyID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0yJ1xuICAgIEBzdGVwMyA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMydcbiAgICBAc3RlcDQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTQnXG4gICAgQHN0ZXA1ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC01J1xuXG4gICAgIyDQntCx0YnQtdC1XG4gICAgc2VsZWN0ID0gJCAnc2VsZWN0J1xuICAgIGlmIHNlbGVjdC5sZW5ndGggPiAwXG4gICAgICBzZWxlY3QuY2hvc2VuXG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcblxuICAgICMg0KjQsNCzIDFcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAxLmg1VmFsaWRhdGUoKVxuXG4gICAgd2luZG93LkZpbGVBUEkuZGVidWcgPSB0cnVlXG5cbiAgICAjINCX0LDQs9GA0YPQt9C60LAg0LDQstCw0YLQsNGA0LBcbiAgICB3aW5kb3cuRmlsZUFQSS5kZWJ1ZyA9IHRydWVcbiAgICBcbiAgICBAZmlsZSA9IEBzdGVwMS5maW5kICcjcmVnaXN0cmF0aW9uLWF2YXRhcidcbiAgICBAYXZhdGFyVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAnY3VycmVudC1hdmF0YXItdGVtcGxhdGUnXG4gICAgQGZpbGVTZWxlY3RvciA9IEBzdGVwMS5maW5kICcuZmlsZS1zZWxlY3RvcidcbiAgICBcbiAgICBGaWxlQVBJLmV2ZW50Lm9uIEBmaWxlWzBdLCAnY2hhbmdlJywgQGF2YXRhclNlbGVjdGVkXG4gICAgQGZpbGVTZWxlY3Rvci5kbmQgQG92ZXIsIEBkcm9wXG4gICAgRmlsZUFQSS5ldmVudC5vbiBkb2N1bWVudCwgJ2Ryb3AnLCBAZHJvcGVkXG5cbiAgICAjINCf0L7Qu9C30YPQvdC+0Log0L7Qv9GL0YLQsFxuICAgIGV4cCA9ICQgJyNleHBlcmllbmNlJ1xuICAgIGlmIGV4cC5sZW5ndGggPiAwXG4gICAgICBleHAubm9VaVNsaWRlclxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBjb25uZWN0OiBcImxvd2VyXCIsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICByYW5nZTpcbiAgICAgICAgICAnbWluJzogWzBdLFxuICAgICAgICAgICdtYXgnOiBbNTBdXG4gICAgICAgIGZvcm1hdDogd051bWJcbiAgICAgICAgICBkZWNpbWFsczogMFxuICAgICAgZXhwLkxpbmsoJ2xvd2VyJykudG8oJCgnI2V4cGVyaWVuY2UtdmFsdWUnKSlcblxuICAgICMg0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRj1xuICAgIEBtb250aCA9IEBzdGVwMS5maW5kICcubW9udGggc2VsZWN0J1xuICAgIEB5ZWFyICA9IEBzdGVwMS5maW5kICcueWVhciBzZWxlY3QnXG4gICAgQGRheSAgID0gQHN0ZXAxLmZpbmQgJ2lucHV0LmRheSdcbiAgICBAZGF5Lm9uICAgJ2NoYW5nZScsIEBjaGVja0RhdGVcbiAgICBAbW9udGgub24gJ2NoYW5nZScsIEBjaGVja0RhdGVcbiAgICBAeWVhci5vbiAgJ2NoYW5nZScsIEBjaGVja0RhdGVcblxuICAgICMg0J7RgtC/0YDQsNCy0LrQsCDQtNCw0L3QvdGL0YUg0KjQsNCzIDFcbiAgICBAc3RlcDEuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDFTdWJtaXRcblxuXG4gICAgIyDQqNCw0LMgMlxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDIuaDVWYWxpZGF0ZSgpXG5cbiAgICAjINCf0L7Qu9C30YPQvdC+0Log0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INC30LDQvdGP0YLQuNC5XG4gICAgQGR1cmF0aW9uX3ZhbHVlID0gJCgnI2R1cmF0aW9uLXZhbHVlJylcblxuICAgIHRpbWUgPSAkICcjZHVyYXRpb24nXG4gICAgaWYgdGltZS5sZW5ndGggPiAwXG4gICAgICB0aW1lLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogNSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFszMF0sXG4gICAgICAgICAgJ21heCc6IFsxODBdXG4gICAgICAgIGZvcm1hdDogd051bWJcbiAgICAgICAgICBkZWNpbWFsczogMFxuXG4gICAgICBcbiAgICAgIHRpbWUuTGluaygnbG93ZXInKS50byhAZHVyYXRpb25fdmFsdWUpXG4gICAgICB0aW1lLm9uICdjaGFuZ2UnLCAoZXZlbnQsIHVpKT0+XG4gICAgICAgICQoJ3N0cm9uZy5taW4tdGltZScpLnRleHQodWkpXG5cbiAgICAjINCk0L7RgNC80LDRgiDQt9Cw0L3Rj9GC0LjQuVxuICAgIEBmb3JtYXRzID0gQHN0ZXAyLmZpbmQgJy5sZXNzb25zLWZvcm1hdCdcbiAgICBAZm9ybWF0cy5maW5kKCdpbnB1dCcpLm9uICdjaGFuZ2UnLCBAY2hlY2tGb3JtYXRcbiAgICBAY2hlY2tGb3JtYXQoKVxuXG4gICAgIyDQlNC+0LHQsNCy0LrQsCDQv9GA0LXQtNC80LXRgtCwXG4gICAgQGFkZF9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5hZGQtc3ViamVjdCdcbiAgICBAc3Vial9jb3VudCA9IDBcbiAgICBAc3ViamVjdF9zb3VyY2UgPSAkKFwiI3N1YmotdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQHN1YmplY3Rfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NvdXJjZVxuICAgIEBhZGRfc3ViamVjdC5vbiAnY2xpY2snLCBAbmV3U3ViamVjdFxuICAgIEBhZGRfc3ViamVjdC50cmlnZ2VyICdjbGljaydcblxuICAgICMg0J/QvtC00YDQsNC30LTQtdC70Ysg0L/RgNC10LTQvNC10YLQsFxuICAgIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlID0gJChcIiNzdWJqLXNlY3Rpb24tdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2VcblxuICAgICPQo9C00LDQu9C10L3QuNC1INC/0YDQtdC00LzQtdGC0LBcbiAgICBAcmVtb3ZlX3N1YmplY3QgPSBAc3RlcDIuZmluZCAnLnJlbW92ZS1zdWJqZWN0J1xuICAgIEByZW1vdmVfc3ViamVjdC5vbiAnY2xpY2snLCBAcmVtb3ZlU3ViamVjdFxuXG4gICAgQHN0ZXAyLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXAyU3VibWl0XG4gICAgQHN0ZXAyLmZpbmQoJ2EucHJldmlvdXMnKS5vbiAnY2xpY2snLCBAc3RlcDJCYWNrXG5cblxuICAgICMg0KjQsNCzIDNcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAzLmg1VmFsaWRhdGUoKVxuXG4gICAgI9CU0L7QsdCw0LLQutCwINCw0LTRgNC10YHQsFxuICAgIEBhZGRfYWRkcmVzcyA9IEBzdGVwMy5maW5kICcuYWRkLWFkZHJlc3MnXG4gICAgQGFkZHJlc3NfY291bnQgPSAwXG4gICAgQGFkZHJlc3Nfc291cmNlID0gJChcIiNhZGRyZXNzLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBhZGRyZXNzX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAYWRkcmVzc19zb3VyY2VcbiAgICBAYWRkX2FkZHJlc3Mub24gJ2NsaWNrJywgQG5ld0FkZHJlc3NcbiAgICBAYWRkX2FkZHJlc3MudHJpZ2dlciAnY2xpY2snXG5cbiAgICAj0KPQtNCw0LvQtdC90LjQtSDQsNC00YDQtdGB0LBcbiAgICBAcmVtb3ZlX2FkZHJlc3MgPSBAc3RlcDMuZmluZCAnLnJlbW92ZS1hZGRyZXNzJ1xuICAgIEByZW1vdmVfYWRkcmVzcy5vbiAnY2xpY2snLCBAcmVtb3ZlQWRkcmVzc1xuXG4gICAgQHN0ZXAzLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXAzU3VibWl0XG4gICAgQHN0ZXAzLmZpbmQoJ2EucHJldmlvdXMnKS5vbiAnY2xpY2snLCBAc3RlcDNCYWNrXG5cblxuICAgICMg0KjQsNCzIDRcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXA0Lmg1VmFsaWRhdGUoKVxuXG4gICAgI9CU0L7QsdCw0LLQutCwINC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cbiAgICBAYWRkX2VkdWNhdGlvbiA9IEBzdGVwNC5maW5kICcuYWRkLWVkdWNhdGlvbidcbiAgICBAZWR1Y2F0aW9uX2NvdW50ID0gMFxuICAgIEBlZHVjYXRpb25fc291cmNlID0gJChcIiNlZHVjYXRpb24tdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQGVkdWNhdGlvbl9zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQGVkdWNhdGlvbl9zb3VyY2VcbiAgICBAYWRkX2VkdWNhdGlvbi5vbiAnY2xpY2snLCBAbmV3RWR1Y2F0aW9uXG4gICAgQGFkZF9lZHVjYXRpb24udHJpZ2dlciAnY2xpY2snXG5cbiAgICAj0KPQtNCw0LvQtdC90LjQtSDQvtCx0YDQsNC30L7QstCw0L3QuNGPXG4gICAgQHJlbW92ZV9lZHVjYXRpb24gPSBAc3RlcDQuZmluZCAnLnJlbW92ZS1lZHVjYXRpb24nXG4gICAgQHJlbW92ZV9lZHVjYXRpb24ub24gJ2NsaWNrJywgQHJlbW92ZUVkdWNhdGlvblxuXG4gICAgQHNlcnRpZmljYXRfc291cmNlID0gJChcIiNzZXJ0aWZpY2F0LXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzZXJ0aWZpY2F0X3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc2VydGlmaWNhdF9zb3VyY2VcbiAgICBAY2VydF9saXN0ID0gQHN0ZXA0LmZpbmQgJy5zZXJ0aWZpY2F0LWxpc3QnXG4gICAgQGNlcmlmaWNhdGVzX2NvdW50ID0gMFxuICAgIEBzZXJ0aWZpY2F0cyA9IEBzdGVwNC5maW5kICcuc2VydGlmaWNhdHMnXG4gICAgQHNlcnRpZmljYXRzLmZpbGVhcGlcbiAgICAgIHVybDogJ1wic2V4PW1hbGUmbW9udGg9MCZ5ZWFyPTIwMDAmc3RhdHVzPTAmZXhwZXJpZW5jZT0wJmV4cGVyaWVuY2U9MzAmYWRkaXRpb249b24mc3ViamVjdD0zJnNlY3Rpb249MiZzdHJlZXQlNUIlNUQ9JmhvdXNlJTVCJTVEPSZjb3JwdXMlNUIlNUQ9JmJ1aWxkaW5nJTVCJTVEPSZjb21tZW50cz0mY2l0eSU1QiU1RD0mdW5pdmVyY2l0eSU1QiU1RD0mZ3JhZC15ZWFyJTVCJTVEPSZmYWMlNUIlNUQ9JmNvbW1lbnRzJTVCJTVEPSZob21lPSZvZmZpY2U9Jm9ubGluZT0mbWVzc2FnZT0mYWRkaXRpb25hbC1pbmZvcm1hdGlvbj1cIidcbiAgICAgIGR1cGxpY2F0ZTogZmFsc2UsXG4gICAgICBhY2NlcHQ6ICdpbWFnZS8qJyxcbiAgICAgIG1heFNpemU6IDUgKiBGaWxlQVBJLk1CLFxuICAgICAgYXV0b1VwbG9hZDogZmFsc2UsXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgIGxpc3Q6ICcuc2VydGlmaWNhdC1saXN0JyxcbiAgICAgIGVsZW1lbnRzOlxuICAgICAgICBmaWxlOiBcbiAgICAgICAgICB0cGw6ICcuanMtZmlsZS10cGwnXG4gICAgICAgICAgcHJldmlldzpcbiAgICAgICAgICAgIGVsOiAnLnByZXZpZXdfX3BpYydcbiAgICAgICAgICAgIHdpZHRoOiA4MFxuICAgICAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgICBjdHJsOlxuICAgICAgICAgIHVwbG9hZDogJy5hZGQtc2VydGlmaWNhdCBsYWJlbCdcbiAgICAgIG9uU2VsZWN0OiAoZXZ0LCB1aSk9PlxuICAgICAgICBAY2VyaWZpY2F0ZXNfY291bnQrK1xuICAgICAgICAjIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgIyByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgICMgICBAY2VydF9saXN0LmFwcGVuZCBAc2VydGlmaWNhdF9zb3VyY2VcbiAgICAgICAgIyAgICAgXCJpZFwiIDogQGNlcmlmaWNhdGVzX2NvdW50XG4gICAgICAgICMgICAgIFwic3JjXCIgOiBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgICMgcmVhZGVyLnJlYWRBc0RhdGFVUkwgdWkuZmlsZXNbMF1cblxuICAgIEBzdGVwNC5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwNFN1Ym1pdFxuICAgIEBzdGVwNC5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXA0QmFja1xuXG4gIGFkZEhpbnQ6ID0+XG4gICAgbG9jYXRpb25zID0gbmV3IEJsb29kaG91bmRcbiAgICAgIGRhdHVtVG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMub2JqLndoaXRlc3BhY2UoXCJjaXR5XCIpLFxuICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgcHJlZmV0Y2g6IFwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMjA4MTA3NzIvY2l0eXMuanNvblwiXG4gICAgXG4gICAgbG9jYXRpb25zLmluaXRpYWxpemUoKVxuXG4gICAgJCgnLmNpdHknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICdsb2NhdGlvbnMnXG4gICAgICBkaXNwbGF5S2V5OiAnY2l0eScsXG4gICAgICBzb3VyY2U6IGxvY2F0aW9ucy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPjxiPnt7cmVnaW9ufX08L2I+e3tjaXR5fX08L3A+JylcblxuICAgIHVuaXZlcmNpdHlzID0gbmV3IEJsb29kaG91bmRcbiAgICAgIGRhdHVtVG9rZW5pemVyOiAoZGF0YSktPlxuICAgICAgICByZXR1cm4gQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UoZGF0YS50aXRsZSlcbiAgICAgIHF1ZXJ5VG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxcbiAgICAgIGxvY2FsOiBbe1widGl0bGVcIjpcIkFuZG9ycmFcIn0se1widGl0bGVcIjpcIlVuaXRlZEFyYWJFbWlyYXRlc1wifSx7XCJ0aXRsZVwiOlwiQWZnaGFuaXN0YW5cIn0se1widGl0bGVcIjpcIkFudGlndWFhbmRCYXJidWRhXCJ9LHtcInRpdGxlXCI6XCJBbmd1aWxsYVwifSx7XCJ0aXRsZVwiOlwiQWxiYW5pYVwifSx7XCJ0aXRsZVwiOlwiQXJtZW5pYVwifSx7XCJ0aXRsZVwiOlwiQW5nb2xhXCJ9LHtcInRpdGxlXCI6XCJBbnRhcmN0aWNhXCJ9XVxuXG4gICAgdW5pdmVyY2l0eXMuaW5pdGlhbGl6ZSgpXG5cbiAgICAkKCcudW5pdmVyY2l0eTpub3QoLnR0LWlucHV0KScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ3VuaXZlcmNpdHlzJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuICAgICQoJy5mYWN1bHR5Om5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgJCgnLnNwZWNpYWxpemF0aW9uOm5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0YHQv9C40YHQutCwINGA0LDQt9C00LXQu9C+0LIg0LTQu9GPINC/0YDQtdC00LzQtdGC0LBcbiAgZ2V0U2VjdGlvbnM6IChpZCk9PlxuICAgIGNoYXB0ZXJzID0gWyfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQuNC5INCw0L3QsNC70LjQtycraWQsJ9GC0LXQvtGA0LjRjyDQstC10YDQvtGP0YLQvdC+0YHRgtC10LknK2lkLCfRgtC10L7RgNC10YLQuNGH0LXRgdC60LDRjyDQvNC10YXQsNC90LjQutCwJytpZCwn0YHQvtC/0YDQvtC80LDRgicraWQsJ9C80LDRgtC10LzQsNGC0Lgg0LvQvtCz0LjQutCwJytpZCwn0Y3QutC+0L3QvtC80LXRgtGA0LjQutCwJytpZCwn0LLRi9GB0YjQsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0LvQuNC90LXQudC90LDRjyDQsNC70LPQtdCx0YDQsCcraWQsJ9C00LjRhNGE0LXRgNC10L3RhtC40LDQu9GM0L3QsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9Cw0L3QsNC70LjRgtC40YfQtdGB0LrQsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutCw0Y8g0YTQuNC30LjQutCwJytpZCwn0LTQuNGE0YTQtdGA0LXQvdGG0LjQsNC70YzQvdGL0LUg0YPRgNCw0LLQvdC10L3QuNGPJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsCcraWQsJ9C70LjQvdC10LnQvdCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LTQuNGB0LrRgNC10YLQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtC+0L/QvtC70L7Qs9C40Y8nK2lkLCfRhNGD0L3QutGG0LjQvtC90LDQu9GM0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9C40L3RgtC10LPRgNCw0LvRjNC90YvQtSDRg9GA0LDQstC90LXQvdC40Y8nK2lkLCfRgtC10L7RgNC40Y8g0YfQuNGB0LXQuycraWQsJ9Cy0LXQutGC0L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfQotCk0JrQnycraWQsJ9GC0LXQvdC30L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfRhNC40L3QsNC90YHQvtCy0LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQsiDRh9Cw0YHRgtC90YvRhSDQv9GA0L7QuNC30LLQvtC00L3Ri9GFJytpZCwn0LDQutGC0YPQsNGA0L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLQtdC+0YDQuNGPINCz0YDQsNGE0L7QsicraWQsJ9C60L7QvNCx0LjQvdCw0YLQvtGA0LjQutCwJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQtSDQvNC+0LTQtdC70LgnK2lkLCfQv9GA0LjQutC70LDQtNC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0YDQuNCz0L7QvdC+0Lwt0LjRjycraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQvtC5INGE0LjQt9C40LrQuCcraWQsJ9GH0LjRgdC70LXQvdC90YvQtSDQvNC10YLQvtC00YsnK2lkLCfRgtC10L7RgNC40Y8g0L/RgNC40LHQu9C40LbQtdC90LjQuScraWQsJ9GC0LXQvtGA0LjRjyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4JytpZCwnLtGI0LrQvtC70YzQvdGL0Lkg0LrRg9GA0YEnK2lkLCfQvdCwINCw0L3Qs9C70LjQudGB0LrQvtC8INGP0LfRi9C60LUnK2lkLCfQsNC70LPQtdCx0YDQsCDQu9C+0LPQuNC60LgnK2lkLCfQstGL0YfQuNGB0LvQuNC80YvQtSDRhNGD0L3QutGG0LjQuCcraWQsJ9GC0LXQvtGA0LjRjyDQuNCz0YAnK2lkLCfQstCw0YDQuNCw0YbQuNC+0L3QvdC+0LUg0LjRgdGH0LjRgdC70LXQvdC40LUnK2lkLCfQvtC/0YLQuNC80LDQu9GM0L3QvtC1INGD0L/RgNCw0LLQu9C10L3QuNC1JytpZCwn0LzQtdGC0L7QtNGLINC+0L/RgtC40LzQuNC30LDRhtC40LgnK2lkLCfQu9C40L3QtdC50L3QvtC1INC/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC1JytpZCwn0LDQu9Cz0LXQsdGA0LAnK2lkLCfQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQvNC10YLQvtC00Ysg0L7Qv9GC0LjQvNCw0LvRjNC90YvRhSDRgNC10YjQtdC90LjQuScraWRdXG4gICAgc2VjdGlvbnMgPSBuZXcgQXJyYXlcbiAgICBzZWN0aW9uID0gbmV3IE9iamVjdFxuICAgIGlkID0gMFxuICAgIGZvciBjaGFwdGVyIGluIGNoYXB0ZXJzXG4gICAgICBzZWN0aW9uID0ge1xuICAgICAgICBpZCA6IGlkXG4gICAgICAgIHRpdGxlIDogY2hhcHRlclxuICAgICAgfVxuICAgICAgc2VjdGlvbnMucHVzaCBzZWN0aW9uXG4gICAgICBpZCsrXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQvtC/0L7Qu9C90LXQvdC40Lkg0LTQu9GPINGA0LDQt9C00LXQu9CwXG4gIGdldFN1YlNlY3Rpb25zOiAoaWQpPT5cbiAgICBjaGFwdGVycyA9IFsn0J7Qk9CtICjQk9CY0JApJytpZCwn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0L7Qu9C40LzQv9C40LDQtNCw0LwnK2lkLCfQn9C+0LTQs9C+0YLQvtCy0LrQsCDQuiDRjdC60LfQsNC80LXQvdCw0LwnK2lkXVxuICAgIHNlY3Rpb25zID0gbmV3IEFycmF5XG4gICAgc2VjdGlvbiA9IG5ldyBPYmplY3RcbiAgICBpZCA9IDBcbiAgICBmb3IgY2hhcHRlciBpbiBjaGFwdGVyc1xuICAgICAgc2VjdGlvbiA9IHtcbiAgICAgICAgaWQgOiBpZFxuICAgICAgICB0aXRsZSA6IGNoYXB0ZXJcbiAgICAgIH1cbiAgICAgIHNlY3Rpb25zLnB1c2ggc2VjdGlvblxuICAgICAgaWQrK1xuICAgIHJldHVybiBzZWN0aW9uc1xuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIG5ld0VkdWNhdGlvbjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfZWR1Y2F0aW9uLnBhcmVudCgpLmJlZm9yZSBAZWR1Y2F0aW9uX3NvdXJjZSh7J2luZGV4JyA6IEBlZHVjYXRpb25fY291bnR9KVxuICAgIEBlZHVjYXRpb25fY291bnQrK1xuICAgIEBzdGVwNC5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGlmIEBlZHVjYXRpb25fY291bnQ+MVxuICAgICAgQHJlbW92ZV9lZHVjYXRpb24uc2hvdygpXG5cbiAgICAjINCQ0LLRgtC+0LfQsNC/0L7Qu9C90LXQvdC40LUg0LTQu9GPINCy0YvQsdC+0YDQsCDQs9C+0YDQvtC00LAg0Lgg0LLRg9C30LBcbiAgICBAYWRkSGludCgpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIHJlbW92ZUVkdWNhdGlvbjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBlZHVjYXRpb25fY291bnQtLVxuICAgICQoJy5lZHVjYXRpb24td3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAZWR1Y2F0aW9uX2NvdW50PDJcbiAgICAgIEByZW1vdmVfZWR1Y2F0aW9uLmhpZGUoKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiA0INC6IDUg0YjQsNCz0YNcbiAgc3RlcDRTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDQuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwNC5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgICAjINCe0YLQv9GA0LDQstC60LAg0L3QsCDRgdC10YDQstC10YBcbiAgICBjb25zb2xlLmxvZyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCQoJy5wYW5lbCA6aW5wdXQnKS5zZXJpYWxpemVBcnJheSgpKSlcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgNCDQuiAzINGI0LDQs9GDXG4gIHN0ZXA0QmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMyDQuiA0INGI0LDQs9GDXG4gIHN0ZXAzU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAzLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDMuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMyDQuiAyINGI0LDQs9GDXG4gIHN0ZXAzQmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQsNC00YDQtdGBXG4gIG5ld0FkZHJlc3M6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX2FkZHJlc3MucGFyZW50KCkuYmVmb3JlIEBhZGRyZXNzX3NvdXJjZSh7J2luZGV4JyA6IEBhZGRyZXNzX2NvdW50fSlcbiAgICBAYWRkcmVzc19jb3VudCsrXG4gICAgQHN0ZXAzLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGFkZHJlc3NfY291bnQ+MVxuICAgICAgQHJlbW92ZV9hZGRyZXNzLnNob3coKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICByZW1vdmVBZGRyZXNzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZHJlc3NfY291bnQtLVxuICAgICQoJy5hZHJlc3Mtd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAYWRkcmVzc19jb3VudDwyXG4gICAgICBAcmVtb3ZlX2FkZHJlc3MuaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDIg0LogMyDRiNCw0LPRg1xuICBzdGVwMlN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMi5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAyLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDIg0LogMSDRiNCw0LPRg1xuICBzdGVwMkJhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCR0LvQvtC60LjRgNC+0LLQsNGC0Ywg0YbQtdC90Ysg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9GFINGE0L7RgNC80LDRgtC+0LIg0LfQsNC90Y/RgtC40LlcbiAgY2hlY2tGb3JtYXQ6ID0+XG4gICAgaW5wdXRzID0gQGZvcm1hdHMuZmluZCAnaW5wdXQnXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgZWxlbWVudHMgPSBAc3RlcDIuZmluZCgnaW5wdXQuJytpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UtZmllbGQnKSlcbiAgICAgIGZvciBlbGVtZW50IGluIGVsZW1lbnRzXG4gICAgICAgIHByaWNlID0gJChlbGVtZW50KS5jbG9zZXN0KCcuc3ViZGV2aXNpb24nKVxuICAgICAgICBpZiBpbnB1dC5jaGVja2VkXG4gICAgICAgICAgcHJpY2UucmVtb3ZlQ2xhc3MoJ2hpZGUnKVxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHByaWNlLmFkZENsYXNzKCdoaWRlJylcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3VpLXN0YXRlLWVycm9yJylcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgc3ViamVjdFNlbGVjdGVkOiAoZXZlbnQpPT5cbiAgICBzZWxlY3QgPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICBzZWxlY3QucmVtb3ZlQ2xhc3MgJ3VuY2hhbmdlZCdcbiAgICBpZCA9IHNlbGVjdC52YWwoKVxuXG4gICAgbGluZSA9IHNlbGVjdC5wYXJlbnRzKCcubGluZScpXG4gICAgXG4gICAgc3Vic2VjdGlvbnMgPSBAZ2V0U3ViU2VjdGlvbnMoaWQpXG4gICAgaGFsZl9sZW5ndGggPSBNYXRoLmNlaWwoc3Vic2VjdGlvbnMubGVuZ3RoIC8gMilcbiAgICBsZWZ0U2lkZSA9IHN1YnNlY3Rpb25zLnNwbGljZSgwLGhhbGZfbGVuZ3RoKVxuXG4gICAgc2VjdGlvbnMgPSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSh7XG4gICAgICBpbmRleCA6IEBzdWJqX2NvdW50XG4gICAgICBzZWN0aW9uIDogQGdldFNlY3Rpb25zKGlkKVxuICAgICAgY29sdW1uMSA6IGxlZnRTaWRlXG4gICAgICBjb2x1bW4yIDogc3Vic2VjdGlvbnNcbiAgICAgIH0pXG5cbiAgICBuZXh0ID0gbGluZS5uZXh0KClcbiAgICBpZiBuZXh0Lmhhc0NsYXNzKCdzZWN0aW9uJylcbiAgICAgIG5leHQucmVwbGFjZVdpdGggc2VjdGlvbnNcbiAgICBlbHNlXG4gICAgICBsaW5lLmFmdGVyIHNlY3Rpb25zXG4gICAgXG4gICAgQHN0ZXAyLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgZm9yIGVsZW1lbnQgaW4gQHN0ZXAyLmZpbmQoJy5kcm9wZG93bi1jb250YWluZXItd2lkZ2V0JylcbiAgICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcblxuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C5INC/0YDQtdC00LzQtdGCXG4gIG5ld1N1YmplY3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX3N1YmplY3QucGFyZW50KCkuYmVmb3JlIEBzdWJqZWN0X3NvdXJjZSh7J2luZGV4JyA6IEBzdWJqX2NvdW50fSlcbiAgICBAc3Vial9jb3VudCsrXG4gICAgXG4gICAgd3JhcHBlciA9IEBhZGRfc3ViamVjdC5wYXJlbnQoKS5wcmV2KClcbiAgICB3cmFwcGVyLmZpbmQoJ3NlbGVjdCcpLm9uICdjaGFuZ2UnLCBAc3ViamVjdFNlbGVjdGVkXG5cbiAgICBAc3RlcDIuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBAc3RlcDIuZmluZCgnLm1pbi10aW1lJykudGV4dCBAZHVyYXRpb25fdmFsdWUudmFsKClcbiAgICBAY2hlY2tGb3JtYXQoKVxuICAgIGZvciBlbGVtZW50IGluIEBzdGVwMi5maW5kKCcuZHJvcGRvd24tY29udGFpbmVyLXdpZGdldCcpXG4gICAgICBuZXcgRHJvcGRvd25XaWRnZXRDb250cm9sbGVyKCQoZWxlbWVudCkpXG4gICAgXG4gICAgaWYgQHN1YmpfY291bnQ+MVxuICAgICAgQHJlbW92ZV9zdWJqZWN0LnNob3coKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L/RgNC10LTQvNC10YJcbiAgcmVtb3ZlU3ViamVjdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdWJqX2NvdW50LS1cbiAgICAkKCcuc3Viai13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBzdWJqX2NvdW50PDJcbiAgICAgIEByZW1vdmVfc3ViamVjdC5oaWRlKClcblxuICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQsdC70L7QutC+0LIg0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjFxuICB2YWxpZGF0ZTogKGlucHV0KT0+XG5cbiAgICBpZiBpbnB1dC5oYXNBdHRyaWJ1dGUgJ2RhdGEtaDUtZXJyb3JpZCdcbiAgICAgIGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWg1LWVycm9yaWQnKVxuXG4gICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpXG4gICAgICBpZiBpbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID09IDBcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCAndWktc3RhdGUtZXJyb3InXG5cbiAgICBpZiBpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMgJ3VpLXN0YXRlLWVycm9yJ1xuICAgICAgaWYgZXJyb3JcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIGVsc2VcbiAgICAgIGlmIGVycm9yXG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIHJldHVybiB0cnVlXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQutC+INCy0YLQvtGA0L7QvNGDINGI0LDQs9GDINGA0LXQs9C40YHRgtGA0LDRhtC40LhcbiAgc3RlcDFTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDEuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMS5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG5cbiAgIyDQqNCw0LMgMVxuICAjINCQ0LLQsNGC0LDRgFxuICBkcm9wZWQ6IChldmVudCktPlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBGaWxlQVBJLmdldERyb3BGaWxlcyBldmVudCwgKGZpbGVzKS0+XG5cbiAgIyDQv9C+0LTQstC10LvQuCDQutGD0YDRgdC+0YAg0Log0LHQu9C+0LrRgyDQtNGA0L7Qv9CwINCw0LLQsNGC0LDRgNC60LhcbiAgb3ZlcjogKG92ZXIpLT5cblxuICAjINCx0YDQvtGB0LjQu9C4INCw0LLQsNGC0LDRgNC60YNcbiAgZHJvcDogKGZpbGVzKT0+XG4gICAgY29uc29sZS5sb2cgIGZpbGVzXG4gICAgaWYgZmlsZXMubGVuZ3RoXG4gICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICBcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpPT5cbiAgICAgICAgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICBhdmF0YXIgPSBkb2N1bWVudC5pbXBvcnROb2RlIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LCB0cnVlXG4gICAgICAgIHByZXYgPSBAZmlsZVNlbGVjdG9yLnByZXYoKVxuICAgICAgICBpZiBwcmV2Lmhhc0NsYXNzKCdjdXJyZW50LWF2YXRhcicpXG4gICAgICAgICAgcHJldi5yZW1vdmUoKVxuICAgICAgICBAZmlsZVNlbGVjdG9yLmJlZm9yZSBhdmF0YXJcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkuZmluZCgnLmNsb3NlJykub24gJ2NsaWNrJywgQHJlbW92ZUF2YXRhclxuICAgICAgXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCBmaWxlc1swXVxuXG4gICMg0KPQtNCw0LvQuNC70Lgg0LDQstCw0YLRgNCw0LrRg1xuICByZW1vdmVBdmF0YXI6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAZmlsZVNlbGVjdG9yLnByZXYoKS5yZW1vdmUoKVxuICAgIEBmaWxlLnJlcGxhY2VXaXRoIEBmaWxlLnZhbCgnJykuY2xvbmUodHJ1ZSlcbiAgICBAZmlsZSA9IEBzdGVwMS5maW5kICcjcmVnaXN0cmF0aW9uLWF2YXRhcidcblxuICAjINCS0YvQsdGA0LDQu9C4INCw0LLQsNGC0LDRgNC60YNcbiAgYXZhdGFyU2VsZWN0ZWQ6IChldmVudCk9PlxuICAgIGZpbGVzID0gRmlsZUFQSS5nZXRGaWxlcyhldmVudClcblxuICAgIGV4dCA9IGZpbGVzWzBdWyduYW1lJ10uc3Vic3RyaW5nKGZpbGVzWzBdWyduYW1lJ10ubGFzdEluZGV4T2YoJy4nKSArIDEpLnRvTG93ZXJDYXNlKClcblxuICAgIGlmIChmaWxlc1swXSAmJiAoZmlsZXNbMF0uc2l6ZSA8PSBGaWxlQVBJLk1CKSAmJiAoZXh0ID09IFwiZ2lmXCIgfHwgZXh0ID09IFwicG5nXCIgfHwgZXh0ID09IFwianBlZ1wiIHx8IGV4dCA9PSBcImpwZ1wiKSlcbiAgICAgICAgXG4gICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgIFxuICAgICAgICBAYXZhdGFyVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgIGF2YXRhciA9IGRvY3VtZW50LmltcG9ydE5vZGUgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQsIHRydWVcbiAgICAgICAgcHJldiA9IEBmaWxlU2VsZWN0b3IucHJldigpXG4gICAgICAgIGlmIHByZXYuaGFzQ2xhc3MoJ2N1cnJlbnQtYXZhdGFyJylcbiAgICAgICAgICBwcmV2LnJlbW92ZSgpXG4gICAgICAgIEBmaWxlU2VsZWN0b3IuYmVmb3JlIGF2YXRhclxuICAgICAgICBAZmlsZVNlbGVjdG9yLnByZXYoKS5maW5kKCcuY2xvc2UnKS5vbiAnY2xpY2snLCBAcmVtb3ZlQXZhdGFyXG5cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMIGZpbGVzWzBdXG5cbiAgICBlbHNlXG4gICAgICBAZmlsZVNlbGVjdG9yLnByZXYoKS5yZW1vdmUoKVxuICAgICAgQGZpbGUucmVwbGFjZVdpdGggQGZpbGUudmFsKCcnKS5jbG9uZSh0cnVlKVxuICAgICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG5cbiAgIyDQn9GA0L7QstC10YDRj9C10Lwg0LzQvtC20LXRgiDQu9C4INGB0YPRidC10YHRgtCy0L7QstCw0YLRjCDRg9C60LDQt9Cw0L3QvdCw0Y8g0LTQsNGC0LAsINC90LDQv9GA0LjQvNC10YAgMzEg0YTQtdCy0YDQsNC70Y8g0Lgg0LjRgdC/0YDQsNCy0LvRj9C10Lwg0LIg0YHQu9GD0YfQsNC1INC+0YjQuNCx0LrQuFxuICBjaGVja0RhdGU6IChldmVudCk9PlxuICAgIGRheSA9IHBhcnNlSW50IEBkYXkudmFsKCkudHJpbSgpLCAxMFxuICAgIFxuICAgIGlmIGRheTwxIHx8IGlzTmFOKGRheSlcbiAgICAgIEBkYXkudmFsIDFcbiAgICAgIHJldHVyblxuXG4gICAgZGF5cyA9IHBhcnNlSW50IG1vbWVudChAeWVhci52YWwoKStcIi1cIisocGFyc2VJbnQoQG1vbnRoLnZhbCgpLDEwKSsxKSwgXCJZWVlZLU1NXCIpLmRheXNJbk1vbnRoKCksIDEwXG4gICAgaWYgZGF5PmRheXNcbiAgICAgIEBkYXkudmFsIGRheXNcbiAgICByZXR1cm5cblxuICAgIGlmIGRheT4zMVxuICAgICAgQGRheS52YWwgMzFcblxuJChkb2N1bWVudCkucmVhZHkgLT5cbiAgbmV3IFBlcnNvbmFsRGF0YUFsbCgpXG5cblxuIl19