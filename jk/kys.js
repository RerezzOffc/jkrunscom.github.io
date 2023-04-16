function getUserInfo() {
    var userid = $("#userid").val();
    var url = "https://discord.com/api/users/" + userid;


    
    const authorization = d + s + h + k + g + t + a;
    
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            "Authorization": authorization
        },
        success: function(data) {
var username = data.username + "#" + data.discriminator;
var avatar = "https://cdn.discordapp.com/avatars/" + data.id + "/" + data.avatar + (data.avatar.startsWith("a_") ? ".gif" : ".png");
var banner = data.banner ? "https://cdn.discordapp.com/banners/" + data.id + "/" + data.banner + (data.banner.startsWith("a_") ? ".gif" : ".png") + "?size=1024" : "";
var bannerColor = data.banner_color ? "#" + data.banner_color.toString(16) : "";
var creationDate = new Date(data.id / 4194304 + 1420070400000);
var now = new Date();
var diff = now - creationDate;
var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
var days = Math.floor((diff - (years * 1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
var creationDateString = creationDate.toUTCString().replace("GMT", "UTC");
var badges = data.public_flags;
var badgeList = "";
if (badges & 1) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/5e74e9b61934fc1f67c65515d1f7e60d.png' alt='Discord Employee' class='badge' title='Discord Employee'>";
}
if (badges & 2) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/3f9748e53446a137a052f3454e2de41e.png' alt='Discord Partner' class='badge' title='Discord Partner'>";
}
if (badges & 4) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png' alt='HypeSquad Events' class='badge' title='HypeSquad Events'>";
}
if (badges & 8) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png' alt='Bug Hunter Level 1' class='badge' title='Bug Hunter Level 1'>";
}
if (badges & 64) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png' alt='House of Bravery' class='badge' title='House of Bravery'>";
}
if (badges & 128) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png' alt='House of Brilliance' class='badge' title='House of Brilliance'>";
}
if (badges & 256) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png' alt='House of Balance' class='badge' title='House of Balance'>";
}
if (badges & 512) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png' alt='Early Supporter' class='badge' title='Early Supporter'>";
}
if (badges & 16384) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png' alt='Bug Hunter Level 2' class='badge' title='Bug Hunter Level 2'>";
}
if (badges & 131072) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png' alt='Early Verified Bot Developer' class='badge' title='Early Verified Bot Developer'>";
}
if (badges & 262144) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png' alt='Moderator Programs Alumni' class='badge' title='Moderator Programs Alumni'>";
}
if (badges & 4194304) {
badgeList += "<img src='https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png' alt='Active Developer' class='badge' title='Active Developer'>";
}
var userinfo = "<div class='user-info'>";
userinfo += "<div class='right-column'>";
userinfo += "<img src='" + avatar + "' alt='Avatar' class='avatar' onclick='downloadImage(\"" + avatar + "\")'>";
if (banner) {
userinfo += "<img src='" + banner + "' alt='Banner' class='banner' onclick='downloadImage(\"" + banner + "\")'>";
}
userinfo += "</div>";
userinfo += "<div class='left-column'>";
if (badges) {
badgeList = "<div class='badge-container'>" + badgeList + "</div>";
userinfo += "<p>" + badgeList + "</p>";
}
userinfo += "<p><b><i class='fas fa-user'></i> Username:</b> <span style='color: #e49aff;'>" + username + "</span></p>";
userinfo += "<p><b><i class='fas fa-hashtag'></i> User ID:</b> <span style='color: #9ab8ff;'>" + userid + "</span></p>";
userinfo += "<p><b><i class='fas fa-asterisk'></i> Account Age:</b> <span style='color: #81c886;'>" + years + " year" + (years > 1 ? "s" : "") + ", " + days + " day" + (days > 1 ? "s" : "") + "</span></p>";
userinfo += "<p><b><i class='fas fa-calendar-plus'></i> Creation Date:</b> <span style='color: #fdfd96;'>" + creationDateString + "</span></p>";
userinfo += "</div>";
userinfo += "</div>";
$("#userinfo").html(userinfo);
},
        error: function(xhr, status, error) {
            alert("Error: " + xhr.responseText);
        }
    });
}