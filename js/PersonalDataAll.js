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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmFsRGF0YUFsbC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxlQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLHlCQUFBLEdBQUE7QUFDWCxpREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLCtDQUFBLENBQUE7QUFBQSx5REFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLDJDQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsNkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSxtREFBQSxDQUFBO0FBQUEsaURBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEscURBQUEsQ0FBQTtBQUFBLDZEQUFBLENBQUE7QUFBQSx1REFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSw2Q0FBQSxDQUFBO0FBQUEsUUFBQSxpQkFBQTtBQUFBLElBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxDQUFBLENBQUUscUJBQUYsQ0FBVixDQUFBO0FBQ0EsSUFBQSxJQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixLQUFrQixDQUFyQjtBQUNFLFlBQVUsSUFBQSxLQUFBLENBQU0sa0JBQU4sQ0FBVixDQURGO0tBREE7QUFBQSxJQUlBLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUpULENBQUE7QUFBQSxJQUtBLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUxWLENBQUE7QUFBQSxJQU1BLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFS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QUFZLEdBQVosR0FBZ0IsQ0FBQyxRQUFBLENBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUFQLENBQUEsQ0FBVCxFQUFzQixFQUF0QixDQUFBLEdBQTBCLENBQTNCLENBQXZCLEVBQXNELFNBQXRELENBQWdFLENBQUMsV0FBakUsQ0FBQSxDQUFULEVBQXlGLEVBQXpGLENBTlAsQ0FBQTtBQU9BLElBQUEsSUFBRyxHQUFBLEdBQUksSUFBUDtBQUNFLE1BQUEsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFBLENBREY7S0FQQTtBQVNBLFVBQUEsQ0FUQTtBQVdBLElBQUEsSUFBRyxHQUFBLEdBQUksRUFBUDthQUNFLElBQUMsQ0FBQSxHQUFHLENBQUMsR0FBTCxDQUFTLEVBQVQsRUFERjtLQVpTO0VBQUEsQ0F4akJYLENBQUE7O3lCQUFBOztJQURGLENBQUE7O0FBQUEsQ0F3a0JBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7U0FDWixJQUFBLGVBQUEsQ0FBQSxFQURZO0FBQUEsQ0FBbEIsQ0F4a0JBLENBQUEiLCJmaWxlIjoiUGVyc29uYWxEYXRhQWxsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGVyc29uYWxEYXRhQWxsXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEB3aWRnZXQgPSAkICcucmVnaXN0cmF0aW9uLXN0ZXBzJ1xuICAgIGlmIEB3aWRnZXQubGVuZ3RoID09IDBcbiAgICAgIHRocm93IG5ldyBFcnJvcign0L3QtSDQvdCw0LnQtNC10L0g0LLQuNC00LbQtdGCJylcblxuICAgIEBzdGVwcyA9IEB3aWRnZXQuZmluZCAnLnN0ZXBzJ1xuICAgIEBwYW5lbHMgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbCdcbiAgICBAY3VycmVudCA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLmN1cnJlbnQnXG5cbiAgICBAc3RlcDEgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTEnXG4gICAgQHN0ZXAyID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC0yJ1xuICAgIEBzdGVwMyA9IEB3aWRnZXQuZmluZCAnLnBhbmVsLnN0ZXAtMydcbiAgICBAc3RlcDQgPSBAd2lkZ2V0LmZpbmQgJy5wYW5lbC5zdGVwLTQnXG4gICAgQHN0ZXA1ID0gQHdpZGdldC5maW5kICcucGFuZWwuc3RlcC01J1xuXG4gICAgIyDQntCx0YnQtdC1XG4gICAgc2VsZWN0ID0gJCAnc2VsZWN0J1xuICAgIGlmIHNlbGVjdC5sZW5ndGggPiAwXG4gICAgICBzZWxlY3QuY2hvc2VuXG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMzBcblxuICAgICMg0KjQsNCzIDFcbiAgICAjINCf0YDQvtCy0LXRgNC60LAg0L/QvtC70LXQuSDQstCy0L7QtNCwXG4gICAgQHN0ZXAxLmg1VmFsaWRhdGUoKVxuXG4gICAgIyDQl9Cw0LPRgNGD0LfQutCwINCw0LLQsNGC0LDRgNCwXG4gICAgQGF2YWRyb3AgPSBuZXcgRHJvcHpvbmUgJCgnLnBob3RvJylbMF0sXG4gICAgICB1cmw6IFwiaHR0cDovL3Rlc3Quc2lsZW50aW1wLmluZm8vUmVwZXRpdC5ydS90ZXN0LnBocFwiXG4gICAgICB1cGxvYWRNdWx0aXBsZTogZmFsc2VcbiAgICAgIG1heEZpbGVzaXplOiA1XG4gICAgICBwYXJhbU5hbWU6IFwiYXZhdGFyXCJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCJcbiAgICAgIGNsaWNrYWJsZTogXCIuZmlsZS1zZWxlY3RvclwiXG4gICAgICB0aHVtYm5haWxXaWR0aDogbnVsbFxuICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBudWxsXG4gICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLypcIlxuICAgICAgcHJldmlld3NDb250YWluZXI6IFwiLmF2YXRhclwiXG4gICAgICBwcmV2aWV3VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY3VycmVudC1hdmF0YXJcIj48aW1nIGRhdGEtZHotdGh1bWJuYWlsPVwiZGF0YS1kei10aHVtYm5haWxcIiAvPjxhIGhyZWY9XCIjXCIgZGF0YS1kei1yZW1vdmU9XCJkYXRhLWR6LXJlbW92ZVwiIGNsYXNzPVwiY2xvc2VcIj48L2E+PC9kaXY+J1xuXG4gICAgQGF2YWRyb3Aub24gJ2FkZGVkZmlsZScsIC0+XG4gICAgICAkKCcuZmlsZS1zZWxlY3RvcicpLmhpZGUoKVxuXG4gICAgQGF2YWRyb3Aub24gJ3JlbW92ZWRmaWxlJywgLT5cbiAgICAgICQoJy5maWxlLXNlbGVjdG9yJykuc2hvdygpXG5cbiAgICAjINCf0L7Qu9C30YPQvdC+0Log0L7Qv9GL0YLQsFxuICAgIGV4cCA9ICQgJyNleHBlcmllbmNlJ1xuICAgIGlmIGV4cC5sZW5ndGggPiAwXG4gICAgICBleHAubm9VaVNsaWRlclxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBjb25uZWN0OiBcImxvd2VyXCIsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICByYW5nZTpcbiAgICAgICAgICAnbWluJzogWzBdLFxuICAgICAgICAgICdtYXgnOiBbNTBdXG4gICAgICAgIGZvcm1hdDogd051bWJcbiAgICAgICAgICBkZWNpbWFsczogMFxuICAgICAgZXhwLkxpbmsoJ2xvd2VyJykudG8oJCgnI2V4cGVyaWVuY2UtdmFsdWUnKSlcblxuICAgICMg0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRj1xuICAgIEBtb250aCA9IEBzdGVwMS5maW5kICcubW9udGggc2VsZWN0J1xuICAgIEB5ZWFyICA9IEBzdGVwMS5maW5kICcueWVhciBzZWxlY3QnXG4gICAgQGRheSAgID0gQHN0ZXAxLmZpbmQgJ2lucHV0LmRheSdcbiAgICBAZGF5Lm9uICAgJ2NoYW5nZScsIEBjaGVja0RhdGVcbiAgICBAbW9udGgub24gJ2NoYW5nZScsIEBjaGVja0RhdGVcbiAgICBAeWVhci5vbiAgJ2NoYW5nZScsIEBjaGVja0RhdGVcblxuICAgICMg0J7RgtC/0YDQsNCy0LrQsCDQtNCw0L3QvdGL0YUg0KjQsNCzIDFcbiAgICBAc3RlcDEuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5vbiAnY2xpY2snLCBAc3RlcDFTdWJtaXRcblxuXG4gICAgIyDQqNCw0LMgMlxuICAgICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgICBAc3RlcDIuaDVWYWxpZGF0ZSgpXG5cbiAgICAjINCf0L7Qu9C30YPQvdC+0Log0LTQu9C40YLQtdC70YzQvdC+0YHRgtC4INC30LDQvdGP0YLQuNC5XG4gICAgQGR1cmF0aW9uX3ZhbHVlID0gJCgnI2R1cmF0aW9uLXZhbHVlJylcblxuICAgIHRpbWUgPSAkICcjZHVyYXRpb24nXG4gICAgaWYgdGltZS5sZW5ndGggPiAwXG4gICAgICB0aW1lLm5vVWlTbGlkZXJcbiAgICAgICAgc3RlcDogNSxcbiAgICAgICAgY29ubmVjdDogXCJsb3dlclwiLFxuICAgICAgICBzdGFydDogMCxcbiAgICAgICAgcmFuZ2U6XG4gICAgICAgICAgJ21pbic6IFszMF0sXG4gICAgICAgICAgJ21heCc6IFsxODBdXG4gICAgICAgIGZvcm1hdDogd051bWJcbiAgICAgICAgICBkZWNpbWFsczogMFxuXG4gICAgICBcbiAgICAgIHRpbWUuTGluaygnbG93ZXInKS50byhAZHVyYXRpb25fdmFsdWUpXG4gICAgICB0aW1lLm9uICdjaGFuZ2UnLCAoZXZlbnQsIHVpKT0+XG4gICAgICAgICQoJ3N0cm9uZy5taW4tdGltZScpLnRleHQodWkpXG5cbiAgICAjINCk0L7RgNC80LDRgiDQt9Cw0L3Rj9GC0LjQuVxuICAgIEBmb3JtYXRzID0gQHN0ZXAyLmZpbmQgJy5sZXNzb25zLWZvcm1hdCdcbiAgICBAZm9ybWF0cy5maW5kKCdpbnB1dCcpLm9uICdjaGFuZ2UnLCBAY2hlY2tGb3JtYXRcbiAgICBAY2hlY2tGb3JtYXQoKVxuXG4gICAgIyDQlNC+0LHQsNCy0LrQsCDQv9GA0LXQtNC80LXRgtCwXG4gICAgQGFkZF9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5hZGQtc3ViamVjdCdcbiAgICBAc3Vial9jb3VudCA9IDBcbiAgICBAc3ViamVjdF9zb3VyY2UgPSAkKFwiI3N1YmotdGVtcGxhdGVcIikuaHRtbCgpXG4gICAgQHN1YmplY3Rfc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NvdXJjZVxuICAgIEBhZGRfc3ViamVjdC5vbiAnY2xpY2snLCBAbmV3U3ViamVjdFxuICAgIEBhZGRfc3ViamVjdC50cmlnZ2VyICdjbGljaydcblxuICAgICMg0J/QvtC00YDQsNC30LTQtdC70Ysg0L/RgNC10LTQvNC10YLQsFxuICAgIEBzZWN0aW9uX2NvdW50ID0gMCBcbiAgICBAc3ViamVjdF9zZWN0aW9uX3NvdXJjZSA9ICQoXCIjc3Viai1zZWN0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBzdWJqZWN0X3NlY3Rpb25fc291cmNlXG5cbiAgICAj0KPQtNCw0LvQtdC90LjQtSDQv9GA0LXQtNC80LXRgtCwXG4gICAgQHJlbW92ZV9zdWJqZWN0ID0gQHN0ZXAyLmZpbmQgJy5yZW1vdmUtc3ViamVjdCdcbiAgICBAcmVtb3ZlX3N1YmplY3Qub24gJ2NsaWNrJywgQHJlbW92ZVN1YmplY3RcblxuICAgIEBzdGVwMi5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwMlN1Ym1pdFxuICAgIEBzdGVwMi5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAyQmFja1xuXG5cbiAgICAjINCo0LDQsyAzXG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwMy5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQsNC00YDQtdGB0LBcbiAgICBAYWRkX2FkZHJlc3MgPSBAc3RlcDMuZmluZCAnLmFkZC1hZGRyZXNzJ1xuICAgIEBhZGRyZXNzX2NvdW50ID0gMFxuICAgIEBhZGRyZXNzX3NvdXJjZSA9ICQoXCIjYWRkcmVzcy10ZW1wbGF0ZVwiKS5odG1sKClcbiAgICBAYWRkcmVzc19zb3VyY2UgPSBIYW5kbGViYXJzLmNvbXBpbGUgQGFkZHJlc3Nfc291cmNlXG4gICAgQGFkZF9hZGRyZXNzLm9uICdjbGljaycsIEBuZXdBZGRyZXNzXG4gICAgQGFkZF9hZGRyZXNzLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0LDQtNGA0LXRgdCwXG4gICAgQHJlbW92ZV9hZGRyZXNzID0gQHN0ZXAzLmZpbmQgJy5yZW1vdmUtYWRkcmVzcydcbiAgICBAcmVtb3ZlX2FkZHJlc3Mub24gJ2NsaWNrJywgQHJlbW92ZUFkZHJlc3NcblxuICAgIEBzdGVwMy5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwM1N1Ym1pdFxuICAgIEBzdGVwMy5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXAzQmFja1xuXG5cbiAgICAjINCo0LDQsyA0XG4gICAgIyDQn9GA0L7QstC10YDQutCwINC/0L7Qu9C10Lkg0LLQstC+0LTQsFxuICAgIEBzdGVwNC5oNVZhbGlkYXRlKClcblxuICAgICPQlNC+0LHQsNCy0LrQsCDQvtCx0YDQsNC30L7QstCw0L3QuNGPXG4gICAgQGFkZF9lZHVjYXRpb24gPSBAc3RlcDQuZmluZCAnLmFkZC1lZHVjYXRpb24nXG4gICAgQGVkdWNhdGlvbl9jb3VudCA9IDBcbiAgICBAZWR1Y2F0aW9uX3NvdXJjZSA9ICQoXCIjZWR1Y2F0aW9uLXRlbXBsYXRlXCIpLmh0bWwoKVxuICAgIEBlZHVjYXRpb25fc291cmNlID0gSGFuZGxlYmFycy5jb21waWxlIEBlZHVjYXRpb25fc291cmNlXG4gICAgQGFkZF9lZHVjYXRpb24ub24gJ2NsaWNrJywgQG5ld0VkdWNhdGlvblxuICAgIEBhZGRfZWR1Y2F0aW9uLnRyaWdnZXIgJ2NsaWNrJ1xuXG4gICAgI9Cj0LTQsNC70LXQvdC40LUg0L7QsdGA0LDQt9C+0LLQsNC90LjRj1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uID0gQHN0ZXA0LmZpbmQgJy5yZW1vdmUtZWR1Y2F0aW9uJ1xuICAgIEByZW1vdmVfZWR1Y2F0aW9uLm9uICdjbGljaycsIEByZW1vdmVFZHVjYXRpb25cblxuXG4gICAgQGNlcnRfbGlzdCA9IEBzdGVwNC5maW5kICcuc2VydGlmaWNhdC1saXN0J1xuICAgIEBjZXJpZmljYXRlc19jb3VudCA9IDBcbiAgICBAc2VydGlmaWNhdHMgPSBAc3RlcDQuZmluZCAnLnNlcnRpZmljYXRzJ1xuXG4gICAgQHNlcnRpZmljYXRzLmRyb3B6b25lXG4gICAgICB1cmw6IFwiaHR0cDovL3Rlc3Quc2lsZW50aW1wLmluZm8vUmVwZXRpdC5ydS90ZXN0LnBocFwiXG4gICAgICB1cGxvYWRNdWx0aXBsZTogdHJ1ZVxuICAgICAgbWF4RmlsZXNpemU6IDVcbiAgICAgIHBhcmFtTmFtZTogXCJjZXJ0aWZpY2F0c1wiXG4gICAgICBtZXRob2Q6IFwicG9zdFwiXG4gICAgICBwcmV2aWV3c0NvbnRhaW5lcjogXCIuc2VydGlmaWNhdC1saXN0XCJcbiAgICAgIGNsaWNrYWJsZTogXCIuYWRkLXNlcnRpZmljYXQgLmJ1dHRvblwiXG4gICAgICB0aHVtYm5haWxXaWR0aDogbnVsbFxuICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBudWxsXG4gICAgICBhY2NlcHRlZEZpbGVzOiBcImltYWdlLyosYXBwbGljYXRpb24vcGRmXCJcbiAgICAgIHByZXZpZXdUZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJzZXJ0aWZpY2F0IGR6LXByZXZpZXcgZHotZmlsZS1wcmV2aWV3XCI+PGltZyBkYXRhLWR6LXRodW1ibmFpbD1cImRhdGEtZHotdGh1bWJuYWlsXCIgLz48YSBocmVmPVwiI1wiIGRhdGEtZHotcmVtb3ZlPVwiZGF0YS1kei1yZW1vdmVcIiBjbGFzcz1cInJlbW92ZVwiPjwvYT48dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRzW11cIiBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LXigKZcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPjwvZGl2PidcblxuICAgIEBzdGVwNC5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLm9uICdjbGljaycsIEBzdGVwNFN1Ym1pdFxuICAgIEBzdGVwNC5maW5kKCdhLnByZXZpb3VzJykub24gJ2NsaWNrJywgQHN0ZXA0QmFja1xuXG4gIGFkZEhpbnQ6ID0+XG4gICAgbG9jYXRpb25zID0gbmV3IEJsb29kaG91bmRcbiAgICAgIGRhdHVtVG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMub2JqLndoaXRlc3BhY2UoXCJjaXR5XCIpLFxuICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxuICAgICAgcHJlZmV0Y2g6IFwiaHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3UvMjA4MTA3NzIvY2l0eXMuanNvblwiXG4gICAgXG4gICAgbG9jYXRpb25zLmluaXRpYWxpemUoKVxuXG4gICAgJCgnLmNpdHknKS50eXBlYWhlYWRcbiAgICAgIGhpbnQ6IGZhbHNlXG4gICAgICBoaWdobGlnaHQ6IHRydWVcbiAgICAgIG1pbkxlbmd0aDogMVxuICAgICxcbiAgICAgIG5hbWU6ICdsb2NhdGlvbnMnXG4gICAgICBkaXNwbGF5S2V5OiAnY2l0eScsXG4gICAgICBzb3VyY2U6IGxvY2F0aW9ucy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPjxiPnt7cmVnaW9ufX08L2I+e3tjaXR5fX08L3A+JylcblxuICAgIHVuaXZlcmNpdHlzID0gbmV3IEJsb29kaG91bmRcbiAgICAgIGRhdHVtVG9rZW5pemVyOiAoZGF0YSktPlxuICAgICAgICByZXR1cm4gQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UoZGF0YS50aXRsZSlcbiAgICAgIHF1ZXJ5VG9rZW5pemVyOiBCbG9vZGhvdW5kLnRva2VuaXplcnMud2hpdGVzcGFjZSxcbiAgICAgIGxvY2FsOiBbe1widGl0bGVcIjpcIkFuZG9ycmFcIn0se1widGl0bGVcIjpcIlVuaXRlZEFyYWJFbWlyYXRlc1wifSx7XCJ0aXRsZVwiOlwiQWZnaGFuaXN0YW5cIn0se1widGl0bGVcIjpcIkFudGlndWFhbmRCYXJidWRhXCJ9LHtcInRpdGxlXCI6XCJBbmd1aWxsYVwifSx7XCJ0aXRsZVwiOlwiQWxiYW5pYVwifSx7XCJ0aXRsZVwiOlwiQXJtZW5pYVwifSx7XCJ0aXRsZVwiOlwiQW5nb2xhXCJ9LHtcInRpdGxlXCI6XCJBbnRhcmN0aWNhXCJ9XVxuXG4gICAgdW5pdmVyY2l0eXMuaW5pdGlhbGl6ZSgpXG5cbiAgICAkKCcudW5pdmVyY2l0eTpub3QoLnR0LWlucHV0KScpLnR5cGVhaGVhZFxuICAgICAgaGludDogZmFsc2VcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZVxuICAgICAgbWluTGVuZ3RoOiAxXG4gICAgLFxuICAgICAgbmFtZTogJ3VuaXZlcmNpdHlzJ1xuICAgICAgZGlzcGxheUtleTogJ3RpdGxlJyxcbiAgICAgIHNvdXJjZTogdW5pdmVyY2l0eXMudHRBZGFwdGVyKClcbiAgICAgIHRlbXBsYXRlczpcbiAgICAgICAgc3VnZ2VzdGlvbjogSGFuZGxlYmFycy5jb21waWxlKCc8cD57e3RpdGxlfX08L3A+JylcblxuICAgICQoJy5mYWN1bHR5Om5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICAgJCgnLnNwZWNpYWxpemF0aW9uOm5vdCgudHQtaW5wdXQpJykudHlwZWFoZWFkXG4gICAgICBoaW50OiBmYWxzZVxuICAgICAgaGlnaGxpZ2h0OiB0cnVlXG4gICAgICBtaW5MZW5ndGg6IDFcbiAgICAsXG4gICAgICBuYW1lOiAndW5pdmVyY2l0eXMnXG4gICAgICBkaXNwbGF5S2V5OiAndGl0bGUnLFxuICAgICAgc291cmNlOiB1bml2ZXJjaXR5cy50dEFkYXB0ZXIoKVxuICAgICAgdGVtcGxhdGVzOlxuICAgICAgICBzdWdnZXN0aW9uOiBIYW5kbGViYXJzLmNvbXBpbGUoJzxwPnt7dGl0bGV9fTwvcD4nKVxuXG4gICMg0J/QvtC70YPRh9C10L3QuNC1INGB0L/QuNGB0LrQsCDRgNCw0LfQtNC10LvQvtCyINC00LvRjyDQv9GA0LXQtNC80LXRgtCwXG4gIGdldFNlY3Rpb25zOiAoaWQpPT5cbiAgICBjaGFwdGVycyA9IFsn0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQuSDQsNC90LDQu9C40LcnK2lkLCfRgtC10L7RgNC40Y8g0LLQtdGA0L7Rj9GC0L3QvtGB0YLQtdC5JytpZCwn0YLQtdC+0YDQtdGC0LjRh9C10YHQutCw0Y8g0LzQtdGF0LDQvdC40LrQsCcraWQsJ9GB0L7Qv9GA0L7QvNCw0YInK2lkLCfQvNCw0YLQtdC80LDRgtC4INC70L7Qs9C40LrQsCcraWQsJ9GN0LrQvtC90L7QvNC10YLRgNC40LrQsCcraWQsJ9Cy0YvRgdGI0LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9C70LjQvdC10LnQvdCw0Y8g0LDQu9Cz0LXQsdGA0LAnK2lkLCfQtNC40YTRhNC10YDQtdC90YbQuNCw0LvRjNC90LDRjyDQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQsNC90LDQu9C40YLQuNGH0LXRgdC60LDRjyDQs9C10L7QvNC10YLRgNC40Y8nK2lkLCfQvNCw0YLQtdC80LDRgtC40YfQtdGB0LrQsNGPINGE0LjQt9C40LrQsCcraWQsJ9C00LjRhNGE0LXRgNC10L3RhtC40LDQu9GM0L3Ri9C1INGD0YDQsNCy0L3QtdC90LjRjycraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutCw0Y8g0YHRgtCw0YLQuNGB0YLQuNC60LAnK2lkLCfQu9C40L3QtdC50L3QsNGPINCz0LXQvtC80LXRgtGA0LjRjycraWQsJ9C00LjRgdC60YDQtdGC0L3QsNGPINC80LDRgtC10LzQsNGC0LjQutCwJytpZCwn0YLQvtC/0L7Qu9C+0LPQuNGPJytpZCwn0YTRg9C90LrRhtC40L7QvdCw0LvRjNC90YvQuSDQsNC90LDQu9C40LcnK2lkLCfQuNC90YLQtdCz0YDQsNC70YzQvdGL0LUg0YPRgNCw0LLQvdC10L3QuNGPJytpZCwn0YLQtdC+0YDQuNGPINGH0LjRgdC10LsnK2lkLCfQstC10LrRgtC+0YDQvdGL0Lkg0LDQvdCw0LvQuNC3JytpZCwn0KLQpNCa0J8nK2lkLCfRgtC10L3Qt9C+0YDQvdGL0Lkg0LDQvdCw0LvQuNC3JytpZCwn0YTQuNC90LDQvdGB0L7QstCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRg9GA0LDQstC90LXQvdC40Y8g0LIg0YfQsNGB0YLQvdGL0YUg0L/RgNC+0LjQt9Cy0L7QtNC90YvRhScraWQsJ9Cw0LrRgtGD0LDRgNC90LDRjyDQvNCw0YLQtdC80LDRgtC40LrQsCcraWQsJ9GC0LXQvtGA0LjRjyDQs9GA0LDRhNC+0LInK2lkLCfQutC+0LzQsdC40L3QsNGC0L7RgNC40LrQsCcraWQsJ9C80LDRgtC10LzQsNGC0LjRh9C10YHQutC40LUg0LzQvtC00LXQu9C4JytpZCwn0L/RgNC40LrQu9Cw0LTQvdCw0Y8g0LzQsNGC0LXQvNCw0YLQuNC60LAnK2lkLCfRgtGA0LjQs9C+0L3QvtC8LdC40Y8nK2lkLCfRg9GA0LDQstC90LXQvdC40Y8g0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60L7QuSDRhNC40LfQuNC60LgnK2lkLCfRh9C40YHQu9C10L3QvdGL0LUg0LzQtdGC0L7QtNGLJytpZCwn0YLQtdC+0YDQuNGPINC/0YDQuNCx0LvQuNC20LXQvdC40LknK2lkLCfRgtC10L7RgNC40Y8g0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCcraWQsJy7RiNC60L7Qu9GM0L3Ri9C5INC60YPRgNGBJytpZCwn0L3QsCDQsNC90LPQu9C40LnRgdC60L7QvCDRj9C30YvQutC1JytpZCwn0LDQu9Cz0LXQsdGA0LAg0LvQvtCz0LjQutC4JytpZCwn0LLRi9GH0LjRgdC70LjQvNGL0LUg0YTRg9C90LrRhtC40LgnK2lkLCfRgtC10L7RgNC40Y8g0LjQs9GAJytpZCwn0LLQsNGA0LjQsNGG0LjQvtC90L3QvtC1INC40YHRh9C40YHQu9C10L3QuNC1JytpZCwn0L7Qv9GC0LjQvNCw0LvRjNC90L7QtSDRg9C/0YDQsNCy0LvQtdC90LjQtScraWQsJ9C80LXRgtC+0LTRiyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4JytpZCwn0LvQuNC90LXQudC90L7QtSDQv9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtScraWQsJ9Cw0LvQs9C10LHRgNCwJytpZCwn0LPQtdC+0LzQtdGC0YDQuNGPJytpZCwn0LzQtdGC0L7QtNGLINC+0L/RgtC40LzQsNC70YzQvdGL0YUg0YDQtdGI0LXQvdC40LknK2lkXVxuICAgIHNlY3Rpb25zID0gbmV3IEFycmF5XG4gICAgc2VjdGlvbiA9IG5ldyBPYmplY3RcbiAgICBpZCA9IDBcbiAgICBmb3IgY2hhcHRlciBpbiBjaGFwdGVyc1xuICAgICAgc2VjdGlvbiA9IHtcbiAgICAgICAgaWQgOiBpZFxuICAgICAgICB0aXRsZSA6IGNoYXB0ZXJcbiAgICAgIH1cbiAgICAgIHNlY3Rpb25zLnB1c2ggc2VjdGlvblxuICAgICAgaWQrK1xuICAgIHJldHVybiBzZWN0aW9uc1xuXG4gICMg0J/QvtC70YPRh9C10L3QuNC1INC00L7Qv9C+0LvQvdC10L3QuNC5INC00LvRjyDRgNCw0LfQtNC10LvQsFxuICBnZXRTdWJTZWN0aW9uczogKGlkKT0+XG4gICAgY2hhcHRlcnMgPSBuZXcgQXJyYXkgJ9Ce0JPQrSAo0JPQmNCQKScraWQsICfQn9C+0LTQs9C+0YLQvtCy0LrQsCDQuiDQvtC70LjQvNC/0LjQsNC00LDQvCcraWQsICfQn9C+0LTQs9C+0YLQvtCy0LrQsCDQuiDRjdC60LfQsNC80LXQvdCw0LwnK2lkXG4gICAgc2VjdGlvbnMgPSBuZXcgQXJyYXlcbiAgICBzZWN0aW9uID0gbmV3IE9iamVjdFxuICAgIHVpZCA9IDBcbiAgICBmb3IgY2hhcHRlciBpbiBjaGFwdGVyc1xuICAgICAgc2VjdGlvbnMucHVzaFxuICAgICAgICAnaWQnIDogdWlkXG4gICAgICAgICd0aXRsZScgOiBjaGFwdGVyXG4gICAgICB1aWQrK1xuICAgIHJldHVybiBzZWN0aW9uc1xuXG4gICMg0JTQvtCx0LDQstC40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIG5ld0VkdWNhdGlvbjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfZWR1Y2F0aW9uLnBhcmVudCgpLmJlZm9yZSBAZWR1Y2F0aW9uX3NvdXJjZSh7J2luZGV4JyA6IEBlZHVjYXRpb25fY291bnR9KVxuICAgIEBlZHVjYXRpb25fY291bnQrK1xuICAgIEBzdGVwNC5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIGlmIEBlZHVjYXRpb25fY291bnQ+MVxuICAgICAgQHJlbW92ZV9lZHVjYXRpb24uc2hvdygpXG5cbiAgICAjINCQ0LLRgtC+0LfQsNC/0L7Qu9C90LXQvdC40LUg0LTQu9GPINCy0YvQsdC+0YDQsCDQs9C+0YDQvtC00LAg0Lgg0LLRg9C30LBcbiAgICBAYWRkSGludCgpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQvtCx0YDQsNC30L7QstCw0L3QuNC1XG4gIHJlbW92ZUVkdWNhdGlvbjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBlZHVjYXRpb25fY291bnQtLVxuICAgICQoJy5lZHVjYXRpb24td3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAZWR1Y2F0aW9uX2NvdW50PDJcbiAgICAgIEByZW1vdmVfZWR1Y2F0aW9uLmhpZGUoKVxuXG4gICMg0J/QtdGA0LXRhdC+0LQg0L7RgiA0INC6IDUg0YjQsNCz0YNcbiAgc3RlcDRTdWJtaXQ6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpbnB1dHMgPSBAc3RlcDQuZmluZCgnOmlucHV0JylcbiAgICBmb3IgaW5wdXQgaW4gaW5wdXRzXG4gICAgICBpZiAhQHZhbGlkYXRlKGlucHV0KVxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmIEBzdGVwNC5maW5kKCcudWktc3RhdGUtZXJyb3InKS5sZW5ndGg+MFxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgICAjINCe0YLQv9GA0LDQstC60LAg0L3QsCDRgdC10YDQstC10YBcbiAgICBjb25zb2xlLmxvZyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCQoJy5wYW5lbCA6aW5wdXQnKS5zZXJpYWxpemVBcnJheSgpKSlcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgNCDQuiAzINGI0LDQs9GDXG4gIHN0ZXA0QmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMyDQuiA0INGI0LDQs9GDXG4gIHN0ZXAzU3VibWl0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaW5wdXRzID0gQHN0ZXAzLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAc3RlcDMuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgQHN0ZXBzLmZpbmQoJy5zZWxlY3RlZC5zdGVwOmxhc3QnKS5uZXh0KCkuYWRkQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCf0LXRgNC10YXQvtC0INC+0YIgMyDQuiAyINGI0LDQs9GDXG4gIHN0ZXAzQmFjazogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykucmVtb3ZlQ2xhc3MgJ3NlbGVjdGVkJ1xuICAgIEBjdXJyZW50ID0gQGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KClcbiAgICBAY3VycmVudC5hZGRDbGFzcygnY3VycmVudCcpXG4gICAgJCgnYm9keScpLmFuaW1hdGUge3Njcm9sbFRvcDowfSwgJzUwMCdcblxuICAjINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YvQuSDQsNC00YDQtdGBXG4gIG5ld0FkZHJlc3M6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAYWRkX2FkZHJlc3MucGFyZW50KCkuYmVmb3JlIEBhZGRyZXNzX3NvdXJjZSh7J2luZGV4JyA6IEBhZGRyZXNzX2NvdW50fSlcbiAgICBAYWRkcmVzc19jb3VudCsrXG4gICAgQHN0ZXAzLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgaWYgQGFkZHJlc3NfY291bnQ+MVxuICAgICAgQHJlbW92ZV9hZGRyZXNzLnNob3coKVxuXG4gICMg0KPQtNCw0LvQuNGC0Ywg0L7QsdGA0LDQt9C+0LLQsNC90LjQtVxuICByZW1vdmVBZGRyZXNzOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQGFkZHJlc3NfY291bnQtLVxuICAgICQoJy5hZHJlc3Mtd3JhcHBlcjpsYXN0JykucmVtb3ZlKClcbiAgICBpZiBAYWRkcmVzc19jb3VudDwyXG4gICAgICBAcmVtb3ZlX2FkZHJlc3MuaGlkZSgpXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDIg0LogMyDRiNCw0LPRg1xuICBzdGVwMlN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMi5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAyLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cbiAgIyDQn9C10YDQtdGF0L7QtCDQvtGCIDIg0LogMSDRiNCw0LPRg1xuICBzdGVwMkJhY2s6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAc3RlcHMuZmluZCgnLnNlbGVjdGVkLnN0ZXA6bGFzdCcpLnJlbW92ZUNsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykucHJldigpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCR0LvQvtC60LjRgNC+0LLQsNGC0Ywg0YbQtdC90Ysg0L3QtdC00L7Qv9GD0YHRgtC40LzRi9GFINGE0L7RgNC80LDRgtC+0LIg0LfQsNC90Y/RgtC40LlcbiAgY2hlY2tGb3JtYXQ6ID0+XG4gICAgaW5wdXRzID0gQGZvcm1hdHMuZmluZCAnaW5wdXQnXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgZWxlbWVudHMgPSBAc3RlcDIuZmluZCgnaW5wdXQuJytpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UtZmllbGQnKSlcbiAgICAgIGZvciBlbGVtZW50IGluIGVsZW1lbnRzXG4gICAgICAgIHByaWNlID0gJChlbGVtZW50KS5jbG9zZXN0KCcuc3ViZGV2aXNpb24nKVxuICAgICAgICBpZiBpbnB1dC5jaGVja2VkXG4gICAgICAgICAgcHJpY2UucmVtb3ZlQ2xhc3MoJ2hpZGUnKVxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHByaWNlLmFkZENsYXNzKCdoaWRlJylcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3VpLXN0YXRlLWVycm9yJylcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINGA0LDQt9C00LXQu9GLINC/0YDQtdC00LzQtdGC0LBcbiAgc3ViamVjdFNlbGVjdGVkOiAoZXZlbnQpPT5cbiAgICBzZWxlY3QgPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICBzZWxlY3QucmVtb3ZlQ2xhc3MgJ3VuY2hhbmdlZCdcbiAgICBpZCA9IHNlbGVjdC52YWwoKVxuXG4gICAgbGluZSA9IHNlbGVjdC5wYXJlbnRzKCcubGluZScpXG4gICAgXG4gICAgc3Vic2VjdGlvbnMgPSBAZ2V0U3ViU2VjdGlvbnMoaWQpXG5cbiAgICBoYWxmX2xlbmd0aCA9IE1hdGguY2VpbChzdWJzZWN0aW9ucy5sZW5ndGggLyAyKVxuICAgIGxlZnRTaWRlID0gc3Vic2VjdGlvbnMuc3BsaWNlKDAsaGFsZl9sZW5ndGgpXG5cbiAgICBzZWN0aW9ucyA9IEBzdWJqZWN0X3NlY3Rpb25fc291cmNlKHtcbiAgICAgICdpbmRleCcgICA6IEBzZWN0aW9uX2NvdW50XG4gICAgICAnc2VjdGlvbicgOiBAZ2V0U2VjdGlvbnMoaWQpXG4gICAgICAnY29sdW1uMScgOiBsZWZ0U2lkZVxuICAgICAgJ2NvbHVtbjInIDogc3Vic2VjdGlvbnNcbiAgICAgIH0pXG5cbiAgICBAc2VjdGlvbl9jb3VudCsrXG5cbiAgICBuZXh0ID0gbGluZS5uZXh0KClcbiAgICBpZiBuZXh0Lmhhc0NsYXNzKCdzZWN0aW9uJylcbiAgICAgIG5leHQucmVwbGFjZVdpdGggc2VjdGlvbnNcbiAgICBlbHNlXG4gICAgICBsaW5lLmFmdGVyIHNlY3Rpb25zXG4gICAgXG4gICAgQHN0ZXAyLmZpbmQoJ3NlbGVjdDp2aXNpYmxlJykuY2hvc2VuXG4gICAgICBkaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQ6IDMwXG4gICAgZm9yIGVsZW1lbnQgaW4gQHN0ZXAyLmZpbmQoJy5kcm9wZG93bi1jb250YWluZXItd2lkZ2V0JylcbiAgICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcblxuXG4gIGdldFNlY3Rpb246IChpbmRleCk9PlxuICAgIHNlbGVjdCA9ICAkICcuc3Viai13cmFwcGVyIC5zZWN0aW9uOmVxKCcraW5kZXgrJykgc2VsZWN0J1xuICAgIGlmIHNlbGVjdC5sZW5ndGggPT0gMVxuICAgICAgcmV0dXJuIHNlbGVjdC52YWwoKVxuXG4gIGdldEFkZDogKGluZGV4KT0+XG4gICAgY2hrYm94cyA9ICAkICcuc3Viai13cmFwcGVyIC5zZWN0aW9uOmVxKCcraW5kZXgrJykgLnN1Yi1zZWN0aW9uIGlucHV0W25hbWU9XCJhZGRpdGlvbltdXCJdOmNoZWNrZWQnXG4gICAgdmFsdWVzID0gbmV3IEFycmF5XG4gICAgZm9yIGNoa2JveCBpbiBjaGtib3hzXG4gICAgICB2YWx1ZXMucHVzaCAkKGNoa2JveCkudmFsKClcbiAgICByZXR1cm4gdmFsdWVzXG4gICAgXG5cbiAgIyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGL0Lkg0L/RgNC10LTQvNC10YJcbiAgbmV3U3ViamVjdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBhZGRfc3ViamVjdC5wYXJlbnQoKS5iZWZvcmUgQHN1YmplY3Rfc291cmNlKHsnaW5kZXgnIDogQHN1YmpfY291bnR9KVxuICAgIEBzdWJqX2NvdW50KytcbiAgICBcbiAgICB3cmFwcGVyID0gQGFkZF9zdWJqZWN0LnBhcmVudCgpLnByZXYoKVxuICAgIHdyYXBwZXIuZmluZCgnc2VsZWN0Jykub24gJ2NoYW5nZScsIEBzdWJqZWN0U2VsZWN0ZWRcblxuICAgIEBzdGVwMi5maW5kKCdzZWxlY3Q6dmlzaWJsZScpLmNob3NlblxuICAgICAgZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkOiAzMFxuICAgIEBzdGVwMi5maW5kKCcubWluLXRpbWUnKS50ZXh0IEBkdXJhdGlvbl92YWx1ZS52YWwoKVxuICAgIEBjaGVja0Zvcm1hdCgpXG4gICAgZm9yIGVsZW1lbnQgaW4gQHN0ZXAyLmZpbmQoJy5kcm9wZG93bi1jb250YWluZXItd2lkZ2V0JylcbiAgICAgIG5ldyBEcm9wZG93bldpZGdldENvbnRyb2xsZXIoJChlbGVtZW50KSlcbiAgICBcbiAgICBpZiBAc3Vial9jb3VudD4xXG4gICAgICBAcmVtb3ZlX3N1YmplY3Quc2hvdygpXG5cbiAgIyDQo9C00LDQu9C40YLRjCDQv9GA0LXQtNC80LXRglxuICByZW1vdmVTdWJqZWN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHN1YmpfY291bnQtLVxuICAgICQoJy5zdWJqLXdyYXBwZXI6bGFzdCcpLnJlbW92ZSgpXG4gICAgaWYgQHN1YmpfY291bnQ8MlxuICAgICAgQHJlbW92ZV9zdWJqZWN0LmhpZGUoKVxuXG4gICMg0J/RgNC+0LLQtdGA0LrQsCDQv9C+0LvQtdC5INCx0LvQvtC60L7QsiDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMXG4gIHZhbGlkYXRlOiAoaW5wdXQpPT5cblxuICAgIGlmIGlucHV0Lmhhc0F0dHJpYnV0ZSAnZGF0YS1oNS1lcnJvcmlkJ1xuICAgICAgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaDUtZXJyb3JpZCcpXG5cbiAgICBpZiBpbnB1dC5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcbiAgICAgIGlmIGlucHV0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMFxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkICd1aS1zdGF0ZS1lcnJvcidcblxuICAgIGlmIGlucHV0LmNsYXNzTGlzdC5jb250YWlucyAndWktc3RhdGUtZXJyb3InXG4gICAgICBpZiBlcnJvclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgZWxzZVxuICAgICAgaWYgZXJyb3JcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgcmV0dXJuIHRydWVcblxuICAjINCf0LXRgNC10YXQvtC0INC60L4g0LLRgtC+0YDQvtC80YMg0YjQsNCz0YMg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxuICBzdGVwMVN1Ym1pdDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlucHV0cyA9IEBzdGVwMS5maW5kKCc6aW5wdXQnKVxuICAgIGZvciBpbnB1dCBpbiBpbnB1dHNcbiAgICAgIGlmICFAdmFsaWRhdGUoaW5wdXQpXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgQHN0ZXAxLmZpbmQoJy51aS1zdGF0ZS1lcnJvcicpLmxlbmd0aD4wXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIEBzdGVwcy5maW5kKCcuc2VsZWN0ZWQuc3RlcDpsYXN0JykubmV4dCgpLmFkZENsYXNzICdzZWxlY3RlZCdcbiAgICBAY3VycmVudCA9IEBjdXJyZW50LnJlbW92ZUNsYXNzKCdjdXJyZW50JykubmV4dCgpXG4gICAgQGN1cnJlbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKVxuICAgICQoJ2JvZHknKS5hbmltYXRlIHtzY3JvbGxUb3A6MH0sICc1MDAnXG5cblxuICAjINCo0LDQsyAxXG4gICMg0JDQstCw0YLQsNGAXG4gIGRyb3BlZDogKGV2ZW50KS0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEZpbGVBUEkuZ2V0RHJvcEZpbGVzIGV2ZW50LCAoZmlsZXMpLT5cblxuICAjINC/0L7QtNCy0LXQu9C4INC60YPRgNGB0L7RgCDQuiDQsdC70L7QutGDINC00YDQvtC/0LAg0LDQstCw0YLQsNGA0LrQuFxuICBvdmVyOiAob3ZlciktPlxuXG4gICMg0LHRgNC+0YHQuNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBkcm9wOiAoZmlsZXMpPT5cbiAgICBjb25zb2xlLmxvZyAgZmlsZXNcbiAgICBpZiBmaWxlcy5sZW5ndGhcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIFxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCk9PlxuICAgICAgICBAYXZhdGFyVGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgIGF2YXRhciA9IGRvY3VtZW50LmltcG9ydE5vZGUgQGF2YXRhclRlbXBsYXRlLmNvbnRlbnQsIHRydWVcbiAgICAgICAgcHJldiA9IEBmaWxlU2VsZWN0b3IucHJldigpXG4gICAgICAgIGlmIHByZXYuaGFzQ2xhc3MoJ2N1cnJlbnQtYXZhdGFyJylcbiAgICAgICAgICBwcmV2LnJlbW92ZSgpXG4gICAgICAgIEBmaWxlU2VsZWN0b3IuYmVmb3JlIGF2YXRhclxuICAgICAgICBAZmlsZVNlbGVjdG9yLnByZXYoKS5maW5kKCcuY2xvc2UnKS5vbiAnY2xpY2snLCBAcmVtb3ZlQXZhdGFyXG4gICAgICBcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMIGZpbGVzWzBdXG5cbiAgIyDQo9C00LDQu9C40LvQuCDQsNCy0LDRgtGA0LDQutGDXG4gIHJlbW92ZUF2YXRhcjogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgQGZpbGUucmVwbGFjZVdpdGggQGZpbGUudmFsKCcnKS5jbG9uZSh0cnVlKVxuICAgIEBmaWxlID0gQHN0ZXAxLmZpbmQgJyNyZWdpc3RyYXRpb24tYXZhdGFyJ1xuXG4gICMg0JLRi9Cx0YDQsNC70Lgg0LDQstCw0YLQsNGA0LrRg1xuICBhdmF0YXJTZWxlY3RlZDogKGV2ZW50KT0+XG4gICAgZmlsZXMgPSBGaWxlQVBJLmdldEZpbGVzKGV2ZW50KVxuXG4gICAgZXh0ID0gZmlsZXNbMF1bJ25hbWUnXS5zdWJzdHJpbmcoZmlsZXNbMF1bJ25hbWUnXS5sYXN0SW5kZXhPZignLicpICsgMSkudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKGZpbGVzWzBdICYmIChmaWxlc1swXS5zaXplIDw9IEZpbGVBUEkuTUIpICYmIChleHQgPT0gXCJnaWZcIiB8fCBleHQgPT0gXCJwbmdcIiB8fCBleHQgPT0gXCJqcGVnXCIgfHwgZXh0ID09IFwianBnXCIpKVxuICAgICAgICBcbiAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpPT5cbiAgICAgICAgXG4gICAgICAgIEBhdmF0YXJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgICAgYXZhdGFyID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSBAYXZhdGFyVGVtcGxhdGUuY29udGVudCwgdHJ1ZVxuICAgICAgICBwcmV2ID0gQGZpbGVTZWxlY3Rvci5wcmV2KClcbiAgICAgICAgaWYgcHJldi5oYXNDbGFzcygnY3VycmVudC1hdmF0YXInKVxuICAgICAgICAgIHByZXYucmVtb3ZlKClcbiAgICAgICAgQGZpbGVTZWxlY3Rvci5iZWZvcmUgYXZhdGFyXG4gICAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLmZpbmQoJy5jbG9zZScpLm9uICdjbGljaycsIEByZW1vdmVBdmF0YXJcblxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZXNbMF1cblxuICAgIGVsc2VcbiAgICAgIEBmaWxlU2VsZWN0b3IucHJldigpLnJlbW92ZSgpXG4gICAgICBAZmlsZS5yZXBsYWNlV2l0aCBAZmlsZS52YWwoJycpLmNsb25lKHRydWUpXG4gICAgICBAZmlsZSA9IEBzdGVwMS5maW5kICcjcmVnaXN0cmF0aW9uLWF2YXRhcidcblxuICAjINCf0YDQvtCy0LXRgNGP0LXQvCDQvNC+0LbQtdGCINC70Lgg0YHRg9GJ0LXRgdGC0LLQvtCy0LDRgtGMINGD0LrQsNC30LDQvdC90LDRjyDQtNCw0YLQsCwg0L3QsNC/0YDQuNC80LXRgCAzMSDRhNC10LLRgNCw0LvRjyDQuCDQuNGB0L/RgNCw0LLQu9GP0LXQvCDQsiDRgdC70YPRh9Cw0LUg0L7RiNC40LHQutC4XG4gIGNoZWNrRGF0ZTogKGV2ZW50KT0+XG4gICAgZGF5ID0gcGFyc2VJbnQgQGRheS52YWwoKS50cmltKCksIDEwXG4gICAgXG4gICAgaWYgZGF5PDEgfHwgaXNOYU4oZGF5KVxuICAgICAgQGRheS52YWwgMVxuICAgICAgcmV0dXJuXG5cbiAgICBkYXlzID0gcGFyc2VJbnQgbW9tZW50KEB5ZWFyLnZhbCgpK1wiLVwiKyhwYXJzZUludChAbW9udGgudmFsKCksMTApKzEpLCBcIllZWVktTU1cIikuZGF5c0luTW9udGgoKSwgMTBcbiAgICBpZiBkYXk+ZGF5c1xuICAgICAgQGRheS52YWwgZGF5c1xuICAgIHJldHVyblxuXG4gICAgaWYgZGF5PjMxXG4gICAgICBAZGF5LnZhbCAzMVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUGVyc29uYWxEYXRhQWxsKClcblxuXG4iXX0=