<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\RealEstateController;
use App\Http\Middleware\isAuthenticated;
use Illuminate\Support\Facades\Route;

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


//------- Auth Apis -------//
Route::prefix('auth')->group(function ()
{
    Route::post('login', [AuthController::class , 'login']);
});

Route::middleware([isAuthenticated::class])->group(function ()
{
    Route::apiResource('real_estate', RealEstateController::class);
});

Route::apiResource('real_estate', RealEstateController::class);
