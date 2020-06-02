/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Matheus Fernando Leitao Student ID: 148 300 171 Date: 05/31/2019
 *
 *
 ********************************************************************************/

// Import jQuery, which will also expose $ on the global `window` Object.
import $ from './jquery-es';
// After jQuery is loaded, we can load the Bootstrap JS, which depends on jQuery.
import 'bootstrap';

// Place your imports for Moment.js and Lodash here...
import moment from 'moment';

import _ from 'lodash';

let employeesModel = [];

function initializeEmployeesModel() {
  $.ajax({
    url: 'https://floating-everglades-82678.herokuapp.com/employees',
    type: 'GET',
    contentType: 'application/json'
  })
    .done(function(data) {
      employeesModel = data;
      refreshEmployeeRows(employeesModel);
    })
    .fail(function(err) {
      showGenericModal('Error', 'Unable to get Employees');
    });
}

function showGenericModal(title, message) {
  $('.modal-title').html(title);
  $('.modal-body').html(message);
  $('#genericModal').modal({});
}

function refreshEmployeeRows(employees) {
  $('#employees-table').empty();
  let rowsTemplate = _.template(
    '<% _.forEach(employees, function(employee) { %>' +
      '<div class="row body-row" data-id=<%- employee._id %>>' +
      '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
      '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
      '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
      '</div>' +
      '<% }); %>'
  );

  let rows = rowsTemplate({ employees: employees });
  $('#employees-table').html(rows);
}

function getFilteredEmployeesModel(filterString) {
  return _.filter(employeesModel, function(employee) {
    if (
      employee.FirstName.toLowerCase().includes(filterString.toLowerCase()) ||
      employee.LastName.toLowerCase().includes(filterString.toLowerCase()) ||
      employee.Position.PositionName.toLowerCase().includes(filterString.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
}

function getEmployeeModelById(id) {
  let retVal = null;
  for (let i = 0; i < employeesModel.length; i++) {
    if (employeesModel[i]._id == id) retVal = _.cloneDeep(employeesModel[i]);
  }
  return retVal;
}

$(function() {
  initializeEmployeesModel();

  $('#employee-search').on('keyup', function(e) {
    let emp = getFilteredEmployeesModel($(this).val());
    refreshEmployeeRows(emp);
  });

  $(document).on('click', '.body-row', function(e) {
    let employee = getEmployeeModelById($(this).attr('data-id'));
    if (employee != null) {
      employee.HireDate = moment(employee.HireDate).format('LL');
      let modalContentTemplate = _.template(
        '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %>. <%- employee.AddressZip %></br>' +
          '<strong>Phone Number:</strong> <%- employee.PhoneNum %> ext: <%- employee.Extension %></br>' +
          '<strong>Hire Date:</strong> <%- employee.HireDate %>'
      );
      let modalContent = modalContentTemplate({ employee: employee });
      showGenericModal(employee.FirstName + ' ' + employee.LastName, modalContent);
    }
  });

  $('#teams-menu').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://floating-everglades-82678.herokuapp.com/teams',
      type: 'GET',
      contentType: 'application/json'
    }).done(function(data) {
      $('#data')
        .empty()
        .html('<h3>Teams</h3>')
        .append(JSON.stringify(data));
    });
  });

  $('#employees-menu').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://floating-everglades-82678.herokuapp.com/employees',
      type: 'GET',
      contentType: 'application/json'
    }).done(function(data) {
      $('#data')
        .empty()
        .html('<h3>Employees</h3>')
        .append(JSON.stringify(data));
    });
  });

  $('#projects-menu').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://floating-everglades-82678.herokuapp.com/projects',
      type: 'GET',
      contentType: 'application/json'
    }).done(function(data) {
      $('#data')
        .empty()
        .html('<h3>Projects</h3>')
        .append(JSON.stringify(data));
    });
  });

  $('#positions-menu').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://floating-everglades-82678.herokuapp.com/positions',
      type: 'GET',
      contentType: 'application/json'
    }).done(function(data) {
      $('#data')
        .empty()
        .html('<h3>Positions</h3>')
        .append(JSON.stringify(data));
    });
  });
});
