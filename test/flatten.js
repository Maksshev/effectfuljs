import * as R from "ramda"
import * as Kit from "../src/kit/core"
import {flatten,prepareScopes,consumeScope} from "../src/transform"
import {Tag,produce,consume} from "estransducers"
import generate from "babel-generator"
import {parse} from "babylon"
import {doWhileStmt,forOfStmt} from "../src/loops"
import {removeEmptyBinds} from "../src/transform"
import * as assert from "assert"
import {equal,print,transformExpr} from "./kit/core"
import * as Prop from "../src/propagate"
import * as Branch from "../src/branch"
import * as Debug from "../src/debug"
import * as Dump from "../src/dump"
import * as Uniq from "../src/uniq"
import * as Block from "../src/block"
import * as Trace from "estransducers/trace"

const run = transformExpr(R.pipe(
  Branch.prepareLogical,
  Block.flatten,
  Prop.recalcEff,
  Debug.mark,
  consumeScope))

describe('flatten expressions', function() {
  context('with logical sub expression', function() {
    it('should not let effect to escape 1', function() {
      equal(
        run(function() {
          eff(1) || (eff(2) + eff3());
        }),
        print(function () /*BS|E*/{
          /*VD|S|E*/var a = /*CE|B*/eff(1);
          /*ES|S|E*/ /*LE|B*/a || /*stmtExpr|E*/(() => /*BS|E*/{
            /*VD|S|E*/var b = /*CE|B*/eff(2);
            /*VD|S|E*/var c = /*CE|B*/eff3();
            return b + c;
          })();
        }))
    })
    context('with js side effects', function() {
      it('should order all effects accordingly', function() {
        equal(
          run(function() {
            i+=2;
            eff1(eff2(++i),i++,eff3(i));
          }),
          print(function () /*BS|E*/{
            i += 2;
            /*VD|S*/var a = ++i;
            /*VD|S|E*/var b = /*CE|B*/eff2(a);
            /*VD|S*/var c = i++;
            /*VD|S|E*/var d = /*CE|B*/eff3(i);
            /*ES|S|E*/ /*CE|B*/eff1(b, c, d);
          }))
      })
    })
  })
  context('with variable declaration', function() {
    it('should not let effect to escape 2', function() {
      equal(
        run(function() {
          var a = eff(1) || eff(2);
        }),
        print(function () /*BS|E*/{
          /*VD|S|E*/var a = /*CE|B*/eff(1);
          /*VD|S|E*/var a = /*LE|B*/a || /*stmtExpr|E*/(() => /*BS|E*/{
            /*ES|S|E*/ /*CE|B*/eff(2);
          })();
        }))
    })
  })
  it('should not let effect to escape 3', function() {
    equal(
      run(function() {
        eff(1) || eff(2);
      }),
      print(function () /*BS|E*/{
        /*VD|S|E*/var a = /*CE|B*/eff(1);
        /*ES|S|E*/ /*LE|B*/a || /*stmtExpr|E*/(() => /*BS|E*/{
          /*ES|S|E*/ /*CE|B*/eff(2);
        })();
      }))
  })
  context('with sequence operator', function() {
    it('should thread effects accordingly', function() {
      equal(
        run(function() {
          var i = 0;
          eff(i), i++, eff(i--), eff(i+=2);
        }),
        //TODO: clean the sequence
        print(function () /*BS|E*/{
          var i = 0;
          /*VD|S|E*/var c = /*CE|B*/eff(i);
          /*VD|S*/var d = i++;
          /*VD|S*/var a = i--;
          /*VD|S|E*/var e = /*CE|B*/eff(a);
          /*VD|S*/var b = i += 2;
          /*VD|S|E*/var f = /*CE|B*/eff(b);
          c, d, e, f;
        }))
    })
  })
  context('with `if` statement', function() {
    context('with pure branch', function() {
      it('should keep effect in body', function() {
        equal(
          run(function() {
            var i = 0
            if (i)
              eff(i)
            else {
              i+=2
              e
            }
          }),
          print(function () /*BS|E*/{
            var i = 0;
            /*IS|E*/if (i) /*BS|E*/{
              /*ES|S|E*/ /*CE|B*/eff(i);
            } else {
              i += 2;
              e;
            }
          }))
      })
    })
  })
})

describe('flatten `for-of`', function() {
  context('with effect in body', function() {
    it('should keep effect in body', function() {
      equal(
        run(`function() {
          for(var i of s) {
            eff(1);
          }
        }`),
        print(function () /*BS|E*/{
          /*FOS|E*/for (var i of s) /*BS|E*/{
            /*ES|S|E*/ /*CE|B*/eff(1);
          }
        }))
      })
  })
  context('with effect on the right', function() {
    it('should extract the effect into former step',
       function() {
         equal(
           run(function() {
             for(var i of eff(1)) {
               2+2;
             }
           }),
           print(function () /*BS|E*/{
             /*VD|S|E*/var a = /*CE|B*/eff(1);
             for (var i of a) {
               2 + 2;
             }
           }))
       })
  })
})

describe('flatten `for`', function() {
  context('with non-block in body', function() {
    it('should keep effect in the body', function() {
      equal(
        run(function() {
          for(;;)
            eff(1);         
        }),
        print(function () /*BS|E*/{
          /*FS|E*/for (;;) /*BS|E*/{
            /*ES|S|E*/ /*CE|B*/eff(1);
          }
        }))
    })
  })
  context('with effects in init', function() {
    it('should extract effect', function() {
      equal(
        run(`function() {
          for(var i = init();;) {
            b;
          }
        }`),
        print((function () /*BS|E*/{
          /*VD|S|E*/var i = /*CE|B*/init();
          for (;;) {
            b;
          }
        })))
    })
  })
})

