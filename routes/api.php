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
Route::post('/signup', 'API\AuthController@signUp');
Route::post('/signin', 'API\AuthController@signIn');

Route::middleware('auth:api')->group(function () {
    Route::get('/user', 'API\UserController@find');
    Route::get('/transaction', 'API\TransactionController@findHistory');
    Route::post('/transaction', 'API\TransactionController@create');
});
