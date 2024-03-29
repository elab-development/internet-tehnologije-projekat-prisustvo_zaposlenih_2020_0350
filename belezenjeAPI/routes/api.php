<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post("/login", "App\Http\Controllers\UserAuthController@login");
Route::post("/register", "App\Http\Controllers\UserAuthController@register");

Route::resource('/dogadjaji', 'App\Http\Controllers\DogadjajController')->only([
    'index', 'show'
]);

Route::resource('/prisustva', 'App\Http\Controllers\PrisustvaController')->only([
    'index', 'show',
]);

Route::resource('/ocene', 'App\Http\Controllers\OceneController')->only([
    'index', 'show'
]);

Route::get('/paginacija', 'App\Http\Controllers\PrisustvaController@paginatePrisustva');
Route::get('/pretraga-po-useru', 'App\Http\Controllers\PrisustvaController@findByUser');
Route::get('/pretraga-po-dogadjaju', 'App\Http\Controllers\PrisustvaController@findByDogadjaj');
Route::get('/ocena-ukupno', 'App\Http\Controllers\PrisustvaController@groupPrisustvaByOcena');
Route::get('/pretraga-po-oceni', 'App\Http\Controllers\PrisustvaController@findByOcena');

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::resource('/dogadjaji', 'App\Http\Controllers\DogadjajController')->only([
        'store', 'update', 'destroy'
    ]);

    Route::resource('/prisustva', 'App\Http\Controllers\PrisustvaController')->only([
        'store', 'update', 'destroy'
    ]);

    Route::post("/ocene", "App\Http\Controllers\OceneController@store");
    Route::put("/ocene/{id}", "App\Http\Controllers\OceneController@update");
    Route::delete("/ocene/{id}", "App\Http\Controllers\OceneController@destroy");

    Route::post("/logout", "App\Http\Controllers\UserAuthController@logout");
});
