/**
 * Created with JetBrains WebStorm.
 * User: toshiba
 * Date: 19/09/13
 * Time: 16:34
 * To change this template use File | Settings | File Templates.
 */

impress().init();

window.addEventListener('impress:stepenter', function() {
    $('#sejarah.active p.head-materi').addClass('animated swing');
});
window.addEventListener('impress:stepenter', function() {
    $('#sejarah.past p.head-materi').removeClass('animated swing');
});
window.addEventListener('impress:stepenter', function() {
    $('#sejarah.future p.head-materi').removeClass('animated swing');
});

window.addEventListener('impress:stepenter', function() {
    $('#visi.active p.head-materi').addClass('animated bounceInDown');
});
window.addEventListener('impress:stepenter', function() {
    $('#visi.past p.head-materi').removeClass('animated bounceInDown');
});
window.addEventListener('impress:stepenter', function() {
    $('#vis.future p.head-materi').removeClass('animated bounceInDown');
});

window.addEventListener('impress:stepenter', function() {
    $('#pengurus.active p.head-materi').addClass('animated rotateIn');
});
window.addEventListener('impress:stepenter', function() {
    $('#pengurus.past p.head-materi').removeClass('animated rotateIn');
});
window.addEventListener('impress:stepenter', function() {
    $('#pengurus.future p.head-materi').removeClass('animated rotateIn');
});

window.addEventListener('impress:stepenter', function() {
    $('#belajar.active p.head-materi').addClass('animated flipInX');
});
window.addEventListener('impress:stepenter', function() {
    $('#belajar.past p.head-materi').removeClass('animated flipInX');
});
window.addEventListener('impress:stepenter', function() {
    $('#belajar.future p.head-materi').removeClass('animated flipInX');
});

window.addEventListener('impress:stepenter', function() {
    $('#belajar_gbr.active p.head-materi').addClass('animated fadeIn');
});
window.addEventListener('impress:stepenter', function() {
    $('#belajar_gbr.past p.head-materi').removeClass('animated fadeIn');
});
window.addEventListener('impress:stepenter', function() {
    $('#belajar_gbr.future p.head-materi').removeClass('animated fadeIn');
});

window.addEventListener('impress:stepenter', function() {
    $('#meetup.active p.head-materi').addClass('animated flipInX');
});
window.addEventListener('impress:stepenter', function() {
    $('#meetup.past p.head-materi').removeClass('animated flipInX');
});
window.addEventListener('impress:stepenter', function() {
    $('#meetup.future p.head-materi').removeClass('animated flipInX');
});

window.addEventListener('impress:stepenter', function() {
    $('#meetup_gbr.active p.head-materi').addClass('animated fadeIn');
});
window.addEventListener('impress:stepenter', function() {
    $('#meetup_gbr.past p.head-materi').removeClass('animated fadeIn');
});
window.addEventListener('impress:stepenter', function() {
    $('#meetup_gbr.future p.head-materi').removeClass('animated fadeIn');
});

window.addEventListener('impress:stepenter', function() {
    $('#portofolio_isi.active p.head-materi').addClass('animated tada');
});
window.addEventListener('impress:stepenter', function() {
    $('#portofolio_isi.past p.head-materi').removeClass('animated tada');
});
window.addEventListener('impress:stepenter', function() {
    $('#portofolio_isi.future p.head-materi').removeClass('animated tada');
});

window.addEventListener('impress:stepenter', function() {
    $('#portofolio_gbr.active ul.baris_gbr').addClass('animated bounce');
});
window.addEventListener('impress:stepenter', function() {
    $('#portofolio_gbr.past ul.baris_gbr').removeClass('animated bounce');
});
window.addEventListener('impress:stepenter', function() {
    $('#portofolio_gbr.future ul.baris_gbr').removeClass('animated bounce');
});