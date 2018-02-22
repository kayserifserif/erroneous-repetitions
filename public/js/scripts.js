// insert non-breaking space to avoid widows
// https://stackoverflow.com/a/21713327/2758936
$('.quote').each(function(i,d){
   $(d).html( $(d).text().replace(/\s(?=[^\s]*$)/g, "&nbsp;") )
});