var enemies = [
  "Cyril the Cynic",
  "Balda the Bored",
  "Narcissa the Naysayer",
  "Some Internet Trolls",
  "Fear Itself",
  "Feelings of Doom"
];
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
    console.log(hypeCount);
    if (hypeCount < 150) {
        hypeDescription = "You are a little hyped. Keep it up!";
    } else if (hypeCount < 500) {
        hypeDescription = "You are moderately hyped, but you could do better!";
    } else if (hypeCount < 1000) {
        hypeDescription = "You have achieved <span class='gold'>MAXIMUM HYPE!</span>";
    } else if (hypeCount < 1500) {
      hypeDescription = "Apparently you are the most hyped of the <span class='gold'>MAXIMUM HYPED!</span> Stay tuned for more information and keep your clicking fingers ready!";
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
