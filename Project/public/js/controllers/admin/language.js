var app=angular.module('pa-language', [])
app.run(function($http,$rootScope){
	console.log('hello language');
	if(sessionStorage.token!=undefined&&sessionStorage.token!=null)
	{
		$http.get('/api/getuser?token='+sessionStorage.token).then(function(res){
			$rootScope.user=res.data;
		}, function(err){
			window.location.href='/admin/login';
		});
	}
	else
	{
		window.location.href='/admin/login';
	}
});
app.controller('language', function(){
	
})
angular.element(document).ready(function(){
  $('.loading').fadeOut('slow');
});