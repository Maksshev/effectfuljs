function a() {
  var e;
  return _1();

  function _1() {
    try {
      return M.jME(eff(1), _2, _3);
    } catch (e) {
      return _3();
    }
  }

  function _2() {
    return _4();
  }

  function _3(ex) {
    e = ex;
    console.log(e);
    return _4();
  }

  function _4() {
    console.log('fin');
    return M.pure();
  }
}