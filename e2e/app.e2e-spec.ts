import { Angular1ProjectPage } from './app.po';

describe('angular1-project App', () => {
  let page: Angular1ProjectPage;

  beforeEach(() => {
    page = new Angular1ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
