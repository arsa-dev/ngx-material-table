import { NgxMaterialTableDemoPage } from './app.po';

describe('ngx-material-table-demo App', () => {
  let page: NgxMaterialTableDemoPage;

  beforeEach(() => {
    page = new NgxMaterialTableDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
