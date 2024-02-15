// Function to display the routine for the selected day
function displayRoutine() {
  const routineContainer = document.getElementById('routine');
  const daySelect = document.getElementById('daySelect');
  const selectedDay = daySelect.value;
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const selectedDayIndex = daysOfWeek.indexOf(selectedDay);

  if (selectedDayIndex !== -1) {
    const routines = {
      Monday: `
        <div class="day">
          <h2>${selectedDay}</h2>
          <div class="schedule">
            <p>10:50-12:30: Mentorship (Gr2:MC)</p>
            <p>12:30-1:20: Electronics/AR</p>
            <p>1:20-1:50: Break</p>
            <p>1:50-2:40: Object Orientation Programming (Java) / AM</p>
            <p>2:40-4:20: Probability and Statistics</p>
          </div>
        </div>
      `,
      Tuesday: `
        <div class="day">
          <h2>${selectedDay}</h2>
          <div class="schedule">
            <p>10:00-11:40: Environmental Science</p>
            <p>11:40-1:20: Object Orientation Programming (Java) / AM</p>
            <p>1:20-1:50: Break</p>
            <p>1:50-4:20: COA-lab/MC</p>
          </div>
        </div>
      `,
      Wednesday: `
        <div class="day">
          <h2>${selectedDay}</h2>
          <div class="schedule">
            <p>11:40-1:20: Electronics/AR</p>
            <p>1:20-1:50: Break</p>
            <p>1:50-4:20: Object Orientation Programming Lab (Java Lab) / (AM) - 7th floor</p>
          </div>
        </div>
      `,
      Thursday: `
        <div class="day">
          <h2>${selectedDay}</h2>
          <div class="schedule">
            <p>10:50-1:20: Scripting Lab (Python) / ZR-RC708</p>
            <p>1:20-1:50: Break</p>
            <p>1:50-2:40: Probability and Statistics</p>
            <p>2:40-4:20: COA (MC)</p>
          </div>
        </div>
      `,
      Friday: `
        <div class="day">
          <h2>${selectedDay}</h2>
          <div class="schedule">
            <p>11:40-12:30: COA / MC</p>
            <p>12:30-1:50: Break</p>
            <p>1:50-3:30: Biology for Engineering</p>
            <p>3:30-5:10: Mentorship (Gr1: TB + Gr3: ZS)</p>
          </div>
        </div>
      `,
      Saturday: `<p>${selectedDay} is a holiday.</p>`,
      Sunday: `<p>${selectedDay} is a holiday.</p>`
    };

    routineContainer.innerHTML = routines[selectedDay];
  } else {
    routineContainer.innerHTML = '<p>Please select a valid day.</p>';
  }
}
