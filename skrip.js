// Event pada saat klik link

$(".page-scroll").on("click",function(e) {

	// Ambil isi href
	var tujuan=$(this).attr("href");
	// Tangkap elemen yang bersangkutan
	var elementTujuan=$(tujuan);
	console.log(elementTujuan.offset().top);

	// Pindahkan scroll
	$('body').animate({
		scrollTop:elementTujuan.offset().top
	});
	

	e.preventDefault();
});