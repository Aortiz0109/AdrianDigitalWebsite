$(document).ready(function(){
    //currentyear
    const currentYear = new Date().getFullYear();
    $("#currentYear").text(currentYear);
    
    //mobile menu toggling
    $("#menu_icon").click(function(){
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });

    //Back up button and progress bar
    const showOnPx = 100;
    const offset = 0;
    const backToTopButton = $(".back-up")[0];
    const pageProgressBar = $(".progress-bar")[0];

    const scrollContainer = () => document.documentElement || document.body;

    const goToTop = () => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };
    
    $(document).scroll(() => {
        const scrolledPercentage =
            ((scrollContainer().scrollTop - offset ) /
            (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
      
        pageProgressBar.style.width = `${scrolledPercentage}%`;
      
        backToTopButton.style.display = scrollContainer().scrollTop > showOnPx ? "block" : "none";
    });
      
    $(backToTopButton).click(goToTop);

    //Tooltip
    $("a").mouseover(function(){
        const attr_title = $(this).attr("data-title");

        if( attr_title === undefined || attr_title === "") return false;

        $(this).after('<span class="tooltip"></span>');

        const tooltip = $(".tooltip");
        tooltip.append($(this).data('title'));

        const tipwidth = tooltip.outerWidth();
        const a_width = $(this).width();
        const a_height = $(this).height() + 3 + 4;

        //if the tooltip width is smaller than the a/link/parent width
        if (tipwidth < a_width){
            tooltip.outerWidth(a_width);
        }

        const tipPosition = `-${(tipwidth - a_width)/2}px ${a_height}px`;
        tooltip.css({
            'left': tipPosition.split(' ')[0],
            'bottom': tipPosition.split(' ')[1]
        }).stop().animate({
            opacity: 1
        }, 200);
    });

    $("a").mouseleave(function(){
        $(".tooltip").remove();
    });
});