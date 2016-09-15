import { JSynthPage } from './app.po';

describe('j-synth App', function() {
  let page: JSynthPage;

  beforeEach(() => {
    page = new JSynthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
