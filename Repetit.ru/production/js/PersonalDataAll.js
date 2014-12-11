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
      url: 'http://test.silentimp.info/test.php',
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
    return $('body').animate({
      scrollTop: 0
    }, '500');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2REFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsNkNBQUEsQ0FBQTtBQUFBLFFBQUEsaUJBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBQSxDQUFFLHFCQUFGLENBQVYsQ0FBQTtBQUNBLElBQUEsSUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsQ0FBckI7QUFDRSxZQUFVLElBQUEsS0FBQSxDQUFNLGtCQUFOLENBQVYsQ0FERjtLQURBO0FBQUEsSUFJQSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FKVCxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FMVixDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLGdCQUFiLENBTlgsQ0FBQTtBQUFBLElBUUEs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O0FBQUEsQ0FBbEIsQ0F6akJBLENBQUEiLCJmaWxlIjoiUGVyc29uYWxEYXRhQWxsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uYWxEYXRhQWxsXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEB3aWRnZXQgPSAkICcucmVnaXN0cmF0aW9uLXN0ZXBzJ1xuICAgIGlmIEB3aWRnZXQubGVuZ3RoID09IDBcbiAgICAgIHRocm93IG5ldyBFcnJvcign0L3QtSDQvdCw0LnQtNC10L0g0LLQuNC00LbQtdGCJylcblxuICAgIEBzdGVwcyA9IEB3aWRnZXQuZmluZCAnLnN0ZXBzJ1xuICAgIEBwYW5lbHMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbCdcbiAgICBAY3VycmVudCA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLmN1cnJlbnQnXG5cbiAgICBAc3RlcDEgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTEnXG4gICAgQHN0ZXAyID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0yJ1xuICAgIEBzdGVwMyA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMydcbiAgICBAc3RlcDQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTQnXG4gICAgQHN0ZXA1ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC01J1xuXG4gICAgIyDQntCx0YnQtdC1XG4gICAgc2VsZWN0ID0gJCAnc2VsZWN0J1xuICAgIGlmIHNlbGVjdC5sZW5ndGggPiAwXG4gICAgICBzZWxlY3QuY2hvc2VuXG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcblxuICAgICMg0KjQsNCzIDFcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAxLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQl9Cw0LPRgNGD0LfQutCwINCw0LLQsNGC0LDRgNCwXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG4gICAgQGF2YXRhclRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2N1cnJlbnQtYXZhdGFyLXRlbXBsYXRlJ1xuICAgIEBmaWxlU2VsZWN0b3IgPSBAc3RlcDEuZmluZCAnLmZpbGUtc2VsZWN0b3InXG4gICAgXG4gICAgRmlsZUFQSS5ldmVudC5vbiBAZmlsZVswXSwgJ2NoYW5nZScsIEBhdmF0YXJTZWxlY3RlZFxuICAgIEBmaWxlU2VsZWN0b3IuZG5kIEBvdmVyLCBAZHJvcFxuICAgIEZpbGVBUEkuZXZlbnQub24gZG9jdW1lbnQsICdkcm9wJywgQGRyb3BlZFxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC+0L/Ri9GC0LBcbiAgICBleHAgPSAkICcjZXhwZXJpZW5jZSdcbiAgICBpZiBleHAubGVuZ3RoID4gMFxuICAgICAgZXhwLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgICAnbWF4JzogWzUwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcbiAgICAgIGV4cC5MaW5rKCdsb3dlcicpLnRvKCQoJyNleHBlcmllbmNlLXZhbHVlJykpXG5cbiAgICAjINCU0LDRgtCwINGA0L7QttC00LXQvdC40Y9cbiAgICBAbW9udGggPSBAc3RlcDEuZmluZCAnLm1vbnRoIHNlbGVjdCdcbiAgICBAeWVhciAgPSBAc3RlcDEuZmluZCAnLnllYXIgc2VsZWN0J1xuICAgIEBkYXkgICA9IEBzdGVwMS5maW5kICdpbnB1dC5kYXknXG4gICAgQGRheS5vbiAgICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQG1vbnRoLm9uICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQHllYXIub24gICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG5cbiAgICAjINCe0YLQv9GA0LDQstC60LAg0LTQsNC90L3Ri9GFINCo0LDQsyAxXG4gICAgQHN0ZXAxLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXAxU3VibWl0XG5cblxuICAgICMg0KjQsNCzIDJcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAyLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQt9Cw0L3Rj9GC0LjQuVxuICAgIEBkdXJhdGlvbl92YWx1ZSA9ICQoJyNkdXJhdGlvbi12YWx1ZScpXG5cbiAgICB0aW1lID0gJCAnI2R1cmF0aW9uJ1xuICAgIGlmIHRpbWUubGVuZ3RoID4gMFxuICAgICAgdGltZS5ub1VpU2xpZGVyXG4gICAgICAgIHN0ZXA6IDUsXG4gICAgICAgIGNvbm5lY3Q6IFwibG93ZXJcIixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHJhbmdlOlxuICAgICAgICAgICdtaW4nOiBbMzBdLFxuICAgICAgICAgICdtYXgnOiBbMTgwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcblxuICAgICAgXG4gICAgICB0aW1lLkxpbmsoJ2xvd2VyJykudG8oQGR1cmF0aW9uX3ZhbHVlKVxuICAgICAgdGltZS5vbiAnY2hhbmdlJywgKGV2ZW50LCB1aSk9PlxuICAgICAgICAkKCdzdHJvbmcubWluLXRpbWUnKS50ZXh0KHVpKVxuXG4gICAgIyDQpNC+0YDQvNCw0YIg0LfQsNC90Y/RgtC40LlcbiAgICBAZm9ybWF0cyA9IEBzdGVwMi5maW5kICcubGVzc29ucy1mb3JtYXQnXG4gICAgQGZvcm1hdHMuZmluZCgnaW5wdXQnKS5vbiAnY2hhbmdlJywgQGNoZWNrRm9ybWF0XG4gICAgQGNoZWNrRm9ybWF0KClcblxuICAgICMg0JTQvtCx0LDQstC60LAg0L/RgNC10LTQvNC10YLQsFxuICAgIEBhZGRfc3ViamVjdCA9IEBzdGVwMi5maW5kICcuYWRkLXN1YmplY3QnXG4gICAgQHN1YmpfY291bnQgPSAwXG4gICAgQHN1YmplY3Rfc291cmNlID0gJChcIiNzdWJqLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zb3VyY2VcbiAgICBAYWRkX3N1YmplY3Qub24gJ2NsaWNrJywgQG5ld1N1YmplY3RcbiAgICBAYWRkX3N1YmplY3QudHJpZ2dlciAnY2xpY2snXG5cbiAgICAjINCf0L7QtNGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9ICQoXCIjc3Viai1zZWN0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlXG5cbiAgICAj0KPQtNCw0LvQtdC90LjQtSDQv9GA0LXQtNC80LXRgtCwXG4gICAgQHJlbW92ZV9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5yZW1vdmUtc3ViamVjdCdcbiAgICBAcmVtb3ZlX3N1YmplY3Qub24gJ2NsaWNrJywgQHJlbW92ZVN1YmplY3RcblxuICAgIEBzdGVwMi5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMlN1Ym1pdFxuICAgIEBzdGVwMi5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAyQmFja1xuXG5cbiAgICAjINCo0LDQsyAzXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMy5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQsNC00YDQtdGB0LBcbiAgICBAYWRkX2FkZHJlc3MgPSBAc3RlcDMuZmluZCAnLmFkZC1hZGRyZXNzJ1xuICAgIEBhZGRyZXNzX2NvdW50ID0gMFxuICAgIEBhZGRyZXNzX3NvdXJjZSA9ICQoXCIjYWRkcmVzcy10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAYWRkcmVzc19zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQGFkZHJlc3Nfc291cmNlXG4gICAgQGFkZF9hZGRyZXNzLm9uICdjbGljaycsIEBuZXdBZGRyZXNzXG4gICAgQGFkZF9hZGRyZXNzLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0LDQtNGA0LXRgdCwXG4gICAgQHJlbW92ZV9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5yZW1vdmUtYWRkcmVzcydcbiAgICBAcmVtb3ZlX2FkZHJlc3Mub24gJ2NsaWNrJywgQHJlbW92ZUFkZHJlc3NcblxuICAgIEBzdGVwMy5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwM1N1Ym1pdFxuICAgIEBzdGVwMy5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAzQmFja1xuXG5cbiAgICAjINCo0LDQsyA0XG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwNC5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQvtCx0YDQsNC30L7QstCw0L3QuNGPXG4gICAgQGFkZF9lZHVjYXRpb24gPSBAc3RlcDQuZmluZCAnLmFkZC1lZHVjYXRpb24nXG4gICAgQGVkdWNhdGlvbl9jb3VudCA9IDBcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9ICQoXCIjZWR1Y2F0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBlZHVjYXRpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBlZHVjYXRpb25fc291cmNlXG4gICAgQGFkZF9lZHVjYXRpb24ub24gJ2NsaWNrJywgQG5ld0VkdWNhdGlvblxuICAgIEBhZGRfZWR1Y2F0aW9uLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5yZW1vdmUtZWR1Y2F0aW9uJ1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uLm9uICdjbGljaycsIEByZW1vdmVFZHVjYXRpb25cblxuICAgIEBzZXJ0aWZpY2F0X3NvdXJjZSA9ICQoXCIjc2VydGlmaWNhdC10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc2VydGlmaWNhdF9zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQHNlcnRpZmljYXRfc291cmNlXG4gICAgQGNlcnRfbGlzdCA9IEBzdGVwNC5maW5kICcuc2VydGlmaWNhdC1saXN0J1xuICAgIEBjZXJpZmljYXRlc19jb3VudCA9IDBcbiAgICBAc2VydGlmaWNhdHMgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXRzJ1xuICAgIEBzZXJ0aWZpY2F0cy5maWxlYXBpXG4gICAgICB1cmw6ICdodHRwOi8vdGVzdC5zaWxlbnRpbXAuaW5mby90ZXN0LnBocCdcbiAgICAgIGR1cGxpY2F0ZTogZmFsc2UsXG4gICAgICBhY2NlcHQ6ICdpbWFnZS8qJyxcbiAgICAgIG1heFNpemU6IDUgKiBGaWxlQVBJLk1CLFxuICAgICAgYXV0b1VwbG9hZDogZmFsc2UsXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgIGxpc3Q6ICcuc2VydGlmaWNhdC1saXN0JyxcbiAgICAgIGVsZW1lbnRzOlxuICAgICAgICBmaWxlOiBcbiAgICAgICAgICB0cGw6ICcuanMtZmlsZS10cGwnXG4gICAgICAgICAgcHJldmlldzpcbiAgICAgICAgICAgIGVsOiAnLnByZXZpZXdfX3BpYydcbiAgICAgICAgICAgIHdpZHRoOiA4MFxuICAgICAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgICBjdHJsOlxuICAgICAgICAgIHVwbG9hZDogJy5hZGQtc2VydGlmaWNhdCBsYWJlbCdcbiAgICAgIG9uU2VsZWN0OiAoZXZ0LCB1aSk9PlxuICAgICAgICBAY2VyaWZpY2F0ZXNfY291bnQrK1xuICAgICAgICAjIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgIyByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgICMgICBAY2VydF9saXN0LmFwcGVuZCBAc2VydGlmaWNhdF9zb3VyY2VcbiAgICAgICAgIyAgICAgXCJpZFwiIDogQGNlcmlmaWNhdGVzX2NvdW50XG4gICAgICAgICMgICAgIFwic3JjXCIgOiBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgICMgcmVhZGVyLnJlYWRBc0RhdGFVUkwgdWkuZmlsZXNbMF1cblxuICAgIEBzdGVwNC5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwNFN1Ym1pdFxuICAgIEBzdGVwNC5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXA0QmFja1xuXG4gIGFkZEhpbnQ6ID0+XG4gICAgbG9jYXRpb25zID0gbmV3IEJsb29kaG91bmRcbiAgICAgIGRhdHVtVG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMub2JqLndoaXRlc3BhY2UoXCJjaXR5XCIpLFxuICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgcHJlZmV0Y2g6IFwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMjA4MTA3NzIvY2l0eXMuanNvblwiXG4gICAgXG4gICAgbG9jYXRpb25zLmluaXRpYWxpemUoKVxuXG4gICAgJCgnLmNpdHknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICdsb2NhdGlvbnMnXG4gICAgICBkaXNwbGF5S2V5OiAnY2l0eScsXG4gICAgICBzb3VyY2U6IGxvY2F0aW9ucy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPjxiPnt7cmVnaW9ufX08L2I+e3tjaXR5fX08L3A+JylcblxuICAgIHVuaXZlcmNpdHlzID0gbmV3IEJsb29kaG91bmRcbiAgICAgIGRhdHVtVG9rZW5pemVyOiAoZGF0YSktPlxuICAgICAgICByZXR1cm4gQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UoZGF0YS50aXRsZSlcbiAgICAgIHF1ZXJ5VG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxcbiAgICAgIGxvY2FsOiBbe1widGl0bGVcIjpcIkFuZG9ycmFcIn0se1widGl0bGVcIjpcIlVuaXRlZEFyYWJFbWlyYXRlc1wifSx7XCJ0aXRsZVwiOlwiQWZnaGFuaXN0YW5cIn0se1widGl0bGVcIjpcIkFudGlndWFhbmRCYXJidWRhXCJ9LHtcInRpdGxlXCI6XCJBbmd1aWxsYVwifSx7XCJ0aXRsZVwiOlwiQWxiYW5pYVwifSx7XCJ0aXRsZVwiOlwiQXJtZW5pYVwifSx7XCJ0aXRsZVwiOlwiQW5nb2xhXCJ9LHtcInRpdGxlXCI6XCJBbnRhcmN0aWNhXCJ9XVxuXG4gICAgdW5pdmVyY2l0eXMuaW5pdGlhbGl6ZSgpXG5cbiAgICAkKCcudW5pdmVyY2l0eTpub3QoLnR0LWlucHV0KScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ3VuaXZlcmNpdHlzJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuICAgICQoJy5mYWN1bHR5Om5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgJCgnLnNwZWNpYWxpemF0aW9uOm5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0YHQv9C40YHQutCwINGA0LDQt9C00LXQu9C+0LIg0LTQu9GPINC/0YDQtdC00LzQtdGC0LBcbiAgZ2V0U2VjdGlvbnM6IChpZCk9PlxuICAgIGNoYXB0ZXJzID0gWyfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQuNC5INCw0L3QsNC70LjQtycraWQsJ9GC0LXQvtGA0LjRjyDQstC10YDQvtGP0YLQvdC+0YHRgtC10LknK2lkLCfRgtC10L7RgNC10YLQuNGH0LXRgdC60LDRjyDQvNC10YXQsNC90LjQutCwJytpZCwn0YHQvtC/0YDQvtC80LDRgicraWQsJ9C80LDRgtC10LzQsNGC0Lgg0LvQvtCz0LjQutCwJytpZCwn0Y3QutC+0L3QvtC80LXRgtGA0LjQutCwJytpZCwn0LLRi9GB0YjQsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0LvQuNC90LXQudC90LDRjyDQsNC70LPQtdCx0YDQsCcraWQsJ9C00LjRhNGE0LXRgNC10L3RhtC40LDQu9GM0L3QsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9Cw0L3QsNC70LjRgtC40YfQtdGB0LrQsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutCw0Y8g0YTQuNC30LjQutCwJytpZCwn0LTQuNGE0YTQtdGA0LXQvdGG0LjQsNC70YzQvdGL0LUg0YPRgNCw0LLQvdC10L3QuNGPJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsCcraWQsJ9C70LjQvdC10LnQvdCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LTQuNGB0LrRgNC10YLQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtC+0L/QvtC70L7Qs9C40Y8nK2lkLCfRhNGD0L3QutGG0LjQvtC90LDQu9GM0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9C40L3RgtC10LPRgNCw0LvRjNC90YvQtSDRg9GA0LDQstC90LXQvdC40Y8nK2lkLCfRgtC10L7RgNC40Y8g0YfQuNGB0LXQuycraWQsJ9Cy0LXQutGC0L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfQotCk0JrQnycraWQsJ9GC0LXQvdC30L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfRhNC40L3QsNC90YHQvtCy0LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQsiDRh9Cw0YHRgtC90YvRhSDQv9GA0L7QuNC30LLQvtC00L3Ri9GFJytpZCwn0LDQutGC0YPQsNGA0L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLQtdC+0YDQuNGPINCz0YDQsNGE0L7QsicraWQsJ9C60L7QvNCx0LjQvdCw0YLQvtGA0LjQutCwJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQtSDQvNC+0LTQtdC70LgnK2lkLCfQv9GA0LjQutC70LDQtNC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0YDQuNCz0L7QvdC+0Lwt0LjRjycraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQvtC5INGE0LjQt9C40LrQuCcraWQsJ9GH0LjRgdC70LXQvdC90YvQtSDQvNC10YLQvtC00YsnK2lkLCfRgtC10L7RgNC40Y8g0L/RgNC40LHQu9C40LbQtdC90LjQuScraWQsJ9GC0LXQvtGA0LjRjyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4JytpZCwnLtGI0LrQvtC70YzQvdGL0Lkg0LrRg9GA0YEnK2lkLCfQvdCwINCw0L3Qs9C70LjQudGB0LrQvtC8INGP0LfRi9C60LUnK2lkLCfQsNC70LPQtdCx0YDQsCDQu9C+0LPQuNC60LgnK2lkLCfQstGL0YfQuNGB0LvQuNC80YvQtSDRhNGD0L3QutGG0LjQuCcraWQsJ9GC0LXQvtGA0LjRjyDQuNCz0YAnK2lkLCfQstCw0YDQuNCw0YbQuNC+0L3QvdC+0LUg0LjRgdGH0LjRgdC70LXQvdC40LUnK2lkLCfQvtC/0YLQuNC80LDQu9GM0L3QvtC1INGD0L/RgNCw0LLQu9C10L3QuNC1JytpZCwn0LzQtdGC0L7QtNGLINC+0L/RgtC40LzQuNC30LDRhtC40LgnK2lkLCfQu9C40L3QtdC50L3QvtC1INC/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC1JytpZCwn0LDQu9Cz0LXQsdGA0LAnK2lkLCfQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQvNC10YLQvtC00Ysg0L7Qv9GC0LjQvNCw0LvRjNC90YvRhSDRgNC10YjQtdC90LjQuScraWRdXG4gICAgc2VjdGlvbnMgPSBuZXcgQXJyYXlcbiAgICBzZWN0aW9uID0gbmV3IE9iamVjdFxuICAgIGlkID0gMFxuICAgIGZvciBjaGFwdGVyIGluIGNoYXB0ZXJzXG4gICAgICBzZWN0aW9uID0ge1xuICAgICAgICBpZCA6IGlkXG4gICAgICAgIHRpdGxlIDogY2hhcHRlclxuICAgICAgfVxuICAgICAgc2VjdGlvbnMucHVzaCBzZWN0aW9uXG4gICAgICBpZCsrXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQvtC/0L7Qu9C90LXQvdC40Lkg0LTQu9GPINGA0LDQt9C00LXQu9CwXG4gIGdldFN1YlNlY3Rpb25zOiAoaWQpPT5cbiAgICBjaGFwdGVycyA9IFsn0J7Qk9CtICjQk9CY0JApJytpZCwn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0L7Qu9C40LzQv9C40LDQtNCw0LwnK2lkLCfQn9C+0LTQs9C+0YLQvtCy0LrQsCDQuiDRjdC60LfQsNC80LXQvdCw0LwnK2lkXVxuICAgIHNlY3Rpb25zID0gbmV3IEFycmF5XG4gICAgc2VjdGlvbiA9IG5ldyBPYmplY3RcbiAgICBpZCA9IDBcbiAgICBmb3IgY2hhcHRlciBpbiBjaGFwdGVyc1xuICAgICAgc2VjdGlvbiA9IHtcbiAgICAgICAgaWQgOiBpZFxuICAgICAgICB0aXRsZSA6IGNoYXB0ZXJcbiAgICAgIH1cbiAgICAgIHNlY3Rpb25zLnB1c2ggc2VjdGlvblxuICAgICAgaWQrK1xuICAgIHJldHVybiBzZWN0aW9uc1xuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIG5ld0VkdWNhdGlvbjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfZWR1Y2F0aW9uLnBhcmVudCgpLmJlZm9yZSBAZWR1Y2F0aW9uX3NvdXJjZSh7J2luZGV4JyA6IEBlZHVjYXRpb25fY291bnR9KVxuICAgIEBlZHVjYXRpb25fY291bnQrK1xuICAgIEBzdGVwNC5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGlmIEBlZHVjYXRpb25fY291bnQ+MVxuICAgICAgQHJlbW92ZV9lZHVjYXRpb24uc2hvdygpXG5cbiAgICAjINCQ0LLRgtC+0LfQsNC/0L7Qu9C90LXQvdC40LUg0LTQu9GPINCy0YvQsdC+0YDQsCDQs9C+0YDQvtC00LAg0Lgg0LLRg9C30LBcbiAgICBAYWRkSGludCgpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIHJlbW92ZUVkdWNhdGlvbjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBlZHVjYXRpb25fY291bnQtLVxuICAgICQoJy5lZHVjYXRpb24td3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAZWR1Y2F0aW9uX2NvdW50PDJcbiAgICAgIEByZW1vdmVfZWR1Y2F0aW9uLmhpZGUoKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiA0INC6IDUg0YjQsNCz0YNcbiAgc3RlcDRTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDQuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwNC5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDQg0LogMyDRiNCw0LPRg1xuICBzdGVwNEJhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDMg0LogNCDRiNCw0LPRg1xuICBzdGVwM1N1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMy5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAzLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDMg0LogMiDRiNCw0LPRg1xuICBzdGVwM0JhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGL0Lkg0LDQtNGA0LXRgVxuICBuZXdBZGRyZXNzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9hZGRyZXNzLnBhcmVudCgpLmJlZm9yZSBAYWRkcmVzc19zb3VyY2UoeydpbmRleCcgOiBAYWRkcmVzc19jb3VudH0pXG4gICAgQGFkZHJlc3NfY291bnQrK1xuICAgIEBzdGVwMy5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGlmIEBhZGRyZXNzX2NvdW50PjFcbiAgICAgIEByZW1vdmVfYWRkcmVzcy5zaG93KClcblxuICAjINCj0LTQsNC70LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgcmVtb3ZlQWRkcmVzczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRyZXNzX2NvdW50LS1cbiAgICAkKCcuYWRyZXNzLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQGFkZHJlc3NfY291bnQ8MlxuICAgICAgQHJlbW92ZV9hZGRyZXNzLmhpZGUoKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAyINC6IDMg0YjQsNCz0YNcbiAgc3RlcDJTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDIuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMi5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAyINC6IDEg0YjQsNCz0YNcbiAgc3RlcDJCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG5cbiAgIyDQkdC70L7QutC40YDQvtCy0LDRgtGMINGG0LXQvdGLINC90LXQtNC+0L/Rg9GB0YLQuNC80YvRhSDRhNC+0YDQvNCw0YLQvtCyINC30LDQvdGP0YLQuNC5XG4gIGNoZWNrRm9ybWF0OiA9PlxuICAgIGlucHV0cyA9IEBmb3JtYXRzLmZpbmQgJ2lucHV0J1xuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGVsZW1lbnRzID0gQHN0ZXAyLmZpbmQoJ2lucHV0LicraW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLWZpZWxkJykpXG4gICAgICBmb3IgZWxlbWVudCBpbiBlbGVtZW50c1xuICAgICAgICBwcmljZSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnLnN1YmRldmlzaW9uJylcbiAgICAgICAgaWYgaW5wdXQuY2hlY2tlZFxuICAgICAgICAgIHByaWNlLnJlbW92ZUNsYXNzKCdoaWRlJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwcmljZS5hZGRDbGFzcygnaGlkZScpXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd1aS1zdGF0ZS1lcnJvcicpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKVxuXG4gICMg0JTQvtCx0LDQstC40YLRjCDRgNCw0LfQtNC10LvRiyDQv9GA0LXQtNC80LXRgtCwXG4gIHN1YmplY3RTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgc2VsZWN0ID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgc2VsZWN0LnJlbW92ZUNsYXNzICd1bmNoYW5nZWQnXG4gICAgaWQgPSBzZWxlY3QudmFsKClcbiAgICBcbiAgICBsaW5lID0gc2VsZWN0LnBhcmVudHMoJy5saW5lJylcbiAgICBcbiAgICBzdWJzZWN0aW9ucyA9IEBnZXRTdWJTZWN0aW9ucyhpZClcbiAgICBoYWxmX2xlbmd0aCA9IE1hdGguY2VpbChzdWJzZWN0aW9ucy5sZW5ndGggLyAyKVxuICAgIGxlZnRTaWRlID0gc3Vic2VjdGlvbnMuc3BsaWNlKDAsaGFsZl9sZW5ndGgpXG5cbiAgICBzZWN0aW9ucyA9IEBzdWJqZWN0X3NlY3Rpb25fc291cmNlKHtcbiAgICAgIGluZGV4IDogQHN1YmpfY291bnRcbiAgICAgIHNlY3Rpb24gOiBAZ2V0U2VjdGlvbnMoaWQpXG4gICAgICBjb2x1bW4xIDogbGVmdFNpZGVcbiAgICAgIGNvbHVtbjIgOiBzdWJzZWN0aW9uc1xuICAgICAgfSlcblxuICAgIG5leHQgPSBsaW5lLm5leHQoKVxuICAgIGlmIG5leHQuaGFzQ2xhc3MoJ3NlY3Rpb24nKVxuICAgICAgbmV4dC5yZXBsYWNlV2l0aCBzZWN0aW9uc1xuICAgIGVsc2VcbiAgICAgIGxpbmUuYWZ0ZXIgc2VjdGlvbnNcbiAgICBcbiAgICBAc3RlcDIuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGL0Lkg0L/RgNC10LTQvNC10YJcbiAgbmV3U3ViamVjdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfc3ViamVjdC5wYXJlbnQoKS5iZWZvcmUgQHN1YmplY3Rfc291cmNlKHsnaW5kZXgnIDogQHN1YmpfY291bnR9KVxuICAgIEBzdWJqX2NvdW50KytcbiAgICBcbiAgICB3cmFwcGVyID0gQGFkZF9zdWJqZWN0LnBhcmVudCgpLnByZXYoKVxuICAgIHdyYXBwZXIuZmluZCgnc2VsZWN0Jykub24gJ2NoYW5nZScsIEBzdWJqZWN0U2VsZWN0ZWRcblxuICAgIEBzdGVwMi5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIEBzdGVwMi5maW5kKCcubWluLXRpbWUnKS50ZXh0IEBkdXJhdGlvbl92YWx1ZS52YWwoKVxuICAgIEBjaGVja0Zvcm1hdCgpXG4gICAgZm9yIGVsZW1lbnQgaW4gQHN0ZXAyLmZpbmQoJy5kcm9wZG93bi1jb250YWluZXItd2lkZ2V0JylcbiAgICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcbiAgICBcbiAgICBpZiBAc3Vial9jb3VudD4xXG4gICAgICBAcmVtb3ZlX3N1YmplY3Quc2hvdygpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQv9GA0LXQtNC80LXRglxuICByZW1vdmVTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN1YmpfY291bnQtLVxuICAgICQoJy5zdWJqLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQHN1YmpfY291bnQ8MlxuICAgICAgQHJlbW92ZV9zdWJqZWN0LmhpZGUoKVxuXG4gICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCx0LvQvtC60L7QsiDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMXG4gIHZhbGlkYXRlOiAoaW5wdXQpPT5cblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSAnZGF0YS1oNS1lcnJvcmlkJ1xuICAgICAgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaDUtZXJyb3JpZCcpXG5cbiAgICBpZiBpbnB1dC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcbiAgICAgIGlmIGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkICd1aS1zdGF0ZS1lcnJvcidcblxuICAgIGlmIGlucHV0LmNsYXNzTGlzdC5jb250YWlucyAndWktc3RhdGUtZXJyb3InXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgZWxzZVxuICAgICAgaWYgZXJyb3JcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgcmV0dXJuIHRydWVcblxuICAjINCf0LXRgNC10YXQvtC0INC60L4g0LLRgtC+0YDQvtC80YMg0YjQsNCz0YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBzdGVwMVN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMS5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAxLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCo0LDQsyAxXG4gICMg0JDQstCw0YLQsNGAXG4gIGRyb3BlZDogKGV2ZW50KS0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEZpbGVBUEkuZ2V0RHJvcEZpbGVzIGV2ZW50LCAoZmlsZXMpLT5cblxuICAjINC/0L7QtNCy0LXQu9C4INC60YPRgNGB0L7RgCDQuiDQsdC70L7QutGDINC00YDQvtC/0LAg0LDQstCw0YLQsNGA0LrQuFxuICBvdmVyOiAob3ZlciktPlxuXG4gICMg0LHRgNC+0YHQuNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBkcm9wOiAoZmlsZXMpPT5cbiAgICBjb25zb2xlLmxvZyAgZmlsZXNcbiAgICBpZiBmaWxlcy5sZW5ndGhcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIFxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBAYXZhdGFyVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgIGF2YXRhciA9IGRvY3VtZW50LmltcG9ydE5vZGUgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQsIHRydWVcbiAgICAgICAgcHJldiA9IEBmaWxlU2VsZWN0b3IucHJldigpXG4gICAgICAgIGlmIHByZXYuaGFzQ2xhc3MoJ2N1cnJlbnQtYXZhdGFyJylcbiAgICAgICAgICBwcmV2LnJlbW92ZSgpXG4gICAgICAgIEBmaWxlU2VsZWN0b3IuYmVmb3JlIGF2YXRhclxuICAgICAgICBAZmlsZVNlbGVjdG9yLnByZXYoKS5maW5kKCcuY2xvc2UnKS5vbiAnY2xpY2snLCBAcmVtb3ZlQXZhdGFyXG4gICAgICBcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMIGZpbGVzWzBdXG5cbiAgIyDQo9C00LDQu9C40LvQuCDQsNCy0LDRgtGA0LDQutGDXG4gIHJlbW92ZUF2YXRhcjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgQGZpbGUucmVwbGFjZVdpdGggQGZpbGUudmFsKCcnKS5jbG9uZSh0cnVlKVxuICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0JLRi9Cx0YDQsNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBhdmF0YXJTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgZmlsZXMgPSBGaWxlQVBJLmdldEZpbGVzKGV2ZW50KVxuXG4gICAgZXh0ID0gZmlsZXNbMF1bJ25hbWUnXS5zdWJzdHJpbmcoZmlsZXNbMF1bJ25hbWUnXS5sYXN0SW5kZXhPZignLicpICsgMSkudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKGZpbGVzWzBdICYmIChmaWxlc1swXS5zaXplIDw9IEZpbGVBUEkuTUIpICYmIChleHQgPT0gXCJnaWZcIiB8fCBleHQgPT0gXCJwbmdcIiB8fCBleHQgPT0gXCJqcGVnXCIgfHwgZXh0ID09IFwianBnXCIpKVxuICAgICAgICBcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpPT5cbiAgICAgICAgXG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcblxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAgIGVsc2VcbiAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgICBAZmlsZSA9IEBzdGVwMS5maW5kICcjcmVnaXN0cmF0aW9uLWF2YXRhcidcblxuICAjINCf0YDQvtCy0LXRgNGP0LXQvCDQvNC+0LbQtdGCINC70Lgg0YHRg9GJ0LXRgdGC0LLQvtCy0LDRgtGMINGD0LrQsNC30LDQvdC90LDRjyDQtNCw0YLQsCwg0L3QsNC/0YDQuNC80LXRgCAzMSDRhNC10LLRgNCw0LvRjyDQuCDQuNGB0L/RgNCw0LLQu9GP0LXQvCDQsiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQutC4XG4gIGNoZWNrRGF0ZTogKGV2ZW50KT0+XG4gICAgZGF5ID0gcGFyc2VJbnQgQGRheS52YWwoKS50cmltKCksIDEwXG4gICAgXG4gICAgaWYgZGF5PDEgfHwgaXNOYU4oZGF5KVxuICAgICAgQGRheS52YWwgMVxuICAgICAgcmV0dXJuXG5cbiAgICBkYXlzID0gcGFyc2VJbnQgbW9tZW50KEB5ZWFyLnZhbCgpK1wiLVwiKyhwYXJzZUludChAbW9udGgudmFsKCksMTApKzEpLCBcIllZWVktTU1cIikuZGF5c0luTW9udGgoKSwgMTBcbiAgICBpZiBkYXk+ZGF5c1xuICAgICAgQGRheS52YWwgZGF5c1xuICAgIHJldHVyblxuXG4gICAgaWYgZGF5PjMxXG4gICAgICBAZGF5LnZhbCAzMVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUGVyc29uYWxEYXRhQWxsKClcblxuXG4iXX0=