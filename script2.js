const timeElement = document.getElementById('time');
        const startBtn = document.getElementById('startBtn');
        const repeatBtn = document.getElementById('repeatBtn');
        const messageElement = document.getElementById('message');

        let minutes = 0;
        let seconds = 0;

        function updateTimer() {
            timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        function showMessage(message) {
            messageElement.textContent = message;
        }

        function startTimer() {
            startBtn.disabled = true;
            repeatBtn.disabled = false;
            messageElement.textContent = '';
            const interval = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes % 5 === 0) {
                        showMessage(getRewardMessage(minutes));
                    }
                }
                updateTimer();
                if (minutes === 5) {
                    clearInterval(interval);
                    showMessage('Vous avez travaillé 5 minutes. Félicitations, vous êtes l\'arbre qui ne ploie pas devant la tâche à abattre ✅!');
                    repeatBtn.disabled = false;
                }
            }, 1000);
        }

        function getRewardMessage(minutes) {
            switch (minutes) {
                case 5:
                    return 'De toute semence naît une racine 🍀!';
               
            }
        }

        startBtn.addEventListener('click', startTimer);

        repeatBtn.addEventListener('click', function () {
            minutes = 0;
            seconds = 0;
            updateTimer();
            messageElement.textContent = '';
            startBtn.disabled = false;

        });
