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
        $result = Assignment::insert([
            'name' => $request->name,
            'description' => $request->description,
            'pdfId' => 0,
            'cohortId' => $request->cohortId,
            'startTime' => $request->startTime,
            'endTime' => $request->endTime
        ]);
        if($result==true){
            return "successfully stored";
        }
        else{
            return "failed stored";
        }
    }

    public function show($cohortId){
        
        $result = Assignment::where("cohortId", "=", $cohortId)->get();
        return $result;
    }
}
