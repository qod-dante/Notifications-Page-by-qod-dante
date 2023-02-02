const markAll = document.getElementById('mark-all');

function markAsRead() {
    let redMarker = document.querySelectorAll('.unread-indicator');
    for (let i = 0; i < redMarker.length; i++) {
        redMarker[i].style.display = "none";
    }

    let counter = document.getElementById('notification-counter');
    
    let unreads = document.querySelectorAll('.unread-msg');
    for (let i = 0; i < unreads.length; i++) {
        unreads[i].style.backgroundColor = "#ffffff";
    }

    const rootStyle = document.querySelector(':root');
    let rootStyleC = getComputedStyle(rootStyle);
    let rootBlue = rootStyleC.getPropertyValue('--blue');
    let rootWhite = rootStyleC.getPropertyValue('--white');

    counter.innerHTML = "0";
    counter.style.color = rootBlue;
    counter.style.backgroundColor = rootWhite;
    counter.style.border = "1px solid hsl(219, 85%, 26%)";
    counter.style.borderRadius = "5px";
}
