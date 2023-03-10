<?php

use App\Models\focusScore;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\CohortController;
use App\Http\Controllers\PdfPartController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\taughtinController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\FocusScoreController;
use App\Http\Controllers\McqQuestionController;
use App\Http\Controllers\TextQuestionController;
use App\Http\Controllers\AudioQuestionController;
use App\Http\Controllers\QuestionMarksController;

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

Route::post('/assignments',[AssignmentController::class,'store']);
Route::get('/assignments/{cohortId}',[AssignmentController::class,'show']);
Route::get('/assignmentsCohortId/{assignmentId}',[AssignmentController::class,'getCohortId']);

Route::post('/pdfPart',[PdfPartController::class,'store']);
Route::get('/pdfPart/{assignmentId}',[PdfPartController::class,'show']);

Route::post('/Quiz',[QuizController::class,'store']);
Route::get('/Quiz/{assignmentId}',[QuizController::class,'show']);

Route::post('/textQuestion',[TextQuestionController::class,'store']);
Route::get('/textQuestion/{assignmentId}',[TextQuestionController::class,'show']);

Route::post('/audioQuestion',[AudioQuestionController::class,'store']);
Route::get('/audioQuestion/{assignmentId}',[AudioQuestionController::class,'show']);

Route::post('/mcqQuestion',[McqQuestionController::class,'store']);
Route::get('/mcqQuestion/{assignmentId}',[McqQuestionController::class,'show']);

Route::post('/focusScore',[FocusScoreController::class,'store']);
Route::get('/focusScore/{assignmentId}',[FocusScoreController::class,'show']);
Route::get('/focusScore/{assignmentId}/{studentId}',[FocusScoreController::class,'showAll']);

Route::post('/QuestionMarks',[QuestionMarksController::class,'store']);
Route::get('/QuestionMarks/{assignmentId}/{studentId}',[QuestionMarksController::class,'show']);

Route::post('/students',[StudentController::class,'store']);
Route::get('/students',[StudentController::class,'show']);
Route::get('/newStudents',[StudentController::class,'new']);

Route::post('/cohorts',[CohortController::class,'store']);
Route::post('/cohortsUpdate/{id}',[CohortController::class,'update']);
Route::get('/cohorts/{teacherId}',[CohortController::class,'ByTeacherId']);
Route::get('/cohortsCreate/{teacherId}',[CohortController::class,'nonSubCohort']);
Route::get('/cohortId/{cohortId}',[CohortController::class,'showCohortById']);
Route::get('/cohortId',[CohortController::class,'latestCohortId']);
Route::get('/cohortsTeacher/{cohortId}',[CohortController::class,'getTeacherId']);

Route::post('/taughtIn/{studentId}',[taughtinController::class,'add']);
Route::get('/taughtIn/{cohortId}',[taughtinController::class,'index']);
Route::get('/studentTaughtIn/{studentId}',[taughtinController::class,'studentIndex']);
