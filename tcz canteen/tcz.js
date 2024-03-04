
function calculateSum() {
    var iterms = document.getElementsByClassName('iterm');
    var sum = 0;

    for (var i = 0; i < iterms.length; i++) {
      if (iterms[i].checked) {
        sum += parseFloat(iterms[i].value);
      }
    }

    //console.log('Sum:', sum);
    document.getElementById('sum').textContent = 'Sum:      $' + sum.toFixed(2);
}
function resetTable() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
}