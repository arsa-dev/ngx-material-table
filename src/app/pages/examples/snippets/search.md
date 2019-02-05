// ...

@Component({ 
  template: `
    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
    <ngx-material-table [settings]="settings" [source]="source"></ngx-material-table>
  `
})
// ...