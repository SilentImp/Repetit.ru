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
      url: 'http://test.silentimp.info/Repetit.ru/test.php',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2REFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsNkNBQUEsQ0FBQTtBQUFBLFFBQUEsaUJBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBQSxDQUFFLHFCQUFGLENBQVYsQ0FBQTtBQUNBLElBQUEsSUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsQ0FBckI7QUFDRSxZQUFVLElBQUEsS0FBQSxDQUFNLGtCQUFOLENBQVYsQ0FERjtLQURBO0FBQUEsSUFJQSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FKVCxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FMVixDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLGdCQUFiLENBTlgsQ0FBQTtBQUFBLElBUUEs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OztBQUFBLENBMGpCQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO1NBQ1osSUFBQSxlQUFBLENBQUEsRUFEWTtBQUFBLENBQWxCLENBMWpCQSxDQUFBIiwiZmlsZSI6IlBlcnNvbmFsRGF0YUFsbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBlcnNvbmFsRGF0YUFsbFxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAd2lkZ2V0ID0gJCAnLnJlZ2lzdHJhdGlvbi1zdGVwcydcbiAgICBpZiBAd2lkZ2V0Lmxlbmd0aCA9PSAwXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9C90LUg0L3QsNC50LTQtdC9INCy0LjQtNC20LXRgicpXG5cbiAgICBAc3RlcHMgPSBAd2lkZ2V0LmZpbmQgJy5zdGVwcydcbiAgICBAcGFuZWxzID0gQHdpZGdldC5maW5kICcucGFuZWwnXG4gICAgQGN1cnJlbnQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5jdXJyZW50J1xuXG4gICAgQHN0ZXAxID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0xJ1xuICAgIEBzdGVwMiA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMidcbiAgICBAc3RlcDMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTMnXG4gICAgQHN0ZXA0ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC00J1xuICAgIEBzdGVwNSA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtNSdcblxuICAgICMg0J7QsdGJ0LXQtVxuICAgIHNlbGVjdCA9ICQgJ3NlbGVjdCdcbiAgICBpZiBzZWxlY3QubGVuZ3RoID4gMFxuICAgICAgc2VsZWN0LmNob3NlblxuICAgICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG5cbiAgICAjINCo0LDQsyAxXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMS5oNVZhbGlkYXRlKClcblxuICAgICMg0JfQsNCz0YDRg9C30LrQsCDQsNCy0LDRgtCw0YDQsFxuICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuICAgIEBhdmF0YXJUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICdjdXJyZW50LWF2YXRhci10ZW1wbGF0ZSdcbiAgICBAZmlsZVNlbGVjdG9yID0gQHN0ZXAxLmZpbmQgJy5maWxlLXNlbGVjdG9yJ1xuICAgIFxuICAgIEZpbGVBUEkuZXZlbnQub24gQGZpbGVbMF0sICdjaGFuZ2UnLCBAYXZhdGFyU2VsZWN0ZWRcbiAgICBAZmlsZVNlbGVjdG9yLmRuZCBAb3ZlciwgQGRyb3BcbiAgICBGaWxlQVBJLmV2ZW50Lm9uIGRvY3VtZW50LCAnZHJvcCcsIEBkcm9wZWRcblxuICAgICMg0J/QvtC70LfRg9C90L7QuiDQvtC/0YvRgtCwXG4gICAgZXhwID0gJCAnI2V4cGVyaWVuY2UnXG4gICAgaWYgZXhwLmxlbmd0aCA+IDBcbiAgICAgIGV4cC5ub1VpU2xpZGVyXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIGNvbm5lY3Q6IFwibG93ZXJcIixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHJhbmdlOlxuICAgICAgICAgICdtaW4nOiBbMF0sXG4gICAgICAgICAgJ21heCc6IFs1MF1cbiAgICAgICAgZm9ybWF0OiB3TnVtYlxuICAgICAgICAgIGRlY2ltYWxzOiAwXG4gICAgICBleHAuTGluaygnbG93ZXInKS50bygkKCcjZXhwZXJpZW5jZS12YWx1ZScpKVxuXG4gICAgIyDQlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPXG4gICAgQG1vbnRoID0gQHN0ZXAxLmZpbmQgJy5tb250aCBzZWxlY3QnXG4gICAgQHllYXIgID0gQHN0ZXAxLmZpbmQgJy55ZWFyIHNlbGVjdCdcbiAgICBAZGF5ICAgPSBAc3RlcDEuZmluZCAnaW5wdXQuZGF5J1xuICAgIEBkYXkub24gICAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuICAgIEBtb250aC5vbiAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuICAgIEB5ZWFyLm9uICAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuXG4gICAgIyDQntGC0L/RgNCw0LLQutCwINC00LDQvdC90YvRhSDQqNCw0LMgMVxuICAgIEBzdGVwMS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMVN1Ym1pdFxuXG5cbiAgICAjINCo0LDQsyAyXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMi5oNVZhbGlkYXRlKClcblxuICAgICMg0J/QvtC70LfRg9C90L7QuiDQtNC70LjRgtC10LvRjNC90L7RgdGC0Lgg0LfQsNC90Y/RgtC40LlcbiAgICBAZHVyYXRpb25fdmFsdWUgPSAkKCcjZHVyYXRpb24tdmFsdWUnKVxuXG4gICAgdGltZSA9ICQgJyNkdXJhdGlvbidcbiAgICBpZiB0aW1lLmxlbmd0aCA+IDBcbiAgICAgIHRpbWUubm9VaVNsaWRlclxuICAgICAgICBzdGVwOiA1LFxuICAgICAgICBjb25uZWN0OiBcImxvd2VyXCIsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICByYW5nZTpcbiAgICAgICAgICAnbWluJzogWzMwXSxcbiAgICAgICAgICAnbWF4JzogWzE4MF1cbiAgICAgICAgZm9ybWF0OiB3TnVtYlxuICAgICAgICAgIGRlY2ltYWxzOiAwXG5cbiAgICAgIFxuICAgICAgdGltZS5MaW5rKCdsb3dlcicpLnRvKEBkdXJhdGlvbl92YWx1ZSlcbiAgICAgIHRpbWUub24gJ2NoYW5nZScsIChldmVudCwgdWkpPT5cbiAgICAgICAgJCgnc3Ryb25nLm1pbi10aW1lJykudGV4dCh1aSlcblxuICAgICMg0KTQvtGA0LzQsNGCINC30LDQvdGP0YLQuNC5XG4gICAgQGZvcm1hdHMgPSBAc3RlcDIuZmluZCAnLmxlc3NvbnMtZm9ybWF0J1xuICAgIEBmb3JtYXRzLmZpbmQoJ2lucHV0Jykub24gJ2NoYW5nZScsIEBjaGVja0Zvcm1hdFxuICAgIEBjaGVja0Zvcm1hdCgpXG5cbiAgICAjINCU0L7QsdCw0LLQutCwINC/0YDQtdC00LzQtdGC0LBcbiAgICBAYWRkX3N1YmplY3QgPSBAc3RlcDIuZmluZCAnLmFkZC1zdWJqZWN0J1xuICAgIEBzdWJqX2NvdW50ID0gMFxuICAgIEBzdWJqZWN0X3NvdXJjZSA9ICQoXCIjc3Viai10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc3ViamVjdF9zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQHN1YmplY3Rfc291cmNlXG4gICAgQGFkZF9zdWJqZWN0Lm9uICdjbGljaycsIEBuZXdTdWJqZWN0XG4gICAgQGFkZF9zdWJqZWN0LnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgIyDQn9C+0LTRgNCw0LfQtNC10LvRiyDQv9GA0LXQtNC80LXRgtCwXG4gICAgQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2UgPSAkKFwiI3N1Ymotc2VjdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZVxuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L/RgNC10LTQvNC10YLQsFxuICAgIEByZW1vdmVfc3ViamVjdCA9IEBzdGVwMi5maW5kICcucmVtb3ZlLXN1YmplY3QnXG4gICAgQHJlbW92ZV9zdWJqZWN0Lm9uICdjbGljaycsIEByZW1vdmVTdWJqZWN0XG5cbiAgICBAc3RlcDIuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDJTdWJtaXRcbiAgICBAc3RlcDIuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwMkJhY2tcblxuXG4gICAgIyDQqNCw0LMgM1xuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDMuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0LDQtNGA0LXRgdCwXG4gICAgQGFkZF9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5hZGQtYWRkcmVzcydcbiAgICBAYWRkcmVzc19jb3VudCA9IDBcbiAgICBAYWRkcmVzc19zb3VyY2UgPSAkKFwiI2FkZHJlc3MtdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQGFkZHJlc3Nfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBhZGRyZXNzX3NvdXJjZVxuICAgIEBhZGRfYWRkcmVzcy5vbiAnY2xpY2snLCBAbmV3QWRkcmVzc1xuICAgIEBhZGRfYWRkcmVzcy50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INCw0LTRgNC10YHQsFxuICAgIEByZW1vdmVfYWRkcmVzcyA9IEBzdGVwMy5maW5kICcucmVtb3ZlLWFkZHJlc3MnXG4gICAgQHJlbW92ZV9hZGRyZXNzLm9uICdjbGljaycsIEByZW1vdmVBZGRyZXNzXG5cbiAgICBAc3RlcDMuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDNTdWJtaXRcbiAgICBAc3RlcDMuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwM0JhY2tcblxuXG4gICAgIyDQqNCw0LMgNFxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDQuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEBhZGRfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5hZGQtZWR1Y2F0aW9uJ1xuICAgIEBlZHVjYXRpb25fY291bnQgPSAwXG4gICAgQGVkdWNhdGlvbl9zb3VyY2UgPSAkKFwiI2VkdWNhdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAZWR1Y2F0aW9uX3NvdXJjZVxuICAgIEBhZGRfZWR1Y2F0aW9uLm9uICdjbGljaycsIEBuZXdFZHVjYXRpb25cbiAgICBAYWRkX2VkdWNhdGlvbi50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cbiAgICBAcmVtb3ZlX2VkdWNhdGlvbiA9IEBzdGVwNC5maW5kICcucmVtb3ZlLWVkdWNhdGlvbidcbiAgICBAcmVtb3ZlX2VkdWNhdGlvbi5vbiAnY2xpY2snLCBAcmVtb3ZlRWR1Y2F0aW9uXG5cbiAgICBAc2VydGlmaWNhdF9zb3VyY2UgPSAkKFwiI3NlcnRpZmljYXQtdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQHNlcnRpZmljYXRfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzZXJ0aWZpY2F0X3NvdXJjZVxuICAgIEBjZXJ0X2xpc3QgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXQtbGlzdCdcbiAgICBAY2VyaWZpY2F0ZXNfY291bnQgPSAwXG4gICAgQHNlcnRpZmljYXRzID0gQHN0ZXA0LmZpbmQgJy5zZXJ0aWZpY2F0cydcbiAgICBAc2VydGlmaWNhdHMuZmlsZWFwaVxuICAgICAgdXJsOiAnaHR0cDovL3Rlc3Quc2lsZW50aW1wLmluZm8vUmVwZXRpdC5ydS90ZXN0LnBocCdcbiAgICAgIGR1cGxpY2F0ZTogZmFsc2UsXG4gICAgICBhY2NlcHQ6ICdpbWFnZS8qJyxcbiAgICAgIG1heFNpemU6IDUgKiBGaWxlQVBJLk1CLFxuICAgICAgYXV0b1VwbG9hZDogZmFsc2UsXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgIGxpc3Q6ICcuc2VydGlmaWNhdC1saXN0JyxcbiAgICAgIGVsZW1lbnRzOlxuICAgICAgICBmaWxlOiBcbiAgICAgICAgICB0cGw6ICcuanMtZmlsZS10cGwnXG4gICAgICAgICAgcHJldmlldzpcbiAgICAgICAgICAgIGVsOiAnLnByZXZpZXdfX3BpYydcbiAgICAgICAgICAgIHdpZHRoOiA4MFxuICAgICAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgb25TZWxlY3Q6IChldnQsIHVpKT0+XG4gICAgICAgIEBjZXJpZmljYXRlc19jb3VudCsrXG4gICAgICAgICMgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICAjIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpPT5cbiAgICAgICAgIyAgIEBjZXJ0X2xpc3QuYXBwZW5kIEBzZXJ0aWZpY2F0X3NvdXJjZVxuICAgICAgICAjICAgICBcImlkXCIgOiBAY2VyaWZpY2F0ZXNfY291bnRcbiAgICAgICAgIyAgICAgXCJzcmNcIiA6IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgIyByZWFkZXIucmVhZEFzRGF0YVVSTCB1aS5maWxlc1swXVxuXG4gICAgQHN0ZXA0LmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXA0U3VibWl0XG4gICAgQHN0ZXA0LmZpbmQoJ2EucHJldmlvdXMnKS5vbiAnY2xpY2snLCBAc3RlcDRCYWNrXG5cbiAgYWRkSGludDogPT5cbiAgICBsb2NhdGlvbnMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy5vYmoud2hpdGVzcGFjZShcImNpdHlcIiksXG4gICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICBwcmVmZXRjaDogXCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8yMDgxMDc3Mi9jaXR5cy5qc29uXCJcbiAgICBcbiAgICBsb2NhdGlvbnMuaW5pdGlhbGl6ZSgpXG5cbiAgICAkKCcuY2l0eScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ2xvY2F0aW9ucydcbiAgICAgIGRpc3BsYXlLZXk6ICdjaXR5JyxcbiAgICAgIHNvdXJjZTogbG9jYXRpb25zLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+PGI+e3tyZWdpb259fTwvYj57e2NpdHl9fTwvcD4nKVxuXG4gICAgdW5pdmVyY2l0eXMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IChkYXRhKS0+XG4gICAgICAgIHJldHVybiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZShkYXRhLnRpdGxlKVxuICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgbG9jYWw6IFt7XCJ0aXRsZVwiOlwiQW5kb3JyYVwifSx7XCJ0aXRsZVwiOlwiVW5pdGVkQXJhYkVtaXJhdGVzXCJ9LHtcInRpdGxlXCI6XCJBZmdoYW5pc3RhblwifSx7XCJ0aXRsZVwiOlwiQW50aWd1YWFuZEJhcmJ1ZGFcIn0se1widGl0bGVcIjpcIkFuZ3VpbGxhXCJ9LHtcInRpdGxlXCI6XCJBbGJhbmlhXCJ9LHtcInRpdGxlXCI6XCJBcm1lbmlhXCJ9LHtcInRpdGxlXCI6XCJBbmdvbGFcIn0se1widGl0bGVcIjpcIkFudGFyY3RpY2FcIn1dXG5cbiAgICB1bml2ZXJjaXR5cy5pbml0aWFsaXplKClcblxuICAgICQoJy51bml2ZXJjaXR5Om5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgJCgnLmZhY3VsdHk6bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICAkKCcuc3BlY2lhbGl6YXRpb246bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0YDQsNC30LTQtdC70L7QsiDQtNC70Y8g0L/RgNC10LTQvNC10YLQsFxuICBnZXRTZWN0aW9uczogKGlkKT0+XG4gICAgY2hhcHRlcnMgPSBbJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutC40Lkg0LDQvdCw0LvQuNC3JytpZCwn0YLQtdC+0YDQuNGPINCy0LXRgNC+0Y/RgtC90L7RgdGC0LXQuScraWQsJ9GC0LXQvtGA0LXRgtC40YfQtdGB0LrQsNGPINC80LXRhdCw0L3QuNC60LAnK2lkLCfRgdC+0L/RgNC+0LzQsNGCJytpZCwn0LzQsNGC0LXQvNCw0YLQuCDQu9C+0LPQuNC60LAnK2lkLCfRjdC60L7QvdC+0LzQtdGC0YDQuNC60LAnK2lkLCfQstGL0YHRiNCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfQu9C40L3QtdC50L3QsNGPINCw0LvQs9C10LHRgNCwJytpZCwn0LTQuNGE0YTQtdGA0LXQvdGG0LjQsNC70YzQvdCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LDQvdCw0LvQuNGC0LjRh9C10YHQutCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LDRjyDRhNC40LfQuNC60LAnK2lkLCfQtNC40YTRhNC10YDQtdC90YbQuNCw0LvRjNC90YvQtSDRg9GA0LDQstC90LXQvdC40Y8nK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQsNGPINGB0YLQsNGC0LjRgdGC0LjQutCwJytpZCwn0LvQuNC90LXQudC90LDRjyDQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQtNC40YHQutGA0LXRgtC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0L7Qv9C+0LvQvtCz0LjRjycraWQsJ9GE0YPQvdC60YbQuNC+0L3QsNC70YzQvdGL0Lkg0LDQvdCw0LvQuNC3JytpZCwn0LjQvdGC0LXQs9GA0LDQu9GM0L3Ri9C1INGD0YDQsNCy0L3QtdC90LjRjycraWQsJ9GC0LXQvtGA0LjRjyDRh9C40YHQtdC7JytpZCwn0LLQtdC60YLQvtGA0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9Ci0KTQmtCfJytpZCwn0YLQtdC90LfQvtGA0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9GE0LjQvdCw0L3RgdC+0LLQsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YPRgNCw0LLQvdC10L3QuNGPINCyINGH0LDRgdGC0L3Ri9GFINC/0YDQvtC40LfQstC+0LTQvdGL0YUnK2lkLCfQsNC60YLRg9Cw0YDQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtC10L7RgNC40Y8g0LPRgNCw0YTQvtCyJytpZCwn0LrQvtC80LHQuNC90LDRgtC+0YDQuNC60LAnK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQuNC1INC80L7QtNC10LvQuCcraWQsJ9C/0YDQuNC60LvQsNC00L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLRgNC40LPQvtC90L7QvC3QuNGPJytpZCwn0YPRgNCw0LLQvdC10L3QuNGPINC80LDRgtC10LzQsNGC0LjRh9C10YHQutC+0Lkg0YTQuNC30LjQutC4JytpZCwn0YfQuNGB0LvQtdC90L3Ri9C1INC80LXRgtC+0LTRiycraWQsJ9GC0LXQvtGA0LjRjyDQv9GA0LjQsdC70LjQttC10L3QuNC5JytpZCwn0YLQtdC+0YDQuNGPINC+0L/RgtC40LzQuNC30LDRhtC40LgnK2lkLCcu0YjQutC+0LvRjNC90YvQuSDQutGD0YDRgScraWQsJ9C90LAg0LDQvdCz0LvQuNC50YHQutC+0Lwg0Y/Qt9GL0LrQtScraWQsJ9Cw0LvQs9C10LHRgNCwINC70L7Qs9C40LrQuCcraWQsJ9Cy0YvRh9C40YHQu9C40LzRi9C1INGE0YPQvdC60YbQuNC4JytpZCwn0YLQtdC+0YDQuNGPINC40LPRgCcraWQsJ9Cy0LDRgNC40LDRhtC40L7QvdC90L7QtSDQuNGB0YfQuNGB0LvQtdC90LjQtScraWQsJ9C+0L/RgtC40LzQsNC70YzQvdC+0LUg0YPQv9GA0LDQstC70LXQvdC40LUnK2lkLCfQvNC10YLQvtC00Ysg0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCcraWQsJ9C70LjQvdC10LnQvdC+0LUg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnK2lkLCfQsNC70LPQtdCx0YDQsCcraWQsJ9Cz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C80LXRgtC+0LTRiyDQvtC/0YLQuNC80LDQu9GM0L3Ri9GFINGA0LXRiNC10L3QuNC5JytpZF1cbiAgICBzZWN0aW9ucyA9IG5ldyBBcnJheVxuICAgIHNlY3Rpb24gPSBuZXcgT2JqZWN0XG4gICAgaWQgPSAwXG4gICAgZm9yIGNoYXB0ZXIgaW4gY2hhcHRlcnNcbiAgICAgIHNlY3Rpb24gPSB7XG4gICAgICAgIGlkIDogaWRcbiAgICAgICAgdGl0bGUgOiBjaGFwdGVyXG4gICAgICB9XG4gICAgICBzZWN0aW9ucy5wdXNoIHNlY3Rpb25cbiAgICAgIGlkKytcbiAgICByZXR1cm4gc2VjdGlvbnNcblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDQtNC+0L/QvtC70L3QtdC90LjQuSDQtNC70Y8g0YDQsNC30LTQtdC70LBcbiAgZ2V0U3ViU2VjdGlvbnM6IChpZCk9PlxuICAgIGNoYXB0ZXJzID0gWyfQntCT0K0gKNCT0JjQkCknK2lkLCfQn9C+0LTQs9C+0YLQvtCy0LrQsCDQuiDQvtC70LjQvNC/0LjQsNC00LDQvCcraWQsJ9Cf0L7QtNCz0L7RgtC+0LLQutCwINC6INGN0LrQt9Cw0LzQtdC90LDQvCcraWRdXG4gICAgc2VjdGlvbnMgPSBuZXcgQXJyYXlcbiAgICBzZWN0aW9uID0gbmV3IE9iamVjdFxuICAgIGlkID0gMFxuICAgIGZvciBjaGFwdGVyIGluIGNoYXB0ZXJzXG4gICAgICBzZWN0aW9uID0ge1xuICAgICAgICBpZCA6IGlkXG4gICAgICAgIHRpdGxlIDogY2hhcHRlclxuICAgICAgfVxuICAgICAgc2VjdGlvbnMucHVzaCBzZWN0aW9uXG4gICAgICBpZCsrXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgbmV3RWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9lZHVjYXRpb24ucGFyZW50KCkuYmVmb3JlIEBlZHVjYXRpb25fc291cmNlKHsnaW5kZXgnIDogQGVkdWNhdGlvbl9jb3VudH0pXG4gICAgQGVkdWNhdGlvbl9jb3VudCsrXG4gICAgQHN0ZXA0LmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGVkdWNhdGlvbl9jb3VudD4xXG4gICAgICBAcmVtb3ZlX2VkdWNhdGlvbi5zaG93KClcblxuICAgICMg0JDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjQtSDQtNC70Y8g0LLRi9Cx0L7RgNCwINCz0L7RgNC+0LTQsCDQuCDQstGD0LfQsFxuICAgIEBhZGRIaW50KClcblxuICAjINCj0LTQsNC70LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgcmVtb3ZlRWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGVkdWNhdGlvbl9jb3VudC0tXG4gICAgJCgnLmVkdWNhdGlvbi13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBlZHVjYXRpb25fY291bnQ8MlxuICAgICAgQHJlbW92ZV9lZHVjYXRpb24uaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDQg0LogNSDRiNCw0LPRg1xuICBzdGVwNFN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwNC5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXA0LmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAgICMg0J7RgtC/0YDQsNCy0LrQsCDQvdCwINGB0LXRgNCy0LXRgFxuICAgIGNvbnNvbGUubG9nIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJCgnLnBhbmVsIDppbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCkpKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiA0INC6IDMg0YjQsNCz0YNcbiAgc3RlcDRCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAzINC6IDQg0YjQsNCz0YNcbiAgc3RlcDNTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDMuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMy5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAzINC6IDIg0YjQsNCz0YNcbiAgc3RlcDNCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C5INCw0LTRgNC10YFcbiAgbmV3QWRkcmVzczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfYWRkcmVzcy5wYXJlbnQoKS5iZWZvcmUgQGFkZHJlc3Nfc291cmNlKHsnaW5kZXgnIDogQGFkZHJlc3NfY291bnR9KVxuICAgIEBhZGRyZXNzX2NvdW50KytcbiAgICBAc3RlcDMuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBpZiBAYWRkcmVzc19jb3VudD4xXG4gICAgICBAcmVtb3ZlX2FkZHJlc3Muc2hvdygpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIHJlbW92ZUFkZHJlc3M6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkcmVzc19jb3VudC0tXG4gICAgJCgnLmFkcmVzcy13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBhZGRyZXNzX2NvdW50PDJcbiAgICAgIEByZW1vdmVfYWRkcmVzcy5oaWRlKClcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMiDQuiAzINGI0LDQs9GDXG4gIHN0ZXAyU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAyLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDIuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMiDQuiAxINGI0LDQs9GDXG4gIHN0ZXAyQmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuXG4gICMg0JHQu9C+0LrQuNGA0L7QstCw0YLRjCDRhtC10L3RiyDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0YUg0YTQvtGA0LzQsNGC0L7QsiDQt9Cw0L3Rj9GC0LjQuVxuICBjaGVja0Zvcm1hdDogPT5cbiAgICBpbnB1dHMgPSBAZm9ybWF0cy5maW5kICdpbnB1dCdcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBlbGVtZW50cyA9IEBzdGVwMi5maW5kKCdpbnB1dC4nK2lucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1maWVsZCcpKVxuICAgICAgZm9yIGVsZW1lbnQgaW4gZWxlbWVudHNcbiAgICAgICAgcHJpY2UgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5zdWJkZXZpc2lvbicpXG4gICAgICAgIGlmIGlucHV0LmNoZWNrZWRcbiAgICAgICAgICBwcmljZS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcHJpY2UuYWRkQ2xhc3MoJ2hpZGUnKVxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndWktc3RhdGUtZXJyb3InKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0YDQsNC30LTQtdC70Ysg0L/RgNC10LTQvNC10YLQsFxuICBzdWJqZWN0U2VsZWN0ZWQ6IChldmVudCk9PlxuICAgIHNlbGVjdCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIHNlbGVjdC5yZW1vdmVDbGFzcyAndW5jaGFuZ2VkJ1xuICAgIGlkID0gc2VsZWN0LnZhbCgpXG5cbiAgICBsaW5lID0gc2VsZWN0LnBhcmVudHMoJy5saW5lJylcbiAgICBcbiAgICBzdWJzZWN0aW9ucyA9IEBnZXRTdWJTZWN0aW9ucyhpZClcbiAgICBoYWxmX2xlbmd0aCA9IE1hdGguY2VpbChzdWJzZWN0aW9ucy5sZW5ndGggLyAyKVxuICAgIGxlZnRTaWRlID0gc3Vic2VjdGlvbnMuc3BsaWNlKDAsaGFsZl9sZW5ndGgpXG5cbiAgICBzZWN0aW9ucyA9IEBzdWJqZWN0X3NlY3Rpb25fc291cmNlKHtcbiAgICAgIGluZGV4IDogQHN1YmpfY291bnRcbiAgICAgIHNlY3Rpb24gOiBAZ2V0U2VjdGlvbnMoaWQpXG4gICAgICBjb2x1bW4xIDogbGVmdFNpZGVcbiAgICAgIGNvbHVtbjIgOiBzdWJzZWN0aW9uc1xuICAgICAgfSlcblxuICAgIG5leHQgPSBsaW5lLm5leHQoKVxuICAgIGlmIG5leHQuaGFzQ2xhc3MoJ3NlY3Rpb24nKVxuICAgICAgbmV4dC5yZXBsYWNlV2l0aCBzZWN0aW9uc1xuICAgIGVsc2VcbiAgICAgIGxpbmUuYWZ0ZXIgc2VjdGlvbnNcbiAgICBcbiAgICBAc3RlcDIuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGL0Lkg0L/RgNC10LTQvNC10YJcbiAgbmV3U3ViamVjdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfc3ViamVjdC5wYXJlbnQoKS5iZWZvcmUgQHN1YmplY3Rfc291cmNlKHsnaW5kZXgnIDogQHN1YmpfY291bnR9KVxuICAgIEBzdWJqX2NvdW50KytcbiAgICBcbiAgICB3cmFwcGVyID0gQGFkZF9zdWJqZWN0LnBhcmVudCgpLnByZXYoKVxuICAgIHdyYXBwZXIuZmluZCgnc2VsZWN0Jykub24gJ2NoYW5nZScsIEBzdWJqZWN0U2VsZWN0ZWRcblxuICAgIEBzdGVwMi5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIEBzdGVwMi5maW5kKCcubWluLXRpbWUnKS50ZXh0IEBkdXJhdGlvbl92YWx1ZS52YWwoKVxuICAgIEBjaGVja0Zvcm1hdCgpXG4gICAgZm9yIGVsZW1lbnQgaW4gQHN0ZXAyLmZpbmQoJy5kcm9wZG93bi1jb250YWluZXItd2lkZ2V0JylcbiAgICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcbiAgICBcbiAgICBpZiBAc3Vial9jb3VudD4xXG4gICAgICBAcmVtb3ZlX3N1YmplY3Quc2hvdygpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQv9GA0LXQtNC80LXRglxuICByZW1vdmVTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN1YmpfY291bnQtLVxuICAgICQoJy5zdWJqLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQHN1YmpfY291bnQ8MlxuICAgICAgQHJlbW92ZV9zdWJqZWN0LmhpZGUoKVxuXG4gICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCx0LvQvtC60L7QsiDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMXG4gIHZhbGlkYXRlOiAoaW5wdXQpPT5cblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSAnZGF0YS1oNS1lcnJvcmlkJ1xuICAgICAgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaDUtZXJyb3JpZCcpXG5cbiAgICBpZiBpbnB1dC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcbiAgICAgIGlmIGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkICd1aS1zdGF0ZS1lcnJvcidcblxuICAgIGlmIGlucHV0LmNsYXNzTGlzdC5jb250YWlucyAndWktc3RhdGUtZXJyb3InXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgZWxzZVxuICAgICAgaWYgZXJyb3JcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgcmV0dXJuIHRydWVcblxuICAjINCf0LXRgNC10YXQvtC0INC60L4g0LLRgtC+0YDQvtC80YMg0YjQsNCz0YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBzdGVwMVN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMS5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAxLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCo0LDQsyAxXG4gICMg0JDQstCw0YLQsNGAXG4gIGRyb3BlZDogKGV2ZW50KS0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEZpbGVBUEkuZ2V0RHJvcEZpbGVzIGV2ZW50LCAoZmlsZXMpLT5cblxuICAjINC/0L7QtNCy0LXQu9C4INC60YPRgNGB0L7RgCDQuiDQsdC70L7QutGDINC00YDQvtC/0LAg0LDQstCw0YLQsNGA0LrQuFxuICBvdmVyOiAob3ZlciktPlxuXG4gICMg0LHRgNC+0YHQuNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBkcm9wOiAoZmlsZXMpPT5cbiAgICBjb25zb2xlLmxvZyAgZmlsZXNcbiAgICBpZiBmaWxlcy5sZW5ndGhcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIFxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBAYXZhdGFyVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgIGF2YXRhciA9IGRvY3VtZW50LmltcG9ydE5vZGUgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQsIHRydWVcbiAgICAgICAgcHJldiA9IEBmaWxlU2VsZWN0b3IucHJldigpXG4gICAgICAgIGlmIHByZXYuaGFzQ2xhc3MoJ2N1cnJlbnQtYXZhdGFyJylcbiAgICAgICAgICBwcmV2LnJlbW92ZSgpXG4gICAgICAgIEBmaWxlU2VsZWN0b3IuYmVmb3JlIGF2YXRhclxuICAgICAgICBAZmlsZVNlbGVjdG9yLnByZXYoKS5maW5kKCcuY2xvc2UnKS5vbiAnY2xpY2snLCBAcmVtb3ZlQXZhdGFyXG4gICAgICBcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMIGZpbGVzWzBdXG5cbiAgIyDQo9C00LDQu9C40LvQuCDQsNCy0LDRgtGA0LDQutGDXG4gIHJlbW92ZUF2YXRhcjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgQGZpbGUucmVwbGFjZVdpdGggQGZpbGUudmFsKCcnKS5jbG9uZSh0cnVlKVxuICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0JLRi9Cx0YDQsNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBhdmF0YXJTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgZmlsZXMgPSBGaWxlQVBJLmdldEZpbGVzKGV2ZW50KVxuXG4gICAgZXh0ID0gZmlsZXNbMF1bJ25hbWUnXS5zdWJzdHJpbmcoZmlsZXNbMF1bJ25hbWUnXS5sYXN0SW5kZXhPZignLicpICsgMSkudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKGZpbGVzWzBdICYmIChmaWxlc1swXS5zaXplIDw9IEZpbGVBUEkuTUIpICYmIChleHQgPT0gXCJnaWZcIiB8fCBleHQgPT0gXCJwbmdcIiB8fCBleHQgPT0gXCJqcGVnXCIgfHwgZXh0ID09IFwianBnXCIpKVxuICAgICAgICBcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpPT5cbiAgICAgICAgXG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcblxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAgIGVsc2VcbiAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgICBAZmlsZSA9IEBzdGVwMS5maW5kICcjcmVnaXN0cmF0aW9uLWF2YXRhcidcblxuICAjINCf0YDQvtCy0LXRgNGP0LXQvCDQvNC+0LbQtdGCINC70Lgg0YHRg9GJ0LXRgdGC0LLQvtCy0LDRgtGMINGD0LrQsNC30LDQvdC90LDRjyDQtNCw0YLQsCwg0L3QsNC/0YDQuNC80LXRgCAzMSDRhNC10LLRgNCw0LvRjyDQuCDQuNGB0L/RgNCw0LLQu9GP0LXQvCDQsiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQutC4XG4gIGNoZWNrRGF0ZTogKGV2ZW50KT0+XG4gICAgZGF5ID0gcGFyc2VJbnQgQGRheS52YWwoKS50cmltKCksIDEwXG4gICAgXG4gICAgaWYgZGF5PDEgfHwgaXNOYU4oZGF5KVxuICAgICAgQGRheS52YWwgMVxuICAgICAgcmV0dXJuXG5cbiAgICBkYXlzID0gcGFyc2VJbnQgbW9tZW50KEB5ZWFyLnZhbCgpK1wiLVwiKyhwYXJzZUludChAbW9udGgudmFsKCksMTApKzEpLCBcIllZWVktTU1cIikuZGF5c0luTW9udGgoKSwgMTBcbiAgICBpZiBkYXk+ZGF5c1xuICAgICAgQGRheS52YWwgZGF5c1xuICAgIHJldHVyblxuXG4gICAgaWYgZGF5PjMxXG4gICAgICBAZGF5LnZhbCAzMVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUGVyc29uYWxEYXRhQWxsKClcblxuXG4iXX0=