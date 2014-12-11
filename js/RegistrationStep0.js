var RegistrationStep0,
  __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

RegistrationStep0 = (function() {
  function RegistrationStep0() {
    this.backToForm = __bind(this.backToForm, this);
    this.formSubmited = __bind(this.formSubmited, this);
    this.formSubmit = __bind(this.formSubmit, this);
    this.smsSubmit = __bind(this.smsSubmit, this);
    this.validate = __bind(this.validate, this);
    this.selectRegion = __bind(this.selectRegion, this);
    this.hideRegionsList = __bind(this.hideRegionsList, this);
    this.showRegionsList = __bind(this.showRegionsList, this);
    this.hideRegistrationPopup = __bind(this.hideRegistrationPopup, this);
    this.showRegistrationPopup = __bind(this.showRegistrationPopup, this);
    this.filterCity = __bind(this.filterCity, this);
    var inputs, region_controls, vh;
    this.itype = 'click';
    if ($('html').hasClass('touch')) {
      this.itype = 'touchstart';
    }
    this.widget = $('.registration-step-0');
    if (this.widget.length !== 1) {
      throw {
        error: 'не найден виджет'
      };
    }
    $('.h5-phone').mask("+7 (999) 999-99-99");
    this.form_registration = this.widget.find('.registration');
    this.form_sms = this.widget.find('.sms');
    this.form_sms_title = this.form_sms.find('>.title');
    this.submit = this.form_registration.find('button');
    inputs = this.widget.find('input');
    inputs.on('keyup', this.inputChange);
    inputs.on('blur', this.inputChange);
    inputs.on('change', this.inputChange);
    this.form_sms_title.on('click', this.backToForm);
    this.regions_input = $('#reg-region');
    this.regions_list = this.widget.find('.regions-list');
    this.regions_list_item = this.regions_list.find('.item');
    this.regions_list_search = this.regions_list.find('input');
    this.regions_list_close = this.regions_list.find('.regions-list-close');
    this.regions_list_search.on('keyup', this.filterCity);
    this.regions_list_search.on('change', this.filterCity);
    this.regions_list_close.on(this.itype, this.hideRegionsList);
    $('body').on('click', '.regions-list .regions a', this.selectRegion);
    region_controls = this.widget.find('[for="reg-region"], .change-region');
    region_controls.on(this.itype + ' focus', this.showRegionsList);
    this.regions_input.on(this.itype + ' focus', this.showRegionsList);
    this.form_registration.h5Validate();
    this.submit.on('click', this.formSubmit);
    this.form_sms.h5Validate();
    this.form_sms.find('button[type="submit"]').on('click', this.smsSubmit);
    $('a.register').on(this.itype, this.showRegistrationPopup);
    this.widget.find('.registration-step-0-close').on(this.itype, this.hideRegistrationPopup);
    if ($('html').hasClass('no-cssvhunit')) {
      vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      this.widget.css({
        'height': vh,
        'line-height': vh
      });
      if (!Modernizr.mq("screen and (max-width:600px)")) {
        this.regions_list.css({
          'max-height': 0.8 * vh
        });
      }
    }
  }

  RegistrationStep0.prototype.filterCity = function(event) {
    var keyword;
    this.regions_list_item.show();
    keyword = this.regions_list_search.val().trim();
    if (keyword.length === 0) {
      return;
    }
    return this.regions_list.find('.item:not(:contains("' + keyword + '"))').hide();
  };

  RegistrationStep0.prototype.showRegistrationPopup = function(event) {
    event.preventDefault();
    this.widget.stop().fadeIn();
    return this.widget.addClass('open');
  };

  RegistrationStep0.prototype.hideRegistrationPopup = function(event) {
    event.preventDefault();
    this.widget.stop().fadeOut();
    this.form_registration[0].reset();
    this.form_sms[0].reset();
    this.regions_input.removeClass('changed');
    this.regions_list_search.val('');
    return this.widget.removeClass('open');
  };

  RegistrationStep0.prototype.showRegionsList = function(event) {
    event.preventDefault();
    this.regions_list.show();
    this.regions_list_item.show();
    return this.regions_list_search[0].focus();
  };

  RegistrationStep0.prototype.hideRegionsList = function(event) {
    event.preventDefault();
    this.regions_list.hide();
    this.submit.focus();
    this.regions_list_search.val('');
    return this.regions_list_item.show();
  };

  RegistrationStep0.prototype.selectRegion = function(event) {
    event.preventDefault();
    this.regions_input.val(event.currentTarget.getAttribute('data-title'));
    this.regions_input.blur();
    this.regions_list.hide();
    this.submit.focus();
    this.regions_list_search.val('');
    return this.regions_list_item.show();
  };

  RegistrationStep0.prototype.inputChange = function(event) {
    var input, value;
    input = $(event.currentTarget);
    value = input.val().trim();
    if (value.length === 0 || value === '+7 (___) ___-__-__') {
      return input.toggleClass('changed', false);
    } else {
      return input.toggleClass('changed', true);
    }
  };

  RegistrationStep0.prototype.validate = function(input) {
    var error;
    if (input.hasAttribute('required')) {
      if (input.value.trim().length === 0) {
        input.classList.add('ui-state-error');
      }
    }
    if (input.classList.contains('ui-state-error')) {
      if (input.hasAttribute('data-h5-errorid')) {
        error = document.getElementById(input.getAttribute('data-h5-errorid'));
        error.style.display = 'block';
      }
      return false;
    }
    return true;
  };

  RegistrationStep0.prototype.smsSubmit = function(event) {
    var input, inputs, _i, _len;
    inputs = this.form_sms.find(':input');
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      if (!this.validate(input)) {
        return false;
      }
    }
    if (this.form_sms.find('.ui-state-error').length > 0) {
      return;
    }
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: this.form_sms.attr('data-action'),
      data: this.form_sms.find(":input").serialize(),
      success: this.formSubmited,
      fail: this.formSubmited,
      complete: this.formSubmited,
      dataType: 'json'
    });
    return this.form_sms.find('input, select, textarea').val('');
  };

  RegistrationStep0.prototype.formSubmit = function(event) {
    var input, inputs, _i, _len;
    inputs = this.form_registration.find('input, select, textarea');
    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
      input = inputs[_i];
      if (!this.validate(input)) {
        return false;
      }
    }
    if (this.form_registration.find('.ui-state-error').length > 0) {
      return;
    }
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: this.form_registration.attr('data-action'),
      data: this.form_registration.find(":input").serialize(),
      success: this.formSubmited,
      fail: this.formSubmited,
      complete: this.formSubmited,
      dataType: 'json'
    });
    this.regions_input.removeClass('changed').removeClass('ui-state-error');
    return this.form_registration.find('input, select, textarea').val('');
  };

  RegistrationStep0.prototype.formSubmited = function(data) {
    this.form_registration.find('input').each(function(index, element) {
      return $(element).removeClass('changed').removeClass('ui-state-error');
    });
    this.form_registration.fadeOut();
    return this.form_sms.fadeIn();
  };

  RegistrationStep0.prototype.backToForm = function(event) {
    this.form_registration.fadeIn();
    return this.form_sms.fadeOut();
  };

  return RegistrationStep0;

})();

