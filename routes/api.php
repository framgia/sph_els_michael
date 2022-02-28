<?php

use Illuminate\Http\Request;
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

Route::prefix('v1')->group(function () {
    // Auth routes
    Route::post('sign-in', [\App\Http\Controllers\Api\AuthController::class, 'login']);
    Route::post('sign-up', [\App\Http\Controllers\Api\AuthController::class, 'register']);
    Route::post('{user}/sign-out', [\App\Http\Controllers\Api\AuthController::class, 'logout']);

    Route::middleware('auth:sanctum')->group(function () {
        // Category routes
        Route::prefix('categories')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\CategoryController::class, 'index']);
            Route::post('/store', [\App\Http\Controllers\Api\CategoryController::class, 'store']);
            Route::put('/{category}/update', [\App\Http\Controllers\Api\CategoryController::class, 'update']);
            Route::delete('/{category}/delete', [\App\Http\Controllers\Api\CategoryController::class, 'destroy']);
        });
        // Word routes
        Route::prefix('words')->group(function () {
            Route::get('/', [\App\Http\Controllers\Api\WordController::class, 'index']);
            Route::get('/{category_id}/show', [\App\Http\Controllers\Api\WordController::class, 'show']);
            Route::post('/store', [\App\Http\Controllers\Api\WordController::class, 'store']);
            Route::put('/{word}/update', [\App\Http\Controllers\Api\WordController::class, 'update']);
            Route::delete('/{word}/delete', [\App\Http\Controllers\Api\WordController::class, 'destroy']);
        });
    });
});
