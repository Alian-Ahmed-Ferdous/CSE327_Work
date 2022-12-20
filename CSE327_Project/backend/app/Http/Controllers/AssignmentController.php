<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use Illuminate\Http\Request;
use App\Http\Requests\StoreAssignmentRequest;
use App\Http\Requests\UpdateAssignmentRequest;

class AssignmentController extends Controller
{
    public function store(Request $request)
    {
        $assignment = Assignment::create([
            'name' => $request->name,
            'description' => $request->description,
            'cohortId' => $request->cohortId,
            'startTime' => $request->startTime,
            'endTime' => $request->endTime
        ]);
        return response()->json([
            'status' => 200,
            'assignmentId' => $assignment->assignmentId,
        ]);
    }

    public function show($cohortId){
        
        $result = Assignment::where("cohortId", "=", $cohortId)->get();
        return $result;
    }

    public function getCohortId($assignmentId){
        $result = Assignment::select('cohortId')->where("assignmentId", "=", $assignmentId)->get();
        return response()->json([
            'status' => 200,
            'cohortId' => $result,
    ]);
    }
}
