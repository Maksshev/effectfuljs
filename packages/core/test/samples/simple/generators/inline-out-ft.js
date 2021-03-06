import * as M from "@effectful/core";

function a1() {
  var a1 = M.context();
  return M.scope(a1_1);
}

function a2() {
  var a2 = M.context();
  a2.$exit = a2_6;
  a2.$handle = a2_7;
  a2.$step = a2_1;
  return a2.unwrap;
}

function a3() {
  var a3 = M.context();
  a3.$run = a3_1;
  a3.$exit = 0;
  a3.$handle = 1;
  a3.$step = 5;
  return 5(a3);
}

function a4() {
  var a4 = M.context();
  a4.$run = a4_1;
  a4.$exit = 0;
  a4.$handle = 1;
  a4.$step = 5;
  return a4;
}

function a5() {
  var a5 = M.context();
  a5.$run = a5_1;
  a5.$exit = 0;
  a5.$handle = 1;
  a5.$step = 4;
  return a5;
}

function a6() {
  var a6 = M.context();
  a6.$run = a6_1;
  a6.$exit = 0;
  a6.$handle = 1;
  a6.$step = 5;
  return a6;
}

function a7() {
  var a7 = M.context();
  a7.$run = a7_1;
  a7.$exit = 0;
  a7.$handle = 1;
  a7.$step = 4;
  return a7;
}

function a8() {
  var a8 = M.context();
  a8.$run = a8_1;
  a8.$exit = 0;
  a8.$handle = 1;
  a8.$step = 5;
  return a8;
}

function a9() {
  var a9 = M.context();
  a9.$run = a9_1;
  a9.$exit = 0;
  a9.$handle = 1;
  a9.$step = 5;
  return a9;
}

function a1_1(a1) {
  return M.yld(1, a1_2);
}

function a1_2(a1, a) {
  if (a) {
    return M.yld(2, a1_3);
  } else {
    return M.yldStar(b, a1_6);
  }
}

function a1_3(a1, a) {
  var k;
  k = a;
  return M.chain(k, a1_4);
}

function a1_4(a1, a) {
  return M.yld(a, a1_5);
}

function a1_5(a1, a) {
  return M.pure(a);
}

function a1_6(a1) {
  return M.pure(a1._r);
}

function a2_1(a2) {
  a2.$step = a2_2;
  a2.value = 1;
  return a2;
}

function a2_2(a2, a) {
  if (a) {
    a2.$step = a2_3;
    a2.value = 2;
    return a2;
  } else {
    a2.$step = a2_8;
    return M.$delegate(b);
  }
}

function a2_3(a2, a) {
  var k;
  k = a;
  a2.$step = a2_4;
  return Promise.resolve(k).then(a2.$resolve, a2.$reject);
}

function a2_4(a2, a) {
  a2.$step = a2_5;
  a2.value = a;
  return a2;
}

function a2_5(a2, a) {
  return a;
}

function a2_6(a2, r) {
  a2.$exit = a2_6;
  a2.$handle = a2_7;
  return r;
}

function a2_7(a2, e) {
  a2.$exit = a2_6;
  a2.$handle = a2_7;
  a2.$step = a2.$exit;
  throw e;
}

function a2_8(a2) {
  return a2._r;
}

function a3_1(a3, p) {
  var k, s;

  switch (s = a3.$step, s) {
    case 5:
      a3.$step = 6;
      return {
        value: 1,
        done: false
      };

    case 6:
      if (p) {
        a3.$step = 7;
        return {
          value: 2,
          done: false
        };
      } else {
        a3.$step = 10;
        return M.$delegate(b);
      }

    case 7:
      k = p;
      a3.$step = 8;
      return Promise.resolve(k).then(a3.$resolve, a3.$reject);

    case 8:
      a3.$step = 9;
      return {
        value: p,
        done: false
      };

    case 9:
      a3.$step = 0;
      return {
        value: p,
        done: true
      };

    case 0:
      a3.$exit = 0;
      a3.$handle = 1;
      a3.$step = 0;
      return {
        value: p,
        done: true
      };

    case 1:
      a3.$exit = 0;
      a3.$handle = 1;
      return a3.$step = 0, Promise.reject(p);

    case 10:
      a3.$step = 0;
      return {
        value: a3._r,
        done: true
      };

    case 2:
      return Promise.resolve(M.$redir(p)).then(a3.$resolve, a3.$reject);

    case 3:
      return M.$redirResult(p);

    default:
      throw new Error("invalid state");
  }
}

