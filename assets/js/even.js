'use strict';

const Even = {};

Even.responsiveTable = function() {
    const tables = document.querySelectorAll('.post-content table:not(.lntable)');
    for (let i = 0; i < tables.length; i++) {
      const table = tables[i];
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      table.parentElement.replaceChild(wrapper, table);
      wrapper.appendChild(table);
    }
  };
  