<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Authentication
Route::post('/signup', 'Api\AuthController@signUp');
Route::post('/signin', 'Api\AuthController@signIn');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
