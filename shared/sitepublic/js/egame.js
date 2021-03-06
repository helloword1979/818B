
var edata = new Object();

/**
 * [load_bravado_link description]
 * @param  {[string]} code   游戏ID
 * @param  {[string]} g_type 游戏所属类型 ag mg
 * @param  {[number]} sw     试玩 0 1
 */
function load_bravado_link(code, g_type,sw) {
    var Url = new Array();
    Url['mg'] = siteGurl+"/index.php/games/Logingame/index?gameid=" + code + "&g_type=" + g_type;
    Url['ag'] = siteGurl+"/index.php/games/Logingame/index?gameid=" + code + "&g_type=" + g_type;
    Url['bbin'] = siteGurl+"/index.php/video/login?g_type=bbin";
    Url['pt'] = siteGurl+"/index.php/games/Logingame/loginpt?gameid=" + code + "&g_type=" + g_type;
    Url['eg'] = siteGurl+"/index.php/games/Logingame/index?gameid=" + code + "&g_type=" + g_type + "&sw=" + sw;
    Url['gpi'] = siteGurl+"/index.php/games/Logingame/index?gameid=" + code + "&g_type=" + g_type;
    Url['gd'] = siteGurl+"/index.php/games/Logingame/index?gameid=" + code + "&g_type=" + g_type;
    Url['hb'] = siteGurl+"/index.php/games/Logingame/index?gameid=" + code + "&g_type=" + g_type;
    Url['gg'] = siteGurl+"/index.php/games/Logingame/index?gameid=" + code + "&g_type=" + g_type;

    if (userid =="") {
        zhuModal.login();
    }else{
        window.open(Url[g_type], '_blank', 'width=1000,height=800,top=0,left=0,status=no,toolbar=no,scrollbars=yes,resizable=no,personalbar=no');
    }

}
//试玩
function demo_link(code, g_type,gcode) {
    window.open(siteGurl+"/index.php/games/Logingame/"+gcode+"Demo?gameid=" + code + "&g_type=" + g_type, '_blank', 'width=1000,height=800,top=0,left=0,status=no,toolbar=no,scrollbars=yes,resizable=no,personalbar=no');
}
//點擊后選中樣式
function setTab(e) {
    $('.off').removeClass('off');
    $('#one' + e).addClass('off');
}
/************************************ template *************************************/
function GetWHhtml(whcontent) { //维护
    var games = '';
    games += "<h1 style='margin-left:20px;font-size:64px;'>此游戏正在维护，请稍后访问······</h1><br/>";
    games += "<h1 style='margin-left:20px;font-size:64px;'>"+whcontent+"</h1>";
    $('#ul_1,#con_one_1 div.search').hide();
    $('#xxoo').remove();
    $('#page_navigation>.btndiv').html('');
    $('.games_menu').html(games);
}
function GetEGhtml(e) {
    var games = '';
    $.each(e,function(i, v) {
        games += '<div class="video-bg"><div class="video-tit-bg"><span class="video-tit-col">'+v.name+'</span></div><div class="video-con-bg"><div class="video-logo"><a href="javascript:;"><img src="/public/images/dzi/pk/'+v.image +'" style="left: 0px;"></a></div><div class="video-btn" style="top: 0px;"><a href="javascript:demo_link(\'' + v.gameid + '\', \'eg\', \'Eg\');" class="video-sw">免费试玩</a><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'eg\',1);" class="video-go">开始游戏</a></div></div></div>';
    });
    return games;
}
function GetMGhtml(e) {
    var games = '<ul id="gamelist">';
    $.each(e,function(i, v) {
        games += '<li><div class="game_text" id="'+ v.gameid +'">'+ v.name +'</div><div class="game_logo">' +
            '<a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'mg\');">' +
            '<img src="/public/images/dzi/mg/'+ v.image +'"></a></div></li>';
    });
    games += '</ul>';
    return games;
}
function GetAGhtml(e) {
    var games = '<div style="margin-bottom:20px;"><a href="javascript:load_bravado_link(\'6\', \'ag\');">' +
        '<img src="/public/images/dzi/ag/byw_2.gif" width="1000" /></a></div><ul id="ajax-content" style="display: block;">';
    $.each(e,function(i, v) {
        games += '<li class="game_item" style="display: list-item;"><div class="game_title"><div class="game_title_text">'+v.name+'</div><span class="game_star"><a class="star_favor" href="javascript:;"></a></span><div class="clear"></div></div><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'' + v.type + '\');"><img src="/public/images/dzi/ag/'+v.image+'"></a><a class="enter-game" href="javascript:load_bravado_link(\'' + v.gameid + '\', \'ag\');" title="进入游戏"></a><div class="clear"></div></li>';
    });
    games += '</ul>';
    return games;
}
function GetBBINhtml(e) {
    var games = '<div style="padding-left:10px">';
    $.each(e,function(i, v) {
        games += '<div class="game_bbin"><div class="bbin_bg"><div class="bbin_img"><a class="img_bg"><img src="/public/images/dzi/bbin/'+v.image+'" /></a><div class="bbin_tit"><h3>'+ v.name +' </h3></div></div><div class="bbin_hide"><div class="bbin-game-ctl-links"><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'bbin\');" class="bbin_jinru">进入游戏</a><a href="javascript:opengeme(\'/video/rule.html\');" class="bbin_guize">规则说明</a><a href="javascript:window.open(\'/shared/download/download.html\',\'\',\'width=1040,height=706,fullscreen=1,scrollbars=0,location=no\');" class="bbin_shuom">下载专区</a></div></div></div></div>';
    });
    games += '</div>';
    return games;
}
function GetPThtml(e) {
    var games = '';
    $.each(e,function(i, v) {
        games += '<div class="games_bravado_container"><div class="games"><div class="image"><img src="/public/images/dzi/pt/'+v.image+'"></div><div class="name"><div class="opacity_content"><div class="opacity_background"></div><div class="opacity_content"><div>'+ v.name +'</div></div></div></div><div class="game_button_play" ><div class="game_button_play_bg"><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'pt\');">立即游戏 </a></div></div><div class="game_button_try"><div class="game_button_try_bg"><a href="javascript:demo_link(\'' + v.gameid + '\', \'pt\', \'Pt\');">立即试玩 </a></div><div class="game_button_play_bg"><a href="http://cdn.fruitfarm88.com/generic/d/setupglx.exe" target=\'_blank\'>客户端下载 </a></div></div></div></div>';
    });
    return games;
}
function GetGPIhtml(e) {
    var games = '';
    $.each(e,function(i, v) {
        games += '<div class="games_bravado_container"><div class="gamesgpi" id="' + v.gameid + '"><div class="image"><img src="/public/images/dzi/gpi/'+ v.image +'"></div><div class="name"><div class="opacity_content"><div class="opacity_background"></div><div class="opacity_content"><div>'+ v.name +'</div></div></div></div><div class="game_button_play" ><div class="game_button_play_bg"><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'gpi\');">立即游戏 </a></div></div><div class="game_button_try"><div class="game_button_try_bg"><a href="javascript:opengeme(\'/video/rule.html\');">游戏规则 </a></div></div></div></div>';
    });
    return games;
}
function GetGDhtml(e) {
    var games = '';
    $.each(e,function(i, v) {
        //games += '<div class="games_bravado_container"><div class="gamesgpi" id="' + v.gameid + '"><div class="image"><img src="/public/images/dzi/gpi/'+ v.image +'"></div><div class="name"><div class="opacity_content"><div class="opacity_background"></div><div class="opacity_content"><div>'+ v.name +'</div></div></div></div><div class="game_button_play" ><div class="game_button_play_bg"><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'gpi\');">立即游戏 </a></div></div><div class="game_button_try"><div class="game_button_try_bg"><a href="javascript:opengeme(\'/video/rule.html\');">游戏规则 </a></div></div></div></div>';
    });
    return games;
}
function GetHBhtml(e) {
    var games = '';
    $.each(e,function(i, v) {
        //games += '<div class="games_bravado_container"><div class="gamesgpi" id="' + v.gameid + '"><div class="image"><img src="/public/images/dzi/gpi/'+ v.image +'"></div><div class="name"><div class="opacity_content"><div class="opacity_background"></div><div class="opacity_content"><div>'+ v.name +'</div></div></div></div><div class="game_button_play" ><div class="game_button_play_bg"><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'gpi\');">立即游戏 </a></div></div><div class="game_button_try"><div class="game_button_try_bg"><a href="javascript:opengeme(\'/video/rule.html\');">游戏规则 </a></div></div></div></div>';
    });
    return games;
}
function GetGGhtml(e) {
    var games = '';
    $.each(e,function(i, v) {
        games += '<div class="games_bravado_container"><div class="ggfish-image"><a href="javascript:load_bravado_link(\'' + v.gameid + '\', \'gg\');"><img src="/public/images/dzi/gg/'+ v.image +'"></a></div></div>';
    });
    return games;
}

