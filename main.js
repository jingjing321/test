/**
 * Created by Administrator on 2016/5/22.
 */
function start(){
    $(".black2").css({display:""});
    $(".black1").css({display:"none"})
}
var content=[["Q2:下面那个外号，你比较喜欢？","A、炮姐","B、萌王","C、兄贵","D、根本听不懂"],
    ["Q3:你最重要的能量来源是什么？","A、铝","B、糖分","C、查克拉","D、这都什么鬼"],
    ["Q4:你最想养什么当宠物？","A、Qb","B、夜夜","C、乔巴","D、你妹"],
    ["Q5:你最想拥有的超能力是什么？","A、Grass","B、变身","C、百宝袋","D、手动再见"],
    ["Q6:外交能力测试，你最常用的是？","A、Prpr","B、2333","C、O(∩_∩)O~~","D、呵呵:-)"],
    ["Q7:你觉得一下那句话三观很正？","A、萌即正义=￣ω￣=","B、黑长直统治世界！！！","C、这么可爱一定是男孩纸！","D、人如果没有梦想，和咸鱼用什么分别？！"],
    ["Q8:如果选一个人去约会，你会选谁？","A、时崎狂三","B、三笠（鞠经纬）","C、小兰","D、Angelababy"],
    ["Q9:哪些人物的坎坷命运最让你有感触？","A、桔梗","B、黄奕","C、金木","D、文天祥"],
    ["Q10:最近你经常听到的话是什么？","A、不会轻易狗带","B、我真的快崩溃了....","C、请收下我的膝盖","D、天啦噜..."]];
var result=[["(*╯3╰)~你的异次元身世竟然是：","萌妹子！","距离萌翻异次元世界，你还差一个百度输入法二次元皮肤！"],
    ["(Sigai!你的异次元身世竟然是：","燃星人！","距离征服异次元世界，你还差一个百度输入法二次元皮肤！"],
    ["好污！你的异次元身世竟然是：","wuli腐！","距离同化掉异次元世界，你还差一个百度输入法二次元皮肤！"],
["简直不敢相信！你的异次元身世竟然是：","地球人！","不要伤心，要进入异次元世界，你还差一个百度输入法二次元皮肤！"]]
var grade=0;
var num=0;
function next(a){
    if(num!=9){
        grade+=a;
        $(".question").text(content[num][0]);
        for(var i=0;i<4;i++){
            $(".answer").eq(i).text(content[num][i+1]);
        }
        num++;
    }
    else{
        $(".black2").css({display:"none"});
        $(".black3").css({display:""});
        if(grade<17){
            $(".result1").text(result[3][0]);
            $(".result2").text(result[3][1]);
            $(".result3").text(result[3][2]);
        }
        else if(grade>=17&&grade<24){
            $(".result1").text(result[2][0]);
            $(".result2").text(result[2][1]);
            $(".result3").text(result[2][2]);
        }
        else if(grade>=24&&grade<31){
            $(".result1").text(result[1][0]);
            $(".result2").text(result[1][1]);
            $(".result3").text(result[1][2]);
        }
        else{
            $(".result1").text(result[0][0]);
            $(".result2").text(result[0][1]);
            $(".result3").text(result[0][2]);
        }
    }

}