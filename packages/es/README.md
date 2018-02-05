# @effectful/es

The two-level syntax for effects based on ECMAScript async, generator and
async generator functions syntax overloading.

The project is a babel preset for integrating new custom computational effects
into JavaScript.

The first(object) level is the plain JavaScript, and the second(meta) level
is async, generators and async generators function syntax. Using this presets
default implementations for the meta-level can be overloaded.

As a proof of concept, there are default implementations of corresponding ECMAScript
standard effects.

## Usage

### Abstract interface

```
$ npm install --save-dev @effectful/es
$ npm install --save @effectful/es-rt
```

The preset doesn't use babel's transformation framework, so it requires
`passPerPreset` argument, if there are other presets.

For example:

```json
{
  "passPerPreset": true,
  "presets": ["@effectful/es","env"]
}
```

By default it injects imports for
[@effectful/es-rt](https://github.com/awto/effectfuljs/tree/master/packages/es-rt).

It is an implementation of the abstract interface for EcmaScript async,
generators and async functions. The interface doesn't yet have documentation.
The default implementation is pretty small and can be used as a reference for
now. There is `importRT` option to pass some overloaded concrete
implementations libraries. 

```json
{
  "presets": [["@effectful/es",{"importRT":"my-custom-effects"}]
}
```

### Inlined concrete implementation

```
$ npm install --save-dev @effectful/es
$ npm install --save @effectful/es-inline-rt
```

This .babelrc

```json
{
  "presets": [["@effectful/es",{"inline":true}]]
}
```

It is a much faster implementation, but there is no way to overload anything.

Other options are:

  * `loose` - like `inline` but it also drops a few ECMAScript compatibility
  features to make the generated code even more smaller and faster
  * `defunct` - if `true` state is encoded as number and a there is a single
  function to move between states; otherwise, the state is a state transition
  function callback
  * `topLevel` - if `true` moves state transition functions outside original
  function's body

There are quite a few of lower level options described in
[config.js](https://github.com/awto/effectfuljs/blob/master/packages/js/src/config.js).

Their values can be provided using `all`, `file`, `pure`, `effectful`, `generators`, `async`,
`asyncGenerators` fields in the preset options. For example, to use CommonJS modules instead
of defaulting ES for runtime injection use:

```json
{
  "presets": [["@effectful/es",{"file":{"modules":"commonjs"}}]]
}
```

More docs will be available soon...

## LICENSE

Copyright © 2016-2018 Vitaliy Akimov

Distributed under the terms of The MIT License (MIT).