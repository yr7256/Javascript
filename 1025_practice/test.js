// forEach 같은 경우?
const obj2 = {
  method: function() {
    [1, 2, 3].forEach(function() {
      console.log(this)
    }, this) // 두 번째 인자로 this를 넣어주는 경우 method f를 가리키게 됨!
    // 만약 이거 없으면 윈도로 날아감
  }
}