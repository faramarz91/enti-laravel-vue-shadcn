<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Welcome', ["test" => "test"]);
});*/




Route::group(['domain' => 'panel.'.env('APP_DOMAIN')], function () {
    Route::get('{any?}', function () {
        return view('dashboard');
    })->where('any', '.*');

});
Route::get('{any?}', function () {
    return view('welcome');
})->where('any', '.*');
