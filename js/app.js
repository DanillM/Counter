function setupCounter() {
    const buttons = document.querySelectorAll('.counterBtn');
    let count = 0;
    const historyContent = document.getElementById('historyContent');
    const historySection = document.getElementById('history'); 
    const toggleHistoryButton = document.getElementById('toggleHistory');


    function logHistory(change) {
        const historyEntry = document.createElement('div');
        historyEntry.textContent = `${change}. Current number is: ${count}`;
        

        if (count === 0) {
            historyEntry.style.color = '#333333'; 
        } else if (change.startsWith('+')) {
            historyEntry.style.color = 'green'; 
        } else if (change.startsWith('-')) {
            historyEntry.style.color = 'red';
        }

        historyContent.appendChild(historyEntry);
        historyContent.scrollTop = historyContent.scrollHeight; 
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let change = '';

            switch (this.id) {
                case 'decrease-10':
                    count -= 10;
                    change = '-10';
                    break;
                case 'lower_count':
                    count -= 1;
                    change = '-1';
                    break;
                case 'increase-10':
                    count += 10;
                    change = '+10';
                    break;
                case 'decrease-100':
                    count -= 100;
                    change = '-100';
                    break;
                case 'add-count':
                    count += 1; 
                    change = '+1';
                    break;
                case 'increase-100':
                    count += 100;
                    change = '+100';
                    break;
                case 'decrease-1000':
                    count -= 1000;
                    change = '-1000';
                    break;
                case 'set-to-zero':
                    count = 0; 
                    change = 'Set to 0';
                    break;
                case 'increase-1000':
                    count += 1000;
                    change = '+1000';
                    break;
            }

            updateCounterDisplay(count);
            logHistory(change);
        });
    });


    const insertButton = document.getElementById('insertNumber');

    insertButton.addEventListener('click', function() {
        const specificNumberInput = document.getElementById('specificNumber');
        const specificNumber = parseInt(specificNumberInput.value);

        if (!isNaN(specificNumber)) {
            const change = `Set to ${specificNumber}`;
            count = specificNumber; 
            updateCounterDisplay(count);
            logHistory(change);
        } else {
            alert('Please enter a valid number');
        }

        specificNumberInput.value = ''; 
    });


    const clearHistoryButton = document.getElementById('clearHistory');

    clearHistoryButton.addEventListener('click', function() {
        historyContent.innerHTML = '0'; 
    });

    toggleHistoryButton.addEventListener('click', function() {
        if (historySection.style.display === 'none') {
            historySection.style.display = 'block';
            toggleHistoryButton.textContent = 'Hide History'; 
        } else {
            historySection.style.display = 'none';
            toggleHistoryButton.textContent = 'Show History';
        }
    });
}


function updateCounterDisplay(count) {
    const counter = document.querySelector('#counter');
    counter.textContent = count;

    if (count < 0) {
        counter.style.color = 'red';
    } else if (count > 0) {
        counter.style.color = 'green';
    } else {
        counter.style.color = '#333333'; 
    }
}


setupCounter();
