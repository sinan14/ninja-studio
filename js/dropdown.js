document.addEventListener('DOMContentLoaded', function () {
  var dropdownBtn = document.getElementById('dropdownBtn');
  var dropdownContent = document.getElementById('dropdown-content');

  dropdownBtn.addEventListener('click', function () {
    dropdownContent.style.display = 'block';
  });

  document.addEventListener('click', function (event) {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.style.display = 'none';
    }
  });
});
