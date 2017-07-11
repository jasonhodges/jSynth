import { JSynthPage } from './app.po';

describe('jsynth App', () => {
  let page: JSynthPage;

  beforeEach(() => {
    page = new JSynthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