/*********************** get game data **************************/
function getdata(gtype) {
    $('#tab1').css('position','relative');
    if(gtype == 'GG') {$('#ul_1,#con_one_1 div.search').hide();}
    $.ajax({
        type: 'GET',
        url: '/index.php/Index/egame',
        data: 'type='+gtype,
        beforeSend: function(){
            $('div#tab1').prepend('<div id="xxoo"><img src="/public/images/dzi/ajax-loader-white.gif" id="xxoo1" width="150" height="150"/></div>');
            $('#xxoo').css({
                padding:        0,
                margin:         0,
                width:          '100%',
                height:         '100%',
                top:            '0',
                left:           '0',
                textAlign:      'center',
                color:          '#000',
                border:         'none',
                "position":     "absolute",
                "z-index":      1000,
                "opacity":      0.7,
                "background-color": "#000000"
            });
            $('#xxoo1').css({'margin-top': '23%'});
        },
        dataType: 'json',
        success: function(msg){
            edata = msg['data'];
            if (msg['wh'].is_wh == '1') { //维护
                GetWHhtml(msg['wh'].content);
                return false;
            }else if(gtype != 'GG'){$('#ul_1,#con_one_1 div.search').show();}

            var top = '<li><a href="javascript:;" class="active" style="width: 94px;" onclick="GetTopGame(0);">所有游戏</a></li>'+
                '<li><a href="javascript:;" style="width: 94px;" onclick="GetTopGame(1);" class="">拉霸</a></li>'+
                '<li><a href="javascript:;" style="width: 94px;" onclick="GetTopGame(2);" class="">桌面游戏</a></li>'+
                '<li><a href="javascript:;" style="width: 94px;" onclick="GetTopGame(3);" class="">视频扑克</a></li>'+
                '<li><a href="javascript:;" style="width: 94px;" onclick="GetTopGame(4);" class="">其它游戏</a></li>';
            $('#ul_1').html(top);
            $('#etype').val(msg['gty'].typeOf);
            $('#xxoo').remove();
            $('#tab1').css('position','static');
            GetEgamePage(1);
        }
    });
}

