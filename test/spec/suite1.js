module.exports = {
  name: 'Test suite 1',
  test: [
    {
      name: 'Test #1',
      test: function(){
        assert(true);
      }
    },
    {
      name: 'Test #2',
      test: function(){
          assert(false);
      }
    }
  ]
};