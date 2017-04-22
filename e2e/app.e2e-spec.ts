import { SimplrCounterPage } from './app.po';

describe('simplr-counter App', () => {
  let page: SimplrCounterPage;

  beforeEach(() => {
    page = new SimplrCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
