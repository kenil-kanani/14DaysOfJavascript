const s = document.querySelector(".second");
const m = document.querySelector(".minute");
const h = document.querySelector(".hour");

function timeset() {
    const now = new Date();
    setTimeout(timeset, 1000);
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const secondDegree = (second / 60) * 360;
    const minuteDegree = (minute / 60) * 360;
    const hourDegree = (hour / 12) * 360;

    s.style.transform = `rotate(${secondDegree}deg)`;
    m.style.transform = `rotate(${minuteDegree}deg)`;
    h.style.transform = `rotate(${hourDegree}deg)`;
}
timeset();