$(document).ready(function() {
  return new RegistrationStep0();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlZ2lzdHJhdGlvblN0ZXAwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLGlCQUFBO0VBQUEsa0ZBQUE7O0FBQUE7QUFDZSxFQUFBLDJCQUFBLEdBQUE7QUFFWCxtREFBQSxDQUFBO0FBQUEsdURBQUEsQ0FBQTtBQUFBLG1EQUFBLENBQUE7QUFBQSxpREFBQSxDQUFBO0FBQUEsK0NBQUEsQ0FBQTtBQUFBLHVEQUFBLENBQUE7QUFBQSw2REFBQSxDQUFBO0FBQUEsNkRBQUEsQ0FBQTtBQUFBLHlFQUFBLENBQUE7QUFBQSx5RUFBQSxDQUFBO0FBQUEsbURBQUEsQ0FBQTtBQUFBLFFBQUEsMkJBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsT0FBVCxDQUFBO0FBQ0EsSUFBQSxJQUFHLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLE9BQW5CLENBQUg7QUFDRSxNQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsWUFBVCxDQURGO0tBREE7QUFBQSxJQUlBLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBQSxDQUFFLHNCQUFGLENBSlYsQ0FBQTtBQU1BLElBQUEsSUFBRyxJQUFDLENBQUEsTUFBTSxDQUFDLE1BQVIsS0FBa0IsQ0FBckI7QUFDRSxZQUFNO0FBQUEsUUFBQyxLQUFBLEVBQU8sa0JBQVI7T0FBTixDQURGO0tBTkE7QUFBQSxJQVNBLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxJQUFmLENBQW9CLG9CQUFwQixDQVRBLENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxpQkFBRCxHQUFxQixJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxlQUFiLENBWHJCLENBQUE7QUFBQSxJQVlBLElBQUMsQ0FBQSxRQUFELEdBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsTUFBYixDQVpaLENBQUE7QUFBQSxJQWFBLElBQUMsQ0FBQSxjQUFELEdBQWtCLElBQUMsQ0FBQSxRQUFRLENBQUMsSUFBVixD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Q0FBc0MsU0FBQyxLQUFELEVBQVEsT0FBUixHQUFBO2FBQ3BDLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxXQUFYLENBQXVCLFNBQXZCLENBQWlDLENBQUMsV0FBbEMsQ0FBOEMsZ0JBQTlDLEVBRG9DO0lBQUEsQ0FBdEMsQ0FBQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsaUJBQWlCLENBQUMsT0FBbkIsQ0FBQSxDQUZBLENBQUE7V0FHQSxJQUFDLENBQUEsUUFBUSxDQUFDLE1BQVYsQ0FBQSxFQUpZO0VBQUEsQ0E5S2QsQ0FBQTs7QUFBQSw4QkFvTEEsVUFBQSxHQUFZLFNBQUMsS0FBRCxHQUFBO0FBQ1YsSUFBQSxJQUFDLENBQUEsaUJBQWlCLENBQUMsTUFBbkIsQ0FBQSxDQUFBLENBQUE7V0FDQSxJQUFDLENBQUEsUUFBUSxDQUFDLE9BQVYsQ0FBQSxFQUZVO0VBQUEsQ0FwTFosQ0FBQTs7MkJBQUE7O0lBREYsQ0FBQTs7QUFBQSxDQXlMQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO1NBQ1osSUFBQSxpQkFBQSxDQUFBLEVBRFk7QUFBQSxDQUFsQixDQXpMQSxDQUFBIiwiZmlsZSI6IlJlZ2lzdHJhdGlvblN0ZXAwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVnaXN0cmF0aW9uU3RlcDBcbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgICBAaXR5cGUgPSAnY2xpY2snXG4gICAgaWYgJCgnaHRtbCcpLmhhc0NsYXNzKCd0b3VjaCcpXG4gICAgICBAaXR5cGUgPSAndG91Y2hzdGFydCdcblxuICAgIEB3aWRnZXQgPSAkICcucmVnaXN0cmF0aW9uLXN0ZXAtMCdcblxuICAgIGlmIEB3aWRnZXQubGVuZ3RoICE9IDFcbiAgICAgIHRocm93IHtlcnJvcjogJ9C90LUg0L3QsNC50LTQtdC9INCy0LjQtNC20LXRgid9XG5cbiAgICAkKCcuaDUtcGhvbmUnKS5tYXNrIFwiKzcgKDk5OSkgOTk5LTk5LTk5XCJcblxuICAgIEBmb3JtX3JlZ2lzdHJhdGlvbiA9IEB3aWRnZXQuZmluZCAnLnJlZ2lzdHJhdGlvbidcbiAgICBAZm9ybV9zbXMgPSBAd2lkZ2V0LmZpbmQgJy5zbXMnXG4gICAgQGZvcm1fc21zX3RpdGxlID0gQGZvcm1fc21zLmZpbmQgJz4udGl0bGUnXG4gICAgQHN1Ym1pdCA9IEBmb3JtX3JlZ2lzdHJhdGlvbi5maW5kICdidXR0b24nXG4gICAgaW5wdXRzID0gQHdpZGdldC5maW5kICdpbnB1dCdcbiAgICBpbnB1dHMub24gJ2tleXVwJywgQGlucHV0Q2hhbmdlXG4gICAgaW5wdXRzLm9uICdibHVyJywgQGlucHV0Q2hhbmdlXG4gICAgaW5wdXRzLm9uICdjaGFuZ2UnLCBAaW5wdXRDaGFuZ2VcbiAgICBAZm9ybV9zbXNfdGl0bGUub24gJ2NsaWNrJywgQGJhY2tUb0Zvcm1cblxuICAgIEByZWdpb25zX2lucHV0ID0gJCAnI3JlZy1yZWdpb24nXG4gICAgQHJlZ2lvbnNfbGlzdCA9IEB3aWRnZXQuZmluZCAnLnJlZ2lvbnMtbGlzdCdcbiAgICBAcmVnaW9uc19saXN0X2l0ZW0gPSBAcmVnaW9uc19saXN0LmZpbmQgJy5pdGVtJ1xuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoID0gQHJlZ2lvbnNfbGlzdC5maW5kICdpbnB1dCdcbiAgICBAcmVnaW9uc19saXN0X2Nsb3NlID0gQHJlZ2lvbnNfbGlzdC5maW5kICcucmVnaW9ucy1saXN0LWNsb3NlJ1xuXG4gICAgQHJlZ2lvbnNfbGlzdF9zZWFyY2gub24gJ2tleXVwJywgQGZpbHRlckNpdHlcbiAgICBAcmVnaW9uc19saXN0X3NlYXJjaC5vbiAnY2hhbmdlJywgQGZpbHRlckNpdHlcbiAgICBAcmVnaW9uc19saXN0X2Nsb3NlLm9uIEBpdHlwZSwgQGhpZGVSZWdpb25zTGlzdFxuXG4gICAgJCgnYm9keScpLm9uICdjbGljaycsICcucmVnaW9ucy1saXN0IC5yZWdpb25zIGEnLCBAc2VsZWN0UmVnaW9uXG5cbiAgICByZWdpb25fY29udHJvbHMgPSBAd2lkZ2V0LmZpbmQgJ1tmb3I9XCJyZWctcmVnaW9uXCJdLCAuY2hhbmdlLXJlZ2lvbidcbiAgICByZWdpb25fY29udHJvbHMub24gQGl0eXBlKycgZm9jdXMnLCBAc2hvd1JlZ2lvbnNMaXN0XG4gICAgQHJlZ2lvbnNfaW5wdXQub24gQGl0eXBlKycgZm9jdXMnLCBAc2hvd1JlZ2lvbnNMaXN0XG5cbiAgICBAZm9ybV9yZWdpc3RyYXRpb24uaDVWYWxpZGF0ZSgpXG4gICAgIyBAZm9ybV9yZWdpc3RyYXRpb24ub24gJ3N1Ym1pdCcsIEBmb3JtU3VibWl0XG5cbiAgICBAc3VibWl0Lm9uICdjbGljaycsIEBmb3JtU3VibWl0XG5cbiAgICBAZm9ybV9zbXMuaDVWYWxpZGF0ZSgpXG4gICAgQGZvcm1fc21zLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykub24gJ2NsaWNrJywgQHNtc1N1Ym1pdFxuXG4gICAgJCgnYS5yZWdpc3RlcicpLm9uIEBpdHlwZSwgQHNob3dSZWdpc3RyYXRpb25Qb3B1cFxuXG4gICAgQHdpZGdldC5maW5kKCcucmVnaXN0cmF0aW9uLXN0ZXAtMC1jbG9zZScpLm9uIEBpdHlwZSxcbiAgICAgIEBoaWRlUmVnaXN0cmF0aW9uUG9wdXBcblxuICAgIGlmICQoJ2h0bWwnKS5oYXNDbGFzcyAnbm8tY3Nzdmh1bml0J1xuICAgICAgdmggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMClcbiAgICAgIEB3aWRnZXQuY3NzXG4gICAgICAgICdoZWlnaHQnOiB2aFxuICAgICAgICAnbGluZS1oZWlnaHQnOiB2aFxuICAgICAgaWYgIU1vZGVybml6ci5tcShcInNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweClcIilcbiAgICAgICAgQHJlZ2lvbnNfbGlzdC5jc3NcbiAgICAgICAgICAnbWF4LWhlaWdodCc6IDAuOCp2aFxuXG4gIGZpbHRlckNpdHk6IChldmVudCk9PlxuICAgIEByZWdpb25zX2xpc3RfaXRlbS5zaG93KClcbiAgICBrZXl3b3JkID0gQHJlZ2lvbnNfbGlzdF9zZWFyY2gudmFsKCkudHJpbSgpXG4gICAgaWYga2V5d29yZC5sZW5ndGg9PTBcbiAgICAgIHJldHVyblxuICAgIEByZWdpb25zX2xpc3QuZmluZCgnLml0ZW06bm90KDpjb250YWlucyhcIicra2V5d29yZCsnXCIpKScpLmhpZGUoKVxuXG4gIHNob3dSZWdpc3RyYXRpb25Qb3B1cDogKGV2ZW50KT0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIEB3aWRnZXQuc3RvcCgpLmZhZGVJbigpXG4gICAgQHdpZGdldC5hZGRDbGFzcyAnb3BlbidcblxuICBoaWRlUmVnaXN0cmF0aW9uUG9wdXA6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAd2lkZ2V0LnN0b3AoKS5mYWRlT3V0KClcbiAgICBAZm9ybV9yZWdpc3RyYXRpb25bMF0ucmVzZXQoKVxuICAgIEBmb3JtX3Ntc1swXS5yZXNldCgpXG4gICAgQHJlZ2lvbnNfaW5wdXQucmVtb3ZlQ2xhc3MgJ2NoYW5nZWQnXG4gICAgQHJlZ2lvbnNfbGlzdF9zZWFyY2gudmFsICcnXG4gICAgQHdpZGdldC5yZW1vdmVDbGFzcyAnb3BlbidcblxuICBzaG93UmVnaW9uc0xpc3Q6IChldmVudCk9PlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBAcmVnaW9uc19saXN0LnNob3coKVxuICAgIEByZWdpb25zX2xpc3RfaXRlbS5zaG93KClcbiAgICBAcmVnaW9uc19saXN0X3NlYXJjaFswXS5mb2N1cygpXG5cbiAgaGlkZVJlZ2lvbnNMaXN0OiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHJlZ2lvbnNfbGlzdC5oaWRlKClcbiAgICBAc3VibWl0LmZvY3VzKClcbiAgICBAcmVnaW9uc19saXN0X3NlYXJjaC52YWwgJydcbiAgICBAcmVnaW9uc19saXN0X2l0ZW0uc2hvdygpXG5cbiAgc2VsZWN0UmVnaW9uOiAoZXZlbnQpPT5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgQHJlZ2lvbnNfaW5wdXQudmFsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJylcbiAgICBAcmVnaW9uc19pbnB1dC5ibHVyKClcbiAgICBAcmVnaW9uc19saXN0LmhpZGUoKVxuICAgIEBzdWJtaXQuZm9jdXMoKVxuICAgIEByZWdpb25zX2xpc3Rfc2VhcmNoLnZhbCAnJ1xuICAgIEByZWdpb25zX2xpc3RfaXRlbS5zaG93KClcblxuICBpbnB1dENoYW5nZTogKGV2ZW50KS0+XG4gICAgaW5wdXQgPSAkIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICB2YWx1ZSA9IGlucHV0LnZhbCgpLnRyaW0oKVxuICAgIGlmIHZhbHVlLmxlbmd0aCA9PSAwIHx8IHZhbHVlID09ICcrNyAoX19fKSBfX18tX18tX18nXG4gICAgICBpbnB1dC50b2dnbGVDbGFzcyAnY2hhbmdlZCcsIGZhbHNlXG4gICAgZWxzZVxuICAgICAgaW5wdXQudG9nZ2xlQ2xhc3MgJ2NoYW5nZWQnLCB0cnVlXG5cbiAgdmFsaWRhdGU6IChpbnB1dCk9PlxuXG4gICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpXG4gICAgICBpZiBpbnB1dC52YWx1ZS50cmltKCkubGVuZ3RoID09IDBcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCAndWktc3RhdGUtZXJyb3InXG5cbiAgICBpZiBpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMgJ3VpLXN0YXRlLWVycm9yJ1xuICAgICAgaWYgaW5wdXQuaGFzQXR0cmlidXRlICdkYXRhLWg1LWVycm9yaWQnXG4gICAgICAgIGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgaW5wdXQuZ2V0QXR0cmlidXRlKCdkYXRhLWg1LWVycm9yaWQnKVxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIHNtc1N1Ym1pdDogKGV2ZW50KT0+XG4gICAgaW5wdXRzID0gQGZvcm1fc21zLmZpbmQoJzppbnB1dCcpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAZm9ybV9zbXMuZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVyblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICQuYWpheFxuICAgICAgdHlwZTogXCJQT1NUXCJcbiAgICAgIHVybDogQGZvcm1fc21zLmF0dHIoJ2RhdGEtYWN0aW9uJylcbiAgICAgIGRhdGE6IEBmb3JtX3Ntcy5maW5kKFwiOmlucHV0XCIpLnNlcmlhbGl6ZSgpXG4gICAgICBzdWNjZXNzOiBAZm9ybVN1Ym1pdGVkXG4gICAgICBmYWlsOiBAZm9ybVN1Ym1pdGVkXG4gICAgICBjb21wbGV0ZTogQGZvcm1TdWJtaXRlZFxuICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuXG4gICAgQGZvcm1fc21zLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykudmFsKCcnKVxuXG5cblxuICBmb3JtU3VibWl0OiAoZXZlbnQpPT5cblxuICAgIGlucHV0cyA9IEBmb3JtX3JlZ2lzdHJhdGlvbi5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXG4gICAgZm9yIGlucHV0IGluIGlucHV0c1xuICAgICAgaWYgIUB2YWxpZGF0ZShpbnB1dClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiBAZm9ybV9yZWdpc3RyYXRpb24uZmluZCgnLnVpLXN0YXRlLWVycm9yJykubGVuZ3RoPjBcbiAgICAgIHJldHVyblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICQuYWpheFxuICAgICAgdHlwZTogXCJQT1NUXCJcbiAgICAgIHVybDogQGZvcm1fcmVnaXN0cmF0aW9uLmF0dHIoJ2RhdGEtYWN0aW9uJylcbiAgICAgIGRhdGE6IEBmb3JtX3JlZ2lzdHJhdGlvbi5maW5kKFwiOmlucHV0XCIpLnNlcmlhbGl6ZSgpXG4gICAgICBzdWNjZXNzOiBAZm9ybVN1Ym1pdGVkXG4gICAgICBmYWlsOiBAZm9ybVN1Ym1pdGVkXG4gICAgICBjb21wbGV0ZTogQGZvcm1TdWJtaXRlZFxuICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgIEByZWdpb25zX2lucHV0LnJlbW92ZUNsYXNzKCdjaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWVycm9yJylcblxuICAgICMgQGZvcm1fcmVnaXN0cmF0aW9uWzBdLnJlc2V0KClcbiAgICBAZm9ybV9yZWdpc3RyYXRpb24uZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKS52YWwoJycpXG5cbiAgZm9ybVN1Ym1pdGVkOiAoZGF0YSk9PlxuICAgIEBmb3JtX3JlZ2lzdHJhdGlvbi5maW5kKCdpbnB1dCcpLmVhY2ggKGluZGV4LCBlbGVtZW50KS0+XG4gICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdjaGFuZ2VkJykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWVycm9yJylcbiAgICBAZm9ybV9yZWdpc3RyYXRpb24uZmFkZU91dCgpXG4gICAgQGZvcm1fc21zLmZhZGVJbigpXG5cbiAgYmFja1RvRm9ybTogKGV2ZW50KT0+XG4gICAgQGZvcm1fcmVnaXN0cmF0aW9uLmZhZGVJbigpXG4gICAgQGZvcm1fc21zLmZhZGVPdXQoKVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBuZXcgUmVnaXN0cmF0aW9uU3RlcDAoKSJdfQ==