function a4_1(a4, p) {
  var k, s;

  switch (s = a4.$step, s) {
    case 5:
      a4.$step = 6;
      return Promise.resolve({
        value: 1,
        done: false
      });

    case 6:
      if (p) {
        a4.$step = 7;
        return Promise.resolve({
          value: 2,
          done: false
        });
      } else {
        a4.$step = 10;
        return M.$delegate(b);
      }

    case 7:
      k = p;
      a4.$step = 8;
      return Promise.resolve(k).then(a4.$resolve, a4.$reject);

    case 8:
      a4.$step = 9;
      return Promise.resolve({
        value: p,
        done: false
      });

    case 9:
      return Promise.resolve(p);

    case 0:
      a4.$exit = 0;
      a4.$handle = 1;
      return Promise.resolve(p);

    case 1:
      a4.$exit = 0;
      a4.$handle = 1;
      return a4.$step = 0, Promise.reject(p);

    case 10:
      return Promise.resolve(a4._r);

    case 2:
      return Promise.resolve(M.$redir(p)).then(a4.$resolve, a4.$reject);

    case 3:
      return M.$redirResult(p);

    default:
      throw new Error("invalid state");
  }
}

function a5_1(a5, p) {
  var a, s;

  switch (s = a5.$step, s) {
    case 4:
      a5._loop = M.iterator(b);
      a5.$step = 5;
      return 5(a5);

    case 5:
      a5.$exit = 11;
      a5.$handle = 10;

      if (!(a5._loop = a5._loop.step()).done) {
        a5._i = a5._loop.value;
        a5.$step = 5;
        return M.$delegate(M.yld(a5._i));
      } else {
        a5.$step = 6;
        a5._fc = 7, a5._i = null;
        return 6(a5);
      }

    case 6:
      a5.$exit = 0;
      a5.$handle = 1;

      if (a5._loop.exit) {
        a5._loop.exit();
      }

      a5.$step = a5._fc;
      a = a5._fc, a5._loop = null, a5._fc = null;
      return a(a5);

    case 7:
      return Promise.resolve(a5._r);

    case 0:
      a5.$exit = 0;
      a5.$handle = 1;
      return Promise.resolve(p);

    case 1:
      a5.$exit = 0;
      a5.$handle = 1;
      return a5.$step = 0, Promise.reject(p);

    case 8:
      return Promise.resolve(a5._r);

    case 9:
      return a5.$step = 0, Promise.reject(a5._err1);

    case 10:
      a5.$step = 6;
      a5._fc = 9, a5._err1 = p;
      return 6(a5);

    case 11:
      a5.$step = 6;
      a5._fc = 8, a5._r = p;
      return 6(a5);

    case 2:
      return M.$redir(p);

    default:
      throw new Error("invalid state");
  }
}

function a6_1(a6, p) {
  var a, c, s;

  switch (s = a6.$step, s) {
    case 5:
      a6._loop = M.iteratorM(b);
      a6.$step = 6;
      return 6(a6);

    case 6:
      a6.$exit = 13;
      a6.$handle = 12;
      a6.$step = 7;
      c = a6._loop, a6._loop = null;
      return Promise.resolve(c.step()).then(a6.$resolve, a6.$reject);

    case 7:
      c = a6._loop = p;
      a = c.done;

      if (!a) {
        a6._i = a6._loop.value;
        a6.$step = 6;
        return Promise.resolve({
          value: a6._i,
          done: false
        });
      } else {
        a6.$step = 8;
        a6._fc = 9, a6._i = null;
        return 8(a6);
      }

    case 8:
      a6.$exit = 0;
      a6.$handle = 1;

      if (a6._loop.exit) {
        a6.$step = a6._fc;
        c = a6._loop, a = a6._fc, a6._loop = null, a6._fc = null;
        return Promise.resolve(c.exit()).then(a6.$resolve, a6.$reject);
      } else {
        a6.$step = a6._fc;
        c = a6._fc, a6._loop = null, a6._fc = null;
        return c(a6);
      }

    case 9:
      return Promise.resolve(a6._r);

    case 0:
      a6.$exit = 0;
      a6.$handle = 1;
      return Promise.resolve(p);

    case 1:
      a6.$exit = 0;
      a6.$handle = 1;
      return a6.$step = 0, Promise.reject(p);

    case 10:
      return Promise.resolve(a6._r);

    case 11:
      return a6.$step = 0, Promise.reject(a6._err1);

    case 12:
      a6.$step = 8;
      a6._fc = 11, a6._err1 = p;
      return 8(a6);

    case 13:
      a6.$step = 8;
      a6._fc = 10, a6._r = p;
      return 8(a6);

    default:
      throw new Error("invalid state");
  }
}

