// задание 5

$('.test').css('color', 'red');
$('h2.test').css('color', 'red');
$('p + p').css('color', 'red');
$('li.www + li').css('color', 'red');
$('h2 i').css('color', 'red');
$('h2 > i').css('color', 'red');

// задание 6
$('h2:not(.test)').css('color', 'red');
$(':header:not(.test)').css('color', 'red');
$(':header + :header').css('color', 'red');
$(':header.test + :header.test').css('color', 'red');