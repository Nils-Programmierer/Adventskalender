let day;
let month;
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
snowStorm.snowColor = '#FFFFFF';
snowStorm.flakesMaxActive = 180;
snowStorm.useTwinkleEffect = false;
snowStorm.start();
setInterval(date, 60000);
date();



function Open(giftNumber) {
    if (month === 12) {
        if (giftNumber <= day) {
            modalText.textContent = "";
            modalText.style.color = "black";
            document.getElementById("Pic").src = `img/${giftNumber}.jfif`;
            document.getElementById("headline").innerHTML = `${giftNumber}. Türchen`;
            load(giftNumber).then(result => {
                modalText.textContent = result;
            });
            modal.style.display = 'flex';
        } else {
            modalText.textContent = "Dieses Türchen bleibt noch verschlossen!";
            modalText.style.color = "red";
            document.getElementById("Pic").src = `img/wait.png`;
            document.getElementById("headline").innerHTML = `${giftNumber}. Türchen`;
            modal.style.display = 'flex';
        }
    } else {
        modalText.textContent = "Dieses Türchen bleibt noch verschlossen!";
        modalText.style.color = "red";
        document.getElementById("Pic").src = `img/wait.png`;
        document.getElementById("headline").innerHTML = `${giftNumber}. Türchen`;
        modal.style.display = 'flex';
    }
}


function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


async function load(giftNumber) {
    try {
        let response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Fehler beim Laden der JSON-Datei');
        }
        let data = await response.json();

        if (data.hasOwnProperty(giftNumber)) {
            let partner = data[giftNumber];
            if (partner) {
                return partner;
            } else {
                return 'Fehler!';
            }
        } else {
            return 'Fehler!';
        }

    } catch (error) {
        console.error('Fehler:', error);
        return 'Fehler!';
    }
}


function date() {
    let now = new Date();
    day = now.getDate();
    month = now.getMonth() + 1;
}


const audio = document.getElementById("songPlayer");

document.addEventListener("click", () => {
    audio.play().then(() => {
        console.log("Song wird abgespielt.");
    }).catch(error => {
        console.error("Fehler beim Abspielen des Songs:", error);
    });
});


