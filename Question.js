

//변수 선언
var clickValue = 1;
var selClickValue = 0;

//MBTI 지수 정리


//1. 배경
//배경 순차적으로 출력
QueBackground = ['url("버블티_1.png")', 'url("버블티_2.png")', 'url("버블티_3.png")', 'url("버블티_4.png")', 'url("버블티_5.png")', 'url("버블티_6.png")', 'url("버블티_7.png")', 'url("버블티_8.png")', 'url("버블티_9.png")', 'url("버블티_10.png")', 'url("버블티_11.png")'];

//2. 질문창
//질문 내용 리스트
QuestionList = [
    "버블티 가게에서 새로운 신상 버블티가 나왔다고 하네요! 새로 나온 신상 버블티라 맛이 궁금한데.. 당신은 어떻게 할 건가요?",
    "바쁜 일상 속에 살아가던 당신, 드디어 주말에 시간이 나네요! 당신은 무엇을 할 건가요?",
    "당신은 오랜만에 모임을 갔습니다. 당신은 모임에서 사람들과 대화를 나눌 때....",
    "버블티 가게에서 버블티를 주문하고 나오기까지를 기다리는 중, 당신은 어떤 생각을 하고 있나요?",
    "친구가 내가 전에 갔었던 버블티 가게의 위치를 물어봅니다. 당신은 버블티 가게의 위치를 어떻게 가르쳐 줄 건가요?",
    "당신이 직접 버블티를 만드려고 합니다. 버블티를 만들 때 당신은 어떻게 만들 건가요? <br> (당신은 버블티 가게에서 일하고 있기에 기본적인 버블티 만드는 방법과 필요한 재료를 알고 있습니다.)",
    "친한 친구가 버블티를 만들어서 맛이 어떠냐고 물어봅니다. 내가 버블티를 먹었을 때는 맛이 별로라고 느꼈는데... 그렇다면 당신은 어떻게 대답할 것인가요?",
    "집에 도착했는데 버블티가 식탁 위에 있습니다. 당신은 식탁에 있는 버블티를 보고 무슨 생각이 먼저 드나요?",
    "당신의 버블티 가게에 들어온 신입 직원이 계속 노력한 끝에 버블티 레시피를 다 외웠습니다. 이 직원에게 어떻게 칭찬해줄까요?",
    "집에 가는 길에 새로운 버블티 가게를 발견했습니다!! 가게에서 어떤 버블티가 판매하는지 궁금하여 가보고 싶은데 다음 스케줄이 있습니다. 당신은 어떻게 할 건가요?",
    "버블티 가게에서 일을 하고 있는데 친구들이 가게에 놀러와서 오늘 일이 끝나고 놀자고 합니다. 하지만 가게 일이 끝나고 할 일이 있는데... 당신은 어떻게 할 건가요?",
    "오늘 버블티를 만들려고 준비를 다 했는데, 오늘 도착 예정이었던 타피오카 펄이 내일 집에 도착한다는 지연 문자가 왔습니다. 버블티를 만드려던 당신은 어떻게 할 것인가요?"
];

//3. 버튼
//버튼 질문 내용 리스트
btn1ContextList = [ //E, S, F, P 지수
    "맛이 어떨지 궁금하니까 버블티 가게에서 신상 버블티를 먹고 어떤 맛인지 알고 싶어.",
    "시간이 나는 주말에는 친구들이랑 만나서 놀아야지",
    '"아니 이 버블티가 정말 맛있다니까.." 주로 대화를 이끌어 나간다.',
    '“버블티가 언제 나오지...” 버블티가 언제 나올 지 생각한다.',
    "친구가 지금 있는 곳에서 가는 법을 알려준다.",
    "인터넷에 있는 버블티 레시피를 찾아서 만들래",
    "직접적으로 말하면 친구의 감정이 상할 수 있으므로 돌려서 말한다.",
    "버블티 맛있겠다..",
    "열심히 노력했군요. 외우느라 힘들었을텐데 고생했어요! 노력했을 직원에게 칭찬한다.",
    "다음 스케줄이 있지만 그렇게 중요한 스케줄도 아니고.. 어떤 가게인지 궁금하니까 가봐야겠다.",
    '“사실 할 일이 있긴 한데 다른 날로 옮길 수 있어!” 친구들과 논다.',
    '“음.. 황당하긴 한데 타피오카 펄이 도착하고 나서 다음에 만들지 뭐..” 하면서 준비했던 것들을 치운다.'
];
btn2ContextList = [ //I, N, T, J 지수
    "맛은 궁금하지만 일단 신상 버블티의 후기를 찾아볼래!",
    "집에서 누워있으면서 쉬고 싶어",
    '“오오.. 그 버블티가 정말 맛있구나..” 주로 상대방의 이야기를 듣고 반응해준다.',
    '“내가 버블티 가게에서 일하게 된다면...” 버블티 가게의 주인이 된다는 가정으로 시작하여 상상의 나래를 펼친다.',
    "버블티 가게 주변에 있는 건물을 알려준다.",
    "새로운 재료, 새로운 레시피로 나만의 버블티를 만들어보고 싶어.",
    "친구에게 버블티의 맛이 별로라고 솔직하게 말해준다.",
    "버블티를 누가 사왔나? 버블티가 왜 식탁 위에 있지?",
    "잘하셨어요! 다음에는 이렇게 하면 좋을 것 같아요! 조언을 아끼지 않으며 칭찬한다.",
    "어떤 가게인지 궁금하지만 바로 다음 스케줄이 있어서.. 오늘은 포기해야겠다.",
    '“어.. 나 가게 끝나고 할 일이 있는데... 갑작스럽네..”',
    '“엥..? 오늘 온다고 했던 타피오카 펄이 안온다고..?” 하면서 당황스러워한다.'
];

//버튼 질문 출력하기

//버튼 누를 때마다 점수 적용
var clickValue;
function init(){
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');

    b1.addEventListener('click',clickBtn);
    b1.addEventListener('click',bCilck);

    b2.addEventListener('click',clickBtn);
    b2.addEventListener('click',bCilck);
}

function clickBtn(){
    var queTitle = document.getElementById('qTitle');
    var bg = document.getElementById('bg');
    var queContext = document.getElementById("queContext");

    //질문 문항 숫자 증가
    if (clickValue<12){
        clickValue+=1;
        queTitle.innerHTML = "Question " + clickValue;
        bg.style.backgroundImage = QueBackground[clickValue-2];
    }

    else if (clickValue==12){

    }

    //질문 문항 출력하기
    queContext.innerHTML = QuestionList[clickValue-1];
}

function bCilck(){
    selClickValue+=1;
    var sel1Context = document.getElementById("sel1Context");
    var sel2Context = document.getElementById("sel2Context");
    
    if (selClickValue<12){
        sel1Context.innerHTML = btn1ContextList[selClickValue];
        sel2Context.innerHTML = btn2ContextList[selClickValue];
    }
    else if (selClickValue==12){

    }
} 