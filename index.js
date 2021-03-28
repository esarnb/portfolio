
$(document).ready(function() {
    console.log("JQuery")
    
    $.getJSON('projects.json', function(data){
        let container = $("#proj-cards-container");
        
        $.each(data.projects, function(i, x){
            container.append(
`
<div class="ui card cards-light">
    <div class="image">
        <img src="/images/test/placeholder_kristy.png">
    </div>
    <div class="content">
        <a class="header">Kristy</a>
    <div class="meta">
        <span>Joined in 2013</span>
    </div>
    <div class="description">
        ${x.desc}
    </div>
    </div>
    <div class="extra content">
        <a href="${x.repo}"> <button> repo </button> </a>
        <a href="${x.live}"> <button> live </button> </a>
    </div>
</div>
`
            )
        });
    }).catch((rejected) => console.log(rejected))
})
