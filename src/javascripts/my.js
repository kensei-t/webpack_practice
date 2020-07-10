export default () => {
  const obj = { a: 1, b: 2 };
  const newObj = { ...obj, c: 3 }
  // Inject obj with '...obj' to { a: 1, b: 2, c: 3 }
  console.log('this is module' ,newObj )
}
