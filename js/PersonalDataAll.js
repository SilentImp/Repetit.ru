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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDJDQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsNkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSx1REFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2Q0FBQSxDQUFBO0FBQUEsUUFBQSxpQkFBQTtBQUFBLElBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxDQUFBLENBQUUscUJBQUYsQ0FBVixDQUFBO0FBQ0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixLQUFrQixDQUFyQjtBQUNFLFlBQVUsSUFBQSxLQUFBLENBQU0sa0JBQU4sQ0FBVixDQURGO0tBREE7QUFBQSxJQUlBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUpULENBQUE7QUFBQSxJQUtBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUxWLENBQUE7QUFBQSxJQU1BLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFS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Q0FBQSxDQUFVLENBQUMsSUFBWCxDQUFBLENBQVQsRUFBNEIsRUFBNUIsQ0FBTixDQUFBO0FBRUEsSUFBQSxJQUFHLEdBQUEsR0FBSSxDQUFKLElBQVMsS0FBQSxDQUFNLEdBQU4sQ0FBWjtBQUNFLE1BQUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsQ0FBVCxDQUFBLENBQUE7QUFDQSxZQUFBLENBRkY7S0FGQTtBQUFBLElBTUEsSUFBQSxHQUFPLFFBQUEsQ0FBUyxNQUFBLENBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxHQUFOLENBQUEsQ0FBQSxHQUFZLEdBQVosR0FBZ0IsQ0FBQyxRQUFBLENBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQUEsQ0FBVCxFQUFzQixFQUF0QixDQUFBLEdBQTBCLENBQTNCLENBQXZCLEVBQXNELFNBQXRELENBQWdFLENBQUMsV0FBakUsQ0FBQSxDQUFULEVBQXlGLEVBQXpGLENBTlAsQ0FBQTtBQU9BLElBQUEsSUFBRyxHQUFBLEdBQUksSUFBUDtBQUNFLE1BQUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLENBREY7S0FQQTtBQVNBLFVBQUEsQ0FUQTtBQVdBLElBQUEsSUFBRyxHQUFBLEdBQUksRUFBUDthQUNFLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFTLEVBQVQsRUFERjtLQVpTO0VBQUEsQ0F4akJYLENBQUE7O3lCQUFBOztJQURGLENBQUE7O0FBQUEsQ0F3a0JBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7U0FDWixJQUFBLGVBQUEsQ0FBQSxFQURZO0FBQUEsQ0FBbEIsQ0F4a0JBLENBQUEiLCJmaWxlIjoiUGVyc29uYWxEYXRhQWxsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uYWxEYXRhQWxsXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEB3aWRnZXQgPSAkICcucmVnaXN0cmF0aW9uLXN0ZXBzJ1xuICAgIGlmIEB3aWRnZXQubGVuZ3RoID09IDBcbiAgICAgIHRocm93IG5ldyBFcnJvcign0L3QtSDQvdCw0LnQtNC10L0g0LLQuNC00LbQtdGCJylcblxuICAgIEBzdGVwcyA9IEB3aWRnZXQuZmluZCAnLnN0ZXBzJ1xuICAgIEBwYW5lbHMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbCdcbiAgICBAY3VycmVudCA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLmN1cnJlbnQnXG5cbiAgICBAc3RlcDEgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTEnXG4gICAgQHN0ZXAyID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0yJ1xuICAgIEBzdGVwMyA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMydcbiAgICBAc3RlcDQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTQnXG4gICAgQHN0ZXA1ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC01J1xuXG4gICAgIyDQntCx0YnQtdC1XG4gICAgc2VsZWN0ID0gJCAnc2VsZWN0J1xuICAgIGlmIHNlbGVjdC5sZW5ndGggPiAwXG4gICAgICBzZWxlY3QuY2hvc2VuXG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcblxuICAgICMg0KjQsNCzIDFcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAxLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQl9Cw0LPRgNGD0LfQutCwINCw0LLQsNGC0LDRgNCwXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG4gICAgQGF2YXRhclRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ2N1cnJlbnQtYXZhdGFyLXRlbXBsYXRlJ1xuICAgIEBmaWxlU2VsZWN0b3IgPSBAc3RlcDEuZmluZCAnLmZpbGUtc2VsZWN0b3InXG4gICAgXG4gICAgRmlsZUFQSS5ldmVudC5vbiBAZmlsZVswXSwgJ2NoYW5nZScsIEBhdmF0YXJTZWxlY3RlZFxuICAgIEBmaWxlU2VsZWN0b3IuZG5kIEBvdmVyLCBAZHJvcFxuICAgIEZpbGVBUEkuZXZlbnQub24gZG9jdW1lbnQsICdkcm9wJywgQGRyb3BlZFxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC+0L/Ri9GC0LBcbiAgICBleHAgPSAkICcjZXhwZXJpZW5jZSdcbiAgICBpZiBleHAubGVuZ3RoID4gMFxuICAgICAgZXhwLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgICAnbWF4JzogWzUwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcbiAgICAgIGV4cC5MaW5rKCdsb3dlcicpLnRvKCQoJyNleHBlcmllbmNlLXZhbHVlJykpXG5cbiAgICAjINCU0LDRgtCwINGA0L7QttC00LXQvdC40Y9cbiAgICBAbW9udGggPSBAc3RlcDEuZmluZCAnLm1vbnRoIHNlbGVjdCdcbiAgICBAeWVhciAgPSBAc3RlcDEuZmluZCAnLnllYXIgc2VsZWN0J1xuICAgIEBkYXkgICA9IEBzdGVwMS5maW5kICdpbnB1dC5kYXknXG4gICAgQGRheS5vbiAgICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQG1vbnRoLm9uICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG4gICAgQHllYXIub24gICdjaGFuZ2UnLCBAY2hlY2tEYXRlXG5cbiAgICAjINCe0YLQv9GA0LDQstC60LAg0LTQsNC90L3Ri9GFINCo0LDQsyAxXG4gICAgQHN0ZXAxLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXAxU3VibWl0XG5cblxuICAgICMg0KjQsNCzIDJcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAyLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQn9C+0LvQt9GD0L3QvtC6INC00LvQuNGC0LXQu9GM0L3QvtGB0YLQuCDQt9Cw0L3Rj9GC0LjQuVxuICAgIEBkdXJhdGlvbl92YWx1ZSA9ICQoJyNkdXJhdGlvbi12YWx1ZScpXG5cbiAgICB0aW1lID0gJCAnI2R1cmF0aW9uJ1xuICAgIGlmIHRpbWUubGVuZ3RoID4gMFxuICAgICAgdGltZS5ub1VpU2xpZGVyXG4gICAgICAgIHN0ZXA6IDUsXG4gICAgICAgIGNvbm5lY3Q6IFwibG93ZXJcIixcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIHJhbmdlOlxuICAgICAgICAgICdtaW4nOiBbMzBdLFxuICAgICAgICAgICdtYXgnOiBbMTgwXVxuICAgICAgICBmb3JtYXQ6IHdOdW1iXG4gICAgICAgICAgZGVjaW1hbHM6IDBcblxuICAgICAgXG4gICAgICB0aW1lLkxpbmsoJ2xvd2VyJykudG8oQGR1cmF0aW9uX3ZhbHVlKVxuICAgICAgdGltZS5vbiAnY2hhbmdlJywgKGV2ZW50LCB1aSk9PlxuICAgICAgICAkKCdzdHJvbmcubWluLXRpbWUnKS50ZXh0KHVpKVxuXG4gICAgIyDQpNC+0YDQvNCw0YIg0LfQsNC90Y/RgtC40LlcbiAgICBAZm9ybWF0cyA9IEBzdGVwMi5maW5kICcubGVzc29ucy1mb3JtYXQnXG4gICAgQGZvcm1hdHMuZmluZCgnaW5wdXQnKS5vbiAnY2hhbmdlJywgQGNoZWNrRm9ybWF0XG4gICAgQGNoZWNrRm9ybWF0KClcblxuICAgICMg0JTQvtCx0LDQstC60LAg0L/RgNC10LTQvNC10YLQsFxuICAgIEBhZGRfc3ViamVjdCA9IEBzdGVwMi5maW5kICcuYWRkLXN1YmplY3QnXG4gICAgQHN1YmpfY291bnQgPSAwXG4gICAgQHN1YmplY3Rfc291cmNlID0gJChcIiNzdWJqLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zb3VyY2VcbiAgICBAYWRkX3N1YmplY3Qub24gJ2NsaWNrJywgQG5ld1N1YmplY3RcbiAgICBAYWRkX3N1YmplY3QudHJpZ2dlciAnY2xpY2snXG5cbiAgICAjINCf0L7QtNGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgICBAc2VjdGlvbl9jb3VudCA9IDAgXG4gICAgQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2UgPSAkKFwiI3N1Ymotc2VjdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZVxuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L/RgNC10LTQvNC10YLQsFxuICAgIEByZW1vdmVfc3ViamVjdCA9IEBzdGVwMi5maW5kICcucmVtb3ZlLXN1YmplY3QnXG4gICAgQHJlbW92ZV9zdWJqZWN0Lm9uICdjbGljaycsIEByZW1vdmVTdWJqZWN0XG5cbiAgICBAc3RlcDIuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDJTdWJtaXRcbiAgICBAc3RlcDIuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwMkJhY2tcblxuXG4gICAgIyDQqNCw0LMgM1xuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDMuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0LDQtNGA0LXRgdCwXG4gICAgQGFkZF9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5hZGQtYWRkcmVzcydcbiAgICBAYWRkcmVzc19jb3VudCA9IDBcbiAgICBAYWRkcmVzc19zb3VyY2UgPSAkKFwiI2FkZHJlc3MtdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQGFkZHJlc3Nfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBhZGRyZXNzX3NvdXJjZVxuICAgIEBhZGRfYWRkcmVzcy5vbiAnY2xpY2snLCBAbmV3QWRkcmVzc1xuICAgIEBhZGRfYWRkcmVzcy50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INCw0LTRgNC10YHQsFxuICAgIEByZW1vdmVfYWRkcmVzcyA9IEBzdGVwMy5maW5kICcucmVtb3ZlLWFkZHJlc3MnXG4gICAgQHJlbW92ZV9hZGRyZXNzLm9uICdjbGljaycsIEByZW1vdmVBZGRyZXNzXG5cbiAgICBAc3RlcDMuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDNTdWJtaXRcbiAgICBAc3RlcDMuZmluZCgnYS5wcmV2aW91cycpLm9uICdjbGljaycsIEBzdGVwM0JhY2tcblxuXG4gICAgIyDQqNCw0LMgNFxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDQuaDVWYWxpZGF0ZSgpXG5cbiAgICAj0JTQvtCx0LDQstC60LAg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEBhZGRfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5hZGQtZWR1Y2F0aW9uJ1xuICAgIEBlZHVjYXRpb25fY291bnQgPSAwXG4gICAgQGVkdWNhdGlvbl9zb3VyY2UgPSAkKFwiI2VkdWNhdGlvbi10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9IEhhbmRsZWJhcnMuY29tcGlsZSBAZWR1Y2F0aW9uX3NvdXJjZVxuICAgIEBhZGRfZWR1Y2F0aW9uLm9uICdjbGljaycsIEBuZXdFZHVjYXRpb25cbiAgICBAYWRkX2VkdWNhdGlvbi50cmlnZ2VyICdjbGljaydcblxuICAgICPQo9C00LDQu9C10L3QuNC1INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cbiAgICBAcmVtb3ZlX2VkdWNhdGlvbiA9IEBzdGVwNC5maW5kICcucmVtb3ZlLWVkdWNhdGlvbidcbiAgICBAcmVtb3ZlX2VkdWNhdGlvbi5vbiAnY2xpY2snLCBAcmVtb3ZlRWR1Y2F0aW9uXG5cbiAgICBAc2VydGlmaWNhdF9zb3VyY2UgPSAkKFwiI3NlcnRpZmljYXQtdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQHNlcnRpZmljYXRfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzZXJ0aWZpY2F0X3NvdXJjZVxuICAgIEBjZXJ0X2xpc3QgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXQtbGlzdCdcbiAgICBAY2VyaWZpY2F0ZXNfY291bnQgPSAwXG4gICAgQHNlcnRpZmljYXRzID0gQHN0ZXA0LmZpbmQgJy5zZXJ0aWZpY2F0cydcbiAgICBAc2VydGlmaWNhdHMuZmlsZWFwaVxuICAgICAgdXJsOiAnaHR0cDovL3Rlc3Quc2lsZW50aW1wLmluZm8vUmVwZXRpdC5ydS90ZXN0LnBocCdcbiAgICAgIGR1cGxpY2F0ZTogZmFsc2UsXG4gICAgICBhY2NlcHQ6ICdpbWFnZS8qJyxcbiAgICAgIG1heFNpemU6IDUgKiBGaWxlQVBJLk1CLFxuICAgICAgYXV0b1VwbG9hZDogZmFsc2UsXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgIGxpc3Q6ICcuc2VydGlmaWNhdC1saXN0JyxcbiAgICAgIGVsZW1lbnRzOlxuICAgICAgICBmaWxlOiBcbiAgICAgICAgICB0cGw6ICcuanMtZmlsZS10cGwnXG4gICAgICAgICAgcHJldmlldzpcbiAgICAgICAgICAgIGVsOiAnLmItdGh1bWJfX3ByZXZpZXdfX3BpYydcbiAgICAgICAgICAgIHdpZHRoOiA4MFxuICAgICAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgb25TZWxlY3Q6IChldnQsIHVpKT0+XG4gICAgICAgIEBjZXJpZmljYXRlc19jb3VudCsrXG4gICAgICAgICMgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICAjIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpPT5cbiAgICAgICAgIyAgIEBjZXJ0X2xpc3QuYXBwZW5kIEBzZXJ0aWZpY2F0X3NvdXJjZVxuICAgICAgICAjICAgICBcImlkXCIgOiBAY2VyaWZpY2F0ZXNfY291bnRcbiAgICAgICAgIyAgICAgXCJzcmNcIiA6IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgIyByZWFkZXIucmVhZEFzRGF0YVVSTCB1aS5maWxlc1swXVxuXG4gICAgQHN0ZXA0LmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHN0ZXA0U3VibWl0XG4gICAgQHN0ZXA0LmZpbmQoJ2EucHJldmlvdXMnKS5vbiAnY2xpY2snLCBAc3RlcDRCYWNrXG5cbiAgYWRkSGludDogPT5cbiAgICBsb2NhdGlvbnMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy5vYmoud2hpdGVzcGFjZShcImNpdHlcIiksXG4gICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXG4gICAgICBwcmVmZXRjaDogXCJodHRwczovL2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20vdS8yMDgxMDc3Mi9jaXR5cy5qc29uXCJcbiAgICBcbiAgICBsb2NhdGlvbnMuaW5pdGlhbGl6ZSgpXG5cbiAgICAkKCcuY2l0eScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ2xvY2F0aW9ucydcbiAgICAgIGRpc3BsYXlLZXk6ICdjaXR5JyxcbiAgICAgIHNvdXJjZTogbG9jYXRpb25zLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+PGI+e3tyZWdpb259fTwvYj57e2NpdHl9fTwvcD4nKVxuXG4gICAgdW5pdmVyY2l0eXMgPSBuZXcgQmxvb2Rob3VuZFxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IChkYXRhKS0+XG4gICAgICAgIHJldHVybiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZShkYXRhLnRpdGxlKVxuICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgbG9jYWw6IFt7XCJ0aXRsZVwiOlwiQW5kb3JyYVwifSx7XCJ0aXRsZVwiOlwiVW5pdGVkQXJhYkVtaXJhdGVzXCJ9LHtcInRpdGxlXCI6XCJBZmdoYW5pc3RhblwifSx7XCJ0aXRsZVwiOlwiQW50aWd1YWFuZEJhcmJ1ZGFcIn0se1widGl0bGVcIjpcIkFuZ3VpbGxhXCJ9LHtcInRpdGxlXCI6XCJBbGJhbmlhXCJ9LHtcInRpdGxlXCI6XCJBcm1lbmlhXCJ9LHtcInRpdGxlXCI6XCJBbmdvbGFcIn0se1widGl0bGVcIjpcIkFudGFyY3RpY2FcIn1dXG5cbiAgICB1bml2ZXJjaXR5cy5pbml0aWFsaXplKClcblxuICAgICQoJy51bml2ZXJjaXR5Om5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgJCgnLmZhY3VsdHk6bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgICAkKCcuc3BlY2lhbGl6YXRpb246bm90KC50dC1pbnB1dCknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICd1bml2ZXJjaXR5cydcbiAgICAgIGRpc3BsYXlLZXk6ICd0aXRsZScsXG4gICAgICBzb3VyY2U6IHVuaXZlcmNpdHlzLnR0QWRhcHRlcigpXG4gICAgICB0ZW1wbGF0ZXM6XG4gICAgICAgIHN1Z2dlc3Rpb246IEhhbmRsZWJhcnMuY29tcGlsZSgnPHA+e3t0aXRsZX19PC9wPicpXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0YHQv9C40YHQutCwINGA0LDQt9C00LXQu9C+0LIg0LTQu9GPINC/0YDQtdC00LzQtdGC0LBcbiAgZ2V0U2VjdGlvbnM6IChpZCk9PlxuICAgIGNoYXB0ZXJzID0gWyfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQuNC5INCw0L3QsNC70LjQtycraWQsJ9GC0LXQvtGA0LjRjyDQstC10YDQvtGP0YLQvdC+0YHRgtC10LknK2lkLCfRgtC10L7RgNC10YLQuNGH0LXRgdC60LDRjyDQvNC10YXQsNC90LjQutCwJytpZCwn0YHQvtC/0YDQvtC80LDRgicraWQsJ9C80LDRgtC10LzQsNGC0Lgg0LvQvtCz0LjQutCwJytpZCwn0Y3QutC+0L3QvtC80LXRgtGA0LjQutCwJytpZCwn0LLRi9GB0YjQsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0LvQuNC90LXQudC90LDRjyDQsNC70LPQtdCx0YDQsCcraWQsJ9C00LjRhNGE0LXRgNC10L3RhtC40LDQu9GM0L3QsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9Cw0L3QsNC70LjRgtC40YfQtdGB0LrQsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutCw0Y8g0YTQuNC30LjQutCwJytpZCwn0LTQuNGE0YTQtdGA0LXQvdGG0LjQsNC70YzQvdGL0LUg0YPRgNCw0LLQvdC10L3QuNGPJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsCcraWQsJ9C70LjQvdC10LnQvdCw0Y8g0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LTQuNGB0LrRgNC10YLQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtC+0L/QvtC70L7Qs9C40Y8nK2lkLCfRhNGD0L3QutGG0LjQvtC90LDQu9GM0L3Ri9C5INCw0L3QsNC70LjQtycraWQsJ9C40L3RgtC10LPRgNCw0LvRjNC90YvQtSDRg9GA0LDQstC90LXQvdC40Y8nK2lkLCfRgtC10L7RgNC40Y8g0YfQuNGB0LXQuycraWQsJ9Cy0LXQutGC0L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfQotCk0JrQnycraWQsJ9GC0LXQvdC30L7RgNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfRhNC40L3QsNC90YHQvtCy0LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQsiDRh9Cw0YHRgtC90YvRhSDQv9GA0L7QuNC30LLQvtC00L3Ri9GFJytpZCwn0LDQutGC0YPQsNGA0L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLQtdC+0YDQuNGPINCz0YDQsNGE0L7QsicraWQsJ9C60L7QvNCx0LjQvdCw0YLQvtGA0LjQutCwJytpZCwn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQtSDQvNC+0LTQtdC70LgnK2lkLCfQv9GA0LjQutC70LDQtNC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0YDQuNCz0L7QvdC+0Lwt0LjRjycraWQsJ9GD0YDQsNCy0L3QtdC90LjRjyDQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQvtC5INGE0LjQt9C40LrQuCcraWQsJ9GH0LjRgdC70LXQvdC90YvQtSDQvNC10YLQvtC00YsnK2lkLCfRgtC10L7RgNC40Y8g0L/RgNC40LHQu9C40LbQtdC90LjQuScraWQsJ9GC0LXQvtGA0LjRjyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4JytpZCwnLtGI0LrQvtC70YzQvdGL0Lkg0LrRg9GA0YEnK2lkLCfQvdCwINCw0L3Qs9C70LjQudGB0LrQvtC8INGP0LfRi9C60LUnK2lkLCfQsNC70LPQtdCx0YDQsCDQu9C+0LPQuNC60LgnK2lkLCfQstGL0YfQuNGB0LvQuNC80YvQtSDRhNGD0L3QutGG0LjQuCcraWQsJ9GC0LXQvtGA0LjRjyDQuNCz0YAnK2lkLCfQstCw0YDQuNCw0YbQuNC+0L3QvdC+0LUg0LjRgdGH0LjRgdC70LXQvdC40LUnK2lkLCfQvtC/0YLQuNC80LDQu9GM0L3QvtC1INGD0L/RgNCw0LLQu9C10L3QuNC1JytpZCwn0LzQtdGC0L7QtNGLINC+0L/RgtC40LzQuNC30LDRhtC40LgnK2lkLCfQu9C40L3QtdC50L3QvtC1INC/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC1JytpZCwn0LDQu9Cz0LXQsdGA0LAnK2lkLCfQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQvNC10YLQvtC00Ysg0L7Qv9GC0LjQvNCw0LvRjNC90YvRhSDRgNC10YjQtdC90LjQuScraWRdXG4gICAgc2VjdGlvbnMgPSBuZXcgQXJyYXlcbiAgICBzZWN0aW9uID0gbmV3IE9iamVjdFxuICAgIGlkID0gMFxuICAgIGZvciBjaGFwdGVyIGluIGNoYXB0ZXJzXG4gICAgICBzZWN0aW9uID0ge1xuICAgICAgICBpZCA6IGlkXG4gICAgICAgIHRpdGxlIDogY2hhcHRlclxuICAgICAgfVxuICAgICAgc2VjdGlvbnMucHVzaCBzZWN0aW9uXG4gICAgICBpZCsrXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQn9C+0LvRg9GH0LXQvdC40LUg0LTQvtC/0L7Qu9C90LXQvdC40Lkg0LTQu9GPINGA0LDQt9C00LXQu9CwXG4gIGdldFN1YlNlY3Rpb25zOiAoaWQpPT5cbiAgICBjaGFwdGVycyA9IG5ldyBBcnJheSAn0J7Qk9CtICjQk9CY0JApJytpZCwgJ9Cf0L7QtNCz0L7RgtC+0LLQutCwINC6INC+0LvQuNC80L/QuNCw0LTQsNC8JytpZCwgJ9Cf0L7QtNCz0L7RgtC+0LLQutCwINC6INGN0LrQt9Cw0LzQtdC90LDQvCcraWRcbiAgICBzZWN0aW9ucyA9IG5ldyBBcnJheVxuICAgIHNlY3Rpb24gPSBuZXcgT2JqZWN0XG4gICAgdWlkID0gMFxuICAgIGZvciBjaGFwdGVyIGluIGNoYXB0ZXJzXG4gICAgICBzZWN0aW9ucy5wdXNoXG4gICAgICAgICdpZCcgOiB1aWRcbiAgICAgICAgJ3RpdGxlJyA6IGNoYXB0ZXJcbiAgICAgIHVpZCsrXG4gICAgcmV0dXJuIHNlY3Rpb25zXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgbmV3RWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9lZHVjYXRpb24ucGFyZW50KCkuYmVmb3JlIEBlZHVjYXRpb25fc291cmNlKHsnaW5kZXgnIDogQGVkdWNhdGlvbl9jb3VudH0pXG4gICAgQGVkdWNhdGlvbl9jb3VudCsrXG4gICAgQHN0ZXA0LmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGVkdWNhdGlvbl9jb3VudD4xXG4gICAgICBAcmVtb3ZlX2VkdWNhdGlvbi5zaG93KClcblxuICAgICMg0JDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjQtSDQtNC70Y8g0LLRi9Cx0L7RgNCwINCz0L7RgNC+0LTQsCDQuCDQstGD0LfQsFxuICAgIEBhZGRIaW50KClcblxuICAjINCj0LTQsNC70LjRgtGMINC+0LHRgNCw0LfQvtCy0LDQvdC40LVcbiAgcmVtb3ZlRWR1Y2F0aW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGVkdWNhdGlvbl9jb3VudC0tXG4gICAgJCgnLmVkdWNhdGlvbi13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBlZHVjYXRpb25fY291bnQ8MlxuICAgICAgQHJlbW92ZV9lZHVjYXRpb24uaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDQg0LogNSDRiNCw0LPRg1xuICBzdGVwNFN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwNC5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXA0LmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAgICMg0J7RgtC/0YDQsNCy0LrQsCDQvdCwINGB0LXRgNCy0LXRgFxuICAgIGNvbnNvbGUubG9nIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJCgnLnBhbmVsIDppbnB1dCcpLnNlcmlhbGl6ZUFycmF5KCkpKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiA0INC6IDMg0YjQsNCz0YNcbiAgc3RlcDRCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAzINC6IDQg0YjQsNCz0YNcbiAgc3RlcDNTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDMuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwMy5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLm5leHQoKS5hZGRDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiAzINC6IDIg0YjQsNCz0YNcbiAgc3RlcDNCYWNrOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5yZW1vdmVDbGFzcyAnc2VsZWN0ZWQnXG4gICAgQGN1cnJlbnQgPSBAY3VycmVudC5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKVxuICAgIEBjdXJyZW50LmFkZENsYXNzKCdjdXJyZW50JylcbiAgICAkKCdib2R5JykuYW5pbWF0ZSB7c2Nyb2xsVG9wOjB9LCAnNTAwJ1xuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRi9C5INCw0LTRgNC10YFcbiAgbmV3QWRkcmVzczogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfYWRkcmVzcy5wYXJlbnQoKS5iZWZvcmUgQGFkZHJlc3Nfc291cmNlKHsnaW5kZXgnIDogQGFkZHJlc3NfY291bnR9KVxuICAgIEBhZGRyZXNzX2NvdW50KytcbiAgICBAc3RlcDMuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBpZiBAYWRkcmVzc19jb3VudD4xXG4gICAgICBAcmVtb3ZlX2FkZHJlc3Muc2hvdygpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIHJlbW92ZUFkZHJlc3M6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkcmVzc19jb3VudC0tXG4gICAgJCgnLmFkcmVzcy13cmFwcGVyOmxhc3QnKS5yZW1vdmUoKVxuICAgIGlmIEBhZGRyZXNzX2NvdW50PDJcbiAgICAgIEByZW1vdmVfYWRkcmVzcy5oaWRlKClcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMiDQuiAzINGI0LDQs9GDXG4gIHN0ZXAyU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAyLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDIuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMiDQuiAxINGI0LDQs9GDXG4gIHN0ZXAyQmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuXG4gICMg0JHQu9C+0LrQuNGA0L7QstCw0YLRjCDRhtC10L3RiyDQvdC10LTQvtC/0YPRgdGC0LjQvNGL0YUg0YTQvtGA0LzQsNGC0L7QsiDQt9Cw0L3Rj9GC0LjQuVxuICBjaGVja0Zvcm1hdDogPT5cbiAgICBpbnB1dHMgPSBAZm9ybWF0cy5maW5kICdpbnB1dCdcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBlbGVtZW50cyA9IEBzdGVwMi5maW5kKCdpbnB1dC4nK2lucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZS1maWVsZCcpKVxuICAgICAgZm9yIGVsZW1lbnQgaW4gZWxlbWVudHNcbiAgICAgICAgcHJpY2UgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoJy5zdWJkZXZpc2lvbicpXG4gICAgICAgIGlmIGlucHV0LmNoZWNrZWRcbiAgICAgICAgICBwcmljZS5yZW1vdmVDbGFzcygnaGlkZScpXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcHJpY2UuYWRkQ2xhc3MoJ2hpZGUnKVxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndWktc3RhdGUtZXJyb3InKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0YDQsNC30LTQtdC70Ysg0L/RgNC10LTQvNC10YLQsFxuICBzdWJqZWN0U2VsZWN0ZWQ6IChldmVudCk9PlxuICAgIHNlbGVjdCA9ICQgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIHNlbGVjdC5yZW1vdmVDbGFzcyAndW5jaGFuZ2VkJ1xuICAgIGlkID0gc2VsZWN0LnZhbCgpXG5cbiAgICBsaW5lID0gc2VsZWN0LnBhcmVudHMoJy5saW5lJylcbiAgICBcbiAgICBzdWJzZWN0aW9ucyA9IEBnZXRTdWJTZWN0aW9ucyhpZClcblxuICAgIGhhbGZfbGVuZ3RoID0gTWF0aC5jZWlsKHN1YnNlY3Rpb25zLmxlbmd0aCAvIDIpXG4gICAgbGVmdFNpZGUgPSBzdWJzZWN0aW9ucy5zcGxpY2UoMCxoYWxmX2xlbmd0aClcblxuICAgIHNlY3Rpb25zID0gQHN1YmplY3Rfc2VjdGlvbl9zb3VyY2Uoe1xuICAgICAgJ2luZGV4JyAgIDogQHNlY3Rpb25fY291bnRcbiAgICAgICdzZWN0aW9uJyA6IEBnZXRTZWN0aW9ucyhpZClcbiAgICAgICdjb2x1bW4xJyA6IGxlZnRTaWRlXG4gICAgICAnY29sdW1uMicgOiBzdWJzZWN0aW9uc1xuICAgICAgfSlcblxuICAgIEBzZWN0aW9uX2NvdW50KytcblxuICAgIG5leHQgPSBsaW5lLm5leHQoKVxuICAgIGlmIG5leHQuaGFzQ2xhc3MoJ3NlY3Rpb24nKVxuICAgICAgbmV4dC5yZXBsYWNlV2l0aCBzZWN0aW9uc1xuICAgIGVsc2VcbiAgICAgIGxpbmUuYWZ0ZXIgc2VjdGlvbnNcbiAgICBcbiAgICBAc3RlcDIuZmluZCgnc2VsZWN0OnZpc2libGUnKS5jaG9zZW5cbiAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuXG5cbiAgZ2V0U2VjdGlvbjogKGluZGV4KT0+XG4gICAgc2VsZWN0ID0gICQgJy5zdWJqLXdyYXBwZXIgLnNlY3Rpb246ZXEoJytpbmRleCsnKSBzZWxlY3QnXG4gICAgaWYgc2VsZWN0Lmxlbmd0aCA9PSAxXG4gICAgICByZXR1cm4gc2VsZWN0LnZhbCgpXG5cbiAgZ2V0QWRkOiAoaW5kZXgpPT5cbiAgICBjaGtib3hzID0gICQgJy5zdWJqLXdyYXBwZXIgLnNlY3Rpb246ZXEoJytpbmRleCsnKSAuc3ViLXNlY3Rpb24gaW5wdXRbbmFtZT1cImFkZGl0aW9uW11cIl06Y2hlY2tlZCdcbiAgICB2YWx1ZXMgPSBuZXcgQXJyYXlcbiAgICBmb3IgY2hrYm94IGluIGNoa2JveHNcbiAgICAgIHZhbHVlcy5wdXNoICQoY2hrYm94KS52YWwoKVxuICAgIHJldHVybiB2YWx1ZXNcbiAgICBcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQv9GA0LXQtNC80LXRglxuICBuZXdTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZF9zdWJqZWN0LnBhcmVudCgpLmJlZm9yZSBAc3ViamVjdF9zb3VyY2UoeydpbmRleCcgOiBAc3Vial9jb3VudH0pXG4gICAgQHN1YmpfY291bnQrK1xuICAgIFxuICAgIHdyYXBwZXIgPSBAYWRkX3N1YmplY3QucGFyZW50KCkucHJldigpXG4gICAgd3JhcHBlci5maW5kKCdzZWxlY3QnKS5vbiAnY2hhbmdlJywgQHN1YmplY3RTZWxlY3RlZFxuXG4gICAgQHN0ZXAyLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgQHN0ZXAyLmZpbmQoJy5taW4tdGltZScpLnRleHQgQGR1cmF0aW9uX3ZhbHVlLnZhbCgpXG4gICAgQGNoZWNrRm9ybWF0KClcbiAgICBmb3IgZWxlbWVudCBpbiBAc3RlcDIuZmluZCgnLmRyb3Bkb3duLWNvbnRhaW5lci13aWRnZXQnKVxuICAgICAgbmV3IERyb3Bkb3duV2lkZ2V0Q29udHJvbGxlcigkKGVsZW1lbnQpKVxuICAgIFxuICAgIGlmIEBzdWJqX2NvdW50PjFcbiAgICAgIEByZW1vdmVfc3ViamVjdC5zaG93KClcblxuICAjINCj0LTQsNC70LjRgtGMINC/0YDQtdC00LzQtdGCXG4gIHJlbW92ZVN1YmplY3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3Vial9jb3VudC0tXG4gICAgJCgnLnN1Ymotd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAc3Vial9jb3VudDwyXG4gICAgICBAcmVtb3ZlX3N1YmplY3QuaGlkZSgpXG5cbiAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LHQu9C+0LrQvtCyINC90LAg0LLQsNC70LjQtNC90L7RgdGC0YxcbiAgdmFsaWRhdGU6IChpbnB1dCk9PlxuXG4gICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlICdkYXRhLWg1LWVycm9yaWQnXG4gICAgICBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1oNS1lcnJvcmlkJylcblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKVxuICAgICAgaWYgaW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQgJ3VpLXN0YXRlLWVycm9yJ1xuXG4gICAgaWYgaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zICd1aS1zdGF0ZS1lcnJvcidcbiAgICAgIGlmIGVycm9yXG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBlbHNlXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0LrQviDQstGC0L7RgNC+0LzRgyDRiNCw0LPRgyDRgNC10LPQuNGB0YLRgNCw0YbQuNC4XG4gIHN0ZXAxU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAxLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDEuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuXG4gICMg0KjQsNCzIDFcbiAgIyDQkNCy0LDRgtCw0YBcbiAgZHJvcGVkOiAoZXZlbnQpLT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgRmlsZUFQSS5nZXREcm9wRmlsZXMgZXZlbnQsIChmaWxlcyktPlxuXG4gICMg0L/QvtC00LLQtdC70Lgg0LrRg9GA0YHQvtGAINC6INCx0LvQvtC60YMg0LTRgNC+0L/QsCDQsNCy0LDRgtCw0YDQutC4XG4gIG92ZXI6IChvdmVyKS0+XG5cbiAgIyDQsdGA0L7RgdC40LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGRyb3A6IChmaWxlcyk9PlxuICAgIGNvbnNvbGUubG9nICBmaWxlc1xuICAgIGlmIGZpbGVzLmxlbmd0aFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgXG4gICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KT0+XG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcbiAgICAgIFxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAjINCj0LTQsNC70LjQu9C4INCw0LLQsNGC0YDQsNC60YNcbiAgcmVtb3ZlQXZhdGFyOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgQGZpbGUgPSBAc3RlcDEuZmluZCAnI3JlZ2lzdHJhdGlvbi1hdmF0YXInXG5cbiAgIyDQktGL0LHRgNCw0LvQuCDQsNCy0LDRgtCw0YDQutGDXG4gIGF2YXRhclNlbGVjdGVkOiAoZXZlbnQpPT5cbiAgICBmaWxlcyA9IEZpbGVBUEkuZ2V0RmlsZXMoZXZlbnQpXG5cbiAgICBleHQgPSBmaWxlc1swXVsnbmFtZSddLnN1YnN0cmluZyhmaWxlc1swXVsnbmFtZSddLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoZmlsZXNbMF0gJiYgKGZpbGVzWzBdLnNpemUgPD0gRmlsZUFQSS5NQikgJiYgKGV4dCA9PSBcImdpZlwiIHx8IGV4dCA9PSBcInBuZ1wiIHx8IGV4dCA9PSBcImpwZWdcIiB8fCBleHQgPT0gXCJqcGdcIikpXG4gICAgICAgIFxuICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBcbiAgICAgICAgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICBhdmF0YXIgPSBkb2N1bWVudC5pbXBvcnROb2RlIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LCB0cnVlXG4gICAgICAgIHByZXYgPSBAZmlsZVNlbGVjdG9yLnByZXYoKVxuICAgICAgICBpZiBwcmV2Lmhhc0NsYXNzKCdjdXJyZW50LWF2YXRhcicpXG4gICAgICAgICAgcHJldi5yZW1vdmUoKVxuICAgICAgICBAZmlsZVNlbGVjdG9yLmJlZm9yZSBhdmF0YXJcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkuZmluZCgnLmNsb3NlJykub24gJ2NsaWNrJywgQHJlbW92ZUF2YXRhclxuXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCBmaWxlc1swXVxuXG4gICAgZWxzZVxuICAgICAgQGZpbGVTZWxlY3Rvci5wcmV2KCkucmVtb3ZlKClcbiAgICAgIEBmaWxlLnJlcGxhY2VXaXRoIEBmaWxlLnZhbCgnJykuY2xvbmUodHJ1ZSlcbiAgICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0J/RgNC+0LLQtdGA0Y/QtdC8INC80L7QttC10YIg0LvQuCDRgdGD0YnQtdGB0YLQstC+0LLQsNGC0Ywg0YPQutCw0LfQsNC90L3QsNGPINC00LDRgtCwLCDQvdCw0L/RgNC40LzQtdGAIDMxINGE0LXQstGA0LDQu9GPINC4INC40YHQv9GA0LDQstC70Y/QtdC8INCyINGB0LvRg9GH0LDQtSDQvtGI0LjQsdC60LhcbiAgY2hlY2tEYXRlOiAoZXZlbnQpPT5cbiAgICBkYXkgPSBwYXJzZUludCBAZGF5LnZhbCgpLnRyaW0oKSwgMTBcbiAgICBcbiAgICBpZiBkYXk8MSB8fCBpc05hTihkYXkpXG4gICAgICBAZGF5LnZhbCAxXG4gICAgICByZXR1cm5cblxuICAgIGRheXMgPSBwYXJzZUludCBtb21lbnQoQHllYXIudmFsKCkrXCItXCIrKHBhcnNlSW50KEBtb250aC52YWwoKSwxMCkrMSksIFwiWVlZWS1NTVwiKS5kYXlzSW5Nb250aCgpLCAxMFxuICAgIGlmIGRheT5kYXlzXG4gICAgICBAZGF5LnZhbCBkYXlzXG4gICAgcmV0dXJuXG5cbiAgICBpZiBkYXk+MzFcbiAgICAgIEBkYXkudmFsIDMxXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIG5ldyBQZXJzb25hbERhdGFBbGwoKVxuXG5cbiJdfQ==