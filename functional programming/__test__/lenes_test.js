const store = fooStore;
{
  // `view(lens, set(lens, value, store))` = `value`
  // If you set a value into the store, and immediately
  // view the value through the lens, you get the value
  // that was set.
  const lens = lensProp('a');
  const value = 'baz';
  const a = value;
  const b = view(lens, set(lens, value, store));
  console.log(a, b); // 'baz' 'baz'
}
{
  // set(lens, b, set(lens, a, store)) = set(lens, b, store)
  // If you set a lens value to `a` and then immediately set the lens value to `b`,
  // it's the same as if you'd just set the value to `b`.
  const lens = lensProp('a');
  const a = 'bar';
  const b = 'baz';
  const r1 = set(lens, b, set(lens, a, store));
  const r2 = set(lens, b, store);
  
  console.log(r1, r2); // {a: "baz", b: "bar"} {a: "baz", b: "bar"}
}
{
  // `set(lens, view(lens, store), store)` = `store`
  // If you get the lens value from the store, and then immediately set that value
  // back into the store, the value is unchanged.
  const lens = lensProp('a');
  const r1 = set(lens, view(lens, store), store);
  const r2 = store;
  
  console.log(r1, r2); // {a: "foo", b: "bar"} {a: "foo", b: "bar"}
}