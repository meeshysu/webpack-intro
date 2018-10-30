import $ from 'jquery';
import 'bootstrap';

import './index.scss';

$('#shutUpJasmine').on('click', () => {
  $('#textHere').append('<p>Hello World! Glad you came out of the basement.</p>');
});
