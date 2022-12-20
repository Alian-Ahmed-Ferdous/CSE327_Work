<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\audioQuestion;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreaudioQuestionRequest;
use App\Http\Requests\UpdateaudioQuestionRequest;

class AudioQuestionController extends Controller
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

        $assignment = audioQuestion::create([
            'assignmentId' => $request->assignmentId,
            'Question' => $request->Question,
            'Answer' => $request->Answer,
            'partId' => $request->partId,
        ]);
        return response()->json([
            'status' => 200,
        ]);
    }
}
