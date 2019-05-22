$( document ).ready(function() {
    // handle hotkey support
    $(document).keypress(function(e) {
        var tag = e.target.tagName.toLowerCase();

        if (e.key == "Enter") {
            $(".hotkey-enter").click();
        } else if (tag == 'input' || tag == 'textarea') {
            // if it's an input or textarea stop all events and return
            e.stopPropagation();
            return;
        }
        else {
            var findStr = '(' + e.key.toUpperCase() + ')';

            $('.actionLetter:contains("'+findStr+'")').each(function() {
                var link = $( this ).parent("a").get( 0 );
                link.click();
            });
        }
    });

    $("#hype").click(function(){
       showHype();
    });
});

function showHype() {
    let gold =  Math.floor((Math.random() * 90) + 10);
    let exp =  Math.floor((Math.random() * 50) + 10);
    $("#hype-gold").text(gold + " gold");
    $("#hype-exp").text(exp + " hype!");
    $("#hype-container").show();
}