//分頁
function GetEgamePage(page,egameD){
    if(!arguments[1]) egdata = edata;
    else egdata = egameD;
    var pagesize = 24;
    var games = "";
    var totleNum = Number(egdata.length);          //总条数
    if (totleNum < 1) {
        games = "<h2 style='margin-left:20px;font-size:18px;'>此分类暂无数据</h2><br/><h3 style='margin-left:20px;font-size:18px;'>敬请期待！</h3>";
        $('.games_menu').html(games);
        return false;
    }
    var game = new Array();
    var PageHtml = "";
    var offset = (page-1)*pagesize;                     //偏移量
    var EndNum = 0;                                //key值
    var type = $('#etype').val();
    var totlePage = Math.ceil(totleNum/pagesize);      //总页数
    if (page < 1 || page > totlePage) {alert('页数错误！');return false;}
    if(totleNum < pagesize || page == totlePage) EndNum = totleNum;
    else if(page < totlePage) EndNum = offset+pagesize;
    game = egdata.slice(offset, EndNum);
    games = eval('Get'+type+'html(game)');
    for (var i = 1; i <= totlePage; i++) {
        if (page == i) {
            PageHtml += '<li class="Dz-btn" style="background:#a42919">'+i+'</li>';
        }else{
            PageHtml += '<li class="Dz-btn" onclick="eval(GetEgamePage('+i+',egdata))">'+i+'</li>';
        }
    }
    $('.games_menu').html(games);
    $('#page_navigation>.btndiv').html(PageHtml);
    HoverEvent();

}