function a7_1(a7, p) {
  var a, s;

  switch (s = a7.$step, s) {
    case 4:
      a7._loop = M.iterator(b);
      a7.$step = 5;
      return 5(a7);

    case 5:
      a7.$exit = 11;
      a7.$handle = 10;

      if (!(a7._i1 = a7._loop.next()).done) {
        a7._i = a7._i1.value;
        a7.$step = 5;
        return M.$delegate(M.yld(a7._i));
      } else {
        a7.$step = 6;
        a7._fc = 7, a7._i = null, a7._i1 = null;
        return 6(a7);
      }

    case 6:
      a7.$exit = 0;
      a7.$handle = 1;

      if (a7._loop.return) {
        a7._loop.return();
      }

      a7.$step = a7._fc;
      a = a7._fc, a7._loop = null, a7._fc = null;
      return a(a7);

    case 7:
      return Promise.resolve(a7._r);

    case 0:
      a7.$exit = 0;
      a7.$handle = 1;
      return Promise.resolve(p);

    case 1:
      a7.$exit = 0;
      a7.$handle = 1;
      return a7.$step = 0, Promise.reject(p);

    case 8:
      return Promise.resolve(a7._r);

    case 9:
      return a7.$step = 0, Promise.reject(a7._err1);

    case 10:
      a7.$step = 6;
      a7._fc = 9, a7._err1 = p;
      return 6(a7);

    case 11:
      a7.$step = 6;
      a7._fc = 8, a7._r = p;
      return 6(a7);

    case 2:
      return M.$redir(p);

    default:
      throw new Error("invalid state");
  }
}

function a8_1(a8, p) {
  var a, c, s;

  switch (s = a8.$step, s) {
    case 5:
      a8._loop = M.iteratorM(b);
      a8.$step = 6;
      return 6(a8);

    case 6:
      a8.$exit = 13;
      a8.$handle = 12;
      a8.$step = 7;
      c = a8._loop, a8._loop = null;
      return Promise.resolve(c.step()).then(a8.$resolve, a8.$reject);

    case 7:
      c = a8._loop = p;
      a = c.done;

      if (!a) {
        a8._i = a8._loop.value;
        a8.$step = 6;
        return Promise.resolve({
          value: a8._i,
          done: false
        });
      } else {
        a8.$step = 8;
        a8._fc = 9, a8._i = null;
        return 8(a8);
      }

    case 8:
      a8.$exit = 0;
      a8.$handle = 1;

      if (a8._loop.exit) {
        a8.$step = a8._fc;
        c = a8._loop, a = a8._fc, a8._loop = null, a8._fc = null;
        return Promise.resolve(c.exit()).then(a8.$resolve, a8.$reject);
      } else {
        a8.$step = a8._fc;
        c = a8._fc, a8._loop = null, a8._fc = null;
        return c(a8);
      }

    case 9:
      return Promise.resolve(a8._r);

    case 0:
      a8.$exit = 0;
      a8.$handle = 1;
      return Promise.resolve(p);

    case 1:
      a8.$exit = 0;
      a8.$handle = 1;
      return a8.$step = 0, Promise.reject(p);

    case 10:
      return Promise.resolve(a8._r);

    case 11:
      return a8.$step = 0, Promise.reject(a8._err1);

    case 12:
      a8.$step = 8;
      a8._fc = 11, a8._err1 = p;
      return 8(a8);

    case 13:
      a8.$step = 8;
      a8._fc = 10, a8._r = p;
      return 8(a8);

    default:
      throw new Error("invalid state");
  }
}

function a9_1(a9, p) {
  var i, a, c, s;

  switch (s = a9.$step, s) {
    case 5:
      a9._loop = M.iteratorM(b);
      a9.$step = 6;
      return 6(a9);

    case 6:
      a9.$exit = 13;
      a9.$handle = 12;
      a9.$step = 7;
      return Promise.resolve(a9._loop.next()).then(a9.$resolve, a9.$reject);

    case 7:
      c = i = p;
      a = c.done;

      if (!a) {
        a9._i = i.value;
        a9.$step = 6;
        return Promise.resolve({
          value: a9._i,
          done: false
        });
      } else {
        a9.$step = 8;
        a9._fc = 9, a9._i = null;
        return 8(a9);
      }

    case 8:
      a9.$exit = 0;
      a9.$handle = 1;

      if (a9._loop.return) {
        a9.$step = a9._fc;
        c = a9._loop, a = a9._fc, a9._loop = null, a9._fc = null;
        return Promise.resolve(c.return()).then(a9.$resolve, a9.$reject);
      } else {
        a9.$step = a9._fc;
        c = a9._fc, a9._loop = null, a9._fc = null;
        return c(a9);
      }

    case 9:
      return Promise.resolve(a9._r);

    case 0:
      a9.$exit = 0;
      a9.$handle = 1;
      return Promise.resolve(p);

    case 1:
      a9.$exit = 0;
      a9.$handle = 1;
      return a9.$step = 0, Promise.reject(p);

    case 10:
      return Promise.resolve(a9._r);

    case 11:
      return a9.$step = 0, Promise.reject(a9._err1);

    case 12:
      a9.$step = 8;
      a9._fc = 11, a9._err1 = p;
      return 8(a9);

    case 13:
      a9.$step = 8;
      a9._fc = 10, a9._r = p;
      return 8(a9);

    default:
      throw new Error("invalid state");
  }
}