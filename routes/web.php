<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Short;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/h/top', function () {
    return view('welcome');
});

Route::get('/{url}', function ($url) {

    $check = Short::where('short_url', $url)->first() ?? abort(404);
    if($check){
        $check->view = $check->increment('views');
        $to = $check->url;
        return \Redirect::to($to, 302);
    }

});
