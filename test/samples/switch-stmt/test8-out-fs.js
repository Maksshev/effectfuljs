// *- with state
function a() {
  var i;
  i = 0;
  return M.j(eff(), _1, i);

  function _1(i) {
    var a;
    a = i += 1;
    return M.jB(eff(a), _2, i);
  }

  function _2(a, i) {
    var b;
    b = i += 2;
    return M.jB(check(b), _3, i, a);
  }

  function _3(b, i, a) {
    var c;
    c = i += 4;
    return M.jB(check(c), _4, i, a, b);
  }

  function _4(d, i, a, b) {
    var c;
    c = i += 6;
    return M.jB(check(c), _5, i, a, b, d);
  }

  function _5(f, i, a, b, d) {
    var c, e;

    switch (a) {
      case b:
        c = i += 3;
        return M.j(effB(c), _6, i);

      case d:
        e = i += 5;
        return M.j(effB(e), _6, i);

      case f:
        {
          console.log('hi', i);
        }
    }
  }

  function _6(i) {
    return M.j(eff(i), _7);
  }

  function _7() {
    return M.pure();
  }
}