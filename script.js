document.addEventListener('DOMContentLoaded', function() {
    const gradeCells = document.querySelectorAll('.grade-cell');
  
    gradeCells.forEach(cell => {
      cell.addEventListener('click', function() {
        
        gradeCells.forEach(cell => cell.classList.remove('selected'));
  
        
        this.classList.add('selected');
  
        
        const gradePopup = document.createElement('div');
        gradePopup.className = 'grade-popup';
        gradePopup.innerHTML = `
          <label for="grade">Оценка:</label>
          <select id="grade" name="grade">
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="Н">Н</option>
          </select>
          <button onclick="submitGrade()">OK</button>
        `;
        document.body.appendChild(gradePopup);
      });
    });
  });
  
  function submitGrade() {
    const selectedCell = document.querySelector('.selected');
    const gradeSelect = document.getElementById('grade');
    const selectedGrade = gradeSelect.value;
  
    
    if (isValidGrade(selectedGrade)) {
      selectedCell.textContent = selectedGrade;
  
      
      const gradePopup = document.querySelector('.grade-popup');
      gradePopup.parentNode.removeChild(gradePopup);
    } 
  }
  
  function isValidGrade(grade) {
    return ['2', '3', '4', '5', 'Н'].includes(grade);
  }