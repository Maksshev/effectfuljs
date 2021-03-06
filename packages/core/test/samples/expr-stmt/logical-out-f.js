import * as M from "@effectful/core";

function a1() {
  return M.chain(eff(1), _1);

  function _1(a) {
    if (!a) {
      return M.chain(eff(2), _2);
    } else {
      return a;
    }
  }

  function _2() {}
}

function a2() {
  return M.chain(eff(1), _1);

  function _1(a) {
    if (a) {
      return M.chain(eff(2), _2);
    } else {
      return a;
    }
  }

  function _2() {}
}

function a3() {
  var a;
  return M.chain(eff(1), _1);

  function _1(b) {
    a = b;
    return M.chain(eff(2), _2);
  }

  function _2(c) {
    var b;
    b = a || c;

    if (!b) {
      return M.chain(eff(3), _3);
    } else {
      return b;
    }
  }

  function _3() {}
}

function a4() {
  var a;
  return M.chain(eff(1), _1);

  function _1(b) {
    a = b;
    return M.chain(eff(2), _2);
  }

  function _2(c) {
    var b;
    b = a && c;

    if (b) {
      return M.chain(eff(3), _3);
    } else {
      return b;
    }
  }

  function _3() {}
}

function a5() {
  var a;
  a = 1;

  if (!a) {
    return M.chain(eff(2), _1);
  } else {
    return a;
  }

  function _1() {}
}

function a6() {
  return M.chain(eff(2), _1);

  function _1(a) {
    if (!a) {
      a = 1;
    }
  }
}

function a7() {
  var a;
  a = 1 + 1;

  if (!a) {
    return M.chain(eff(2), _1);
  } else {
    return a;
  }

  function _1() {}
}

function a8() {
  return M.chain(eff(2), _1);

  function _1(a) {
    if (!a) {
      a = 1 + 1;
    }
  }
}

function a9() {
  var a;
  a = 1;

  if (a) {
    return M.chain(eff(2), _1);
  } else {
    return a;
  }

  function _1() {}
}

function a10() {
  return M.chain(eff(2), _1);

  function _1(a) {
    if (a) {
      a = 1;
    }
  }
}

function a11() {
  var a;
  a = 1 + 1;

  if (a) {
    return M.chain(eff(2), _1);
  } else {
    return a;
  }

  function _1() {}
}

function a12() {
  return M.chain(eff(2), _1);

  function _1(a) {
    if (a) {
      a = 1 + 1;
    }
  }
}

function a13() {
  return M.chain(eff(1), _1);

  function _1(a) {
    if (a) {
      return M.chain(eff(2), _2);
    } else {
      return M.chain(eff(3), _2);
    }
  }

  function _2() {}
}

function a14() {
  return M.chain(eff(1), _1);

  function _1(a) {
    if (a) {
      return 2;
    } else {
      return M.chain(eff(3), _2);
    }
  }

  function _2() {}
}

function a14_1() {
  var r;
  return M.chain(eff(1), _1);

  function _1(a) {
    if (a) {
      return M.jump(2, _2);
    } else {
      return M.chain(eff(3), _2);
    }
  }

  function _2(a) {
    return a;
  }
}

function a15() {
  return M.chain(eff(1), _1);

  function _1(a) {
    if (a) {
      return M.chain(eff(2), _2);
    } else {
      return 3;
    }
  }

  function _2() {}
}

function a16() {
  if (1) {
    return M.chain(eff(2), _1);
  } else {
    return M.chain(eff(3), _1);
  }

  function _1() {}
}

function a17() {
  return M.chain(eff(1), _1);

  function _1(a) {
    var b;

    if (a) {
      b = 2;
    } else {
      b = 3;
    }

    console.log(b);
  }
}

function a18() {
  var a;
  return M.chain(eff(1), _1);

  function _1(b) {
    a = b;
    return M.chain(eff(2), _2);
  }

  function _2(b) {
    if (a + b) {
      2;
    } else {
      3;
    }
  }
}

