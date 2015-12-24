export default ngModule => {
  describe('first module test', () => {
    beforeEach(window.module(ngModule.name));
    it('should test first module',() => {
      expect(true).to.be.true;
    });
  });
};
