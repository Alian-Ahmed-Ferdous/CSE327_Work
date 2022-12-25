<?php

namespace App\Http\Controllers;

use App\Models\focusScore;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StorefocusScoreRequest;
use App\Http\Requests\UpdatefocusScoreRequest;

class FocusScoreController extends Controller
{
    public function store(Request $request)
    {
        $focusScore = focusScore::create([
            'assignmentId' => $request->assignmentId,
            'studentId' => $request->studentId,
            'score' => $request->score,
            'partId' => $request->partId,
        ]);
        return response()->json([
            'status' => 200,
        ]);
    }
    public function show($assignmentId){
        
        $result = DB::table('focus_scores')
        ->join('students', 'focus_scores.studentId', '=', 'students.studentId')
        ->select('students.firstName', 'students.studentId')->distinct()
        ->get();
        return $result;
    }

    public function showAll($assignmentId, $studentId){
        
        $result = focusScore::where("assignmentId", "=", $assignmentId)->where("studentId", "=", $studentId)->get();
        return $result;
    }
}