function a18_1() {
  var a, r;
  return M.chain(eff(1), _1);

  function _1(b) {
    a = b;
    return M.chain(eff(2), _2);
  }

  function _2(b) {
    var c;

    if (a + b) {
      c = 2;
    } else {
      c = 3;
    }

    return c;
  }
}

function a19() {
  var a, b;
  return M.chain(eff(1), _1);

  function _1(b) {
    if (!b) {
      return M.chain(eff(2), _2);
    } else {
      a = b;
      return M.jump(void 0, _4);
    }
  }

  function _2(a) {
    b = a;
    return M.chain(eff(3), _3);
  }

  function _3(c) {
    a = (b, c);
    return M.jump(void 0, _4);
  }

  function _4() {
    return M.chain(eff(a), _5);
  }

  function _5() {}
}

function a19_1() {
  var a, b, r;
  return M.chain(eff(1), _1);

  function _1(b) {
    if (!b) {
      return M.chain(eff(2), _2);
    } else {
      a = b;
      return M.jump(void 0, _4);
    }
  }

  function _2(a) {
    b = a;
    return M.chain(eff(3), _3);
  }

  function _3(c) {
    a = (b, c);
    return M.jump(void 0, _4);
  }

  function _4() {
    return M.chain(eff(a), _5);
  }

  function _5(a) {
    return a;
  }
}

function b() {
  var r;
  return M.chain(eff(1), _1);

  function _1(a) {
    if (!a) {
      return M.chain(eff(2), _2);
    } else {
      return M.jump(a, _2);
    }
  }

  function _2() {
    return M.chain(eff(1), _3);
  }

  function _3(a) {
    if (a) {
      return M.chain(eff(2), _4);
    } else {
      return M.jump(a, _4);
    }
  }

  function _4() {
    var a;
    a = 1;

    if (!a) {
      return M.chain(eff(2), _5);
    } else {
      return M.jump(a, _5);
    }
  }

  function _5() {
    return M.chain(eff(2), _6);
  }

  function _6(a) {
    var b;

    if (!a) {
      a = 1;
    }

    b = 1 + 1;

    if (!b) {
      return M.chain(eff(2), _7);
    } else {
      return M.jump(b, _7);
    }
  }

  function _7() {
    return M.chain(eff(2), _8);
  }

  function _8(a) {
    var b;

    if (!a) {
      a = 1 + 1;
    }

    b = 1;

    if (b) {
      return M.chain(eff(2), _9);
    } else {
      return M.jump(b, _9);
    }
  }

  function _9() {
    return M.chain(eff(2), _10);
  }

  function _10(a) {
    var b;

    if (a) {
      a = 1;
    }

    b = 1 + 1;

    if (b) {
      return M.chain(eff(2), _11);
    } else {
      return M.jump(b, _11);
    }
  }

  function _11() {
    return M.chain(eff(2), _12);
  }

  function _12(a) {
    if (a) {
      a = 1 + 1;
    }

    return M.chain(eff(1), _13);
  }

  function _13(a) {
    if (a) {
      return M.chain(eff(2), _14);
    } else {
      return M.chain(eff(3), _14);
    }
  }

  function _14() {
    return M.chain(eff(1), _15);
  }

  function _15(a) {
    if (a) {
      return M.jump(2, _16);
    } else {
      return M.chain(eff(3), _16);
    }
  }

  function _16() {
    return M.chain(eff(1), _17);
  }

  function _17(a) {
    if (a) {
      return M.chain(eff(2), _18);
    } else {
      return M.jump(3, _18);
    }
  }

  function _18() {
    if (1) {
      return M.chain(eff(2), _19);
    } else {
      return M.chain(eff(3), _19);
    }
  }

  function _19() {
    return M.chain(eff(1), _20);
  }

  function _20(a) {
    var b;

    if (a) {
      b = 2;
    } else {
      b = 3;
    }

    return b;
  }
}

function l1() {
  var a, b, c, d, e;
  cond ? a = 1 : something;
  return M.chain(eff(a), _1);

  function _1() {
    cond ? something : b = 1;
    return M.chain(eff(b), _2);
  }

  function _2() {
    cond ? c = 1 : c = 2;
    return M.chain(eff(b), _3);
  }

  function _3() {
    d = 3 && something;
    return M.chain(eff(d), _4);
  }

  function _4() {
    something && (e = 4);
    return M.chain(eff(e), _5);
  }

  function _5() {}
}

