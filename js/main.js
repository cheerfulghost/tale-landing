var enemies = ["Cyril the Cynic", "Balda the Bored", "Narcissa the Naysayer", "Some Internet Trolls"];
var hypeCount = 0;

$(document).ready(function() {
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

    $("#hype").click(function(e){
        e.preventDefault();
       showHype();
    });
});

function showHype() {
    let gold =  Math.floor((Math.random() * 90) + 10);
    let hype =  Math.floor((Math.random() * 50) + 10);
    let damage = Math.floor((Math.random() * 50) + 10);
    let thisEnemyNum = Math.floor((Math.random() * enemies.length));
    let thisEnemy = enemies[thisEnemyNum];
    let hypeDescription = '';
    hypeCount += hype;
    if (hypeCount < 100) {
        hypeDescription = "You are a little hyped. Keep it up!";
    } else if (hypeCount < 250) {
        hypeDescription = "You are moderately hyped, but you could do better!";
    } else {
        hypeDescription = "You have achieved <span class='gold'>MAXIMUM HYPE!</span> Stay tuned for more info!";
    }
    $("#hype-gold").text(gold + " gold");
    $("#hype-exp").text(hype + " hype!");
    $("#damage").text(damage);
    $(".enemy-name").each(function() {
       $(this).text(thisEnemy);
    });
    $("#hype-level").html(hypeDescription);
    $("#hype-container").show();
}