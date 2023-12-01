// Retrieve user data from local storage
const user = JSON.parse(localStorage.getItem('user'));

// Display welcome message and email address if user is logged in
if (user && user.username && user.email) {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.innerHTML = `Welcome, ${user.username}!`;

    const emailAddress = document.getElementById('email-address');
    emailAddress.innerHTML = `Email: ${user.email}`;
}

function openSettings() {
    window.location.href = 'settingspage.html'; 
}

function openCalculator() {
    document.getElementById('billing-popup').style.display = 'block';
}

function closeCalculator() {
    document.getElementById('billing-popup').style.display = 'none';
}

function calculateBilling() {
    // Get input values
    const currentReading = parseFloat(document.getElementById('current-reading').value);
    const previousReading = parseFloat(document.getElementById('previous-reading').value);
    const kilowatts = parseFloat(document.getElementById('kilowatts').value);

    // Calculate Total Reading and Total Cost
    const totalReading = currentReading - previousReading;
    const totalCost = totalReading * kilowatts;

    // Display results
    const resultsDiv = document.getElementById('billing-results');
    resultsDiv.innerHTML = `<p>Total Reading (TR): ${totalReading}</p>`;
    resultsDiv.innerHTML += `<p>Total Cost (TC): ${totalCost}</p>`;
}

let currentDate = new Date();

        function openCalendar() {
            document.getElementById('calendar-popup').style.display = 'block';
            updateCalendar();
        }

        function closeCalendar() {
            document.getElementById('calendar-popup').style.display = 'none';
        }

        function updateCalendar() {
            console.log('Updating calendar...');
            const currentMonthYearElement = document.getElementById('current-month-year');
            currentMonthYearElement.innerText = `${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;
            console.log('Current month-year element:', currentMonthYearElement);

            const calendarDays = document.getElementById('calendar-days');
            calendarDays.innerHTML = '';

            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

            for (let i = 1; i <= daysInMonth; i++) {
                const dayElement = document.createElement('div');
                dayElement.innerText = i;
                dayElement.classList.add('calendar-day');
                calendarDays.appendChild(dayElement);
            }
        }

        function prevMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendar();
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendar();
        }

        function getMonthName(monthIndex) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return months[monthIndex];
        }
