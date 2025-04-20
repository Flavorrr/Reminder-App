// Initialize the single ringtone
const alarmSound = new Audio('alarm.mp3');

// Function to add a new reminder
function addReminder(task, time) {
  const reminderList = document.getElementById('reminderList');
  const li = document.createElement('li');
  li.textContent = `${task} at ${time}`;

  // Edit button for modifying task/time
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newTask = prompt('Edit task:', task);
    const newTime = prompt('Edit time:', time);
    if (newTask && newTime) {
      li.textContent = `${newTask} at ${newTime}`;
      // Re-append the edit button after updating text
      li.appendChild(editBtn);
      // Update the reminder in your data structure if necessary
    }
  };

  li.appendChild(editBtn);
  reminderList.appendChild(li);
}

// Function to trigger the reminder (play ringtone & show modal)
function triggerReminder(task) {
  // Play the ringtone
  alarmSound.play();

  // Show a popup modal with the task info
  showModal(task);
}

// Show the modal with the task details
function showModal(task) {
  document.getElementById('modalText').textContent = `Reminder: ${task}`;
  document.getElementById('reminderModal').style.display = 'block';
}

// Close the modal when clicking the close button
document.getElementById('closeModal').onclick = function() {
  document.getElementById('reminderModal').style.display = 'none';
};

// Example of adding some reminders (You can replace this part with your form input logic)
addReminder('Finish Homework', '5:00 PM');
addReminder('Meeting with John', '6:00 PM');
