export default ngModule => {
  describe('second module test', () => {
    beforeEach(window.module(ngModule.name));
    it('should test second module',() => {
      expect(true).to.be.true;
    });
  });
};
