<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function store(Request $request)
    {
        $assignment = Quiz::create([
            'name' => $request->name,
            'description' => $request->description,
            'assignmentId' => $request->assignmentId,
            'startTime' => $request->startTime,
            'endTime' => $request->endTime
        ]);
        return response()->json([
            'status' => 200,
        ]);
    }

    public function show($assignmentId){
        
        $result = Quiz::where("assignmentId", "=", $assignmentId)->get();
        return $result;
    }
}
