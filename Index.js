var count=0;
var run=0;
var oprun=0;

function runScored(Score){
    var yourScore, botScore;
    yourScore=Score.id;
    botScore=botScoreGen();
    frontOnClick(yourScore,botScore);
    if(count==0){
        firstInning(yourScore,botScore);
    }
    else if(count==1){
        secondInning(yourScore,botScore);
    }


}


function botScoreGen(){
    var num=Math.floor(Math.random()*6);
    return ['one','two','three','four','five','six'][num];
}

function frontOnClick(yourImgid,botImgid){
    var x=document.getElementById('res1');
    x.src=document.getElementById(yourImgid).src;
    x.style.borderRadius="5px";

    var y=document.getElementById('res2');
    y.src=document.getElementById(botImgid).src;
    y.style.borderRadius="5px";
}


function firstInning(cd,ef){
    if(cd!=ef){
        var database1={
            'one':1,
            'two':2,
            'three':3,
            'four':4,
            'five':5,
            'six':6
        }
        run=run+database1[cd];
        let x=document.getElementById('total');
        x.innerHTML=run;
    }
    else{
        count=1;
        let img1=document.getElementById("banner");
        img1.src="banner/Out.jpg";
        img1.style.borderRadius="10px";
        var now=document.getElementById('batting');
        now.src=document.getElementById("bowling").src;
        var now2=document.getElementById('bowling');
        now2.src="banner/batting.png";
    }
}

function secondInning(ys,bs){

    let noimg=document.getElementById("banner");
    noimg.src="banner/wicket.png";

    if(ys!=bs){
        var database={
            'one':1,
            'two':2,
            'three':3,
            'four':4,
            'five':5,
            'six':6
        }
        oprun=oprun+database[bs];
        let y=document.getElementById('total2');
        y.innerHTML=oprun;

        if(oprun>run){
            count=2;
            let img2=document.getElementById("banner");
            img2.src="banner/Lost.jpg";
            img2.style.borderRadius="5px"
            replaygame();
        }
    }
    else{
        if(run>oprun){
            count=2;
            let img3=document.getElementById("banner");
            img3.src="banner/Won.jpg"
            replaygame();
        }
        else{
            count=2;
            let img3=document.getElementById("banner");
            img3.src="banner/Tied.jpg";
            replaygame();
        }
    }

}

function replaygame(){
    var btn=document.getElementById('playagain');
    btn.style.display="block";

}

function refresh(){
    location.reload();
}





