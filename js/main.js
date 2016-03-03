/**
 * Created by Administrator on 2016-02-19.
 */
//weixin
var weixin = function(){
    var m = $('html').hasClass('touch'),
        $tip = $('.tip').eq(1);
    if(!m){
        $('#devinmp').hover(function(){
            $tip.css({'height':'118px'});
        },function(){
            $tip.css({'height':'0'});
        });
    }else if(m){
        $(document).on('click',function(e){
            var h = $tip.height();
            var weixin = e.target.id;
            alert(weixin);
            if((h==0)&&(weixin=='weixin')){
                $tip.css({'height':'118px'});
            }else if(h==118){
                $tip.css({'height':'0'});
            }
        })
    }
};

//qq
var qq = function(){
    var m = $('html').hasClass('touch'),
        $tip = $('.tip').eq(0);
    if(!m){
        $('#qqcard').hover(function(){
            $tip.css({'height':'118px'});
        },function(){
            $tip.css({'height':'0'});
        });
    }else if(m){
        $(document).on('click',function(e){
            var h = $tip.height();
            var qq = e.target.id;
            alert(qq);
            if((h==0)&&(qq=='qq')){
                $tip.css({'height':'118px'});
            }else if(h==118){
                $tip.css({'height':'0'});
            }
        })
    }
};

//项目案例过滤器
var $container = $('#container-sort').imagesLoaded(function () {
    $container.isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
});
$('#filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
});

///////////////////jobs//////////////////////
$('.list-group a').click(function(e){
    e.preventDefault();
    var $this = $(this);
    var change = $this.find('>div').css('display');
    //alert(change);
    if(change=='none'){
        $this.find('i').removeClass('fa-plus').addClass('fa-minus');
    } else{
        $this.find('i').removeClass('fa-minus').addClass('fa-plus');
    }
});