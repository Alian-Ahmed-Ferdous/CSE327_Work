<?php

namespace App\Http\Controllers;

use App\Models\textQuestion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoretextQuestionRequest;
use App\Http\Requests\UpdatetextQuestionRequest;

class TextQuestionController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'assignmentId' => 'required',
            'Question' => 'required',
            'Answer' => 'required',
            'partId' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()],422);
        }

        $assignment = textQuestion::create([
            'assignmentId' => $request->assignmentId,
            'Question' => $request->Question,
            'Answer' => $request->Answer,
            'partId' => $request->partId,
        ]);
        return response()->json([
            'status' => 200,
        ]);
    }

    public function show($assignmentId){
        
        $result = textQuestion::where("assignmentId", "=", $assignmentId)->get();
        return $result;
    }
}
