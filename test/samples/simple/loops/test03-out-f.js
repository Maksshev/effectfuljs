function a() {
  var k, i, j, l;
  k = 0;
  return M.jM(eff1(), _1);

  function _1() {
    return M.jMB(eff2(), _2);
  }

  function _2(i) {
    return _3();
  }

  function _3() {
    if (i < 10) return _4();else {
      return eff6(i, j, k);
    }
  }

  function _4() {
    k++;
    return M.jMB(eff3(i), _5);
  }

  function _5(j) {
    return M.jMB(eff4(i), _6);
  }

  function _6(l) {
    l++;
    return M.jM(eff5(j++, k, l), _7);
  }

  function _7() {
    i++;
    return M.jR(_3);
  }
}