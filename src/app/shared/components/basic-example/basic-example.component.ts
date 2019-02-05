import { Component } from '@angular/core';

@Component({
  selector: 'basic-example',
  template: `
    <ngx-material-table [settings]="settings"></ngx-material-table>
  `,
})
export class BasicExampleComponent {

  settings = {
    columns: {
      id: {
        title: 'ID',
        width: '100px',
      },
      name: {
        title: 'Full Name',
        width: '40%',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

}
