import * as R from "ramda"
import {Tag} from "estransducers"
import {tok,Subst} from "./core"


export function* openVarDecl(idNode,s,kind = "var") {
  const value = idNode.node === null ? {node:idNode} : idNode
  yield s.enter(Tag.init,Tag.VariableDeclaration,{node:{kind}})
  yield s.enter(Tag.declarations,Tag.Array)
  yield s.enter(Tag.push,Tag.VariableDeclarator)
  yield tok(Tag.id,Tag.Identifier,value)
}

export function* openBlock(pos,s) {
  yield s.enter(pos,Tag.BlockStatement)
  yield s.enter(Tag.push,Tag.Array)
}

export function* peelBlockFrom(s) {
  const i = s.cur()
  if (i != null && i.type === Tag.BlockStatement) {
    yield s.peel()
    yield* s.peelTo(Tag.body)
  } else {
    yield s.enter(i.pos, Tag.BlockStatement)
    yield s.enter(Tag.body, Tag.Array)
    yield s.enter(Tag.push, Subst)
  }
}
