<?php

namespace App\Http\Controllers;

use App\Models\mcqQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoremcqQuestionRequest;
use App\Http\Requests\UpdatemcqQuestionRequest;

class McqQuestionController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'assignmentId' => 'required',
            'Question' => 'required',
            'firstOption' => 'required',
            'secondOption' => 'required',
            'thirdOption' => 'required',
            'fouthOption' => 'required',
            'Answer' => 'required',
            'partId' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()],422);
        }

        $assignment = mcqQuestion::create([
            'assignmentId' => $request->assignmentId,
            'Question' => $request->Question,
            'firstOption' => $request->firstOption,
            'secondOption' => $request->secondOption,
            'thirdOption' => $request->thirdOption,
            'fouthOption' => $request->fouthOption,
            'Answer' => $request->Answer,
            'partId' => $request->partId,
        ]);
        return response()->json([
            'status' => 200,
        ]);
    }

    public function show($assignmentId){
        
        $result = mcqQuestion::where("assignmentId", "=", $assignmentId)->get();
        return $result;
    }
}
