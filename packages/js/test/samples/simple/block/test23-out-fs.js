function a() {
  var i, j, a;
  i = 0;
  j = 0;
  a = i++;
  return M.chain(eff4(i, j), _1, _7, i, j, a);

  function _1(b, i, j, a) {
    var c;
    c = j++;
    return M.chain(eff3(b, c), _2, _7, i, a);
  }

  function _2(b, i, a) {
    return M.chain(eff5(i), _3, _7, i, a, b);
  }

  function _3(c, i, a, b) {
    return M.chain(eff2(a, b, c), _4, _7, i);
  }

  function _4(a, i) {
    var b;
    b = i++;
    return M.chain(eff1(a, b), _5, _7, i);
  }

  function _5(a, i) {
    return M.chain(eff0(a, i), _6, _7);
  }

  function _6() {
    return M.pure();
  }

  function _7(e) {
    return M.raise(e);
  }
}