const linksPopUp = document.getElementById("pop-up-links");
const shareIcons = document.querySelectorAll('.arrow-icon');
const arrowIcon = document.getElementById('my-arrow-icon');
const circleBackground = document.getElementById('circle-background');

const iconColorActive = getComputedStyle(document.documentElement).getPropertyValue('--c-white').trim();
const circleColorActive = getComputedStyle(document.documentElement).getPropertyValue('--c-grey-500').trim();
const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--c-grey-500').trim();
const circleColor = getComputedStyle(document.documentElement).getPropertyValue('--c-grey-200').trim();

let linksIndex = 0;


shareIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (linksIndex === 0 ){
            linksIndex++; 
            circleBackground.style.backgroundColor = circleColorActive;
            arrowIcon.style.color = iconColorActive
            linksPopUp.style.display = 'flex'; // show pop-up


        }
        else {
            linksIndex = 0;
            linksPopUp.style.display = 'none'
            circleBackground.style.backgroundColor = circleColor;
            arrowIcon.style.color = iconColor;
        }
    })
})