// 遊戲分類  如：拉霸
function GetTopGame(top) {
    $('.active').removeClass('active');
    $('#ul_1>li').eq(top).find("a").addClass("active");
    var game = new Array();
    if (top == 0) {
        GetEgamePage(1);
        return false;
    }
    $.each(edata, function (index, item) {
        if (item.topid == top) {
            game.push(edata[index]);
        }
    });
    GetEgamePage(1,game);
}

//遊戲搜索
function gsearch(keywords) {
    var game = new Array();
    $.each(edata, function (index, content) {
        var key = content.name;
        if (key.indexOf(keywords) + 1 > 0) {
            game.push(edata[index]);
        }
    });
    if (game.length == 0) {
        $('.games_menu').html("<h3 style='margin-left:20px;font-size:18px;'>没有搜索到相关游戏</h3>");
    }else GetEgamePage(1,game);
}

//绑定 hover 事件
function HoverEvent() {
    $(".games_menu div.games_bravado_container").each(function(i){
        $(this).mouseover(function(){
            $(this).find("div.game_button_play").show();
            $(this).find("div.game_button_try").show();
        }).mouseout(function(){
            $(this).find("div.game_button_play").hide();
            $(this).find("div.game_button_try").hide();
        });
    });

    $(".video-con-bg").mousemove(function(){
        $(this).find('img').css("left" , "-145px");
        $(this).find(".video-btn").css("top" , "-50px");
    });
    $(".video-con-bg").mouseout(function(){
        $(this).find('img').css("left" , "0");
        $(this).find(".video-btn").css("top" , "0");
    });
}

//获取电子标题
function egameTitle(Ttype){
    var eTitle = '';
    if (Ttype == "AG") {
        eTitle = Ttype + '电子/捕鱼';
    }else if (Ttype == "GG") {
        eTitle = Ttype + '捕鱼';
    }else{
        eTitle = Ttype + '电子';
    }
    $("#etitle-"+Ttype).html(eTitle);
}



//標題自動寬度
$(function(){
    var liwidth = (1000-12) / $('.divgmenu>.ul_ul>li').length;
    $('.divgmenu>.ul_ul>li').width(liwidth);

    //輪播
    var $index = 0;
    var $exdex = 0;
    $(".egamechoose span").mouseover(function() {
        $index = $(this).index();
        $(".egamechoose span").eq($index).addClass("egamered").siblings().removeClass("egamered");
        if ($index > $exdex) {
            next();
        } else if ($index < $exdex) {
            pre();
        }
        return $exdex = $index;
    });
    $(".egamenext").click(function() {
        $index++;
        if ($index > 4) {
            $index = 0
        }
        $(".egamechoose span").eq($index).addClass("egamered").siblings().removeClass("egamered");
        next();
        return $exdex = $index;
    });
    $(".egamepre").click(function() {
        $index--;
        if ($index < 0) {
            $index = 4
        };
        $(".egamechoose span").eq($index).addClass("egamered").siblings().removeClass("egamered");
        pre();
        return $exdex = $index;
    });
    var atime = setInterval(function() {
            $(".egamenext").click();
        },
        5000);
    function next() {
        $(".egamebanner a").eq($index).stop(true, true).css("left", "100%").animate({
            "left": "0"
        });
        $(".egamebanner a").eq($exdex).stop(true, true).css("left", "0").animate({
            "left": "-100%"
        });
    }

    function pre() {
        $(".egamebanner a").eq($index).stop(true, true).css("left", "-100%").animate({
            "left": "0"
        });
        $(".egamebanner a").eq($exdex).stop(true, true).css("left", "0").animate({
            "left": "100%"
        });
    }

});