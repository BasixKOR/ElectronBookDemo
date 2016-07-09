var fs = require('fs'); //일단 파일 모듈부터 부른다.
$('.class1 button#btn').on('click', function () { // 버튼 1 클릭시
  fs.writeFile('letter.txt', `안녕, ${$('.class1 input#name').prop('value')}. 편지 내용은 이게 다야!`, (err) => { // 파일 쓰기
    if (err) throw err; // 에러는 대충 처리한다
    $('.class1').append('<p>편지 쓰기 끝!</p>'); // 편지 쓰기 끝 이라고 써 놓는다.
  });
})
