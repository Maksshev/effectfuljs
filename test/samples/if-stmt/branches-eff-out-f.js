// *- when branches has effects and it is the last statement
function a() {
  if (true) return _1();else {
    return M.jB(eff(2), _3);
  }

  function _1() {
    return M.jB(eff(1), _2);
  }

  function _2(a) {
    return M.pure(a);
  }

  function _3(a) {
    return M.pure(a);
  }

  function _4() {
    return M.pure();
  }
}

function b() {
  if (true) return _1();else {
    return M.jB(eff(2), _3);
  }

  function _1() {
    return M.jB(eff(1), _2);
  }

  function _2(a) {
    return M.pure(a);
  }

  function _3(a) {
    return M.pure(a);
  }

  function _4() {
    return M.j(eff(3), _5);
  }

  function _5() {
    return M.j(eff(4), _6);
  }

  function _6() {
    return M.pure();
  }
}

function c() {
  if (true) return _1();else {
    return M.j(eff(2), _2);
  }

  function _1() {
    return M.j(eff(1), _2);
  }

  function _2() {
    return M.j(eff(3), _3);
  }

  function _3() {
    return M.j(eff(4), _4);
  }

  function _4() {
    return M.pure();
  }
}

function d() {
  return M.j(eff('a'), _1);

  function _1() {
    if (true) return _2();else {
      return M.j(eff(2), _3);
    }
  }

  function _2() {
    return M.j(eff(1), _3);
  }

  function _3() {
    return M.j(eff(3), _4);
  }

  function _4() {
    return M.j(eff(4), _5);
  }

  function _5() {
    return M.pure();
  }
}

function e() {
  return M.jB(eff(1), _1);

  function _1(a) {
    if (a) return _2();else {
      return M.pure(2);
    }
  }

  function _2() {
    return M.pure(1);
  }

  function _3() {
    return M.j(eff(2), _4);
  }

  function _4() {
    return M.pure();
  }
}

function f() {
  return M.jB(eff(1), _1);

  function _1(a) {
    if (a) return _2();else {
      return M.pure(2);
    }
  }

  function _2() {
    return M.pure(1);
  }

  function _3() {
    return M.pure();
  }
}