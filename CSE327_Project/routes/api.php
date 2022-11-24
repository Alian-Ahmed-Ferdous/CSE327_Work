<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CohortController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/teachers',[TeacherController::class,'store']);
Route::get('/teachers',[TeacherController::class,'show']);

Route::post('/students',[StudentController::class,'store']);
Route::get('/students',[StudentController::class,'show']);

Route::post('/cohorts',[CohortController::class,'store']);
Route::get('/cohorts',[CohortController::class,'show']);

