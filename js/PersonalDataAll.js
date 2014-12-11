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
            el: '.b-thumb__preview__pic',
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
    console.dir(chkboxs);
    console.log(chkboxs);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDJDQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsNkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSx1REFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2Q0FBQSxDQUFBO0FBQUEsUUFBQSxpQkFBQTtBQUFBLElBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxDQUFBLENBQUUscUJBQUYsQ0FBVixDQUFBO0FBQ0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixLQUFrQixDQUFyQjtBQUNFLFlBQVUsSUFBQSxLQUFBLENBQU0sa0JBQU4sQ0FBVixDQURGO0tBREE7QUFBQSxJQUlBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUpULENBQUE7QUFBQSxJQUtBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUxWLENBQUE7QUFBQSxJQU1BLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFS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QUFDLEdBQUwsQ0FBQSxDQUFVLENBQUMsSUFBWCxDQUFBLENBQVQsRUFBNEIsRUFBNUIsQ0FBTixDQUFBO0FBRUEsSUFBQSxJQUFHLEdBQUEsR0FBSSxDQUFKLElBQVMsS0FBQSxDQUFNLEdBQU4sQ0FBWjtBQUNFLE1BQUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsQ0FBVCxDQUFBLENBQUE7QUFDQSxZQUFBLENBRkY7S0FGQTtBQUFBLElBTUEsSUFBQSxHQUFPLFFBQUEsQ0FBUyxNQUFBLENBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxHQUFOLENBQUEsQ0FBQSxHQUFZLEdBQVosR0FBZ0IsQ0FBQyxRQUFBLENBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQUEsQ0FBVCxFQUFzQixFQUF0QixDQUFBLEdBQTBCLENBQTNCLENBQXZCLEVBQXNELFNBQXRELENBQWdFLENBQUMsV0FBakUsQ0FBQSxDQUFULEVBQXlGLEVBQXpGLENBTlAsQ0FBQTtBQU9BLElBQUEsSUFBRyxHQUFBLEdBQUksSUFBUDtBQUNFLE1BQUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLENBREY7S0FQQTtBQVNBLFVBQUEsQ0FUQTtBQVdBLElBQUEsSUFBRyxHQUFBLEdBQUksRUFBUDthQUNFLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFTLEVBQVQsRUFERjtLQVpTO0VBQUEsQ0F2akJYLENBQUE7O3lCQUFBOztJQURGLENBQUE7O0FBQUEsQ0F1a0JBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7U0FDWixJQUFBLGVBQUEsQ0FBQSxFQURZO0FBQUEsQ0FBbEIsQ0F2a0JBLENBQUEiLCJmaWxlIjoiUGVyc29uYWxEYXRhQWxsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uYWxEYXRhQWxsXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEB3aWRnZXQgPSAkICcucmVnaXN0cmF0aW9uLXN0ZXBzJ1xuICAgIGlmIEB3aWRnZXQubGVuZ3RoID09IDBcbiAgICAgIHRocm93IG5ldyBFcnJvcign0L3QtSDQvdCw0LnQtNC10L0g0LLQuNC00LbQtdGCJylcblxuICAgIEBzdGVwcyA9IEB3aWRnZXQuZmluZCAnLnN0ZXBzJ1xuICAgIEBwYW5lbHMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbCdcbiAgICBAY3VycmVudCA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLmN1cnJlbnQnXG5cbiAgICBAc3RlcDEgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTEnXG4gICAgQHN0ZXAyID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0yJ1xuICAgIEBzdGVwMyA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMydcbiAgICBAc3RlcDQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTQnXG4gICAgQHN0ZXA1ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC01J1xuXG4gICAgIyDQntCx0YnQtdC1XG4gICAgc2VsZWN0ID0gJCAnc2VsZWN0J1xuICAgIGlmIHNlbGVjdC5sZW5ndGggPiAwXG4gICAgICBzZWxlY3QuY2hvc2VuXG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcblxuICAgICMg0KjQsNCzIDFcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAxLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQl9Cw0LPRgNGD0LfQutCwINCw0LLQsNGC0LDRgNCwXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG4gICAgQGF2YXRhclRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2N1cnJlbnQtYXZhdGFyLXRlbXBsYXRlJ1xuICAgIEBmaWxlU2VsZWN0b3IgPSBAc3RlcDEuZmluZCAnLmZpbGUtc2VsZWN0b3InXG4gICAgXG4gICAgRmlsZUFQSS5ldmVudC5vbiBAZmlsZVswXSwgJ2NoYW5nZScsIEBhdmF0YXJTZWxlY3RlZFxuICAgIEBmaWxlU2VsZWN0b3IuZG5kIEBvdmVyLCBAZHJvcFxuICAgIEZpbGVBUEkuZXZlbnQub24gZG9jdW1lbnQsICdkcm9wJywgQGRyb3BlZFxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC+0L/Ri9GC0LBcbiAgICBleHAgPSAkICcjZXhwZXJpZW5jZSdcbiAgICBpZiBleHAubGVuZ3RoID4gMFxuICAgICAgZXhwLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgICAnbWF4JzogWzUwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcbiAgICAgIGV4cC5MaW5rKCdsb3dlcicpLnRvKCQoJyNleHBlcmllbmNlLXZhbHVlJykpXG5cbiAgICAjINCU0LDRgtCwINGA0L7QttC00LXQvdC40Y9cbiAgICBAbW9udGggPSBAc3RlcDEuZmluZCAnLm1vbnRoIHNlbGVjdCdcbiAgICBAeWVhciAgPSBAc3RlcDEuZmluZCAnLnllYXIgc2VsZWN0J1xuICAgIEBkYXkgICA9IEBzdGVwMS5maW5kICdpbnB1dC5kYXknXG4gICAgQGRheS5vbiAgICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQG1vbnRoLm9uICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQHllYXIub24gICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG5cbiAgICAjINCe0YLQv9GA0LDQstC60LAg0LTQsNC90L3Ri9GFINCo0LDQsyAxXG4gICAgQHN0ZXAxLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXAxU3VibWl0XG5cblxuICAgICMg0KjQsNCzIDJcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAyLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQt9Cw0L3Rj9GC0LjQuVxuICAgIEBkdXJhdGlvbl92YWx1ZSA9ICQoJyNkdXJhdGlvbi12YWx1ZScpXG5cbiAgICB0aW1lID0gJCAnI2R1cmF0aW9uJ1xuICAgIGlmIHRpbWUubGVuZ3RoID4gMFxuICAgICAgdGltZS5ub1VpU2xpZGVyXG4gICAgICAgIHN0ZXA6IDUsXG4gICAgICAgIGNvbm5lY3Q6IFwibG93ZXJcIixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHJhbmdlOlxuICAgICAgICAgICdtaW4nOiBbMzBdLFxuICAgICAgICAgICdtYXgnOiBbMTgwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcblxuICAgICAgXG4gICAgICB0aW1lLkxpbmsoJ2xvd2VyJykudG8oQGR1cmF0aW9uX3ZhbHVlKVxuICAgICAgdGltZS5vbiAnY2hhbmdlJywgKGV2ZW50LCB1aSk9PlxuICAgICAgICAkKCdzdHJvbmcubWluLXRpbWUnKS50ZXh0KHVpKVxuXG4gICAgIyDQpNC+0YDQvNCw0YIg0LfQsNC90Y/RgtC40LlcbiAgICBAZm9ybWF0cyA9IEBzdGVwMi5maW5kICcubGVzc29ucy1mb3JtYXQnXG4gICAgQGZvcm1hdHMuZmluZCgnaW5wdXQnKS5vbiAnY2hhbmdlJywgQGNoZWNrRm9ybWF0XG4gICAgQGNoZWNrRm9ybWF0KClcblxuICAgICMg0JTQvtCx0LDQstC60LAg0L/RgNC10LTQvNC10YLQsFxuICAgIEBhZGRfc3ViamVjdCA9IEBzdGVwMi5maW5kICcuYWRkLXN1YmplY3QnXG4gICAgQHN1YmpfY291bnQgPSAwXG4gICAgQHN1YmplY3Rfc291cmNlID0gJChcIiNzdWJqLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zb3VyY2VcbiAgICBAYWRkX3N1YmplY3Qub24gJ2NsaWNrJywgQG5ld1N1YmplY3RcbiAgICBAYWRkX3N1YmplY3QudHJpZ2dlciAnY2xpY2snXG5cbiAgICAjINCf0L7QtNGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9ICQoXCIjc3Viai1zZWN0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlXG5cbiAgICAj0KPQtNCw0LvQtdC90LjQtSDQv9GA0LXQtNC80LXRgtCwXG4gICAgQHJlbW92ZV9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5yZW1vdmUtc3ViamVjdCdcbiAgICBAcmVtb3ZlX3N1YmplY3Qub24gJ2NsaWNrJywgQHJlbW92ZVN1YmplY3RcblxuICAgIEBzdGVwMi5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMlN1Ym1pdFxuICAgIEBzdGVwMi5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAyQmFja1xuXG5cbiAgICAjINCo0LDQsyAzXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMy5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQsNC00YDQtdGB0LBcbiAgICBAYWRkX2FkZHJlc3MgPSBAc3RlcDMuZmluZCAnLmFkZC1hZGRyZXNzJ1xuICAgIEBhZGRyZXNzX2NvdW50ID0gMFxuICAgIEBhZGRyZXNzX3NvdXJjZSA9ICQoXCIjYWRkcmVzcy10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAYWRkcmVzc19zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQGFkZHJlc3Nfc291cmNlXG4gICAgQGFkZF9hZGRyZXNzLm9uICdjbGljaycsIEBuZXdBZGRyZXNzXG4gICAgQGFkZF9hZGRyZXNzLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0LDQtNGA0LXRgdCwXG4gICAgQHJlbW92ZV9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5yZW1vdmUtYWRkcmVzcydcbiAgICBAcmVtb3ZlX2FkZHJlc3Mub24gJ2NsaWNrJywgQHJlbW92ZUFkZHJlc3NcblxuICAgIEBzdGVwMy5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwM1N1Ym1pdFxuICAgIEBzdGVwMy5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAzQmFja1xuXG5cbiAgICAjINCo0LDQsyA0XG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwNC5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQvtCx0YDQsNC30L7QstCw0L3QuNGPXG4gICAgQGFkZF9lZHVjYXRpb24gPSBAc3RlcDQuZmluZCAnLmFkZC1lZHVjYXRpb24nXG4gICAgQGVkdWNhdGlvbl9jb3VudCA9IDBcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9ICQoXCIjZWR1Y2F0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBlZHVjYXRpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBlZHVjYXRpb25fc291cmNlXG4gICAgQGFkZF9lZHVjYXRpb24ub24gJ2NsaWNrJywgQG5ld0VkdWNhdGlvblxuICAgIEBhZGRfZWR1Y2F0aW9uLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5yZW1vdmUtZWR1Y2F0aW9uJ1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uLm9uICdjbGljaycsIEByZW1vdmVFZHVjYXRpb25cblxuICAgIEBzZXJ0aWZpY2F0X3NvdXJjZSA9ICQoXCIjc2VydGlmaWNhdC10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc2VydGlmaWNhdF9zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQHNlcnRpZmljYXRfc291cmNlXG4gICAgQGNlcnRfbGlzdCA9IEBzdGVwNC5maW5kICcuc2VydGlmaWNhdC1saXN0J1xuICAgIEBjZXJpZmljYXRlc19jb3VudCA9IDBcbiAgICBAc2VydGlmaWNhdHMgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXRzJ1xuICAgIEBzZXJ0aWZpY2F0cy5maWxlYXBpXG4gICAgICB1cmw6ICdodHRwOi8vdGVzdC5zaWxlbnRpbXAuaW5mby9SZXBldGl0LnJ1L3Rlc3QucGhwJ1xuICAgICAgZHVwbGljYXRlOiBmYWxzZSxcbiAgICAgIGFjY2VwdDogJ2ltYWdlLyonLFxuICAgICAgbWF4U2l6ZTogNSAqIEZpbGVBUEkuTUIsXG4gICAgICBhdXRvVXBsb2FkOiBmYWxzZSxcbiAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgbGlzdDogJy5zZXJ0aWZpY2F0LWxpc3QnLFxuICAgICAgZWxlbWVudHM6XG4gICAgICAgIGZpbGU6IFxuICAgICAgICAgIHRwbDogJy5qcy1maWxlLXRwbCdcbiAgICAgICAgICBwcmV2aWV3OlxuICAgICAgICAgICAgZWw6ICcuYi10aHVtYl9fcHJldmlld19fcGljJ1xuICAgICAgICAgICAgd2lkdGg6IDgwXG4gICAgICAgICAgICBoZWlnaHQ6IDgwXG4gICAgICBvblNlbGVjdDogKGV2dCwgdWkpPT5cbiAgICAgICAgQGNlcmlmaWNhdGVzX2NvdW50KytcbiAgICAgICAgIyByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgICMgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICAjICAgQGNlcnRfbGlzdC5hcHBlbmQgQHNlcnRpZmljYXRfc291cmNlXG4gICAgICAgICMgICAgIFwiaWRcIiA6IEBjZXJpZmljYXRlc19jb3VudFxuICAgICAgICAjICAgICBcInNyY1wiIDogZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICAjIHJlYWRlci5yZWFkQXNEYXRhVVJMIHVpLmZpbGVzWzBdXG5cbiAgICBAc3RlcDQuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDRTdWJtaXRcbiAgICBAc3RlcDQuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwNEJhY2tcblxuICBhZGRIaW50OiA9PlxuICAgIGxvY2F0aW9ucyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgICBkYXR1bVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLm9iai53aGl0ZXNwYWNlKFwiY2l0eVwiKSxcbiAgICAgIHF1ZXJ5VG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxcbiAgICAgIHByZWZldGNoOiBcImh0dHBzOi8vZGwuZHJvcGJveHVzZXJjb250ZW50LmNvbS91LzIwODEwNzcyL2NpdHlzLmpzb25cIlxuICAgIFxuICAgIGxvY2F0aW9ucy5pbml0aWFsaXplKClcblxuICAgICQoJy5jaXR5JykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAnbG9jYXRpb25zJ1xuICAgICAgZGlzcGxheUtleTogJ2NpdHknLFxuICAgICAgc291cmNlOiBsb2NhdGlvbnMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD48Yj57e3JlZ2lvbn19PC9iPnt7Y2l0eX19PC9wPicpXG5cbiAgICB1bml2ZXJjaXR5cyA9IG5ldyBCbG9vZGhvdW5kXG4gICAgICBkYXR1bVRva2VuaXplcjogKGRhdGEpLT5cbiAgICAgICAgcmV0dXJuIEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlKGRhdGEudGl0bGUpXG4gICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICBsb2NhbDogW3tcInRpdGxlXCI6XCJBbmRvcnJhXCJ9LHtcInRpdGxlXCI6XCJVbml0ZWRBcmFiRW1pcmF0ZXNcIn0se1widGl0bGVcIjpcIkFmZ2hhbmlzdGFuXCJ9LHtcInRpdGxlXCI6XCJBbnRpZ3VhYW5kQmFyYnVkYVwifSx7XCJ0aXRsZVwiOlwiQW5ndWlsbGFcIn0se1widGl0bGVcIjpcIkFsYmFuaWFcIn0se1widGl0bGVcIjpcIkFybWVuaWFcIn0se1widGl0bGVcIjpcIkFuZ29sYVwifSx7XCJ0aXRsZVwiOlwiQW50YXJjdGljYVwifV1cblxuICAgIHVuaXZlcmNpdHlzLmluaXRpYWxpemUoKVxuXG4gICAgJCgnLnVuaXZlcmNpdHk6bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICAkKCcuZmFjdWx0eTpub3QoLnR0LWlucHV0KScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ3VuaXZlcmNpdHlzJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuICAgICQoJy5zcGVjaWFsaXphdGlvbjpub3QoLnR0LWlucHV0KScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ3VuaXZlcmNpdHlzJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDRgdC/0LjRgdC60LAg0YDQsNC30LTQtdC70L7QsiDQtNC70Y8g0L/RgNC10LTQvNC10YLQsFxuICBnZXRTZWN0aW9uczogKGlkKT0+XG4gICAgY2hhcHRlcnMgPSBbJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutC40Lkg0LDQvdCw0LvQuNC3JytpZCwn0YLQtdC+0YDQuNGPINCy0LXRgNC+0Y/RgtC90L7RgdGC0LXQuScraWQsJ9GC0LXQvtGA0LXRgtC40YfQtdGB0LrQsNGPINC80LXRhdCw0L3QuNC60LAnK2lkLCfRgdC+0L/RgNC+0LzQsNGCJytpZCwn0LzQsNGC0LXQvNCw0YLQuCDQu9C+0LPQuNC60LAnK2lkLCfRjdC60L7QvdC+0LzQtdGC0YDQuNC60LAnK2lkLCfQstGL0YHRiNCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfQu9C40L3QtdC50L3QsNGPINCw0LvQs9C10LHRgNCwJytpZCwn0LTQuNGE0YTQtdGA0LXQvdGG0LjQsNC70YzQvdCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LDQvdCw0LvQuNGC0LjRh9C10YHQutCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LDRjyDRhNC40LfQuNC60LAnK2lkLCfQtNC40YTRhNC10YDQtdC90YbQuNCw0LvRjNC90YvQtSDRg9GA0LDQstC90LXQvdC40Y8nK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQsNGPINGB0YLQsNGC0LjRgdGC0LjQutCwJytpZCwn0LvQuNC90LXQudC90LDRjyDQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQtNC40YHQutGA0LXRgtC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0L7Qv9C+0LvQvtCz0LjRjycraWQsJ9GE0YPQvdC60YbQuNC+0L3QsNC70YzQvdGL0Lkg0LDQvdCw0LvQuNC3JytpZCwn0LjQvdGC0LXQs9GA0LDQu9GM0L3Ri9C1INGD0YDQsNCy0L3QtdC90LjRjycraWQsJ9GC0LXQvtGA0LjRjyDRh9C40YHQtdC7JytpZCwn0LLQtdC60YLQvtGA0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9Ci0KTQmtCfJytpZCwn0YLQtdC90LfQvtGA0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9GE0LjQvdCw0L3RgdC+0LLQsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YPRgNCw0LLQvdC10L3QuNGPINCyINGH0LDRgdGC0L3Ri9GFINC/0YDQvtC40LfQstC+0LTQvdGL0YUnK2lkLCfQsNC60YLRg9Cw0YDQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtC10L7RgNC40Y8g0LPRgNCw0YTQvtCyJytpZCwn0LrQvtC80LHQuNC90LDRgtC+0YDQuNC60LAnK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQuNC1INC80L7QtNC10LvQuCcraWQsJ9C/0YDQuNC60LvQsNC00L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLRgNC40LPQvtC90L7QvC3QuNGPJytpZCwn0YPRgNCw0LLQvdC10L3QuNGPINC80LDRgtC10LzQsNGC0LjRh9C10YHQutC+0Lkg0YTQuNC30LjQutC4JytpZCwn0YfQuNGB0LvQtdC90L3Ri9C1INC80LXRgtC+0LTRiycraWQsJ9GC0LXQvtGA0LjRjyDQv9GA0LjQsdC70LjQttC10L3QuNC5JytpZCwn0YLQtdC+0YDQuNGPINC+0L/RgtC40LzQuNC30LDRhtC40LgnK2lkLCcu0YjQutC+0LvRjNC90YvQuSDQutGD0YDRgScraWQsJ9C90LAg0LDQvdCz0LvQuNC50YHQutC+0Lwg0Y/Qt9GL0LrQtScraWQsJ9Cw0LvQs9C10LHRgNCwINC70L7Qs9C40LrQuCcraWQsJ9Cy0YvRh9C40YHQu9C40LzRi9C1INGE0YPQvdC60YbQuNC4JytpZCwn0YLQtdC+0YDQuNGPINC40LPRgCcraWQsJ9Cy0LDRgNC40LDRhtC40L7QvdC90L7QtSDQuNGB0YfQuNGB0LvQtdC90LjQtScraWQsJ9C+0L/RgtC40LzQsNC70YzQvdC+0LUg0YPQv9GA0LDQstC70LXQvdC40LUnK2lkLCfQvNC10YLQvtC00Ysg0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCcraWQsJ9C70LjQvdC10LnQvdC+0LUg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUnK2lkLCfQsNC70LPQtdCx0YDQsCcraWQsJ9Cz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C80LXRgtC+0LTRiyDQvtC/0YLQuNC80LDQu9GM0L3Ri9GFINGA0LXRiNC10L3QuNC5JytpZF1cbiAgICBzZWN0aW9ucyA9IG5ldyBBcnJheVxuICAgIHNlY3Rpb24gPSBuZXcgT2JqZWN0XG4gICAgaWQgPSAwXG4gICAgZm9yIGNoYXB0ZXIgaW4gY2hhcHRlcnNcbiAgICAgIHNlY3Rpb24gPSB7XG4gICAgICAgIGlkIDogaWRcbiAgICAgICAgdGl0bGUgOiBjaGFwdGVyXG4gICAgICB9XG4gICAgICBzZWN0aW9ucy5wdXNoIHNlY3Rpb25cbiAgICAgIGlkKytcbiAgICByZXR1cm4gc2VjdGlvbnNcblxuICAjINCf0L7Qu9GD0YfQtdC90LjQtSDQtNC+0L/QvtC70L3QtdC90LjQuSDQtNC70Y8g0YDQsNC30LTQtdC70LBcbiAgZ2V0U3ViU2VjdGlvbnM6IChpZCk9PlxuICAgIGNoYXB0ZXJzID0gbmV3IEFycmF5ICfQntCT0K0gKNCT0JjQkCknK2lkLCAn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0L7Qu9C40LzQv9C40LDQtNCw0LwnK2lkLCAn0J/QvtC00LPQvtGC0L7QstC60LAg0Log0Y3QutC30LDQvNC10L3QsNC8JytpZFxuICAgIHNlY3Rpb25zID0gbmV3IEFycmF5XG4gICAgc2VjdGlvbiA9IG5ldyBPYmplY3RcbiAgICB1aWQgPSAwXG4gICAgZm9yIGNoYXB0ZXIgaW4gY2hhcHRlcnNcbiAgICAgIHNlY3Rpb25zLnB1c2hcbiAgICAgICAgJ2lkJyA6IHVpZFxuICAgICAgICAndGl0bGUnIDogY2hhcHRlclxuICAgICAgdWlkKytcbiAgICByZXR1cm4gc2VjdGlvbnNcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICBuZXdFZHVjYXRpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX2VkdWNhdGlvbi5wYXJlbnQoKS5iZWZvcmUgQGVkdWNhdGlvbl9zb3VyY2UoeydpbmRleCcgOiBAZWR1Y2F0aW9uX2NvdW50fSlcbiAgICBAZWR1Y2F0aW9uX2NvdW50KytcbiAgICBAc3RlcDQuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBpZiBAZWR1Y2F0aW9uX2NvdW50PjFcbiAgICAgIEByZW1vdmVfZWR1Y2F0aW9uLnNob3coKVxuXG4gICAgIyDQkNCy0YLQvtC30LDQv9C+0LvQvdC10L3QuNC1INC00LvRjyDQstGL0LHQvtGA0LAg0LPQvtGA0L7QtNCwINC4INCy0YPQt9CwXG4gICAgQGFkZEhpbnQoKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICByZW1vdmVFZHVjYXRpb246IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAZWR1Y2F0aW9uX2NvdW50LS1cbiAgICAkKCcuZWR1Y2F0aW9uLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQGVkdWNhdGlvbl9jb3VudDwyXG4gICAgICBAcmVtb3ZlX2VkdWNhdGlvbi5oaWRlKClcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgNCDQuiA1INGI0LDQs9GDXG4gIHN0ZXA0U3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXA0LmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDQuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICAgIyDQntGC0L/RgNCw0LLQutCwINC90LAg0YHQtdGA0LLQtdGAXG4gICAgY29uc29sZS5sb2cgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkKCcucGFuZWwgOmlucHV0Jykuc2VyaWFsaXplQXJyYXkoKSkpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDQg0LogMyDRiNCw0LPRg1xuICBzdGVwNEJhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDMg0LogNCDRiNCw0LPRg1xuICBzdGVwM1N1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMy5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAzLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDMg0LogMiDRiNCw0LPRg1xuICBzdGVwM0JhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGL0Lkg0LDQtNGA0LXRgVxuICBuZXdBZGRyZXNzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9hZGRyZXNzLnBhcmVudCgpLmJlZm9yZSBAYWRkcmVzc19zb3VyY2UoeydpbmRleCcgOiBAYWRkcmVzc19jb3VudH0pXG4gICAgQGFkZHJlc3NfY291bnQrK1xuICAgIEBzdGVwMy5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGlmIEBhZGRyZXNzX2NvdW50PjFcbiAgICAgIEByZW1vdmVfYWRkcmVzcy5zaG93KClcblxuICAjINCj0LTQsNC70LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgcmVtb3ZlQWRkcmVzczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRyZXNzX2NvdW50LS1cbiAgICAkKCcuYWRyZXNzLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQGFkZHJlc3NfY291bnQ8MlxuICAgICAgQHJlbW92ZV9hZGRyZXNzLmhpZGUoKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAyINC6IDMg0YjQsNCz0YNcbiAgc3RlcDJTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDIuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMi5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAyINC6IDEg0YjQsNCz0YNcbiAgc3RlcDJCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG5cbiAgIyDQkdC70L7QutC40YDQvtCy0LDRgtGMINGG0LXQvdGLINC90LXQtNC+0L/Rg9GB0YLQuNC80YvRhSDRhNC+0YDQvNCw0YLQvtCyINC30LDQvdGP0YLQuNC5XG4gIGNoZWNrRm9ybWF0OiA9PlxuICAgIGlucHV0cyA9IEBmb3JtYXRzLmZpbmQgJ2lucHV0J1xuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGVsZW1lbnRzID0gQHN0ZXAyLmZpbmQoJ2lucHV0LicraW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlLWZpZWxkJykpXG4gICAgICBmb3IgZWxlbWVudCBpbiBlbGVtZW50c1xuICAgICAgICBwcmljZSA9ICQoZWxlbWVudCkuY2xvc2VzdCgnLnN1YmRldmlzaW9uJylcbiAgICAgICAgaWYgaW5wdXQuY2hlY2tlZFxuICAgICAgICAgIHByaWNlLnJlbW92ZUNsYXNzKCdoaWRlJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwcmljZS5hZGRDbGFzcygnaGlkZScpXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd1aS1zdGF0ZS1lcnJvcicpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJylcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKVxuXG4gICMg0JTQvtCx0LDQstC40YLRjCDRgNCw0LfQtNC10LvRiyDQv9GA0LXQtNC80LXRgtCwXG4gIHN1YmplY3RTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgc2VsZWN0ID0gJCBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgc2VsZWN0LnJlbW92ZUNsYXNzICd1bmNoYW5nZWQnXG4gICAgaWQgPSBzZWxlY3QudmFsKClcblxuICAgIGxpbmUgPSBzZWxlY3QucGFyZW50cygnLmxpbmUnKVxuICAgIFxuICAgIHN1YnNlY3Rpb25zID0gQGdldFN1YlNlY3Rpb25zKGlkKVxuXG4gICAgaGFsZl9sZW5ndGggPSBNYXRoLmNlaWwoc3Vic2VjdGlvbnMubGVuZ3RoIC8gMilcbiAgICBsZWZ0U2lkZSA9IHN1YnNlY3Rpb25zLnNwbGljZSgwLGhhbGZfbGVuZ3RoKVxuXG4gICAgc2VjdGlvbnMgPSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSh7XG4gICAgICBpbmRleCA6IEBzdWJqX2NvdW50XG4gICAgICBzZWN0aW9uIDogQGdldFNlY3Rpb25zKGlkKVxuICAgICAgY29sdW1uMSA6IGxlZnRTaWRlXG4gICAgICBjb2x1bW4yIDogc3Vic2VjdGlvbnNcbiAgICAgIH0pXG5cbiAgICBuZXh0ID0gbGluZS5uZXh0KClcbiAgICBpZiBuZXh0Lmhhc0NsYXNzKCdzZWN0aW9uJylcbiAgICAgIG5leHQucmVwbGFjZVdpdGggc2VjdGlvbnNcbiAgICBlbHNlXG4gICAgICBsaW5lLmFmdGVyIHNlY3Rpb25zXG4gICAgXG4gICAgQHN0ZXAyLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgZm9yIGVsZW1lbnQgaW4gQHN0ZXAyLmZpbmQoJy5kcm9wZG93bi1jb250YWluZXItd2lkZ2V0JylcbiAgICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcblxuXG4gIGdldFNlY3Rpb246IChpbmRleCk9PlxuICAgIHNlbGVjdCA9ICAkICcuc3Viai13cmFwcGVyIC5zZWN0aW9uOmVxKCcraW5kZXgrJykgc2VsZWN0J1xuICAgIGlmIHNlbGVjdC5sZW5ndGggPT0gMVxuICAgICAgcmV0dXJuIHNlbGVjdC52YWwoKVxuXG4gIGdldEFkZDogKGluZGV4KT0+XG4gICAgY2hrYm94cyA9ICAkICcuc3Viai13cmFwcGVyIC5zZWN0aW9uOmVxKCcraW5kZXgrJykgLnN1Yi1zZWN0aW9uIGlucHV0W25hbWU9XCJhZGRpdGlvbltdXCJdOmNoZWNrZWQnXG4gICAgdmFsdWVzID0gbmV3IEFycmF5XG4gICAgY29uc29sZS5kaXIgY2hrYm94c1xuICAgIGNvbnNvbGUubG9nIGNoa2JveHNcbiAgICBmb3IgY2hrYm94IGluIGNoa2JveHNcbiAgICAgIHZhbHVlcy5wdXNoICQoY2hrYm94KS52YWwoKVxuICAgIHJldHVybiB2YWx1ZXNcbiAgICBcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQv9GA0LXQtNC80LXRglxuICBuZXdTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9zdWJqZWN0LnBhcmVudCgpLmJlZm9yZSBAc3ViamVjdF9zb3VyY2UoeydpbmRleCcgOiBAc3Vial9jb3VudH0pXG4gICAgQHN1YmpfY291bnQrK1xuICAgIFxuICAgIHdyYXBwZXIgPSBAYWRkX3N1YmplY3QucGFyZW50KCkucHJldigpXG4gICAgd3JhcHBlci5maW5kKCdzZWxlY3QnKS5vbiAnY2hhbmdlJywgQHN1YmplY3RTZWxlY3RlZFxuXG4gICAgQHN0ZXAyLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgQHN0ZXAyLmZpbmQoJy5taW4tdGltZScpLnRleHQgQGR1cmF0aW9uX3ZhbHVlLnZhbCgpXG4gICAgQGNoZWNrRm9ybWF0KClcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuICAgIFxuICAgIGlmIEBzdWJqX2NvdW50PjFcbiAgICAgIEByZW1vdmVfc3ViamVjdC5zaG93KClcblxuICAjINCj0LTQsNC70LjRgtGMINC/0YDQtdC00LzQtdGCXG4gIHJlbW92ZVN1YmplY3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3Vial9jb3VudC0tXG4gICAgJCgnLnN1Ymotd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAc3Vial9jb3VudDwyXG4gICAgICBAcmVtb3ZlX3N1YmplY3QuaGlkZSgpXG5cbiAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LHQu9C+0LrQvtCyINC90LAg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgdmFsaWRhdGU6IChpbnB1dCk9PlxuXG4gICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlICdkYXRhLWg1LWVycm9yaWQnXG4gICAgICBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1oNS1lcnJvcmlkJylcblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKVxuICAgICAgaWYgaW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQgJ3VpLXN0YXRlLWVycm9yJ1xuXG4gICAgaWYgaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zICd1aS1zdGF0ZS1lcnJvcidcbiAgICAgIGlmIGVycm9yXG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBlbHNlXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0LrQviDQstGC0L7RgNC+0LzRgyDRiNCw0LPRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIHN0ZXAxU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAxLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDEuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuXG4gICMg0KjQsNCzIDFcbiAgIyDQkNCy0LDRgtCw0YBcbiAgZHJvcGVkOiAoZXZlbnQpLT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgRmlsZUFQSS5nZXREcm9wRmlsZXMgZXZlbnQsIChmaWxlcyktPlxuXG4gICMg0L/QvtC00LLQtdC70Lgg0LrRg9GA0YHQvtGAINC6INCx0LvQvtC60YMg0LTRgNC+0L/QsCDQsNCy0LDRgtCw0YDQutC4XG4gIG92ZXI6IChvdmVyKS0+XG5cbiAgIyDQsdGA0L7RgdC40LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGRyb3A6IChmaWxlcyk9PlxuICAgIGNvbnNvbGUubG9nICBmaWxlc1xuICAgIGlmIGZpbGVzLmxlbmd0aFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgXG4gICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcbiAgICAgIFxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAjINCj0LTQsNC70LjQu9C4INCw0LLQsNGC0YDQsNC60YNcbiAgcmVtb3ZlQXZhdGFyOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG5cbiAgIyDQktGL0LHRgNCw0LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGF2YXRhclNlbGVjdGVkOiAoZXZlbnQpPT5cbiAgICBmaWxlcyA9IEZpbGVBUEkuZ2V0RmlsZXMoZXZlbnQpXG5cbiAgICBleHQgPSBmaWxlc1swXVsnbmFtZSddLnN1YnN0cmluZyhmaWxlc1swXVsnbmFtZSddLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoZmlsZXNbMF0gJiYgKGZpbGVzWzBdLnNpemUgPD0gRmlsZUFQSS5NQikgJiYgKGV4dCA9PSBcImdpZlwiIHx8IGV4dCA9PSBcInBuZ1wiIHx8IGV4dCA9PSBcImpwZWdcIiB8fCBleHQgPT0gXCJqcGdcIikpXG4gICAgICAgIFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBcbiAgICAgICAgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICBhdmF0YXIgPSBkb2N1bWVudC5pbXBvcnROb2RlIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LCB0cnVlXG4gICAgICAgIHByZXYgPSBAZmlsZVNlbGVjdG9yLnByZXYoKVxuICAgICAgICBpZiBwcmV2Lmhhc0NsYXNzKCdjdXJyZW50LWF2YXRhcicpXG4gICAgICAgICAgcHJldi5yZW1vdmUoKVxuICAgICAgICBAZmlsZVNlbGVjdG9yLmJlZm9yZSBhdmF0YXJcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkuZmluZCgnLmNsb3NlJykub24gJ2NsaWNrJywgQHJlbW92ZUF2YXRhclxuXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCBmaWxlc1swXVxuXG4gICAgZWxzZVxuICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICAgIEBmaWxlLnJlcGxhY2VXaXRoIEBmaWxlLnZhbCgnJykuY2xvbmUodHJ1ZSlcbiAgICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0J/RgNC+0LLQtdGA0Y/QtdC8INC80L7QttC10YIg0LvQuCDRgdGD0YnQtdGB0YLQstC+0LLQsNGC0Ywg0YPQutCw0LfQsNC90L3QsNGPINC00LDRgtCwLCDQvdCw0L/RgNC40LzQtdGAIDMxINGE0LXQstGA0LDQu9GPINC4INC40YHQv9GA0LDQstC70Y/QtdC8INCyINGB0LvRg9GH0LDQtSDQvtGI0LjQsdC60LhcbiAgY2hlY2tEYXRlOiAoZXZlbnQpPT5cbiAgICBkYXkgPSBwYXJzZUludCBAZGF5LnZhbCgpLnRyaW0oKSwgMTBcbiAgICBcbiAgICBpZiBkYXk8MSB8fCBpc05hTihkYXkpXG4gICAgICBAZGF5LnZhbCAxXG4gICAgICByZXR1cm5cblxuICAgIGRheXMgPSBwYXJzZUludCBtb21lbnQoQHllYXIudmFsKCkrXCItXCIrKHBhcnNlSW50KEBtb250aC52YWwoKSwxMCkrMSksIFwiWVlZWS1NTVwiKS5kYXlzSW5Nb250aCgpLCAxMFxuICAgIGlmIGRheT5kYXlzXG4gICAgICBAZGF5LnZhbCBkYXlzXG4gICAgcmV0dXJuXG5cbiAgICBpZiBkYXk+MzFcbiAgICAgIEBkYXkudmFsIDMxXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIG5ldyBQZXJzb25hbERhdGFBbGwoKVxuXG5cbiJdfQ==