function a1() {
  var i, a, r;
  return M.scope(_1);

  function _1() {
    return M.yldStar(M.yld("a1"), _2);
  }

  function _2(a) {
    if (a) {
      return M.yldStar(M.yld("a2"), _3);
    } else {
      return M.yldStar(M.yld("a3"), _3);
    }
  }

  function _3() {
    return M.yldStar(M.yld("b1"), _4);
  }

  function _4(a) {
    var b;

    if (a % 2) {
      b = "b2";
    } else {
      b = "b3";
    }

    return M.yldStar(M.yld(b), _5);
  }

  function _5() {
    return M.yldStar(M.yld("c1"), _6);
  }

  function _6(a) {
    if (a % 2) {
      return M.yldStar(M.yld("c2"), _7);
    } else {
      return M.jump("c3", _7);
    }
  }

  function _7(a) {
    return M.yldStar(M.yld(a), _8);
  }

  function _8() {
    return M.yldStar(M.yld("d1"), _9);
  }

  function _9(a) {
    if (a % 2) {
      return M.jump("d2", _10);
    } else {
      return M.yldStar(M.yld("d3"), _10);
    }
  }

  function _10(a) {
    return M.yldStar(M.yld(a), _11);
  }

  function _11() {
    return M.yldStar(M.yld("e1"), _12);
  }

  function _12(a) {
    if (a % 2) {
      return M.yldStar(M.yld("e2"), _13);
    } else {
      return M.yldStar(M.yld("e3"), _13);
    }
  }

  function _13(a) {
    return M.yldStar(M.yld(a), _14);
  }

  function _14() {
    var a;
    a = "a1l" && "a1r";
    return M.yldStar(M.yld(a), _15);
  }

  function _15() {
    var a;
    a = "a2l" && "a2r";
    return M.yldStar(M.yld(a), _16);
  }

  function _16(a) {
    return M.yldStar(M.yld(a), _17);
  }

  function _17() {
    var a;
    a = "a3l";

    if (a) {
      return M.yldStar(M.yld("a3r"), _18);
    } else {
      return M.jump(a, _18);
    }
  }

  function _18(a) {
    return M.yldStar(M.yld(a), _19);
  }

  function _19() {
    var b;
    b = "a3l";

    if (b) {
      return M.yldStar(M.yld("a3r"), _20);
    } else {
      a = b;
      return M.jump(void 0, _21);
    }
  }

  function _20(b) {
    a = !b;
    return M.jump(void 0, _21);
  }

  function _21() {
    return M.yldStar(M.yld(a), _22);
  }

  function _22() {
    var a;
    a = "a4l";

    if (a) {
      return M.yldStar(M.yld("a4r"), _23);
    } else {
      return M.jump(a, _23);
    }
  }

  function _23(a) {
    return M.yldStar(M.yld(a), _24);
  }

  function _24(a) {
    return M.yldStar(M.yld(a), _25);
  }

  function _25() {
    var a;
    a = "o1l" || "o1r";
    return M.yldStar(M.yld(a), _26);
  }

  function _26() {
    return M.yldStar(M.yld("o2l"), _27);
  }

  function _27(a) {
    if (a) {
      a = "o2r";
    }

    return M.yldStar(M.yld(a), _28);
  }

  function _28() {
    var a;
    a = "o3l";

    if (a) {
      return M.yldStar(M.yld("o3r"), _29);
    } else {
      return M.jump(a, _29);
    }
  }

  function _29(a) {
    return M.yldStar(M.yld(a), _30);
  }

  function _30() {
    return M.yldStar(M.yld("o4l"), _31);
  }

  function _31(a) {
    if (a) {
      return M.yldStar(M.yld("o4r"), _32);
    } else {
      return M.jump(a, _32);
    }
  }

  function _32(a) {
    return M.pure(a);
  }
}