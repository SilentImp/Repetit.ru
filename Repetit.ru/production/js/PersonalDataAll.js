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
      onSelect: (function(_this) {
        return function(evt, ui) {
          var reader;
          _this.cerificates_count++;
          reader = new FileReader();
          reader.onload = function(event) {
            return _this.cert_list.append(_this.sertificat_source({
              "id": _this.cerificates_count,
              "src": event.target.result
            }));
          };
          return reader.readAsDataURL(ui.files[0]);
        };
      })(this),
      elements: {
        ctrl: {
          upload: '.add-sertificat label'
        },
        list: '.sertificat-list'
      }
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

  PersonalDataAll.prototype.getSections = function() {
    var chapter, chapters, section, sections, _i, _len;
    chapters = ['математический анализ', 'теория вероятностей', 'теоретическая механика', 'сопромат', 'математи логика', 'эконометрика', 'высшая математика', 'линейная алгебра', 'дифференциальная геометрия', 'аналитическая геометрия', 'математическая физика', 'дифференциальные уравнения', 'математическая статистика', 'линейная геометрия', 'дискретная математика', 'топология', 'функциональный анализ', 'интегральные уравнения', 'теория чисел', 'векторный анализ', 'ТФКП', 'тензорный анализ', 'финансовая математика', 'уравнения в частных производных', 'актуарная математика', 'теория графов', 'комбинаторика', 'математические модели', 'прикладная математика', 'тригоном-ия', 'уравнения математической физики', 'численные методы', 'теория приближений', 'теория оптимизации', '.школьный курс', 'на английском языке', 'алгебра логики', 'вычислимые функции', 'теория игр', 'вариационное исчисление', 'оптимальное управление', 'методы оптимизации', 'линейное программирование', 'алгебра', 'геометрия', 'методы оптимальных решений'];
    sections = new Array;
    section = new Object;
    for (_i = 0, _len = chapters.length; _i < _len; _i++) {
      chapter = chapters[_i];
      section = {
        title: chapter
      };
      sections.push(section);
    }
    return sections;
  };

  PersonalDataAll.prototype.getSubSections = function() {
    var chapter, chapters, section, sections, _i, _len;
    chapters = ['ОГЭ (ГИА)', 'Подготовка к олимпиадам', 'Подготовка к экзаменам'];
    sections = new Array;
    section = new Object;
    for (_i = 0, _len = chapters.length; _i < _len; _i++) {
      chapter = chapters[_i];
      section = {
        title: chapter
      };
      sections.push(section);
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
    var element, half_length, leftSide, line, next, sections, select, subsections, _i, _len, _ref, _results;
    select = $(event.currentTarget);
    select.removeClass('unchanged');
    line = select.parents('.line');
    subsections = this.getSubSections();
    half_length = Math.ceil(subsections.length / 2);
    leftSide = subsections.splice(0, half_length);
    sections = this.subject_section_source({
      index: this.subj_count,
      section: this.getSections(),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLGlEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2REFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLDJEQUFBLENBQUE7QUFBQSxxREFBQSxDQUFBO0FBQUEsNkNBQUEsQ0FBQTtBQUFBLFFBQUEsaUJBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBQSxDQUFFLHFCQUFGLENBQVYsQ0FBQTtBQUNBLElBQUEsSUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsQ0FBckI7QUFDRSxZQUFVLElBQUEsS0FBQSxDQUFNLGtCQUFOLENBQVYsQ0FERjtLQURBO0FBQUEsSUFJQSxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FKVCxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLFFBQWIsQ0FMVixDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLGdCQUFiLENBTlgsQ0FBQTtBQUFBLElBUUEs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Q0FBVCxFQUF5RixFQUF6RixDQU5QLENBQUE7QUFPQSxJQUFBLElBQUcsR0FBQSxHQUFJLElBQVA7QUFDRSxNQUFBLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFTLElBQVQsQ0FBQSxDQURGO0tBUEE7QUFTQSxVQUFBLENBVEE7QUFXQSxJQUFBLElBQUcsR0FBQSxHQUFJLEVBQVA7YUFDRSxJQUFDLENBQUEsR0FBRyxDQUFDLEdBQUwsQ0FBUyxFQUFULEVBREY7S0FaUztFQUFBLENBdmhCWCxDQUFBOzt5QkFBQTs7SUFERixDQUFBOztBQUFBLENBdWlCQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO1NBQ1osSUFBQSxlQUFBLENBQUEsRUFEWTtBQUFBLENBQWxCLENBdmlCQSxDQUFBIiwiZmlsZSI6IlBlcnNvbmFsRGF0YUFsbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBlcnNvbmFsRGF0YUFsbFxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAd2lkZ2V0ID0gJCAnLnJlZ2lzdHJhdGlvbi1zdGVwcydcbiAgICBpZiBAd2lkZ2V0Lmxlbmd0aCA9PSAwXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9C90LUg0L3QsNC50LTQtdC9INCy0LjQtNC20LXRgicpXG5cbiAgICBAc3RlcHMgPSBAd2lkZ2V0LmZpbmQgJy5zdGVwcydcbiAgICBAcGFuZWxzID0gQHdpZGdldC5maW5kICcucGFuZWwnXG4gICAgQGN1cnJlbnQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5jdXJyZW50J1xuXG4gICAgQHN0ZXAxID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0xJ1xuICAgIEBzdGVwMiA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMidcbiAgICBAc3RlcDMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTMnXG4gICAgQHN0ZXA0ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC00J1xuICAgIEBzdGVwNSA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtNSdcblxuICAgICMg0J7QsdGJ0LXQtVxuICAgIHNlbGVjdCA9ICQgJ3NlbGVjdCdcbiAgICBpZiBzZWxlY3QubGVuZ3RoID4gMFxuICAgICAgc2VsZWN0LmNob3NlblxuICAgICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG5cbiAgICAjINCo0LDQsyAxXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMS5oNVZhbGlkYXRlKClcblxuICAgICMg0JfQsNCz0YDRg9C30LrQsCDQsNCy0LDRgtCw0YDQsFxuICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuICAgIEBhdmF0YXJUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICdjdXJyZW50LWF2YXRhci10ZW1wbGF0ZSdcbiAgICBAZmlsZVNlbGVjdG9yID0gQHN0ZXAxLmZpbmQgJy5maWxlLXNlbGVjdG9yJ1xuICAgIFxuICAgIEZpbGVBUEkuZXZlbnQub24gQGZpbGVbMF0sICdjaGFuZ2UnLCBAYXZhdGFyU2VsZWN0ZWRcbiAgICBAZmlsZVNlbGVjdG9yLmRuZCBAb3ZlciwgQGRyb3BcbiAgICBGaWxlQVBJLmV2ZW50Lm9uIGRvY3VtZW50LCAnZHJvcCcsIEBkcm9wZWRcblxuICAgICMg0J/QvtC70LfRg9C90L7QuiDQvtC/0YvRgtCwXG4gICAgZXhwID0gJCAnI2V4cGVyaWVuY2UnXG4gICAgaWYgZXhwLmxlbmd0aCA+IDBcbiAgICAgIGV4cC5ub1VpU2xpZGVyXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIGNvbm5lY3Q6IFwibG93ZXJcIixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHJhbmdlOlxuICAgICAgICAgICdtaW4nOiBbMF0sXG4gICAgICAgICAgJ21heCc6IFs1MF1cbiAgICAgICAgZm9ybWF0OiB3TnVtYlxuICAgICAgICAgIGRlY2ltYWxzOiAwXG4gICAgICBleHAuTGluaygnbG93ZXInKS50bygkKCcjZXhwZXJpZW5jZS12YWx1ZScpKVxuXG4gICAgIyDQlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPXG4gICAgQG1vbnRoID0gQHN0ZXAxLmZpbmQgJy5tb250aCBzZWxlY3QnXG4gICAgQHllYXIgID0gQHN0ZXAxLmZpbmQgJy55ZWFyIHNlbGVjdCdcbiAgICBAZGF5ICAgPSBAc3RlcDEuZmluZCAnaW5wdXQuZGF5J1xuICAgIEBkYXkub24gICAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuICAgIEBtb250aC5vbiAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuICAgIEB5ZWFyLm9uICAnY2hhbmdlJywgQGNoZWNrRGF0ZVxuXG4gICAgIyDQntGC0L/RgNCw0LLQutCwINC00LDQvdC90YvRhSDQqNCw0LMgMVxuICAgIEBzdGVwMS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMVN1Ym1pdFxuXG5cbiAgICAjINCo0LDQsyAyXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMi5oNVZhbGlkYXRlKClcblxuICAgICMg0J/QvtC70LfRg9C90L7QuiDQtNC70LjRgtC10LvRjNC90L7RgdGC0Lgg0LfQsNC90Y/RgtC40LlcbiAgICBAZHVyYXRpb25fdmFsdWUgPSAkKCcjZHVyYXRpb24tdmFsdWUnKVxuXG4gICAgdGltZSA9ICQgJyNkdXJhdGlvbidcbiAgICBpZiB0aW1lLmxlbmd0aCA+IDBcbiAgICAgIHRpbWUubm9VaVNsaWRlclxuICAgICAgICBzdGVwOiA1LFxuICAgICAgICBjb25uZWN0OiBcImxvd2VyXCIsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICByYW5nZTpcbiAgICAgICAgICAnbWluJzogWzMwXSxcbiAgICAgICAgICAnbWF4JzogWzE4MF1cbiAgICAgICAgZm9ybWF0OiB3TnVtYlxuICAgICAgICAgIGRlY2ltYWxzOiAwXG5cbiAgICAgIFxuICAgICAgdGltZS5MaW5rKCdsb3dlcicpLnRvKEBkdXJhdGlvbl92YWx1ZSlcbiAgICAgIHRpbWUub24gJ2NoYW5nZScsIChldmVudCwgdWkpPT5cbiAgICAgICAgJCgnc3Ryb25nLm1pbi10aW1lJykudGV4dCh1aSlcblxuICAgICMg0KTQvtGA0LzQsNGCINC30LDQvdGP0YLQuNC5XG4gICAgQGZvcm1hdHMgPSBAc3RlcDIuZmluZCAnLmxlc3NvbnMtZm9ybWF0J1xuICAgIEBmb3JtYXRzLmZpbmQoJ2lucHV0Jykub24gJ2NoYW5nZScsIEBjaGVja0Zvcm1hdFxuICAgIEBjaGVja0Zvcm1hdCgpXG5cbiAgICAjINCU0L7QsdCw0LLQutCwINC/0YDQtdC00LzQtdGC0LBcbiAgICBAYWRkX3N1YmplY3QgPSBAc3RlcDIuZmluZCAnLmFkZC1zdWJqZWN0J1xuICAgIEBzdWJqX2NvdW50ID0gMFxuICAgIEBzdWJqZWN0X3NvdXJjZSA9ICQoXCIjc3Viai10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc3ViamVjdF9zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQHN1YmplY3Rfc291cmNlXG4gICAgQGFkZF9zdWJqZWN0Lm9uICdjbGljaycsIEBuZXdTdWJqZWN0XG4gICAgQGFkZF9zdWJqZWN0LnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgIyDQn9C+0LTRgNCw0LfQtNC10LvRiyDQv9GA0LXQtNC80LXRgtCwXG4gICAgQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2UgPSAkKFwiI3N1Ymotc2VjdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZVxuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L/RgNC10LTQvNC10YLQsFxuICAgIEByZW1vdmVfc3ViamVjdCA9IEBzdGVwMi5maW5kICcucmVtb3ZlLXN1YmplY3QnXG4gICAgQHJlbW92ZV9zdWJqZWN0Lm9uICdjbGljaycsIEByZW1vdmVTdWJqZWN0XG5cbiAgICBAc3RlcDIuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDJTdWJtaXRcbiAgICBAc3RlcDIuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwMkJhY2tcblxuXG4gICAgIyDQqNCw0LMgM1xuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDMuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0LDQtNGA0LXRgdCwXG4gICAgQGFkZF9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5hZGQtYWRkcmVzcydcbiAgICBAYWRkcmVzc19jb3VudCA9IDBcbiAgICBAYWRkcmVzc19zb3VyY2UgPSAkKFwiI2FkZHJlc3MtdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQGFkZHJlc3Nfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBhZGRyZXNzX3NvdXJjZVxuICAgIEBhZGRfYWRkcmVzcy5vbiAnY2xpY2snLCBAbmV3QWRkcmVzc1xuICAgIEBhZGRfYWRkcmVzcy50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INCw0LTRgNC10YHQsFxuICAgIEByZW1vdmVfYWRkcmVzcyA9IEBzdGVwMy5maW5kICcucmVtb3ZlLWFkZHJlc3MnXG4gICAgQHJlbW92ZV9hZGRyZXNzLm9uICdjbGljaycsIEByZW1vdmVBZGRyZXNzXG5cbiAgICBAc3RlcDMuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDNTdWJtaXRcbiAgICBAc3RlcDMuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwM0JhY2tcblxuXG4gICAgIyDQqNCw0LMgNFxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDQuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEBhZGRfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5hZGQtZWR1Y2F0aW9uJ1xuICAgIEBlZHVjYXRpb25fY291bnQgPSAwXG4gICAgQGVkdWNhdGlvbl9zb3VyY2UgPSAkKFwiI2VkdWNhdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAZWR1Y2F0aW9uX3NvdXJjZVxuICAgIEBhZGRfZWR1Y2F0aW9uLm9uICdjbGljaycsIEBuZXdFZHVjYXRpb25cbiAgICBAYWRkX2VkdWNhdGlvbi50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cbiAgICBAcmVtb3ZlX2VkdWNhdGlvbiA9IEBzdGVwNC5maW5kICcucmVtb3ZlLWVkdWNhdGlvbidcbiAgICBAcmVtb3ZlX2VkdWNhdGlvbi5vbiAnY2xpY2snLCBAcmVtb3ZlRWR1Y2F0aW9uXG5cbiAgICBAc2VydGlmaWNhdF9zb3VyY2UgPSAkKFwiI3NlcnRpZmljYXQtdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQHNlcnRpZmljYXRfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzZXJ0aWZpY2F0X3NvdXJjZVxuICAgIEBjZXJ0X2xpc3QgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXQtbGlzdCdcbiAgICBAY2VyaWZpY2F0ZXNfY291bnQgPSAwXG4gICAgQHNlcnRpZmljYXRzID0gQHN0ZXA0LmZpbmQgJy5zZXJ0aWZpY2F0cydcbiAgICBAc2VydGlmaWNhdHMuZmlsZWFwaVxuICAgICAgdXJsOiAnaHR0cDovL3Rlc3Quc2lsZW50aW1wLmluZm8vdGVzdC5waHAnXG4gICAgICBkdXBsaWNhdGU6IGZhbHNlLFxuICAgICAgYWNjZXB0OiAnaW1hZ2UvKicsXG4gICAgICBtYXhTaXplOiA1ICogRmlsZUFQSS5NQixcbiAgICAgIGF1dG9VcGxvYWQ6IGZhbHNlLFxuICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICBvblNlbGVjdDogKGV2dCwgdWkpPT5cbiAgICAgICAgQGNlcmlmaWNhdGVzX2NvdW50KytcbiAgICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgICAgQGNlcnRfbGlzdC5hcHBlbmQgQHNlcnRpZmljYXRfc291cmNlXG4gICAgICAgICAgICBcImlkXCIgOiBAY2VyaWZpY2F0ZXNfY291bnRcbiAgICAgICAgICAgIFwic3JjXCIgOiBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMIHVpLmZpbGVzWzBdXG4gICAgICBlbGVtZW50czpcbiAgICAgICAgY3RybDpcbiAgICAgICAgICB1cGxvYWQ6ICcuYWRkLXNlcnRpZmljYXQgbGFiZWwnXG4gICAgICAgIGxpc3Q6ICcuc2VydGlmaWNhdC1saXN0J1xuXG4gICAgQHN0ZXA0LmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXA0U3VibWl0XG4gICAgQHN0ZXA0LmZpbmQoJ2EucHJldmlvdXMnKS5vbiAnY2xpY2snLCBAc3RlcDRCYWNrXG5cbiAgYWRkSGludDogPT5cbiAgICBsb2NhdGlvbnMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy5vYmoud2hpdGVzcGFjZShcImNpdHlcIiksXG4gICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICBwcmVmZXRjaDogXCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8yMDgxMDc3Mi9jaXR5cy5qc29uXCJcbiAgICBcbiAgICBsb2NhdGlvbnMuaW5pdGlhbGl6ZSgpXG5cbiAgICAkKCcuY2l0eScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ2xvY2F0aW9ucydcbiAgICAgIGRpc3BsYXlLZXk6ICdjaXR5JyxcbiAgICAgIHNvdXJjZTogbG9jYXRpb25zLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+PGI+e3tyZWdpb259fTwvYj57e2NpdHl9fTwvcD4nKVxuXG4gICAgdW5pdmVyY2l0eXMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IChkYXRhKS0+XG4gICAgICAgIHJldHVybiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZShkYXRhLnRpdGxlKVxuICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgbG9jYWw6IFt7XCJ0aXRsZVwiOlwiQW5kb3JyYVwifSx7XCJ0aXRsZVwiOlwiVW5pdGVkQXJhYkVtaXJhdGVzXCJ9LHtcInRpdGxlXCI6XCJBZmdoYW5pc3RhblwifSx7XCJ0aXRsZVwiOlwiQW50aWd1YWFuZEJhcmJ1ZGFcIn0se1widGl0bGVcIjpcIkFuZ3VpbGxhXCJ9LHtcInRpdGxlXCI6XCJBbGJhbmlhXCJ9LHtcInRpdGxlXCI6XCJBcm1lbmlhXCJ9LHtcInRpdGxlXCI6XCJBbmdvbGFcIn0se1widGl0bGVcIjpcIkFudGFyY3RpY2FcIn1dXG5cbiAgICB1bml2ZXJjaXR5cy5pbml0aWFsaXplKClcblxuICAgICQoJy51bml2ZXJjaXR5Om5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgJCgnLmZhY3VsdHk6bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICAkKCcuc3BlY2lhbGl6YXRpb246bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0YDQsNC30LTQtdC70L7QsiDQtNC70Y8g0L/RgNC10LTQvNC10YLQsFxuICBnZXRTZWN0aW9uczogPT5cbiAgICBjaGFwdGVycyA9IFsn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQuSDQsNC90LDQu9C40LcnLCfRgtC10L7RgNC40Y8g0LLQtdGA0L7Rj9GC0L3QvtGB0YLQtdC5Jywn0YLQtdC+0YDQtdGC0LjRh9C10YHQutCw0Y8g0LzQtdGF0LDQvdC40LrQsCcsJ9GB0L7Qv9GA0L7QvNCw0YInLCfQvNCw0YLQtdC80LDRgtC4INC70L7Qs9C40LrQsCcsJ9GN0LrQvtC90L7QvNC10YLRgNC40LrQsCcsJ9Cy0YvRgdGI0LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcsJ9C70LjQvdC10LnQvdCw0Y8g0LDQu9Cz0LXQsdGA0LAnLCfQtNC40YTRhNC10YDQtdC90YbQuNCw0LvRjNC90LDRjyDQs9C10L7QvNC10YLRgNC40Y8nLCfQsNC90LDQu9C40YLQuNGH0LXRgdC60LDRjyDQs9C10L7QvNC10YLRgNC40Y8nLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQsNGPINGE0LjQt9C40LrQsCcsJ9C00LjRhNGE0LXRgNC10L3RhtC40LDQu9GM0L3Ri9C1INGD0YDQsNCy0L3QtdC90LjRjycsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutCw0Y8g0YHRgtCw0YLQuNGB0YLQuNC60LAnLCfQu9C40L3QtdC50L3QsNGPINCz0LXQvtC80LXRgtGA0LjRjycsJ9C00LjRgdC60YDQtdGC0L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJywn0YLQvtC/0L7Qu9C+0LPQuNGPJywn0YTRg9C90LrRhtC40L7QvdCw0LvRjNC90YvQuSDQsNC90LDQu9C40LcnLCfQuNC90YLQtdCz0YDQsNC70YzQvdGL0LUg0YPRgNCw0LLQvdC10L3QuNGPJywn0YLQtdC+0YDQuNGPINGH0LjRgdC10LsnLCfQstC10LrRgtC+0YDQvdGL0Lkg0LDQvdCw0LvQuNC3Jywn0KLQpNCa0J8nLCfRgtC10L3Qt9C+0YDQvdGL0Lkg0LDQvdCw0LvQuNC3Jywn0YTQuNC90LDQvdGB0L7QstCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnLCfRg9GA0LDQstC90LXQvdC40Y8g0LIg0YfQsNGB0YLQvdGL0YUg0L/RgNC+0LjQt9Cy0L7QtNC90YvRhScsJ9Cw0LrRgtGD0LDRgNC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcsJ9GC0LXQvtGA0LjRjyDQs9GA0LDRhNC+0LInLCfQutC+0LzQsdC40L3QsNGC0L7RgNC40LrQsCcsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutC40LUg0LzQvtC00LXQu9C4Jywn0L/RgNC40LrQu9Cw0LTQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnLCfRgtGA0LjQs9C+0L3QvtC8LdC40Y8nLCfRg9GA0LDQstC90LXQvdC40Y8g0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60L7QuSDRhNC40LfQuNC60LgnLCfRh9C40YHQu9C10L3QvdGL0LUg0LzQtdGC0L7QtNGLJywn0YLQtdC+0YDQuNGPINC/0YDQuNCx0LvQuNC20LXQvdC40LknLCfRgtC10L7RgNC40Y8g0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCcsJy7RiNC60L7Qu9GM0L3Ri9C5INC60YPRgNGBJywn0L3QsCDQsNC90LPQu9C40LnRgdC60L7QvCDRj9C30YvQutC1Jywn0LDQu9Cz0LXQsdGA0LAg0LvQvtCz0LjQutC4Jywn0LLRi9GH0LjRgdC70LjQvNGL0LUg0YTRg9C90LrRhtC40LgnLCfRgtC10L7RgNC40Y8g0LjQs9GAJywn0LLQsNGA0LjQsNGG0LjQvtC90L3QvtC1INC40YHRh9C40YHQu9C10L3QuNC1Jywn0L7Qv9GC0LjQvNCw0LvRjNC90L7QtSDRg9C/0YDQsNCy0LvQtdC90LjQtScsJ9C80LXRgtC+0LTRiyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4Jywn0LvQuNC90LXQudC90L7QtSDQv9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtScsJ9Cw0LvQs9C10LHRgNCwJywn0LPQtdC+0LzQtdGC0YDQuNGPJywn0LzQtdGC0L7QtNGLINC+0L/RgtC40LzQsNC70YzQvdGL0YUg0YDQtdGI0LXQvdC40LknXVxuICAgIHNlY3Rpb25zID0gbmV3IEFycmF5XG4gICAgc2VjdGlvbiA9IG5ldyBPYmplY3RcbiAgICBmb3IgY2hhcHRlciBpbiBjaGFwdGVyc1xuICAgICAgc2VjdGlvbiA9IHt0aXRsZSA6IGNoYXB0ZXJ9XG4gICAgICBzZWN0aW9ucy5wdXNoIHNlY3Rpb25cbiAgICByZXR1cm4gc2VjdGlvbnNcblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDQtNC+0L/QvtC70L3QtdC90LjQuSDQtNC70Y8g0YDQsNC30LTQtdC70LBcbiAgZ2V0U3ViU2VjdGlvbnM6ID0+XG4gICAgY2hhcHRlcnMgPSBbJ9Ce0JPQrSAo0JPQmNCQKScsJ9Cf0L7QtNCz0L7RgtC+0LLQutCwINC6INC+0LvQuNC80L/QuNCw0LTQsNC8Jywn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0Y3QutC30LDQvNC10L3QsNC8J11cbiAgICBzZWN0aW9ucyA9IG5ldyBBcnJheVxuICAgIHNlY3Rpb24gPSBuZXcgT2JqZWN0XG4gICAgZm9yIGNoYXB0ZXIgaW4gY2hhcHRlcnNcbiAgICAgIHNlY3Rpb24gPSB7dGl0bGUgOiBjaGFwdGVyfVxuICAgICAgc2VjdGlvbnMucHVzaCBzZWN0aW9uXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgbmV3RWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9lZHVjYXRpb24ucGFyZW50KCkuYmVmb3JlIEBlZHVjYXRpb25fc291cmNlKHsnaW5kZXgnIDogQGVkdWNhdGlvbl9jb3VudH0pXG4gICAgQGVkdWNhdGlvbl9jb3VudCsrXG4gICAgQHN0ZXA0LmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGVkdWNhdGlvbl9jb3VudD4xXG4gICAgICBAcmVtb3ZlX2VkdWNhdGlvbi5zaG93KClcblxuICAgICMg0JDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjQtSDQtNC70Y8g0LLRi9Cx0L7RgNCwINCz0L7RgNC+0LTQsCDQuCDQstGD0LfQsFxuICAgIEBhZGRIaW50KClcblxuICAjINCj0LTQsNC70LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgcmVtb3ZlRWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGVkdWNhdGlvbl9jb3VudC0tXG4gICAgJCgnLmVkdWNhdGlvbi13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBlZHVjYXRpb25fY291bnQ8MlxuICAgICAgQHJlbW92ZV9lZHVjYXRpb24uaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDQg0LogNSDRiNCw0LPRg1xuICBzdGVwNFN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwNC5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXA0LmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgNCDQuiAzINGI0LDQs9GDXG4gIHN0ZXA0QmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMyDQuiA0INGI0LDQs9GDXG4gIHN0ZXAzU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAzLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDMuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMyDQuiAyINGI0LDQs9GDXG4gIHN0ZXAzQmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQsNC00YDQtdGBXG4gIG5ld0FkZHJlc3M6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX2FkZHJlc3MucGFyZW50KCkuYmVmb3JlIEBhZGRyZXNzX3NvdXJjZSh7J2luZGV4JyA6IEBhZGRyZXNzX2NvdW50fSlcbiAgICBAYWRkcmVzc19jb3VudCsrXG4gICAgQHN0ZXAzLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGFkZHJlc3NfY291bnQ+MVxuICAgICAgQHJlbW92ZV9hZGRyZXNzLnNob3coKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICByZW1vdmVBZGRyZXNzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZHJlc3NfY291bnQtLVxuICAgICQoJy5hZHJlc3Mtd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAYWRkcmVzc19jb3VudDwyXG4gICAgICBAcmVtb3ZlX2FkZHJlc3MuaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDIg0LogMyDRiNCw0LPRg1xuICBzdGVwMlN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMi5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAyLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDIg0LogMSDRiNCw0LPRg1xuICBzdGVwMkJhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCR0LvQvtC60LjRgNC+0LLQsNGC0Ywg0YbQtdC90Ysg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9GFINGE0L7RgNC80LDRgtC+0LIg0LfQsNC90Y/RgtC40LlcbiAgY2hlY2tGb3JtYXQ6ID0+XG4gICAgaW5wdXRzID0gQGZvcm1hdHMuZmluZCAnaW5wdXQnXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgZWxlbWVudHMgPSBAc3RlcDIuZmluZCgnaW5wdXQuJytpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UtZmllbGQnKSlcbiAgICAgIGZvciBlbGVtZW50IGluIGVsZW1lbnRzXG4gICAgICAgIHByaWNlID0gJChlbGVtZW50KS5jbG9zZXN0KCcuc3ViZGV2aXNpb24nKVxuICAgICAgICBpZiBpbnB1dC5jaGVja2VkXG4gICAgICAgICAgcHJpY2UucmVtb3ZlQ2xhc3MoJ2hpZGUnKVxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHByaWNlLmFkZENsYXNzKCdoaWRlJylcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3VpLXN0YXRlLWVycm9yJylcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgc3ViamVjdFNlbGVjdGVkOiAoZXZlbnQpPT5cbiAgICBzZWxlY3QgPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICBzZWxlY3QucmVtb3ZlQ2xhc3MgJ3VuY2hhbmdlZCdcbiAgICBsaW5lID0gc2VsZWN0LnBhcmVudHMoJy5saW5lJylcbiAgICBcbiAgICBzdWJzZWN0aW9ucyA9IEBnZXRTdWJTZWN0aW9ucygpXG4gICAgaGFsZl9sZW5ndGggPSBNYXRoLmNlaWwoc3Vic2VjdGlvbnMubGVuZ3RoIC8gMilcbiAgICBsZWZ0U2lkZSA9IHN1YnNlY3Rpb25zLnNwbGljZSgwLGhhbGZfbGVuZ3RoKVxuXG4gICAgc2VjdGlvbnMgPSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSh7XG4gICAgICBpbmRleCA6IEBzdWJqX2NvdW50XG4gICAgICBzZWN0aW9uIDogQGdldFNlY3Rpb25zKClcbiAgICAgIGNvbHVtbjEgOiBsZWZ0U2lkZVxuICAgICAgY29sdW1uMiA6IHN1YnNlY3Rpb25zXG4gICAgICB9KVxuICAgIFxuICAgIG5leHQgPSBsaW5lLm5leHQoKVxuICAgIGlmIG5leHQuaGFzQ2xhc3MoJ3NlY3Rpb24nKVxuICAgICAgbmV4dC5yZXBsYWNlV2l0aCBzZWN0aW9uc1xuICAgIGVsc2VcbiAgICAgIGxpbmUuYWZ0ZXIgc2VjdGlvbnNcbiAgICBcbiAgICBAc3RlcDIuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGL0Lkg0L/RgNC10LTQvNC10YJcbiAgbmV3U3ViamVjdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfc3ViamVjdC5wYXJlbnQoKS5iZWZvcmUgQHN1YmplY3Rfc291cmNlKHsnaW5kZXgnIDogQHN1YmpfY291bnR9KVxuICAgIEBzdWJqX2NvdW50KytcbiAgICBcbiAgICB3cmFwcGVyID0gQGFkZF9zdWJqZWN0LnBhcmVudCgpLnByZXYoKVxuICAgIHdyYXBwZXIuZmluZCgnc2VsZWN0Jykub24gJ2NoYW5nZScsIEBzdWJqZWN0U2VsZWN0ZWRcblxuICAgIEBzdGVwMi5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIEBzdGVwMi5maW5kKCcubWluLXRpbWUnKS50ZXh0IEBkdXJhdGlvbl92YWx1ZS52YWwoKVxuICAgIEBjaGVja0Zvcm1hdCgpXG4gICAgZm9yIGVsZW1lbnQgaW4gQHN0ZXAyLmZpbmQoJy5kcm9wZG93bi1jb250YWluZXItd2lkZ2V0JylcbiAgICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcbiAgICBcbiAgICBpZiBAc3Vial9jb3VudD4xXG4gICAgICBAcmVtb3ZlX3N1YmplY3Quc2hvdygpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQv9GA0LXQtNC80LXRglxuICByZW1vdmVTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN1YmpfY291bnQtLVxuICAgICQoJy5zdWJqLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQHN1YmpfY291bnQ8MlxuICAgICAgQHJlbW92ZV9zdWJqZWN0LmhpZGUoKVxuXG4gICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCx0LvQvtC60L7QsiDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMXG4gIHZhbGlkYXRlOiAoaW5wdXQpPT5cblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSAnZGF0YS1oNS1lcnJvcmlkJ1xuICAgICAgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaDUtZXJyb3JpZCcpXG5cbiAgICBpZiBpbnB1dC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcbiAgICAgIGlmIGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkICd1aS1zdGF0ZS1lcnJvcidcblxuICAgIGlmIGlucHV0LmNsYXNzTGlzdC5jb250YWlucyAndWktc3RhdGUtZXJyb3InXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgZWxzZVxuICAgICAgaWYgZXJyb3JcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgcmV0dXJuIHRydWVcblxuICAjINCf0LXRgNC10YXQvtC0INC60L4g0LLRgtC+0YDQvtC80YMg0YjQsNCz0YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBzdGVwMVN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMS5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAxLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCo0LDQsyAxXG4gICMg0JDQstCw0YLQsNGAXG4gIGRyb3BlZDogKGV2ZW50KS0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEZpbGVBUEkuZ2V0RHJvcEZpbGVzIGV2ZW50LCAoZmlsZXMpLT5cblxuICAjINC/0L7QtNCy0LXQu9C4INC60YPRgNGB0L7RgCDQuiDQsdC70L7QutGDINC00YDQvtC/0LAg0LDQstCw0YLQsNGA0LrQuFxuICBvdmVyOiAob3ZlciktPlxuXG4gICMg0LHRgNC+0YHQuNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBkcm9wOiAoZmlsZXMpPT5cbiAgICBjb25zb2xlLmxvZyAgZmlsZXNcbiAgICBpZiBmaWxlcy5sZW5ndGhcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIFxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBAYXZhdGFyVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgIGF2YXRhciA9IGRvY3VtZW50LmltcG9ydE5vZGUgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQsIHRydWVcbiAgICAgICAgcHJldiA9IEBmaWxlU2VsZWN0b3IucHJldigpXG4gICAgICAgIGlmIHByZXYuaGFzQ2xhc3MoJ2N1cnJlbnQtYXZhdGFyJylcbiAgICAgICAgICBwcmV2LnJlbW92ZSgpXG4gICAgICAgIEBmaWxlU2VsZWN0b3IuYmVmb3JlIGF2YXRhclxuICAgICAgICBAZmlsZVNlbGVjdG9yLnByZXYoKS5maW5kKCcuY2xvc2UnKS5vbiAnY2xpY2snLCBAcmVtb3ZlQXZhdGFyXG4gICAgICBcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMIGZpbGVzWzBdXG5cbiAgIyDQo9C00LDQu9C40LvQuCDQsNCy0LDRgtGA0LDQutGDXG4gIHJlbW92ZUF2YXRhcjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgQGZpbGUucmVwbGFjZVdpdGggQGZpbGUudmFsKCcnKS5jbG9uZSh0cnVlKVxuICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0JLRi9Cx0YDQsNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBhdmF0YXJTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgZmlsZXMgPSBGaWxlQVBJLmdldEZpbGVzKGV2ZW50KVxuXG4gICAgZXh0ID0gZmlsZXNbMF1bJ25hbWUnXS5zdWJzdHJpbmcoZmlsZXNbMF1bJ25hbWUnXS5sYXN0SW5kZXhPZignLicpICsgMSkudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKGZpbGVzWzBdICYmIChmaWxlc1swXS5zaXplIDw9IEZpbGVBUEkuTUIpICYmIChleHQgPT0gXCJnaWZcIiB8fCBleHQgPT0gXCJwbmdcIiB8fCBleHQgPT0gXCJqcGVnXCIgfHwgZXh0ID09IFwianBnXCIpKVxuICAgICAgICBcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpPT5cbiAgICAgICAgXG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcblxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAgIGVsc2VcbiAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgICBAZmlsZSA9IEBzdGVwMS5maW5kICcjcmVnaXN0cmF0aW9uLWF2YXRhcidcblxuICAjINCf0YDQvtCy0LXRgNGP0LXQvCDQvNC+0LbQtdGCINC70Lgg0YHRg9GJ0LXRgdGC0LLQvtCy0LDRgtGMINGD0LrQsNC30LDQvdC90LDRjyDQtNCw0YLQsCwg0L3QsNC/0YDQuNC80LXRgCAzMSDRhNC10LLRgNCw0LvRjyDQuCDQuNGB0L/RgNCw0LLQu9GP0LXQvCDQsiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQutC4XG4gIGNoZWNrRGF0ZTogKGV2ZW50KT0+XG4gICAgZGF5ID0gcGFyc2VJbnQgQGRheS52YWwoKS50cmltKCksIDEwXG4gICAgXG4gICAgaWYgZGF5PDEgfHwgaXNOYU4oZGF5KVxuICAgICAgQGRheS52YWwgMVxuICAgICAgcmV0dXJuXG5cbiAgICBkYXlzID0gcGFyc2VJbnQgbW9tZW50KEB5ZWFyLnZhbCgpK1wiLVwiKyhwYXJzZUludChAbW9udGgudmFsKCksMTApKzEpLCBcIllZWVktTU1cIikuZGF5c0luTW9udGgoKSwgMTBcbiAgICBpZiBkYXk+ZGF5c1xuICAgICAgQGRheS52YWwgZGF5c1xuICAgIHJldHVyblxuXG4gICAgaWYgZGF5PjMxXG4gICAgICBAZGF5LnZhbCAzMVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUGVyc29uYWxEYXRhQWxsKClcblxuXG4iXX0=