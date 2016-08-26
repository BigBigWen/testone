/****************/
var app=angular.module("myApp",["ng","ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/list",{
        templateUrl:"tpl/list.html",
        controller:"listCtr"
    }).when("/list/:path",{
        templateUrl:"tpl/list.html",
        controller:"listCtr"
    }).when("/detail",{
        templateUrl:"tpl/detail.html",
        controller:"detailCtr"
    }).when("/detail/:path",{
        templateUrl:"tpl/detail.html",
        controller:"detailCtr"
    }).otherwise({redirectTo:"/list"});
});
app.controller("parentCtrl",function($scope,$location){
    $location.jump=function(path){
        $location.path(path);
    }
}).controller("listCtr",function($scope){
    $scope.musicArray=[{"name":"music01.mp3","value":"Bandari - Conquest of Paradise - 纯音乐.mp3"},{"name":"music02.mp3","value":"D12 - How Come.mp3"},
        {"name":"music03.mp3","value":"Era - The Mass - 加长版.mp3"},{"name":"music01.mp4","value":"Maksim Mrvica - Exodus - 纯音乐版.mp3"},
        {"name":"music05.mp3","value":"Mark Petrie - Go Time - 纯音乐版.mp3"},{"name":"music06.mp3","value":"Martin Ermen - He Is A Pirate - 纯音乐版.mp3"},
        {"name":"music07.mp3","value":"Martin O'Donnell - Halo Theme Mjolnir Mix - 纯音乐版.mp3"},
        {"name":"music08.mp3","value":"Nightwish - She Is My Sin(伴奏版).mp3"},{"name":"music09.mp3","value":"Thomas Bergersen - Empire of Angels - 纯音乐版.mp3"},
        {"name":"music10.mp3","value":"TIMEZ - 那些我们一起恋过的青春.mp3"},{"name":"music11.mp3","value":"Two Steps From Hell - Victory - 纯音乐版.mp3"},
        {"name":"music12.mp3","value":"张杰 - 逆战.mp3"}];
}).controller("detailCtr",function($scope,$routeParams){
    $scope.path = '../music/' + $routeParams.path;
});
var count=0;
function flashTitle(){
    if(count==0)
    {
        count=1;
        document.title="==音乐空间==";
    }else
    {
        count=0;
        document.title="***音乐空间***";
    }
}
window.onload=function(){
    setInterval(flashTitle,300);
}