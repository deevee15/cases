$(document).ready(function() {
	$(function(){
    var get_elid, objects_count, set_left=0;
    var get_el_width=$('.roulette_content_block_roll_1 ul li').width();
    $('#roulette,#get,.roulette_content_block_blackcover').hide();
    objects_count = 16;
    var obj_numbers_c1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    $('.prizes_button,.prizes_mob_button,.header_burger').click(function(){$('#roulette').show(100);});
    $('.roulette_content_block_close,.roulette_content_block_prize').hide();
    $('.roulette_content_block_cover_button').click(function(){
        $('.clone').remove();
        $('#header').hide();
        $('.roulette_content_block_cover').hide();
        setTimeout(function(){
            $('.roulette_content_block_close').show();
        }, 1800);
        var left=0,x=0,y=16;
        var p=Math.random();
        if(p<0.075){left=Math.floor(Math.random() * 510)+17;}
        else if(p>=0.075 && p<0.55){
            x=Math.floor(Math.random() * 5); 
            left=Math.floor(Math.random() * (32 - 29 + 1))+30;
            y=y*x;
            left=left + y;
        }
        else if(p>=0.55 && p<1){ 
            x=Math.floor(Math.random() * 5); 
            left=Math.floor(Math.random() * (19 - 17 + 1))+17;
            y=y*x;
            left=left + y;
        }
        //set_left=5083+(get_el_width*left);
        if(get_el_width==114){set_left=1482+(get_el_width*left);}
        else{set_left=5083+(get_el_width*left);}
        if(set_left>6256 && get_el_width>114){
            var counter=$(".roulette_content_block_roll_1").width()+set_left;
            $(".roulette_content_block_roll_1").css({"width":counter});
        }
        else if(set_left>1824 && get_el_width==114){
            var counter=$(".roulette_content_block_roll_1").width()+set_left;
            $(".roulette_content_block_roll_1").css({"width":counter});
        }
        $(".roulette_content_block_roll_1").animate({
            left : '-'+set_left+'px'
        },1000);
        var obj_added=0;
        function clone(obj){
            $('#c1_el'+obj).clone().appendTo(".roulette_content_block_roll_1 ul");
            obj_added++;
            $('.roulette_content_block_roll_1 ul li:last-child').addClass('clone');
            $('.roulette_content_block_roll_1 ul li:last-child').attr('prize_id',16+obj_added);
        }
        var diff = left - objects_count;
        for(var i=0; i < left+diff; i++){
            for(var z=0; z < objects_count; z++){
                if(obj_added<left) clone(obj_numbers_c1[z]);
            }
        }
        if(get_el_width==114){$('.roulette_content_block_roll_1_light').css({"margin-left":"calc(115px + "+set_left+'px)'});}
        else{$('.roulette_content_block_roll_1_light').css({"margin-left":"calc(420px + "+set_left+'px)'});}
        get_elid=$('.roulette_content_block_roll_1 ul li:nth-last-child(-n+2)').attr('el');
        setTimeout(function(){
            var names=['1 час игры за ПК','полчаса игры за PS','полчаса игры за ПК','AK-47 Cartel','AK-47 Frontside Misty','AK-47 Redline','M4A4 - Dragon King',
                      'M4A1-S Hyper Beast','AK-47 Point Disarray','USP-S Cortex','Aug Storm','UMP-45 Labyrinth','2 часа игры за PS','1 час игры за PS',
                      '2 часа игры за ПК','1 час игры за ПК'];
            switch(get_elid){
                case '1': $('.roulette_content_block_prize_t1 p:last-child span').text(names[0]); break;
                case '2': $('.roulette_content_block_prize_t1 p:last-child span').text(names[1]); break;
                case '3': $('.roulette_content_block_prize_t1 p:last-child span').text(names[2]); break;
                case '4': $('.roulette_content_block_prize_t1 p:last-child span').text(names[3]); break;
                case '5': $('.roulette_content_block_prize_t1 p:last-child span').text(names[4]); break;
                case '6': $('.roulette_content_block_prize_t1 p:last-child span').text(names[5]); break;
                case '7': $('.roulette_content_block_prize_t1 p:last-child span').text(names[6]); break;
                case '8': $('.roulette_content_block_prize_t1 p:last-child span').text(names[7]); break;
                case '9': $('.roulette_content_block_prize_t1 p:last-child span').text(names[8]); break;
                case '10': $('.roulette_content_block_prize_t1 p:last-child span').text(names[9]); break;
                case '11': $('.roulette_content_block_prize_t1 p:last-child span').text(names[10]); break;
                case '12': $('.roulette_content_block_prize_t1 p:last-child span').text(names[11]); break;
                case '13': $('.roulette_content_block_prize_t1 p:last-child span').text(names[12]); break;
                case '14': $('.roulette_content_block_prize_t1 p:last-child span').text(names[13]); break;
                case '15': $('.roulette_content_block_prize_t1 p:last-child span').text(names[14]); break;
                case '16': $('.roulette_content_block_prize_t1 p:last-child span').text(names[15]); break;
                default: alert('error'); break;
            }
            $('.roulette_content_block_blackcover').show(200);
            $('.roulette_content_block_arrows').css({"z-index":"2"});
            $('.roulette_content_block_prize').show(200);
        }, 1200);
        $('.roulette_content_block_close').click(function(){
            $('#roulette').hide(100);
            if(get_el_width==114){$('#header').show();}
        });
    });
    $('.roulette_content_block_prize_button').click(function(){
        $('#roulette').hide(100);
        $('#get').show(100);
        $('body').css({"overflow-y":"hidden"});
        var code=['1hgpc','30mgps','30mgpc','akcrtl','akfrnmst','akrdln','madrkng','mashprbst','akpntdsr','uscrtx','asrt','mlbrt','2hgps','1hgps','2hgpc','1hgpc'];
        var time_id='YY';
        switch(get_elid){
            case '1': $('.get_promocode_code').text('FREECASE'+time_id+code[0]); break;
            case '2': $('.get_promocode_code').text('FREECASE'+time_id+code[1]); break;
            case '3': $('.get_promocode_code').text('FREECASE'+time_id+code[2]); break;
            case '4': $('.get_promocode_code').text('FREECASE'+time_id+code[3]); break;
            case '5': $('.get_promocode_code').text('FREECASE'+time_id+code[4]); break;
            case '6': $('.get_promocode_code').text('FREECASE'+time_id+code[5]); break;
            case '7': $('.get_promocode_code').text('FREECASE'+time_id+code[6]); break;
            case '8': $('.get_promocode_code').text('FREECASE'+time_id+code[7]); break;
            case '9': $('.get_promocode_code').text('FREECASE'+time_id+code[8]); break;
            case '10': $('.get_promocode_code').text('FREECASE'+time_id+code[9]); break;
            case '11': $('.get_promocode_code').text('FREECASE'+time_id+code[10]); break;
            case '12': $('.get_promocode_code').text('FREECASE'+time_id+code[11]); break;
            case '13': $('.get_promocode_code').text('FREECASE'+time_id+code[12]); break;
            case '14': $('.get_promocode_code').text('FREECASE'+time_id+code[13]); break;
            case '15': $('.get_promocode_code').text('FREECASE'+time_id+code[14]); break;
            case '16': $('.get_promocode_code').text('FREECASE'+time_id+code[15]); break;
            default: alert('error'); break;
        }
    });
    $('.get_close').click(function(){
        $('#get').hide(100);
        if(get_el_width==114){$('#header').show();}
        $('body').css({"overflow-y":"auto"});
    });
    });
});