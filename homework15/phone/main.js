'use strict';

let phoneApp = {
  objUser: [{
    name: 'Sveta',
    lastName: 'Golovko',
    email: 'user@user.com'
  }, {
    name: 'Peter',
    lastName: 'Lem',
    email: 'user@user.com'
  }, {
    name: 'Ian',
    lastName: 'Jonson',
    email: 'user@user.com'
  }],
  tableHead: ['Name', 'Last Name', 'Email'],

  createTag(tag) {
    return document.createElement(tag);
  },

  createTh(arr) {
    const tr = this.createTag('tr');

    arr.forEach(elem => {
      const th = this.createTag('th');

      th.textContent = elem;
      tr.appendChild(th);
    });

    return tr;
  },

  createThead() {

    const thead = this.createTag('thead');
    const tr = this.createTh(this.tableHead);
    thead.appendChild(tr);

    return thead;
  },

  createTbody() {
    const tbody = this.createTag('tbody');
    this.objUser.forEach(elem => {
      const tr = this.createTh(Object.values(elem));
      tbody.appendChild(tr);
    });

    return tbody;
  },

  render() {

    const body = document.body;
    const main = this.createTag('main');
    const div = this.createTag('div');
    const table = this.createTag('table');
    const thead = this.createThead();
    const tbody = this.createTbody();

    div.className = 'container';
    table.className = 'table table-hover contacts';

    table.appendChild(thead);
    table.appendChild(tbody);
    div.appendChild(table);
    main.appendChild(div);
    body.appendChild(main);

  }
}

phoneApp.render();
