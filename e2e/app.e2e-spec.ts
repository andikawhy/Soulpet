import { SoulpetPage } from './app.po';

describe('soulpet App', () => {
  let page: SoulpetPage;

  beforeEach(() => {
    page = new SoulpetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
