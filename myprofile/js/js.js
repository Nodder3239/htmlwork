//스크립트


setInterval(myWatch, 1000);

function myWatch(){
  const now = new Date(); //날짜와 시간 함께 생성
  let time = now.toLocaleString();  

  let watch = document.getElementById("show");
  watch.innerHTML = time;
}
window.onload = function(){
  let picture = ["images/blue.jpg", "images/sand.jpg", "images/cbg2.jpg"];
  let picIdx = 0;

  showSlide();
  function showSlide(){
    //이미지의 경로 - src 속성 사용
    let p = document.getElementById("pic");
    p.src = picture[picIdx];
    picIdx++;
    if(picIdx == picture.length){ 
      picIdx = 0;
    }
    setTimeout(showSlide, 3000);
  }

  let wash = document.querySelector("#wash1");
  wash.addEventListener("mouseover", function(){
    wash.src="images/wash2.jpg";
  });
  wash.addEventListener("mouseout", function(){
    wash.src="images/wash1.jpg";
  });
}