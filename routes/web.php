<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Welcome', ["test" => "test"]);
});*/

Route::get('{any?}', function () {
    return view('welcome');
})->where('any', '.*');
