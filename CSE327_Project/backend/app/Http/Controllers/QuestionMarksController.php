<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\questionMarks;
use App\Http\Requests\StorequestionMarksRequest;
use App\Http\Requests\UpdatequestionMarksRequest;

class QuestionMarksController extends Controller
{
    public function store(Request $request)
    {
        $focusScore = questionMarks::create([
            'assignmentId' => $request->assignmentId,
            'studentId' => $request->studentId,
            'marks' => $request->marks,
            'partId' => $request->partId,
            'questionId' => $request->questionId,
            'type' => $request->type,
        ]);
        return response()->json([
            'status' => 200,
        ]);
    }
    public function show($assignmentId, $studentId){
        
        $result = questionMarks::where("assignmentId", "=", $assignmentId)->where("studentId", "=", $studentId)->get();
        return $result;
    }
}
