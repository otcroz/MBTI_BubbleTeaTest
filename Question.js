

//변수 선언
var clickValue = 1;


//MBTI 지수 정리


//1. 배경
//배경 순차적으로 출력


//2. 질문 타이틀
//질문 타이틀 번호 출력
var queTitle = document.getElementById('qTitle');

for (clickValue=1; clickValue<=12; clickValue++){
    //queTitle.innerHTML = "Question " + clickValue;
}

//3. 질문창
//질문 내용 리스트

//질문 출력하기


//4. 버튼
//버튼 질문 내용 리스트

//버튼 질문 출력하기

//버튼에 클릭 효과 적용

//버튼 누를 때마다 점수 적용
var clickValue;
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');

function clickBtn(obj){
    obj.style.backgroundColor = "rgba(194, 129, 129, 1)";
    obj.style.color = "white";
    click+=1;
}

function over(obj){
    obj.style.backgroundColor = "rgba(236, 168, 168, 1)";
}

function out(obj){
    obj.style.backgroundColor = "rgba(240, 210, 210, 1)";
}

